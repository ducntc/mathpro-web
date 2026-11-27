let allCourses = [];

async function loadCourses() {
  try {
    const res = await fetch('/api/courses');
    if (!res.ok) throw new Error('Không kết nối được API /api/courses');
    allCourses = await res.json();

    renderFilters();
    renderCourses(allCourses);
    populateGradeSelect(allCourses);
    preselectGradeFromUrl();
  } catch (err) {
    document.getElementById('course-grid').innerHTML =
      `<p style="color:red; text-align:center;">Lỗi tải khóa học: ${err.message}</p>`;
  }
}

function translateGradeName(rawGrade, lang) {
  if (lang !== 'en') return rawGrade;
  const g = (rawGrade || '').toLowerCase();
  if (g.includes('mầm non')) return 'Kindergarten';
  for (let i = 1; i <= 9; i++) {
    if (g.includes(`lớp ${i}`) || g.includes(`grade ${i}`)) return `Grade ${i}`;
  }
  return rawGrade;
}

function renderFilters() {
  const lang = localStorage.getItem('mathpro_lang') || 'vi';
  const allLabel = lang === 'en' ? 'All' : 'Tất cả';
  const rawGrades = [...new Set(allCourses.map(c => c.grade))];
  const filterBar = document.getElementById('grade-filters');
  if (!filterBar) return;

  filterBar.innerHTML = [
    `<button class="filter-btn active" data-grade="ALL">${allLabel}</button>`,
    ...rawGrades.map(g => `<button class="filter-btn" data-grade="${g}">${translateGradeName(g, lang)}</button>`)
  ].join('');

  filterBar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const selected = btn.dataset.grade;
      const filtered = selected === 'ALL' ? allCourses : allCourses.filter(c => c.grade === selected);
      renderCourses(filtered);
    });
  });
}

function renderCourses(courses) {
  const grid = document.getElementById('course-grid');
  if (!grid) return;
  const lang = localStorage.getItem('mathpro_lang') || 'vi';

  const gradeStyles = {
    'mầm non': { badge: 'K', color: '#f59e0b', en: 'Kindergarten', enDesc: 'Number recognition, visual counting, patterns, and early logical thinking.' },
    'lớp 1':   { badge: '1', color: '#65a30d', en: 'Grade 1', enDesc: 'Addition & subtraction within 20, place value, time, and 2D/3D shapes.' },
    'lớp 2':   { badge: '2', color: '#dc2626', en: 'Grade 2', enDesc: '3-digit operations, mental math, measurement, and intro to multiplication.' },
    'lớp 3':   { badge: '3', color: '#0284c7', en: 'Grade 3', enDesc: 'Multiplication & division tables, perimeter, area, and basic fractions.' },
    'lớp 4':   { badge: '4', color: '#7c3aed', en: 'Grade 4', enDesc: 'Multi-digit operations, divisibility, fractions, angles, and word problems.' },
    'lớp 5':   { badge: '5', color: '#059669', en: 'Grade 5', enDesc: 'Decimals, percentages, geometry, volume, and rate-time-distance problems.' },
    'lớp 6':   { badge: '6', color: '#ea580c', en: 'Grade 6', enDesc: 'Integers, exponents, GCF/LCM, ratios, percents, and algebraic expressions.' },
    'lớp 7':   { badge: '7', color: '#15803d', en: 'Grade 7', enDesc: 'Rational numbers, proportions, two-step equations, inequalities, and probability.' },
    'lớp 8':   { badge: '8', color: '#ca8a04', en: 'Grade 8', enDesc: 'Real numbers, linear functions, slope, systems of equations, and Pythagorean theorem.' },
    'lớp 9':   { badge: '9', color: '#6d28d9', en: 'Grade 9', enDesc: 'Quadratics, Vieta’s formulas, radicals, trigonometry, and circle geometry.' }
  };

  grid.innerHTML = courses.map(c => {
    const g = (c.grade || '').toLowerCase();
    let href = `/course.html?id=${c.id}`;
    let lessonCount = c.lesson_count || 0;
    let style = { badge: 'M', color: '#0b5ed7', en: c.grade, enDesc: c.description };
    let gradeNum = 0;

    if (g.includes('mầm non')) {
      href = '/kindergarten.html'; lessonCount = 42; style = gradeStyles['mầm non'];
    } else {
      for (let i = 1; i <= 9; i++) {
        if (g.includes(`lớp ${i}`) || g.includes(`grade ${i}`)) {
          href = `/grade${i}.html`; lessonCount = 44; gradeNum = i;
          style = gradeStyles[`lớp ${i}`] || style; break;
        }
      }
    }

    const displayGrade = lang === 'en' ? style.en : c.grade;
    const displayDesc = lang === 'en' ? style.enDesc : c.description;
    const lblMath = lang === 'en' ? 'Math Thinking' : 'Toán tư duy';
    const lblPractice = lang === 'en' ? 'Practice' : 'Luyện tập';
    const lblLecture = lang === 'en' ? 'Lectures' : 'Bài giảng';
    const lblSkills = lang === 'en' ? `${lessonCount} skills` : `${lessonCount} kỹ năng`;
    const lblVideos = lang === 'en' ? 'Videos' : 'Video bài giảng';
    const lblLessons = lang === 'en' ? '📖 Lessons' : '📖 Bài học';
    const lblGames = lang === 'en' ? 'Games' : 'Trò chơi';
    const lblFluency = lang === 'en' ? 'Fluency' : 'Phản xạ';

    const linksHtml = gradeNum >= 6
      ? `
        <div class="ixl-row">
          <span class="ixl-row-label">${lblMath}</span>
          <div class="ixl-row-actions">
            <a href="${href}?tab=skills" class="ixl-link">${lblSkills} &rsaquo;</a>
            <span class="ixl-sep">|</span>
            <a href="${href}?tab=lessons" class="ixl-link" style="color:#059669;">${lblLessons} &rsaquo;</a>
          </div>
        </div>
        <div class="ixl-row">
          <span class="ixl-row-label">${lblLecture}</span>
          <div class="ixl-row-actions">
            <a href="${href}?tab=videos" class="ixl-link">🎬 ${lblVideos} &rsaquo;</a>
          </div>
        </div>`
      : `
        <div class="ixl-row">
          <span class="ixl-row-label">${lblMath}</span>
          <div class="ixl-row-actions">
            <a href="${href}?tab=skills" class="ixl-link">${lblSkills} &rsaquo;</a>
            <span class="ixl-sep">|</span>
            <a href="${href}?tab=videos" class="ixl-link">${lblVideos} &rsaquo;</a>
          </div>
        </div>
        <div class="ixl-row">
          <span class="ixl-row-label">${lblPractice}</span>
          <div class="ixl-row-actions">
            <a href="${href}?tab=games" class="ixl-link">${lblGames} &rsaquo;</a>
            <span class="ixl-sep">|</span>
            <a href="${href}?tab=fluency" class="ixl-link">${lblFluency} &rsaquo;</a>
          </div>
        </div>`;

    return `
      <div class="ixl-card" style="--grade-color: ${style.color};">
        <div>
          <div class="ixl-card-head">
            <div class="ixl-badge">${style.badge}</div>
            <a href="${href}" class="ixl-title">${displayGrade}</a>
          </div>
          <p class="ixl-desc">${displayDesc}</p>
        </div>
        <div class="ixl-links">${linksHtml}</div>
      </div>`;
  }).join('');
}

