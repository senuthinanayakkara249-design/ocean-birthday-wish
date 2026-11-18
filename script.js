/* ===========================================================
   OCEAN BIRTHDAY SURPRISE  -  script.js  (the BRAINS)

   PART A - CONFIG  : the ONLY part you need to edit. Passwords, words, photos.
   PART B - ENGINE  : makes everything work. Please don't change unless curious!

   Rules for editing CONFIG:
     - Keep the quote marks "like this" and the commas at the end of lines.
     - Anything inside [square brackets] in the letters is a PLACEHOLDER.
       It shows up highlighted yellow so you can spot what to replace.
   =========================================================== */

/* ===========================================================
   PART A - CONFIG  (EDIT HERE ✏️)
   =========================================================== */
const CONFIG = {

  /* ---- 1. PASSWORD (page 1) ---- */
  // Numbers only! Any length from 4 to 8 digits works.
  // The little pearls on screen automatically match the length.
  password: "2302",
  // A clue that does NOT give away the answer:
  passwordHint: "A date that makes my heart skip a beat 💙",

  /* ---- 2. NAMES ---- */
  nickname: "Ocean",          // his nickname (appears all over the site)
  myName: "Yuki",        // YOUR name / nickname for the signatures

  /* ---- 3. MUSIC & SOUND ---- */
  songFile: "assets/ocean-song.mp3",   // put your mp3 in the assets folder
  songTitle: "Our Ocean Song 🎵",       // shown in the player
  musicVolume: 0.5,                     // 0 (silent) to 1 (loud)
  soundEffects: true,                   // little pops and chimes (true/false)

  /* ---- 4. ANGRY BEAR (wrong password) ---- */
  // Drop your own gif/png here. If the file is missing, a cute drawn bear shows instead.
  angryBearImage: "assets/angry-bear.gif",
  wrongMessage: "EXCUSE ME?! WHO LET YOU TOUCH THE SECRET LOCK? 😾",

  /* ---- 5. LOVE LETTER (page 3) ---- */
  loveLetter: {
    greeting: "My dearest Ocean,",
    paragraphs: [
      "Happy birthday, my sweet Ocean🥂💖. I hope you're somewhere comfortable, because this letter is a little long. I had a lot of feelings to fit in. 💙",
      "Some people make the world louder. You make it softer. Somehow, ordinary moments, like a quiet walk, a silly message or a plain old Tuesday, feel a little more beautiful when you're part of them.",
      "I want you to know how much I appreciate you💖. Sooo,",
      "Do you remember the day u first tried to talk to me? 🤣 Ngl, I genuinely loved your energetic and bright personality. The way u giggle is super cute, and your silly little moments never fail to make things more cheerful I think about it more than I admit, and it still makes me smile.",
      "Our little inside joke: Ocean kissing dolphin while giggling👀💖 AHHH U KNW HW TO MAKE ME BLUSH NGL . I'm grinning just typing it. 😼",
      "Being with you feels like standing at the edge of the sea: calm, a little bit magical, and full of room to dream. Your nickname suits you more than you know.",
      "I'm so excited to celebrate you today. Not because a birthday is just a date on the calendar, but because it's a reason to tell you out loud that I'm really, really glad you exist, and that I feel lucky to be loved by you.",
      "Thank you for being you,My lovely Ocean . Keep going, there are more surprises waiting for you in the deep.Good luck Husband 💖😊 🐚"
    ],
    ps: "P.S. If you're smiling right now, I expect you to admit it. 👀💙"
  },

  /* ---- 6. QUIZ (page 4) ----
     Each question has:  q (the question), options (EXACTLY 4 answers),
     correct (which answer is right: 0 = first, 1 = second, 2 = third, 3 = fourth).
     Questions marked "PERSONAL" are the ones to rewrite with your real answers! */
  quiz: {
    questions: [
      { q: "Who is the cutest person in this relationship?",
        options: ["Your wife, obviously 😼", "Ocean, on a good day 🌊", "The dolphin sticker 🐬", "It's a tie (wrong answer!)"],
        correct: 0 },

      // PERSONAL: change these 4 answers to your real favorite ways to annoy him.
      { q: "What is your wife's favorite way to annoy you?",
        options: ["Poking you until you react 👉", "Sending 47 random memes at once 📱", "scolding you for no reason", "Stealing your food and calling it sharing 🍟"],
        correct: 1 },

      // PERSONAL: what really happens when you miss him?
      { q: "What happens when your wife misses you?",
        options: ["She sends 'hi' and nothing else 🥺", "She stares at your photo dramatically", "She pretends she's totally fine 🙃", "All of the above, plus snacks"],
        correct: 2 },

      { q: "Who is more likely to start a silly argument?",
        options: ["Your wife, just for fun 😼", "Ocean, accidentally", "The wifi", "Both, then they make up with hugs 💙"],
        correct: 0 },

      { q: "What is your wife's most dangerous superpower?",
        options: ["Turning you into a smiling puddle 🫠", "Finding your weak spot instantly", "Making you say 'okay fine' in 2 seconds", "Instant forgiveness hugs 🤗"],
        correct: 1 },

      { q: "What is the official meaning of Ocean in this relationship?",
        options: ["Deep, calm and a little mysterious 🌊", "Professional blanket thief", "The reason for all the hearts", "Her favorite person in the whole world 💙"],
        correct: 2 },

      { q: "What reward does Ocean deserve for completing this quiz?",
        options: ["One million kisses (non-refundable)", "A tiny trophy made of seashells 🐚", "A cute giggle from your wife 😼", "A cuddle coupon, valid forever"],
        correct: 1 },

      { q: "What is the most important rule in this little underwater love story?",
        options: ["Never go to bed angry at each other", "Always answer when the other says 'hi'", "Share snacks. Always. No exceptions 🍟", "Your wife is always right 😼💙"],
        correct: 3}
    ],
    // Result messages. The site picks the FIRST row where score >= min (list from highest to lowest).
    results: [
      { min: 8, sticker: "👑", title: "Certified Ocean Expert!",
        text: "PERFECT SCORE?! Okay, you clearly pay attention. I'm impressed, and a little bit in love (again). 💙" },
      { min: 6, sticker: "🐬", title: "Almost an expert!",
        text: "So close! You know me pretty well. Here is a cookie for your effort. 🍪💙" },
      { min: 4, sticker: "🐠", title: "Not bad, little fish!",
        text: "Hmm... suspicious. I think someone needs a refresher course. Lessons start tonight. 😼" },
      { min: 0, sticker: "🦭", title: "Oh no. We need to talk.",
        text: "This score is a crime. Your punishment: one long hug and a promise to study harder. 🥺💙" }
    ]
  },

  /* ---- 7. PHOTO PUZZLE + ALBUM (page 5) ---- */
  puzzleImage: "assets/puzzle-photo.jpg",   // a SQUARE photo works best
  album: [
    { image: "assets/album-photo-1.jpg", sticker: "🐬",
      caption: "A little piece of my happiness",
      note: "" },
    { image: "assets/album-photo-2.jpg", sticker: "🐚",
      caption: "My favorite kind of chaos",
      note: "[Write a short sweet note about this photo.]" },
    { image: "assets/album-photo-3.jpg", sticker: "🦭",
      caption: "You, me, and our little universe",
      note: "[Write a short sweet note about this photo.]" }
  ],

  /* ---- 8. ROYAL BIRTHDAY LETTER (page 6) ---- */
  birthdayLetter: [
    "On this very special day, I wish you a year full of peaceful mornings, gentle evenings and plenty of reasons to smile.",
    "I hope your dreams find their way to you, and that you have the courage and the calm to chase every one of them. Whatever you aim for, I'll be cheering for you the loudest.",
    "May your days be soft where they need to be, exciting where they should be, and full of people who adore you, starting with me.",
    "Thank you for being someone who makes the world feel a little brighter. Today is all about you, so eat the cake, accept the hugs, and let yourself be celebrated. 🎂",
    "No matter what i like the way you are.. Your personality and everything 💖😊.. Just remember that even if i vanish suddenly.. i never gonna fgt abt u cus u r too silly.. how can i fgt someone like you 😌...Hum hope everything gonna be alr.. LOVE YOURSELF AND ENJOY UR LIFE SAGAR💖💤🥂 "
  ],
  // This line is shown EXACTLY as written (please keep it!):
  giggleLine: "Hope u love this and u better pay me back with a cute giggle! 😼💙",
  signOff: "Made with love, just for you. 💌",
  // Shown when he presses "Reveal my final secret":
  finalSecret: "Psst... " + "I love you more than all the water in the ocean. Happy birthday, my favorite person. 🌊💙",

  // Highlight [placeholders] in yellow so you can spot them? (set to false before sending!)
  highlightPlaceholders: true
};


