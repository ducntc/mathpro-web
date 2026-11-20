require('dotenv').config();
const express = require('express');
const { createClient } = require('@libsql/client');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// --- MIDDLEWARE ---
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET || 'change-this-to-a-long-random-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 } // 1 ngày
}));

// --- KẾT NỐI DATABASE (TURSO CLOUD HOẶC FILE LOCAL) ---
const db = createClient({
  url: process.env.TURSO_DATABASE_URL || 'file:mathpro.db',
  authToken: process.env.TURSO_AUTH_TOKEN
});

// --- KHỞI TẠO BẢNG & DỮ LIỆU MẪU ---
async function initDatabase() {
  await db.executeMultiple(`
    CREATE TABLE IF NOT EXISTS courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      grade TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS registrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      grade TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'student',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS lessons (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      course_id INTEGER NOT NULL,
      lesson_order INTEGER NOT NULL,
      title TEXT NOT NULL,
      duration TEXT NOT NULL,
      objectives TEXT NOT NULL,
      content TEXT NOT NULL,
      example TEXT NOT NULL,
      exercise TEXT NOT NULL,
      answer TEXT NOT NULL,
      video_url TEXT DEFAULT '',
      FOREIGN KEY (course_id) REFERENCES courses(id)
    );

    CREATE TABLE IF NOT EXISTS quizzes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lesson_id INTEGER NOT NULL,
      question TEXT NOT NULL,
      option_a TEXT NOT NULL,
      option_b TEXT NOT NULL,
      option_c TEXT NOT NULL,
      option_d TEXT NOT NULL,
      correct_option TEXT NOT NULL,
      FOREIGN KEY (lesson_id) REFERENCES lessons(id)
    );

    CREATE TABLE IF NOT EXISTS progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      lesson_id INTEGER NOT NULL,
      completed INTEGER NOT NULL DEFAULT 1,
      quiz_score INTEGER DEFAULT NULL,
      quiz_total INTEGER DEFAULT NULL,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, lesson_id),
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (lesson_id) REFERENCES lessons(id)
    );
  `);

  // 1. Tài khoản Admin mặc định
  const adminRes = await db.execute("SELECT id FROM users WHERE role = 'admin'");
  if (adminRes.rows.length === 0) {
    const adminHash = bcrypt.hashSync('admin123', 10);
    await db.execute({
      sql: 'INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)',
      args: ['Admin MathPro', 'admin@mathpro.vn', adminHash, 'admin']
    });
  }

  // 2. Danh sách 6 Khóa học (Mầm non -> Lớp 5)
  const courseRes = await db.execute('SELECT COUNT(*) AS total FROM courses');
  if (Number(courseRes.rows[0].total) === 0) {
    const courses = [
      ['Mầm non', 'Làm quen Toán tư duy', 'Nhận biết mặt số, đếm hình và phát triển tư duy logic.'],
      ['Lớp 1', 'Toán cơ bản & Nâng cao', 'Bám sát SGK, toán nâng cao và phương pháp sơ đồ Singapore.'],
      ['Lớp 2', 'Giải toán có lời văn', 'Bảng nhân chia, tính nhẩm nhanh và bài toán suy luận.'],
      ['Lớp 3', 'Luyện thi & Toán Olympiad', 'Quy luật dãy số, rút về đơn vị và tư duy phản biện.'],
      ['Lớp 4', 'Phân số & Toán Tổng - Hiệu', 'Thành thạo bài toán điển hình, phân số và hình học lớp 4.'],
      ['Lớp 5', 'Chinh phục Toán Chuyển cấp', 'Tỉ số phần trăm, diện tích hình học và luyện đề vào lớp 6.']
    ];
    for (const c of courses) {
      await db.execute({
        sql: 'INSERT INTO courses (grade, title, description) VALUES (?, ?, ?)',
        args: c
      });
    }
  }

  // 3. Danh sách 15 Bài học chi tiết
  const lessonRes = await db.execute('SELECT COUNT(*) AS total FROM lessons');
  if (Number(lessonRes.rows[0].total) === 0) {
    const lessons = [
      // Mầm non
      [1, 1, 'Đếm số từ 1 đến 10 qua hình ảnh', '12 phút',
        'Nhận diện mặt số từ 1 đến 10 và đếm đúng số lượng đồ vật.',
        'Khi đếm, bé hãy chỉ tay lần lượt vào từng đồ vật từ trái sang phải, mỗi vật chỉ đếm một lần. Số cuối cùng đọc lên chính là tổng số lượng.',
        'Ví dụ: Có 4 quả táo trên bàn. Bé đếm: 1, 2, 3, 4. Vậy có tất cả 4 quả táo.',
        'Bài tập: Trong giỏ có 3 quả cam và 2 quả chuối. Hỏi có tất cả bao nhiêu quả?',
        'Đáp án: 5 quả (3 + 2 = 5).', ''],
      [1, 2, 'So sánh Lớn - Nhỏ, Cao - Thấp', '15 phút',
        'Phân biệt được kích thước và chiều cao của 2 đến 3 đồ vật.',
        'Để so sánh cao - thấp, ta đặt hai vật trên cùng một mặt phẳng ngang rồi nhìn phần đỉnh của chúng.',
        'Ví dụ: Hươu cao cổ cao hơn chú thỏ vì khi đứng cùng mặt đất, đầu hươu ở vị trí cao hơn.',
        'Bài tập: Bút chì dài 15cm, thước kẻ dài 20cm. Vật nào ngắn hơn?',
        'Đáp án: Bút chì ngắn hơn thước kẻ.', ''],
      [1, 3, 'Nhận biết Hình tròn, Vuông, Tam giác', '14 phút',
        'Gọi tên đúng 3 hình cơ bản và liên hệ với đồ vật xung quanh.',
        '• Hình tròn: không có góc, lăn được (bánh xe, đồng hồ).\n• Hình vuông: có 4 cạnh bằng nhau và 4 góc vuông (khăn tay, viên gạch).\n• Hình tam giác: có 3 cạnh và 3 góc nhọn (mái nhà, biển báo).',
        'Ví dụ: Mặt đồng hồ treo tường thường có dạng hình tròn, còn lá cờ tam giác có 3 cạnh.',
        'Bài tập: Trong các hình: Hình tròn, Hình vuông, Hình tam giác — hình nào có 3 cạnh?',
        'Đáp án: Hình tam giác.', ''],
      // Lớp 1
      [2, 1, 'Phép cộng, trừ có nhớ trong phạm vi 20', '18 phút',
        'Thành thạo kỹ thuật tách số để cộng nhẩm qua 10 nhanh và chính xác.',
        'Quy tắc "Góp cho đủ 10": Khi cộng hai số có tổng lớn hơn 10, ta tách số thứ hai để ghép với số thứ nhất thành 10, rồi cộng phần còn lại.',
        'Ví dụ: Tính 8 + 5.\nBước 1: Tách 5 = 2 + 3.\nBước 2: 8 + 2 = 10.\nBước 3: 10 + 3 = 13.',
        'Bài tập: Tính nhẩm: a) 9 + 6 = ?   b) 7 + 5 = ?   c) 14 - 6 = ?',
        'Đáp án: a) 15   b) 12   c) 8.', ''],
      [2, 2, 'Làm quen sơ đồ đoạn thẳng (Toán Singapore)', '20 phút',
        'Biết vẽ sơ đồ đoạn thẳng để tóm tắt và giải bài toán có lời văn.',
        'Mỗi đại lượng được biểu diễn bằng một đoạn thẳng. Số lớn hơn vẽ đoạn dài hơn, số bé hơn vẽ đoạn ngắn hơn.',
        'Ví dụ: An có 5 viên bi, Bình có nhiều hơn An 3 viên bi. Hỏi Bình có mấy viên bi?\nGiải: Số bi của Bình là: 5 + 3 = 8 (viên bi).',
        'Bài tập: Lan hái được 7 bông hoa, Hoa hái được ít hơn Lan 2 bông. Hỏi Hoa hái được bao nhiêu bông hoa?',
        'Đáp án: 7 - 2 = 5 (bông hoa).', ''],
      [2, 3, 'Xem đồng hồ & Nhận biết ngày trong tuần', '15 phút',
        'Đọc được giờ đúng trên đồng hồ kim và thuộc thứ tự 7 ngày trong tuần.',
        'Trên mặt đồng hồ: Kim ngắn chỉ giờ, kim dài chỉ phút. Khi kim dài chỉ đúng số 12, kim ngắn chỉ số nào thì đó là giờ đúng.',
        'Ví dụ: Kim ngắn chỉ số 7, kim dài chỉ số 12 -> Đồng hồ chỉ 7 giờ đúng.',
        'Bài tập: Hôm nay là Thứ Tư. Hỏi 2 ngày nữa là Thứ mấy?',
        'Đáp án: Thứ Sáu.', ''],
      // Lớp 2
      [3, 1, 'Bảng nhân 2, 3, 4, 5 & Bản chất phép nhân', '20 phút',
        'Hiểu phép nhân là tổng của các số hạng bằng nhau và thuộc bảng nhân 2-5.',
        'Phép nhân a × b nghĩa là lấy số a cộng với chính nó b lần. Việc hiểu bản chất giúp các con tự tìm lại kết quả nếu lỡ quên.',
        'Ví dụ: 4 × 3 = 4 + 4 + 4 = 12.',
        'Bài tập: Một bàn học có 4 chân. Hỏi 5 bàn học như thế có tất cả bao nhiêu chân?',
        'Đáp án: 4 × 5 = 20 (chân).', ''],
      [3, 2, 'Giải toán nhiều hơn / ít hơn một số đơn vị', '22 phút',
        'Không bị nhầm lẫn giữa từ khóa "nhiều hơn" và "ít hơn" khi đặt phép tính.',
        '• Muốn tìm số lớn: lấy số bé + phần hơn.\n• Muốn tìm số bé: lấy số lớn - phần hơn.\nLưu ý đọc kỹ câu hỏi xem đề hỏi đại lượng nào (lớn hay bé).',
        'Ví dụ: Lan có 18 nhãn vở, Lan có nhiều hơn Mai 5 nhãn vở. Hỏi Mai có bao nhiêu nhãn vở?\nGiải: Vì Lan nhiều hơn Mai nên Mai ít hơn Lan. Số nhãn vở của Mai là: 18 - 5 = 13 (nhãn vở).',
        'Bài tập: Thùng thứ nhất có 24 lít dầu, thùng thứ hai ít hơn thùng thứ nhất 6 lít. Hỏi thùng thứ hai có bao nhiêu lít dầu?',
        'Đáp án: 24 - 6 = 18 (lít dầu).', ''],
      [3, 3, 'Chu vi hình tam giác, hình tứ giác', '18 phút',
        'Tính được chu vi các hình bằng cách cộng độ dài các cạnh.',
        'Chu vi của một hình là tổng độ dài tất cả các cạnh bao quanh hình đó. Nhớ kiểm tra các cạnh đã cùng đơn vị đo (cm, dm, m) chưa trước khi cộng.',
        'Ví dụ: Hình tam giác có 3 cạnh dài 4cm, 5cm, 6cm.\nChu vi = 4 + 5 + 6 = 15 (cm).',
        'Bài tập: Tính chu vi hình tứ giác có độ dài 4 cạnh đều bằng 7cm.',
        'Đáp án: 7 + 7 + 7 + 7 = 28 (cm).', ''],
      // Lớp 3
      [4, 1, 'Quy luật dãy số & Toán tư duy Olympiad', '25 phút',
        'Nhận biết quy luật tăng/giảm của dãy số và tìm số hạng tiếp theo.',
        'Để tìm quy luật dãy số, hãy thử tính hiệu (hoặc thương) giữa hai số đứng liền kề nhau, hoặc xét tổng hai số đứng trước.',
        'Ví dụ: Tìm số tiếp theo của dãy: 2, 5, 8, 11, ...\nNhận xét: Mỗi số sau hơn số trước 3 đơn vị. Vậy số tiếp theo là 11 + 3 = 14.',
        'Bài tập: Tìm số thích hợp điền vào chỗ trống: 1, 2, 4, 7, 11, ...',
        'Đáp án: 16 (khoảng cách tăng dần +1, +2, +3, +4, +5).', ''],
      [4, 2, 'Bài toán Rút về đơn vị', '22 phút',
        'Giải thành thạo dạng toán tìm giá trị 1 phần trước khi tính nhiều phần.',
        'Bước 1 (Rút về đơn vị): Dùng phép chia để tìm giá trị của 1 phần.\nBước 2: Dùng phép nhân (hoặc chia) theo yêu cầu của đề bài.',
        'Ví dụ: Có 24 cái bánh chia đều vào 4 hộp. Hỏi 7 hộp như thế có bao nhiêu cái bánh?\nGiải:\n1 hộp có: 24 : 4 = 6 (cái).\n7 hộp có: 6 × 7 = 42 (cái).',
        'Bài tập: 5 quyển vở giá 35.000 đồng. Hỏi mua 8 quyển vở như thế hết bao nhiêu tiền?',
        'Đáp án: 56.000 đồng (1 quyển giá 7.000 đồng).', ''],
      // Lớp 4
      [5, 1, 'Tìm hai số khi biết Tổng và Hiệu', '25 phút',
        'Thuộc và vận dụng linh hoạt công thức Tổng - Hiệu vào bài toán thực tế.',
        'Công thức cần nhớ:\n• Số lớn = (Tổng + Hiệu) : 2\n• Số bé = (Tổng - Hiệu) : 2\nMẹo: Tìm được 1 số rồi có thể lấy Tổng trừ đi để ra số còn lại.',
        'Ví dụ: Tổng hai số là 50, hiệu hai số là 10.\nSố lớn = (50 + 10) : 2 = 30.\nSố bé = 50 - 30 = 20.',
        'Bài tập: Tổng số tuổi của hai anh em là 24 tuổi. Anh hơn em 4 tuổi. Tính tuổi của mỗi người.',
        'Đáp án: Anh 14 tuổi, Em 10 tuổi.', ''],
      [5, 2, 'Phân số & Quy đồng mẫu số cơ bản', '25 phút',
        'Hiểu ý nghĩa phân số, rút gọn phân số và quy đồng mẫu số.',
        'Khi nhân (hoặc chia) cả tử số và mẫu số của một phân số với cùng một số tự nhiên khác 0, ta được phân số mới bằng phân số đã cho.',
        'Ví dụ: Quy đồng 1/2 và 1/3.\nMẫu số chung là 6 -> 1/2 = 3/6 và 1/3 = 2/6.',
        'Bài tập: Rút gọn phân số 12/18 về phân số tối giản.',
        'Đáp án: 2/3 (chia cả tử và mẫu cho 6).', ''],
      // Lớp 5
      [6, 1, 'Tỉ số phần trăm & Bài toán thực tế', '25 phút',
        'Tính được tỉ số phần trăm của hai số và áp dụng vào bài toán giảm giá, lãi suất.',
        '• Muốn tìm tỉ số phần trăm của A và B: lấy A : B rồi nhân nhẩm với 100 và viết thêm ký hiệu %.\n• Tìm a% của số B: lấy B × a : 100.',
        'Ví dụ: Một chiếc áo giá 200.000đ được giảm giá 20%.\nSố tiền được giảm = 200.000 × 20 : 100 = 40.000đ.\nGiá sau giảm = 160.000đ.',
        'Bài tập: Lớp 5A có 40 học sinh, trong đó có 30 học sinh giỏi. Hỏi số học sinh giỏi chiếm bao nhiêu phần trăm?',
        'Đáp án: 75% (30 : 40 × 100 = 75%).', ''],
      [6, 2, 'Diện tích hình tam giác & hình thang', '25 phút',
        'Nhớ chính xác công thức tính diện tích tam giác và hình thang.',
        '• Diện tích tam giác: S = (Đáy × Chiều cao) : 2\n• Diện tích hình thang: S = ((Đáy lớn + Đáy bé) × Chiều cao) : 2',
        'Ví dụ: Tam giác có đáy 10cm, chiều cao 6cm -> S = (10 × 6) : 2 = 30 (cm²).',
        'Bài tập: Tính diện tích hình thang có đáy lớn 12cm, đáy bé 8cm và chiều cao 5cm.',
        'Đáp án: 50 cm² ((12 + 8) × 5 : 2 = 50).', '']
    ];
    for (const l of lessons) {
      await db.execute({
        sql: `INSERT INTO lessons (course_id, lesson_order, title, duration, objectives, content, example, exercise, answer, video_url)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: l
      });
    }
  }

  // 4. Câu hỏi trắc nghiệm mẫu
  const quizRes = await db.execute('SELECT COUNT(*) AS total FROM quizzes');
  if (Number(quizRes.rows[0].total) === 0) {
    const quizzes = [
      [1, 'Trong giỏ có 3 quả cam và 2 quả chuối. Hỏi có tất cả bao nhiêu quả?', '4 quả', '5 quả', '6 quả', '3 quả', 'B'],
      [1, 'Số nào đứng ngay sau số 7?', '6', '8', '9', '5', 'B'],
      [3, 'Hình nào có 3 cạnh và 3 góc?', 'Hình tròn', 'Hình vuông', 'Hình tam giác', 'Hình chữ nhật', 'C'],
      [4, 'Kết quả của phép tính 9 + 6 là bao nhiêu?', '14', '15', '16', '13', 'B'],
      [4, 'Kết quả của phép tính 14 - 6 là bao nhiêu?', '7', '8', '9', '6', 'B'],
      [7, 'Một bàn học có 4 chân. Hỏi 5 bàn học có bao nhiêu chân?', '16 chân', '20 chân', '24 chân', '9 chân', 'B'],
      [10, 'Số tiếp theo của dãy 1, 2, 4, 7, 11, ... là số nào?', '14', '15', '16', '17', 'C'],
      [11, '5 quyển vở giá 35.000đ. Mua 8 quyển vở hết bao nhiêu tiền?', '48.000đ', '56.000đ', '63.000đ', '42.000đ', 'B'],
      [12, 'Tổng hai số là 50, hiệu là 10. Số lớn là bao nhiêu?', '20', '25', '30', '40', 'C'],
      [14, 'Lớp có 40 học sinh, trong đó 30 bạn đạt loại Giỏi. Tỉ lệ học sinh Giỏi là:', '65%', '70%', '75%', '80%', 'C']
    ];
    for (const q of quizzes) {
      await db.execute({
        sql: `INSERT INTO quizzes (lesson_id, question, option_a, option_b, option_c, option_d, correct_option)
              VALUES (?, ?, ?, ?, ?, ?, ?)`,
        args: q
      });
    }
  }
}

// --- MIDDLEWARE PHÂN QUYỀN ---
function requireAdmin(req, res, next) {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Vui lòng đăng nhập.' });
  }
  if (req.session.user.role !== 'admin') {
    return res.status(403).json({ message: 'Bạn không có quyền Admin!' });
  }
  next();
}

// --- API KHÓA HỌC & BÀI HỌC ---
app.get('/api/courses', async (req, res) => {
  const result = await db.execute(`
    SELECT c.*, COUNT(l.id) AS lesson_count
    FROM courses c
    LEFT JOIN lessons l ON l.course_id = c.id
    GROUP BY c.id
  `);
  res.json(result.rows);
});

app.post('/api/courses', requireAdmin, async (req, res) => {
  const { grade, title, description } = req.body;
  if (!grade || !title || !description) {
    return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin.' });
  }
  const info = await db.execute({
    sql: 'INSERT INTO courses (grade, title, description) VALUES (?, ?, ?)',
    args: [grade, title, description]
  });
  res.json({ message: `Đã thêm khóa học "${title}" thành công!`, id: Number(info.lastInsertRowid) });
});

app.put('/api/courses/:id', requireAdmin, async (req, res) => {
  const { grade, title, description } = req.body;
  if (!grade || !title || !description) {
    return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin.' });
  }
  const info = await db.execute({
    sql: 'UPDATE courses SET grade = ?, title = ?, description = ? WHERE id = ?',
    args: [grade, title, description, req.params.id]
  });
  if (info.rowsAffected === 0) {
    return res.status(404).json({ message: 'Không tìm thấy khóa học để sửa.' });
  }
  res.json({ message: `Đã cập nhật khóa học "${title}" thành công!` });
});

app.delete('/api/courses/:id', requireAdmin, async (req, res) => {
  const courseId = req.params.id;
  const tx = await db.transaction('write');
  try {
    const lessonsRes = await tx.execute({ sql: 'SELECT id FROM lessons WHERE course_id = ?', args: [courseId] });
    for (const l of lessonsRes.rows) {
      await tx.execute({ sql: 'DELETE FROM progress WHERE lesson_id = ?', args: [l.id] });
      await tx.execute({ sql: 'DELETE FROM quizzes WHERE lesson_id = ?', args: [l.id] });
    }
    await tx.execute({ sql: 'DELETE FROM lessons WHERE course_id = ?', args: [courseId] });
    const info = await tx.execute({ sql: 'DELETE FROM courses WHERE id = ?', args: [courseId] });
    await tx.commit();

    if (info.rowsAffected === 0) {
      return res.status(404).json({ message: 'Không tìm thấy khóa học.' });
    }
    res.json({ message: 'Đã xóa khóa học và toàn bộ bài học liên quan!' });
  } catch (err) {
    await tx.rollback();
    res.status(500).json({ message: 'Lỗi khi xóa khóa học.' });
  }
});

app.get('/api/courses/:id', async (req, res) => {
  const courseRes = await db.execute({ sql: 'SELECT * FROM courses WHERE id = ?', args: [req.params.id] });
  const course = courseRes.rows[0];
  if (!course) {
    return res.status(404).json({ message: 'Không tìm thấy khóa học.' });
  }

  const userId = req.session.user ? req.session.user.id : null;
  const lessonsRes = await db.execute({
    sql: `SELECT l.*,
                 COALESCE(p.completed, 0) AS completed,
                 p.quiz_score,
                 p.quiz_total
          FROM lessons l
          LEFT JOIN progress p ON p.lesson_id = l.id AND p.user_id = ?
          WHERE l.course_id = ?
          ORDER BY l.lesson_order ASC, l.id ASC`,
    args: [userId, req.params.id]
  });

  res.json({ ...course, lessons: lessonsRes.rows });
});

app.get('/api/lessons', requireAdmin, async (req, res) => {
  const result = await db.execute(`
    SELECT l.id, l.lesson_order, l.title, c.grade, c.title AS course_title
    FROM lessons l
    JOIN courses c ON c.id = l.course_id
    ORDER BY l.course_id ASC, l.lesson_order ASC
  `);
  res.json(result.rows);
});

app.post('/api/lessons', requireAdmin, async (req, res) => {
  const { course_id, lesson_order, title, duration, objectives, content, example, exercise, answer, video_url } = req.body;
  if (!course_id || !lesson_order || !title || !duration || !objectives || !content || !example || !exercise || !answer) {
    return res.status(400).json({ message: 'Vui lòng điền đầy đủ tất cả các trường bắt buộc.' });
  }

  const info = await db.execute({
    sql: `INSERT INTO lessons (course_id, lesson_order, title, duration, objectives, content, example, exercise, answer, video_url)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [course_id, lesson_order, title, duration, objectives, content, example, exercise, answer, video_url || '']
  });

  res.json({ message: `Đã thêm bài học "${title}" thành công!`, id: Number(info.lastInsertRowid) });
});

app.delete('/api/lessons/:id', requireAdmin, async (req, res) => {
  const lessonId = req.params.id;
  const tx = await db.transaction('write');
  try {
    await tx.execute({ sql: 'DELETE FROM progress WHERE lesson_id = ?', args: [lessonId] });
    await tx.execute({ sql: 'DELETE FROM quizzes WHERE lesson_id = ?', args: [lessonId] });
    const info = await tx.execute({ sql: 'DELETE FROM lessons WHERE id = ?', args: [lessonId] });
    await tx.commit();

    if (info.rowsAffected === 0) {
      return res.status(404).json({ message: 'Không tìm thấy bài học.' });
    }
    res.json({ message: 'Đã xóa bài học thành công!' });
  } catch (err) {
    await tx.rollback();
    res.status(500).json({ message: 'Lỗi khi xóa bài học.' });
  }
});

app.get('/api/search', async (req, res) => {
  const q = (req.query.q || '').trim();
  if (!q) return res.json([]);

  const keyword = `%${q}%`;
  const result = await db.execute({
    sql: `SELECT l.id, l.lesson_order, l.title, l.duration, c.grade, c.title AS course_title
          FROM lessons l
          JOIN courses c ON c.id = l.course_id
          WHERE l.title LIKE ? OR l.objectives LIKE ? OR l.content LIKE ?
          ORDER BY c.id ASC, l.lesson_order ASC
          LIMIT 12`,
    args: [keyword, keyword, keyword]
  });

  res.json(result.rows);
});

app.get('/api/lessons/:id', async (req, res) => {
  const lessonRes = await db.execute({ sql: 'SELECT * FROM lessons WHERE id = ?', args: [req.params.id] });
  const lesson = lessonRes.rows[0];
  if (!lesson) {
    return res.status(404).json({ message: 'Không tìm thấy bài học.' });
  }

  const listRes = await db.execute({
    sql: 'SELECT id FROM lessons WHERE course_id = ? ORDER BY lesson_order ASC, id ASC',
    args: [lesson.course_id]
  });
  const courseLessons = listRes.rows;
  const idx = courseLessons.findIndex(l => l.id === lesson.id);

  res.json({
    ...lesson,
    prevLessonId: idx > 0 ? courseLessons[idx - 1].id : null,
    nextLessonId: idx >= 0 && idx < courseLessons.length - 1 ? courseLessons[idx + 1].id : null
  });
});

// --- API TRẮC NGHIỆM & TIẾN ĐỘ ---
app.post('/api/quizzes', requireAdmin, async (req, res) => {
  const { lesson_id, question, option_a, option_b, option_c, option_d, correct_option } = req.body;
  if (!lesson_id || !question || !option_a || !option_b || !option_c || !option_d || !correct_option) {
    return res.status(400).json({ message: 'Vui lòng điền đầy đủ câu hỏi, 4 đáp án và đáp án đúng.' });
  }

  const info = await db.execute({
    sql: `INSERT INTO quizzes (lesson_id, question, option_a, option_b, option_c, option_d, correct_option)
          VALUES (?, ?, ?, ?, ?, ?, ?)`,
    args: [lesson_id, question, option_a, option_b, option_c, option_d, correct_option]
  });

  res.json({ message: 'Đã thêm câu hỏi trắc nghiệm thành công!', id: Number(info.lastInsertRowid) });
});

app.get('/api/lessons/:id/quiz', async (req, res) => {
  const result = await db.execute({
    sql: 'SELECT id, question, option_a, option_b, option_c, option_d FROM quizzes WHERE lesson_id = ?',
    args: [req.params.id]
  });
  res.json(result.rows);
});

app.post('/api/lessons/:id/quiz/submit', async (req, res) => {
  const { answers } = req.body;
  const qRes = await db.execute({ sql: 'SELECT * FROM quizzes WHERE lesson_id = ?', args: [req.params.id] });
  const questions = qRes.rows;

  if (questions.length === 0) {
    return res.status(404).json({ message: 'Bài học này chưa có câu hỏi trắc nghiệm.' });
  }

  let score = 0;
  const results = questions.map((q) => {
    const userAnswer = answers?.[q.id] || null;
    const isCorrect = userAnswer === q.correct_option;
    if (isCorrect) score++;
    return { quizId: q.id, userAnswer, correctOption: q.correct_option, isCorrect };
  });

  let savedProgress = false;
  if (req.session.user) {
    await db.execute({
      sql: `INSERT INTO progress (user_id, lesson_id, completed, quiz_score, quiz_total, updated_at)
            VALUES (?, ?, 1, ?, ?, CURRENT_TIMESTAMP)
            ON CONFLICT(user_id, lesson_id) DO UPDATE SET
              completed = 1,
              quiz_score = excluded.quiz_score,
              quiz_total = excluded.quiz_total,
              updated_at = CURRENT_TIMESTAMP`,
      args: [req.session.user.id, req.params.id, score, questions.length]
    });
    savedProgress = true;
  }

  res.json({
    score,
    total: questions.length,
    percentage: Math.round((score / questions.length) * 100),
    savedProgress,
    results
  });
});

app.post('/api/lessons/:id/complete', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Vui lòng đăng nhập để lưu tiến độ.' });
  }

  await db.execute({
    sql: `INSERT INTO progress (user_id, lesson_id, completed, updated_at)
          VALUES (?, ?, 1, CURRENT_TIMESTAMP)
          ON CONFLICT(user_id, lesson_id) DO UPDATE SET
            completed = 1,
            updated_at = CURRENT_TIMESTAMP`,
    args: [req.session.user.id, req.params.id]
  });

  res.json({ message: 'Đã lưu trạng thái hoàn thành bài học!' });
});

