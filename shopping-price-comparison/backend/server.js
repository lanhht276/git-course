const express = require("express");
const cors = require("cors");
const coopmartScraper = require("./scrapers/coopmartScraper");
const emartScraper = require("./scrapers/emartScraper");
const bigcScraper = require("./scrapers/bigcScraper");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Compare prices for a single product
app.get("/api/search", async (req, res) => {
  const { keyword } = req.query;

  if (!keyword) {
    return res.status(400).json({ error: "keyword is required" });
  }

  try {
    const [coopResults, emartResults, bigcResults] = await Promise.allSettled([
      coopmartScraper.searchProduct(keyword),
      emartScraper.searchProduct(keyword),
      bigcScraper.searchProduct(keyword),
    ]);

    res.json({
      keyword,
      results: {
        coopmmart: coopResults.status === "fulfilled" ? coopResults.value : [],
        emart: emartResults.status === "fulfilled" ? emartResults.value : [],
        bigc: bigcResults.status === "fulfilled" ? bigcResults.value : [],
      },
    });
  } catch (error) {
    console.error("Search error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Compare prices for multiple products (main endpoint)
app.post("/api/compare", async (req, res) => {
  const { items } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "items array is required" });
  }

  try {
    const comparisons = await Promise.all(
      items.map(async (item) => {
        const [coopResults, emartResults, bigcResults] =
          await Promise.allSettled([
            coopmartScraper.searchProduct(item),
            emartScraper.searchProduct(item),
            bigcScraper.searchProduct(item),
          ]);

        const coopBest = getBestProduct(
          coopResults.status === "fulfilled" ? coopResults.value : []
        );
        const emartBest = getBestProduct(
          emartResults.status === "fulfilled" ? emartResults.value : []
        );
        const bigcBest = getBestProduct(
          bigcResults.status === "fulfilled" ? bigcResults.value : []
        );

        const prices = [
          { store: "Co.op Mart", product: coopBest },
          { store: "Emart", product: emartBest },
          { store: "Big C", product: bigcBest },
        ];

        const cheapest = findCheapest(prices);

        return {
          searchTerm: item,
          prices,
          cheapestStore: cheapest ? cheapest.store : null,
        };
      })
    );

    // Calculate totals per store
    const totals = calculateTotals(comparisons);

    res.json({
      comparisons,
      totals,
      cheapestOverall: totals.cheapestStore,
    });
  } catch (error) {
    console.error("Compare error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get the best (cheapest) product from search results
function getBestProduct(products) {
  if (!products || products.length === 0) return null;

  return products.reduce((best, current) => {
    const currentPrice = current.salePrice || current.price;
    const bestPrice = best.salePrice || best.price;
    return currentPrice < bestPrice ? current : best;
  });
}

// Find cheapest among stores for a single item
function findCheapest(prices) {
  const available = prices.filter((p) => p.product !== null);
  if (available.length === 0) return null;

  return available.reduce((cheapest, current) => {
    const currentPrice =
      current.product.salePrice || current.product.price;
    const cheapestPrice =
      cheapest.product.salePrice || cheapest.product.price;
    return currentPrice < cheapestPrice ? current : cheapest;
  });
}

// Calculate total prices per store
function calculateTotals(comparisons) {
  const stores = ["Co.op Mart", "Emart", "Big C"];
  const totals = {};

  stores.forEach((store) => {
    let total = 0;
    let itemCount = 0;

    comparisons.forEach((comp) => {
      const storePrice = comp.prices.find((p) => p.store === store);
      if (storePrice && storePrice.product) {
        total += storePrice.product.salePrice || storePrice.product.price;
        itemCount++;
      }
    });

    totals[store] = {
      total,
      itemsFound: itemCount,
      itemsTotal: comparisons.length,
    };
  });

  // Find cheapest overall store
  const cheapestStore = Object.entries(totals).reduce(
    (cheapest, [store, data]) => {
      if (data.itemsFound === 0) return cheapest;
      if (!cheapest || data.total < cheapest.total) {
        return { store, ...data };
      }
      return cheapest;
    },
    null
  );

  return { perStore: totals, cheapestStore: cheapestStore?.store || null };
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("Endpoints:");
  console.log("  GET  /api/health   - Health check");
  console.log("  GET  /api/search   - Search single product");
  console.log("  POST /api/compare  - Compare multiple products");
});
