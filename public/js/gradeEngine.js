// === VIP ACCESS HELPER (Dùng chung cho Skills, Lessons, Videos, Games, Fluency) ===
window.MathProVIP = {
  isVipUser: false,

  isVipOrAdmin(user) {
    if (!user) return false;
    if (user.role === 'admin' || user.email === 'admin@mathpro.vn') return true;
    if (user.vip_expires_at && new Date(user.vip_expires_at) > new Date()) return true;
    return false;
  },

  getFreeCount(total) {
    if (!total || total <= 0) return 0;
    return Math.max(1, Math.ceil(total * 0.1));
  },

  isLocked(index, total) {
    if (this.isVipUser) return false;
    return index >= this.getFreeCount(total);
  },

  openVipModal() {
    const modal = document.getElementById('vip-modal');
    if (modal) {
      modal.classList.add('open');
    } else {
      const lang = localStorage.getItem('mathpro_lang') || 'vi';
      const msg = lang === 'en'
        ? '🔒 This content is for VIP Members only (Free accounts can access 10%). Go to VIP registration page?'
        : '🔒 Nội dung này chỉ dành cho Thành viên VIP (Tài khoản thường xem miễn phí 10%). Chuyển đến trang đăng ký VIP ngay?';
      if (confirm(msg)) window.location.href = '/subscribe.html';
    }
  }
};

