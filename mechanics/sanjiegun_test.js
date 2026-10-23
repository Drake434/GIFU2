// ===================== SANJIEGUN TEST WIDGET (canvas, без библиотек) =====================

const sjStyle = document.createElement('style');
sjStyle.textContent = `
.sj-wrap { color: #00FF41; font-family: 'Courier New', monospace; font-size: 11px; line-height: 1.7; padding: 4px 2px; }
.sj-wrap * { box-sizing: border-box; }
.sj-canvas { display: block; width: 100%; height: auto; max-width: 100%; border: 1px solid rgba(0,255,65,0.15); background: rgba(0,255,65,0.03); cursor: grab; touch-action: none; }
.sj-canvas:active { cursor: grabbing; }
.sj-hint { color: rgba(0,255,65,0.4); font-size: 10px; margin-top: 4px; font-style: italic; }
`;
container.appendChild(sjStyle);

const sjWrap = document.createElement('div');
sjWrap.className = 'sj-wrap';

const sjTitle = document.createElement('div');
sjTitle.textContent = 'NT ARMORY DB // SANJIEGUN 3D';
sjWrap.appendChild(sjTitle);

const sjCanvas = document.createElement('canvas');
sjCanvas.className = 'sj-canvas';
sjCanvas.width = 380;
sjCanvas.height = 220;
sjWrap.appendChild(sjCanvas);

const sjHint = document.createElement('div');
sjHint.className = 'sj-hint';
sjHint.textContent = '// Тяните, чтобы повернуть модель.';
sjWrap.appendChild(sjHint);

container.appendChild(sjWrap);

// ===================== МОДЕЛЬ =====================
const ctx = sjCanvas.getContext('2d');
const W = sjCanvas.width, H = sjCanvas.height;
const SEC = 2.0, CHAIN = 0.5;

let yaw = 0.6, pitch = 0.25, t = 0, dragging = false, lastX = 0, lastY = 0;

sjCanvas.addEventListener('pointerdown', e => {
  dragging = true; lastX = e.clientX; lastY = e.clientY;
  sjCanvas.setPointerCapture(e.pointerId);
});
sjCanvas.addEventListener('pointermove', e => {
  if (!dragging) return;
  yaw += (e.clientX - lastX) * 0.01;
  pitch = Math.max(-1.2, Math.min(1.2, pitch + (e.clientY - lastY) * 0.01));
  lastX = e.clientX; lastY = e.clientY;
});
sjCanvas.addEventListener('pointerup', () => { dragging = false; });
sjCanvas.addEventListener('pointercancel', () => { dragging = false; });

// Точки модели: три секции, между ними цепь. Углы качаются, длины остаются прежними.
function buildPoints() {
  const pts = [];
  let x = -3.5, y = 0, z = 0;
  for (let s = 0; s < 3; s++) {
    const a = Math.sin(t * 1.3 + s * 1.2) * 0.55;
    const b = Math.cos(t * 0.9 + s * 0.8) * 0.4;
    const dx = Math.cos(a) * Math.cos(b), dy = Math.sin(a), dz = Math.sin(b) * Math.cos(a);
    const start = [x, y, z];
    x += dx * SEC; y += dy * SEC; z += dz * SEC;
    pts.push({ a: start, b: [x, y, z] });
    if (s < 2) { x += dx * CHAIN; y += dy * CHAIN; z += dz * CHAIN; }
  }
  return pts;
}

function project(p) {
  const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
  let x = p[0] * cy + p[2] * sy;
  let z = -p[0] * sy + p[2] * cy;
  let y = p[1] * cp - z * sp;
  z = p[1] * sp + z * cp;
  const k = 11 / (11 + z);
  return { x: W / 2 + x * 34 * k, y: H / 2 - y * 34 * k, k: k };
}

function lerp3(a, b, f) {
  return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
}

function frame() {
  if (!sjCanvas.isConnected) return; // виджет удалён со страницы: останавливаем цикл
  t += 0.016;
  if (!dragging) yaw += 0.006;

  ctx.clearRect(0, 0, W, H);
  const secs = buildPoints();

  // Цепи
  ctx.strokeStyle = 'rgba(98,241,245,0.9)';
  for (let i = 0; i < 2; i++) {
    const p1 = project(secs[i].b), p2 = project(secs[i + 1].a);
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
    [0.33, 0.66].forEach(f => {
      const q = project(lerp3(secs[i].b, secs[i + 1].a, f));
      ctx.beginPath(); ctx.arc(q.x, q.y, 3 * q.k, 0, Math.PI * 2); ctx.stroke();
    });
  }

  // Секции: зелёный контур и тёмная середина
  secs.forEach(s => {
    const p1 = project(s.a), p2 = project(s.b);
    const w = 10 * (p1.k + p2.k) / 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#00FF41';
    ctx.lineWidth = w;
    ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
    ctx.strokeStyle = '#0d0d0d';
    ctx.lineWidth = w - 4;
    ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
  });

  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
