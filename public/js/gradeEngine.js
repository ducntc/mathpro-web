// public/js/gradeEngine.js
window.initGradePage = function (config) {
  const { grade, title, topics, generator, videos, fluencyMax } = config;
  let isVipUser = false;
  let currentSkill = null;
  let currentQuestion = null;
  let smartScore = 0;
  let gameScore = 0;
  let gameStreak = 0;
  const storageKey = `mathpro_g${grade}_progress`;
  let progressMap = JSON.parse(localStorage.getItem(storageKey) || '{}');

  // 1. Tiêm CSS nâng cấp cho nút Trang chủ, Tab Videos & Tab Games
  if (!document.getElementById('grade-engine-enhancements')) {
    const style = document.createElement('style');
    style.id = 'grade-engine-enhancements';
    style.textContent = `
      .home-nav-btn {
        background: #ffffff !important;
        color: #059669 !important;
        font-weight: 800 !important;
        box-shadow: 0 2px 8px rgba(0,0,0,0.12);
      }
      .home-nav-btn:hover { background: #ecfdf5 !important; transform: translateY(-1px); }

      /* Video Cards nâng cấp */
      .video-card {
        background: #fff; border-radius: 18px; overflow: hidden;
        border: 1px solid #e2e8f0; box-shadow: 0 4px 14px rgba(0,0,0,0.05);
        display: flex; flex-direction: column; transition: transform 0.2s, box-shadow 0.2s;
      }
      .video-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(16,185,129,0.15); }
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
      .video-body { padding: 18px; display: flex; flex-direction: column; flex: 1; justify-content: space-between; gap: 10px; }

      /* Game Arena nâng cấp */
      .game-arena {
        background: linear-gradient(180deg, #eff6ff 0%, #f0fdf4 100%);
        border: 2px solid #93c5fd; border-radius: 24px; padding: 28px;
        max-width: 680px; margin: 0 auto; text-align: center;
        box-shadow: 0 10px 30px rgba(59,130,246,0.12);
      }
      .game-hud {
        display: flex; justify-content: center; gap: 18px; margin: 12px 0 20px; flex-wrap: wrap;
      }
      .game-pill {
        background: #fff; padding: 6px 16px; border-radius: 99px; font-weight: 800;
        font-size: 14px; border: 1px solid #bfdbfe; color: #1e40af;
      }
      .balloon-btn {
        padding: 20px 14px; font-size: 20px; font-weight: 800; border-radius: 20px;
        border: none; color: #fff; cursor: pointer; transition: transform 0.18s, box-shadow 0.18s;
        box-shadow: 0 6px 15px rgba(0,0,0,0.12);
      }
      .balloon-btn:hover { transform: translateY(-5px) scale(1.04); box-shadow: 0 10px 20px rgba(0,0,0,0.18); }
      .b-c0 { background: linear-gradient(135deg, #f43f5e, #fb7185); }
      .b-c1 { background: linear-gradient(135deg, #3b82f6, #60a5fa); }
      .b-c2 { background: linear-gradient(135deg, #f59e0b, #fbbf24); }
    `;
    document.head.appendChild(style);
  }

  // 2. Thêm nút Quay lại Trang chủ vào Header (vị trí đầu thanh điều hướng)
  const navActions = document.querySelector('.nav-actions');
  if (navActions && !navActions.querySelector('.home-nav-btn')) {
    const homeBtn = document.createElement('a');
    homeBtn.href = '/';
    homeBtn.className = 'nav-btn home-nav-btn';
    homeBtn.innerHTML = '🏠 Trang chủ';
    navActions.insertBefore(homeBtn, navActions.firstChild);
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
        if (isAdmin || hasValidVip) isVipUser = true;
      }
    } catch (e) {}
  }

  window.switchTab = function (tabName, btn) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + tabName).classList.add('active');
    btn.classList.add('active');
    if (tabName === 'games') initGame();
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

  // 3. Giao diện Tab Videos nâng cấp + Modal trình phát
  function renderVideos() {
    const box = document.getElementById('videos-container');
    if (!box) return;
    const gradients = [
      'linear-gradient(135deg, #059669, #10b981)',
      'linear-gradient(135deg, #2563eb, #60a5fa)',
      'linear-gradient(135deg, #7c3aed, #a78bfa)'
    ];
    box.innerHTML = (videos || []).map((v, i) => `
      <div class="video-card">
        <div class="video-thumb" style="background:${gradients[i % gradients.length]}" onclick="openVideoModal('${v.title.replace(/'/g, "\\'")}', '${v.desc.replace(/'/g, "\\'")}')">
          <div class="video-play-circle">▶</div>
          <span class="video-duration">🎬 Bài giảng #${i + 1}</span>
        </div>
        <div class="video-body">
          <div>
            <h3 style="margin-bottom:6px; font-size:17px;">${v.title}</h3>
            <p style="color:var(--muted); font-size:14px;">${v.desc}</p>
          </div>
          <button class="btn-primary" style="width:100%;" onclick="openVideoModal('${v.title.replace(/'/g, "\\'")}', '${v.desc.replace(/'/g, "\\'")}')">▶ Xem bài giảng</button>
        </div>
      </div>`).join('');
  }

  window.openVideoModal = function (vTitle, vDesc) {
    let modal = document.getElementById('video-player-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'video-player-modal';
      modal.className = 'modal-overlay';
      modal.innerHTML = `
        <div class="modal-card" style="max-width:560px; text-align:left;">
          <h3 id="vp-title" style="color:#059669; margin-bottom:8px;"></h3>
          <div style="background:#0f172a; color:#fff; border-radius:14px; height:240px; display:grid; place-items:center; margin-bottom:14px;">
            <div style="text-align:center;">
              <div style="font-size:46px;">🎬</div>
              <p style="font-size:14px; color:#cbd5e1; margin-top:8px;">Trình phát Video bài giảng MathPro</p>
            </div>
          </div>
          <p id="vp-desc" style="color:#475569; font-size:14px; margin-bottom:14px;"></p>
          <button class="btn-primary" onclick="document.getElementById('video-player-modal').classList.remove('open')">Đóng trình phát</button>
        </div>`;
      document.body.appendChild(modal);
    }
    document.getElementById('vp-title').innerText = vTitle;
    document.getElementById('vp-desc').innerText = vDesc;
    modal.classList.add('open');
  };

  window.startSkill = function (skillId) {
    let skill = null;
    for (const t of topics) {
      const f = t.skills.find(s => s.id === skillId);
      if (f) { skill = f; break; }
    }
    if (!skill) return;
    if (!skill.free && !isVipUser) {
      document.getElementById('vip-modal').classList.add('open');
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

  function nextQuestion() {
    if (!currentSkill) return;
    currentQuestion = generator(currentSkill.type, currentSkill.max);
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
    if (String(chosen) === String(currentQuestion.ans)) {
      smartScore = Math.min(100, smartScore + 10);
      fb.innerText = '🎉 Chính xác! Tuyệt vời quá!';
      fb.className = 'feedback-msg fb-ok';
      if (!isVipUser && smartScore >= 90) {
        smartScore = 90;
        saveProgress(currentSkill.id, smartScore);
        updateScoreUI();
        document.getElementById('vip-modal').classList.add('open');
        return;
      }
      if (smartScore === 100) {
        fb.innerText = '🏆 Xuất sắc! Bạn đã đạt 100% SmartScore!';
        launchFireworks();
      }
    } else {
      smartScore = Math.max(0, smartScore - 5);
      fb.innerText = `❌ Chưa đúng rồi! Đáp án đúng là: ${currentQuestion.ans}`;
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

  // 4. Giao diện Tab Games nâng cấp (Bắn Bóng Phép Tính)
  window.initGame = function () {
    const tabGames = document.getElementById('tab-games');
    if (tabGames && !tabGames.querySelector('.game-arena')) {
      tabGames.innerHTML = `
        <div class="game-arena">
          <span class="badge-free">Mini Game Tương Tác</span>
          <h2 style="margin:10px 0; color:#1e3a8a;">🎈 Bắn Bóng Phép Tính</h2>
          <div class="game-hud">
            <span class="game-pill">🏆 Điểm: <span id="g-score">${gameScore}</span></span>
            <span class="game-pill">🔥 Chuỗi đúng: <span id="g-streak">${gameStreak}</span></span>
          </div>
          <p id="game-prompt" style="font-size:22px;font-weight:800;margin:14px 0 22px;color:#0f172a;"></p>
          <div class="options-grid" id="game-options"></div>
          <div id="game-fb" class="feedback-msg"></div>
          <button class="btn-primary" style="margin-top:20px;" onclick="initGame()">🔄 Đổi câu mới</button>
        </div>`;
    }

    const a = Math.floor(Math.random() * (grade * 10)) + 5;
    const b = Math.floor(Math.random() * (grade * 5)) + 2;
    const target = grade >= 3 ? a * b : a + b;
    const op = grade >= 3 ? '×' : '+';
    document.getElementById('game-prompt').innerText = `Tìm quả bóng có kết quả bằng ${target}:`;
    document.getElementById('game-fb').innerText = '';
    const opts = [
      { label: `🎈 ${a} ${op} ${b}`, ok: true },
      { label: `🎈 ${a + 1} ${op} ${b}`, ok: false },
      { label: `🎈 ${a} ${op} ${b + 1}`, ok: false }
    ].sort(() => Math.random() - 0.5);

    const box = document.getElementById('game-options');
    box.innerHTML = '';
    opts.forEach((o, idx) => {
      const btn = document.createElement('button');
      btn.className = `balloon-btn b-c${idx % 3}`;
      btn.innerText = o.label;
      btn.onclick = () => {
        const fb = document.getElementById('game-fb');
        if (o.ok) {
          gameScore += 10;
          gameStreak++;
          fb.innerText = '💥 Tuyệt vời! Bóng đã nổ (+10 điểm)!';
          fb.className = 'feedback-msg fb-ok';
          if (gameStreak % 5 === 0) launchFireworks();
          setTimeout(initGame, 800);
        } else {
          gameStreak = 0;
          fb.innerText = '😅 Trượt rồi, chọn lại quả bóng khác nhé!';
          fb.className = 'feedback-msg fb-err';
        }
        document.getElementById('g-score').innerText = gameScore;
        document.getElementById('g-streak').innerText = gameStreak;
      };
      box.appendChild(btn);
    });
  };

  // Fluency Zone
  let fzTimer = null, fzScore = 0, fzAns = 0;
  window.startFluency = function () {
    fzScore = 0;
    let timeLeft = 30;
    document.getElementById('fz-score').innerText = fzScore;
    document.getElementById('fz-time').innerText = timeLeft;
    const input = document.getElementById('fz-input');
    input.disabled = false;
    input.value = '';
    input.focus();
    nextFluency();
    clearInterval(fzTimer);
    fzTimer = setInterval(() => {
      timeLeft--;
      document.getElementById('fz-time').innerText = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(fzTimer);
        input.disabled = true;
        document.getElementById('fz-question').innerText = `Hết giờ! Tổng điểm: ${fzScore} 🎉`;
        if (fzScore >= 50) launchFireworks();
      }
    }, 1000);
  };

  function nextFluency() {
    const maxN = fluencyMax || grade * 12;
    const a = Math.floor(Math.random() * maxN) + 2;
    const b = Math.floor(Math.random() * (grade >= 3 ? 9 : maxN)) + 2;
    if (grade >= 3) {
      fzAns = a * b;
      document.getElementById('fz-question').innerText = `${a} × ${b} = ?`;
    } else {
      fzAns = a + b;
      document.getElementById('fz-question').innerText = `${a} + ${b} = ?`;
    }
  }

  document.getElementById('fz-input').addEventListener('input', function () {
    if (parseInt(this.value, 10) === fzAns) {
      fzScore += 10;
      document.getElementById('fz-score').innerText = fzScore;
      this.value = '';
      nextFluency();
    }
  });

  function launchFireworks() {
    const canvas = document.getElementById('fireworks-canvas');
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

  renderVideos();
  checkUserStatus().then(renderTopics);

  // Mở đúng tab theo ?tab=...
  const urlTab = new URLSearchParams(window.location.search).get('tab');
  if (urlTab && ['skills', 'videos', 'games', 'fluency'].includes(urlTab)) {
    const targetBtn = document.querySelector(`.tab-btn[onclick*="'${urlTab}'"]`);
    if (targetBtn) switchTab(urlTab, targetBtn);
  }
};