function populateGradeSelect(courses) {
  const select = document.getElementById('grade-select');
  if (!select) return;
  const grades = [...new Set(courses.map(c => c.grade))];
  select.innerHTML = '<option value="">-- Chọn khối lớp --</option>' +
    grades.map(g => `<option value="${g}">${g}</option>`).join('');
}

function preselectGradeFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const grade = params.get('register');
  const select = document.getElementById('grade-select');
  if (grade && select) select.value = grade;
}

const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('student-name').value.trim();
    const email = document.getElementById('student-email').value.trim();
    const grade = document.getElementById('grade-select').value;

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, grade })
    });
    const data = await res.json();
    const msg = document.getElementById('form-message');
    msg.style.color = res.ok ? 'green' : 'red';
    msg.textContent = data.message;
    if (res.ok) e.target.reset();
  });
}

async function checkAuth() {
  const res = await fetch('/api/me');
  const { user } = await res.json();
  const authNav = document.getElementById('auth-nav');
  const lang = localStorage.getItem('mathpro_lang') || 'vi';

  if (user && authNav) {
    const adminText = lang === 'en' ? '⚙️ Admin' : '⚙️ Quản trị';
    const profileText = lang === 'en' ? 'Profile' : 'Hồ sơ';
    const helloText = lang === 'en' ? 'Hi,' : 'Chào,';
    const logoutText = lang === 'en' ? 'Sign out' : 'Đăng xuất';

    const adminLink = user.role === 'admin'
      ? `<a href="/admin.html" id="admin-nav-link" style="color:#ff7a00; font-weight:700;">${adminText}</a>`
      : '';

    authNav.innerHTML = `
      ${adminLink}
      <a href="/profile.html" id="profile-nav-link">${profileText}</a>
      <span style="margin-left:14px;">${helloText} <strong>${user.name}</strong></span>
      <a href="#" id="logout-btn">${logoutText}</a>
    `;
    document.getElementById('logout-btn').addEventListener('click', async (e) => {
      e.preventDefault();
      await fetch('/api/logout', { method: 'POST' });
      window.location.reload();
    });
  }
}

// Tìm kiếm bài học
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const clearSearchBtn = document.getElementById('clear-search');

