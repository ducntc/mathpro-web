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

function renderFilters() {
  const grades = ['Tất cả', ...new Set(allCourses.map(c => c.grade))];
  const filterBar = document.getElementById('grade-filters');
  if (!filterBar) return;

  filterBar.innerHTML = grades.map((g, idx) => `
    <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-grade="${g}">${g}</button>
  `).join('');

  filterBar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const selected = btn.dataset.grade;
      const filtered = selected === 'Tất cả'
        ? allCourses
        : allCourses.filter(c => c.grade === selected);
      renderCourses(filtered);
    });
  });
}

function renderCourses(courses) {
  const grid = document.getElementById('course-grid');
  if (!grid) return;

  // Bảng màu & huy hiệu chuẩn theo phong cách IXL
  const gradeStyles = {
    'mầm non': { badge: 'K', color: '#f59e0b' },
    'lớp 1':   { badge: '1', color: '#65a30d' },
    'lớp 2':   { badge: '2', color: '#dc2626' },
    'lớp 3':   { badge: '3', color: '#0284c7' },
    'lớp 4':   { badge: '4', color: '#7c3aed' },
    'lớp 5':   { badge: '5', color: '#059669' },
    'lớp 6':   { badge: '6', color: '#ea580c' },
    'lớp 7':   { badge: '7', color: '#15803d' },
    'lớp 8':   { badge: '8', color: '#ca8a04' },
    'lớp 9':   { badge: '9', color: '#6d28d9' }
  };

  grid.innerHTML = courses.map(c => {
    const g = (c.grade || '').toLowerCase();
    let href = `/course.html?id=${c.id}`;
    let lessonCount = c.lesson_count || 0;
    let style = { badge: 'M', color: '#0b5ed7' };

    if (g.includes('mầm non')) {
      href = '/kindergarten.html';
      lessonCount = 42;
      style = gradeStyles['mầm non'];
    } else {
      for (let i = 1; i <= 9; i++) {
        if (g.includes(`lớp ${i}`) || g.includes(`grade ${i}`)) {
          href = `/grade${i}.html`;
          lessonCount = 44;
          style = gradeStyles[`lớp ${i}`] || style;
          break;
        }
      }
    }

    return `
      <div class="ixl-card" style="--grade-color: ${style.color};">
        <div>
          <div class="ixl-card-head">
            <div class="ixl-badge">${style.badge}</div>
            <a href="${href}" class="ixl-title">${c.grade}</a>
          </div>
          <p class="ixl-desc">${c.description}</p>
        </div>
        <div class="ixl-links">
          <div class="ixl-row">
            <span class="ixl-row-label">Toán tư duy</span>
            <div class="ixl-row-actions">
              <a href="${href}?tab=skills" class="ixl-link">${lessonCount} skills &rsaquo;</a>
              <span class="ixl-sep">|</span>
              <a href="${href}?tab=videos" class="ixl-link">Videos &rsaquo;</a>
            </div>
          </div>
          <div class="ixl-row">
            <span class="ixl-row-label">Luyện tập</span>
            <div class="ixl-row-actions">
              <a href="${href}?tab=games" class="ixl-link">Games &rsaquo;</a>
              <span class="ixl-sep">|</span>
              <a href="${href}?tab=fluency" class="ixl-link">Fluency &rsaquo;</a>
            </div>
          </div>
        </div>
      </div>
    `;
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
  if (grade && select) {
    select.value = grade;
  }
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

    if (!q) {
      searchResults.innerHTML = '';
      return;
    }

    searchTimer = setTimeout(async () => {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const items = await res.json();
      if (items.length === 0) {
        searchResults.innerHTML = '<p style="text-align:center; color:#666;">Không tìm thấy bài học phù hợp.</p>';
        return;
      }
      searchResults.innerHTML = `
        <div class="card" style="padding: 16px;">
          <p style="font-weight:700; color:#0b5ed7; margin-bottom:10px;">🔎 Tìm thấy ${items.length} bài học:</p>
          <ul style="list-style:none;">
            ${items.map(l => `
              <li style="border-bottom:1px solid #eee;">
                <a href="/lesson.html?id=${l.id}" style="display:flex; justify-content:space-between; padding:10px 4px; text-decoration:none; color:#333;">
                  <span><strong>[${l.grade}]</strong> Bài ${l.lesson_order}: ${l.title}</span>
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

// --- CHUYỂN ĐỔI NGÔN NGỮ VN / EN ---
function switchLang(lang) {
  localStorage.setItem('mathpro_lang', lang);

  const subLink = document.querySelector('nav a[href="/subscribe.html"]');
  const loginLink = document.querySelector('nav a[href="/login.html"]');
  if (subLink) subLink.textContent = lang === 'en' ? 'Membership' : 'Đăng ký học';
  if (loginLink) loginLink.textContent = lang === 'en' ? 'Sign in' : 'Đăng nhập';

  const heroTitle = document.querySelector('.hero h1');
  const heroDesc = document.querySelector('.hero p');
  const heroBtn = document.querySelector('.hero .btn-primary');
  if (heroTitle) heroTitle.textContent = lang === 'en'
    ? 'Deep Understanding – Clear Thinking – Steady Progress'
    : 'Hiểu Sâu – Tư Duy Rõ – Tiến Bộ Vững Chắc';
  if (heroDesc) heroDesc.textContent = lang === 'en'
    ? 'Interactive online math learning system from Kindergarten to Primary School.'
    : 'Hệ thống bài giảng Toán trực tuyến tương tác từ Mầm non đến Tiểu học.';
  if (heroBtn) heroBtn.textContent = lang === 'en' ? 'Explore Courses' : 'Khám phá khóa học';
}

const savedLang = localStorage.getItem('mathpro_lang') || 'vi';
const langSelect = document.getElementById('langSelect');
if (langSelect) {
  langSelect.value = savedLang;
  switchLang(savedLang);
}

loadCourses();
checkAuth();
