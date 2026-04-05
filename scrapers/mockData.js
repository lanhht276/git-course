// Mock data - giá tham khảo tháng 4/2026
// Dùng khi USE_MOCK !== "false"

const MOCK_CATALOG = {
  "Co.op Mart": {
    "sữa tươi": [
      { name: "Sữa tươi tiệt trùng Vinamilk 1L", price: 32000, salePrice: 28500, hasPromotion: true, image: "", store: "Co.op Mart" },
      { name: "Sữa tươi TH True Milk 1L", price: 35000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "sữa đặc": [
      { name: "Sữa đặc Ông Thọ 380g", price: 18000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
      { name: "Sữa đặc Ngôi Sao Phương Nam 380g", price: 16500, salePrice: 14500, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "sữa chua": [
      { name: "Sữa chua Vinamilk lốc 4 hộp", price: 28000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "gạo": [
      { name: "Gạo ST25 túi 5kg", price: 175000, salePrice: 155000, hasPromotion: true, image: "", store: "Co.op Mart" },
      { name: "Gạo Jasmine túi 5kg", price: 115000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "trứng gà": [
      { name: "Trứng gà CP 10 quả", price: 36000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
      { name: "Trứng gà ta 10 quả", price: 45000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "trứng cút": [
      { name: "Trứng cút 20 quả", price: 22000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "trứng vịt": [
      { name: "Trứng vịt 10 quả", price: 38000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
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
    "nước tương": [
      { name: "Nước tương Maggi 700ml", price: 32000, salePrice: 27000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "bia": [
      { name: "Bia Saigon Special thùng 24 lon", price: 310000, salePrice: 279000, hasPromotion: true, image: "", store: "Co.op Mart" },
      { name: "Bia Tiger thùng 24 lon", price: 345000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "nước ngọt": [
      { name: "Coca Cola thùng 24 lon", price: 215000, salePrice: 189000, hasPromotion: true, image: "", store: "Co.op Mart" },
      { name: "Pepsi thùng 24 lon", price: 199000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "nước suối": [
      { name: "Nước suối Aquafina thùng 24 chai 500ml", price: 89000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "bột giặt": [
      { name: "Bột giặt OMO 4.5kg", price: 172000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
      { name: "Nước giặt Ariel 2.4kg", price: 145000, salePrice: 129000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "giấy vệ sinh": [
      { name: "Giấy vệ sinh Pulppy 12 cuộn", price: 72000, salePrice: 63000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "thịt heo": [
      { name: "Thịt ba rọi heo 1kg", price: 135000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
      { name: "Sườn non heo 1kg", price: 165000, salePrice: 149000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "thịt bò": [
      { name: "Thịt bò thăn 1kg", price: 280000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "thịt gà": [
      { name: "Đùi gà góc tư CP 1kg", price: 65000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
      { name: "Gà nguyên con 1.2kg", price: 95000, salePrice: 85000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "cá": [
      { name: "Cá basa fillet 1kg", price: 75000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
      { name: "Cá hồi fillet 500g", price: 175000, salePrice: 159000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "tôm": [
      { name: "Tôm sú 1kg", price: 220000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "rau củ": [
      { name: "Rau muống bó 500g", price: 12000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
      { name: "Cà chua 1kg", price: 25000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
      { name: "Khoai tây 1kg", price: 35000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "trái cây": [
      { name: "Chuối già 1 nải", price: 22000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
      { name: "Táo Envy 1kg", price: 89000, salePrice: 79000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "đường": [
      { name: "Đường Biên Hòa 1kg", price: 25000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "muối": [
      { name: "Muối i-ốt Bạc Liêu 500g", price: 8000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "bơ": [
      { name: "Bơ lạt Anchor 227g", price: 62000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "phô mai": [
      { name: "Phô mai con bò cười 8 miếng", price: 35000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "dầu gội": [
      { name: "Dầu gội Clear 650ml", price: 115000, salePrice: 99000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "sữa bột": [
      { name: "Sữa bột Ensure 850g", price: 589000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
      { name: "Sữa bột Optimum Gold 900g", price: 399000, salePrice: 369000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "cà phê": [
      { name: "Cà phê G7 hộp 18 gói", price: 52000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
      { name: "Cà phê Nescafe 3in1 20 gói", price: 65000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "bánh mì": [
      { name: "Bánh mì sandwich Kinh Đô 300g", price: 28000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "xúc xích": [
      { name: "Xúc xích Vissan 200g", price: 32000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
    "nước rửa chén": [
      { name: "Nước rửa chén Sunlight 750ml", price: 32000, salePrice: 27000, hasPromotion: true, image: "", store: "Co.op Mart" },
    ],
    "kem đánh răng": [
      { name: "Kem đánh răng P/S 180g", price: 35000, salePrice: null, hasPromotion: false, image: "", store: "Co.op Mart" },
    ],
  },
  Emart: {
    "sữa tươi": [
      { name: "Sữa tươi tiệt trùng Vinamilk 1L", price: 33500, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Sữa tươi TH True Milk 1L", price: 34500, salePrice: 30900, hasPromotion: true, image: "", store: "Emart" },
    ],
    "sữa đặc": [
      { name: "Sữa đặc Ông Thọ 380g", price: 17500, salePrice: 15900, hasPromotion: true, image: "", store: "Emart" },
      { name: "Sữa đặc Ngôi Sao Phương Nam 380g", price: 16000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "sữa chua": [
      { name: "Sữa chua Vinamilk lốc 4 hộp", price: 27000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "gạo": [
      { name: "Gạo ST25 túi 5kg", price: 179000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Gạo Jasmine túi 5kg", price: 109000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "trứng gà": [
      { name: "Trứng gà CP 10 quả", price: 34000, salePrice: 29900, hasPromotion: true, image: "", store: "Emart" },
    ],
    "trứng cút": [
      { name: "Trứng cút 20 quả", price: 20000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "trứng vịt": [
      { name: "Trứng vịt 10 quả", price: 36000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
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
    "nước tương": [
      { name: "Nước tương Maggi 700ml", price: 33000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "bia": [
      { name: "Bia Saigon Special thùng 24 lon", price: 315000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Bia Tiger thùng 24 lon", price: 339000, salePrice: 309000, hasPromotion: true, image: "", store: "Emart" },
    ],
    "nước ngọt": [
      { name: "Coca Cola thùng 24 lon", price: 219000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Pepsi thùng 24 lon", price: 205000, salePrice: 185000, hasPromotion: true, image: "", store: "Emart" },
    ],
    "nước suối": [
      { name: "Nước suối Aquafina thùng 24 chai 500ml", price: 85000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "bột giặt": [
      { name: "Bột giặt OMO 4.5kg", price: 165000, salePrice: 149000, hasPromotion: true, image: "", store: "Emart" },
      { name: "Nước giặt Ariel 2.4kg", price: 149000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "giấy vệ sinh": [
      { name: "Giấy vệ sinh Pulppy 12 cuộn", price: 69000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "thịt heo": [
      { name: "Thịt ba rọi heo 1kg", price: 129000, salePrice: 119000, hasPromotion: true, image: "", store: "Emart" },
      { name: "Sườn non heo 1kg", price: 159000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "thịt bò": [
      { name: "Thịt bò thăn 1kg", price: 275000, salePrice: 259000, hasPromotion: true, image: "", store: "Emart" },
    ],
    "thịt gà": [
      { name: "Đùi gà góc tư CP 1kg", price: 62000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Gà nguyên con 1.2kg", price: 92000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "cá": [
      { name: "Cá basa fillet 1kg", price: 72000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Cá hồi fillet 500g", price: 169000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "tôm": [
      { name: "Tôm sú 1kg", price: 215000, salePrice: 199000, hasPromotion: true, image: "", store: "Emart" },
    ],
    "rau củ": [
      { name: "Rau muống bó 500g", price: 10000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Cà chua 1kg", price: 28000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Khoai tây 1kg", price: 32000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "trái cây": [
      { name: "Chuối già 1 nải", price: 19000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Táo Envy 1kg", price: 95000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "đường": [
      { name: "Đường Biên Hòa 1kg", price: 24000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "muối": [
      { name: "Muối i-ốt Bạc Liêu 500g", price: 7500, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "bơ": [
      { name: "Bơ lạt Anchor 227g", price: 59000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "phô mai": [
      { name: "Phô mai con bò cười 8 miếng", price: 33000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "dầu gội": [
      { name: "Dầu gội Clear 650ml", price: 119000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "sữa bột": [
      { name: "Sữa bột Ensure 850g", price: 579000, salePrice: 545000, hasPromotion: true, image: "", store: "Emart" },
      { name: "Sữa bột Optimum Gold 900g", price: 405000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "cà phê": [
      { name: "Cà phê G7 hộp 18 gói", price: 49000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
      { name: "Cà phê Nescafe 3in1 20 gói", price: 62000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "bánh mì": [
      { name: "Bánh mì sandwich Kinh Đô 300g", price: 26000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "xúc xích": [
      { name: "Xúc xích Vissan 200g", price: 30000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "nước rửa chén": [
      { name: "Nước rửa chén Sunlight 750ml", price: 33000, salePrice: null, hasPromotion: false, image: "", store: "Emart" },
    ],
    "kem đánh răng": [
      { name: "Kem đánh răng P/S 180g", price: 33000, salePrice: 29000, hasPromotion: true, image: "", store: "Emart" },
    ],
  },
  "Big C": {
    "sữa tươi": [
      { name: "Sữa tươi tiệt trùng Vinamilk 1L", price: 31500, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Sữa tươi TH True Milk 1L", price: 36500, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "sữa đặc": [
      { name: "Sữa đặc Ông Thọ 380g", price: 18500, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Sữa đặc Ngôi Sao Phương Nam 380g", price: 17000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "sữa chua": [
      { name: "Sữa chua Vinamilk lốc 4 hộp", price: 26500, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "gạo": [
      { name: "Gạo ST25 túi 5kg", price: 169000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Gạo Jasmine túi 5kg", price: 112000, salePrice: 99000, hasPromotion: true, image: "", store: "Big C" },
    ],
    "trứng gà": [
      { name: "Trứng gà CP 10 quả", price: 35000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "trứng cút": [
      { name: "Trứng cút 20 quả", price: 21000, salePrice: 18500, hasPromotion: true, image: "", store: "Big C" },
    ],
    "trứng vịt": [
      { name: "Trứng vịt 10 quả", price: 37000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
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
    "nước tương": [
      { name: "Nước tương Maggi 700ml", price: 31000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "bia": [
      { name: "Bia Saigon Special thùng 24 lon", price: 305000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Bia Tiger thùng 24 lon", price: 348000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "nước ngọt": [
      { name: "Coca Cola thùng 24 lon", price: 210000, salePrice: 195000, hasPromotion: true, image: "", store: "Big C" },
      { name: "Pepsi thùng 24 lon", price: 195000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "nước suối": [
      { name: "Nước suối Aquafina thùng 24 chai 500ml", price: 92000, salePrice: 79000, hasPromotion: true, image: "", store: "Big C" },
    ],
    "bột giặt": [
      { name: "Bột giặt OMO 4.5kg", price: 175000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Nước giặt Ariel 2.4kg", price: 152000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "giấy vệ sinh": [
      { name: "Giấy vệ sinh Pulppy 12 cuộn", price: 75000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "thịt heo": [
      { name: "Thịt ba rọi heo 1kg", price: 132000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Sườn non heo 1kg", price: 162000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "thịt bò": [
      { name: "Thịt bò thăn 1kg", price: 285000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "thịt gà": [
      { name: "Đùi gà góc tư CP 1kg", price: 59000, salePrice: 52000, hasPromotion: true, image: "", store: "Big C" },
      { name: "Gà nguyên con 1.2kg", price: 89000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "cá": [
      { name: "Cá basa fillet 1kg", price: 69000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Cá hồi fillet 500g", price: 179000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "tôm": [
      { name: "Tôm sú 1kg", price: 225000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "rau củ": [
      { name: "Rau muống bó 500g", price: 11000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Cà chua 1kg", price: 23000, salePrice: 19000, hasPromotion: true, image: "", store: "Big C" },
      { name: "Khoai tây 1kg", price: 33000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "trái cây": [
      { name: "Chuối già 1 nải", price: 20000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Táo Envy 1kg", price: 92000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "đường": [
      { name: "Đường Biên Hòa 1kg", price: 26000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "muối": [
      { name: "Muối i-ốt Bạc Liêu 500g", price: 8500, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "bơ": [
      { name: "Bơ lạt Anchor 227g", price: 65000, salePrice: 55000, hasPromotion: true, image: "", store: "Big C" },
    ],
    "phô mai": [
      { name: "Phô mai con bò cười 8 miếng", price: 34000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "dầu gội": [
      { name: "Dầu gội Clear 650ml", price: 112000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "sữa bột": [
      { name: "Sữa bột Ensure 850g", price: 595000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Sữa bột Optimum Gold 900g", price: 395000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "cà phê": [
      { name: "Cà phê G7 hộp 18 gói", price: 50000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
      { name: "Cà phê Nescafe 3in1 20 gói", price: 63000, salePrice: 55000, hasPromotion: true, image: "", store: "Big C" },
    ],
    "bánh mì": [
      { name: "Bánh mì sandwich Kinh Đô 300g", price: 27000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "xúc xích": [
      { name: "Xúc xích Vissan 200g", price: 31000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "nước rửa chén": [
      { name: "Nước rửa chén Sunlight 750ml", price: 31000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
    "kem đánh răng": [
      { name: "Kem đánh răng P/S 180g", price: 34000, salePrice: null, hasPromotion: false, image: "", store: "Big C" },
    ],
  },
};

// Map không dấu -> có dấu
const ACCENT_MAP = {
  "sua tuoi": "sữa tươi", "sua dac": "sữa đặc", "sua chua": "sữa chua",
  "sua bot": "sữa bột", "gao": "gạo",
  "trung ga": "trứng gà", "trung cut": "trứng cút", "trung vit": "trứng vịt",
  "dau an": "dầu ăn", "mi goi": "mì gói",
  "nuoc mam": "nước mắm", "nuoc tuong": "nước tương",
  "nuoc ngot": "nước ngọt", "nuoc suoi": "nước suối",
  "bot giat": "bột giặt", "giay ve sinh": "giấy vệ sinh",
  "thit heo": "thịt heo", "thit bo": "thịt bò", "thit ga": "thịt gà",
  "rau cu": "rau củ", "trai cay": "trái cây",
  "duong": "đường", "muoi": "muối", "bo": "bơ", "pho mai": "phô mai",
  "dau goi": "dầu gội", "ca phe": "cà phê", "banh mi": "bánh mì",
  "xuc xich": "xúc xích", "nuoc rua chen": "nước rửa chén",
  "kem danh rang": "kem đánh răng", "ca": "cá", "tom": "tôm",
};

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D");
}

function searchMock(store, keyword) {
  const catalog = MOCK_CATALOG[store] || {};
  const normalizedKeyword = keyword.toLowerCase().trim();
  const keywordNoAccent = removeAccents(normalizedKeyword);

  // 1. Exact match (có dấu)
  if (catalog[normalizedKeyword]) {
    return catalog[normalizedKeyword];
  }

  // 2. Map không dấu -> có dấu
  const mapped = ACCENT_MAP[normalizedKeyword];
  if (mapped && catalog[mapped]) {
    return catalog[mapped];
  }

  // 3. Partial match by category key
  const results = [];
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
  if (results.length > 0) return results;

  // 4. Search by product name
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
  if (results.length > 0) return results;

  // 5. Fuzzy: tìm theo từ đầu tiên (VD: "trứng cút" -> match "trứng")
  const words = keywordNoAccent.split(/\s+/);
  for (const word of words) {
    if (word.length < 2) continue;
    for (const [key, products] of Object.entries(catalog)) {
      const keyNoAccent = removeAccents(key);
      if (keyNoAccent.split(/\s+/).some((w) => w.startsWith(word) || word.startsWith(w))) {
        results.push(...products);
      }
    }
    if (results.length > 0) return results;
  }

  return results;
}

module.exports = { searchMock, MOCK_CATALOG };