let searchTimer;
if (searchInput) {
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    const q = searchInput.value.trim();
    clearSearchBtn.style.display = q ? 'inline-block' : 'none';
    if (!q) { searchResults.innerHTML = ''; return; }

    searchTimer = setTimeout(async () => {
      const lang = localStorage.getItem('mathpro_lang') || 'vi';
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const items = await res.json();
      if (items.length === 0) {
        searchResults.innerHTML = `<p style="text-align:center; color:#666;">${lang === 'en' ? 'No matching lessons found.' : 'Không tìm thấy bài học phù hợp.'}</p>`;
        return;
      }
      searchResults.innerHTML = `
        <div class="card" style="padding: 16px;">
          <p style="font-weight:700; color:#0b5ed7; margin-bottom:10px;">🔎 ${lang === 'en' ? `Found ${items.length} lessons:` : `Tìm thấy ${items.length} bài học:`}</p>
          <ul style="list-style:none;">
            ${items.map(l => `
              <li style="border-bottom:1px solid #eee;">
                <a href="/lesson.html?id=${l.id}" style="display:flex; justify-content:space-between; padding:10px 4px; text-decoration:none; color:#333;">
                  <span><strong>[${l.grade}]</strong> ${lang === 'en' ? 'Lesson' : 'Bài'} ${l.lesson_order}: ${l.title}</span>
                  <span style="color:#0b5ed7; font-size:13px;">⏱ ${l.duration} →</span>
                </a>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }, 250);
  });
}

if (clearSearchBtn) {
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchResults.innerHTML = '';
    clearSearchBtn.style.display = 'none';
  });
}

// --- CHUYỂN ĐỔI NGÔN NGỮ VN / EN (CHỈ TRÊN INDEX.HTML) ---
function switchLang(lang) {
  localStorage.setItem('mathpro_lang', lang);

  // Cập nhật trạng thái nút Pill
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const subLink = document.querySelector('nav a[href="/subscribe.html"]');
  const loginLink = document.querySelector('nav a[href="/login.html"]');
  if (subLink) subLink.textContent = lang === 'en' ? 'Membership' : 'Đăng ký học';
  if (loginLink) loginLink.textContent = lang === 'en' ? 'Sign in' : 'Đăng nhập';

  const heroTitle = document.querySelector('.bbc-hero h1');
  const heroTag = document.querySelector('.bbc-hero-tagline');
  const heroDesc = document.querySelector('.bbc-hero p');
  const heroBtn = document.querySelector('.bbc-hero .btn-primary');
  if (heroTitle) heroTitle.textContent = lang === 'en'
    ? 'MATHPRO • MATHEMATICAL THINKING'
    : 'MATHPRO • HỌC TOÁN TƯ DUY';
  if (heroTag) heroTag.textContent = lang === 'en'
    ? 'Inspiring Mathematical Thinking • Grade K–9'
    : 'Khơi Nguồn Tư Duy Toán Học • Mầm Non – Lớp 9';
  if (heroDesc) heroDesc.textContent = lang === 'en'
    ? 'Deep Understanding – Clear Thinking – Daily Mental Fluency.'
    : 'Hiểu sâu bản chất – Tư duy rõ ràng – Luyện phản xạ tính toán mỗi ngày.';
  if (heroBtn) heroBtn.textContent = lang === 'en' ? 'Explore Courses →' : 'Khám phá khóa học →';

  const coursesTitle = document.querySelector('#courses h2');
  if (coursesTitle) coursesTitle.textContent = lang === 'en' ? 'Courses By Grade Level' : 'Các Khóa Học Theo Khối Lớp';

  if (searchInput) searchInput.placeholder = lang === 'en'
    ? '🔍 Search lessons (e.g. fractions, counting...)'
    : '🔍 Tìm bài học (VD: phân số, sơ đồ, đếm số...)';
  if (clearSearchBtn) clearSearchBtn.textContent = lang === 'en' ? 'Clear' : 'Xóa';

  const fDesc = document.getElementById('footer-desc');
  const fTitle = document.getElementById('footer-contact-title');
  const fAddr = document.getElementById('footer-address-label');
  if (fDesc) fDesc.textContent = lang === 'en'
    ? 'Interactive online math learning platform from Kindergarten to Grade 9, building deep understanding and mental fluency.'
    : 'Nền tảng học Toán tư duy trực tuyến tương tác từ Mầm non đến Lớp 9, giúp học sinh hiểu sâu bản chất và rèn luyện phản xạ tính toán.';
  if (fTitle) fTitle.textContent = lang === 'en' ? 'Contact & Engineering' : 'Thông tin liên hệ & Phát triển';
  if (fAddr) fAddr.textContent = lang === 'en' ? 'Address' : 'Địa chỉ';

  if (allCourses.length) {
    renderFilters();
    renderCourses(allCourses);
  }
  checkAuth();
}

const savedLang = localStorage.getItem('mathpro_lang') || 'vi';
switchLang(savedLang);
loadCourses();