// --- API ĐĂNG KÝ HỌC THỬ & XUẤT CSV ---
app.post('/api/register', async (req, res) => {
  const { name, email, grade } = req.body;
  if (!name || !email || !grade) {
    return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin.' });
  }
  await db.execute({
    sql: 'INSERT INTO registrations (name, email, grade) VALUES (?, ?, ?)',
    args: [name, email, grade]
  });
  res.json({ message: `Chào mừng ${name}! Đã lưu đăng ký học thử ${grade}.` });
});

app.get('/api/registrations', requireAdmin, async (req, res) => {
  const result = await db.execute('SELECT * FROM registrations ORDER BY created_at DESC');
  res.json(result.rows);
});

app.get('/api/registrations/export', requireAdmin, async (req, res) => {
  const result = await db.execute('SELECT id, name, email, grade, created_at FROM registrations ORDER BY created_at DESC');
  const escapeCsv = (val) => `"${String(val ?? '').replace(/"/g, '""')}"`;
  const header = ['ID', 'Họ và tên', 'Email', 'Khối lớp', 'Ngày đăng ký'].map(escapeCsv).join(',');
  const body = result.rows
    .map(r => [r.id, r.name, r.email, r.grade, r.created_at].map(escapeCsv).join(','))
    .join('\r\n');

  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="danh-sach-dang-ky.csv"');
  res.send('\uFEFF' + header + '\r\n' + body);
});

