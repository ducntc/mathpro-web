// public/js/i18n.js — Lõi đa ngôn ngữ trung tâm cho toàn hệ thống MathPro
(function (global) {
  const STORAGE_KEY = 'mathpro_lang';

  const DICT = {
    // Điều hướng chung
    'nav.home':      { vi: '🏠 Trang chủ', en: '🏠 Home' },
    'nav.courses':   { vi: '📚 Tất cả khóa học', en: '📚 All Courses' },
    'nav.profile':   { vi: '👤 Hồ sơ', en: '👤 Profile' },
    'nav.vip':       { vi: '👑 Nâng cấp VIP', en: '👑 Upgrade VIP' },
    'nav.subscribe': { vi: 'Đăng ký học', en: 'Membership' },
    'nav.login':     { vi: 'Đăng nhập', en: 'Sign In' },
    'nav.logout':    { vi: 'Đăng xuất', en: 'Sign Out' },
    'nav.admin':     { vi: '⚙️ Quản trị', en: '⚙️ Admin' },

    // Tabs học tập
    'tab.skills':    { vi: '💎 Kỹ năng', en: '💎 Skills' },
    'tab.lessons':   { vi: '📖 Bài học', en: '📖 Lessons' },
    'tab.videos':    { vi: '🎬 Video bài giảng', en: '🎬 Videos' },
    'tab.games':     { vi: '🛸 Trò chơi', en: '🛸 Games' },
    'tab.fluency':   { vi: '🔥 Luyện phản xạ', en: '🔥 Fluency Zone' },

    // Nhãn dùng chung trong bài học & trò chơi
    'common.free':       { vi: 'Miễn phí', en: 'Free' },
    'common.vip':        { vi: 'VIP', en: 'VIP' },
    'common.back':       { vi: '⬅ Quay lại', en: '⬅ Back' },
    'common.close':      { vi: 'Đóng', en: 'Close' },
    'common.next':       { vi: 'Câu tiếp theo ➜', en: 'Next Question ➜' },
    'common.loading':    { vi: 'Đang tải dữ liệu...', en: 'Loading...' },
    'practice.score':    { vi: 'Điểm mục tiêu:', en: 'SmartScore:' },
    'game.scoreLabel':   { vi: 'Điểm trò chơi:', en: 'Game Score:' },

    // Modal VIP dùng chung
    'vip.modalTitle':    { vi: 'Mở khóa VIP để tiếp tục!', en: 'Unlock VIP to continue!' },
    'vip.modalDesc':     { vi: 'Nâng cấp VIP để mở khóa toàn bộ bài học, video, trò chơi và nhận huy hiệu 100%!', en: 'Upgrade to VIP to unlock 100% of skills, lessons, videos, games & earn badges!' },
    'vip.upgradeNow':    { vi: 'Nâng cấp VIP ngay', en: 'Upgrade VIP Now' }
  };

  // Từ điển chuẩn hóa thông báo trả về từ Backend (server.js)
  const API_MESSAGES = {
    'Sai email hoặc mật khẩu!': 'Invalid email/phone or password!',
    'Sai mật khẩu!': 'Incorrect password!',
    'Email đã tồn tại!': 'This email/phone is already registered!',
    'Đăng nhập thành công!': 'Signed in successfully!',
    'Đăng ký thành công!': 'Account created successfully!',
    'Đổi mật khẩu thành công!': 'Password updated successfully!',
    'Mật khẩu hiện tại không đúng!': 'Current password is incorrect!',
    'Không tìm thấy đơn hàng!': 'Order code not found!'
  };

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'vi';
  }

  function isEn() {
    return getLang() === 'en';
  }

  // Hàm song ngữ gốc dùng cho mọi file JS & Generators: t('Tiếng Việt', 'English')
  function t(viText, enText) {
    return isEn() ? enText : viText;
  }

  // Tra cứu theo key từ điển trung tâm
  function key(k) {
    const item = DICT[k];
    if (!item) return k;
    return isEn() ? item.en : item.vi;
  }

  // Chuẩn hóa tên Khối lớp từ DB
  function gradeName(rawGrade) {
    if (!rawGrade) return '';
    const g = String(rawGrade).toLowerCase();
    if (g.includes('mầm non') || g.includes('kindergarten')) {
      return isEn() ? 'Kindergarten' : 'Mầm non';
    }
    for (let i = 1; i <= 9; i++) {
      if (g.includes(`lớp ${i}`) || g.includes(`grade ${i}`)) {
        return isEn() ? `Grade ${i}` : `Lớp ${i}`;
      }
    }
    return rawGrade;
  }

  // Dịch thông báo từ Backend nếu đang ở chế độ Tiếng Anh
  function apiMsg(msg) {
    if (!msg || !isEn()) return msg;
    return API_MESSAGES[msg] || msg;
  }

  // Đọc giọng nói tự động theo ngôn ngữ hiện tại
  function speak(text) {
    if (!text || !('speechSynthesis' in global)) return;
    global.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = isEn() ? 'en-US' : 'vi-VN';
    utter.rate = 0.95;
    global.speechSynthesis.speak(utter);
  }

  // Tự động quét và cập nhật toàn bộ phần tử HTML có gắn data-i18n hoặc data-vi / data-en
  function applyDOM(root = document) {
    const lang = getLang();
    document.documentElement.lang = lang;

    // 1. Theo key từ điển: data-i18n="nav.home"
    root.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (DICT[k]) el.textContent = DICT[k][lang];
    });

    // 2. Theo thuộc tính trực tiếp trên thẻ HTML: data-vi="..." data-en="..."
    root.querySelectorAll('[data-vi][data-en]').forEach(el => {
      el.textContent = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-vi');
    });

    // 3. Placeholder cho ô input: data-vi-placeholder="..." data-en-placeholder="..."
    root.querySelectorAll('[data-vi-placeholder][data-en-placeholder]').forEach(el => {
      el.placeholder = lang === 'en'
        ? el.getAttribute('data-en-placeholder')
        : el.getAttribute('data-vi-placeholder');
    });

    // 4. Đồng bộ trạng thái nút Segmented Pill trên trang chủ (nếu có)
    root.querySelectorAll('.lang-opt[data-lang]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  function setLang(lang) {
    const next = lang === 'en' ? 'en' : 'vi';
    localStorage.setItem(STORAGE_KEY, next);
    applyDOM(document);
    global.dispatchEvent(new CustomEvent('mathpro:langchange', { detail: { lang: next } }));
  }

  global.MP_I18N = { getLang, isEn, t, key, gradeName, apiMsg, speak, applyDOM, setLang };
  global.t = t; // Hàm toàn cục siêu gọn: t('Chào', 'Hello')

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => applyDOM(document));
  } else {
    applyDOM(document);
  }
})(window);