// === KHO BÀI HỌC LÝ THUYẾT (LESSONS) CHO LỚP 6 - 9 ===
const GRADE_LESSONS = {
  6: [
    { tag: 'Số học', title: 'Số nguyên & Trục số', summary: 'Hiểu tập hợp số nguyên âm, số 0, số nguyên dương và cách so sánh trên trục số.', formula: 'ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}', example: 'Trên trục số nằm ngang, số nằm bên trái luôn nhỏ hơn số nằm bên phải: -5 < -2 < 0 < 3.', tip: 'Số âm có phần số càng lớn thì giá trị càng nhỏ (ví dụ: -10 < -1).' },
    { tag: 'Số học', title: 'Giá trị tuyệt đối & Số đối', summary: 'Khoảng cách từ một điểm đến điểm 0 trên trục số gọi là giá trị tuyệt đối.', formula: '|a| = a nếu a ≥ 0 ; |a| = -a nếu a < 0', example: '|-7| = 7 và |7| = 7. Số đối của -7 là 7.', tip: 'Giá trị tuyệt đối của mọi số luôn không âm (≥ 0).' },
    { tag: 'Số học', title: 'ƯCLN & BCNN', summary: 'Tìm Ước chung lớn nhất và Bội chung nhỏ nhất bằng phân tích thừa số nguyên tố.', formula: 'a × b = ƯCLN(a, b) × BCNN(a, b)', example: '12 = 2² × 3; 18 = 2 × 3² ⇒ ƯCLN(12,18) = 2 × 3 = 6; BCNN = 2² × 3² = 36.', tip: 'ƯCLN lấy thừa số CHUNG với số mũ NHỎ nhất; BCNN lấy CHUNG & RIÊNG với số mũ LỚN nhất.' },
    { tag: 'Số học', title: 'Lũy thừa & Thứ tự phép tính (PEMDAS)', summary: 'Quy tắc tính giá trị biểu thức có dấu ngoặc và lũy thừa.', formula: 'Ngoặc ( ) → Lũy thừa (aⁿ) → Nhân/Chia (×, ÷) → Cộng/Trừ (+, -)', example: '2 + 3 × 4² = 2 + 3 × 16 = 2 + 48 = 50.', tip: 'Nhân và Chia ngang hàng nhau, thực hiện từ trái sang phải.' },
    { tag: 'Phân số', title: 'Phép nhân & Phép chia phân số', summary: 'Nhân tử với tử, mẫu với mẫu; chia phân số là nhân với nghịch đảo.', formula: '(a/b) ÷ (c/d) = (a/b) × (d/c) (với b, c, d ≠ 0)', example: '(2/3) ÷ (4/5) = (2/3) × (5/4) = 10/12 = 5/6.', tip: 'Luôn rút gọn chéo trước khi nhân để tránh số quá lớn.' },
    { tag: 'Tỉ số & %', title: 'Tỉ số, Tỉ lệ & Đơn giá (Unit Rate)', summary: 'So sánh hai đại lượng cùng hoặc khác đơn vị và quy về 1 đơn vị.', formula: 'Đơn giá = Tổng giá trị ÷ Số lượng', example: 'Mua 4 quyển vở hết 36.000đ ⇒ Đơn giá = 36.000 ÷ 4 = 9.000đ/quyển.', tip: 'Dùng đơn giá để so sánh xem gói hàng nào tiết kiệm hơn.' },
    { tag: 'Tỉ số & %', title: 'Số thập phân & Phần trăm', summary: 'Chuyển đổi linh hoạt giữa phân số, số thập phân và tỉ số phần trăm.', formula: 'x% = x / 100 ; Tìm p% của A = A × (p / 100)', example: '25% của 80 = 80 × 0,25 = 20. Giảm giá 20% cho áo 200k còn 160k.', tip: 'Muốn đổi số thập phân sang %, chỉ cần dịch dấu phẩy sang phải 2 chữ số.' },
    { tag: 'Đại số', title: 'Biểu thức đại số & Tính chất phân phối', summary: 'Viết, tính giá trị và rút gọn biểu thức chứa biến.', formula: 'a(b + c) = ab + ac', example: '3(x + 4) + 2x = 3x + 12 + 2x = 5x + 12.', tip: 'Chỉ cộng/trừ được các hạng tử đồng dạng (cùng phần biến).' },
    { tag: 'Đại số', title: 'Phương trình & Bất đẳng thức 1 ẩn', summary: 'Tìm giá trị biến thỏa mãn đẳng thức hoặc bất đẳng thức đơn giản.', formula: 'x + a = b ⇒ x = b - a ; ax = b ⇒ x = b / a', example: '2x - 5 = 11 ⇒ 2x = 16 ⇒ x = 8.', tip: 'Luôn thử lại nghiệm bằng cách thay x vào phương trình ban đầu.' },
    { tag: 'Hình học', title: 'Mặt phẳng tọa độ (Coordinate Plane)', summary: 'Xác định tọa độ điểm (x, y) và tính khoảng cách trên 4 góc phần tư.', formula: 'Điểm M(x, y): x là hoành độ, y là tung độ', example: 'Khoảng cách giữa A(2, 3) và B(2, -4) là |3 - (-4)| = 7 đơn vị.', tip: 'Điểm trên trục Ox có y = 0; điểm trên trục Oy có x = 0.' },
    { tag: 'Hình học', title: 'Diện tích Hình bình hành, Tam giác, Hình thang', summary: 'Công thức tính diện tích các tứ giác và tam giác phổ biến.', formula: 'S_tam_giác = (a × h)/2 ; S_thang = ((a + b) × h)/2', example: 'Hình thang có đáy 6cm, 10cm, cao 4cm ⇒ S = ((6+10)×4)/2 = 32 cm².', tip: 'Chiều cao h luôn phải vuông góc với cạnh đáy.' },
    { tag: 'Thống kê', title: 'Trung bình cộng, Trung vị & Mốt', summary: 'Các số đo xu thế trung tâm của một tập dữ liệu thống kê.', formula: 'Mean = Tổng ÷ Số phần tử ; Median = Số chính giữa khi đã sắp xếp', example: 'Dãy {2, 3, 3, 5, 12}: Mean = 5, Median = 3, Mode = 3.', tip: 'Khi dữ liệu có giá trị ngoại lai quá lớn (12), Trung vị phản ánh chính xác hơn.' }
  ],
  7: [
    { tag: 'Số học', title: 'Cộng, Trừ, Nhân, Chia Số nguyên', summary: 'Quy tắc dấu khi thực hiện 4 phép tính trên tập số nguyên ℤ.', formula: '(+) × (-) = (-) ; (-) × (-) = (+)', example: '(-4) × (-6) = +24 ; (-15) + 8 = -7.', tip: 'Cùng dấu thì dương, trái dấu thì âm (khi nhân hoặc chia).' },
    { tag: 'Số hữu tỉ', title: 'Tập hợp Số hữu tỉ ℚ', summary: 'Biểu diễn số hữu tỉ dạng phân số a/b và thực hiện phép tính.', formula: 'a/b + c/d = (ad + bc) / bd', example: '-3/4 + 1/2 = -3/4 + 2/4 = -1/4.', tip: 'Mọi số nguyên và số thập phân hữu hạn/tuần hoàn đều là số hữu tỉ.' },
    { tag: 'Lũy thừa', title: 'Quy tắc nhân, chia Lũy thừa cùng cơ số', summary: 'Rút gọn biểu thức chứa lũy thừa nhanh chóng.', formula: 'aᵐ · aⁿ = aᵐ⁺ⁿ ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ ; (aᵐ)ⁿ = aᵐ·ⁿ', example: '2⁵ × 2³ ÷ 2⁴ = 2^(5+3-4) = 2⁴ = 16.', tip: 'Quy ước: a⁰ = 1 với mọi a ≠ 0.' },
    { tag: 'Tỉ lệ', title: 'Tỉ lệ thuận & Hằng số tỉ lệ', summary: 'Nhận biết đại lượng tỉ lệ thuận y = kx từ bảng và đồ thị.', formula: 'y = k · x ⇒ k = y / x (k ≠ 0)', example: 'Nếu y tỉ lệ thuận với x và x=3, y=12 thì k = 4 ⇒ y = 4x.', tip: 'Đồ thị của đại lượng tỉ lệ thuận luôn là đường thẳng đi qua gốc tọa độ O(0,0).' },
    { tag: 'Ứng dụng', title: 'Phần trăm thay đổi & Lãi suất đơn', summary: 'Tính tỉ lệ tăng/giảm phần trăm và bài toán lãi suất ngân hàng.', formula: '% Thay đổi = |Mới - Cũ| / Cũ × 100% ; Lãi = P × r × t', example: 'Giá tăng từ 50k lên 60k: % tăng = (10/50)×100% = 20%.', tip: 'Luôn chia cho giá trị BAN ĐẦU (Cũ), không chia cho giá trị mới.' },
    { tag: 'Đại số', title: 'Khai triển & Đặt nhân tử chung', summary: 'Biến đổi biểu thức đại số tương đương bằng tính chất phân phối.', formula: 'ab + ac = a(b + c)', example: '6x + 9y = 3(2x + 3y).', tip: 'Tìm ƯCLN của các hệ số để đặt ra ngoài dấu ngoặc.' },
    { tag: 'Đại số', title: 'Giải phương trình nhiều bước', summary: 'Giải phương trình dạng ax + b = c và phương trình có ngoặc.', formula: 'Phá ngoặc → Gom biến về 1 vế → Chia hệ số', example: '3(x - 2) + 4 = 19 ⇒ 3x - 6 + 4 = 19 ⇒ 3x = 21 ⇒ x = 7.', tip: 'Khi chuyển vế một hạng tử, bắt buộc phải đổi dấu (+ thành -, - thành +).' },
    { tag: 'Đại số', title: 'Bất đẳng thức 1 ẩn', summary: 'Giải bất đẳng thức và lưu ý đặc biệt khi nhân/chia cho số âm.', formula: 'Nếu c < 0 và a < b thì a · c > b · c (ĐỔI CHIỀU)', example: '-2x > 10 ⇒ x < -5 (chia cả hai vế cho -2 nên đổi > thành <).', tip: 'Lỗi sai phổ biến nhất: quên đổi chiều bất đẳng thức khi chia cho số âm!' },
    { tag: 'Hình học', title: 'Các cặp góc: Kề bù, Đối đỉnh & Đường thẳng song song', summary: 'Tính số đo góc chưa biết dựa vào tính chất góc.', formula: 'Góc đối đỉnh bằng nhau ; Hai góc kề bù có tổng = 180°', example: 'Hai góc phụ nhau có tổng 90°. Nếu góc A = 35° thì góc phụ với nó = 55°.', tip: 'Hai đường thẳng song song tạo ra các cặp góc so le trong và đồng vị bằng nhau.' },
    { tag: 'Hình học', title: 'Chu vi & Diện tích Hình tròn', summary: 'Áp dụng số Pi (π ≈ 3,14) để tính chu vi và diện tích hình tròn.', formula: 'C = 2πr = πd ; S = πr²', example: 'Hình tròn bán kính r = 5cm ⇒ C = 10π ≈ 31,4cm ; S = 25π ≈ 78,5cm².', tip: 'Kiểm tra kỹ đề bài cho Bán kính (r) hay Đường kính (d = 2r).' },
    { tag: 'Hình khối', title: 'Diện tích & Thể tích Hình lăng trụ, Hình trụ', summary: 'Tính thể tích các khối lăng trụ đứng và hình trụ.', formula: 'V = S_đáy × h ; V_trụ = πr²h', example: 'Lăng trụ có diện tích đáy 15cm², cao 8cm ⇒ V = 15 × 8 = 120 cm³.', tip: 'Đơn vị thể tích luôn là lũy thừa bậc 3 (cm³, m³).' },
    { tag: 'Xác suất', title: 'Xác suất lý thuyết & Thực nghiệm', summary: 'Đo lường khả năng xảy ra của một biến cố.', formula: 'P(A) = Số kết quả thuận lợi / Tổng số kết quả có thể', example: 'Tung xúc xắc 6 mặt: P(ra số chẵn) = 3/6 = 1/2 = 50%.', tip: 'Xác suất của mọi biến cố luôn nằm trong đoạn từ 0 đến 1.' }
  ],
  8: [
    { tag: 'Số thực', title: 'Số vô tỉ, Căn bậc hai & Căn bậc ba', summary: 'Phân biệt số hữu tỉ và số vô tỉ; ước lượng căn bậc hai.', formula: 'x² = a (a ≥ 0) ⇒ x = ±√a ; ∛(a³) = a', example: '√49 = 7 ; √2 ≈ 1,414 (số vô tỉ) ; ∛(-27) = -3.', tip: 'Số thập phân vô hạn không tuần hoàn là số vô tỉ.' },
    { tag: 'Lũy thừa', title: 'Số mũ nguyên âm & Quy tắc mũ', summary: 'Biến đổi lũy thừa có số mũ âm thành phân số dương.', formula: 'a⁻ⁿ = 1 / aⁿ (a ≠ 0)', example: '2⁻³ = 1 / 2³ = 1/8 ; x⁵ · x⁻² = x³.', tip: 'Số mũ âm KHÔNG làm giá trị của cơ số dương bị âm!' },
    { tag: 'Số học', title: 'Ký hiệu khoa học (Scientific Notation)', summary: 'Viết các số rất lớn hoặc rất nhỏ gọn gàng dưới dạng a × 10ⁿ.', formula: 'a × 10ⁿ với 1 ≤ |a| < 10 và n ∈ ℤ', example: '450.000 = 4,5 × 10⁵ ; 0,00032 = 3,2 × 10⁻⁴.', tip: 'Dịch dấu phẩy sang trái → mũ dương; dịch sang phải → mũ âm.' },
    { tag: 'Đại số', title: 'Phương trình bậc nhất có ẩn ở 2 vế', summary: 'Nhận biết phương trình có 1 nghiệm, vô nghiệm hoặc vô số nghiệm.', formula: 'ax + b = cx + d ⇒ (a - c)x = d - b', example: '5x - 3 = 2x + 9 ⇒ 3x = 12 ⇒ x = 4. Còn 2x + 1 = 2x + 5 ⇒ Vô nghiệm.', tip: 'Nếu biến bị triệt tiêu hết và ra mệnh đề đúng (3 = 3) → Vô số nghiệm.' },
    { tag: 'Hàm số', title: 'Hệ số góc (Slope) & Phương trình y = mx + b', summary: 'Tìm hệ số góc đường thẳng đi qua 2 điểm và ý nghĩa tung độ gốc.', formula: 'm = (y₂ - y₁) / (x₂ - x₁)', example: 'Qua (1, 2) và (3, 8) ⇒ m = (8 - 2)/(3 - 1) = 3.', tip: 'Hai đường thẳng song song có hệ số góc bằng nhau (m₁ = m₂).' },
    { tag: 'Hàm số', title: 'Hàm số tuyến tính & Phi tuyến', summary: 'Phân biệt hàm bậc nhất (đồ thị thẳng) và hàm phi tuyến.', formula: 'Tuyến tính: tốc độ biến thiên (Δy/Δx) không đổi', example: 'y = 3x - 1 là tuyến tính; y = x² hoặc y = 2ˣ là phi tuyến.', tip: 'Kiểm tra bảng giá trị: nếu x tăng đều mà y cũng tăng/giảm một lượng đều thì là tuyến tính.' },
    { tag: 'Đại số', title: 'Hệ phương trình bậc nhất hai ẩn', summary: 'Giải hệ phương trình bằng phương pháp thế hoặc cộng đại số.', formula: '{ a₁x + b₁y = c₁ ; a₂x + b₂y = c₂ }', example: 'x + y = 10 và x - y = 2 ⇒ Cộng 2 vế: 2x = 12 ⇒ x = 6, y = 4.', tip: 'Giao điểm của 2 đường thẳng trên đồ thị chính là nghiệm của hệ.' },
    { tag: 'Hình học', title: 'Phép biến hình: Tịnh tiến, Đối xứng, Quay & Vị tự', summary: 'Biến đổi tọa độ điểm qua các phép dời hình và đồng dạng.', formula: 'Đối xứng trục Ox: (x, y) → (x, -y) ; Trục Oy: (x, y) → (-x, y)', example: 'Tịnh tiến A(2, 3) sang phải 4, xuống 1 ⇒ A\'(6, 2).', tip: 'Phép vị tự tỉ số k nhân cả hoành độ và tung độ với k.' },
    { tag: 'Hình học', title: 'Định lý Pythagore & Khoảng cách', summary: 'Tính cạnh tam giác vuông và khoảng cách 2 điểm trên mặt phẳng tọa độ.', formula: 'a² + b² = c² (c là cạnh huyền) ; d = √[(x₂-x₁)² + (y₂-y₁)²]', example: 'Tam giác vuông có 2 cạnh góc vuông 6 và 8 ⇒ Cạnh huyền = √(36+64) = 10.', tip: 'Bộ ba Pythagore hay gặp: (3,4,5), (5,12,13), (8,15,17).' },
    { tag: 'Hình khối', title: 'Thể tích Hình trụ, Hình nón & Hình cầu', summary: 'Công thức thể tích 3 khối tròn xoay cơ bản.', formula: 'V_trụ = πr²h ; V_nón = (1/3)πr²h ; V_cầu = (4/3)πr³', example: 'Hình nón có thể tích bằng 1/3 hình trụ cùng đáy và cùng chiều cao.', tip: 'Nhớ kiểm tra kỹ hệ số 1/3 cho hình nón và 4/3 cho hình cầu.' },
    { tag: 'Thống kê', title: 'Biểu đồ phân tán & Đường xu hướng', summary: 'Đọc tương quan dương, âm, ngoại lai và đường thẳng phù hợp nhất.', formula: 'Tương quan dương: x tăng → y tăng ; Tương quan âm: x tăng → y giảm', example: 'Số giờ ôn bài và điểm thi thường có tương quan dương.', tip: 'Điểm nằm tách biệt hẳn khỏi đám mây điểm gọi là ngoại lai (Outlier).' }
  ],
  9: [
    { tag: 'Đại số', title: 'Hệ phương trình & Biện luận nghiệm', summary: 'Giải hệ 2 phương trình bậc nhất 2 ẩn và xét điều kiện có nghiệm duy nhất.', formula: 'a₁/a₂ ≠ b₁/b₂ ⇒ Có nghiệm duy nhất', example: 'Nếu 2 đường thẳng trùng nhau ⇒ Vô số nghiệm; song song ⇒ Vô nghiệm.', tip: 'Ưu tiên phương pháp cộng đại số khi có hệ số đối nhau hoặc bằng nhau.' },
    { tag: 'Đại số', title: 'Bất đẳng thức & Hệ bất đẳng thức 2 ẩn', summary: 'Xác định miền nghiệm của bất phương trình bậc nhất 2 ẩn trên mặt phẳng.', formula: 'ax + by ≤ c (biên là đường thẳng ax + by = c)', example: 'Thử điểm O(0,0): nếu thỏa mãn thì miền nghiệm là nửa mặt phẳng chứa O.', tip: 'Dấu ≤ hoặc ≥ vẽ đường biên liền nét; dấu < hoặc > vẽ nét đứt.' },
    { tag: 'Căn thức', title: 'Căn bậc hai & Trục căn thức ở mẫu', summary: 'Rút gọn biểu thức chứa căn thức bậc hai và khử mẫu.', formula: '√(A²) = |A| ; 1 / (√a - √b) = (√a + √b) / (a - b)', example: '√12 + √27 = 2√3 + 3√3 = 5√3.', tip: 'Luôn nhớ điều kiện xác định: biểu thức dưới dấu căn ≥ 0.' },
    { tag: 'Hàm số', title: 'Hàm số bậc nhất y = ax + b (a ≠ 0)', summary: 'Tính đồng biến, nghịch biến và góc tạo bởi đường thẳng với trục Ox.', formula: 'a > 0: đồng biến ; a < 0: nghịch biến ; Vuông góc: a₁ · a₂ = -1', example: 'Đường thẳng vuông góc với y = 2x + 1 có hệ số góc a = -1/2.', tip: 'Hai đường thẳng cắt nhau tại trục tung khi a₁ ≠ a₂ và b₁ = b₂.' },
    { tag: 'Hàm số', title: 'Hàm số bậc hai & Parabol y = ax² + bx + c', summary: 'Tìm đỉnh Parabol, trục đối xứng và chiều bề lõm.', formula: 'Hoành độ đỉnh: x_I = -b / (2a) ; Trục đối xứng: x = -b / (2a)', example: 'y = x² - 4x + 3 có đỉnh I(2, -1) và hướng bề lõm lên trên (a = 1 > 0).', tip: 'a > 0 parabol quay lên (có giá trị nhỏ nhất); a < 0 quay xuống.' },
    { tag: 'Phương trình', title: 'Phương trình bậc hai & Công thức nghiệm', summary: 'Giải phương trình ax² + bx + c = 0 (a ≠ 0) bằng biệt thức Delta.', formula: 'Δ = b² - 4ac ; x = (-b ± √Δ) / (2a)', example: 'x² - 5x + 6 = 0 có Δ = 25 - 24 = 1 > 0 ⇒ x₁ = 3, x₂ = 2.', tip: 'Δ > 0: 2 nghiệm phân biệt; Δ = 0: nghiệm kép; Δ < 0: vô nghiệm.' },
    { tag: 'Phương trình', title: 'Định lý Vi-ét & Ứng dụng', summary: 'Tính tổng, tích hai nghiệm và tìm hai số khi biết tổng và tích.', formula: 'x₁ + x₂ = -b/a ; x₁ · x₂ = c/a', example: 'Nếu a + b + c = 0 thì có 1 nghiệm x₁ = 1, x₂ = c/a.', tip: 'Dùng Vi-ét để tính x₁² + x₂² = (x₁ + x₂)² - 2x₁x₂ mà không cần giải nghiệm.' },
    { tag: 'Hàm số mũ', title: 'Hàm số mũ: Tăng trưởng & Suy giảm', summary: 'Mô hình hóa lãi kép, tăng trưởng dân số và phân rã theo hàm mũ.', formula: 'y = a · (1 ± r)ᵗ', example: 'Gửi 10 triệu lãi 6%/năm sau 3 năm: A = 10 · (1,06)³ ≈ 11,91 triệu.', tip: 'Khác với hàm bậc nhất (cộng thêm hằng số), hàm mũ nhân với hằng số sau mỗi chu kỳ.' },
    { tag: 'Đa thức', title: 'Hằng đẳng thức đáng nhớ & Phân tích nhân tử', summary: '7 hằng đẳng thức và tách hạng tử giải nhanh đa thức bậc 2.', formula: 'a² - b² = (a - b)(a + b) ; (a ± b)² = a² ± 2ab + b²', example: 'x² + 5x + 6 = (x + 2)(x + 3) (vì 2+3=5 và 2×3=6).', tip: 'Luôn kiểm tra xem có thể đặt nhân tử chung trước khi dùng hằng đẳng thức.' },
    { tag: 'Lượng giác', title: 'Tỉ số lượng giác trong Tam giác vuông', summary: 'Áp dụng Sin, Cos, Tan, Cot để tính cạnh và góc.', formula: 'sin = Đối/Huyền ; cos = Kề/Huyền ; tan = Đối/Kề', example: 'Tam giác vuông có góc 30°, cạnh huyền 10 ⇒ Cạnh đối = 10 · sin(30°) = 5.', tip: 'Mẹo nhớ: "Sin đi học, Cos không hư, Tan đoàn kết, Cot kết đoàn".' },
    { tag: 'Hình học', title: 'Đường tròn, Góc nội tiếp & Tiếp tuyến', summary: 'Quan hệ giữa góc ở tâm, góc nội tiếp và tính chất tiếp tuyến.', formula: 'Góc nội tiếp = ½ Số đo cung bị chắn = ½ Góc ở tâm cùng chắn 1 cung', example: 'Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°).', tip: 'Tiếp tuyến luôn vuông góc với bán kính tại tiếp điểm.' }
  ]
};