// --- API ĐĂNG KÝ / ĐĂNG NHẬP & HỒ SƠ ---
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password || password.length < 6) {
    return res.status(400).json({ message: 'Vui lòng nhập tên, email và mật khẩu từ 6 ký tự trở lên.' });
  }

  const existing = await db.execute({ sql: 'SELECT id FROM users WHERE email = ?', args: [email] });
  if (existing.rows.length > 0) {
    return res.status(409).json({ message: 'Email này đã được đăng ký.' });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const info = await db.execute({
    sql: 'INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)',
    args: [name, email, passwordHash, 'student']
  });

  req.session.user = { id: Number(info.lastInsertRowid), name, email, role: 'student' };
  res.json({ message: 'Tạo tài khoản thành công!', user: req.session.user });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const result = await db.execute({ sql: 'SELECT * FROM users WHERE email = ?', args: [email] });
  const user = result.rows[0];

  if (!user || !(await bcrypt.compare(password, user.password_hash))) {
    return res.status(401).json({ message: 'Sai email hoặc mật khẩu.' });
  }

  req.session.user = { id: user.id, name: user.name, email: user.email, role: user.role };
  res.json({ message: 'Đăng nhập thành công!', user: req.session.user });
});

app.get('/api/me', (req, res) => {
  res.json({ user: req.session.user || null });
});

