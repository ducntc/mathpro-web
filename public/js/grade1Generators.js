// public/js/grade1Generators.js
window.GRADE1_TOPICS = [
  {
    code: 'A',
    title: 'Đếm & Quy luật số (Counting)',
    skills: [
      { id: 'g1-a-1', title: 'Đếm đồ vật đến 20 (Free)', free: true, type: 'count_objects', max: 20 },
      { id: 'g1-a-2', title: 'Đếm cách 2, 5, 10 đến 100', free: false, type: 'skip_count', max: 100 }
    ]
  },
  {
    code: 'B',
    title: 'Hiểu về phép cộng (Understanding Addition)',
    skills: [
      { id: 'g1-b-1', title: 'Cộng bằng hình ảnh trong phạm vi 10 (Free)', free: true, type: 'add_visual', max: 10 },
      { id: 'g1-b-2', title: 'Viết phép cộng tương ứng', free: false, type: 'add', max: 10 }
    ]
  },
  {
    code: 'C',
    title: 'Kỹ năng cộng cơ bản (Addition Builders)',
    skills: [
      { id: 'g1-c-1', title: 'Cộng với 0, 1, 2', free: false, type: 'add_small', max: 12 },
      { id: 'g1-c-2', title: 'Cộng tạo thành 10 (Make 10)', free: false, type: 'make_ten', max: 10 }
    ]
  },
  {
    code: 'D',
    title: 'Chiến lược tính cộng (Addition Strategies)',
    skills: [
      { id: 'g1-d-1', title: 'Cộng số giống nhau (Doubles)', free: false, type: 'doubles', max: 10 },
      { id: 'g1-d-2', title: 'Cộng 3 số có 1 chữ số', free: false, type: 'add_three', max: 18 }
    ]
  },
  {
    code: 'E',
    title: 'Phép cộng phạm vi 20 (Addition to 20)',
    skills: [
      { id: 'g1-e-1', title: 'Cộng qua 10 trong phạm vi 20', free: false, type: 'add', max: 20 },
      { id: 'g1-e-2', title: 'Tìm số còn thiếu trong phép cộng', free: false, type: 'missing_add', max: 20 }
    ]
  },
  {
    code: 'F',
    title: 'Toán đố phép cộng (Addition Word Problems)',
    skills: [
      { id: 'g1-f-1', title: 'Bài toán có lời văn (Phạm vi 10)', free: false, type: 'word_add', max: 10 },
      { id: 'g1-f-2', title: 'Bài toán có lời văn (Phạm vi 20)', free: false, type: 'word_add', max: 20 }
    ]
  },
  {
    code: 'G',
    title: 'Hiểu về phép trừ (Understanding Subtraction)',
    skills: [
      { id: 'g1-g-1', title: 'Trừ trong phạm vi 10 (Free)', free: true, type: 'sub', max: 10 },
      { id: 'g1-g-2', title: 'Trừ với 0 và trừ chính nó', free: false, type: 'sub_zero', max: 15 }
    ]
  },
  {
    code: 'H',
    title: 'Kỹ năng trừ cơ bản (Subtraction Builders)',
    skills: [
      { id: 'g1-h-1', title: 'Trừ đi 1, 2, 3', free: false, type: 'sub_small', max: 15 },
      { id: 'g1-h-2', title: 'Tách 10 để trừ', free: false, type: 'sub', max: 18 }
    ]
  },
  {
    code: 'I',
    title: 'Chiến lược tính trừ (Subtraction Strategies)',
    skills: [
      { id: 'g1-i-1', title: 'Liên hệ giữa Cộng và Trừ', free: false, type: 'fact_family', max: 15 },
      { id: 'g1-i-2', title: 'Tìm số còn thiếu trong phép trừ', free: false, type: 'missing_sub', max: 20 }
    ]
  },
  {
    code: 'J',
    title: 'Phép trừ phạm vi 20 (Subtraction to 20)',
    skills: [
      { id: 'g1-j-1', title: 'Trừ trong phạm vi 20', free: false, type: 'sub', max: 20 },
      { id: 'g1-j-2', title: 'Cân bằng hai vế phép trừ', free: false, type: 'sub', max: 20 }
    ]
  },
  {
    code: 'K',
    title: 'Toán đố phép trừ (Subtraction Word Problems)',
    skills: [
      { id: 'g1-k-1', title: 'Bài toán bớt đi (Phạm vi 10)', free: false, type: 'word_sub', max: 10 },
      { id: 'g1-k-2', title: 'Bài toán bớt đi (Phạm vi 20)', free: false, type: 'word_sub', max: 20 }
    ]
  },
  {
    code: 'L',
    title: 'Phép tính hỗn hợp (Mixed Operations)',
    skills: [
      { id: 'g1-l-1', title: 'Chọn dấu + hoặc - thích hợp', free: false, type: 'pick_sign', max: 20 },
      { id: 'g1-l-2', title: 'Tính giá trị biểu thức 2 bước', free: false, type: 'mixed_two_step', max: 20 }
    ]
  },
  {
    code: 'M',
    title: 'Hàng chục & Hàng đơn vị (Place Value)',
    skills: [
      { id: 'g1-m-1', title: 'Phân tích số thành Chục & Đơn vị', free: false, type: 'place_value', max: 99 },
      { id: 'g1-m-2', title: 'Ghép Chục & Đơn vị thành số', free: false, type: 'compose_tens', max: 99 }
    ]
  },
  {
    code: 'N',
    title: 'So sánh số (Comparing Numbers)',
    skills: [
      { id: 'g1-n-1', title: 'So sánh hai số đến 100 (<, >, =)', free: false, type: 'compare', max: 99 },
      { id: 'g1-n-2', title: 'Tìm số lớn nhất / nhỏ nhất', free: false, type: 'min_max', max: 99 }
    ]
  },
  {
    code: 'O',
    title: 'Số chẵn, Số lẻ & Ước lượng',
    skills: [
      { id: 'g1-o-1', title: 'Nhận biết số chẵn, số lẻ', free: false, type: 'even_odd', max: 50 },
      { id: 'g1-o-2', title: 'Làm tròn đến hàng chục gần nhất', free: false, type: 'round_ten', max: 99 }
    ]
  },
  {
    code: 'P',
    title: 'Đo lường (Measurement)',
    skills: [
      { id: 'g1-p-1', title: 'Đo độ dài bằng xăng-ti-mét (cm)', free: false, type: 'measure_cm', max: 30 },
      { id: 'g1-p-2', title: 'So sánh dài hơn / ngắn hơn', free: false, type: 'measure_compare', max: 50 }
    ]
  },
  {
    code: 'Q',
    title: 'Thời gian & Đồng hồ (Time)',
    skills: [
      { id: 'g1-q-1', title: 'Xem giờ đúng (O’clock)', free: false, type: 'clock_full', max: 12 },
      { id: 'g1-q-2', title: 'Xem giờ rưỡi (Half past)', free: false, type: 'clock_half', max: 12 }
    ]
  },
  {
    code: 'R',
    title: 'Tiền tệ cơ bản (Money)',
    skills: [
      { id: 'g1-r-1', title: 'Cộng giá trị tiền (nghìn đồng)', free: false, type: 'money_add', max: 20 },
      { id: 'g1-r-2', title: 'Tính tiền thừa khi mua hàng', free: false, type: 'money_change', max: 20 }
    ]
  },
  {
    code: 'S',
    title: 'Dữ liệu & Biểu đồ (Data & Graphs)',
    skills: [
      { id: 'g1-s-1', title: 'Đọc số liệu từ bảng kiểm đếm', free: false, type: 'tally_read', max: 15 },
      { id: 'g1-s-2', title: 'So sánh nhiều hơn / ít hơn trên biểu đồ', free: false, type: 'chart_diff', max: 15 }
    ]
  },
  {
    code: 'T',
    title: 'Hình phẳng 2D (2D Shapes)',
    skills: [
      { id: 'g1-t-1', title: 'Nhận biết hình tròn, vuông, tam giác (Free)', free: true, type: 'shapes_2d', max: 4 },
      { id: 'g1-t-2', title: 'Đếm số cạnh và đỉnh của hình 2D', free: false, type: 'shapes_sides', max: 6 }
    ]
  },
  {
    code: 'U',
    title: 'Hình khối 3D (3D Shapes)',
    skills: [
      { id: 'g1-u-1', title: 'Nhận biết khối lập phương, khối cầu, khối trụ', free: false, type: 'shapes_3d', max: 4 },
      { id: 'g1-u-2', title: 'Đồ vật thực tế dạng khối 3D', free: false, type: 'shapes_3d_real', max: 4 }
    ]
  },
  {
    code: 'V',
    title: 'Phân số cơ bản (Fractions)',
    skills: [
      { id: 'g1-v-1', title: 'Nhận biết một nửa (1/2)', free: false, type: 'fraction_half', max: 20 },
      { id: 'g1-v-2', title: 'Nhận biết một phần tư (1/4)', free: false, type: 'fraction_quarter', max: 20 }
    ]
  }
];

