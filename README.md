# 💳 Cashback Tracker

Web app đơn giản (1 file HTML, không cần build, không cần backend) giúp:

- Quản lý danh sách thẻ tín dụng và các chương trình hoàn tiền của từng thẻ.
- Khi định mua hàng, nhập tên món + số tiền → app gợi ý thẻ tối ưu.
- Ghi nhật ký chi tiêu và thống kê theo **chu kỳ sao kê riêng** của từng thẻ.

## Cách chạy

Mở file `index.html` bằng trình duyệt bất kỳ — xong.

Dữ liệu lưu trong `localStorage` của trình duyệt; có thể xuất/nhập file JSON ở tab **Dữ liệu**.

## Tính năng

### 🎯 Gợi ý thẻ
Nhập tên món hàng (vd: `Grab`, `Shopee`, `xăng`, `nhà hàng`) + số tiền.
App so khớp với **danh mục** và **từ khóa** của từng chương trình, tính ước tính cashback (có áp dụng trần/giao dịch), rồi xếp hạng thẻ tốt nhất 👑.

### 💳 Thẻ của tôi
- Thêm/sửa/xóa thẻ với:
  - Ngày chốt sao kê (1–31)
  - Trần hoàn tiền/tháng, mức chi tối thiểu/tháng
- Mỗi thẻ có nhiều **chương trình hoàn tiền**:
  - Danh mục, % hoàn, trần/giao dịch
  - Từ khóa (phục vụ matching)
  - Kênh: bất kỳ / online / offline

### 📝 Nhật ký chi tiêu
Ghi từng giao dịch: ngày, món, số tiền, thẻ dùng, ghi chú.

### 📊 Thống kê tháng
Hiển thị tổng chi tiêu của **chu kỳ sao kê hiện tại** cho từng thẻ.
- Ví dụ thẻ chốt ngày 25 → chu kỳ 25 tháng trước → 24 tháng này.
- Cảnh báo nếu chưa đạt mức chi tối thiểu để hưởng cashback.

### ⚙️ Dữ liệu
Xuất/nhập JSON, nạp dữ liệu mẫu (3 thẻ) hoặc xóa toàn bộ.
