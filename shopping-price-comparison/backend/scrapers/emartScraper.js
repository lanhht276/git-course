const axios = require("axios");
const cheerio = require("cheerio");

const BASE_URL = "https://emart.com.vn";
const SEARCH_URL = `${BASE_URL}/tim-kiem`;

async function searchProduct(keyword) {
  try {
    const response = await axios.get(SEARCH_URL, {
      params: { q: keyword },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15",
        Accept: "text/html,application/xhtml+xml",
        "Accept-Language": "vi-VN,vi;q=0.9",
      },
      timeout: 10000,
    });

    const $ = cheerio.load(response.data);
    const products = [];

    $(".product-item, .product-card, [class*='product']")
      .slice(0, 5)
      .each((_, el) => {
        const name =
          $(el).find(".product-name, .product-title, h3, h4").first().text().trim() || "";
        const priceText =
          $(el)
            .find(".product-price, .price, [class*='price']")
            .first()
            .text()
            .trim() || "";
        const salePriceText =
          $(el)
            .find(".sale-price, .discount-price, [class*='sale'], [class*='discount']")
            .first()
            .text()
            .trim() || "";
        const image =
          $(el).find("img").first().attr("src") ||
          $(el).find("img").first().attr("data-src") ||
          "";

        const price = parsePrice(priceText);
        const salePrice = parsePrice(salePriceText);

        if (name && price > 0) {
          products.push({
            name,
            price,
            salePrice: salePrice > 0 && salePrice < price ? salePrice : null,
            hasPromotion: salePrice > 0 && salePrice < price,
            image: image.startsWith("http") ? image : `${BASE_URL}${image}`,
            store: "Emart",
          });
        }
      });

    return products;
  } catch (error) {
    console.error(`[Emart] Error searching "${keyword}":`, error.message);
    return [];
  }
}

function parsePrice(text) {
  if (!text) return 0;
  const cleaned = text.replace(/[^\d]/g, "");
  return cleaned ? parseInt(cleaned, 10) : 0;
}

module.exports = { searchProduct };
