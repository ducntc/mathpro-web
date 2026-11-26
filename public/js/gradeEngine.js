// public/js/gradeEngine.js
window.initGradePage = function (config) {
  const { grade, title, topics, generator, videos, fluencyMax } = config;
  let isVipUser = false;
  let currentSkill = null;
  let currentQuestion = null;
  let smartScore = 0;
  const storageKey = `mathpro_g${grade}_progress`;
  let progressMap = JSON.parse(localStorage.getItem(storageKey) || '{}');

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

  function renderVideos() {
    const box = document.getElementById('videos-container');
    if (!box) return;
    box.innerHTML = (videos || []).map((v, i) => `
      <div class="media-card">
        <div>
          <span class="badge-free">Video ${i + 1}</span>
          <h3 style="margin:10px 0 6px;">${v.title}</h3>
          <p style="color:var(--muted); font-size:14px;">${v.desc}</p>
        </div>
        <button class="btn-primary" onclick="alert('Đang phát video: ${v.title}')">▶ Xem bài giảng</button>
      </div>`).join('');
  }

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

  // Mini Game
  window.initGame = function () {
    const a = Math.floor(Math.random() * (grade * 10)) + 5;
    const b = Math.floor(Math.random() * (grade * 5)) + 2;
    const target = grade >= 3 ? a * b : a + b;
    const op = grade >= 3 ? '×' : '+';
    document.getElementById('game-prompt').innerText = `Chọn bóng có kết quả bằng ${target}:`;
    document.getElementById('game-fb').innerText = '';
    const opts = [
      { label: `🎈 ${a} ${op} ${b}`, ok: true },
      { label: `🎈 ${a + 1} ${op} ${b}`, ok: false },
      { label: `🎈 ${a} ${op} ${b + 1}`, ok: false }
    ].sort(() => Math.random() - 0.5);
    const box = document.getElementById('game-options');
    box.innerHTML = '';
    opts.forEach(o => {
      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.innerText = o.label;
      btn.onclick = () => {
        const fb = document.getElementById('game-fb');
        fb.innerText = o.ok ? '💥 Chính xác! Bóng đã nổ!' : '😅 Trượt rồi, thử lại nhé!';
        fb.className = 'feedback-msg ' + (o.ok ? 'fb-ok' : 'fb-err');
        if (o.ok) setTimeout(initGame, 800);
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

  // Tự động mở đúng tab theo ?tab=videos | games | fluency | skills
  const urlTab = new URLSearchParams(window.location.search).get('tab');
  if (urlTab && ['skills', 'videos', 'games', 'fluency'].includes(urlTab)) {
    const targetBtn = document.querySelector(`.tab-btn[onclick*="'${urlTab}'"]`);
    if (targetBtn) switchTab(urlTab, targetBtn);
  }
};