// public/js/gradeEngine.js
window.initGradePage = function (config) {
  const { grade, title, topics, generator, videos } = config;
  let isVipUser = false;
  let currentSkill = null;
  let currentQuestion = null;
  let smartScore = 0;
  const storageKey = `mathpro_g${grade}_progress`;
  let progressMap = JSON.parse(localStorage.getItem(storageKey) || '{}');

  // 1. Tiêm CSS nâng cấp cho nút Trang chủ, Tab Videos, Lessons, Games & Thẻ khóa VIP
  if (!document.getElementById('grade-engine-enhancements')) {
    const style = document.createElement('style');
    style.id = 'grade-engine-enhancements';
    style.textContent = `
      .home-nav-btn {
        background: #ffffff !important; color: #059669 !important;
        font-weight: 800 !important; box-shadow: 0 2px 8px rgba(0,0,0,0.12);
      }
      .home-nav-btn:hover { background: #ecfdf5 !important; transform: translateY(-1px); }

      /* Video & Lesson Cards */
      .video-card, .lesson-card {
        background: #fff; border-radius: 18px; overflow: hidden;
        border: 1px solid #e2e8f0; box-shadow: 0 4px 14px rgba(0,0,0,0.05);
        display: flex; flex-direction: column; transition: transform 0.2s, box-shadow 0.2s;
        position: relative;
      }
      .video-card:hover, .lesson-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(16,185,129,0.15); }
      .video-thumb {
        height: 140px; display: grid; place-items: center; position: relative;
        background: linear-gradient(135deg, #059669, #3b82f6); color: #fff; cursor: pointer;
      }
      .video-play-circle {
        width: 56px; height: 56px; border-radius: 50%; background: rgba(255,255,255,0.25);
        backdrop-filter: blur(4px); display: grid; place-items: center; font-size: 24px;
        border: 2px solid #fff; transition: transform 0.2s;
      }
      .video-card:hover .video-play-circle { transform: scale(1.12); background: rgba(255,255,255,0.38); }
      .video-duration {
        position: absolute; bottom: 10px; right: 12px; background: rgba(15,23,42,0.75);
        color: #fff; font-size: 12px; font-weight: 700; padding: 3px 9px; border-radius: 8px;
      }
      .video-body, .lesson-body { padding: 18px; display: flex; flex-direction: column; flex: 1; justify-content: space-between; gap: 10px; }

      /* Lessons Grid & Cards (Lớp 6 - 9) */
      .lessons-grid {
        display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
        gap: 18px; margin-top: 12px;
      }
      .lesson-top {
        padding: 16px 18px 12px; color: #fff; position: relative; cursor: pointer;
      }
      .lesson-tag {
        display: inline-block; background: rgba(255,255,255,0.22); padding: 3px 10px;
        border-radius: 99px; font-size: 11px; font-weight: 700; margin-bottom: 8px;
      }
      .lesson-formula-box {
        background: #f0fdf4; border-left: 4px solid #059669; padding: 12px 14px;
        border-radius: 8px; font-family: monospace; font-size: 15px; font-weight: 700;
        color: #065f46; margin: 10px 0;
      }
      .lesson-example-box {
        background: #eff6ff; border-left: 4px solid #3b82f6; padding: 12px 14px;
        border-radius: 8px; font-size: 14px; color: #1e3a8a; margin: 10px 0;
      }
      .lesson-tip-box {
        background: #fffbeb; border-left: 4px solid #f59e0b; padding: 10px 14px;
        border-radius: 8px; font-size: 13.5px; color: #92400e; margin: 10px 0;
      }

      /* CSS đồng bộ thẻ khóa VIP */
      .vip-locked-card { opacity: 0.8; border: 1.5px dashed #cbd5e1 !important; }
      .vip-locked-card:hover { opacity: 0.96; }
      .vip-lock-badge {
        position: absolute; top: 10px; right: 10px;
        background: linear-gradient(135deg, #f59e0b, #d97706);
        color: #fff; font-size: 12px; font-weight: 700;
        padding: 4px 10px; border-radius: 999px;
        box-shadow: 0 2px 6px rgba(217, 119, 6, 0.35); z-index: 2;
      }
      .free-badge {
        position: absolute; top: 10px; right: 10px;
        background: #10b981; color: #fff; font-size: 11px; font-weight: 700;
        padding: 3px 9px; border-radius: 999px; z-index: 2;
      }
    `;
    document.head.appendChild(style);
  }

  // 2. Thêm nút Quay lại Trang chủ vào Header
  const navActions = document.querySelector('.nav-actions');
  if (navActions && !navActions.querySelector('.home-nav-btn')) {
    const homeBtn = document.createElement('a');
    homeBtn.href = '/';
    homeBtn.className = 'nav-btn home-nav-btn';
    homeBtn.innerHTML = '🏠 Trang chủ';
    navActions.insertBefore(homeBtn, navActions.firstChild);
  }

  // 2b. Tự động cấu hình Tab cho Lớp 6 - 9: Ẩn Games & Fluency Zone, Thêm 📖 Lessons
  if (grade >= 6) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      const oc = btn.getAttribute('onclick') || '';
      if (oc.includes("'games'") || oc.includes("'fluency'")) {
        btn.style.display = 'none';
      }
    });
    const gSec = document.getElementById('tab-games');
    const fSec = document.getElementById('tab-fluency');
    if (gSec) gSec.style.display = 'none';
    if (fSec) fSec.style.display = 'none';

    const tabsBar = document.querySelector('.tabs') || document.querySelector('.tab-btn')?.parentElement;
    if (tabsBar && !tabsBar.querySelector('[data-tab="lessons"]')) {
      const lessonBtn = document.createElement('button');
      lessonBtn.className = 'tab-btn';
      lessonBtn.setAttribute('data-tab', 'lessons');
      lessonBtn.innerHTML = '📖 Lessons';
      lessonBtn.onclick = function () { window.switchTab('lessons', this); };
      const firstBtn = tabsBar.querySelector('.tab-btn');
      if (firstBtn && firstBtn.nextSibling) {
        tabsBar.insertBefore(lessonBtn, firstBtn.nextSibling);
      } else {
        tabsBar.appendChild(lessonBtn);
      }
    }

    if (!document.getElementById('tab-lessons')) {
      const skillsSec = document.getElementById('tab-skills');
      const lessonSec = document.createElement('div');
      lessonSec.id = 'tab-lessons';
      lessonSec.className = 'section';
      lessonSec.innerHTML = `<div id="lessons-container" class="lessons-grid"></div>`;
      if (skillsSec && skillsSec.parentElement) {
        skillsSec.parentElement.insertBefore(lessonSec, skillsSec.nextSibling);
      }
    }
  }

  document.getElementById('grade-header-title').innerText = `| ${title}`;
  document.title = `MathPro - ${title}`;

  async function checkUserStatus() {
    try {
      const res = await fetch('/api/me');
      if (res.ok) {
        const data = await res.json();
        const isAdmin = data.user && (data.user.role === 'admin' || data.user.email === 'admin@mathpro.vn');
        const hasValidVip = data.vip_expires_at && new Date(data.vip_expires_at) > new Date();
        if (isAdmin || hasValidVip) {
          isVipUser = true;
          window.MathProVIP.isVipUser = true;
        }
      }
    } catch (e) {}
  }

  window.switchTab = function (tabName, btn) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    const targetSec = document.getElementById('tab-' + tabName);
    if (targetSec) targetSec.classList.add('active');
    if (btn) btn.classList.add('active');
    if (tabName === 'games' && grade < 6) initGame();
    if (tabName === 'fluency' && grade < 6 && window.renderFluencyZone) {
      window.renderFluencyZone(grade, launchFireworks);
    }
    if (tabName === 'lessons' && grade >= 6) renderLessons();
  };

  function renderTopics() {
    const container = document.getElementById('topics-container');
    container.innerHTML = '';
    (topics || []).forEach(topic => {
      const card = document.createElement('div');
      card.className = 'topic-card';
      card.innerHTML = `
        <div class="topic-header">
          <div class="topic-code">${topic.code}</div>
          <div class="topic-title">${topic.title}</div>
        </div>
        <ul class="skill-list">
          ${topic.skills.map(sk => {
            const saved = progressMap[sk.id] || 0;
            return `
              <li class="skill-item" onclick="startSkill('${sk.id}')">
                <span class="skill-name">${sk.title}</span>
                <span class="skill-meta">
                  ${saved > 0 ? `<span class="score-pill">${saved}%</span>` : ''}
                  ${sk.free ? `<span class="badge-free">Free</span>` : `<span class="badge-vip">VIP</span>`}
                </span>
              </li>`;
          }).join('')}
        </ul>`;
      container.appendChild(card);
    });
  }

  // 3. Giao diện Tab Lessons (Lớp 6 - 9) + Khóa 90% VIP
  function renderLessons() {
    const box = document.getElementById('lessons-container');
    if (!box) return;
    const list = GRADE_LESSONS[grade] || [];
    const gradients = [
      'linear-gradient(135deg, #059669, #10b981)',
      'linear-gradient(135deg, #2563eb, #3b82f6)',
      'linear-gradient(135deg, #7c3aed, #8b5cf6)',
      'linear-gradient(135deg, #0891b2, #06b6d4)'
    ];

    box.innerHTML = list.map((ls, i) => {
      const locked = window.MathProVIP.isLocked(i, list.length);
      const clickAction = locked ? `window.MathProVIP.openVipModal()` : `openLessonModal(${i})`;
      return `
      <div class="lesson-card ${locked ? 'vip-locked-card' : ''}">
        <div class="lesson-top" style="background:${gradients[i % gradients.length]}" onclick="${clickAction}">
          ${locked ? `<span class="vip-lock-badge">🔒 VIP</span>` : `<span class="free-badge">FREE</span>`}
          <span class="lesson-tag">${ls.tag} • Bài ${i + 1}</span>
          <h3 style="margin:0; font-size:17px; line-height:1.35;">${ls.title}</h3>
        </div>
        <div class="lesson-body">
          <p style="color:#475569; font-size:14px; margin:0; line-height:1.5;">${ls.summary}</p>
          <button class="btn-primary" style="width:100%; ${locked ? 'background:#f59e0b; border-color:#d97706;' : ''}" onclick="${clickAction}">
            ${locked ? '🔒 Mở khóa VIP để học' : '📖 Đọc bài học & Ví dụ'}
          </button>
        </div>
      </div>`;
    }).join('');
  }

  window.openLessonModal = function (idx) {
    const list = GRADE_LESSONS[grade] || [];
    const ls = list[idx];
    if (!ls) return;

    let modal = document.getElementById('lesson-reader-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'lesson-reader-modal';
      modal.className = 'modal-overlay';
      modal.innerHTML = `
        <div class="modal-card" style="max-width:600px; text-align:left; max-height:88vh; overflow-y:auto;">
          <span id="lr-tag" style="display:inline-block; background:#d1fae5; color:#065f46; font-size:12px; font-weight:700; padding:4px 10px; border-radius:99px; margin-bottom:8px;"></span>
          <h3 id="lr-title" style="color:#0f172a; font-size:21px; margin:0 0 8px;"></h3>
          <p id="lr-summary" style="color:#475569; font-size:14.5px; line-height:1.6; margin-bottom:12px;"></p>
          <div class="lesson-formula-box">📌 Công thức / Quy tắc:<br><span id="lr-formula"></span></div>
          <div class="lesson-example-box">✏️ Ví dụ minh họa:<br><span id="lr-example"></span></div>
          <div class="lesson-tip-box">💡 Lưu ý quan trọng:<br><span id="lr-tip"></span></div>
          <div style="display:flex; justify-content:flex-end; margin-top:16px;">
            <button class="btn-primary" onclick="document.getElementById('lesson-reader-modal').classList.remove('open')">Đã hiểu, đóng bài học</button>
          </div>
        </div>`;
      document.body.appendChild(modal);
    }
    document.getElementById('lr-tag').innerText = `Lớp ${grade} • ${ls.tag}`;
    document.getElementById('lr-title').innerText = ls.title;
    document.getElementById('lr-summary').innerText = ls.summary;
    document.getElementById('lr-formula').innerText = ls.formula;
    document.getElementById('lr-example').innerText = ls.example;
    document.getElementById('lr-tip').innerText = ls.tip;
    modal.classList.add('open');
  };

  // 4. Giao diện Tab Videos + Khóa 90% VIP (chỉ mở 10% miễn phí)
  function renderVideos() {
    const box = document.getElementById('videos-container');
    if (!box) return;
    const list = videos || [];
    const gradients = [
      'linear-gradient(135deg, #059669, #10b981)',
      'linear-gradient(135deg, #2563eb, #60a5fa)',
      'linear-gradient(135deg, #7c3aed, #a78bfa)'
    ];

    box.innerHTML = list.map((v, i) => {
      const locked = window.MathProVIP.isLocked(i, list.length);
      const clickAction = locked
        ? `window.MathProVIP.openVipModal()`
        : `openVideoModal(${i})`;

      return `
      <div class="video-card ${locked ? 'vip-locked-card' : ''}">
        <div class="video-thumb" style="background:${gradients[i % gradients.length]}" onclick="${clickAction}">
          ${locked ? `<span class="vip-lock-badge">🔒 VIP</span>` : `<span class="free-badge">FREE</span>`}
          <div class="video-play-circle">${locked ? '🔒' : '▶'}</div>
          <span class="video-duration">🎬 Bài giảng #${i + 1}</span>
        </div>
        <div class="video-body">
          <div>
            <h3 style="margin-bottom:6px; font-size:17px;">${v.title}</h3>
            <p style="color:var(--muted); font-size:14px;">${v.desc}</p>
          </div>
          <button class="btn-primary" style="width:100%; ${locked ? 'background:#f59e0b; border-color:#d97706;' : ''}" onclick="${clickAction}">
            ${locked ? '🔒 Mở khóa VIP để xem' : '▶ Xem bài giảng'}
          </button>
        </div>
      </div>`;
    }).join('');
  }

  // === TRÌNH PHÁT BÀI GIẢNG ĐỘNG + HỖ TRỢ YOUTUBE / MP4 ===
  window.openVideoModal = function (idx) {
    const list = videos || [];
    const v = list[idx];
    if (!v) return;

    // 1. Tiêm CSS cho trình phát động (chỉ tiêm 1 lần)
    if (!document.getElementById('mp-anim-player-css')) {
      const st = document.createElement('style');
      st.id = 'mp-anim-player-css';
      st.textContent = `
        .mp-player-stage {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #fff; border-radius: 16px; min-height: 270px;
          padding: 22px; display: flex; flex-direction: column;
          justify-content: space-between; position: relative; overflow: hidden;
          margin-bottom: 14px; border: 2px solid #334155;
        }
        .mp-step-badge {
          display: inline-block; background: rgba(16, 185, 129, 0.2);
          color: #34d399; border: 1px solid #10b981;
          font-size: 12px; font-weight: 700; padding: 4px 12px;
          border-radius: 99px; align-self: flex-start;
        }
        .mp-slide-body {
          text-align: center; padding: 16px 8px;
          animation: mpFadeSlide 0.35s ease;
        }
        @keyframes mpFadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mp-slide-visual {
          font-size: 32px; font-weight: 800; color: #fbbf24;
          margin: 10px 0; letter-spacing: 0.5px;
        }
        .mp-slide-text { font-size: 16px; color: #e2e8f0; line-height: 1.55; }
        .mp-progress-bar {
          height: 6px; background: #334155; border-radius: 99px; overflow: hidden; margin-top: 10px;
        }
        .mp-progress-fill {
          height: 100%; background: linear-gradient(90deg, #10b981, #3b82f6);
          transition: width 0.35s ease;
        }
        .mp-controls {
          display: flex; align-items: center; justify-content: space-between;
          gap: 8px; flex-wrap: wrap; margin-bottom: 12px;
        }
        .mp-ctrl-btn {
          padding: 8px 14px; border-radius: 10px; border: 1px solid #cbd5e1;
          background: #f8fafc; color: #0f172a; font-weight: 700; font-size: 13px;
          cursor: pointer; transition: 0.15s;
        }
        .mp-ctrl-btn:hover { background: #e2e8f0; }
        .mp-ctrl-btn.primary { background: #059669; color: #fff; border-color: #059669; }
        .mp-ctrl-btn.primary:hover { background: #047857; }
        .mp-yt-wrap {
          position: relative; padding-bottom: 56.25%; height: 0;
          border-radius: 14px; overflow: hidden; margin-bottom: 14px; background: #000;
        }
        .mp-yt-wrap iframe, .mp-yt-wrap video {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;
        }
      `;
      document.head.appendChild(st);
    }

    // 2. Tạo Modal nếu chưa có
    let modal = document.getElementById('video-player-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'video-player-modal';
      modal.className = 'modal-overlay';
      modal.innerHTML = `
        <div class="modal-card" style="max-width:640px; text-align:left;">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; margin-bottom:10px;">
            <h3 id="vp-title" style="color:#059669; margin:0; font-size:19px;"></h3>
            <button id="vp-close-x" style="border:none; background:#f1f5f9; width:32px; height:32px; border-radius:50%; cursor:pointer; font-weight:800;">✕</button>
          </div>
          <div id="vp-media-slot"></div>
          <p id="vp-desc" style="color:#475569; font-size:14px; margin-bottom:14px;"></p>
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <button class="btn-primary" style="background:#3b82f6; border-color:#2563eb;" id="vp-go-skills">🎯 Thực hành Skills ngay</button>
            <button class="btn-primary" id="vp-close-btn">Đóng trình phát</button>
          </div>
        </div>`;
      document.body.appendChild(modal);
    }

    // 3. Dọn dẹp timer / giọng đọc cũ khi đóng hoặc mở bài mới
    let autoTimer = null;
    function stopAllMedia() {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    }
    const closeModal = () => {
      stopAllMedia();
      modal.classList.remove('open');
      document.getElementById('vp-media-slot').innerHTML = '';
    };
    document.getElementById('vp-close-x').onclick = closeModal;
    document.getElementById('vp-close-btn').onclick = closeModal;
    document.getElementById('vp-go-skills').onclick = () => {
      closeModal();
      const skillsBtn = document.querySelector('.tab-btn[onclick*="\'skills\'"]');
      if (skillsBtn) window.switchTab('skills', skillsBtn);
    };

    document.getElementById('vp-title').innerText = `🎬 ${v.title}`;
    document.getElementById('vp-desc').innerText = v.desc || '';
    const slot = document.getElementById('vp-media-slot');

    // 4. Hàm tách YouTube ID nếu có link YouTube
    function getYoutubeEmbed(url) {
      if (!url) return null;
      const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      return m ? `https://www.youtube.com/embed/${m}?rel=0` : null;
    }

    const ytEmbed = getYoutubeEmbed(v.videoUrl);
    if (ytEmbed) {
      slot.innerHTML = `<div class="mp-yt-wrap"><iframe src="${ytEmbed}" allowfullscreen></iframe></div>`;
      modal.classList.add('open');
      return;
    }
    if (v.videoUrl && v.videoUrl.endsWith('.mp4')) {
      slot.innerHTML = `<div class="mp-yt-wrap"><video src="${v.videoUrl}" controls autoplay></video></div>`;
      modal.classList.add('open');
      return;
    }

    // 5. Trình phát Bài giảng Động Tiếng Việt (khi chưa gắn link YouTube)
    const sampleByGrade = {
      1: { visual: '3 + 4 = 7 🍎🍎🍎 + 🍎🍎🍎🍎', text: 'Gộp 3 quả táo với 4 quả táo, ta đếm được tất cả 7 quả táo.' },
      2: { visual: '25 + 17 = 42', text: 'Cộng hàng đơn vị: 5 + 7 = 12 (viết 2 nhớ 1). Cộng hàng chục: 2 + 1 + 1 = 4.' },
      3: { visual: '6 × 4 = 24', text: 'Lấy 6 được lặp lại 4 lần: 6 + 6 + 6 + 6 = 24.' },
      4: { visual: '2/5 + 1/5 = 3/5', text: 'Khi cộng hai phân số cùng mẫu, ta giữ nguyên mẫu số và cộng tử số với nhau.' },
      5: { visual: '25% của 80 = 20', text: 'Đổi 25% = 0,25 rồi lấy 80 × 0,25 = 20.' }
    };
    const gSample = sampleByGrade[grade] || { visual: 'a · x + b = c', text: 'Áp dụng quy tắc chuyển vế đổi dấu và rút gọn từng bước một cách cẩn thận.' };

    const steps = Array.isArray(v.steps) && v.steps.length ? v.steps : [
      { badge: 'Bước 1/4 • Mục tiêu', visual: `📘 ${v.title}`, text: `Chào mừng các em đến với bài giảng Lớp ${grade}. Hôm nay chúng ta sẽ cùng tìm hiểu: ${v.desc}` },
      { badge: 'Bước 2/4 • Kiến thức cốt lõi', visual: '💡 Tư duy bản chất', text: `Hãy chú ý quan sát quy luật và từng con số trong bài "${v.title}" để hiểu rõ cách làm thay vì học vẹt nhé!` },
      { badge: 'Bước 3/4 • Ví dụ minh họa', visual: gSample.visual, text: gSample.text },
      { badge: 'Bước 4/4 • Tổng kết', visual: '🏆 Sẵn sàng thực hành!', text: 'Các em đã nắm vững kiến thức rồi! Hãy bấm "Thực hành Skills ngay" để chinh phục 100% SmartScore nhé!' }
    ];

    let curStep = 0;
    let isPlaying = true;
    let voiceOn = true;

    slot.innerHTML = `
      <div class="mp-player-stage">
        <span class="mp-step-badge" id="mp-step-badge"></span>
        <div class="mp-slide-body" id="mp-slide-body">
          <div class="mp-slide-visual" id="mp-slide-visual"></div>
          <div class="mp-slide-text" id="mp-slide-text"></div>
        </div>
        <div class="mp-progress-bar"><div class="mp-progress-fill" id="mp-prog-fill"></div></div>
      </div>
      <div class="mp-controls">
        <div style="display:flex; gap:6px;">
          <button class="mp-ctrl-btn" id="mp-prev">⏮ Trước</button>
          <button class="mp-ctrl-btn primary" id="mp-play">⏸ Tạm dừng</button>
          <button class="mp-ctrl-btn" id="mp-next">⏭ Tiếp</button>
        </div>
        <button class="mp-ctrl-btn" id="mp-voice">🔊 Giọng đọc: BẬT</button>
      </div>
    `;

    function speakStep(text) {
      if (!voiceOn || !('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = (localStorage.getItem('mathpro_lang') || 'vi') === 'en' ? 'en-US' : 'vi-VN';
      utter.rate = 0.95;
      window.speechSynthesis.speak(utter);
    }

    function renderStep() {
      const s = steps[curStep];
      document.getElementById('mp-step-badge').innerText = s.badge;
      const body = document.getElementById('mp-slide-body');
      body.style.animation = 'none';
      void body.offsetWidth;
      body.style.animation = 'mpFadeSlide 0.35s ease';
      document.getElementById('mp-slide-visual').innerText = s.visual;
      document.getElementById('mp-slide-text').innerText = s.text;
      document.getElementById('mp-prog-fill').style.width = `${((curStep + 1) / steps.length) * 100}%`;
      speakStep(s.text);
    }

    function restartAuto() {
      if (autoTimer) clearInterval(autoTimer);
      if (isPlaying) {
        autoTimer = setInterval(() => {
          if (curStep < steps.length - 1) { curStep++; renderStep(); }
          else { isPlaying = false; document.getElementById('mp-play').innerText = '🔄 Phát lại'; clearInterval(autoTimer); }
        }, 5500);
      }
    }

    document.getElementById('mp-prev').onclick = () => { if (curStep > 0) { curStep--; renderStep(); restartAuto(); } };
    document.getElementById('mp-next').onclick = () => { if (curStep < steps.length - 1) { curStep++; renderStep(); restartAuto(); } };
    document.getElementById('mp-play').onclick = () => {
      if (curStep >= steps.length - 1 && !isPlaying) { curStep = 0; isPlaying = true; renderStep(); }
      else { isPlaying = !isPlaying; }
      document.getElementById('mp-play').innerText = isPlaying ? '⏸ Tạm dừng' : '▶ Tiếp tục';
      if (!isPlaying && 'speechSynthesis' in window) window.speechSynthesis.cancel();
      restartAuto();
    };
    document.getElementById('mp-voice').onclick = () => {
      voiceOn = !voiceOn;
      document.getElementById('mp-voice').innerText = voiceOn ? '🔊 Giọng đọc: BẬT' : '🔇 Giọng đọc: TẮT';
      if (!voiceOn && 'speechSynthesis' in window) window.speechSynthesis.cancel();
      else speakStep(steps[curStep].text);
    };

    modal.classList.add('open');
    renderStep();
    restartAuto();
  };

  window.startSkill = function (skillId) {
    let skill = null;
    for (const t of topics) {
      const f = t.skills.find(s => s.id === skillId);
      if (f) { skill = f; break; }
    }
    if (!skill) return;
    if (!skill.free && !isVipUser) {
      window.MathProVIP.openVipModal();
      return;
    }
    currentSkill = skill;
    smartScore = progressMap[skill.id] || 0;
    document.getElementById('topics-container').style.display = 'none';
    document.getElementById('practice-arena').style.display = 'block';
    document.getElementById('active-skill-title').innerText = skill.title;
    updateScoreUI();
    nextQuestion();
  };

  window.exitPractice = function () {
    document.getElementById('practice-arena').style.display = 'none';
    document.getElementById('topics-container').style.display = 'grid';
    renderTopics();
  };

  // === BỘ DỊCH CÂU HỎI TOÁN HỌC TỰ ĐỘNG (VI -> EN) ===
  function translateMathText(str) {
    if (!str || (localStorage.getItem('mathpro_lang') || 'vi') !== 'en') return str;
    let s = String(str);
    const dict = [
      [/Tính nhanh:/g, 'Mental math:'],
      [/Tính giá trị biểu thức:/g, 'Evaluate:'],
      [/Tính giá trị lũy thừa:/g, 'Evaluate the power:'],
      [/Tính:/g, 'Calculate:'],
      [/Tìm x biết:/g, 'Find x:'],
      [/Giải phương trình:/g, 'Solve:'],
      [/Giải bất phương trình:/g, 'Solve the inequality:'],
      [/So sánh:/g, 'Compare:'],
      [/Chọn dấu thích hợp:/g, 'Choose the correct sign:'],
      [/Làm tròn số/g, 'Round'],
      [/Làm tròn/g, 'Round'],
      [/đến hàng trăm nghìn:/g, 'to the nearest hundred thousand:'],
      [/đến hàng nghìn:/g, 'to the nearest thousand:'],
      [/đến hàng trăm:/g, 'to the nearest hundred:'],
      [/đến hàng chục gần nhất:/g, 'to the nearest ten:'],
      [/đến số tự nhiên gần nhất:/g, 'to the nearest whole number:'],
      [/Số nào LỚN NHẤT/g, 'Which number is the GREATEST'],
      [/Số nào NHỎ NHẤT/g, 'Which number is the LEAST'],
      [/Số chẵn/g, 'Even number'],
      [/Số lẻ/g, 'Odd number'],
      [/là số chẵn hay số lẻ\?/g, 'is even or odd?'],
      [/Số nào sau đây là SỐ NGUYÊN TỐ\?/g, 'Which of the following is a PRIME number?'],
      [/Số nào sau đây là SỐ VÔ TỈ\?/g, 'Which of the following is an IRRATIONAL number?'],
      [/ƯCLN của/g, 'GCF of'],
      [/BCNN của/g, 'LCM of'],
      [/và/g, 'and'],
      [/là:/g, 'is:'],
      [/bằng bao nhiêu\?/g, 'equals?'],
      [/bằng:/g, 'equals:'],
      [/nghìn đồng/g, 'k VND'],
      [/giờ/g, 'h'],
      [/phút/g, 'min'],
      [/giây/g, 'sec'],
      [/ngày/g, 'days'],
      [/Hình tròn/g, 'Circle'],
      [/Hình vuông/g, 'Square'],
      [/Hình tam giác/g, 'Triangle'],
      [/Hình chữ nhật/g, 'Rectangle'],
      [/Vô nghiệm/g, 'No solution'],
      [/Vô số nghiệm/g, 'Infinitely many solutions']
    ];
    dict.forEach(([re, rep]) => { s = s.replace(re, rep); });
    return s;
  }

  function translateQuestionObj(qObj) {
    if (!qObj || (localStorage.getItem('mathpro_lang') || 'vi') !== 'en') return qObj;
    return {
      q: translateMathText(qObj.q),
      opts: (qObj.opts || []).map(o => translateMathText(o)),
      ans: translateMathText(qObj.ans)
    };
  }

  function nextQuestion() {
    if (!currentSkill) return;
    currentQuestion = translateQuestionObj(generator(currentSkill.type, currentSkill.max));
    document.getElementById('q-text').innerText = currentQuestion.q;
    document.getElementById('q-feedback').innerText = '';
    const optBox = document.getElementById('q-options');
    optBox.innerHTML = '';
    currentQuestion.opts.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.innerText = opt;
      btn.onclick = () => checkAnswer(opt);
      optBox.appendChild(btn);
    });
  }

  async function checkAnswer(chosen) {
    const fb = document.getElementById('q-feedback');
    const isEn = (localStorage.getItem('mathpro_lang') || 'vi') === 'en';
    if (String(chosen) === String(currentQuestion.ans)) {
      smartScore = Math.min(100, smartScore + 10);
      // Khi trả lời đúng:
      fb.innerText = isEn ? '🎉 Correct! Great job!' : '🎉 Chính xác! Tuyệt vời quá!';

      fb.className = 'feedback-msg fb-ok';
      if (!isVipUser && smartScore >= 90) {
        smartScore = 90;
        saveProgress(currentSkill.id, smartScore);
        updateScoreUI();
        window.MathProVIP.openVipModal();
        return;
      }
      if (smartScore === 100) {
        // Khi đạt 100%:
        fb.innerText = isEn ? '🏆 Awesome! You reached 100% SmartScore!' : '🏆 Xuất sắc! Bạn đã đạt 100% điểm mục tiêu!';
        launchFireworks();
      }
    } else {
      smartScore = Math.max(0, smartScore - 5);
      // Khi trả lời sai:
      fb.innerText = isEn ? `❌ Not quite! Correct answer: ${currentQuestion.ans}` : `❌ Chưa đúng rồi! Đáp án đúng là: ${currentQuestion.ans}`;
      fb.className = 'feedback-msg fb-err';
    }
    saveProgress(currentSkill.id, smartScore);
    updateScoreUI();
    setTimeout(nextQuestion, 1000);
  }

  function updateScoreUI() {
    document.getElementById('smart-score').innerText = smartScore;
    document.getElementById('ss-bar').style.width = smartScore + '%';
  }

  async function saveProgress(skillId, score) {
    progressMap[skillId] = Math.max(progressMap[skillId] || 0, score);
    localStorage.setItem(storageKey, JSON.stringify(progressMap));
    try {
      await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ skill_id: skillId, smart_score: score, grade })
      });
    } catch (e) {}
  }

  window.closeVipModal = () => document.getElementById('vip-modal').classList.remove('open');
  window.toggleLang = () => {
    const next = (localStorage.getItem('mathpro_lang') || 'vi') === 'vi' ? 'en' : 'vi';
    localStorage.setItem('mathpro_lang', next);
    alert(next === 'en' ? 'Switched to English!' : 'Đã chuyển sang Tiếng Việt!');
  };

  window.initGame = function () {
    if (grade < 6 && window.renderMathArcade) {
      window.renderMathArcade(grade, launchFireworks);
    }
  };

  function launchFireworks() {
    const canvas = document.getElementById('fireworks-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = Array.from({ length: 80 }, () => ({
      x: canvas.width / 2, y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 12, vy: (Math.random() - 0.5) * 12,
      color: `hsl(${Math.random() * 360}, 90%, 60%)`, life: 60
    }));
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      particles.forEach(p => {
        if (p.life > 0) {
          alive = true; p.x += p.vx; p.y += p.vy; p.vy += 0.15; p.life--;
          ctx.fillStyle = p.color; ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, Math.PI * 2); ctx.fill();
        }
      });
      if (alive) requestAnimationFrame(animate);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    animate();
  }

  // === ĐỒNG BỘ ĐA NGÔN NGỮ TOÀN BỘ KHUNG HỌC TẬP (VN / EN) ===
  function applyGradeI18n() {
    const lang = localStorage.getItem('mathpro_lang') || 'vi';
    const isEn = lang === 'en';

    // 1. Header & Nút điều hướng
    const homeBtn = document.querySelector('.home-nav-btn');
    if (homeBtn) homeBtn.innerHTML = isEn ? '🏠 Home' : '🏠 Trang chủ';
    const profBtn = document.querySelector('a[href="/profile.html"]');
    if (profBtn) profBtn.innerHTML = isEn ? '👤 Profile' : '👤 Hồ sơ';
    const vipBtn = document.querySelector('a[href="/subscribe.html"].nav-btn');
    if (vipBtn) vipBtn.innerHTML = isEn ? '👑 Upgrade VIP' : '👑 Nâng cấp VIP';

    // 2. Các Tab chính
    document.querySelectorAll('.tab-btn').forEach(btn => {
      const oc = btn.getAttribute('onclick') || '';
      const dt = btn.getAttribute('data-tab') || '';
      if (oc.includes("'skills'")) btn.innerHTML = isEn ? '💎 Skills' : '💎 Kỹ năng';
      else if (dt === 'lessons') btn.innerHTML = isEn ? '📖 Lessons' : '📖 Bài học';
      else if (oc.includes("'videos'")) btn.innerHTML = isEn ? '🎬 Videos' : '🎬 Video bài giảng';
      else if (oc.includes("'games'")) btn.innerHTML = isEn ? '🛸 Games' : '🛸 Trò chơi';
      else if (oc.includes("'fluency'")) btn.innerHTML = isEn ? '🔥 Fluency Zone' : '🔥 Luyện phản xạ';
    });

    // 3. Khung làm bài (Practice Arena)
    const backBtn = document.querySelector('#practice-arena .arena-top button');
    if (backBtn) backBtn.innerHTML = isEn ? '⬅ Back' : '⬅ Quay lại';
    const ssLabel = document.querySelector('.smartscore-box span');
    if (ssLabel) ssLabel.innerText = isEn ? 'SmartScore:' : 'Điểm mục tiêu:';

    // 4. Modal VIP
    const vipTitle = document.querySelector('#vip-modal h2');
    const vipDesc = document.querySelector('#vip-modal p');
    const vipGo = document.querySelector('#vip-modal a.btn-primary');
    const vipClose = document.querySelector('#vip-modal button.opt-btn');
    if (vipTitle) vipTitle.innerText = isEn ? 'Unlock VIP to continue!' : 'Mở khóa VIP để tiếp tục!';
    if (vipDesc) vipDesc.innerText = isEn
      ? 'Upgrade to VIP to unlock all 44 skills, lessons, videos & earn 100% badges!'
      : 'Nâng cấp VIP để mở khóa toàn bộ bài học, video và nhận huy hiệu 100%!';
    if (vipGo) vipGo.innerText = isEn ? 'Upgrade VIP Now' : 'Nâng cấp VIP ngay';
    if (vipClose) vipClose.innerText = isEn ? 'Close' : 'Đóng';

    // 5. Tiêu đề trang
    const gradeLabel = isEn ? `Grade ${grade}` : `Lớp ${grade}`;
    const hdrTitle = document.getElementById('grade-header-title');
    if (hdrTitle) hdrTitle.innerText = `| ${gradeLabel}`;
    document.title = `MathPro - ${gradeLabel}`;
  }

  applyGradeI18n();
  checkUserStatus().then(() => {
    renderTopics();
    renderVideos();
    if (grade >= 6) renderLessons();
  });

  // Mở đúng tab theo ?tab=...
  const urlTab = new URLSearchParams(window.location.search).get('tab');
  if (urlTab && ['skills', 'videos', 'games', 'fluency', 'lessons'].includes(urlTab)) {
    const targetBtn = document.querySelector(`.tab-btn[data-tab="${urlTab}"]`)
      || document.querySelector(`.tab-btn[onclick*="'${urlTab}'"]`);
    if (targetBtn) switchTab(urlTab, targetBtn);
  }
};
