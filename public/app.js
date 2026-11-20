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
  grid.innerHTML = courses.map(c => `
    <div class="card">
      <h3>${c.grade}</h3>
      <p><strong>${c.title}</strong></p>
      <p style="margin: 8px 0; font-size: 14px; color: #555;">${c.description}</p>
      <p style="font-size: 13px; color: #0b5ed7; font-weight: 600; margin-bottom: 12px;">
        📚 ${c.lesson_count || 0} bài học
      </p>
      <a href="/course.html?id=${c.id}" class="btn-primary" style="padding:8px 16px; font-size:14px;">
        Vào học ngay →
      </a>
    </div>
  `).join('');
}

function populateGradeSelect(courses) {
  const select = document.getElementById('grade-select');
  const grades = [...new Set(courses.map(c => c.grade))];
  select.innerHTML = '<option value="">-- Chọn khối lớp --</option>' +
    grades.map(g => `<option value="${g}">${g}</option>`).join('');
}

function preselectGradeFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const grade = params.get('register');
  if (grade) {
    document.getElementById('grade-select').value = grade;
  }
}

document.getElementById('signup-form').addEventListener('submit', async (e) => {
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

async function checkAuth() {
  const res = await fetch('/api/me');
  const { user } = await res.json();
  if (user) {
    const adminLink = user.role === 'admin' ? '<a href="/admin.html" style="color:#ff7a00;">Quản trị</a>' : '';
    document.getElementById('auth-nav').innerHTML = `
      ${adminLink}
      <a href="/profile.html">Hồ sơ</a>
      <span style="margin-left:20px;">Chào, <strong>${user.name}</strong></span>
      <a href="#" id="logout-btn">Đăng xuất</a>
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

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchResults.innerHTML = '';
  clearSearchBtn.style.display = 'none';
});

loadCourses();
checkAuth();
