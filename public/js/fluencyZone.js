// public/js/fluencyZone.js
window.renderFluencyZone = function (grade, launchFireworks) {
  const isEn = (localStorage.getItem('mathpro_lang') || 'vi') === 'en';
  const container = document.getElementById('tab-fluency');
  if (!container) return;

  function r(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }

  const FACT_SETS = {
    1: [
      { id: 'add10', label: isEn ? '➕ Add within 10' : '➕ Cộng phạm vi 10', gen: () => { const a = r(1, 9), b = r(0, 10 - a); return { q: `${a} + ${b}`, ans: a + b }; } },
      { id: 'sub10', label: isEn ? '➖ Subtract within 10' : '➖ Trừ phạm vi 10', gen: () => { const a = r(2, 10), b = r(0, a); return { q: `${a} - ${b}`, ans: a - b }; } },
      { id: 'mix10', label: isEn ? '⚡ Add & Sub within 10' : '⚡ Cộng & Trừ phạm vi 10', gen: () => r(0, 1) ? FACT_SETS[1][0].gen() : FACT_SETS[1][1].gen() },
      { id: 'add20', label: isEn ? '🚀 Add within 20' : '🚀 Cộng phạm vi 20', gen: () => { const a = r(2, 12), b = r(1, 20 - a); return { q: `${a} + ${b}`, ans: a + b }; } }
    ],
    2: [
      { id: 'add10', label: isEn ? '➕ Add within 10' : '➕ Cộng phạm vi 10', gen: () => { const a = r(1, 9), b = r(1, 10 - a); return { q: `${a} + ${b}`, ans: a + b }; } },
      { id: 'add20', label: isEn ? '➕ Add within 20' : '➕ Cộng phạm vi 20', gen: () => { const a = r(3, 14), b = r(2, 20 - a); return { q: `${a} + ${b}`, ans: a + b }; } },
      { id: 'sub20', label: isEn ? '➖ Subtract within 20' : '➖ Trừ phạm vi 20', gen: () => { const a = r(6, 20), b = r(1, a - 1); return { q: `${a} - ${b}`, ans: a - b }; } },
      { id: 'mix20', label: isEn ? '⚡ Mixed Add & Sub' : '⚡ Cộng & Trừ hỗn hợp', gen: () => r(0, 1) ? FACT_SETS[2][0].gen() : FACT_SETS[2][2].gen() }
    ],
    3: [
      { id: 'mul_easy', label: isEn ? '✖️ Multiply 2, 3, 4, 5, 10' : '✖️ Nhân 2, 3, 4, 5, 10', gen: () => { const a = [2, 3, 4, 5, 10][r(0, 4)], b = r(1, 10); return { q: `${a} × ${b}`, ans: a * b }; } },
      { id: 'mul_hard', label: isEn ? '🔥 Multiply 6, 7, 8, 9' : '🔥 Nhân 6, 7, 8, 9', gen: () => { const a = [6, 7, 8, 9][r(0, 3)], b = r(2, 10); return { q: `${a} × ${b}`, ans: a * b }; } },
      { id: 'div_2510', label: isEn ? '➗ Divide by 2, 5, 10' : '➗ Chia cho 2, 5, 10', gen: () => { const b = [2, 5, 10][r(0, 2)], q = r(1, 10); return { q: `${b * q} : ${b}`, ans: q }; } },
      { id: 'mix_md', label: isEn ? '⚡ Mixed Mul & Div' : '⚡ Nhân & Chia tổng hợp', gen: () => r(0, 1) ? FACT_SETS[3][0].gen() : FACT_SETS[3][2].gen() }
    ],
    4: [
      { id: 'mul_easy', label: isEn ? '✖️ Multiply 2, 3, 4, 5, 10' : '✖️ Nhân 2, 3, 4, 5, 10', gen: () => { const a = [2, 3, 4, 5, 10][r(0, 4)], b = r(2, 12); return { q: `${a} × ${b}`, ans: a * b }; } },
      { id: 'mul_10', label: isEn ? '🔥 Times Tables to 10×10' : '🔥 Bảng nhân đến 10×10', gen: () => { const a = r(2, 10), b = r(2, 10); return { q: `${a} × ${b}`, ans: a * b }; } },
      { id: 'div_10', label: isEn ? '➗ Division up to 10' : '➗ Bảng chia đến 10', gen: () => { const b = r(2, 10), q = r(2, 10); return { q: `${b * q} : ${b}`, ans: q }; } },
      { id: 'all_ops', label: isEn ? '🏎️ All 4 Operations' : '🏎️ Hỗn hợp 4 phép tính', gen: () => { const idx = r(0, 2); return idx === 0 ? FACT_SETS[4][0].gen() : (idx === 1 ? FACT_SETS[4][1].gen() : FACT_SETS[4][2].gen()); } }
    ]
  };

  const sets = FACT_SETS[grade] || FACT_SETS[4];
  let currentSet = sets[0];
  let timer = null;
  let playing = false;
  let timeLeft = 60;
  let correctCount = 0;
  let totalAttempts = 0;
  let typed = '';
  let currentQ = null;
  const bestKey = `mathpro_fz_best_g${grade}`;

  container.innerHTML = `
    <style>
      .fz-wrap { max-width: 680px; margin: 0 auto; }
      .fz-sets { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 18px; }
      .fz-set-btn {
        padding: 9px 15px; border-radius: 12px; border: 1.5px solid #cbd5e1;
        background: #fff; font-weight: 700; font-size: 13.5px; cursor: pointer; transition: 0.15s;
      }
      .fz-set-btn.active, .fz-set-btn:hover { border-color: #f59e0b; background: #fef3c7; color: #b45309; }
      .fz-set-btn.vip-locked { opacity: 0.72; border-style: dashed; background: #f8fafc; color: #64748b; }
      .fz-card {
        background: linear-gradient(180deg, #fffbeb 0%, #ffffff 100%);
        border: 2px solid #fbbf24; border-radius: 22px; padding: 26px; text-align: center;
        box-shadow: 0 10px 26px rgba(245, 158, 11, 0.12);
      }
      .fz-hud { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 14px; }
      .fz-pill { background: #fff; border: 1px solid #fde68a; padding: 6px 14px; border-radius: 99px; font-weight: 800; font-size: 14px; color: #92400e; }
      .fz-track { background: #e2e8f0; height: 12px; border-radius: 99px; position: relative; margin: 12px 0 22px; overflow: hidden; }
      .fz-fill { background: linear-gradient(90deg, #f59e0b, #10b981); height: 100%; width: 0%; transition: width 0.25s; }
      .fz-q-row { display: flex; justify-content: center; align-items: center; gap: 14px; margin: 16px 0; font-size: 36px; font-weight: 800; color: #0f172a; }
      .fz-ans-box {
        min-width: 110px; height: 56px; padding: 0 14px; border: 2.5px solid #f59e0b; border-radius: 14px;
        background: #fff; display: inline-grid; place-items: center; font-size: 32px; color: #059669;
      }
      .fz-ans-box.err { border-color: #ef4444; background: #fef2f2; color: #dc2626; }
      .fz-pad { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; max-width: 280px; margin: 18px auto 0; }
      .fz-key {
        padding: 13px; font-size: 20px; font-weight: 800; border-radius: 12px; border: 1.5px solid #e2e8f0;
        background: #fff; cursor: pointer; transition: 0.1s;
      }
      .fz-key:hover { background: #f8fafc; border-color: #cbd5e1; }
      .fz-key:active { transform: scale(0.95); }
      .fz-key-ok { background: #10b981; color: #fff; border-color: #10b981; }
      .fz-key-del { background: #fee2e2; color: #b91c1c; border-color: #fecaca; }
    </style>
    <div class="fz-wrap">
      <div class="fz-sets" id="fz-sets-bar"></div>
      <div class="fz-card">
        <div class="fz-hud">
          <span class="fz-pill">⏱ <span id="fz-t">60</span>s</span>
          <span class="fz-pill">✅ ${isEn ? 'Correct:' : 'Đúng:'} <span id="fz-c">0</span></span>
          <span class="fz-pill">🏆 ${isEn ? 'Best:' : 'Kỷ lục:'} <span id="fz-b">${localStorage.getItem(bestKey) || 0}</span></span>
        </div>
        <div class="fz-track"><div class="fz-fill" id="fz-bar"></div></div>
        <div id="fz-stage"></div>
      </div>
    </div>
  `;

  const setsBar = document.getElementById('fz-sets-bar');
  sets.forEach((s, idx) => {
    const locked = window.MathProVIP ? window.MathProVIP.isLocked(idx, sets.length) : idx > 0;
    const b = document.createElement('button');
    b.className = 'fz-set-btn' + (idx === 0 ? ' active' : '') + (locked ? ' vip-locked' : '');
    b.innerText = locked ? `🔒 ${s.label}` : s.label;
    b.onclick = () => {
      if (locked) {
        if (window.MathProVIP) window.MathProVIP.openVipModal();
        return;
      }
      currentSet = s;
      setsBar.querySelectorAll('.fz-set-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      showReadyScreen();
    };
    setsBar.appendChild(b);
  });

  function showReadyScreen() {
    clearInterval(timer);
    playing = false;
    document.getElementById('fz-t').innerText = '60';
    document.getElementById('fz-c').innerText = '0';
    document.getElementById('fz-bar').style.width = '0%';
    document.getElementById('fz-stage').innerHTML = `
      <h2 style="margin-bottom:8px; color:#b45309;">🏎️ ${isEn ? '60s Raceway' : 'Đường Đua Phản Xạ (Raceway)'}</h2>
      <p style="color:#475569; margin-bottom:18px;">${isEn ? 'Topic:' : 'Chủ đề:'} <strong>${currentSet.label}</strong> — ${isEn ? 'Solve as many as you can in 60 seconds!' : 'Giải càng nhiều càng tốt trong 60 giây!'}</p>
      <button class="btn-primary" style="font-size:17px; padding:14px 32px;" id="fz-go-btn">🚀 ${isEn ? 'Start Race!' : 'Bắt đầu đua!'}</button>
    `;
    document.getElementById('fz-go-btn').onclick = startRace;
  }

  function startRace() {
    clearInterval(timer);
    playing = true;
    timeLeft = 60;
    correctCount = 0;
    totalAttempts = 0;
    typed = '';
    document.getElementById('fz-t').innerText = timeLeft;
    document.getElementById('fz-c').innerText = '0';
    document.getElementById('fz-bar').style.width = '0%';

    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    document.getElementById('fz-stage').innerHTML = `
      <div class="fz-q-row">
        <span id="fz-q-text"></span>
        <span>=</span>
        <span class="fz-ans-box" id="fz-ans-box">?</span>
      </div>
      <div class="fz-pad">
        ${digits.map(n => `<button type="button" class="fz-key" data-k="${n}">${n}</button>`).join('')}
        <button type="button" class="fz-key fz-key-del" data-k="del">⌫</button>
        <button type="button" class="fz-key" data-k="0">0</button>
        <button type="button" class="fz-key fz-key-ok" data-k="ok">OK</button>
      </div>
    `;

    document.querySelectorAll('#fz-stage .fz-key').forEach(btn => {
      btn.onclick = () => handleKey(btn.dataset.k);
    });

    nextQ();
    timer = setInterval(() => {
      timeLeft--;
      const tEl = document.getElementById('fz-t');
      if (tEl) tEl.innerText = timeLeft;
      if (timeLeft <= 0) finishRace();
    }, 1000);
  }

  function nextQ() {
    currentQ = currentSet.gen();
    typed = '';
    const qEl = document.getElementById('fz-q-text');
    const aEl = document.getElementById('fz-ans-box');
    if (qEl) qEl.innerText = currentQ.q;
    if (aEl) { aEl.innerText = '?'; aEl.classList.remove('err'); }
  }

  function handleKey(k) {
    if (!playing) return;
    const aEl = document.getElementById('fz-ans-box');
    if (!aEl) return;
    aEl.classList.remove('err');

    if (k === 'del') {
      typed = typed.slice(0, -1);
      aEl.innerText = typed || '?';
      return;
    }
    if (k === 'ok') {
      if (!typed) return;
      totalAttempts++;
      if (Number(typed) === currentQ.ans) {
        onCorrect();
      } else {
        aEl.classList.add('err');
        typed = '';
        aEl.innerText = '?';
      }
      return;
    }

    if (typed.length < 4) {
      typed += k;
      aEl.innerText = typed;
      if (Number(typed) === currentQ.ans) {
        totalAttempts++;
        onCorrect();
      } else if (typed.length >= String(currentQ.ans).length) {
        totalAttempts++;
        aEl.classList.add('err');
        typed = '';
      }
    }
  }

  function onCorrect() {
    correctCount++;
    document.getElementById('fz-c').innerText = correctCount;
    const pct = Math.min(100, correctCount * 5);
    document.getElementById('fz-bar').style.width = pct + '%';
    nextQ();
  }

  function finishRace() {
    clearInterval(timer);
    playing = false;
    const oldBest = Number(localStorage.getItem(bestKey) || 0);
    const isNewBest = correctCount > oldBest;
    if (isNewBest) {
      localStorage.setItem(bestKey, correctCount);
      const bEl = document.getElementById('fz-b');
      if (bEl) bEl.innerText = correctCount;
      if (launchFireworks) launchFireworks();
    }
    const acc = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;

    document.getElementById('fz-stage').innerHTML = `
      <h2 style="color:#059669; margin-bottom:8px;">🏁 ${isEn ? 'Race Finished!' : 'Hoàn thành đường đua!'}</h2>
      ${isNewBest ? `<div style="color:#d97706; font-weight:800; margin-bottom:10px;">🎉 ${isEn ? `NEW RECORD: ${correctCount} solved!` : `KỶ LỤC MỚI: ${correctCount} câu!`}</div>` : ''}
      <p style="font-size:18px; margin-bottom:18px;">
        ${isEn ? 'Correct:' : 'Đúng:'} <strong>${correctCount} ${isEn ? 'questions' : 'câu'}</strong> &nbsp;|&nbsp; ${isEn ? 'Accuracy:' : 'Độ chính xác:'} <strong>${acc}%</strong>
      </p>
      <button class="btn-primary" style="font-size:16px; padding:12px 28px;" id="fz-again-btn">🔄 ${isEn ? 'Play Again' : 'Chơi lại ngay'}</button>
    `;
    document.getElementById('fz-again-btn').onclick = startRace;
  }

  if (!window._fzKeyBound) {
    window._fzKeyBound = true;
    document.addEventListener('keydown', (e) => {
      const tab = document.getElementById('tab-fluency');
      if (!tab || !tab.classList.contains('active')) return;
      if (e.key >= '0' && e.key <= '9') {
        if (window._fzHandleKey) window._fzHandleKey(e.key);
      } else if (e.key === 'Backspace') {
        if (window._fzHandleKey) window._fzHandleKey('del');
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (window._fzHandleKey) window._fzHandleKey('ok');
      }
    });
  }
  window._fzHandleKey = handleKey;

  showReadyScreen();
};
