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

### 👤 Tài khoản (Supabase sync — tùy chọn)
Đăng ký / đăng nhập để sync dữ liệu lên cloud và dùng trên nhiều thiết bị.

## Setup Supabase (chỉ cần 1 lần, ~5 phút)

1. Tạo project miễn phí tại [supabase.com](https://supabase.com) (free tier: 500MB DB, 50k user/tháng).
2. Mở **SQL Editor** → **New query** → dán toàn bộ nội dung file `supabase-schema.sql` → **Run**.
3. Vào **Settings → API**, copy:
   - **Project URL** (dạng `https://xxxxx.supabase.co`)
   - **anon public key** (bắt đầu bằng `eyJ…`)
4. Mở app → tab **👤 Tài khoản** → dán 2 giá trị trên → **Lưu & kết nối**.
5. Tạo tài khoản (đăng ký bằng email + password) → đăng nhập → dữ liệu tự sync.

### Các lựa chọn auth nâng cao (Supabase Dashboard)
- **Authentication → Providers**: bật Google / GitHub / magic link nếu muốn.
- **Authentication → Email Templates**: tắt email xác nhận trong giai đoạn dev (Settings → Email Auth → *Confirm email* = off).
- **Database → Policies**: kiểm tra đã có policy `cards_owner_all` và `logs_owner_all` (schema SQL đã tạo sẵn).

### Lưu ý bảo mật
- **anon key là public** (an toàn để lộ) — bảo mật dựa vào Row Level Security (RLS) đã bật trong schema.
- **Không bao giờ commit `service_role` key** lên repo — key đó bypass RLS.
- Nếu deploy công khai, bạn có thể hardcode URL + anon key vào `index.html` (phần `initSupabase`) để user không cần nhập.
