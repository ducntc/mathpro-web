(function (global) {
  const ITEMS = [
    { icon: "🍎", name: "quả táo" },
    { icon: "🍌", name: "quả chuối" },
    { icon: "🐶", name: "chú chó" },
    { icon: "🐱", name: "chú mèo" },
    { icon: "⭐", name: "ngôi sao" },
    { icon: "🚗", name: "chiếc xe" },
    { icon: "🎈", name: "quả bóng bay" },
    { icon: "🍓", name: "quả dâu" }
  ];

  // --- Hàm tiện ích ---
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const shuffle = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };
  const buildNumberOptions = (correct, min, max, total = 4) => {
    const set = new Set([correct]);
    while (set.size < total && set.size <= (max - min + 1)) {
      set.add(randomInt(min, max));
    }
    return Array.from(set).sort((a, b) => a - b);
  };

  // --- Danh sách 42 bài học chia theo 22 chủ đề (A -> V) ---
  const LESSONS = [
    // A. Phạm vi 3
    { id: "a-1", code: "A.1", topic: "A. Đếm số trong phạm vi 3", label: "Đếm hình (1–3)", desc: "Đếm số lượng từ 1 đến 3." },
    { id: "a-2", code: "A.2", topic: "A. Đếm số trong phạm vi 3", label: "Đếm trên khung ô (1–3)", desc: "Nhận biết số lượng 1–3 trong khung." },
    { id: "a-3", code: "A.3", topic: "A. Đếm số trong phạm vi 3", label: "Chọn nhóm đúng số lượng", desc: "Tìm nhóm có đúng 1, 2 hoặc 3 hình." },
    // B. Phạm vi 5
    { id: "b-1", code: "B.1", topic: "B. Đếm số trong phạm vi 5", label: "Đếm hình (1–5)", desc: "Tập đếm từ 1 đến 5." },
    { id: "b-2", code: "B.2", topic: "B. Đếm số trong phạm vi 5", label: "Khung 5 ô (Five-frame)", desc: "Quan sát khung 5 ô." },
    { id: "b-3", code: "B.3", topic: "B. Đếm số trong phạm vi 5", label: "Số liền sau (1–5)", desc: "Tìm số tiếp theo trong dãy 1–5." },
    // C. Phạm vi 10
    { id: "c-1", code: "C.1", topic: "C. Đếm số trong phạm vi 10", label: "Đếm hình (1–10)", desc: "Đếm đồ vật lên đến 10." },
    { id: "c-2", code: "C.2", topic: "C. Đếm số trong phạm vi 10", label: "Khung 10 ô (Ten-frame)", desc: "Tư duy gộp 5 trên khung 10 ô." },
    { id: "c-3", code: "C.3", topic: "C. Đếm số trong phạm vi 10", label: "Đếm lùi (10 về 1)", desc: "Đếm ngược và điền số còn thiếu." },
    // D. Phạm vi 20
    { id: "d-1", code: "D.1", topic: "D. Đếm số trong phạm vi 20", label: "Đếm hình (11–20)", desc: "Đếm số lượng lớn từ 11 đến 20." },
    { id: "d-2", code: "D.2", topic: "D. Đếm số trong phạm vi 20", label: "Điền số dãy 11–20", desc: "Tìm số còn thiếu trong phạm vi 20." },
    // E. Đến 50 & 100
    { id: "e-1", code: "E.1", topic: "E. Đếm số đến 50 & 100", label: "Đếm tiếp đến 50", desc: "Điền số còn thiếu trong phạm vi 50." },
    { id: "e-2", code: "E.2", topic: "E. Đếm số đến 50 & 100", label: "Đếm tiếp đến 100", desc: "Điền số còn thiếu trong phạm vi 100." },
    // F. Đếm cách đều
    { id: "f-1", code: "F.1", topic: "F. Đếm cách đều (Skip-counting)", label: "Đếm cách 10 (10, 20, 30...)", desc: "Đếm tròn chục đến 100." },
    { id: "f-2", code: "F.2", topic: "F. Đếm cách đều (Skip-counting)", label: "Đếm cách 2 (2, 4, 6...)", desc: "Làm quen dãy số chẵn." },
    { id: "f-3", code: "F.3", topic: "F. Đếm cách đều (Skip-counting)", label: "Đếm cách 5 (5, 10, 15...)", desc: "Nhảy cóc 5 đơn vị." },
    // G. So sánh
    { id: "g-1", code: "G.1", topic: "G. So sánh số & lượng", label: "Nhiều hơn – Ít hơn", desc: "So sánh trực quan 2 nhóm hình." },
    { id: "g-2", code: "G.2", topic: "G. So sánh số & lượng", label: "So sánh số (phạm vi 10)", desc: "Tìm số lớn hơn hoặc bé hơn." },
    { id: "g-3", code: "G.3", topic: "G. So sánh số & lượng", label: "So sánh số (phạm vi 20)", desc: "So sánh hai số đến 20." },
    // H. Vị trí
    { id: "h-1", code: "H.1", topic: "H. Vị trí trong không gian", label: "Trên – Dưới", desc: "Xác định vật ở phía trên hay phía dưới." },
    { id: "h-2", code: "H.2", topic: "H. Vị trí trong không gian", label: "Trái – Giữa – Phải", desc: "Xác định vị trí theo hàng ngang." },
    // I. Phân loại
    { id: "i-1", code: "I.1", topic: "I. Phân loại & Sắp xếp", label: "Tìm hình khác loại", desc: "Tìm 1 hình không cùng nhóm với các hình còn lại." },
    { id: "i-2", code: "I.2", topic: "I. Phân loại & Sắp xếp", label: "Tìm số bé nhất / lớn nhất", desc: "Chọn số nhỏ nhất hoặc lớn nhất trong 4 số." },
    // J. Quy luật
    { id: "j-1", code: "J.1", topic: "J. Quy luật (Patterns)", label: "Quy luật ABAB", desc: "Tìm hình tiếp theo trong chuỗi xen kẽ." },
    { id: "j-2", code: "J.2", topic: "J. Quy luật (Patterns)", label: "Quy luật AAB / ABC", desc: "Tìm hình còn thiếu ở chuỗi nâng cao." },
    // K. Cộng phạm vi 5
    { id: "k-1", code: "K.1", topic: "K. Phép cộng phạm vi 5", label: "Cộng bằng hình ảnh (≤ 5)", desc: "Gộp 2 nhóm đồ vật." },
    { id: "k-2", code: "K.2", topic: "K. Phép cộng phạm vi 5", label: "Tìm số cộng còn thiếu (≤ 5)", desc: "Ví dụ: 2 + ? = 5." },
    // L. Cộng phạm vi 10
    { id: "l-1", code: "L.1", topic: "L. Phép cộng phạm vi 10", label: "Cộng bằng hình ảnh (≤ 10)", desc: "Cộng 2 nhóm đồ vật đến 10." },
    { id: "l-2", code: "L.2", topic: "L. Phép cộng phạm vi 10", label: "Cộng nhẩm phạm vi 10", desc: "Tính tổng hai số đến 10." },
    { id: "l-3", code: "L.3", topic: "L. Phép cộng phạm vi 10", label: "Tìm số cộng còn thiếu (≤ 10)", desc: "Ví dụ: 4 + ? = 9." },
    // M. Trừ phạm vi 5
    { id: "m-1", code: "M.1", topic: "M. Phép trừ phạm vi 5", label: "Trừ bằng hình ảnh (≤ 5)", desc: "Bớt đi bằng hình gạch chéo." },
    { id: "m-2", code: "M.2", topic: "M. Phép trừ phạm vi 5", label: "Trừ nhẩm phạm vi 5", desc: "Tính hiệu trong phạm vi 5." },
    // N. Trừ phạm vi 10
    { id: "n-1", code: "N.1", topic: "N. Phép trừ phạm vi 10", label: "Trừ bằng hình ảnh (≤ 10)", desc: "Bớt đi trong phạm vi 10." },
    { id: "n-2", code: "N.2", topic: "N. Phép trừ phạm vi 10", label: "Trừ nhẩm phạm vi 10", desc: "Tính hiệu trong phạm vi 10." },
    // O. Hỗn hợp
    { id: "o-1", code: "O.1", topic: "O. Cộng trừ hỗn hợp", label: "Chọn dấu + hay -", desc: "Điền dấu thích hợp vào phép tính." },
    // P. Phân số
    { id: "p-1", code: "P.1", topic: "P. Chia đều & Một nửa", label: "Nhận biết chia đều 2 phần", desc: "Hình nào được chia thành 2 phần bằng nhau?" },
    // Q. Đo lường
    { id: "q-1", code: "Q.1", topic: "Q. Đo lường trực quan", label: "Dài hơn – Ngắn hơn", desc: "So sánh độ dài 2 băng giấy." },
    { id: "q-2", code: "Q.2", topic: "Q. Đo lường trực quan", label: "Cao hơn – Thấp hơn", desc: "So sánh chiều cao 2 cột." },
    // R. Thời gian
    { id: "r-1", code: "R.1", topic: "R. Xem đồng hồ", label: "Xem giờ đúng", desc: "Đọc giờ trên đồng hồ kim." },
    // S. Tiền tệ
    { id: "s-1", code: "S.1", topic: "S. Tiền Việt Nam", label: "Nhận biết mệnh giá tiền", desc: "Phân biệt tờ 1.000đ, 2.000đ, 5.000đ, 10.000đ." },
    // T. Hình học 2D
    { id: "t-1", code: "T.1", topic: "T. Hình học phẳng (2D)", label: "Nhận biết hình cơ bản", desc: "Tròn, vuông, tam giác, chữ nhật." },
    { id: "t-2", code: "T.2", topic: "T. Hình học phẳng (2D)", label: "Đếm số cạnh của hình", desc: "Hình có 0, 3 hay 4 cạnh?" },
    // U. Hình học 3D
    { id: "u-1", code: "U.1", topic: "U. Hình khối không gian (3D)", label: "Hình cầu, lập phương, trụ, nón", desc: "Nhận biết các khối 3D quen thuộc." },
    // V. Biểu đồ
    { id: "v-1", code: "V.1", topic: "V. Biểu đồ & Dữ liệu", label: "Đọc biểu đồ tranh", desc: "Đếm số lượng từ bảng biểu đồ đơn giản." }
  ];

  // --- CÁC HÀM FACTORY TÁI SỬ DỤNG ---
  const makeCount = (title, min, max, optMin, optMax) => () => {
    const item = pickRandom(ITEMS);
    const ans = randomInt(min, max);
    return {
      title, template: "visual_count",
      prompt: `Có bao nhiêu ${item.name} trong hình dưới đây?`,
      visualData: { icons: Array(ans).fill(item.icon) },
      options: buildNumberOptions(ans, optMin, optMax, Math.min(4, optMax - optMin + 1)),
      correctAnswer: ans,
      hint: `Bé chỉ tay và đếm lần lượt từng ${item.name} nhé!`
    };
  };

  const makeFrame = (title, frameSize, min, max) => () => {
    const item = pickRandom(ITEMS);
    const ans = randomInt(min, max);
    return {
      title, template: "frame_count",
      prompt: `Có bao nhiêu ${item.name} đang nằm trong khung?`,
      visualData: { cells: Array(frameSize).fill(null).map((_, i) => (i < ans ? item.icon : null)) },
      options: buildNumberOptions(ans, 1, frameSize, Math.min(4, frameSize)),
      correctAnswer: ans,
      hint: `Mỗi ô có 1 ${item.name}, bé đếm các ô có hình nhé!`
    };
  };

  const makeSeq = (title, min, max, step = 1, reverse = false) => () => {
    const len = 4;
    const start = reverse
      ? randomInt(min + step * 3, max)
      : randomInt(min, max - step * 3);
    const full = Array.from({ length: len }, (_, i) => reverse ? start - i * step : start + i * step);
    const missIdx = step === 1 ? randomInt(1, 3) : 3;
    const ans = full[missIdx];
    const optSet = new Set([ans]);
    while (optSet.size < 4) {
      const candidate = ans + pickRandom([-step * 2, -step, step, step * 2]);
      if (candidate >= 0) optSet.add(candidate);
    }
    return {
      title, template: "sequence_fill",
      prompt: reverse ? "Bé hãy đếm lùi và tìm số còn thiếu:" : "Số nào thích hợp để điền vào dấu chấm hỏi?",
      visualData: { sequence: full.map((n, i) => (i === missIdx ? "?" : n)) },
      options: Array.from(optSet).sort((a, b) => a - b),
      correctAnswer: ans,
      hint: `Mỗi bước ${reverse ? "giảm" : "tăng"} ${step} đơn vị: ${full.join(" → ")}.`
    };
  };

  const makeCompareNum = (title, max) => () => {
    const mode = Math.random() < 0.5 ? "greater" : "smaller";
    const a = randomInt(1, max);
    let b = randomInt(1, max);
    while (b === a) b = randomInt(1, max);
    const ans = mode === "greater" ? Math.max(a, b) : Math.min(a, b);
    return {
      title, template: "text_compare",
      prompt: mode === "greater" ? "Số nào LỚN HƠN?" : "Số nào BÉ HƠN?",
      visualData: { left: a, right: b },
      options: [a, b],
      correctAnswer: ans,
      hint: `Khi đếm từ 1 đến ${max}, số đứng sau sẽ lớn hơn số đứng trước.`
    };
  };

  const makeAdd = (title, maxSum, showVisual) => () => {
    const item = pickRandom(ITEMS);
    const a = randomInt(1, maxSum - 1);
    const b = randomInt(1, maxSum - a);
    const sum = a + b;
    return {
      title, template: showVisual ? "visual_add" : "text_compare",
      prompt: showVisual ? `Tính tổng số ${item.name} dưới đây:` : `Tính nhanh phép cộng:`,
      visualData: showVisual ? { icon: item.icon, a, b } : { equation: `${a} + ${b} = ?` },
      options: buildNumberOptions(sum, 2, maxSum, 4),
      correctAnswer: sum,
      hint: `Bắt đầu từ ${a}, đếm thêm ${b} đơn vị nữa là ${sum}.`
    };
  };

  const makeMissingAdd = (title, maxSum) => () => {
    const a = randomInt(1, maxSum - 1);
    const b = randomInt(1, maxSum - a);
    const sum = a + b;
    return {
      title, template: "text_compare",
      prompt: "Điền số còn thiếu vào phép cộng:",
      visualData: { equation: `${a} + ? = ${sum}` },
      options: buildNumberOptions(b, 1, maxSum - 1, 4),
      correctAnswer: b,
      hint: `Từ ${a} đếm thêm mấy để được ${sum}? Chính là ${b}!`
    };
  };

  const makeSub = (title, maxVal, showVisual) => () => {
    const item = pickRandom(ITEMS);
    const a = randomInt(2, maxVal);
    const b = randomInt(1, a - 1);
    const diff = a - b;
    return {
      title, template: showVisual ? "visual_sub" : "text_compare",
      prompt: showVisual ? "Tính kết quả phép trừ dưới đây:" : "Tính nhanh phép trừ:",
      visualData: showVisual ? { icon: item.icon, total: a, remove: b } : { equation: `${a} - ${b} = ?` },
      options: buildNumberOptions(diff, 1, maxVal - 1, 4),
      correctAnswer: diff,
      hint: `Có ${a}, bớt đi ${b} thì còn lại ${diff}.`
    };
  };

  // --- Đăng ký đủ 42 Generators ---
  const GENERATORS = {
    "a-1": makeCount("A.1 Đếm hình (1–3)", 1, 3, 1, 3),
    "a-2": makeFrame("A.2 Khung ô (1–3)", 5, 1, 3),
    "a-3": () => {
      const item = pickRandom(ITEMS);
      const target = randomInt(1, 3);
      return {
        title: "A.3 Chọn nhóm đúng số lượng", template: "pick_group",
        prompt: `Hình nào có đúng ${target} ${item.name}?`,
        visualData: null,
        options: shuffle([1, 2, 3]).map(c => ({ value: c, icons: Array(c).fill(item.icon) })),
        correctAnswer: target,
        hint: `Bé đếm từng khung để tìm nhóm có ${target} ${item.name}.`
      };
    },
    "b-1": makeCount("B.1 Đếm hình (1–5)", 1, 5, 1, 5),
    "b-2": makeFrame("B.2 Khung 5 ô", 5, 1, 5),
    "b-3": makeSeq("B.3 Số liền sau (1–5)", 1, 5, 1, false),
    "c-1": makeCount("C.1 Đếm hình (1–10)", 4, 10, 1, 10),
    "c-2": makeFrame("C.2 Khung 10 ô", 10, 5, 10),
    "c-3": makeSeq("C.3 Đếm lùi (10 về 1)", 1, 10, 1, true),
    "d-1": makeCount("D.1 Đếm hình (11–20)", 11, 20, 11, 20),
    "d-2": makeSeq("D.2 Điền số dãy 11–20", 11, 20, 1, false),
    "e-1": makeSeq("E.1 Đếm tiếp đến 50", 21, 50, 1, false),
    "e-2": makeSeq("E.2 Đếm tiếp đến 100", 51, 100, 1, false),
    "f-1": makeSeq("F.1 Đếm cách 10", 10, 100, 10, false),
    "f-2": makeSeq("F.2 Đếm cách 2", 2, 20, 2, false),
    "f-3": makeSeq("F.3 Đếm cách 5", 5, 50, 5, false),
    "g-1": () => {
      const mode = Math.random() < 0.5 ? "more" : "fewer";
      const cA = randomInt(1, 5);
      let cB = randomInt(1, 5);
      while (cB === cA) cB = randomInt(1, 5);
      return {
        title: "G.1 Nhiều hơn – Ít hơn", template: "compare_groups",
        prompt: mode === "more" ? "Nhóm nào có NHIỀU hình hơn?" : "Nhóm nào có ÍT hình hơn?",
        visualData: {
          left: { label: "Nhóm A", icons: Array(cA).fill("🍎") },
          right: { label: "Nhóm B", icons: Array(cB).fill("🍌") }
        },
        options: [{ value: "left", label: "Nhóm A" }, { value: "right", label: "Nhóm B" }],
        correctAnswer: mode === "more" ? (cA > cB ? "left" : "right") : (cA < cB ? "left" : "right"),
        hint: `Nhóm A có ${cA} quả, Nhóm B có ${cB} quả.`
      };
    },
    "g-2": makeCompareNum("G.2 So sánh số (1–10)", 10),
    "g-3": makeCompareNum("G.3 So sánh số (1–20)", 20),
    "h-1": () => {
      const [top, bot] = shuffle(ITEMS).slice(0, 2);
      const askTop = Math.random() < 0.5;
      const ans = askTop ? top.name : bot.name;
      return {
        title: "H.1 Vị trí Trên – Dưới", template: "position_grid",
        prompt: askTop ? "Vật nào đang ở PHÍA TRÊN?" : "Vật nào đang ở PHÍA DƯỚI?",
        visualData: { mode: "vertical", items: [top.icon, bot.icon] },
        options: [top.name, bot.name],
        correctAnswer: ans,
        hint: `${top.name} ở phía trên, còn ${bot.name} ở phía dưới.`
      };
    },
    "h-2": () => {
      const [l, m, r] = shuffle(ITEMS).slice(0, 3);
      const pos = pickRandom([
        { label: "BÊN TRÁI", ans: l.name },
        { label: "Ở GIỮA", ans: m.name },
        { label: "BÊN PHẢI", ans: r.name }
      ]);
      return {
        title: "H.2 Vị trí Trái – Giữa – Phải", template: "position_grid",
        prompt: `Vật nào đang nằm ${pos.label}?`,
        visualData: { mode: "horizontal", items: [l.icon, m.icon, r.icon] },
        options: [l.name, m.name, r.name],
        correctAnswer: pos.ans,
        hint: `Từ trái sang phải lần lượt là: ${l.name}, ${m.name}, ${r.name}.`
      };
    },
    "i-1": () => {
      const groups = [
        { icons: ["🍎", "🍌", "🍓"], odd: "🚗", reason: "Chiếc xe là phương tiện, các hình kia là trái cây." },
        { icons: ["🐶", "🐱", "🐶"], odd: "⭐", reason: "Ngôi sao không phải con vật." },
        { icons: ["🚗", "🚌", "🚲"], odd: "🍎", reason: "Quả táo là đồ ăn, các hình kia là xe cộ." }
      ];
      const g = pickRandom(groups);
      const all = shuffle([...g.icons, g.odd]);
      return {
        title: "I.1 Tìm hình khác loại", template: "sequence_fill",
        prompt: "Hình nào KHÁC LOẠI với các hình còn lại?",
        visualData: { sequence: all },
        options: Array.from(new Set(all)),
        correctAnswer: g.odd,
        hint: g.reason
      };
    },
    "i-2": () => {
      const nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).slice(0, 4);
      const askMin = Math.random() < 0.5;
      const ans = askMin ? Math.min(...nums) : Math.max(...nums);
      return {
        title: "I.2 Tìm số bé nhất / lớn nhất", template: "sequence_fill",
        prompt: askMin ? "Trong các số sau, số nào BÉ NHẤT?" : "Trong các số sau, số nào LỚN NHẤT?",
        visualData: { sequence: nums },
        options: [...nums].sort((a, b) => a - b),
        correctAnswer: ans,
        hint: `Đếm từ 1 đến 10: số đứng đầu là bé nhất, số đứng cuối là lớn nhất.`
      };
    },
    "j-1": () => {
      const [a, b] = shuffle(ITEMS).slice(0, 2);
      const distractors = ITEMS.filter(x => x.icon !== a.icon).slice(0, 2).map(x => x.icon);
      return {
        title: "J.1 Quy luật ABAB", template: "sequence_fill",
        prompt: "Hình nào tiếp theo trong dãy quy luật?",
        visualData: { sequence: [a.icon, b.icon, a.icon, b.icon, "?"] },
        options: shuffle([a.icon, ...distractors]),
        correctAnswer: a.icon,
        hint: `Xen kẽ nhau: ${a.name} rồi đến ${b.name}.`
      };
    },
    "j-2": () => {
      const [a, b, c] = shuffle(ITEMS).slice(0, 3);
      const seq = [a.icon, b.icon, c.icon, a.icon, b.icon, "?"];
      const distractors = ITEMS.filter(x => x.icon !== c.icon).slice(0, 2).map(x => x.icon);
      return {
        title: "J.2 Quy luật nâng cao ABC", template: "sequence_fill",
        prompt: "Tìm hình còn thiếu ở dấu chấm hỏi:",
        visualData: { sequence: seq },
        options: shuffle([c.icon, ...distractors]),
        correctAnswer: c.icon,
        hint: `Nhóm 3 hình lặp lại: ${a.name} – ${b.name} – ${c.name}.`
      };
    },
    "k-1": makeAdd("K.1 Phép cộng phạm vi 5", 5, true),
    "k-2": makeMissingAdd("K.2 Tìm số cộng còn thiếu (≤ 5)", 5),
    "l-1": makeAdd("L.1 Cộng bằng hình ảnh (≤ 10)", 10, true),
    "l-2": makeAdd("L.2 Cộng nhẩm phạm vi 10", 10, false),
    "l-3": makeMissingAdd("L.3 Tìm số cộng còn thiếu (≤ 10)", 10),
    "m-1": makeSub("M.1 Trừ bằng hình ảnh (≤ 5)", 5, true),
    "m-2": makeSub("M.2 Trừ nhẩm phạm vi 5", 5, false),
    "n-1": makeSub("N.1 Trừ bằng hình ảnh (≤ 10)", 10, true),
    "n-2": makeSub("N.2 Trừ nhẩm phạm vi 10", 10, false),
    "o-1": () => {
      const isAdd = Math.random() < 0.5;
      const a = randomInt(2, 6);
      const b = randomInt(1, isAdd ? 10 - a : a - 1);
      const res = isAdd ? a + b : a - b;
      return {
        title: "O.1 Chọn dấu + hay -", template: "text_compare",
        prompt: "Chọn dấu thích hợp điền vào ô trống:",
        visualData: { equation: `${a} [ ? ] ${b} = ${res}` },
        options: ["+", "-"],
        correctAnswer: isAdd ? "+" : "-",
        hint: isAdd ? `Kết quả ${res} lớn hơn ${a} nên ta dùng phép cộng (+).` : `Kết quả ${res} nhỏ hơn ${a} nên ta dùng phép trừ (-).`
      };
    },
    "p-1": () => {
      const ans = Math.random() < 0.5 ? "Hình A" : "Hình B";
      return {
        title: "P.1 Chia đều 2 phần bằng nhau", template: "fraction_svg",
        prompt: "Hình nào được chia thành 2 phần BẰNG NHAU?",
        visualData: { equalSide: ans === "Hình A" ? "left" : "right" },
        options: ["Hình A", "Hình B"],
        correctAnswer: ans,
        hint: `Hai nửa phải có kích thước bằng hệt nhau khi gập đôi lại.`
      };
    },
    "q-1": () => {
      const mode = Math.random() < 0.5 ? "longer" : "shorter";
      const vA = randomInt(45, 175);
      let vB = randomInt(45, 175);
      while (Math.abs(vA - vB) < 40) vB = randomInt(45, 175);
      const ans = mode === "longer" ? (vA > vB ? "Băng A" : "Băng B") : (vA < vB ? "Băng A" : "Băng B");
      return {
        title: "Q.1 Dài hơn – Ngắn hơn", template: "measure_compare",
        prompt: mode === "longer" ? "Băng nào DÀI HƠN?" : "Băng nào NGẮN HƠN?",
        visualData: { orientation: "horizontal", valA: vA, valB: vB },
        options: ["Băng A", "Băng B"],
        correctAnswer: ans,
        hint: `Quan sát xem băng nào vươn dài hơn về bên phải.`
      };
    },
    "q-2": () => {
      const mode = Math.random() < 0.5 ? "taller" : "shorter";
      const vA = randomInt(45, 135);
      let vB = randomInt(45, 135);
      while (Math.abs(vA - vB) < 35) vB = randomInt(45, 135);
      const ans = mode === "taller" ? (vA > vB ? "Cột A" : "Cột B") : (vA < vB ? "Cột A" : "Cột B");
      return {
        title: "Q.2 Cao hơn – Thấp hơn", template: "measure_compare",
        prompt: mode === "taller" ? "Cột nào CAO HƠN?" : "Cột nào THẤP HƠN?",
        visualData: { orientation: "vertical", valA: vA, valB: vB },
        options: ["Cột A", "Cột B"],
        correctAnswer: ans,
        hint: `Quan sát đỉnh của cột nào cao hơn so với mặt đất.`
      };
    },
    "r-1": () => {
      const hour = randomInt(1, 12);
      const opts = buildNumberOptions(hour, 1, 12, 4).map(h => `${h} giờ`);
      return {
        title: "R.1 Xem đồng hồ giờ đúng", template: "clock_svg",
        prompt: "Đồng hồ đang chỉ mấy giờ?",
        visualData: { hour },
        options: opts,
        correctAnswer: `${hour} giờ`,
        hint: `Kim dài chỉ số 12, kim ngắn chỉ vào số ${hour} nên là ${hour} giờ đúng.`
      };
    },
    "s-1": () => {
      const bills = [
        { val: "1.000đ", color: "#9ca3af" },
        { val: "2.000đ", color: "#64748b" },
        { val: "5.000đ", color: "#2563eb" },
        { val: "10.000đ", color: "#ca8a04" }
      ];
      const chosen = pickRandom(bills);
      return {
        title: "S.1 Tiền Việt Nam", template: "money_vnd",
        prompt: "Đây là tờ tiền mệnh giá bao nhiêu?",
        visualData: chosen,
        options: bills.map(b => b.val),
        correctAnswer: chosen.val,
        hint: `Bé nhìn con số in trên tờ tiền nhé!`
      };
    },
    "t-1": () => {
      const shapes = [
        { type: "circle", name: "Hình tròn", sides: 0 },
        { type: "square", name: "Hình vuông", sides: 4 },
        { type: "triangle", name: "Hình tam giác", sides: 3 },
        { type: "rectangle", name: "Hình chữ nhật", sides: 4 }
      ];
      const chosen = pickRandom(shapes);
      return {
        title: "T.1 Nhận biết hình 2D", template: "shape_svg",
        prompt: "Đây là hình gì?",
        visualData: { shape: chosen.type, color: pickRandom(["#ef4444", "#3b82f6", "#10b981", "#f59e0b"]) },
        options: shapes.map(s => s.name),
        correctAnswer: chosen.name,
        hint: chosen.sides === 0 ? "Hình tròn không có góc hay cạnh." : `Hình có ${chosen.sides} cạnh thẳng.`
      };
    },
    "t-2": () => {
      const shapes = [
        { type: "circle", name: "Hình tròn", sides: 0 },
        { type: "triangle", name: "Hình tam giác", sides: 3 },
        { type: "square", name: "Hình vuông", sides: 4 }
      ];
      const chosen = pickRandom(shapes);
      return {
        title: "T.2 Đếm số cạnh của hình", template: "shape_svg",
        prompt: "Hình dưới đây có bao nhiêu cạnh?",
        visualData: { shape: chosen.type, color: "#4f46e5" },
        options: [0, 2, 3, 4],
        correctAnswer: chosen.sides,
        hint: `Bé đếm các đoạn thẳng bao quanh hình nhé!`
      };
    },
    "u-1": () => {
      const shapes3D = [
        { type: "sphere", name: "Hình cầu" },
        { type: "cube", name: "Hình lập phương" },
        { type: "cylinder", name: "Hình trụ" },
        { type: "cone", name: "Hình nón" }
      ];
      const chosen = pickRandom(shapes3D);
      return {
        title: "U.1 Hình khối không gian (3D)", template: "shape3d_svg",
        prompt: "Đây là khối hình gì?",
        visualData: { shape: chosen.type },
        options: shapes3D.map(s => s.name),
        correctAnswer: chosen.name,
        hint: `Liên hệ với đồ vật quen thuộc: quả bóng (cầu), hộp quà (lập phương), lon sữa (trụ), nón lá (nón).`
      };
    },
    "v-1": () => {
      const c1 = randomInt(1, 5);
      const c2 = randomInt(1, 5);
      const askApple = Math.random() < 0.5;
      const ans = askApple ? c1 : c2;
      return {
        title: "V.1 Đọc biểu đồ tranh", template: "chart_bar",
        prompt: askApple ? "Theo biểu đồ, có bao nhiêu quả táo (🍎)?" : "Theo biểu đồ, có bao nhiêu ngôi sao (⭐)?",
        visualData: { rows: [{ icon: "🍎", count: c1 }, { icon: "⭐", count: c2 }] },
        options: buildNumberOptions(ans, 1, 5, 4),
        correctAnswer: ans,
        hint: `Bé nhìn đúng hàng của biểu tượng cần tìm rồi đếm nhé!`
      };
    }
  };

  global.MathProKindergarten = { LESSONS, GENERATORS };
})(window);