window.generateGrade1Question = function (type, max = 20) {
  const rand = (min, m) => Math.floor(Math.random() * (m - min + 1)) + min;
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const makeOpts = (ansStr, candidates) => {
    const set = new Set([ansStr]);
    for (const c of candidates) {
      if (set.size >= 4) break;
      set.add(String(c));
    }
    let fallback = 1;
    while (set.size < 4) {
      set.add(String(fallback++));
    }
    return shuffle([...set]);
  };

  switch (type) {
    case 'count_objects': {
      const count = rand(4, Math.min(max, 15));
      const icon = ['🍎', '⭐', '🚗', '🎈', '🐥'][rand(0, 4)];
      const ans = String(count);
      return { q: `Đếm xem có bao nhiêu hình: ${icon.repeat(count)}`, opts: makeOpts(ans, [count + 1, count - 1, count + 2]), ans };
    }
    case 'skip_count': {
      const step = [2, 5, 10][rand(0, 2)];
      const start = step * rand(1, 5);
      const ans = String(start + step * 3);
      return {
        q: `Điền số tiếp theo vào dãy: ${start}, ${start + step}, ${start + step * 2}, ___`,
        opts: makeOpts(ans, [start + step * 3 + 1, start + step * 2 + 1, start + step * 4]),
        ans
      };
    }
    case 'add_visual': {
      const a = rand(1, 5), b = rand(1, 5);
      const ans = String(a + b);
      return { q: `🍎`.repeat(a) + ` + ` + `🍎`.repeat(b) + ` = ?`, opts: makeOpts(ans, [a + b + 1, a + b - 1, a + b + 2]), ans };
    }
    case 'add': {
      const a = rand(2, Math.floor(max / 2)), b = rand(2, max - a);
      const ans = String(a + b);
      return { q: `Tính: ${a} + ${b} = ?`, opts: makeOpts(ans, [a + b + 1, a + b - 1, a + b + 2]), ans };
    }
    case 'add_small': {
      const a = rand(1, 9), b = rand(0, 2);
      const ans = String(a + b);
      return { q: `Tính nhẩm: ${a} + ${b} = ?`, opts: makeOpts(ans, [a + b + 1, Math.max(0, a + b - 1), a + b + 2]), ans };
    }
    case 'make_ten': {
      const a = rand(1, 9);
      const ans = String(10 - a);
      return { q: `${a} + ___ = 10`, opts: makeOpts(ans, [10 - a + 1, Math.max(0, 10 - a - 1), 10]), ans };
    }
    case 'doubles': {
      const a = rand(1, max);
      const ans = String(a + a);
      return { q: `Tính: ${a} + ${a} = ?`, opts: makeOpts(ans, [a + a + 2, a + a - 1, a + a + 1]), ans };
    }
    case 'add_three': {
      const a = rand(1, 6), b = rand(1, 6), c = rand(1, 6);
      const ans = String(a + b + c);
      return { q: `Tính: ${a} + ${b} + ${c} = ?`, opts: makeOpts(ans, [a + b + c + 1, a + b + c - 1, a + b + c + 2]), ans };
    }
    case 'missing_add': {
      const a = rand(2, 10), total = rand(a + 1, max);
      const ans = String(total - a);
      return { q: `Tìm số còn thiếu: ${a} + ___ = ${total}`, opts: makeOpts(ans, [total - a + 1, total - a - 1, total + a]), ans };
    }
    case 'word_add': {
      const a = rand(2, Math.floor(max / 2)), b = rand(2, max - a);
      const ans = String(a + b);
      return { q: `Lan có ${a} cái kẹo, mẹ cho thêm ${b} cái. Hỏi Lan có tất cả bao nhiêu cái kẹo?`, opts: makeOpts(ans, [a + b + 1, a + b - 1, a + b + 2]), ans };
    }
    case 'sub': {
      const a = rand(4, max), b = rand(1, a - 1);
      const ans = String(a - b);
      return { q: `Tính: ${a} - ${b} = ?`, opts: makeOpts(ans, [a - b + 1, Math.max(0, a - b - 1), a - b + 2]), ans };
    }
    case 'sub_zero': {
      const a = rand(2, max), isZero = rand(0, 1) === 0;
      const b = isZero ? 0 : a;
      const ans = String(a - b);
      return { q: `Tính nhanh: ${a} - ${b} = ?`, opts: makeOpts(ans,), ans };
    }
    case 'sub_small': {
      const a = rand(4, max), b = rand(1, 3);
      const ans = String(a - b);
      return { q: `Tính: ${a} - ${b} = ?`, opts: makeOpts(ans, [a - b + 1, a - b - 1, a - b + 2]), ans };
    }
    case 'fact_family': {
      const a = rand(2, 8), b = rand(2, 7), sum = a + b;
      const ans = String(b);
      return { q: `Biết ${a} + ${b} = ${sum}. Vậy ${sum} - ${a} = ?`, opts: makeOpts(ans, [a, sum, b + 1]), ans };
    }
    case 'missing_sub': {
      const b = rand(1, 9), res = rand(1, 10), a = b + res;
      const ans = String(b);
      return { q: `Tìm số còn thiếu: ${a} - ___ = ${res}`, opts: makeOpts(ans, [b + 1, Math.max(0, b - 1), res]), ans };
    }
    case 'word_sub': {
      const a = rand(6, max), b = rand(1, a - 1);
      const ans = String(a - b);
      return { q: `Trên cành có ${a} con chim, bay đi ${b} con. Hỏi còn lại mấy con chim?`, opts: makeOpts(ans, [a - b + 1, Math.max(0, a - b - 1), a + b]), ans };
    }
    case 'pick_sign': {
      const isAdd = rand(0, 1) === 0;
      const a = rand(3, 10), b = rand(1, isAdd ? 9 : a - 1);
      const res = isAdd ? a + b : a - b;
      const ans = isAdd ? '+' : '-';
      return { q: `Chọn dấu đúng: ${a} ___ ${b} = ${res}`, opts: ['+', '-'], ans };
    }
    case 'mixed_two_step': {
      const a = rand(4, 10), b = rand(1, 5), c = rand(1, 4);
      const ans = String(a + b - c);
      return { q: `Tính: ${a} + ${b} - ${c} = ?`, opts: makeOpts(ans, [a + b - c + 1, a + b - c - 1, a + b + c]), ans };
    }
    case 'place_value': {
      const t = rand(1, 9), o = rand(0, 9);
      const ans = `${t} chục, ${o} đơn vị`;
      return { q: `Số ${t * 10 + o} gồm mấy chục và mấy đơn vị?`, opts: shuffle([ans, `${o} chục, ${t} đơn vị`, `${t * 10} chục, ${o} đơn vị`]), ans };
    }
    case 'compose_tens': {
      const t = rand(1, 9), o = rand(1, 9);
      const ans = String(t * 10 + o);
      return { q: `Số gồm ${t} chục và ${o} đơn vị là số nào?`, opts: makeOpts(ans, [o * 10 + t, t + o, (t + 1) * 10 + o]), ans };
    }
    case 'compare': {
      const a = rand(10, 99), b = rand(10, 99);
      const ans = a < b ? '<' : (a > b ? '>' : '=');
      return { q: `Chọn dấu thích hợp: ${a} ___ ${b}`, opts: ['<', '>', '='], ans };
    }
    case 'min_max': {
      const nums = [rand(10, 30), rand(31, 60), rand(61, 95), rand(15, 85)];
      const unique = [...new Set(nums)];
      const isMax = rand(0, 1) === 0;
      const ans = String(isMax ? Math.max(...unique) : Math.min(...unique));
      return { q: `Số nào ${isMax ? 'LỚN NHẤT' : 'NHỎ NHẤT'} trong các số: ${unique.join(', ')}?`, opts: unique.map(String), ans };
    }
    case 'even_odd': {
      const n = rand(2, max);
      const ans = n % 2 === 0 ? 'Số chẵn' : 'Số lẻ';
      return { q: `Số ${n} là số chẵn hay số lẻ?`, opts: ['Số chẵn', 'Số lẻ'], ans };
    }
    case 'round_ten': {
      const n = rand(11, 89);
      const ans = String(Math.round(n / 10) * 10);
      return { q: `Số ${n} gần với số tròn chục nào nhất?`, opts: makeOpts(ans, [Math.floor(n / 10) * 10, Math.ceil(n / 10) * 10, Math.round(n / 10) * 10 + 10]), ans };
    }
    case 'measure_cm': {
      const a = rand(3, 15), b = rand(2, 10);
      const ans = `${a + b} cm`;
      return { q: `Băng giấy dài ${a} cm nối thêm ${b} cm nữa thì dài bao nhiêu?`, opts: [`${a + b} cm`, `${a + b + 2} cm`, `${Math.abs(a - b)} cm`, `${a + b - 1} cm`], ans };
    }
    case 'measure_compare': {
      const a = rand(10, 25), b = rand(5, a - 1);
      const ans = `${a - b} cm`;
      return { q: `Bút chì dài ${a} cm, tẩy dài ${b} cm. Bút chì dài hơn tẩy bao nhiêu cm?`, opts: [`${a - b} cm`, `${a + b} cm`, `${a - b + 1} cm`, `${a - b + 2} cm`], ans };
    }
    case 'clock_full': {
      const h = rand(1, 12);
      const ans = `${h} giờ`;
      return { q: `Kim ngắn chỉ số ${h}, kim dài chỉ số 12 là mấy giờ?`, opts: makeOpts(ans, [`${(h % 12) + 1} giờ`, `${((h + 2) % 12) + 1} giờ`, `12 giờ`]), ans };
    }
    case 'clock_half': {
      const h = rand(1, 12);
      const ans = `${h} giờ 30 phút`;
      return { q: `Kim ngắn qua số ${h} một chút, kim dài chỉ số 6 là mấy giờ?`, opts: shuffle([ans, `${h} giờ đúng`, `${(h % 12) + 1} giờ 30 phút`, `6 giờ`]), ans };
    }
    case 'money_add': {
      const a = rand(1, 10), b = rand(1, 10);
      const ans = `${a + b} nghìn đồng`;
      return { q: `Lan có ${a} nghìn đồng, Bình có ${b} nghìn đồng. Cả hai bạn có bao nhiêu?`, opts: shuffle([ans, `${a + b + 1} nghìn đồng`, `${a + b - 1} nghìn đồng`, `${a + b + 2} nghìn đồng`]), ans };
    }
    case 'money_change': {
      const total = 10, price = rand(2, 8);
      const ans = `${total - price} nghìn đồng`;
      return { q: `Có 10 nghìn đồng, mua bút hết ${price} nghìn đồng. Hỏi còn lại bao nhiêu?`, opts: shuffle([ans, `${total - price + 1} nghìn đồng`, `${total - price - 1} nghìn đồng`, `${price} nghìn đồng`]), ans };
    }
    case 'tally_read': {
      const n = rand(3, 12);
      const ans = String(n);
      return { q: `Trong bảng kiểm đếm có ${n} gạch ghi nhận số học sinh thích môn Toán. Hỏi có mấy bạn?`, opts: makeOpts(ans, [n + 1, n - 1, n + 2]), ans };
    }
    case 'chart_diff': {
      const a = rand(6, 14), b = rand(2, a - 1);
      const ans = String(a - b);
      return { q: `Biểu đồ cho thấy có ${a} quả cam và ${b} quả táo. Cam nhiều hơn táo mấy quả?`, opts: makeOpts(ans, [a + b, a - b + 1, Math.max(0, a - b - 1)]), ans };
    }
    case 'shapes_2d': {
      const bank = [
        { q: 'Hình nào có 3 cạnh và 3 góc?', ans: 'Hình tam giác', opts: ['Hình vuông', 'Hình tròn', 'Hình tam giác', 'Hình chữ nhật'] },
        { q: 'Hình nào không có cạnh thẳng nào?', ans: 'Hình tròn', opts: ['Hình vuông', 'Hình tròn', 'Hình tam giác', 'Hình chữ nhật'] },
        { q: 'Hình nào có 4 cạnh bằng nhau?', ans: 'Hình vuông', opts: ['Hình vuông', 'Hình tròn', 'Hình tam giác', 'Hình chữ nhật'] }
      ];
      return bank[rand(0, bank.length - 1)];
    }
    case 'shapes_sides': {
      const bank = [
        { q: 'Hình tam giác có mấy cạnh?', ans: '3 cạnh', opts: ['2 cạnh', '3 cạnh', '4 cạnh', '5 cạnh'] },
        { q: 'Hình vuông có mấy đỉnh?', ans: '4 đỉnh', opts: ['3 đỉnh', '4 đỉnh', '5 đỉnh', '6 đỉnh'] }
      ];
      return bank[rand(0, bank.length - 1)];
    }
    case 'shapes_3d': {
      const bank = [
        { q: 'Hình khối nào có 6 mặt đều là hình vuông?', ans: 'Khối lập phương', opts: ['Khối lập phương', 'Khối cầu', 'Khối trụ', 'Khối nón'] },
        { q: 'Hình khối nào lăn được mọi hướng?', ans: 'Khối cầu', opts: ['Khối lập phương', 'Khối cầu', 'Khối hộp chữ nhật'] }
      ];
      return bank[rand(0, bank.length - 1)];
    }
    case 'shapes_3d_real': {
      const bank = [
        { q: 'Quả bóng đá có dạng hình khối gì?', ans: 'Khối cầu', opts: ['Khối lập phương', 'Khối cầu', 'Khối trụ'] },
        { q: 'Viên xúc xắc có dạng hình khối gì?', ans: 'Khối lập phương', opts: ['Khối lập phương', 'Khối cầu', 'Khối trụ'] },
        { q: 'Lon sữa bò có dạng hình khối gì?', ans: 'Khối trụ', opts: ['Khối lập phương', 'Khối cầu', 'Khối trụ'] }
      ];
      return bank[rand(0, bank.length - 1)];
    }
    case 'fraction_half': {
      const n = rand(2, 8) * 2;
      const ans = String(n / 2);
      return { q: `Một nửa (1/2) của ${n} cái bánh là mấy cái bánh?`, opts: makeOpts(ans, [n / 2 + 1, n / 2 - 1, n]), ans };
    }
    case 'fraction_quarter': {
      const n = rand(1, 5) * 4;
      const ans = String(n / 4);
      return { q: `Một phần tư (1/4) của ${n} quả táo là mấy quả?`, opts: makeOpts(ans, [n / 4 + 1, n / 2, n]), ans };
    }
    default:
      return { q: 'Tính: 5 + 3 = ?', opts: ['7', '8', '9', '10'], ans: '8' };
  }
};
