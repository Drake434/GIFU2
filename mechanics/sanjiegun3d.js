// ===================== SANJIEGUN 3D — виджет для NT (canvas, без библиотек) =====================
(function () {

const style = document.createElement('style');
style.textContent = `
.sj-wrap { color: #00FF41; font-family: 'Courier New', monospace; font-size: 11px; line-height: 1.7; padding: 4px 2px; position: relative; }
.sj-wrap * { box-sizing: border-box; }
.sj-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
.sj-sep { border: none; border-top: 1px solid rgba(0,255,65,0.12); margin: 7px 0; }
.sj-btnrow { display: flex; flex-wrap: wrap; }
.sj-btn { background: transparent; border: 1px solid rgba(0,255,65,0.3); color: #00FF41; font-family: 'Courier New', monospace; font-size: 9px; letter-spacing: 2px; padding: 3px 10px; cursor: pointer; border-radius: 2px; transition: background 0.15s, border-color 0.15s; margin-right: 5px; margin-bottom: 5px; }
.sj-btn:hover { background: rgba(0,255,65,0.08); border-color: rgba(0,255,65,0.5); }
.sj-btn.active { background: rgba(0,255,65,0.12); border-color: #00FF41; color: #62F1F5; }
.sj-btn.alt { border-color: rgba(98,241,245,0.4); color: #62F1F5; }
.sj-canvas { display: block; width: 100%; height: auto; border: 1px solid rgba(0,255,65,0.15); cursor: grab; touch-action: none; background: rgba(0,255,65,0.03); }
.sj-canvas:active { cursor: grabbing; }
.sj-title { font-size: 9px; letter-spacing: 2px; color: rgba(0,255,65,0.55); margin-top: 6px; }
.sj-comment { color: rgba(0,255,65,0.4); font-size: 10px; margin: 2px 0; font-style: italic; }
.sj-pop { display: none; position: fixed; z-index: 9100; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #0d0d0d; border: 1px solid #62F1F5; border-radius: 6px; box-shadow: 0 0 30px rgba(98,241,245,0.3); padding: 10px; overflow: hidden; flex-direction: column; gap: 6px; max-width: 98vw; max-height: 98vh; }
.sj-pop.show { display: flex; }
.sj-pop-scan { position: absolute; left: 0; width: 100%; height: 60px; pointer-events: none; z-index: 6; background: linear-gradient(to bottom, transparent 0%, rgba(98,241,245,0.05) 40%, rgba(98,241,245,0.09) 50%, rgba(98,241,245,0.05) 60%, transparent 100%); animation: sj-scan 4s linear infinite; }
.sj-pop-crt { position: absolute; inset: 0; pointer-events: none; z-index: 5; background: repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 4px); }
.sj-pop-bar { display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 7; color: #62F1F5; font-size: 12px; letter-spacing: 2px; }
.sj-pop-body { position: relative; z-index: 7; }
.sj-close { background: transparent; border: 1px solid #62F1F5; border-radius: 3px; color: #62F1F5; font-family: 'Courier New', monospace; font-size: 12px; padding: 2px 7px; cursor: pointer; opacity: 0.7; }
.sj-close:hover { opacity: 1; background: rgba(98,241,245,0.12); }
@keyframes sj-scan { 0% { top: -80px; } 100% { top: calc(100% + 80px); } }
`;
container.appendChild(style);

const h = (tag, cls, text) => {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text !== undefined) el.textContent = text;
  return el;
};

// ===================== РЕЖИМЫ ХВАТА (те же, что в staff12) =====================
const GRIPS = {
  center:  { label: 'ЦЕНТР',     title: 'ХВАТ ЗА ЦЕНТРАЛЬНУЮ СЕКЦИЮ',           comment: 'Держите за среднюю секцию, работая двумя концами как парными дубинами.', held: [1] },
  end:     { label: 'КРАЙНЯЯ',   title: 'ХВАТ ЗА КРАЙНЮЮ СЕКЦИЮ',               comment: 'Раскручиваете посох за один конец, нанося размашистые удары.',          held: [0] },
  midend:  { label: 'СРЕД+КРАЙ', title: 'ХВАТ ЗА СРЕДНЮЮ И КРАЙНЮЮ СЕКЦИИ',      comment: 'Одна рука на средней секции, вторая — на крайней.',                     held: [1, 2] },
  twoends: { label: '2 КРАЯ',    title: 'ХВАТ ЗА ДВЕ КРАЙНИЕ СЕКЦИИ',            comment: 'Держите обе крайние секции — средняя свободна для блоков.',             held: [0, 2] },
  electric:{ label: 'ЭЛЕКТРО',   title: 'ЭЛЕКТРИЧЕСКИЙ РЕЖИМ',                   comment: 'Заряженный посох: разряды бегут по секциям и цепям.',                    held: [0] },
};
const GRIP_IDS = Object.keys(GRIPS);
// Участок обмотки на секции (доли длины от A к B)
const WRAP = { 0: [0.14, 0.5], 1: [0.3, 0.7], 2: [0.5, 0.86] };

// ===================== ВЕКТОРЫ =====================
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const mul = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = a => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const lerp3 = (a, b, f) => add(a, mul(sub(b, a), f));

// ===================== ФИЗИКА (верле: 6 точек — концы трёх секций) =====================
const D = 2.0, C = 0.5;
const CONS = [[0, 1, D], [1, 2, C], [2, 3, D], [3, 4, C], [4, 5, D]];
let P = [], O = [], fixed = [], grip = 'end', tt = 0;

function pins(t) {
  if (grip === 'end' || grip === 'electric') {
    const el = grip === 'electric', w = el ? 4 : 5.2;
    const hx = el ? Math.sin(w * t) * 0.9 : Math.cos(w * t) * 0.55;
    const hy = el ? 1 + Math.sin(2 * w * t) * 0.5 : 1 + Math.sin(w * t) * 0.55;
    const hz = el ? Math.cos(w * t) * 0.5 : Math.sin(w * t * 0.5) * 0.5;
    const a = w * t + 1.1, d = norm([Math.cos(a), Math.sin(a), 0.25]);
    return [{ i: 0, p: [hx, hy, hz] }, { i: 1, p: [hx + d[0] * D, hy + d[1] * D, hz + d[2] * D], soft: 0.25 }];
  }
  if (grip === 'center') {
    const c = [0, 1 + 0.25 * Math.sin(1.5 * t), 0], phi = 1.15 * Math.sin(2.4 * t);
    const d = norm([Math.cos(phi), Math.sin(phi), 0.4 * Math.sin(1.3 * t)]);
    return [{ i: 2, p: sub(c, mul(d, D / 2)) }, { i: 3, p: add(c, mul(d, D / 2)) }];
  }
  if (grip === 'midend') {
    const c = [-0.6, 1 + 0.2 * Math.sin(1.7 * t), 0], phi = 1.2 * Math.sin(2 * t) + 0.3;
    const d = norm([Math.cos(phi), Math.sin(phi), 0.3 * Math.sin(1.1 * t)]);
    const p3 = add(c, mul(d, D)), p4 = add(p3, mul(d, C)), p5 = add(p4, mul(d, D));
    return [{ i: 2, p: c }, { i: 3, p: p3 }, { i: 4, p: p4 }, { i: 5, p: p5 }];
  }
  // twoends
  const yh = 0.15 * Math.sin(2.2 * t), ang = 0.35 + 0.1 * Math.sin(1.5 * t);
  const L = [-3.3, 0.2 + yh, 0], R = [3.3, 0.2 - yh, 0];
  return [
    { i: 0, p: L }, { i: 1, p: add(L, [Math.cos(ang) * D, Math.sin(ang) * D, 0]) },
    { i: 4, p: add(R, [-Math.cos(ang) * D, Math.sin(ang) * D, 0]) }, { i: 5, p: R },
  ];
}

function step(dt) {
  tt += dt;
  for (let i = 0; i < 6; i++) {
    const v = mul(sub(P[i], O[i]), 0.994);
    O[i] = P[i].slice();
    P[i] = add(P[i], v);
    P[i][1] -= 9.8 * dt * dt;
  }
  fixed = [false, false, false, false, false, false];
  pins(tt).forEach(q => {
    if (q.soft) P[q.i] = lerp3(P[q.i], q.p, q.soft);
    else { P[q.i] = q.p.slice(); O[q.i] = q.p.slice(); fixed[q.i] = true; }
  });
  for (let it = 0; it < 8; it++) {
    for (let j = 0; j < CONS.length; j++) {
      const a = CONS[j][0], b = CONS[j][1], L = CONS[j][2];
      const wa = fixed[a] ? 0 : 1, wb = fixed[b] ? 0 : 1;
      if (!wa && !wb) continue;
      const d = sub(P[b], P[a]), len = Math.hypot(d[0], d[1], d[2]) || 1e-6, diff = (len - L) / len, s = wa + wb;
      P[a] = add(P[a], mul(d, diff * wa / s));
      P[b] = sub(P[b], mul(d, diff * wb / s));
    }
  }
}

function resetPose() {
  P = []; O = [];
  for (let i = 0; i < 6; i++) {
    const x = Math.floor(i / 2) * (D + C) + (i % 2) * D - 3.5;
    P.push([x, 1, 0]); O.push([x, 1, 0]);
  }
  tt = 0;
  for (let k = 0; k < 160; k++) step(1 / 240);
}

// ===================== КАМЕРА И СТИЛЬ =====================
let yaw = 0.5, pitch = 0.2, zoom = 1, skin = 'nt';
let cen = [0, 0, 0], ext = 5, drag = false, lx = 0, ly = 0;
const CAM = 14;
let CY, SY, CP, SP, W, H, UNIT, S;

function updateCam(snap) {
  let c = [0, 0, 0];
  P.forEach(p => { c = add(c, p); });
  c = mul(c, 1 / 6);
  let e = 0;
  P.forEach(p => { e = Math.max(e, Math.hypot(p[0] - c[0], p[1] - c[1], p[2] - c[2])); });
  e += 0.4;
  if (snap) { cen = c; ext = e; } else { cen = lerp3(cen, c, 0.08); ext += (e - ext) * 0.05; }
}
function rot(v) {
  const x1 = v[0] * CY + v[2] * SY, z1 = -v[0] * SY + v[2] * CY;
  return [x1, v[1] * CP - z1 * SP, v[1] * SP + z1 * CP];
}
function toView(p) { const r = rot(sub(p, cen)); r[2] += CAM; return r; }
function sc(v) { const k = CAM / v[2]; return [W / 2 + v[0] * UNIT * k, H / 2 - v[1] * UNIT * k, k]; }

// ===================== МАТЕРИАЛЫ И ОСВЕЩЕНИЕ =====================
const LIGHT = norm([-0.45, 0.7, -0.55]);
const HALF = norm([LIGHT[0], LIGHT[1], LIGHT[2] - 1]);
const MAT = {
  wood:    { c: [92, 44, 24],   sh: 12, sp: 0.12, nt: [0, 255, 65] },
  brass:   { c: [205, 160, 80], sh: 30, sp: 0.7,  nt: [98, 241, 245] },
  steel:   { c: [175, 182, 190], sh: 40, sp: 0.8, nt: [98, 241, 245] },
  leather: { c: [30, 24, 22],   sh: 8,  sp: 0.08, nt: [98, 241, 245] },
};

function paint(mat, nv) {
  const m = MAT[mat];
  const lam = Math.max(0, dot(nv, LIGHT));
  if (skin === 'classic') {
    const sp = Math.pow(Math.max(0, dot(nv, HALF)), m.sh) * m.sp;
    const k = 0.28 + 0.72 * lam;
    const col = m.c.map(v => Math.min(255, Math.round(v * k + 255 * sp)));
    const s = 'rgb(' + col.join(',') + ')';
    return { fill: s, stroke: s, lw: 0.8 };
  }
  const c = m.nt, f = mat === 'leather' ? 0.2 + 0.1 * lam : 0.05 + 0.13 * lam;
  const fill = 'rgb(' + c.map(v => Math.round(8 + v * f)).join(',') + ')';
  return { fill: fill, stroke: 'rgba(' + c.join(',') + ',' + (mat === 'wood' ? 0.5 : 0.8) + ')', lw: 1 };
}

// ===================== ГЕОМЕТРИЯ =====================
let prims = [];
const N = 12;

function addCyl(A, B, r, mat, caps) {
  const a = norm(sub(B, A));
  const helper = Math.abs(a[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
  const u = norm(cross(a, helper)), v = cross(a, u);
  const nn = [], VA = [], VB = [];
  for (let i = 0; i < N; i++) {
    const th = i / N * Math.PI * 2, n = add(mul(u, Math.cos(th)), mul(v, Math.sin(th)));
    nn.push(n);
    VA.push(toView(add(A, mul(n, r))));
    VB.push(toView(add(B, mul(n, r))));
  }
  for (let i = 0; i < N; i++) {
    const j = (i + 1) % N;
    const nv = rot(norm(add(nn[i], nn[j])));
    const vc = mul(add(add(VA[i], VB[j]), add(VA[j], VB[i])), 0.25);
    if (dot(nv, vc) >= 0) continue;
    const pt = paint(mat, nv);
    pt.pts = [sc(VA[i]), sc(VA[j]), sc(VB[j]), sc(VB[i])];
    pt.z = vc[2];
    prims.push(pt);
  }
  if (caps) {
    [[A, VA, -1], [B, VB, 1]].forEach(e => {
      const nv = rot(mul(a, e[2])), vc = toView(e[0]);
      if (dot(nv, vc) >= 0) return;
      const pt = paint(mat, nv);
      pt.pts = e[1].map(sc);
      pt.z = vc[2];
      prims.push(pt);
    });
  }
}

function addLink(center, a, u, mat) {
  const pts = [];
  for (let i = 0; i < 20; i++) {
    const th = i / 20 * Math.PI * 2;
    pts.push(sc(toView(add(center, add(mul(a, 0.17 * Math.cos(th)), mul(u, 0.085 * Math.sin(th)))))));
  }
  const m = MAT[mat];
  const col = skin === 'classic' ? 'rgb(' + m.c.join(',') + ')' : 'rgb(' + m.nt.join(',') + ')';
  prims.push({ pts: pts, fill: null, stroke: col, lw: 2.4, z: toView(center)[2], ring: true });
}

function buildScene() {
  prims = [];
  const g = GRIPS[grip];
  for (let s = 0; s < 3; s++) {
    const A = P[2 * s], B = P[2 * s + 1], a = norm(sub(B, A)), cap = 0.34;
    addCyl(A, add(A, mul(a, cap)), 0.15, 'brass', true);
    addCyl(sub(B, mul(a, cap)), B, 0.15, 'brass', true);
    addCyl(add(A, mul(a, cap)), sub(B, mul(a, cap)), 0.11, 'wood', false);
    addCyl(add(A, mul(a, 0.5)), add(A, mul(a, 0.56)), 0.125, 'brass', false);
    addCyl(sub(B, mul(a, 0.56)), sub(B, mul(a, 0.5)), 0.125, 'brass', false);
    if (g.held.indexOf(s) >= 0) {
      const w = WRAP[s], len = D;
      addCyl(add(A, mul(a, w[0] * len)), add(A, mul(a, w[1] * len)), 0.138, 'leather', true);
    }
  }
  for (let c = 0; c < 2; c++) {
    const E = P[2 * c + 1], F = P[2 * c + 2], a = norm(sub(F, E));
    const helper = Math.abs(a[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
    const u = norm(cross(a, helper)), v = cross(a, u);
    addLink(lerp3(E, F, 0.28), a, u, 'steel');
    addLink(lerp3(E, F, 0.72), a, v, 'steel');
  }
  prims.sort((p, q) => q.z - p.z);
}

// Молнии режима «электро»: создаются раз в кадр, рисуются на всех холстах
let arcs = [];
function genArcs() {
  arcs = [];
  if (grip !== 'electric') return;
  const r = () => Math.random() - 0.5;
  const n = 3 + Math.floor(Math.random() * 3);
  for (let k = 0; k < n; k++) {
    if (Math.random() < 0.4) continue;
    const s = Math.floor(Math.random() * 3), A = P[2 * s], B = P[2 * s + 1];
    const f1 = Math.random(), f2 = Math.min(1, f1 + 0.2 + Math.random() * 0.4);
    const p1 = lerp3(A, B, f1), p2 = add(lerp3(A, B, f2), [r() * 1.2, r() * 1.2, r() * 1.2]);
    const pts = [];
    for (let j = 0; j <= 7; j++) {
      let q = lerp3(p1, p2, j / 7);
      if (j > 0 && j < 7) q = add(q, [r() * 0.35, r() * 0.35, r() * 0.35]);
      pts.push(q);
    }
    arcs.push(pts);
  }
}

function draw(cv) {
  const ctx = cv.getContext('2d');
  W = cv.width; H = cv.height; S = H / 230;
  UNIT = 0.44 * H / Math.max(ext, 3.4) * zoom;
  CY = Math.cos(yaw); SY = Math.sin(yaw); CP = Math.cos(pitch); SP = Math.sin(pitch);
  ctx.clearRect(0, 0, W, H);
  if (skin === 'classic') {
    const bg = ctx.createRadialGradient(W / 2, H / 2, 10, W / 2, H / 2, Math.max(W, H) * 0.7);
    bg.addColorStop(0, '#3a2c20'); bg.addColorStop(1, '#14110f');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
  }
  buildScene();
  ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  prims.forEach(p => {
    ctx.beginPath();
    p.pts.forEach((q, i) => { if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); });
    ctx.closePath();
    if (p.fill) { ctx.fillStyle = p.fill; ctx.fill(); }
    ctx.strokeStyle = p.stroke; ctx.lineWidth = p.lw * S; ctx.stroke();
  });
  if (arcs.length) {
    arcs.forEach(arc => {
      const pts = arc.map(q => sc(toView(q)));
      const path = () => { ctx.beginPath(); pts.forEach((q, i) => { if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); }); };
      ctx.shadowColor = '#62F1F5'; ctx.shadowBlur = 10 * S;
      ctx.strokeStyle = '#62F1F5'; ctx.lineWidth = 2.2 * S; path(); ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 0.9 * S; path(); ctx.stroke();
    });
  }
}

// ===================== ИНТЕРФЕЙС =====================
const gripBtns = [], styleBtns = [], titles = [], comments = [];
let popOpen = false;

function setGrip(id) {
  grip = id;
  resetPose();
  updateCam(true);
  refreshUI();
}
function refreshUI() {
  gripBtns.forEach(b => b.el.classList.toggle('active', b.id === grip));
  styleBtns.forEach(b => { b.textContent = 'СТИЛЬ: ' + (skin === 'nt' ? 'NT' : 'КЛАССИКА'); });
  titles.forEach(t => { t.textContent = '// ' + GRIPS[grip].title + ' //'; });
  comments.forEach(c => { c.textContent = '// ' + GRIPS[grip].comment; });
}
function makeControls(withZoom) {
  const row = h('div', 'sj-btnrow');
  GRIP_IDS.forEach(id => {
    const b = h('button', 'sj-btn', GRIPS[id].label);
    b.addEventListener('click', () => setGrip(id));
    gripBtns.push({ el: b, id: id });
    row.appendChild(b);
  });
  const sb = h('button', 'sj-btn alt', '');
  sb.addEventListener('click', () => { skin = skin === 'nt' ? 'classic' : 'nt'; refreshUI(); });
  styleBtns.push(sb);
  row.appendChild(sb);
  if (withZoom) {
    const zb = h('button', 'sj-btn alt', '⛶ УВЕЛИЧИТЬ');
    zb.addEventListener('click', openPop);
    row.appendChild(zb);
  }
  return row;
}
function bindDrag(cv, wheel) {
  cv.addEventListener('pointerdown', e => { drag = true; lx = e.clientX; ly = e.clientY; cv.setPointerCapture(e.pointerId); });
  cv.addEventListener('pointermove', e => {
    if (!drag) return;
    yaw -= (e.clientX - lx) * 0.01;
    pitch = Math.max(-1.3, Math.min(1.3, pitch + (e.clientY - ly) * 0.01));
    lx = e.clientX; ly = e.clientY;
  });
  const end = () => { drag = false; };
  cv.addEventListener('pointerup', end);
  cv.addEventListener('pointercancel', end);
  if (wheel) cv.addEventListener('wheel', e => {
    e.preventDefault();
    zoom = Math.max(0.5, Math.min(3, zoom * (1 - e.deltaY * 0.001)));
  }, { passive: false });
}

// Основной блок
const wrap = h('div', 'sj-wrap');
const head = h('div', 'sj-head');
head.append(h('span', '', 'NT ARMORY DB // SANJIEGUN 3D'));
wrap.appendChild(head);
wrap.appendChild(makeControls(true));

const cv = h('canvas', 'sj-canvas');
cv.width = 760; cv.height = 460;
bindDrag(cv, false);
wrap.appendChild(cv);

const t1 = h('div', 'sj-title'); titles.push(t1); wrap.appendChild(t1);
const c1 = h('div', 'sj-comment'); comments.push(c1); wrap.appendChild(c1);
wrap.appendChild(h('hr', 'sj-sep'));
wrap.appendChild(h('div', 'sj-comment', '// Тяните, чтобы повернуть модель. Хват меняет позу и подсвечивает руки.'));
container.appendChild(wrap);

// Окно увеличения
const pop = h('div', 'sj-pop');
pop.appendChild(h('div', 'sj-pop-scan'));
pop.appendChild(h('div', 'sj-pop-crt'));
const bar = h('div', 'sj-pop-bar');
bar.appendChild(h('span', '', 'SANJIEGUN 3D — УВЕЛИЧЕНИЕ'));
const closeBtn = h('button', 'sj-close', '[ЗАКРЫТЬ]');
bar.appendChild(closeBtn);
pop.appendChild(bar);
const popBody = h('div', 'sj-pop-body');
popBody.appendChild(makeControls(false));
const pcv = h('canvas', 'sj-canvas');
bindDrag(pcv, true);
popBody.appendChild(pcv);
const t2 = h('div', 'sj-title'); titles.push(t2); popBody.appendChild(t2);
const c2 = h('div', 'sj-comment'); comments.push(c2); popBody.appendChild(c2);
popBody.appendChild(h('div', 'sj-comment', '// Колесо мыши — масштаб.'));
pop.appendChild(popBody);
document.body.appendChild(pop);

function sizePop() {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const w = Math.min(window.innerWidth * 0.9, 920);
  const hh = Math.min(window.innerHeight * 0.55, w * 0.62);
  pcv.style.width = w + 'px'; pcv.style.height = hh + 'px';
  pcv.width = Math.round(w * dpr); pcv.height = Math.round(hh * dpr);
}
function openPop() { popOpen = true; pop.classList.add('show'); sizePop(); }
function closePop() { popOpen = false; pop.classList.remove('show'); }
closeBtn.addEventListener('click', closePop);
const onKey = e => { if (e.key === 'Escape' && popOpen) closePop(); };
const onResize = () => { if (popOpen) sizePop(); };
document.addEventListener('keydown', onKey);
window.addEventListener('resize', onResize);

// ===================== ЗАПУСК =====================
refreshUI();
resetPose();
updateCam(true);

let last = performance.now();
function frame(now) {
  if (!cv.isConnected) {
    pop.remove();
    document.removeEventListener('keydown', onKey);
    window.removeEventListener('resize', onResize);
    return;
  }
  const dt = Math.min(0.033, (now - last) / 1000);
  last = now;
  for (let i = 0; i < 4; i++) step(dt / 4);
  if (!drag) yaw += 0.004;
  updateCam(false);
  genArcs();
  draw(cv);
  if (popOpen) draw(pcv);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

})();
