const http = require("http");

const BASE = `http://localhost:${process.env.TEST_PORT || 3001}`;
let passed = 0;
let failed = 0;

function request(method, path, body) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE);
    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      method,
      headers: { "Content-Type": "application/json" },
    };
    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });
    req.on("error", reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

function assert(testName, condition, detail) {
  if (condition) {
    console.log(`  PASS: ${testName}`);
    passed++;
  } else {
    console.log(`  FAIL: ${testName} -- ${detail || ""}`);
    failed++;
  }
}

async function runTests() {
  console.log("\n========================================");
  console.log("  Shopping Price Comparison - Tests");
  console.log("========================================\n");

  // --- Test 1: Health check ---
  console.log("[1] Health Check");
  const health = await request("GET", "/api/health");
  assert("Status 200", health.status === 200);
  assert("Has status ok", health.body.status === "ok");
  assert("Has timestamp", !!health.body.timestamp);

  // --- Test 2: Search single product ---
  console.log("\n[2] Search single product: 'sua tuoi'");
  const search = await request("GET", "/api/search?keyword=sua%20tuoi");
  assert("Status 200", search.status === 200);
  assert("Has keyword", search.body.keyword === "sua tuoi");
  assert("Co.op Mart has results", search.body.results.coopmart.length > 0, `Got ${search.body.results.coopmart.length}`);
  assert("Emart has results", search.body.results.emart.length > 0);
  assert("Big C has results", search.body.results.bigc.length > 0);
  assert("Product has name", !!search.body.results.coopmart[0].name);
  assert("Product has price > 0", search.body.results.coopmart[0].price > 0);
  assert("Product has store field", search.body.results.coopmart[0].store === "Co.op Mart");

  // --- Test 3: Search missing keyword ---
  console.log("\n[3] Search without keyword (validation)");
  const noKeyword = await request("GET", "/api/search");
  assert("Status 400", noKeyword.status === 400);
  assert("Has error message", !!noKeyword.body.error);

  // --- Test 4: Compare multiple products ---
  console.log("\n[4] Compare multiple products: ['sua tuoi', 'gao', 'trung ga']");
  const compare = await request("POST", "/api/compare", {
    items: ["sua tuoi", "gao", "trung ga"],
  });
  assert("Status 200", compare.status === 200);
  assert("Has 3 comparisons", compare.body.comparisons.length === 3, `Got ${compare.body.comparisons.length}`);
  assert("Has totals", !!compare.body.totals);
  assert("Has cheapestOverall", !!compare.body.cheapestOverall);

  // Check each comparison
  for (const comp of compare.body.comparisons) {
    assert(
      `'${comp.searchTerm}' has 3 store prices`,
      comp.prices.length === 3,
      `Got ${comp.prices.length}`
    );
    assert(
      `'${comp.searchTerm}' has cheapestStore`,
      !!comp.cheapestStore,
      `Got ${comp.cheapestStore}`
    );
  }

  // Check totals structure
  const totals = compare.body.totals;
  assert("Totals has perStore", !!totals.perStore);
  assert("Totals has Co.op Mart", !!totals.perStore["Co.op Mart"]);
  assert("Totals has Emart", !!totals.perStore["Emart"]);
  assert("Totals has Big C", !!totals.perStore["Big C"]);
  assert("Co.op Mart total > 0", totals.perStore["Co.op Mart"].total > 0);
  assert("Emart total > 0", totals.perStore["Emart"].total > 0);
  assert("Big C total > 0", totals.perStore["Big C"].total > 0);

  // --- Test 5: Compare with empty items (validation) ---
  console.log("\n[5] Compare with empty items (validation)");
  const emptyCompare = await request("POST", "/api/compare", { items: [] });
  assert("Status 400", emptyCompare.status === 400);
  assert("Has error message", !!emptyCompare.body.error);

  // --- Test 6: Compare with no body (validation) ---
  console.log("\n[6] Compare with no body (validation)");
  const noBody = await request("POST", "/api/compare", {});
  assert("Status 400", noBody.status === 400);

  // --- Test 7: Promotion detection ---
  console.log("\n[7] Promotion detection");
  const promoSearch = await request("GET", "/api/search?keyword=sua%20tuoi");
  const allProducts = [
    ...promoSearch.body.results.coopmart,
    ...promoSearch.body.results.emart,
    ...promoSearch.body.results.bigc,
  ];
  const promoProducts = allProducts.filter((p) => p.hasPromotion);
  assert("Some products have promotions", promoProducts.length > 0, `Found ${promoProducts.length} promo items`);
  for (const p of promoProducts) {
    assert(
      `'${p.name}' (${p.store}) salePrice < price`,
      p.salePrice < p.price,
      `sale=${p.salePrice} price=${p.price}`
    );
  }

  // --- Test 8: Cheapest store logic ---
  console.log("\n[8] Cheapest store logic for single item");
  const singleCompare = await request("POST", "/api/compare", {
    items: ["sua tuoi"],
  });
  const suaComp = singleCompare.body.comparisons[0];
  const storePrices = suaComp.prices
    .filter((p) => p.product)
    .map((p) => ({
      store: p.store,
      effective: p.product.salePrice || p.product.price,
    }));
  const actualCheapest = storePrices.reduce((min, cur) =>
    cur.effective < min.effective ? cur : min
  );
  assert(
    "Cheapest store is correct",
    suaComp.cheapestStore === actualCheapest.store,
    `Expected ${actualCheapest.store}, got ${suaComp.cheapestStore}`
  );

  // --- Test 9: Large basket comparison ---
  console.log("\n[9] Large basket: 5 items");
  const bigCompare = await request("POST", "/api/compare", {
    items: ["sua tuoi", "gao", "trung ga", "dau an", "mi goi"],
  });
  assert("Status 200", bigCompare.status === 200);
  assert("Has 5 comparisons", bigCompare.body.comparisons.length === 5);
  assert("All items found in all stores",
    bigCompare.body.totals.perStore["Co.op Mart"].itemsFound === 5 &&
    bigCompare.body.totals.perStore["Emart"].itemsFound === 5 &&
    bigCompare.body.totals.perStore["Big C"].itemsFound === 5,
    `CoopMart=${bigCompare.body.totals.perStore["Co.op Mart"].itemsFound}, Emart=${bigCompare.body.totals.perStore["Emart"].itemsFound}, BigC=${bigCompare.body.totals.perStore["Big C"].itemsFound}`
  );

  // --- Test 10: Partial match search ---
  console.log("\n[10] Partial match search: 'vinamilk'");
  const partial = await request("GET", "/api/search?keyword=vinamilk");
  const totalPartial = partial.body.results.coopmart.length +
    partial.body.results.emart.length + partial.body.results.bigc.length;
  assert("Found results by product name", totalPartial > 0, `Found ${totalPartial} items`);

  // --- Test 11: Vietnamese diacritics search ---
  console.log("\n[11] Vietnamese diacritics search");
  const vietSearch = await request("GET", "/api/search?keyword=" + encodeURIComponent("sữa tươi"));
  assert("Status 200", vietSearch.status === 200);
  assert("Found with diacritics", vietSearch.body.results.coopmart.length > 0, `Got ${vietSearch.body.results.coopmart.length}`);

  // --- Test 12: New products ---
  console.log("\n[12] New products: thịt heo, rau củ, đường");
  const newCompare = await request("POST", "/api/compare", {
    items: ["thit heo", "rau cu", "duong"],
  });
  assert("Status 200", newCompare.status === 200);
  assert("Has 3 comparisons", newCompare.body.comparisons.length === 3);
  for (const comp of newCompare.body.comparisons) {
    assert(`'${comp.searchTerm}' found`, !!comp.cheapestStore, `cheapest=${comp.cheapestStore}`);
  }

  // --- Summary ---
  console.log("\n========================================");
  console.log(`  RESULTS: ${passed} passed, ${failed} failed`);
  console.log("========================================\n");

  process.exit(failed > 0 ? 1 : 0);
}

runTests().catch((err) => {
  console.error("Test runner error:", err.message);
  process.exit(1);
});