/* ===========================================================
   PART B - ENGINE  (you don't need to edit below this line)
   =========================================================== */
(function () {
  'use strict';

  /* ---------- tiny helpers ---------- */
  const $ = (id) => document.getElementById(id);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const rand = (a, b) => Math.random() * (b - a) + a;
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const state = { sfx: CONFIG.soundEffects, current: 1, maxReached: 1, busy: false };

  /* ---------- fill in names everywhere ---------- */
  $$('.nick').forEach((el) => { el.textContent = CONFIG.nickname; });
  $('hintText').textContent = CONFIG.passwordHint;

  /* Writes paragraphs into a box. Text in [brackets] gets a yellow highlight. */
  function writeParagraphs(box, list) {
    box.textContent = '';
    list.forEach((text) => {
      const p = document.createElement('p');
      text.split(/(\[[^\]]+\])/).forEach((part) => {
        if (!part) return;
        if (CONFIG.highlightPlaceholders && /^\[[^\]]+\]$/.test(part)) {
          const s = document.createElement('span');
          s.className = 'placeholder';
          s.textContent = part;
          p.appendChild(s);
        } else {
          p.appendChild(document.createTextNode(part));
        }
      });
      box.appendChild(p);
    });
  }

  /* ===========================================================
     SOUND EFFECTS  (made with the browser, no files needed)
     =========================================================== */
  let audioCtx = null;
  function getCtx() {
    if (!audioCtx) {
      const C = window.AudioContext || window.webkitAudioContext;
      if (C) { try { audioCtx = new C(); } catch (e) { audioCtx = null; } }
    }
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }
  function tone(freq, delay, dur, type, vol) {
    if (!state.sfx) return;
    const ctx = getCtx();
    if (!ctx) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    const t = ctx.currentTime + delay;
    o.type = type || 'sine';
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol || 0.1, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(ctx.destination);
    o.start(t); o.stop(t + dur + 0.05);
  }
  const sfx = {
    click() { tone(660, 0, 0.08, 'triangle', 0.07); },
    pop() { tone(880, 0, 0.1, 'sine', 0.1); tone(1320, 0.05, 0.1, 'sine', 0.06); },
    success() { [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, i * 0.11, 0.4, 'sine', 0.11)); },
    wrong() { tone(190, 0, 0.28, 'sawtooth', 0.08); tone(140, 0.14, 0.34, 'sawtooth', 0.08); },
    magic() { [784, 988, 1175, 1568].forEach((f, i) => tone(f, i * 0.08, 0.3, 'triangle', 0.08)); }
  };

  /* ===========================================================
     VISUAL EFFECTS: hearts, sparkles, confetti
     =========================================================== */
  const fx = $('fx');
  function spawn(cls, text, vars, life) {
    if (reduceMotion || fx.childElementCount > 240) return;
    const s = document.createElement('span');
    s.className = cls;
    s.textContent = text;
    Object.keys(vars).forEach((k) => {
      if (k.startsWith('--')) s.style.setProperty(k, vars[k]); else s.style[k] = vars[k];
    });
    fx.appendChild(s);
    setTimeout(() => s.remove(), life);
  }
  const HEARTS = ['💙', '🩵', '🤍', '💖', '💎', '✨', '🫧'];
  /* Hearts + sparkles explode from a point and float upward */
  function burst(x, y, count) {
    for (let i = 0; i < (count || 26); i++) {
      const a = rand(0, Math.PI * 2), d = rand(70, 230);
      spawn('burst', pick(HEARTS), {
        left: x + 'px', top: y + 'px',
        '--dx': Math.cos(a) * d + 'px', '--dy': Math.sin(a) * d * 0.8 + 'px',
        '--rot': rand(-60, 60) + 'deg', fontSize: rand(1, 2.1) + 'rem'
      }, 1800);
    }
  }
  function burstFrom(el, count) {
    const r = el.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, count);
  }
  function burstCenter(count) { burst(window.innerWidth / 2, window.innerHeight / 2, count); }
  /* Hearts falling from the top of the screen */
  function rain(count, items) {
    const list = items || ['💙', '🩵', '🤍', '✨'];
    for (let i = 0; i < count; i++) {
      const dur = rand(3, 6);
      spawn('rain', pick(list), {
        left: rand(0, 100) + 'vw', fontSize: rand(1.1, 2.2) + 'rem', animationDuration: dur + 's',
        animationDelay: rand(0, 1.6) + 's', '--rot': rand(-90, 90) + 'deg'
      }, (dur + 1.8) * 1000);
    }
  }
  function sparkles(count) {
    for (let i = 0; i < count; i++) {
      spawn('spark', pick(['✨', '⭐', '💫']), {
        left: rand(5, 95) + 'vw', top: rand(8, 85) + 'vh', fontSize: rand(1, 2) + 'rem', animationDelay: rand(0, 0.8) + 's'
      }, 2200);
    }
  }
  const CONFETTI = ['#8ecbff', '#5ee7e0', '#ffffff', '#b9d7f5', '#2b8fd6', '#ffb6d2', '#c9d6e8'];
  function confetti(count) {
    for (let i = 0; i < count; i++) {
      const dur = rand(3, 6.5);
      spawn('confetti', '', {
        left: rand(0, 100) + 'vw', '--c': pick(CONFETTI), '--rot': rand(200, 900) + 'deg',
        animationDuration: dur + 's', animationDelay: rand(0, 1.2) + 's'
      }, (dur + 1.5) * 1000);
    }
  }
  function flashRed() {
    const f = $('flash');
    f.classList.remove('on'); void f.offsetWidth; f.classList.add('on');
  }
  function restartAnim(el, cls) { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }

  /* Ambient background: bubbles, stars, floating hearts */
  (function buildAmbient() {
    const box = $('ambient');
    const frag = document.createDocumentFragment();
    const add = (cls, text, css) => {
      const s = document.createElement('span');
      s.className = cls; if (text) s.textContent = text;
      Object.keys(css).forEach((k) => { s.style[k] = css[k]; });
      frag.appendChild(s);
    };
    for (let i = 0; i < 16; i++) {
      const size = rand(10, 42);
      add('bubble', '', { left: rand(0, 100) + 'vw', width: size + 'px', height: size + 'px',
        animationDuration: rand(13, 26) + 's', animationDelay: -rand(0, 26) + 's' });
    }
    for (let i = 0; i < 40; i++) {
      const size = rand(2, 4);
      add('star', '', { left: rand(0, 100) + '%', top: rand(0, 65) + '%', width: size + 'px', height: size + 'px',
        animationDelay: -rand(0, 4) + 's', animationDuration: rand(2.5, 5) + 's' });
    }
    ['💙', '🤍', '🫧', '🐚', '✨', '🩵', '💙', '🐠'].forEach((e) => {
      add('floaty', e, { left: rand(3, 95) + 'vw', fontSize: rand(1, 1.8) + 'rem',
        animationDuration: rand(16, 30) + 's', animationDelay: -rand(0, 30) + 's' });
    });
    box.appendChild(frag);
  })();

  /* ===========================================================
     NAVIGATION  (six pages, one visible at a time)
     =========================================================== */
  const pages = $$('.page');
  const dots = $$('.dot');
  let confettiTimer = null;

  function updateProgress() {
    dots.forEach((d) => {
      const n = Number(d.dataset.n);
      d.classList.toggle('current', n === state.current);
      d.classList.toggle('reached', n < state.current || (n <= state.maxReached && n !== state.current));
      d.setAttribute('aria-current', n === state.current ? 'step' : 'false');
      // you can revisit pages you've already reached, but not skip ahead,
      // and the gate + warning can't be revisited once passed.
      d.disabled = n > state.maxReached || n === state.current || (n <= 2 && state.maxReached > 2) || (n === 1 && state.maxReached > 1);
    });
    $('stageLabel').textContent = 'Stage ' + state.current + ' of 6';
  }

  function showPage(n) {
    pages.forEach((p) => p.classList.toggle('active', p.id === 'page' + n));
    state.current = n;
    document.body.dataset.page = String(n);
    window.scrollTo(0, 0);
    updateProgress();
    if (n !== 6) stopConfetti();
    onEnter[n] && onEnter[n]();
  }

  function goTo(n) {
    if (state.busy || n === state.current || n < 1 || n > 6) return;
    if (n > state.maxReached) return; // can't skip ahead!
    if (reduceMotion) { showPage(n); return; }
    state.busy = true;
    const w = $('wipe');
    w.classList.remove('go'); void w.offsetWidth; w.classList.add('go');
    setTimeout(() => showPage(n), 550);
    setTimeout(() => { w.classList.remove('go'); state.busy = false; }, 1100);
  }
  /* Move FORWARD to a page (unlocks it first) - only called when a step is truly completed. */
  function advance(n) {
    state.maxReached = Math.max(state.maxReached, n);
    goTo(n);
  }

  dots.forEach((d) => d.addEventListener('click', () => goTo(Number(d.dataset.n))));
  $$('[data-back]').forEach((b) => b.addEventListener('click', () => { sfx.click(); goTo(state.current - 1); }));

  /* ===========================================================
     MUSIC PLAYER
     =========================================================== */
  const bgm = $('bgm');
  const playBtn = $('playBtn'), muteBtn = $('muteBtn'), volume = $('volume');
  const playerBox = $('player'), playerNote = $('playerNote');
  $('songTitle').textContent = CONFIG.songTitle;
  bgm.src = CONFIG.songFile;
  bgm.volume = Math.min(1, Math.max(0, CONFIG.musicVolume));
  volume.value = String(bgm.volume);

  function setPlayerUI() {
    const playing = !bgm.paused;
    playBtn.textContent = playing ? '⏸' : '▶';
    playBtn.setAttribute('aria-label', playing ? 'Pause music' : 'Play music');
    playerBox.classList.toggle('playing', playing);
  }
  function songMissing() {
    playerNote.textContent = 'Add your song: ' + CONFIG.songFile;
    setPlayerUI();
  }
  playBtn.addEventListener('click', () => {
    if (!bgm.paused) { bgm.pause(); playerNote.textContent = 'Paused 💤'; setPlayerUI(); return; }
    const p = bgm.play();
    if (p && p.then) {
      p.then(() => { playerNote.textContent = 'Now playing 🎶'; setPlayerUI(); }).catch(songMissing);
    }
  });
  bgm.addEventListener('error', songMissing);
  bgm.addEventListener('play', setPlayerUI);
  bgm.addEventListener('pause', setPlayerUI);
  volume.addEventListener('input', () => {
    bgm.volume = Number(volume.value);
    if (bgm.volume > 0 && bgm.muted) { bgm.muted = false; syncMute(); }
  });
  function syncMute() {
    muteBtn.textContent = bgm.muted || bgm.volume === 0 ? '🔇' : '🔊';
    muteBtn.setAttribute('aria-pressed', String(bgm.muted));
    muteBtn.setAttribute('aria-label', bgm.muted ? 'Unmute music' : 'Mute music');
  }
  muteBtn.addEventListener('click', () => { bgm.muted = !bgm.muted; syncMute(); });
  syncMute();

  /* ===========================================================
     PAGE 1 - PASSWORD GATE
     =========================================================== */
  const PASS = String(CONFIG.password);
  const gateCard = $('gateCard');
  const gateMsg = $('gateMsg');
  const pearlBox = $('pearls');
  let entered = '';
  let gateLocked = false;
  if (!/^\d{4,8}$/.test(PASS)) console.warn('CONFIG.password should be 4-8 digits (numbers only).');

  for (let i = 0; i < PASS.length; i++) {
    const s = document.createElement('span');
    s.className = 'pearl';
    pearlBox.appendChild(s);
  }
  const pearls = $$('.pearl', pearlBox);

  function drawPearls() { pearls.forEach((p, i) => p.classList.toggle('filled', i < entered.length)); }
  function say(msg, kind) { gateMsg.textContent = msg; gateMsg.className = 'gate-msg' + (kind ? ' ' + kind : ''); }

  function pressDigit(d) {
    if (gateLocked || entered.length >= PASS.length) return;
    entered += d; sfx.click(); drawPearls();
    say(entered.length === PASS.length ? 'All set. Now press Unlock 💙' : '');
  }
  function backspace() { if (gateLocked || !entered) return; entered = entered.slice(0, -1); sfx.click(); drawPearls(); say(''); }
  function clearAll() { if (gateLocked) return; entered = ''; drawPearls(); say(''); }

  function wrongPassword() {
    gateLocked = true;
    sfx.wrong(); flashRed();
    restartAnim(gateCard, 'shake');
    const bear = $('bearPop');
    $('bearText').textContent = CONFIG.wrongMessage;
    bear.hidden = false;
    restartAnim(bear, 'bear-pop');
    say('Wrong password! Try again 🙈', 'bad');
    setTimeout(() => {
      bear.hidden = true;
      gateCard.classList.remove('shake');
      entered = ''; drawPearls(); say('');
      gateLocked = false;
    }, 2300);
  }
  function correctPassword() {
    gateLocked = true;
    sfx.success();
    say('Unlocked! Welcome in, ' + CONFIG.nickname + ' 💙✨', 'ok');
    burstFrom(gateCard, 40); sparkles(14);
    setTimeout(() => burstFrom(gateCard, 30), 450);
    setTimeout(() => { advance(2); }, 2100);
  }
  function submitPassword() {
    if (gateLocked) return;
    if (entered.length < PASS.length) {
      say('Fill every pearl first 🫧', 'bad');
      restartAnim($('keypad'), 'shake');
      return;
    }
    if (entered === PASS) correctPassword(); else wrongPassword();
  }

  $('keypad').addEventListener('click', (e) => {
    const b = e.target.closest('.key');
    if (!b) return;
    const k = b.dataset.key;
    if (k === 'del') backspace(); else if (k === 'clear') clearAll(); else pressDigit(k);
  });
  $('unlockBtn').addEventListener('click', submitPassword);

  /* the sound toggle */
  const sfxToggle = $('sfxToggle');
  function drawSfx() {
    sfxToggle.textContent = state.sfx ? '🔔 Sounds: on' : '🔕 Sounds: off';
    sfxToggle.setAttribute('aria-pressed', String(state.sfx));
  }
  sfxToggle.addEventListener('click', () => { state.sfx = !state.sfx; drawSfx(); sfx.pop(); });
  drawSfx();

  /* bear image: use the gif if it exists, else keep the drawn bear */
  (function setupBear() {
    const img = $('bearImg');
    img.onload = () => { img.hidden = false; $('bearSvg').style.display = 'none'; };
    img.onerror = () => { img.hidden = true; };
    img.src = CONFIG.angryBearImage;
  })();

  /* keyboard: digits, Backspace, Enter */
  document.addEventListener('keydown', (e) => {
    if (state.current === 1) {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (/^[0-9]$/.test(e.key)) { pressDigit(e.key); const kb = document.querySelector('.key[data-key="' + e.key + '"]'); if (kb) { kb.classList.add('pressed'); setTimeout(() => kb.classList.remove('pressed'), 120); } }
      else if (e.key === 'Backspace') { e.preventDefault(); backspace(); }
      else if (e.key === 'Enter') {
        // if a button has focus, Enter already clicks it - don't submit twice
        if (document.activeElement && document.activeElement.tagName === 'BUTTON') return;
        submitPassword();
      }
    }
    if (state.current === 5) puzzleKey(e);
    if (e.key === 'Escape' && !$('byeModal').hidden) { closeModal('byeModal'); }
  });

  /* ===========================================================
     PAGE 2 - THE CUTE WARNING
     =========================================================== */
  function openModal(id) {
    const m = $(id); m.hidden = false;
    const b = m.querySelector('button'); if (b) b.focus();
  }
  function closeModal(id) { $(id).hidden = true; }

  $('riskBtn').addEventListener('click', () => {
    sfx.magic(); openModal('luckModal');
    burstCenter(44); sparkles(14);
  });
  $('letsGoBtn').addEventListener('click', () => {
    sfx.pop(); closeModal('luckModal'); advance(3);
  });
  $('giveUpBtn').addEventListener('click', () => { sfx.wrong(); openModal('byeModal'); });
  $('reconsiderBtn').addEventListener('click', () => {
    closeModal('byeModal'); sfx.magic(); openModal('luckModal'); burstCenter(36); sparkles(10);
  });

  /* ===========================================================
     PAGE 3 - THE LOVE LETTER
     =========================================================== */
  const envBtn = $('envelopeBtn');
  let letterOpened = false;
  (function buildLetter() {
    $('letterGreeting').textContent = CONFIG.loveLetter.greeting;
    writeParagraphs($('letterBody'), CONFIG.loveLetter.paragraphs);
    $('letterPS').textContent = CONFIG.loveLetter.ps;
    $('letterSign').textContent = 'Forever yours, ' + CONFIG.myName + ' 💌';
  })();
  function showLetter() {
    $('envelopeStage').hidden = true;
    $('letterStage').hidden = false;
    $('paper').scrollTop = 0;
  }
  envBtn.addEventListener('click', () => {
    if (letterOpened) return;
    letterOpened = true;
    envBtn.classList.add('open'); sfx.magic();
    rain(60, ['💙', '🩵', '🤍', '💖']); sparkles(18);
    setTimeout(() => { sfx.success(); sparkles(10); }, 900);
    setTimeout(showLetter, reduceMotion ? 0 : 1700);
  });
  $('toQuiz').addEventListener('click', () => { sfx.pop(); advance(4); });

  /* ===========================================================
     PAGE 4 - THE QUIZ
     =========================================================== */
  const QS = CONFIG.quiz.questions;
  QS.forEach((q, i) => { if (!q.options || q.options.length !== 4) console.warn('Quiz question ' + (i + 1) + ' should have exactly 4 options.'); });
  const QSTICKERS = ['🐠', '🐳', '🦭', '🐬', '🐙', '🦀', '🐚', '🐡'];
  const quiz = { index: 0, answers: QS.map(() => null), finished: false };

  function renderQuestion() {
    const q = QS[quiz.index];
    $('qCounter').textContent = 'Question ' + (quiz.index + 1) + ' of ' + QS.length;
    $('qSticker').textContent = QSTICKERS[quiz.index % QSTICKERS.length];
    $('qBar').style.width = ((quiz.index + 1) / QS.length * 100) + '%';
    $('qText').textContent = q.q;
    $('qHint').textContent = '';
    const box = $('qOptions');
    box.textContent = '';
    q.options.forEach((text, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'opt' + (quiz.answers[quiz.index] === i ? ' selected' : '');
      b.textContent = text;
      b.setAttribute('aria-pressed', String(quiz.answers[quiz.index] === i));
      b.addEventListener('click', () => {
        quiz.answers[quiz.index] = i;   // one answer per question (replaces, never adds)
        sfx.pop(); burstFrom(b, 8);
        renderQuestion();
      });
      box.appendChild(b);
    });
    $('qPrev').disabled = quiz.index === 0;
    $('qNext').textContent = quiz.index === QS.length - 1 ? 'See my score 🏆' : 'Next →';
    $('qNext').disabled = quiz.answers[quiz.index] === null;
  }
  function calcScore() {
    return QS.reduce((s, q, i) => s + (quiz.answers[i] === q.correct ? 1 : 0), 0);
  }
  function showResult() {
    quiz.finished = true;
    const score = calcScore();
    const res = CONFIG.quiz.results.find((r) => score >= r.min) || CONFIG.quiz.results[CONFIG.quiz.results.length - 1];
    $('scoreBig').textContent = score + ' / ' + QS.length;
    $('resultTitle').textContent = res.title;
    $('resultText').textContent = res.text;
    $('resultSticker').textContent = res.sticker;
    $('quizArea').hidden = true;
    $('quizResult').hidden = false;
    sfx.success(); burstCenter(36); rain(20);
  }
  $('qPrev').addEventListener('click', () => { if (quiz.index > 0) { quiz.index--; sfx.click(); renderQuestion(); } });
  $('qNext').addEventListener('click', () => {
    if (quiz.answers[quiz.index] === null) { $('qHint').textContent = 'Pick an answer first, no skipping! 😼'; return; }
    sfx.click();
    if (quiz.index < QS.length - 1) { quiz.index++; renderQuestion(); } else showResult();
  });
  $('retryBtn').addEventListener('click', () => {
    quiz.index = 0; quiz.answers = QS.map(() => null); quiz.finished = false;
    $('quizResult').hidden = true; $('quizArea').hidden = false;
    sfx.pop(); renderQuestion();
  });
  $('quizContinue').addEventListener('click', () => { sfx.pop(); advance(5); });
  renderQuestion();

  /* ===========================================================
     PAGE 5 - SLIDING PUZZLE + ALBUM
     =========================================================== */
  const N = 3, TOTAL = N * N, EMPTY = TOTAL - 1;   // piece number 8 is the empty gap
  const boardEl = $('board');
  const puzzle = { board: [], start: [], moves: 0, solved: false, selected: -1, ready: false };
  let albumShown = false;

  const isSolved = () => puzzle.board.every((id, i) => id === i);
  const emptyPos = () => puzzle.board.indexOf(EMPTY);
  const adjacent = (a, b) => Math.abs(Math.floor(a / N) - Math.floor(b / N)) + Math.abs((a % N) - (b % N)) === 1;

  function setStatus(text, win) {
    const s = $('puzzleStatus');
    s.textContent = text;
    s.classList.toggle('win', !!win);
  }
  function drawBoard() {
    boardEl.textContent = '';
    boardEl.classList.toggle('solved', puzzle.solved);
    puzzle.board.forEach((id, pos) => {
      const t = document.createElement('button');
      t.type = 'button';
      t.className = 'tile';
      t.dataset.pos = String(pos);
      const isGap = id === EMPTY && !puzzle.solved;
      if (isGap) {
        t.classList.add('empty'); t.tabIndex = -1; t.setAttribute('aria-hidden', 'true');
      } else {
        const col = id % N, row = Math.floor(id / N);
        t.style.backgroundImage = 'url("' + CONFIG.puzzleImage + '")';
        t.style.backgroundPosition = (col * 100 / (N - 1)) + '% ' + (row * 100 / (N - 1)) + '%';
        t.setAttribute('aria-label', 'Puzzle piece ' + (id + 1) + (puzzle.solved ? '' : ', position ' + (pos + 1)));
        if (!puzzle.solved) { const n = document.createElement('span'); n.className = 'num'; n.textContent = String(id + 1); t.appendChild(n); }
        if (pos === puzzle.selected) t.classList.add('selected');
        t.disabled = puzzle.solved;
      }
      boardEl.appendChild(t);
    });
  }
  function moveTile(pos) {
    if (puzzle.solved) return;
    const gap = emptyPos();
    puzzle.selected = pos;
    if (!adjacent(pos, gap)) {
      drawBoard();
      const t = boardEl.children[pos];
      if (t) restartAnim(t, 'nope');
      setStatus('That piece can\'t slide yet. Pick one touching the gap! Moves: ' + puzzle.moves);
      sfx.wrong();
      setTimeout(() => { if (puzzle.selected === pos) { puzzle.selected = -1; if (!puzzle.solved) drawBoard(); } }, 600);
      return;
    }
    [puzzle.board[pos], puzzle.board[gap]] = [puzzle.board[gap], puzzle.board[pos]];
    puzzle.moves++; puzzle.selected = -1; sfx.click();
    if (isSolved()) { winPuzzle(); return; }
    drawBoard();
    setStatus('Keep going... Moves: ' + puzzle.moves);
  }
  function winPuzzle() {
    puzzle.solved = true; drawBoard();
    setStatus('YOU FOUND OUR LITTLE TREASURE! 💙', true);
    sfx.success(); burstCenter(44); rain(40); sparkles(16);
    setTimeout(revealAlbum, reduceMotion ? 0 : 1400);
  }
  /* Shuffle by making many random LEGAL moves from the solved picture.
     That way the puzzle can always be solved (no impossible shuffles). */
  function shuffle() {
    let b = Array.from({ length: TOTAL }, (_, i) => i);
    let gap = EMPTY, last = -1;
    for (let i = 0; i < 160 || b.every((id, k) => id === k); i++) {
      const options = [];
      const r = Math.floor(gap / N), c = gap % N;
      if (r > 0) options.push(gap - N);
      if (r < N - 1) options.push(gap + N);
      if (c > 0) options.push(gap - 1);
      if (c < N - 1) options.push(gap + 1);
      const choices = options.filter((o) => o !== last);
      const next = pick(choices.length ? choices : options);
      [b[gap], b[next]] = [b[next], b[gap]];
      last = gap; gap = next;
    }
    puzzle.board = b; puzzle.start = b.slice();
    puzzle.moves = 0; puzzle.solved = false; puzzle.selected = -1;
    drawBoard(); setStatus('Slide the pieces next to the gap. Moves: 0');
  }
  function resetPuzzle() {
    if (!puzzle.start.length) return shuffle();
    puzzle.board = puzzle.start.slice();
    puzzle.moves = 0; puzzle.solved = false; puzzle.selected = -1;
    drawBoard(); setStatus('Back to the start! Moves: 0');
  }
  boardEl.addEventListener('click', (e) => {
    const t = e.target.closest('.tile');
    if (!t || t.classList.contains('empty')) return;
    moveTile(Number(t.dataset.pos));
  });
  /* arrow keys slide the piece next to the gap toward it */
  function puzzleKey(e) {
    if (puzzle.solved || !puzzle.ready) return;
    const gap = emptyPos(), r = Math.floor(gap / N), c = gap % N;
    let from = -1;
    if (e.key === 'ArrowUp' && r < N - 1) from = gap + N;
    else if (e.key === 'ArrowDown' && r > 0) from = gap - N;
    else if (e.key === 'ArrowLeft' && c < N - 1) from = gap + 1;
    else if (e.key === 'ArrowRight' && c > 0) from = gap - 1;
    if (from >= 0) { e.preventDefault(); moveTile(from); }
  }
  $('shuffleBtn').addEventListener('click', () => { sfx.pop(); shuffle(); });
  $('resetBtn').addEventListener('click', () => { sfx.pop(); resetPuzzle(); });
  let peekTimer = null;
  $('peekBtn').addEventListener('click', () => {
    const p = $('peek');
    p.style.backgroundImage = 'url("' + CONFIG.puzzleImage + '")';
    p.hidden = false; sfx.pop();
    clearTimeout(peekTimer);
    peekTimer = setTimeout(() => { p.hidden = true; }, 2000);
  });

  /* Album (shown only after the puzzle is solved) */
  function buildAlbum() {
    const grid = $('albumGrid');
    grid.textContent = '';
    CONFIG.album.slice(0, 3).forEach((item) => {
      const fig = document.createElement('figure');
      fig.className = 'polaroid';
      const img = document.createElement('img');
      img.className = 'ph'; img.src = item.image; img.alt = item.caption; img.loading = 'lazy';
      img.onerror = () => { img.removeAttribute('src'); img.alt = 'Add your photo at ' + item.image; };
      const stk = document.createElement('span'); stk.className = 'stk'; stk.textContent = item.sticker; stk.setAttribute('aria-hidden', 'true');
      const hd = document.createElement('span'); hd.className = 'heart-deco'; hd.textContent = '💙'; hd.setAttribute('aria-hidden', 'true');
      const h = document.createElement('h3'); h.textContent = item.caption;
      const note = document.createElement('div');
      writeParagraphs(note, [item.note]);
      fig.append(img, stk, hd, h, note);
      grid.appendChild(fig);
    });
  }
  function revealAlbum() {
    if (albumShown) return;
    albumShown = true;
    buildAlbum();
    $('album').hidden = false;
    $('album').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }
  $('toFinale').addEventListener('click', () => { sfx.pop(); advance(6); });

  /* ===========================================================
     PAGE 6 - ROYAL BIRTHDAY FINALE
     =========================================================== */
  writeParagraphs($('birthdayBody'), CONFIG.birthdayLetter);
  $('giggleLine').textContent = CONFIG.giggleLine;
  $('signoff').textContent = CONFIG.signOff + ' ' + (CONFIG.myName ? '— ' + CONFIG.myName : '');
  $('finalText').textContent = CONFIG.finalSecret;

  function startConfetti() {
    stopConfetti();
    confetti(40);
    confettiTimer = setInterval(() => { confetti(4); if (Math.random() < 0.4) rain(2, ['💙', '✨']); }, 700);
  }
  function stopConfetti() { if (confettiTimer) { clearInterval(confettiTimer); confettiTimer = null; } }
  function finale() {
    sfx.success();
    confetti(110); rain(50, ['💙', '🩵', '🤍', '✨']); sparkles(24); burstCenter(50);
    setTimeout(() => burstCenter(40), 600);
    setTimeout(() => sparkles(18), 1100);
    restartAnim($('signoff'), 'finalPulse');
  }
  $('revealBtn').addEventListener('click', () => {
    $('finalSecret').hidden = false;
    $('revealBtn').hidden = true;
    $('finalSecret').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    finale();
  });
  $('replayBtn').addEventListener('click', finale);

  /* ===========================================================
     What happens when you ENTER each page
     =========================================================== */
  const onEnter = {
    1() {},
    2() { sparkles(6); },
    3() { if (letterOpened) showLetter(); },
    4() { renderQuestion(); if (quiz.finished) { $('quizArea').hidden = true; $('quizResult').hidden = false; } },
    5() {
      if (!puzzle.ready) { puzzle.ready = true; shuffle(); }
      if (puzzle.solved) revealAlbum();
    },
    6() { startConfetti(); setTimeout(() => sparkles(10), 600); }
  };

  /* ---------- start! ---------- */
  updateProgress();
})();
