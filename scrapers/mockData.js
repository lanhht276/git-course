// Mock data simulating real supermarket search results
// Used when USE_MOCK=true or when scrapers can't reach live sites

const MOCK_CATALOG = {
  "Co.op Mart": {
    "sua tuoi": [
      { name: "Sua tuoi tiet trung Vinamilk 1L", price: 32000, salePrice: 28500, hasPromotion: true, image: "", store: "Co.op Mart" },
      { name: "Sua tuoi TH True Milk 1L", price: 35000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "gao": [
      { name: "Gao ST25 tui 5kg", price: 135000, salePrice: 119000, hasPromotion: true, image: "", store: "Co.op Mart" },
      { name: "Gao Jasmine tui 5kg", price: 95000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "trung ga": [
      { name: "Trung ga CP 10 qua", price: 35000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "dau an": [
      { name: "Dau an Neptune 1L", price: 42000, salePrice: 38000, hasPromotion: true, image: "", store: "Co.op Mart" },
      { name: "Dau an Simply 1L", price: 45000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "mi goi": [
      { name: "Mi Hao Hao thung 30 goi", price: 105000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
      { name: "Mi 3 Mien thung 30 goi", price: 95000, salePrice: 85000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "nuoc mam": [
      { name: "Nuoc mam Nam Ngu 500ml", price: 28000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "bia": [
      { name: "Bia Saigon Special thung 24 lon", price: 289000, salePrice: 265000, hasPromotion: true, image: "", store: "Co.op Mart" },
      { name: "Bia Tiger thung 24 lon", price: 319000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "nuoc ngot": [
      { name: "Coca Cola thung 24 lon", price: 195000, salePrice: 175000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "bot giat": [
      { name: "Bot giat OMO 4.5kg", price: 155000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "giay ve sinh": [
      { name: "Giay ve sinh Pulppy 12 cuon", price: 65000, salePrice: 58000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
  },
  Emart: {
    "sua tuoi": [
      { name: "Sua tuoi tiet trung Vinamilk 1L", price: 33000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Sua tuoi TH True Milk 1L", price: 34000, salePrice: 31000, hasPromotion: true, image: "", store: "Emart" },
    ],
    "gao": [
      { name: "Gao ST25 tui 5kg", price: 139000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Gao Jasmine tui 5kg", price: 92000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "trung ga": [
      { name: "Trung ga CP 10 qua", price: 33000, salePrice: 29900, hasPromotion: true, image: "", store: "Emart" },
    ],
    "dau an": [
      { name: "Dau an Neptune 1L", price: 44000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Dau an Simply 1L", price: 43000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "mi goi": [
      { name: "Mi Hao Hao thung 30 goi", price: 102000, salePrice: 92000, hasPromotion: true, image: "", store: "Emart" },
    ],
    "nuoc mam": [
      { name: "Nuoc mam Nam Ngu 500ml", price: 27000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "bia": [
      { name: "Bia Saigon Special thung 24 lon", price: 295000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Bia Tiger thung 24 lon", price: 315000, salePrice: 289000, hasPromotion: true, image: "", store: "Emart" },
    ],
    "nuoc ngot": [
      { name: "Coca Cola thung 24 lon", price: 198000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "bot giat": [
      { name: "Bot giat OMO 4.5kg", price: 149000, salePrice: 139000, hasPromotion: true, image: "", store: "Emart" },
    ],
    "giay ve sinh": [
      { name: "Giay ve sinh Pulppy 12 cuon", price: 62000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
  },
  "Big C": {
    "sua tuoi": [
      { name: "Sua tuoi tiet trung Vinamilk 1L", price: 31000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Sua tuoi TH True Milk 1L", price: 36000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "gao": [
      { name: "Gao ST25 tui 5kg", price: 132000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Gao Jasmine tui 5kg", price: 98000, salePrice: 89000, hasPromotion: true, image: "", store: "Big C" },
    ],
    "trung ga": [
      { name: "Trung ga CP 10 qua", price: 34000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "dau an": [
      { name: "Dau an Neptune 1L", price: 41000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "mi goi": [
      { name: "Mi Hao Hao thung 30 goi", price: 108000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Mi 3 Mien thung 30 goi", price: 92000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "nuoc mam": [
      { name: "Nuoc mam Nam Ngu 500ml", price: 29500, salePrice: 25000, hasPromotion: true, image: "", store: "Big C" },
    ],
    "bia": [
      { name: "Bia Saigon Special thung 24 lon", price: 285000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Bia Tiger thung 24 lon", price: 322000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "nuoc ngot": [
      { name: "Coca Cola thung 24 lon", price: 192000, salePrice: 179000, hasPromotion: true, image: "", store: "Big C" },
    ],
    "bot giat": [
      { name: "Bot giat OMO 4.5kg", price: 158000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "giay ve sinh": [
      { name: "Giay ve sinh Pulppy 12 cuon", price: 68000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
  },
};

function searchMock(store, keyword) {
  const catalog = MOCK_CATALOG[store] || {};
  const normalizedKeyword = keyword.toLowerCase().trim();

  // Exact match first
  if (catalog[normalizedKeyword]) {
    return catalog[normalizedKeyword];
  }

  // Partial match - search across all product keys
  const results = [];
  for (const [key, products] of Object.entries(catalog)) {
    if (
      key.includes(normalizedKeyword) ||
      normalizedKeyword.includes(key)
    ) {
      results.push(...products);
    }
  }

  // Also search by product name
  if (results.length === 0) {
    for (const products of Object.values(catalog)) {
      for (const product of products) {
        if (product.name.toLowerCase().includes(normalizedKeyword)) {
          results.push(product);
        }
      }
    }
  }

  return results;
}

module.exports = { searchMock, MOCK_CATALOG };
