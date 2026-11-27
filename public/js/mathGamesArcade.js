// public/js/mathGamesArcade.js
window.renderMathArcade = function (grade, launchFireworks) {
  const container = document.getElementById('tab-games');
  if (!container) return;

  let arcadeScore = 0;
  let activeGame = 'balloon';
  const r = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
  const sh = arr => [...arr].sort(() => Math.random() - 0.5);
  const isVip = window.MathProVIP && window.MathProVIP.isVipUser;

  container.innerHTML = `
    <style>
      .arcade-wrap { max-width: 780px; margin: 0 auto; }
      .arcade-menu { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px; }
      .arcade-btn {
        padding: 10px 18px; border-radius: 14px; border: 2px solid #cbd5e1;
        background: #fff; font-weight: 700; font-size: 14px; cursor: pointer; transition: 0.2s;
      }
      .arcade-btn.active, .arcade-btn:hover { border-color: #0284c7; background: #e0f2fe; color: #0369a1; }
      .arcade-btn.vip-locked { opacity: 0.75; border-style: dashed; background: #f8fafc; color: #64748b; }
      .arcade-stage {
        background: linear-gradient(180deg, #eff6ff 0%, #f0fdf4 100%);
        border: 2px solid #93c5fd; border-radius: 22px; padding: 26px; text-align: center;
        box-shadow: 0 10px 28px rgba(59,130,246,0.1);
      }
      .arcade-hud { display: flex; justify-content: center; gap: 14px; margin-bottom: 16px; font-weight: 800; color: #1e40af; }
      .hud-pill { background: #fff; padding: 5px 14px; border-radius: 99px; border: 1px solid #bfdbfe; font-size: 14px; }
      /* Memory Match */
      .match-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; max-width: 520px; margin: 16px auto; }
      .match-card {
        height: 76px; border-radius: 14px; border: 2px solid #93c5fd; background: #1d4ed8; color: #fff;
        font-size: 16px; font-weight: 800; cursor: pointer; display: grid; place-items: center; transition: 0.2s;
      }
      .match-card.flipped { background: #fff; color: #0f172a; border-color: #059669; }
      .match-card.matched { background: #dcfce7; color: #15803d; border-color: #10b981; cursor: default; }
      /* Ninja */
      .ninja-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; max-width: 420px; margin: 16px auto; }
      .ninja-tile {
        padding: 18px; border-radius: 16px; border: 2px solid #fdba74; background: #fff7ed;
        font-size: 20px; font-weight: 800; color: #9a3412; cursor: pointer; transition: 0.15s;
      }
      .ninja-tile:hover { transform: scale(1.05); background: #ffedd5; }
      .ninja-tile.hit { background: #dcfce7; border-color: #10b981; color: #15803d; }
      .ninja-tile.miss { background: #fee2e2; border-color: #ef4444; color: #b91c1c; }
      /* BINGO */
      .bingo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; max-width: 360px; margin: 16px auto; }
      .bingo-cell {
        height: 74px; border-radius: 14px; border: 2px solid #c4b5fd; background: #fff;
        font-size: 20px; font-weight: 800; color: #4c1d95; cursor: pointer; transition: 0.15s;
      }
      .bingo-cell.won { background: #7c3aed; color: #fff; border-color: #5b21b6; }
      @media (max-width: 540px) { .match-grid { grid-template-columns: repeat(2, 1fr); } }
    </style>
    <div class="arcade-wrap">
      <div class="arcade-menu">
        <button class="arcade-btn active" onclick="selectArcadeGame('balloon', this)">🎈 Bắn Bóng (Free)</button>
        <button class="arcade-btn ${isVip ? '' : 'vip-locked'}" onclick="selectArcadeGame('match', this)">${isVip ? '🎯' : '🔒'} Lật Thẻ Ghép Cặp</button>
        <button class="arcade-btn ${isVip ? '' : 'vip-locked'}" onclick="selectArcadeGame('ninja', this)">${isVip ? '🥷' : '🔒'} Ninja Chặt Số</button>
        <button class="arcade-btn ${isVip ? '' : 'vip-locked'}" onclick="selectArcadeGame('bingo', this)">${isVip ? '🏆' : '🔒'} Math BINGO 3×3</button>
      </div>
      <div class="arcade-stage">
        <div class="arcade-hud">
          <span class="hud-pill">🎮 Lớp ${grade}</span>
          <span class="hud-pill">🏆 Tổng điểm Arcade: <span id="arc-score">0</span></span>
        </div>
        <div id="arcade-body"></div>
      </div>
    </div>
  `;

  function addScore(pts) {
    arcadeScore += pts;
    const el = document.getElementById('arc-score');
    if (el) el.innerText = arcadeScore;
  }

  window.selectArcadeGame = function (name, btn) {
    // Chỉ cho phép chơi miễn phí 10% (1/4 game = Bắn Bóng), 3 game sau khóa VIP
    if (name !== 'balloon' && !(window.MathProVIP && window.MathProVIP.isVipUser)) {
      if (window.MathProVIP) window.MathProVIP.openVipModal();
      return;
    }

    activeGame = name;
    container.querySelectorAll('.arcade-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    if (name === 'balloon') startBalloon();
    else if (name === 'match') startMatch();
    else if (name === 'ninja') startNinja();
    else if (name === 'bingo') startBingo();
  };

  // 1. Bắn bóng phép tính
  function startBalloon() {
    const a = r(2, grade * 6 + 4), b = r(2, grade >= 3 ? 9 : 10);
    const isMul = grade >= 3;
    const target = isMul ? a * b : a + b;
    const op = isMul ? '×' : '+';
    const opts = sh([
      { l: `🎈 ${a} ${op} ${b}`, ok: true },
      { l: `🎈 ${a + 1} ${op} ${b}`, ok: false },
      { l: `🎈 ${a} ${op} ${b + 1}`, ok: false }
    ]);
    document.getElementById('arcade-body').innerHTML = `
      <h3 style="color:#1e3a8a;">Tìm bóng có kết quả bằng <span style="font-size:26px;color:#059669;">${target}</span></h3>
      <div class="options-grid" style="margin-top:18px;" id="b-opts"></div>
      <div id="b-fb" class="feedback-msg"></div>
    `;
    opts.forEach((o, i) => {
      const btn = document.createElement('button');
      btn.className = `balloon-btn b-c${i % 3}`;
      btn.innerText = o.l;
      btn.onclick = () => {
        const fb = document.getElementById('b-fb');
        if (o.ok) { addScore(10); fb.innerText = '💥 Bùm! Chính xác (+10đ)'; fb.className = 'feedback-msg fb-ok'; setTimeout(startBalloon, 750); }
        else { fb.innerText = '😅 Trượt rồi, chọn lại nhé!'; fb.className = 'feedback-msg fb-err'; }
      };
      document.getElementById('b-opts').appendChild(btn);
    });
  }

  // 2. Lật thẻ ghép cặp (Monster Mansion Match)
  function startMatch() {
    const pairs = [];
    const usedAns = new Set();
    while (pairs.length < 4) {
      const a = r(2, grade * 4 + 5), b = r(2, grade >= 3 ? 9 : 10);
      const ans = grade >= 3 ? a * b : a + b;
      if (!usedAns.has(ans)) {
        usedAns.add(ans);
        pairs.push({ id: pairs.length, text: `${a} ${grade >= 3 ? '×' : '+'} ${b}` });
        pairs.push({ id: pairs.length - 1, text: String(ans) });
      }
    }
    const cards = sh(pairs);
    let flipped = [], matchedCount = 0;

    document.getElementById('arcade-body').innerHTML = `
      <h3 style="color:#1e3a8a;">Lật thẻ ghép 4 cặp Phép tính ↔ Kết quả</h3>
      <div class="match-grid" id="m-grid"></div>
      <div id="m-fb" class="feedback-msg"></div>
    `;
    const grid = document.getElementById('m-grid');
    cards.forEach((c) => {
      const btn = document.createElement('button');
      btn.className = 'match-card';
      btn.innerText = '❓';
      btn.onclick = () => {
        if (btn.classList.contains('flipped') || btn.classList.contains('matched') || flipped.length === 2) return;
        btn.classList.add('flipped');
        btn.innerText = c.text;
        flipped.push({ btn, id: c.id });
        if (flipped.length === 2) {
          const [f1, f2] = flipped;
          if (f1.id === f2.id) {
            f1.btn.classList.add('matched'); f2.btn.classList.add('matched');
            flipped = []; matchedCount++; addScore(15);
            if (matchedCount === 4) {
              document.getElementById('m-fb').innerText = '🏆 Hoàn hảo! Bé đã ghép hết 4 cặp!';
              document.getElementById('m-fb').className = 'feedback-msg fb-ok';
              if (launchFireworks) launchFireworks();
              setTimeout(startMatch, 1500);
            }
          } else {
            setTimeout(() => {
              f1.btn.classList.remove('flipped'); f1.btn.innerText = '❓';
              f2.btn.classList.remove('flipped'); f2.btn.innerText = '❓';
              flipped = [];
            }, 650);
          }
        }
      };
      grid.appendChild(btn);
    });
  }

  // 3. Ninja Chặt Số (Number Ninja)
  function startNinja() {
    let ruleText = '', checkFn = null;
    if (grade <= 2) {
      const wantEven = r(0, 1) === 0;
      ruleText = wantEven ? 'Chặt tất cả SỐ CHẴN!' : 'Chặt tất cả SỐ LẺ!';
      checkFn = n => wantEven ? n % 2 === 0 : n % 2 !== 0;
    } else if (grade === 3) {
      const m = [3, 5][r(0, 1)];
      ruleText = `Chặt các số CHIA HẾT CHO ${m}!`;
      checkFn = n => n % m === 0;
    } else if (grade === 4) {
      ruleText = 'Chặt các số CHIA HẾT CHO 9!';
      checkFn = n => n % 9 === 0;
    } else {
      const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43]);
      ruleText = 'Chặt tất cả SỐ NGUYÊN TỐ!';
      checkFn = n => primes.has(n);
    }

    const nums = [];
    let targetTotal = 0;
    while (nums.length < 9) {
      const n = r(2, grade >= 4 ? 45 : 30);
      if (!nums.includes(n)) { nums.push(n); if (checkFn(n)) targetTotal++; }
    }
    if (targetTotal === 0) { nums[0] = grade <= 2 ? 4 : (grade === 3 ? 15 : (grade === 4 ? 18 : 7)); targetTotal = 1; }
    let hits = 0;

    document.getElementById('arcade-body').innerHTML = `
      <h3 style="color:#9a3412;">🥷 ${ruleText}</h3>
      <div class="ninja-grid" id="n-grid"></div>
      <div id="n-fb" class="feedback-msg"></div>
    `;
    const grid = document.getElementById('n-grid');
    sh(nums).forEach(n => {
      const btn = document.createElement('button');
      btn.className = 'ninja-tile';
      btn.innerText = n;
      btn.onclick = () => {
        if (btn.classList.contains('hit')) return;
        if (checkFn(n)) {
          btn.classList.add('hit'); hits++; addScore(10);
          if (hits === targetTotal) {
            document.getElementById('n-fb').innerText = '🥷 Xuất sắc! Chặt sạch mục tiêu!';
            document.getElementById('n-fb').className = 'feedback-msg fb-ok';
            setTimeout(startNinja, 1100);
          }
        } else {
          btn.classList.add('miss');
          document.getElementById('n-fb').innerText = '💥 Ôi nhầm rồi!';
          document.getElementById('n-fb').className = 'feedback-msg fb-err';
        }
      };
      grid.appendChild(btn);
    });
  }

  // 4. Math BINGO 3x3
  function startBingo() {
    const cells = [];
    const used = new Set();
    while (cells.length < 9) {
      const a = r(2, grade * 3 + 5), b = r(2, grade >= 3 ? 9 : 9);
      const ans = grade >= 3 ? a * b : a + b;
      const q = grade >= 4 ? `${a} × x = ${ans} (x=?)` : `${a} ${grade >= 3 ? '×' : '+'} ${b} = ?`;
      const val = grade >= 4 ? b : ans;
      if (!used.has(val)) { used.add(val); cells.push({ q, val, won: false }); }
    }
    let queue = sh([...cells]), current = queue.pop();

    document.getElementById('arcade-body').innerHTML = `
      <h3 style="color:#4c1d95;">🏆 Giải câu hỏi &amp; ghép 3 ô thẳng hàng để BINGO!</h3>
      <div id="bingo-q" style="font-size:24px;font-weight:800;margin:12px 0;color:#059669;">${current.q}</div>
      <div class="bingo-grid" id="bg-grid"></div>
      <div id="bg-fb" class="feedback-msg"></div>
    `;
    const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const grid = document.getElementById('bg-grid');
    cells.forEach((c) => {
      const btn = document.createElement('button');
      btn.className = 'bingo-cell';
      btn.innerText = c.val;
      btn.onclick = () => {
        if (c.won) return;
        const fb = document.getElementById('bg-fb');
        if (c.val === current.val) {
          c.won = true; btn.classList.add('won'); addScore(15);
          if (wins.some(w => w.every(i => cells[i].won))) {
            fb.innerText = '🎉 BINGO!! Tuyệt vời quá!'; fb.className = 'feedback-msg fb-ok';
            if (launchFireworks) launchFireworks();
            setTimeout(startBingo, 1600);
            return;
          }
          current = queue.pop();
          if (current) document.getElementById('bingo-q').innerText = current.q;
          fb.innerText = '✅ Chuẩn rồi!'; fb.className = 'feedback-msg fb-ok';
        } else {
          fb.innerText = '❌ Chưa đúng, thử ô khác nhé!'; fb.className = 'feedback-msg fb-err';
        }
      };
      grid.appendChild(btn);
    });
  }

  startBalloon();
};