app.get('/api/profile', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Vui lòng đăng nhập để xem hồ sơ.' });
  }

  const userId = req.session.user.id;

  const historyRes = await db.execute({
    sql: `SELECT p.lesson_id, p.quiz_score, p.quiz_total, p.updated_at,
                 l.lesson_order, l.title AS lesson_title,
                 c.id AS course_id, c.grade, c.title AS course_title
          FROM progress p
          JOIN lessons l ON l.id = p.lesson_id
          JOIN courses c ON c.id = l.course_id
          WHERE p.user_id = ? AND p.completed = 1
          ORDER BY p.updated_at DESC`,
    args: [userId]
  });

  const courseProgressRes = await db.execute({
    sql: `SELECT c.id, c.grade, c.title,
                 COUNT(l.id) AS total_lessons,
                 COUNT(p.id) AS completed_lessons
          FROM courses c
          LEFT JOIN lessons l ON l.course_id = c.id
          LEFT JOIN progress p ON p.lesson_id = l.id AND p.user_id = ? AND p.completed = 1
          GROUP BY c.id
          ORDER BY c.id ASC`,
    args: [userId]
  });

  const history = historyRes.rows;
  const completedCount = history.length;
  const quizItems = history.filter(h => h.quiz_total && h.quiz_total > 0);
  const avgPercent = quizItems.length
    ? Math.round(quizItems.reduce((sum, h) => sum + (h.quiz_score / h.quiz_total) * 100, 0) / quizItems.length)
    : 0;

  const stars = completedCount * 10 +
    quizItems.filter(h => (h.quiz_score / h.quiz_total) >= 0.8).length * 10;

  res.json({
    user: req.session.user,
    stats: { completedCount, quizCount: quizItems.length, avgPercent, stars },
    courseProgress: courseProgressRes.rows,
    history
  });
});

app.post('/api/logout', (req, res) => {
  req.session.destroy(() => res.json({ message: 'Đã đăng xuất.' }));
});

// --- KHỞI ĐỘNG SERVER SAU KHI DATABASE SẴN SÀNG ---
initDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Lỗi khởi tạo database:', err);
    process.exit(1);
  });
