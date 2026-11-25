# Dự án: MathPro (Website Học Toán Tư Duy Trực Tuyến)
- **Tham khảo giao diện:** mathx.vn (Tiếng Việt, phân theo khối lớp Mầm non -> Lớp 5)
- **Tech Stack:** Node.js + Express, `@libsql/client` (Turso Cloud hoặc fallback `file:mathpro.db`), `bcryptjs`, `express-session`, `dotenv`, Frontend HTML/CSS/JS thuần trong `public/`.

## Cấu trúc thư mục hiện tại
- `server.js`: Toàn bộ API & khởi tạo 6 bảng (`courses`, `lessons`, `quizzes`, `users`, `progress`, `registrations`) + dữ liệu mẫu (6 khóa học, 15 bài học, 10 câu trắc nghiệm, 1 admin `admin@mathpro.vn` / `admin123`).
- `public/index.html` & `public/app.js`: Trang chủ, lọc khối lớp, tìm kiếm bài học (`/api/search`), đăng ký học thử (`/api/register`), thanh menu động theo trạng thái đăng nhập.
- `public/course.html`: Chi tiết khóa học, danh sách bài học, thanh tiến độ & huy hiệu hoàn thành.
- `public/lesson.html`: Chi tiết bài học (Video YouTube embed, Mục tiêu, Lý thuyết, Ví dụ, Bài tập + Xem đáp án, Trắc nghiệm chấm điểm tự động `/quiz/submit`, nút Hoàn thành & Bài trước/tiếp).
- `public/login.html`: Đăng ký (`student`) / Đăng nhập.
- `public/profile.html`: Hồ sơ học tập, thống kê sao thưởng, điểm TB, tiến độ từng lớp.
- `public/admin.html`: Trang quản trị (chỉ `role: 'admin'`) gồm 4 tab: Thêm/Sửa/Xóa Khóa học, Thêm/Xóa Bài học, Thêm Trắc nghiệm, Xem & Xuất CSV danh sách đăng ký (`/api/registrations/export`).

## Trạng thái hiện tại
- Local chạy tốt bằng `mathpro.db` (tạm comment `TURSO_DATABASE_URL` trong `.env` nếu mạng nội bộ chặn DNS `.turso.io`).
- Sẵn sàng đẩy lên GitHub và deploy miễn phí lên Render.com (cấu hình `TURSO_DATABASE_URL`, `TURSO_AUTH_TOKEN`, `SESSION_SECRET` trên Render).
