// Mock data - giá tham khảo tháng 4/2026
// Dùng khi USE_MOCK !== "false"

const MOCK_CATALOG = {
  "Co.op Mart": {
    "sữa tươi": [
      { name: "Sữa tươi tiệt trùng Vinamilk 1L", price: 32000, salePrice: 28500, hasPromotion: true, image: "", store: "Co.op Mart" },
      { name: "Sữa tươi TH True Milk 1L", price: 35000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "gạo": [
      { name: "Gạo ST25 túi 5kg", price: 175000, salePrice: 155000, hasPromotion: true, image: "", store: "Co.op Mart" },
      { name: "Gạo Jasmine túi 5kg", price: 115000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "trứng gà": [
      { name: "Trứng gà CP 10 quả", price: 36000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "dầu ăn": [
      { name: "Dầu ăn Neptune 1L", price: 52000, salePrice: 45900, hasPromotion: true, image: "", store: "Co.op Mart" },
      { name: "Dầu ăn Simply 1L", price: 56000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "mì gói": [
      { name: "Mì Hảo Hảo thùng 30 gói", price: 120000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
      { name: "Mì 3 Miền thùng 30 gói", price: 108000, salePrice: 95000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "nước mắm": [
      { name: "Nước mắm Nam Ngư 500ml", price: 32000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
      { name: "Nước mắm Chinsu 500ml", price: 28000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "bia": [
      { name: "Bia Saigon Special thùng 24 lon", price: 310000, salePrice: 279000, hasPromotion: true, image: "", store: "Co.op Mart" },
      { name: "Bia Tiger thùng 24 lon", price: 345000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "nước ngọt": [
      { name: "Coca Cola thùng 24 lon", price: 215000, salePrice: 189000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "bột giặt": [
      { name: "Bột giặt OMO 4.5kg", price: 172000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "giấy vệ sinh": [
      { name: "Giấy vệ sinh Pulppy 12 cuộn", price: 72000, salePrice: 63000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "thịt heo": [
      { name: "Thịt ba rọi heo 1kg", price: 135000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
      { name: "Sườn non heo 1kg", price: 165000, salePrice: 149000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "rau củ": [
      { name: "Rau muống bó 500g", price: 12000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
      { name: "Cà chua 1kg", price: 25000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "nước tương": [
      { name: "Nước tương Maggi 700ml", price: 32000, salePrice: 27000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "đường": [
      { name: "Đường Biên Hòa 1kg", price: 25000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
  },
  Emart: {
    "sữa tươi": [
      { name: "Sữa tươi tiệt trùng Vinamilk 1L", price: 33500, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Sữa tươi TH True Milk 1L", price: 34500, salePrice: 30900, hasPromotion: true, image: "", store: "Emart" },
    ],
    "gạo": [
      { name: "Gạo ST25 túi 5kg", price: 179000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Gạo Jasmine túi 5kg", price: 109000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "trứng gà": [
      { name: "Trứng gà CP 10 quả", price: 34000, salePrice: 29900, hasPromotion: true, image: "", store: "Emart" },
    ],
    "dầu ăn": [
      { name: "Dầu ăn Neptune 1L", price: 54000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Dầu ăn Simply 1L", price: 53000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "mì gói": [
      { name: "Mì Hảo Hảo thùng 30 gói", price: 118000, salePrice: 105000, hasPromotion: true, image: "", store: "Emart" },
    ],
    "nước mắm": [
      { name: "Nước mắm Nam Ngư 500ml", price: 30000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Nước mắm Chinsu 500ml", price: 29000, salePrice: 25000, hasPromotion: true, image: "", store: "Emart" },
    ],
    "bia": [
      { name: "Bia Saigon Special thùng 24 lon", price: 315000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Bia Tiger thùng 24 lon", price: 339000, salePrice: 309000, hasPromotion: true, image: "", store: "Emart" },
    ],
    "nước ngọt": [
      { name: "Coca Cola thùng 24 lon", price: 219000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "bột giặt": [
      { name: "Bột giặt OMO 4.5kg", price: 165000, salePrice: 149000, hasPromotion: true, image: "", store: "Emart" },
    ],
    "giấy vệ sinh": [
      { name: "Giấy vệ sinh Pulppy 12 cuộn", price: 69000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "thịt heo": [
      { name: "Thịt ba rọi heo 1kg", price: 129000, salePrice: 119000, hasPromotion: true, image: "", store: "Emart" },
      { name: "Sườn non heo 1kg", price: 159000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "rau củ": [
      { name: "Rau muống bó 500g", price: 10000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Cà chua 1kg", price: 28000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "nước tương": [
      { name: "Nước tương Maggi 700ml", price: 33000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "đường": [
      { name: "Đường Biên Hòa 1kg", price: 24000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
  },
  "Big C": {
    "sữa tươi": [
      { name: "Sữa tươi tiệt trùng Vinamilk 1L", price: 31500, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Sữa tươi TH True Milk 1L", price: 36500, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "gạo": [
      { name: "Gạo ST25 túi 5kg", price: 169000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Gạo Jasmine túi 5kg", price: 112000, salePrice: 99000, hasPromotion: true, image: "", store: "Big C" },
    ],
    "trứng gà": [
      { name: "Trứng gà CP 10 quả", price: 35000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "dầu ăn": [
      { name: "Dầu ăn Neptune 1L", price: 50000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "mì gói": [
      { name: "Mì Hảo Hảo thùng 30 gói", price: 122000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Mì 3 Miền thùng 30 gói", price: 105000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "nước mắm": [
      { name: "Nước mắm Nam Ngư 500ml", price: 33000, salePrice: 27500, hasPromotion: true, image: "", store: "Big C" },
      { name: "Nước mắm Chinsu 500ml", price: 27000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "bia": [
      { name: "Bia Saigon Special thùng 24 lon", price: 305000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Bia Tiger thùng 24 lon", price: 348000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "nước ngọt": [
      { name: "Coca Cola thùng 24 lon", price: 210000, salePrice: 195000, hasPromotion: true, image: "", store: "Big C" },
    ],
    "bột giặt": [
      { name: "Bột giặt OMO 4.5kg", price: 175000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "giấy vệ sinh": [
      { name: "Giấy vệ sinh Pulppy 12 cuộn", price: 75000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "thịt heo": [
      { name: "Thịt ba rọi heo 1kg", price: 132000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Sườn non heo 1kg", price: 162000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "rau củ": [
      { name: "Rau muống bó 500g", price: 11000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Cà chua 1kg", price: 23000, salePrice: 19000, hasPromotion: true, image: "", store: "Big C" },
    ],
    "nước tương": [
      { name: "Nước tương Maggi 700ml", price: 31000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "đường": [
      { name: "Đường Biên Hòa 1kg", price: 26000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
  },
};

// Map không dấu -> có dấu để tìm kiếm linh hoạt
const ACCENT_MAP = {
  "sua tuoi": "sữa tươi",
  "gao": "gạo",
  "trung ga": "trứng gà",
  "dau an": "dầu ăn",
  "mi goi": "mì gói",
  "nuoc mam": "nước mắm",
  "nuoc ngot": "nước ngọt",
  "bot giat": "bột giặt",
  "giay ve sinh": "giấy vệ sinh",
  "thit heo": "thịt heo",
  "rau cu": "rau củ",
  "nuoc tuong": "nước tương",
  "duong": "đường",
};

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D");
}

function searchMock(store, keyword) {
  const catalog = MOCK_CATALOG[store] || {};
  const normalizedKeyword = keyword.toLowerCase().trim();

  // Exact match (có dấu)
  if (catalog[normalizedKeyword]) {
    return catalog[normalizedKeyword];
  }

  // Map không dấu -> có dấu
  const mapped = ACCENT_MAP[normalizedKeyword];
  if (mapped && catalog[mapped]) {
    return catalog[mapped];
  }

  // Partial match by key
  const results = [];
  const keywordNoAccent = removeAccents(normalizedKeyword);

  for (const [key, products] of Object.entries(catalog)) {
    const keyNoAccent = removeAccents(key);
    if (
      key.includes(normalizedKeyword) ||
      normalizedKeyword.includes(key) ||
      keyNoAccent.includes(keywordNoAccent) ||
      keywordNoAccent.includes(keyNoAccent)
    ) {
      results.push(...products);
    }
  }

  // Search by product name
  if (results.length === 0) {
    for (const products of Object.values(catalog)) {
      for (const product of products) {
        const nameNoAccent = removeAccents(product.name.toLowerCase());
        if (
          product.name.toLowerCase().includes(normalizedKeyword) ||
          nameNoAccent.includes(keywordNoAccent)
        ) {
          results.push(product);
        }
      }
    }
  }

  return results;
}

module.exports = { searchMock, MOCK_CATALOG };
