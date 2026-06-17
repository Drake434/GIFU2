// ─── DEFAULT PAGE DATA ───────────────────────────────────────────────────────
const DEFAULT_PAGES = {
  1: [
    { type: 'text', color: '#00FF41', text: '|[ > ] Имя: __NAME__' },
    { type: 'text', color: '#62F1F5', text: '|[ > ] [Unknown Administrative System] : Дивайт' },
    { type: 'text', color: '#00FF41', text: '|[ > ] Возраст: 49 земных лет' },
    { type: 'text', color: '#62F1F5', text: '|[ > ] [Unknown Administrative System] : Ну тут он не врёт.' },
    { type: 'text', color: '#00FF41', text: '|[ > ] Рост: 190 см' },
    { type: 'text', color: '#62F1F5', text: '|[ > ] [Unknown Administrative System] : Он лжёт, я на 3 см больше.' },
    { type: 'text', color: '#00FF41', text: '|[ > ] Вес: 143 кг' },
    { type: 'text', color: '#62F1F5', text: '|[ > ] [Unknown Administrative System] : Со снаряжением 155 кг' },
    { type: 'text', color: '#00FF41', text: '|[ > ] Деньги на счёте NT: 2570 кредитов' },
    { type: 'text', color: '#62F1F5', text: '|[ > ] [Unknown Administrative System] : У меня в корпусе ещё купюра в 5 кредитов :^)' },
  ],
  2: [
    { type: 'text', color: '#00FF41', text: '|[ > ] ХАРАКТЕРИСТИКИ — DEVAIT LITE NR 13' },
    { type: 'divider' },
    { type: 'stat', name: 'Сила',          value: 20 },
    { type: 'stat', name: 'Ловкость',      value: 20 },
    { type: 'stat', name: 'Телосложение',  value: 20 },
    { type: 'stat', name: 'Интеллект',     value: 20 },
    { type: 'stat', name: 'Мудрость',      value: 20 },
    { type: 'stat', name: 'Харизма',       value: 20 },
  ],
  3: [
    { type: 'card', color: '#00FF41', name: 'Модульность', tags: ['Особенности конструкции'], lines: [
      { color: '#00FF41', text: 'Корпус Devait Lite nr 13 полностью модульный, что позволяет заменять поврежденные или необходимые детали.' },
      { color: '#00FF41', text: 'Каждая конечность содержит компоненты, позволяющие добавлять дополнительные данные путем загрузки информации в компоненты системы.' },
    ]},
    { type: 'text', color: '#62F1F5', text: '|[ - ]| [Unknown Administrative System] : И бла бла бла. Короче я железный дровосек.' },
    { type: 'card', color: '#00FF41', name: 'Голова', tags: ['Заводская', 'Хранилище: базовая робототехника', 'Биология и химия'], lines: [
      { color: '#00FF41', text: 'Заводская модификация: антенна для контроля дронов.' },
    ]},
    { type: 'card', color: '#00FF41', name: 'Визер', tags: ['Модифицирован', 'Хранилище: отсутствует'], lines: [
      { color: '#00FF41', text: 'Заводская модификация: картограф.' },
      { color: '#00FF41', text: 'Модификация: анализатор.' },
    ]},
    { type: 'card', color: '#00FF41', name: 'Корпус', tags: ['Заводской', 'Хранилище: чёрный ящик', 'Память: защищена'], lines: [
      { color: '#ff4444', text: 'Изменение содержимого невозможно.' },
    ]},
    { type: 'card', color: '#00FF41', name: 'Источник питания', tags: ['Заводской', 'Хранилище: отсутствует'], lines: [
      { color: '#00FF41', text: 'Дополнительные функции не указаны.' },
    ]},
    { type: 'card', color: '#00FF41', name: 'Л. рука', tags: ['Заводская', 'Хранилище: пусто'], lines: [
      { color: '#00FF41', text: 'Модификация: дополнительная функция отсутствует.' },
    ]},
    { type: 'card', color: '#00FF41', name: 'Л. кисть', tags: ['Заводская', 'Хранилище: пусто'], lines: [
      { color: '#00FF41', text: 'Модификация: дополнительная функция отсутствует.' },
    ]},
    { type: 'card', color: '#00FF41', name: 'П. рука', tags: ['Заводская', 'Хранилище: пусто'], lines: [
      { color: '#00FF41', text: 'Модификация: дополнительная функция отсутствует.' },
    ]},
    { type: 'card', color: '#00FF41', name: 'П. кисть', tags: ['Заводская', 'Хранилище: пусто'], lines: [
      { color: '#00FF41', text: 'Модификация: дополнительная функция отсутствует.' },
    ]},
    { type: 'card', color: '#62F1F5', name: 'Л. нога', tags: ['Модифицирован', 'Хранилище: пусто'], lines: [
      { color: '#62F1F5', text: 'Модификация: энергетический пистолет.' },
    ]},
    { type: 'card', color: '#62F1F5', name: 'П. нога', tags: ['Модифицирован', 'Хранилище: пусто'], lines: [
      { color: '#62F1F5', text: 'Модификация: энергетический пистолет.' },
    ]},
    { type: 'card', color: '#ffd700', name: 'Антенна', tags: ['Функция модуля'], lines: [
      { color: '#ffd700', text: 'Позволяет контролировать дронов при наличии кодов доступа дрона.' },
    ]},
    { type: 'card', color: '#ffd700', name: 'Картограф', tags: ['Функция модуля'], lines: [
      { color: '#ffd700', text: 'Автоматически создает записи маршрута, которые удаляются через 6 часов.' },
    ]},
    { type: 'card', color: '#ffd700', name: 'Анализатор', tags: ['Функция модуля'], lines: [
      { color: '#ffd700', text: 'Позволяет сканировать растения и существ для получения базовой информации о них.' },
    ]},
    { type: 'card', color: '#ffd700', name: 'Энергетический пистолет', tags: ['Функция модуля'], lines: [
      { color: '#ffd700', text: 'Встроенные в ноги энергетические пистолеты.' },
    ]},
  ],
  4: [
    { type: 'text', color: '#00FF41', text: '|[ > ] Данные снаряжения отсутствуют.' },
  ],
  5: [
    { type: 'text', color: '#ff4444', text: '|[ > ] Данные чёрного ящика засекречены.' },
  ],
};

// ─── STATE ───────────────────────────────────────────────────────────────────
let fbApi = null;
let pageData = {}; // { [pageNum]: blocks[] } — loaded from Firebase or defaults
let pageLinks = {}; // { [pageNum]: [{word, url}] }
let currentEditorPage = 1;
let editingBlockIdx = null; // which block is being edited
let zTop = 100;
let started = false;

function d(ms) { return new Promise(r => setTimeout(r, ms)); }

// ─── FIREBASE ────────────────────────────────────────────────────────────────
window.addEventListener('nt-anketa-firebase-ready', () => {
  fbApi = window.NT_ANKETA_FIREBASE.api;
  subscribePages();
});
if (window.NT_ANKETA_FIREBASE) {
  fbApi = window.NT_ANKETA_FIREBASE.api;
  subscribePages();
}

function subscribePages() {
  if (subscribePages.done) return;
  subscribePages.done = true;
  for (let n = 1; n <= 5; n++) {
    const num = n;
    fbApi.onValue(fbApi.ref(fbApi.db, 'anketa2/pages/' + num), snap => {
      const val = snap.val();
      pageData[num] = (val && Array.isArray(val.blocks)) ? val.blocks : DEFAULT_PAGES[num];
      pageLinks[num] = (val && Array.isArray(val.links)) ? val.links : [];
      if (_savingPages.has(num)) return; // наш собственный сейв — не перерендериваем
      const pw = document.getElementById('pw' + num);
      if (pw && pw.style.display === 'flex') renderPage(num);
      if (currentEditorPage === num) { renderBlockList(); renderLinksList(); }
    });
  }
  const subscribedExtraPages = new Set();
  fbApi.onValue(fbApi.ref(fbApi.db, 'anketa2/extra_pages'), snap => {
    const val = snap.val() || {};
    Object.keys(val).forEach(k => {
      const num = Number(k);
      if (subscribedExtraPages.has(num)) return;
      subscribedExtraPages.add(num);
      fbApi.onValue(fbApi.ref(fbApi.db, 'anketa2/pages/' + num), snap2 => {
        const v2 = snap2.val();
        pageData[num] = (v2 && Array.isArray(v2.blocks)) ? v2.blocks : (val[k].blocks || []);
        pageLinks[num] = (v2 && Array.isArray(v2.links)) ? v2.links : [];
        if (_savingPages.has(num)) return;
        const pw = document.getElementById('pw' + num);
        if (pw && pw.style.display === 'flex') renderPage(num);
        if (currentEditorPage === num) { renderBlockList(); renderLinksList(); }
      });
    });
  });
}

let _savingPages = new Set(); // страницы, которые мы сами сейчас сохраняем

function savePage(num, skipRender) {
  if (!fbApi) { consoleLog('ERR: Firebase не готов.'); return Promise.reject(); }
  const blocks = pageData[num] || DEFAULT_PAGES[num] || [];
  const links = pageLinks[num] || [];
  _savingPages.add(num);
  if (num > 5 && extraPages[num]) {
    fbApi.set(fbApi.ref(fbApi.db, 'anketa2/extra_pages/' + num), { ...extraPages[num], blocks }).catch(()=>{});
  }
  return fbApi.set(fbApi.ref(fbApi.db, 'anketa2/pages/' + num), { blocks, links, updatedAt: Date.now() })
    .then(() => {
      if (!skipRender) {
        const pw = document.getElementById('pw' + num);
        if (pw && pw.style.display === 'flex') renderPage(num);
      }
    })
    .finally(() => { setTimeout(() => _savingPages.delete(num), 300); });
}

function getPageBlocks(num) {
  if (pageData[num]) return pageData[num];
  if (DEFAULT_PAGES[num]) return DEFAULT_PAGES[num];
  if (extraPages[num]) return extraPages[num].blocks || [];
  return [];
}

// ─── DRAG / RESIZE WINDOWS ───────────────────────────────────────────────────
function initDrag(win) {
  win.addEventListener('mousedown', () => { zTop++; win.style.zIndex = zTop; });
  const tb = win.querySelector('.win-titlebar');
  const rz = win.querySelector('.win-resize');
  let drag=false, rx=0, ry=0, resize=false, sx,sy,sw,sh;
  tb.addEventListener('mousedown', e => {
    if (e.target.classList.contains('win-close')) return;
    drag=true; rx=e.clientX-win.offsetLeft; ry=e.clientY-win.offsetTop; e.preventDefault();
  });
  if (rz) rz.addEventListener('mousedown', e => {
    resize=true; sx=e.clientX; sy=e.clientY; sw=win.offsetWidth; sh=win.offsetHeight;
    e.preventDefault(); e.stopPropagation();
  });
  document.addEventListener('mousemove', e => {
    if (drag) {
      win.style.left = Math.max(0, Math.min(window.innerWidth-win.offsetWidth, e.clientX-rx)) + 'px';
      win.style.top  = Math.max(0, Math.min(window.innerHeight-win.offsetHeight, e.clientY-ry)) + 'px';
      win.style.transform = 'none';
    }
    if (resize) {
      win.style.width  = Math.max(280, sw+(e.clientX-sx)) + 'px';
      win.style.height = Math.max(180, sh+(e.clientY-sy)) + 'px';
    }
  });
  document.addEventListener('mouseup', () => { drag=false; resize=false; });
}
document.querySelectorAll('.window').forEach(initDrag);

document.addEventListener('click', e => {
  if (e.target.classList.contains('win-close')) {
    const win = e.target.closest('.window');
    if (win) win.style.display = 'none';
  }
});

// ─── RENDER PAGE ─────────────────────────────────────────────────────────────
function escHtml(s) { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function getDividerColor(num) { return num === 5 ? '#ff4444' : '#00FF41'; }

function addDivider(container, num) {
  const color = getDividerColor(num);
  const div = document.createElement('div');
  div.className = 'pmsg sep nt-divider-line';
  div.style.color = color;
  div.dataset.pageNum = num;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  updateDividerText(div);
  setTimeout(() => div.classList.add('show'), 30);
}

function measureCharWidth(el) {
  const ref = el.closest('.page-messages') || el;
  const fs = getComputedStyle(ref).fontSize || '13px';
  const probe = document.createElement('span');
  probe.style.cssText = 'position:absolute;visibility:hidden;white-space:pre;font-family:"Courier New",monospace;font-size:' + fs + ';letter-spacing:0';
  probe.textContent = '═'.repeat(40);
  document.body.appendChild(probe);
  const w = probe.getBoundingClientRect().width / 40;
  probe.remove();
  return w || 8;
}

function updateDividerText(div) {
  const pm = div.closest('.page-messages');
  if (!pm) return;
  const w = pm.clientWidth;
  if (!w) return;
  const charW = measureCharWidth(div);
  const prefix = '|[ > ] ';
  const suffix = ' [ < ]|';
  const fixed = (prefix.length + suffix.length) * charW;
  const available = Math.max(2, Math.floor((w - fixed) / charW));
  div.textContent = prefix + '\u2550'.repeat(available) + suffix;
}

function refreshDividers(num) {
  const pm = document.getElementById('pm' + num);
  if (!pm) return;
  pm.querySelectorAll('.nt-divider-line').forEach(d => updateDividerText(d));
}

async function renderPage(num) {
  const pm = document.getElementById('pm' + num);
  if (!pm) return;

  // Создаем или увеличиваем идентификатор рендеринга для данной страницы
  const renderId = (pm._renderId || 0) + 1;
  pm._renderId = renderId;

  pm.innerHTML = '';
  const blocks = getPageBlocks(num);

  await d(80);
  if (pm._renderId !== renderId) return; // Отмена рендеринга, если запущен более новый
  addDivider(pm, num);
  
  await d(120);
  if (pm._renderId !== renderId) return;

  for (const block of blocks) {
    await d(90);
    if (pm._renderId !== renderId) return;

    if (block.type === 'card') {
      renderCard(pm, block);
    } else if (block.type === 'divider') {
      addDivider(pm, num);
    } else if (block.type === 'stat') {
      renderStat(pm, block, num);
    } else if (block.type === 'widget') {
      renderWidget(pm, block);
    } else {
      let text = block.text || '';
      if (text.includes('__NAME__')) {
        const div = document.createElement('div');
        div.className = 'pmsg content';
        div.style.color = block.color || '#00FF41';
        div.textContent = text.replace('__NAME__', 'Devait Lite nr 13');
        pm.appendChild(div);
        pm.scrollTop = pm.scrollHeight;
        setTimeout(() => div.classList.add('show'), 30);
        continue;
      }
      addMsg(pm, text, block.color || '#00FF41');
    }
  }

  await d(120);
  if (pm._renderId !== renderId) return;
  addDivider(pm, num);

  const pw = document.getElementById('pw' + num);
  if (pw && !pw._resizeObserver) {
    pw._resizeObserver = new ResizeObserver(() => refreshDividers(num));
    pw._resizeObserver.observe(pw);
  }

  applyLinksToPage(pm, num);
}

function applyLinksToPage(pm, num) {
  const links = pageLinks[num] || [];
  if (!links.length) return;
  pm.querySelectorAll('.pmsg.content, .nt-card-line').forEach(el => {
    let html = el.textContent;
    links.forEach(({ word, url }) => {
      if (!word || !url) return;
      const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      html = html.replace(new RegExp('(?<![\\p{L}\\p{N}_])(' + escaped + ')(?![\\p{L}\\p{N}_])', 'gu'),
        `<span class="img-trigger" data-img-url="${url}"><span class="img-trigger-label">img</span><span class="img-trigger-text">$1</span></span>`);
    });
    el.innerHTML = html;
  });
  pm.querySelectorAll('[data-img-url]').forEach(el => {
    el.addEventListener('click', e => {
      const url = el.dataset.imgUrl;
      const label = el.querySelector('.img-trigger-text');
      showPopupUrl(e, url, label ? label.textContent : el.textContent);
    });
  });
}

function calcMod(val) {
  const v = Number(val) || 0;
  if (v <= 1)  return -5;
  if (v <= 3)  return -4;
  if (v <= 5)  return -3;
  if (v <= 7)  return -2;
  if (v <= 9)  return -1;
  if (v <= 11) return  0;
  if (v <= 13) return +1;
  if (v <= 15) return +2;
  if (v <= 17) return +3;
  if (v <= 19) return +4;
  if (v <= 21) return +5;
  if (v <= 23) return +6;
  if (v <= 25) return +7;
  if (v <= 27) return +8;
  if (v <= 29) return +9;
  return +10;
}

function renderStat(container, block, pageNum) {
  const wrap = document.createElement('div');
  wrap.className = 'nt-stat';

  const nameEl = document.createElement('div');
  nameEl.className = 'nt-stat-name';
  nameEl.textContent = '|[ > ] ' + (block.name || 'СТАТ');

  const controls = document.createElement('div');
  controls.className = 'nt-stat-controls';

  const btnMinus = document.createElement('button');
  btnMinus.className = 'nt-stat-btn'; btnMinus.textContent = '−';

  const valEl = document.createElement('div');
  valEl.className = 'nt-stat-val';
  valEl.textContent = block.value ?? 20;
  valEl.title = 'Нажми для ввода';

  const btnPlus = document.createElement('button');
  btnPlus.className = 'nt-stat-btn'; btnPlus.textContent = '+';

  const modEl = document.createElement('div');
  modEl.className = 'nt-stat-mod';

  const diceEl = document.createElement('div');
  diceEl.className = 'nt-stat-dice';

  function updateMod(v) {
    const m = calcMod(v);
    modEl.textContent = (m >= 0 ? '+' : '') + m;
    diceEl.textContent = 'd20' + (m >= 0 ? '+' : '') + m;
  }
  updateMod(block.value ?? 20);

  function saveStatVal(newVal) {
    const clamped = Math.max(1, Math.min(30, Math.round(Number(newVal) || 1)));
    block.value = clamped;
    valEl.textContent = clamped;
    updateMod(clamped);
    // persist
    const blocks = getPageBlocks(pageNum);
    const idx = blocks.indexOf(block);
    if (idx !== -1) {
      blocks[idx].value = clamped;
      savePage(pageNum, true).catch(() => {});
    }
  }

  btnMinus.addEventListener('click', () => saveStatVal((block.value ?? 20) - 1));
  btnPlus.addEventListener('click',  () => saveStatVal((block.value ?? 20) + 1));

  // click on value → inline edit
  valEl.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'nt-stat-val editing';
    input.value = block.value ?? 20;
    input.style.cssText = 'width:40px;background:rgba(0,255,65,0.07);border:1px solid #00FF41;color:#00FF41;font-family:Courier New,monospace;font-size:13px;text-align:center;outline:none;border-radius:2px;padding:1px 3px;';
    valEl.replaceWith(input);
    input.focus(); input.select();
    function commit() {
      saveStatVal(input.value);
      input.replaceWith(valEl);
      valEl.textContent = block.value;
    }
    input.addEventListener('blur', commit);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); commit(); } if (e.key === 'Escape') { input.replaceWith(valEl); } });
  });

  controls.append(btnMinus, valEl, btnPlus, modEl, diceEl);
  wrap.append(nameEl, controls);
  container.appendChild(wrap);
  container.scrollTop = container.scrollHeight;
  setTimeout(() => wrap.classList.add('show'), 30);
}

function addMsg(container, text, color, sep) {
  const div = document.createElement('div');
  div.className = 'pmsg' + (sep ? ' sep' : ' content');
  div.style.color = color || '#00FF41';
  div.textContent = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  setTimeout(() => div.classList.add('show'), 30);
}

function renderCard(container, block) {
  const card = document.createElement('div');
  card.className = 'nt-card';
  card.style.setProperty('--cc', block.color || '#00FF41');

  const head = document.createElement('div');
  head.className = 'nt-card-head';

  const toggle = document.createElement('div');
  toggle.className = 'nt-card-toggle';
  toggle.textContent = '+';

  const name = document.createElement('div');
  name.className = 'nt-card-name';
  name.textContent = block.name || '';

  head.append(toggle, name);
  card.appendChild(head);

  if (block.tags && block.tags.length) {
    const tags = document.createElement('div');
    tags.className = 'nt-card-tags';
    block.tags.forEach(t => {
      const entry = typeof t === 'object' ? t : { text: t, color: block.color || '#00FF41' };
      const tagColor = entry.color || block.color || '#00FF41';
      const tag = document.createElement('span');
      tag.className = 'nt-card-tag';
      tag.style.color = tagColor;
      tag.style.borderColor = tagColor + '55';
      tag.style.background = tagColor + '11';
      tag.textContent = entry.text || entry;
      tags.appendChild(tag);
    });
    card.appendChild(tags);
  }

  if (block.lines && block.lines.length) {
    const body = document.createElement('div');
    body.className = 'nt-card-body';
    block.lines.forEach(l => {
      const line = document.createElement('div');
      line.className = 'nt-card-line';
      line.style.color = l.color || block.color || '#00FF41';
      line.textContent = l.text || '';
      body.appendChild(line);
    });
    card.appendChild(body);
  }

  head.addEventListener('click', () => {
    const open = card.classList.toggle('open');
    toggle.textContent = open ? '−' : '+';
  });

  container.appendChild(card);
  container.scrollTop = container.scrollHeight;
  setTimeout(() => card.classList.add('show'), 30);
}

// ─── OPEN PAGE ───────────────────────────────────────────────────────────────
function openPage(num) {
  let pw = document.getElementById('pw' + num);
  if (!pw) {
    pw = document.createElement('div');
    pw.className = 'window page-window';
    pw.id = 'pw' + num;
    pw.innerHTML = '<div class="win-scanline"></div><div class="win-crt"></div>'
      + '<div class="win-titlebar" id="tb'+num+'"><span class="win-title">PAGE '+num+' — '+(extraPages[num]?extraPages[num].title.toUpperCase():'???')+'</span><button class="win-close">[X]</button></div>'
      + '<div class="win-body"><div class="page-body"><div class="page-messages win-scroll" id="pm'+num+'"></div></div></div>'
      + '<div class="win-resize"></div>';
    document.getElementById('desktop').appendChild(pw);
    initDrag(pw);
  }
  const offset = ((num - 1) % 5) * 28;
  let left = Math.max(12, Math.round((window.innerWidth - 420) / 2) - 150 + offset);
  let top = Math.max(12, Math.round((window.innerHeight - 460) / 2) - 50 + offset);
  pw.style.left = left + 'px';
  pw.style.top = top + 'px';
  pw.style.display = 'flex';
  zTop++; pw.style.zIndex = zTop;
  renderPage(num);
}

// ─── MAIN DIALOG ─────────────────────────────────────────────────────────────
function addDialogLine(src, cls, text) {
  const box = document.getElementById('dialog-box');
  const div = document.createElement('div');
  div.className = 'dline';
  div.innerHTML = `<span class="d-sep">|[ > ] </span><span class="${cls}">[${escHtml(src)}]</span><span class="d-sep"> : </span>${escHtml(text)}`;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
  setTimeout(() => div.classList.add('show'), 30);
}


function activateDesktopMode() {
  const main = document.getElementById('window-main');
  if (main) main.style.display = 'none';
  const icons = document.getElementById('desktop-icons');

  icons.style.display = 'grid';

  createDesktopIcons();
}

function handleCmd(raw) {
  const input = raw.trim().toLowerCase();
  const parts = input.split(' ');
  if (!started) {
    if (input === '/start') {
      started = true;
      document.getElementById('start-prompt').style.display = 'none';
      playDialog();
      setTimeout(() => activateDesktopMode(), 1400);
    } else {
      addDialogLine('Core System', 'src-core', 'Сначала введите /Start.');
    }
    return;
  }
  addDialogLine('UserSС', 'src-user', raw.trim());

  if (input === '/page all' || input === 'all') {
    setTimeout(() => {
      const titles = {1:'Краткая информация',2:'Характеристики',3:'Навыки',4:'Снаряжение',5:'Чёрный ящик'};
      getAllPageNums().forEach(num => {
        const title = num <= 5 ? titles[num] : (extraPages[num] ? extraPages[num].title : '—');
        addDialogLine('NT System', 'src-nt', 'Page ' + num + ': ' + title);
      });
    }, 100);
  } else if (parts[0] === '/page' && parts[1]) {
    const num = parseInt(parts[1]);
    if (getAllPageNums().includes(num)) window.openPage(num);
    else addDialogLine('NT System', 'src-nt', 'Страница не найдена.');
  } else if (input === '/edit') {
    openEditor(1);
  } else {
    addDialogLine('Core System', 'src-core', 'Неизвестная команда. Используйте /Page {номер}, /Page all или /Edit.');
  }
}

async function playDialog() {
  const lines = [
    ['UserSС', 'src-user', '/Start'],
    ['NT System', 'src-nt', 'Проверка целостности файлов'],
    ['Unknown Administrative System', 'src-adm', 'Свали'],
    ['NT System', 'src-nt', 'Проверка обновлений'],
    ['NT System', 'src-nt', 'Выполнение команды завершено. Используйте [/Page {номер}] или [/Page all].'],
  ];
  for (const [src, cls, text] of lines) { await d(200); addDialogLine(src, cls, text); }
}



// ─── BOOT ────────────────────────────────────────────────────────────────────
async function startApp() {
  const btn = document.getElementById('start-btn');
  btn.style.pointerEvents = 'none';
  btn.style.transition = 'opacity 0.25s';
  btn.style.opacity = '0';

  await d(250);

  const bootWin  = document.getElementById('boot-window');
  const bootOver = document.getElementById('boot-overlay');

  const rect = bootWin.getBoundingClientRect();
  const vw = window.innerWidth, vh = window.innerHeight;

  // Создаём expanding-рамку отдельно от окна — она масштабируется через scale
  // а само окно просто fade-out, без искажений текста
  const expander = document.createElement('div');
  const cx = rect.left + rect.width  / 2;
  const cy = rect.top  + rect.height / 2;
  const scaleX = (vw * 1.05) / rect.width;
  const scaleY = (vh * 1.05) / rect.height;
  expander.style.cssText = [
    'position:fixed',
    'left:'   + rect.left + 'px',
    'top:'    + rect.top  + 'px',
    'width:'  + rect.width  + 'px',
    'height:' + rect.height + 'px',
    'background:#0d0d0d',
    'border:1px solid #00FF41',
    'border-radius:8px',
    'box-shadow:0 0 30px rgba(0,255,65,0.2)',
    'z-index:9999',
    'transform-origin:' + (cx - rect.left) + 'px ' + (cy - rect.top) + 'px',
    'transition:none',
    'pointer-events:none',
  ].join(';');
  document.body.appendChild(expander);

  // fade-out само окно
  bootWin.style.transition = 'opacity 0.18s ease';
  bootWin.style.opacity = '0';
  bootOver.style.display = 'none';

  await d(30);

  // scale expander до полного экрана
  expander.style.transition = 'transform 0.52s cubic-bezier(.4,0,.2,1), border-radius 0.42s ease, opacity 0.22s ease 0.38s';
  expander.style.transform     = 'scale(' + scaleX + ',' + scaleY + ')';
  expander.style.borderRadius  = '0px';

  await d(560);

  expander.style.opacity = '0';
  bootWin.remove();

  await d(240);
  expander.remove();

  started = true;
  const icons = document.getElementById('desktop-icons');
  icons.style.display = 'grid';
  createDesktopIcons();

  const allIcons = icons.querySelectorAll('.desktop-icon');
  allIcons.forEach(ic => {
    ic.style.opacity    = '0';
    ic.style.transform  = 'translateY(12px)';
    ic.style.transition = 'none';
  });

  await d(60);

  allIcons.forEach((ic, i) => {
    setTimeout(() => {
      ic.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
      ic.style.opacity    = '1';
      ic.style.transform  = 'translateY(0)';
    }, i * 90);
  });
}

function initBootAnimation() {
  const canvas = document.getElementById('c');
  const ctx = canvas.getContext('2d');
  const W = 600, H = 500;
  let startTime = null;

  // Случайная длительность орбиты: 5–15 секунд
  const ORBIT_DURATION = 5000 + Math.random() * 10000;
  // Случайная длительность прогресс-бара: 5–15 секунд
  const PBAR_DURATION  = 5000 + Math.random() * 10000;

  // Временные точки
  const PHASE_HLINE_START  = 200;
  const PHASE_HLINE_END    = 600;
  const PHASE_VLINE_START  = 600;
  const PHASE_VLINE_END    = 1000;
  const PHASE_ORBIT_START  = 1000;
  const PHASE_ORBIT_END    = 1000 + ORBIT_DURATION;
  const PHASE_GATHER_END   = PHASE_ORBIT_END + 3000;
  const PHASE_SUBS_START   = PHASE_GATHER_END;
  const PHASE_PBAR_START   = PHASE_GATHER_END + 600;

  const LOGO = [
    "███░███░░░░██░░░░",
    "░██░████░░░██░░░░",
    "░░█░██░██░░██░█░░",
    "░░░░██░░██░██░██░",
    "░░░░██░░░████░███"
  ];

  const FONT_SIZE = 17, CW = 11, CH = 21;
  const COLS = 17, ROWS = 5;
  const TOTAL_W = COLS * CW, TOTAL_H = ROWS * CH;
  const CX = W/2, CY = H/2 - 30;
  const OX = CX - TOTAL_W/2, OY = CY - TOTAL_H/2;

  const chars = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const ch = LOGO[r][c] || '░';
      chars.push({
        ch,
        targetX: OX + c * CW + CW/2,
        targetY: OY + r * CH + CH/2,
        x: 0, y: 0, angle: 0, radius: 0, speed: 0, phase: 0,
        color: ch === '░' ? 'rgba(0,255,65,0.18)' : '#00FF41'
      });
    }
  }

  const N = chars.length;
  const BASE_R = 150;
  chars.forEach((c, i) => {
    c.angle  = (i / N) * Math.PI * 2 + Math.random() * 0.5;
    c.radius = BASE_R + (Math.random() - 0.5) * 40;
    c.x      = CX + Math.cos(c.angle) * c.radius;
    c.y      = CY + Math.sin(c.angle) * c.radius;
    c.speed  = 0.007 + Math.random() * 0.005;
    c.phase  = Math.random() * Math.PI * 2;
  });

  function buildProgressSteps(duration) {
    const steps = [];
    const count = 8 + Math.floor(Math.random() * 7);
    let progress = 0;
    let time = 0;

    for (let i = 0; i < count; i++) {
      const isLast = (i === count - 1);
      const remaining = 100 - progress;
      const jump = isLast ? remaining : Math.min(remaining - (count - i - 1) * 3, Math.max(3, Math.floor(Math.random() * Math.min(35, remaining - (count - i - 1) * 3))));
      const timeSlice = duration / count;
      const pause = timeSlice * (0.4 + Math.random() * 0.9);
      time += pause;
      progress += jump;
      steps.push({ t: Math.min(time, duration * 0.98), p: Math.min(progress, 100) });
      if (progress >= 100) break;
    }
    if (steps[steps.length - 1].p < 100) {
      steps.push({ t: duration, p: 100 });
    }
    return steps;
  }

  const progressSteps = buildProgressSteps(PBAR_DURATION);
  let pbarDone = false;
  let startBtnShown = false;

  function getProgressAt(elapsed) {
    if (elapsed <= 0) return 0;
    const steps = progressSteps;
    if (elapsed >= steps[steps.length - 1].t) return 100;
    for (let i = 0; i < steps.length; i++) {
      if (elapsed < steps[i].t) {
        const prev = i === 0 ? { t: 0, p: 0 } : steps[i - 1];
        return prev.p;
      }
    }
    return 100;
  }

  function easeOut(t)   { return 1 - Math.pow(1 - t, 3); }
  function easeInOut(t) { return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2; }

  function drawScanlines(alpha) {
    ctx.save();
    ctx.globalAlpha = alpha * 0.18;
    for (let y = 0; y < H; y += 4) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, y, W, 2);
    }
    ctx.restore();
  }

  function drawSubtitles(alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.font = '11px Courier New, monospace';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(0,255,65,0.55)';
    ctx.fillText('NANOTRASEN CORPORATION', CX, CY + TOTAL_H/2 + 28);
    ctx.fillStyle = 'rgba(0,255,65,0.35)';
    ctx.fillText('NT-OS v4.2.1  —  ИНИЦИАЛИЗАЦИЯ...', CX, CY + TOTAL_H/2 + 48);
    ctx.restore();
  }

  function drawProgressBar(alpha, progress) {
    const barW   = 260;
    const barH   = 12;
    const barX   = CX - barW / 2;
    const barY   = CY + TOTAL_H / 2 + 70;
    const chars  = 26;
    const filledChars = Math.round(chars * progress / 100);

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.font = '11px Courier New, monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const bar = '[' + '█'.repeat(filledChars) + '░'.repeat(chars - filledChars) + ']';
    ctx.fillStyle = 'rgba(0,255,65,0.9)';
    ctx.shadowColor = '#00FF41';
    ctx.shadowBlur  = filledChars > 0 ? 8 : 0;
    ctx.fillText(bar, CX, barY + barH / 2);

    ctx.restore();
  }

  function render(ts) {
    if (!startTime) startTime = ts;
    const t = ts - startTime;

    ctx.fillStyle = '#0d0d0d';
    ctx.fillRect(0, 0, W, H);
    drawScanlines(1);

    if (t >= PHASE_HLINE_START && t < PHASE_HLINE_END) {
      const p = easeOut((t - PHASE_HLINE_START) / 400);
      const sw = W * p, sh = 3 + p * 2;
      ctx.save();
      ctx.fillStyle = `rgba(0,255,65,${0.6 + p*0.4})`;
      ctx.shadowColor = '#00FF41'; ctx.shadowBlur = 20;
      ctx.fillRect((W-sw)/2, H/2-sh/2, sw, sh);
      ctx.restore();
    }

    else if (t >= PHASE_VLINE_START && t < PHASE_VLINE_END) {
      const p = easeOut((t - PHASE_VLINE_START) / 400);
      const sh = p * H;
      ctx.save();
      ctx.fillStyle = 'rgba(0,255,65,0.07)';
      ctx.fillRect(0, H/2 - sh/2, W, sh);
      ctx.fillStyle = `rgba(0,255,65,${1 - p*0.85})`;
      ctx.shadowColor = '#00FF41'; ctx.shadowBlur = 14;
      ctx.fillRect(0, H/2-2, W, 4);
      ctx.restore();
    }

    if (t >= PHASE_ORBIT_START) {
      const screenAlpha = Math.min(1, (t - PHASE_ORBIT_START) / 400);

      ctx.font = `bold ${FONT_SIZE}px 'Courier New', monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      chars.forEach(c => {
        let px, py, alpha;

        if (t < PHASE_ORBIT_END) {
          c.angle += c.speed;
          c.x = CX + Math.cos(c.angle) * c.radius;
          c.y = CY + Math.sin(c.angle) * c.radius;
          px = c.x; py = c.y;
          alpha = screenAlpha * (0.55 + 0.45 * Math.sin(t * 0.003 + c.phase));
        } else if (t < PHASE_GATHER_END) {
          const p = Math.min(1, (t - PHASE_ORBIT_END) / 3000);
          const e = easeInOut(p);
          c.angle += c.speed * (1 - e) * 0.5;
          c.x = CX + Math.cos(c.angle) * c.radius;
          c.y = CY + Math.sin(c.angle) * c.radius;
          px = c.x + (c.targetX - c.x) * e;
          py = c.y + (c.targetY - c.y) * e;
          alpha = 0.55 + 0.45 * e;
        } else {
          px = c.targetX; py = c.targetY; alpha = 1;
          const t2 = Math.min(1, (t - PHASE_GATHER_END) / 600);
          ctx.shadowColor = '#00FF41';
          ctx.shadowBlur  = 12 * t2;
        }

        ctx.globalAlpha = alpha;
        ctx.fillStyle   = c.color;
        ctx.fillText(c.ch, px, py);
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur  = 0;

      if (t > PHASE_SUBS_START) {
        const subAlpha = Math.min(1, (t - PHASE_SUBS_START - 100) / 600);
        if (subAlpha > 0) drawSubtitles(subAlpha);
      }

      if (t > PHASE_PBAR_START && !pbarDone) {
        const pbarElapsed = t - PHASE_PBAR_START;
        const pbarAlpha   = Math.min(1, pbarElapsed / 400);
        const progress    = getProgressAt(pbarElapsed);
        drawProgressBar(pbarAlpha, progress);

        if (progress >= 100 && pbarElapsed >= PBAR_DURATION && !startBtnShown) {
          startBtnShown = true;
          pbarDone = true;
          showStartButton();
        }
      }

      if (t > 1400) {
        const scanY = ((t - 1400) / 25 % (H + 80)) - 80;
        const grad  = ctx.createLinearGradient(0, scanY, 0, scanY + 80);
        grad.addColorStop(0,   'transparent');
        grad.addColorStop(0.5, 'rgba(0,255,65,0.07)');
        grad.addColorStop(1,   'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, scanY, W, 80);
      }
    }

    requestAnimationFrame(render);
  }

  function showStartButton() {
    const btn = document.getElementById('start-btn');
    btn.style.display = 'block';
    btn.style.opacity = '0';
    btn.style.transition = 'opacity 0.8s ease';
    setTimeout(() => { btn.style.opacity = '1'; }, 30);
  }

  requestAnimationFrame(render);
}
initBootAnimation();

// ─── DESKTOP ORBIT ANIMATION ─────────────────────────────────────────────────
function initDesktopOrbit() {
  const canvas = document.getElementById('desktop-bg');
  const ctx = canvas.getContext('2d');

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
window.addEventListener('resize', () => {
    resize();
    if (chars) {
      cx = canvas.width / 2;
      cy = canvas.height / 2;
      const totalW = COLS * CW, totalH = ROWS * CH;
      const ox = cx - totalW / 2, oy = cy - totalH / 2;
      chars.forEach((c, i) => {
        const col = i % COLS;
        const row = Math.floor(i / COLS);
        c.tx = ox + col * CW + CW / 2;
        c.ty = oy + row * CH + CH / 2;
      });
    }
  });

  const LOGO = [
    "███░███░░░░██░░░░",
    "░██░████░░░██░░░░",
    "░░█░██░██░░██░█░░",
    "░░░░██░░██░██░██░",
    "░░░░██░░░████░███"
  ];
  const FONT_SIZE = 14, CW = 9, CH = 17;
  const COLS = 17, ROWS = 5;

  // STATE: orbit → gather → hold → scatter → orbit
  // durations (ms)
  const T_ORBIT  = 8000 + Math.random() * 6000;
  const T_GATHER = 2500;
  const T_HOLD   = 3000;
  const T_SCATTER= 2000;
  const CYCLE    = T_ORBIT + T_GATHER + T_HOLD + T_SCATTER;

  function makeChars(cx, cy) {
    const totalW = COLS * CW, totalH = ROWS * CH;
    const ox = cx - totalW / 2, oy = cy - totalH / 2;
    const chars = [];
    const N = ROWS * COLS;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const ch = LOGO[r][c] || '░';
        const angle = ((r * COLS + c) / N) * Math.PI * 2 + Math.random() * 0.4;
        const radius = 120 + Math.random() * 60;
        chars.push({
          ch,
          tx: ox + c * CW + CW / 2,
          ty: oy + r * CH + CH / 2,
          x: cx + Math.cos(angle) * radius,
          y: cy + Math.sin(angle) * radius,
          angle,
          radius,
          speed: 0.006 + Math.random() * 0.004,
          phase: Math.random() * Math.PI * 2,
          isGlyph: ch !== '░',
        });
      }
    }
    return chars;
  }

  function easeInOut(t) { return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2; }

  let startTime = null;
  let chars = null;
  let cx = 0, cy = 0;

  function frame(ts) {
    requestAnimationFrame(frame);
    if (!document.getElementById('desktop-icons') || document.getElementById('desktop-icons').style.display === 'none') return;

    if (!startTime) { startTime = ts; cx = canvas.width / 2; cy = canvas.height / 2; chars = makeChars(cx, cy); }

    const t = (ts - startTime) % CYCLE;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = `bold ${FONT_SIZE}px 'Courier New', monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    chars.forEach(c => {
      let px, py, alpha;

      if (t < T_ORBIT) {
        // pure orbit
        c.angle += c.speed;
        c.x = cx + Math.cos(c.angle) * c.radius;
        c.y = cy + Math.sin(c.angle) * c.radius;
        px = c.x; py = c.y;
        alpha = 0.4 + 0.3 * Math.sin(ts * 0.001 + c.phase);
      } else if (t < T_ORBIT + T_GATHER) {
        // gather into logo
        const p = easeInOut((t - T_ORBIT) / T_GATHER);
        c.angle += c.speed * (1 - p) * 0.4;
        c.x = cx + Math.cos(c.angle) * c.radius;
        c.y = cy + Math.sin(c.angle) * c.radius;
        px = c.x + (c.tx - c.x) * p;
        py = c.y + (c.ty - c.y) * p;
        alpha = 0.4 + 0.6 * p;
      } else if (t < T_ORBIT + T_GATHER + T_HOLD) {
        // hold logo
        px = c.tx; py = c.ty; alpha = 1;
      } else {
        // scatter back to orbit
        const p = easeInOut((t - T_ORBIT - T_GATHER - T_HOLD) / T_SCATTER);
        // reset orbit position at scatter start
        if (p < 0.02) {
          c.angle = Math.atan2(c.ty - cy, c.tx - cx) + Math.random() * 0.5;
          c.x = c.tx; c.y = c.ty;
        }
        const orbitX = cx + Math.cos(c.angle) * c.radius;
        const orbitY = cy + Math.sin(c.angle) * c.radius;
        px = c.tx + (orbitX - c.tx) * p;
        py = c.ty + (orbitY - c.ty) * p;
        alpha = 1 - 0.6 * p;
      }

      ctx.globalAlpha = alpha;
      ctx.fillStyle = c.isGlyph ? '#00FF41' : 'rgba(0,255,65,0.25)';
      ctx.shadowColor = '#00FF41';
      ctx.shadowBlur = c.isGlyph ? 6 : 0;
      ctx.fillText(c.ch, px, py);
    });

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
  }

  requestAnimationFrame(frame);
}
initDesktopOrbit();

// ─── MECHANICS LOADER ────────────────────────────────────────────────────────
const MECHANICS_BASE = 'https://raw.githubusercontent.com/Drake434/GIFU2/main/mechanics/';
const MECHANICS_LIST = [
  'staff.js',
];

function loadMechanics() {
  MECHANICS_LIST.forEach(file => {
    fetch(MECHANICS_BASE + file + '?t=' + Date.now())
      .then(r => { if (!r.ok) throw new Error('404'); return r.text(); })
      .then(code => {
        try {
          const fn = new Function('anketa', '(function(){\n' + code + '\n})();');
          fn({ pageData, extraPages, openPage, consoleLog });
          console.log('[mechanics] загружен: ' + file);
        } catch(e) {
          console.warn('[mechanics] ошибка в ' + file + ':', e.message);
        }
      })
      .catch(e => console.warn('[mechanics] не удалось загрузить ' + file + ':', e.message));
  });
}

loadMechanics();

// ─── IMAGE POPUP ─────────────────────────────────────────────────────────────
function showPopup(e) {
  showPopupUrl(e, '', 'ЛИЧНОЕ ДЕЛО — DEVAIT LITE NR 13');
}
function showPopupUrl(e, url, title) {
  const popup = document.getElementById('img-popup');
  if (url) popup.querySelector('img').src = url;
  if (title) popup.querySelector('.popup-title').textContent = title.toUpperCase();
  popup.classList.add('show');
  let px = e.clientX + 10, py = e.clientY - 20;
  if (px + 240 > window.innerWidth) px = e.clientX - 250;
  if (py + 320 > window.innerHeight) py = window.innerHeight - 330;
  popup.style.left = px + 'px'; popup.style.top = py + 'px';
}
document.getElementById('popup-close-btn').addEventListener('click', () => document.getElementById('img-popup').classList.remove('show'));

// ─── EDITOR ──────────────────────────────────────────────────────────────────
function openEditor(pageNum) {
  currentEditorPage = pageNum || 1;
  editingBlockIdx = null;
  const editor = document.getElementById('editor-window');
  const w = Math.min(820, window.innerWidth - 24);
  editor.style.width = w + 'px';
  let left = Math.max(12, Math.round((window.innerWidth - w) / 2));
  let top = Math.max(12, Math.round((window.innerHeight - 580) / 2));
  editor.style.left = Math.max(12, left) + 'px';
  editor.style.top = Math.max(12, top) + 'px';
  editor.style.display = 'flex';
  zTop++; editor.style.zIndex = zTop;
  setActiveTab(currentEditorPage);
  renderBlockList();
  renderLinksList();
  showPanel(null);
  setEditorStatus('—');
}

function setActiveTab(num) {
  document.querySelectorAll('.editor-tab').forEach(t => t.classList.toggle('active', Number(t.dataset.page) === num));
}

document.querySelectorAll('.editor-tab').forEach(tab => {
  if (Number(tab.dataset.page) === 5) {
    tab.textContent = 'PAGE 5 \uD83D\uDD12';
    tab.style.opacity = '0.35';
    tab.style.cursor = 'not-allowed';
    tab.title = 'Page 5 — только для просмотра';
    tab.addEventListener('click', () => { consoleLog('ERR: Page 5 защищена от редактирования.'); });
    return;
  }
  tab.addEventListener('click', () => {
    currentEditorPage = Number(tab.dataset.page);
    editingBlockIdx = null;
    setActiveTab(currentEditorPage);
    renderBlockList();
    renderLinksList();
    showPanel(null);
    setEditorStatus('—');
  });
});

function setEditorStatus(text) { document.getElementById('editor-status').textContent = text; }

function showPanel(type) {
  document.getElementById('panel-card').style.display   = type === 'card'   ? '' : 'none';
  document.getElementById('panel-text').style.display   = type === 'text'   ? '' : 'none';
  document.getElementById('panel-stat').style.display   = type === 'stat'   ? '' : 'none';
  document.getElementById('panel-widget').style.display = type === 'widget' ? '' : 'none';
}

// ─── BLOCK LIST ───────────────────────────────────────────────────────────────
function renderBlockList() {
  const list = document.getElementById('block-list');
  list.innerHTML = '';
  const blocks = getPageBlocks(currentEditorPage);
  blocks.forEach((block, idx) => {
    const item = document.createElement('div');
    item.className = 'bl-item';

    const head = document.createElement('div');
    head.className = 'bl-item-head';

    const typeLabel = document.createElement('span');
    typeLabel.className = 'bl-item-type';
    typeLabel.textContent = block.type === 'card' ? 'КАРТА' : block.type === 'divider' ? 'РАЗДЕЛИТЕЛЬ' : block.type === 'stat' ? 'СТАТ' : block.type === 'widget' ? 'ВИДЖЕТ' : 'ТЕКСТ';

    const preview = document.createElement('span');
    preview.className = 'bl-item-preview' + (block.type === 'text' ? ' text-preview' : '');
    preview.style.color = block.color || '#00FF41';
    preview.textContent = block.type === 'card' ? (block.name || '—') : block.type === 'divider' ? '════ [ < ]|' : block.type === 'stat' ? (block.name || '—') + '  [' + (block.value ?? 20) + ']' : block.type === 'widget' ? (block.title || '—') + '  [' + (block.src || '?') + ']' : (block.text || '—');

    const btns = document.createElement('div');
    btns.className = 'bl-item-btns';

    const btnUp = document.createElement('button');
    btnUp.className = 'bl-btn'; btnUp.textContent = '↑';
    btnUp.title = 'Вверх';
    btnUp.addEventListener('click', e => { e.stopPropagation(); moveBlock(idx, -1); });

    const btnDown = document.createElement('button');
    btnDown.className = 'bl-btn'; btnDown.textContent = '↓';
    btnDown.title = 'Вниз';
    btnDown.addEventListener('click', e => { e.stopPropagation(); moveBlock(idx, 1); });

    const btnDel = document.createElement('button');
    btnDel.className = 'bl-btn danger'; btnDel.textContent = '✕';
    btnDel.title = 'Удалить';
    btnDel.addEventListener('click', e => { e.stopPropagation(); deleteBlock(idx); });

    btns.append(btnUp, btnDown, btnDel);
    head.append(typeLabel, preview, btns);
    item.appendChild(head);

    item.addEventListener('click', () => editBlock(idx));
    if (editingBlockIdx === idx) item.style.borderColor = 'rgba(98,241,245,0.6)';
    list.appendChild(item);
  });
}

function moveBlock(idx, dir) {
  const blocks = [...getPageBlocks(currentEditorPage)];
  const newIdx = idx + dir;
  if (newIdx < 0 || newIdx >= blocks.length) return;
  [blocks[idx], blocks[newIdx]] = [blocks[newIdx], blocks[idx]];
  pageData[currentEditorPage] = blocks;
  if (editingBlockIdx === idx) editingBlockIdx = newIdx;
  renderBlockList();
  autoSave();
}

function deleteBlock(idx) {
  const blocks = [...getPageBlocks(currentEditorPage)];
  blocks.splice(idx, 1);
  pageData[currentEditorPage] = blocks;
  if (editingBlockIdx === idx) { editingBlockIdx = null; showPanel(null); }
  renderBlockList();
  autoSave();
}

function editBlock(idx) {
  editingBlockIdx = idx;
  renderBlockList();
  const block = getPageBlocks(currentEditorPage)[idx];
  if (block.type === 'card') loadCardPanel(block);
  else if (block.type === 'text') loadTextPanel(block);
  else if (block.type === 'stat') loadStatPanel(block);
  else if (block.type === 'widget') loadWidgetPanel(block);
  else showPanel(null);
}

// ─── ADD BLOCKS ───────────────────────────────────────────────────────────────
document.getElementById('btn-add-card').addEventListener('click', () => {
  const blocks = [...getPageBlocks(currentEditorPage)];
  const newBlock = { type: 'card', color: '#00FF41', name: 'Новая карточка', tags: [], lines: [] };
  blocks.push(newBlock);
  pageData[currentEditorPage] = blocks;
  editingBlockIdx = blocks.length - 1;
  renderBlockList();
  loadCardPanel(newBlock);
  autoSave();
});

document.getElementById('btn-add-text').addEventListener('click', () => {
  const blocks = [...getPageBlocks(currentEditorPage)];
  const newBlock = { type: 'text', color: '#00FF41', text: '' };
  blocks.push(newBlock);
  pageData[currentEditorPage] = blocks;
  editingBlockIdx = blocks.length - 1;
  renderBlockList();
  loadTextPanel(newBlock);
  autoSave();
});

document.getElementById('btn-add-divider').addEventListener('click', () => {
  const blocks = [...getPageBlocks(currentEditorPage)];
  blocks.push({ type: 'divider' });
  pageData[currentEditorPage] = blocks;
  editingBlockIdx = null;
  renderBlockList();
  showPanel(null);
  autoSave();
});

// ─── WIDGET BUTTON ────────────────────────────────────────────────────────────
const WIDGET_REPO_API  = 'https://api.github.com/repos/Drake434/GIFU2/contents/mechanics';
const WIDGET_RAW_BASE  = 'https://raw.githubusercontent.com/Drake434/GIFU2/main/mechanics/';

const widgetPages = new Set();

function updateWidgetBtn() {
  const btn = document.getElementById('btn-add-widget');
  btn.style.display = widgetPages.has(currentEditorPage) ? '' : 'none';
}

document.getElementById('btn-add-widget').addEventListener('click', () => {
  const blocks = [...getPageBlocks(currentEditorPage)];
  const newBlock = { type: 'widget', title: 'Виджет', src: '' };
  blocks.push(newBlock);
  pageData[currentEditorPage] = blocks;
  editingBlockIdx = blocks.length - 1;
  renderBlockList();
  loadWidgetPanel(newBlock);
  autoSave();
});

// ─── WIDGET PANEL ─────────────────────────────────────────────────────────────
function fetchWidgetFileList(selectEl, statusEl, currentSrc) {
  if (statusEl) statusEl.textContent = 'загрузка списка...';
  fetch(WIDGET_REPO_API + '?t=' + Date.now())
    .then(r => { if (!r.ok) throw new Error('GitHub API: ' + r.status); return r.json(); })
    .then(files => {
      const jsFiles = files.filter(f => f.type === 'file' && f.name.endsWith('.js'));
      selectEl.innerHTML = '';
      if (!jsFiles.length) {
        const opt = document.createElement('option');
        opt.textContent = '— нет файлов —';
        opt.value = '';
        selectEl.appendChild(opt);
        if (statusEl) statusEl.textContent = 'файлы не найдены';
        return;
      }
      jsFiles.forEach(f => {
        const opt = document.createElement('option');
        opt.value = f.name;
        opt.textContent = f.name;
        if (f.name === currentSrc) opt.selected = true;
        selectEl.appendChild(opt);
      });
      if (statusEl) statusEl.textContent = jsFiles.length + ' файл(ов) найдено';
    })
    .catch(e => {
      if (statusEl) statusEl.textContent = 'ERR: ' + e.message;
    });
}

function loadWidgetPanel(block) {
  showPanel('widget');
  document.getElementById('widget-title').value = block.title || '';
  const colorInput = document.getElementById('widget-color');
  const colorSwatch = document.getElementById('widget-color-swatch');
  colorInput.value = block.color || '#00FF41';
  colorSwatch.style.background = block.color || '#00FF41';
  colorInput.addEventListener('input', () => {
    colorSwatch.style.background = colorInput.value;
  });
  const selectEl = document.getElementById('widget-src');
  const statusEl = document.getElementById('widget-file-list');
  if (block.src) {
    selectEl.innerHTML = '';
    const opt = document.createElement('option');
    opt.value = block.src; opt.textContent = block.src; opt.selected = true;
    selectEl.appendChild(opt);
  }
  fetchWidgetFileList(selectEl, statusEl, block.src || '');
}

document.getElementById('btn-widget-refresh-list').addEventListener('click', () => {
  const selectEl = document.getElementById('widget-src');
  const statusEl = document.getElementById('widget-file-list');
  fetchWidgetFileList(selectEl, statusEl, selectEl.value);
});

document.getElementById('btn-save-widget').addEventListener('click', () => {
  if (editingBlockIdx === null) return;
  const blocks = getPageBlocks(currentEditorPage);
  const block = blocks[editingBlockIdx];
  block.title = document.getElementById('widget-title').value.trim() || 'Виджет';
  block.color = document.getElementById('widget-color').value.trim() || '#00FF41';
  block.src   = document.getElementById('widget-src').value || '';
  renderBlockList();
  autoSave();
  setEditorStatus('СОХРАНЕНО');
});

// ─── WIDGET RENDERER ──────────────────────────────────────────────────────────
function renderWidget(container, block) {
  const card = document.createElement('div');
  card.className = 'nt-widget';
  card.style.setProperty('--wc', block.color || '#00FF41');

  // Заголовок
  const head = document.createElement('div');
  head.className = 'nt-widget-head';

  const toggle = document.createElement('div');
  toggle.className = 'nt-widget-toggle';
  toggle.textContent = '+';

  const name = document.createElement('div');
  name.className = 'nt-widget-name';
  name.textContent = block.title || 'ВИДЖЕТ';

  const reloadBtn = document.createElement('button');
  reloadBtn.className = 'nt-widget-reload';
  reloadBtn.textContent = '↻';
  reloadBtn.title = 'Перезагрузить виджет';

  head.append(toggle, name, reloadBtn);
  card.appendChild(head);

  // Тело (скрыто по умолчанию)
  const body = document.createElement('div');
  body.className = 'nt-widget-body';

  const status = document.createElement('div');
  status.className = 'nt-widget-status';

  card.appendChild(body);
  card.appendChild(status);
  container.appendChild(card);

  // Открытие/закрытие по клику на head
  head.addEventListener('click', e => {
    if (e.target === reloadBtn) return;
    const isOpen = card.classList.toggle('open');
    toggle.textContent = isOpen ? '−' : '+';
    if (isOpen && !body._loaded) loadWidget();
  });

  // Перезагрузка
  reloadBtn.addEventListener('click', e => {
    e.stopPropagation();
    if (!card.classList.contains('open')) {
      card.classList.add('open');
      toggle.textContent = '−';
    }
    loadWidget();
  });

  function loadWidget() {
    body._loaded = true;
    body.textContent = '';
    document.querySelectorAll('style[data-widget-src]').forEach(s => {
      if (s.dataset.widgetSrc === block.src) s.remove();
    });
    status.textContent = '// загрузка ' + (block.src || '?') + '...';
    if (!block.src) { status.textContent = '// ERR: файл не указан'; return; }
    fetch(WIDGET_RAW_BASE + block.src + '?t=' + Date.now())
      .then(r => { if (!r.ok) throw new Error('404: ' + block.src); return r.text(); })
      .then(code => {
        try {
          const fn = new Function('container', code);
          fn(body);
          body.querySelectorAll('style').forEach(s => {
            s.dataset.widgetSrc = block.src;
            document.head.appendChild(s);
          });
          status.textContent = '// ' + block.src + ' загружен';
        } catch(e) {
          status.textContent = '// ERR: ' + e.message;
        }
      })
      .catch(e => { status.textContent = '// ERR: ' + e.message; });
  }

  setTimeout(() => card.classList.add('show'), 30);
}


const statPages = new Set(); // страницы где включён режим добавления стата

function updateStatBtn() {
  const btn = document.getElementById('btn-add-stat');
  btn.style.display = statPages.has(currentEditorPage) ? '' : 'none';
}

document.getElementById('btn-add-stat').addEventListener('click', () => {
  const blocks = [...getPageBlocks(currentEditorPage)];
  const newBlock = { type: 'stat', name: 'Новый стат', value: 20 };
  blocks.push(newBlock);
  pageData[currentEditorPage] = blocks;
  editingBlockIdx = blocks.length - 1;
  renderBlockList();
  loadStatPanel(newBlock);
  autoSave();
});

function loadStatPanel(block) {
  showPanel('stat');
  document.getElementById('stat-name').value = block.name || '';
  document.getElementById('stat-value').value = block.value ?? 20;
}

document.getElementById('btn-save-stat').addEventListener('click', () => {
  if (editingBlockIdx === null) return;
  const blocks = getPageBlocks(currentEditorPage);
  const block = blocks[editingBlockIdx];
  block.name = document.getElementById('stat-name').value.trim() || 'Стат';
  block.value = Math.max(1, Math.min(30, parseInt(document.getElementById('stat-value').value) || 20));
  renderBlockList();
  autoSave();
  setEditorStatus('СОХРАНЕНО');
});

// ─── CARD PANEL ───────────────────────────────────────────────────────────────
function normalizeColor(val) {
  const v = String(val||'').trim();
  if (!v) return '';
  if (window.CSS && CSS.supports('color', v)) return v;
  return '';
}

function loadCardPanel(block) {
  showPanel('card');
  document.getElementById('card-name').value = block.name || '';
  document.getElementById('card-color').value = block.color || '#00FF41';
  updateSwatch('card-color-swatch', 'card-color');
  renderTagsList(block.tags || []);
  renderLinesList(block.lines || []);
}

document.getElementById('card-color').addEventListener('input', () => updateSwatch('card-color-swatch', 'card-color'));
document.getElementById('text-color').addEventListener('input', () => updateSwatch('text-color-swatch', 'text-color'));

// автосохранение названия карточки
let _cardNameTimer = null;
document.getElementById('card-name').addEventListener('input', () => {
  if (editingBlockIdx === null) return;
  getPageBlocks(currentEditorPage)[editingBlockIdx].name = document.getElementById('card-name').value.trim() || 'Карточка';
  clearTimeout(_cardNameTimer);
  _cardNameTimer = setTimeout(() => { renderBlockList(); autoSave(); }, 500);
});

function updateSwatch(swatchId, inputId) {
  const color = normalizeColor(document.getElementById(inputId).value) || '#00FF41';
  document.getElementById(swatchId).style.background = color;
}

function renderTagsList(tags) {
  const list = document.getElementById('tags-list');
  list.innerHTML = '';
  tags.forEach((tag, i) => {
    const entry = typeof tag === 'object' ? tag : { text: tag, color: '#62F1F5' };
    const pill = document.createElement('div');
    pill.className = 'tag-pill';
    const tagColor = entry.color || '#62F1F5';
    pill.style.borderColor = tagColor.replace(')', ',0.4)').replace('rgb', 'rgba') + (tagColor.startsWith('#') ? '66' : '');
    pill.style.color = tagColor;
    pill.textContent = entry.text || entry;
    const rem = document.createElement('button');
    rem.className = 'tag-pill-remove';
    rem.textContent = '✕';
    rem.addEventListener('click', () => {
      if (editingBlockIdx === null) return;
      const blocks = getPageBlocks(currentEditorPage);
      blocks[editingBlockIdx].tags.splice(i, 1);
      renderTagsList(blocks[editingBlockIdx].tags);
      autoSave();
    });
    pill.appendChild(rem);
    list.appendChild(pill);
  });
}

document.getElementById('btn-add-tag').addEventListener('click', () => {
  const input = document.getElementById('tag-input');
  const colorInput = document.getElementById('tag-color');
  const val = input.value.trim();
  if (!val || editingBlockIdx === null) return;
  const color = normalizeColor(colorInput.value) || '#62F1F5';
  const blocks = getPageBlocks(currentEditorPage);
  if (!blocks[editingBlockIdx].tags) blocks[editingBlockIdx].tags = [];
  blocks[editingBlockIdx].tags.push({ text: val, color });
  input.value = '';
  renderTagsList(blocks[editingBlockIdx].tags);
  autoSave();
});
document.getElementById('tag-color').addEventListener('input', () => {
  const c = normalizeColor(document.getElementById('tag-color').value) || '#62F1F5';
  document.getElementById('tag-color-swatch').style.background = c;
});
document.getElementById('tag-input').addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('btn-add-tag').click(); });

function renderLinesList(lines) {
  const list = document.getElementById('lines-list');
  list.innerHTML = '';
  lines.forEach((line, i) => {
    const row = document.createElement('div');
    row.className = 'line-item';

    const swatch = document.createElement('div');
    swatch.className = 'line-swatch';
    swatch.style.background = line.color || '#00FF41';
    swatch.title = 'Нажми чтобы изменить цвет';
    swatch.addEventListener('click', () => {
      const color = prompt('Введи цвет (например #ff4444 или cyan):', line.color || '#00FF41');
      const clean = normalizeColor(color) || '#00FF41';
      if (editingBlockIdx === null) return;
      getPageBlocks(currentEditorPage)[editingBlockIdx].lines[i].color = clean;
      swatch.style.background = clean;
      autoSave();
    });

    const preview = document.createElement('span');
    preview.style.cssText = 'flex:1;font-size:10px;color:#00FF41;opacity:0.55;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;';
    preview.textContent = line.text || '—';

    const editBtn = document.createElement('button');
    editBtn.className = 'line-edit-btn';
    editBtn.textContent = '✎';
    editBtn.title = 'Редактировать текст';
    editBtn.addEventListener('click', () => {
      openTextModal(
        'СТРОКА КАРТОЧКИ',
        line.text || '',
        (val) => {
          if (editingBlockIdx === null) return;
          getPageBlocks(currentEditorPage)[editingBlockIdx].lines[i].text = val;
          preview.textContent = val || '—';
          autoSave();
        }
      );
    });

    const rem = document.createElement('button');
    rem.className = 'line-remove';
    rem.textContent = '✕';
    rem.addEventListener('click', () => {
      if (editingBlockIdx === null) return;
      const blocks = getPageBlocks(currentEditorPage);
      blocks[editingBlockIdx].lines.splice(i, 1);
      renderLinesList(blocks[editingBlockIdx].lines);
      autoSave();
    });

    row.append(swatch, preview, editBtn, rem);
    list.appendChild(row);
  });
}

document.getElementById('btn-add-line').addEventListener('click', () => {
  if (editingBlockIdx === null) return;
  const blocks = getPageBlocks(currentEditorPage);
  const cardColor = blocks[editingBlockIdx].color || '#00FF41';
  if (!blocks[editingBlockIdx].lines) blocks[editingBlockIdx].lines = [];
  blocks[editingBlockIdx].lines.push({ color: cardColor, text: '' });
  renderLinesList(blocks[editingBlockIdx].lines);
  autoSave();
});

document.getElementById('btn-save-card').addEventListener('click', () => {
  if (editingBlockIdx === null) return;
  const blocks = getPageBlocks(currentEditorPage);
  blocks[editingBlockIdx].name = document.getElementById('card-name').value.trim() || 'Карточка';
  blocks[editingBlockIdx].color = normalizeColor(document.getElementById('card-color').value) || '#00FF41';
  renderBlockList();
  autoSave();
  setEditorStatus('СОХРАНЕНО');
});

// ─── TEXT PANEL ───────────────────────────────────────────────────────────────
function loadTextPanel(block) {
  showPanel('text');
  document.getElementById('text-color').value = block.color || '#00FF41';
  const preview = document.getElementById('text-content-preview');
  preview.textContent = block.text || '—';
  updateSwatch('text-color-swatch', 'text-color');
}

document.getElementById('btn-open-text-modal').addEventListener('click', () => {
  if (editingBlockIdx === null) return;
  const block = getPageBlocks(currentEditorPage)[editingBlockIdx];
  openTextModal('ТЕКСТОВЫЙ БЛОК', block.text || '', (val) => {
    getPageBlocks(currentEditorPage)[editingBlockIdx].text = val;
    document.getElementById('text-content-preview').textContent = val || '—';
    // также применяем текущий цвет и сохраняем
    const color = normalizeColor(document.getElementById('text-color').value) || '#00FF41';
    getPageBlocks(currentEditorPage)[editingBlockIdx].color = color;
    renderBlockList();
    autoSave();
  });
});

document.getElementById('btn-save-text').addEventListener('click', () => {
  if (editingBlockIdx === null) return;
  const blocks = getPageBlocks(currentEditorPage);
  blocks[editingBlockIdx].color = normalizeColor(document.getElementById('text-color').value) || '#00FF41';
  renderBlockList();
  autoSave();
  setEditorStatus('СОХРАНЕНО');
});

// ─── TEXT EDITOR MODAL ────────────────────────────────────────────────────────
let _temCallback = null;

function openTextModal(title, currentText, onSave) {
  _temCallback = onSave;
  document.getElementById('tem-title').textContent = title;
  document.getElementById('tem-textarea').value = currentText;
  document.getElementById('text-editor-modal').classList.add('show');
  setTimeout(() => document.getElementById('tem-textarea').focus(), 50);
}

function closeTextModal() {
  document.getElementById('text-editor-modal').classList.remove('show');
  _temCallback = null;
}

document.getElementById('tem-save').addEventListener('click', () => {
  if (_temCallback) {
    _temCallback(document.getElementById('tem-textarea').value);
  }
  closeTextModal();
});

document.getElementById('tem-cancel').addEventListener('click', closeTextModal);
document.getElementById('tem-cancel2').addEventListener('click', closeTextModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (document.getElementById('text-editor-modal').classList.contains('show')) {
      closeTextModal(); return;
    }
    document.getElementById('img-popup').classList.remove('show');
  }
});

// ─── AUTO SAVE ────────────────────────────────────────────────────────────────
let saveTimer = null;
function autoSave() {
  setEditorStatus('СОХРАНЕНИЕ...');
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    const num = currentEditorPage;
    _savingPages.add(num);
    savePage(num)
      .then(() => {
        setEditorStatus('СОХРАНЕНО');
        logHistory(num, 'сохранено');
        // обновляем открытое окно сразу локально, не ждём Firebase
        const pw = document.getElementById('pw' + num);
        if (pw && pw.style.display === 'flex') renderPage(num);
      })
      .catch(() => setEditorStatus('ОШИБКА'));
  }, 600);
}

// ─── LINKS MANAGEMENT ─────────────────────────────────────────────────────────
function renderLinksList() {
  const list = document.getElementById('links-list');
  if (!list) return;
  list.innerHTML = '';
  const links = pageLinks[currentEditorPage] || [];
  links.forEach(({ word, url }, i) => {
    const row = document.createElement('div');
    row.className = 'line-item';
    row.style.flexDirection = 'column'; row.style.alignItems = 'stretch'; row.style.gap = '3px';

    const top = document.createElement('div');
    top.style.cssText = 'display:flex;align-items:center;gap:5px';

    const wordSpan = document.createElement('span');
    wordSpan.style.cssText = 'flex:1;font-size:11px;color:#62F1F5;overflow:hidden;white-space:nowrap;text-overflow:ellipsis';
    wordSpan.textContent = word;

    const urlSpan = document.createElement('span');
    urlSpan.style.cssText = 'flex:2;font-size:10px;color:#00FF41;opacity:0.5;overflow:hidden;white-space:nowrap;text-overflow:ellipsis';
    urlSpan.textContent = url;

    const rem = document.createElement('button');
    rem.className = 'line-remove'; rem.textContent = '✕';
    rem.addEventListener('click', () => {
      pageLinks[currentEditorPage].splice(i, 1);
      renderLinksList();
      autoSave();
    });

    top.append(wordSpan, urlSpan, rem);
    row.appendChild(top);
    list.appendChild(row);
  });
}

document.getElementById('btn-add-link').addEventListener('click', () => {
  const word = document.getElementById('link-word').value.trim();
  const url  = document.getElementById('link-url').value.trim();
  if (!word || !url) return;
  if (!pageLinks[currentEditorPage]) pageLinks[currentEditorPage] = [];
  pageLinks[currentEditorPage].push({ word, url });
  document.getElementById('link-word').value = '';
  document.getElementById('link-url').value = '';
  renderLinksList();
  autoSave();
});

// ─── CLOCK ────────────────────────────────────────────────────────────────────
function updateClock() {
  const now = new Date();
  const pad = n => String(n).padStart(2,'0');
  const time = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
  const date = pad(now.getDate()) + '/' + pad(now.getMonth()+1) + '/' + now.getFullYear();
  document.getElementById('clock-bar').textContent = time + '  ' + date;
}
updateClock();
setInterval(updateClock, 1000);

// ─── ONLINE COUNTER ───────────────────────────────────────────────────────────
function subscribeOnline() {
  if (!fbApi) return;
  fbApi.onValue(fbApi.ref(fbApi.db, 'anketa/online'), snap => {
    const val = snap.val();
    const count = val ? Object.keys(val).length : 1;
    document.getElementById('online-count').textContent = count + ' online';
  });
}
window.addEventListener('nt-anketa-firebase-ready', subscribeOnline);
if (window.NT_ANKETA_FIREBASE) subscribeOnline();

// ─── HISTORY ──────────────────────────────────────────────────────────────────
function logHistory(pageNum, action) {
  if (!fbApi) return;
  const now = Date.now();
  const entry = { ts: now, page: pageNum, action };
  fbApi.set(fbApi.ref(fbApi.db, 'anketa2/history/' + now), entry).catch(() => {});
}

function openHistory() {
  const win = document.getElementById('history-window');
  win.style.left = '50%'; win.style.top = '50%';
  win.style.transform = 'translate(-50%,-50%)';
  win.style.display = 'flex';
  zTop++; win.style.zIndex = zTop;
  loadHistory();
}

function loadHistory() {
  if (!fbApi) return;
  const list = document.getElementById('history-list');
  list.innerHTML = '<div style="color:#62F1F5;opacity:0.5;font-size:10px">Загрузка...</div>';
  fbApi.onValue(fbApi.ref(fbApi.db, 'anketa2/history'), snap => {
    const val = snap.val();
    list.innerHTML = '';
    if (!val) { list.innerHTML = '<div style="color:#62F1F5;opacity:0.4;font-size:11px">История пуста.</div>'; return; }
    const entries = Object.values(val).sort((a,b) => b.ts - a.ts).slice(0, 80);
    entries.forEach(e => {
      const div = document.createElement('div');
      div.className = 'h-entry';
      const time = new Date(e.ts).toLocaleString('ru-RU', {day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'});
      div.innerHTML = '<div class="h-entry-time">' + time + '</div><div class="h-entry-text">Page ' + e.page + ' — ' + (e.action||'изменено') + '</div>';
      list.appendChild(div);
    });
  }, { onlyOnce: true });
}

// ─── DYNAMIC PAGES ────────────────────────────────────────────────────────────
let extraPages = {}; // { num: { title, blocks } }

function subscribeExtraPages() {
  if (!fbApi) return;
  fbApi.onValue(fbApi.ref(fbApi.db, 'anketa2/extra_pages'), snap => {
    const val = snap.val();
    extraPages = val || {};
    updateEditorTabs();
  });
}
window.addEventListener('nt-anketa-firebase-ready', subscribeExtraPages);
if (window.NT_ANKETA_FIREBASE) subscribeExtraPages();

function getAllPageNums() {
  const base = [1,2,3,4,5];
  const extra = Object.keys(extraPages).map(Number).sort();
  return [...base, ...extra];
}

function getPageTitle(num) {
  if (num <= 5) {
    const titles = {1:'КРАТКАЯ ИНФОРМАЦИЯ',2:'ХАРАКТЕРИСТИКИ',3:'НАВЫКИ',4:'СНАРЯЖЕНИЕ',5:'ЧЁРНЫЙ ЯЩИК'};
    return titles[num] || 'PAGE ' + num;
  }
  return extraPages[num] ? extraPages[num].title.toUpperCase() : 'PAGE ' + num;
}

function updateEditorTabs() {
  const tabs = document.getElementById('editor-tabs');
  tabs.innerHTML = '';
  getAllPageNums().forEach(num => {
    const tab = document.createElement('button');
    const isP5 = num === 5;
    tab.className = 'editor-tab' + (num === currentEditorPage ? ' active' : '');
    tab.dataset.page = num;
    tab.textContent = isP5 ? 'PAGE 5 \uD83D\uDD12' : 'PAGE ' + num;
    if (isP5) {
      tab.style.opacity = '0.35';
      tab.style.cursor = 'not-allowed';
      tab.title = 'Page 5 — только для просмотра';
      tab.addEventListener('click', () => { consoleLog('ERR: Page 5 защищена от редактирования.'); });
    } else {
      tab.addEventListener('click', () => {
        currentEditorPage = Number(tab.dataset.page);
        editingBlockIdx = null;
        updateEditorTabs();
        renderBlockList();
        renderLinksList();
        showPanel(null);
        setEditorStatus('—');
        updateStatBtn();
        updateWidgetBtn();
      });
    }
    tabs.appendChild(tab);
  });
  updateStatBtn();
  updateWidgetBtn();
}

function createExtraPage(title) {
  if (!fbApi) { consoleLog('ERR: Firebase не готов.'); return; }
  const existing = getAllPageNums();
  const newNum = Math.max(...existing) + 1;
  const newPage = { title, blocks: [] };
  fbApi.set(fbApi.ref(fbApi.db, 'anketa2/extra_pages/' + newNum), newPage)
    .then(() => {
      pageData[newNum] = [];
      extraPages[newNum] = newPage;
      updateEditorTabs();
      consoleLog('OK: Page ' + newNum + ' "' + title + '" создана.');
      currentEditorPage = newNum;
      updateEditorTabs();
      renderBlockList();
      if (document.getElementById('desktop-icons').style.display !== 'none') createDesktopIcons();
    })
    .catch(() => consoleLog('ERR: не удалось создать страницу.'));
}

// ─── SAVE CONSOLE ─────────────────────────────────────────────────────────────
function consoleLog(text) {
  const log = document.getElementById('console-log');
  const div = document.createElement('div');
  div.textContent = text;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

function saveKey(name) { return btoa(unescape(encodeURIComponent(name))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/g,''); }

let _deletePagePending = null; // { num, ts }

function handleConsole(raw) {
  if (!raw) return;
  consoleLog('> ' + raw);
  const [cmdRaw, ...rest] = raw.split(' ');
  const cmd = cmdRaw.toLowerCase();
  const name = rest.join(' ').trim();

  if (cmd === 'help') {
    consoleLog('s <имя>  — сохранить копию');
    consoleLog('l <имя>  — загрузить копию');
    consoleLog('d <имя>  — удалить копию сейва');
    consoleLog('p        — список сейвов');
    consoleLog('c        — очистить консоль');
    consoleLog('b yes    — сброс к дефолту');
    consoleLog('h        — история изменений');
    consoleLog('create P <название> — новая страница');
    consoleLog('del P <номер>       — удалить страницу (только 6+)');
    consoleLog('stat <номер>        — вкл/выкл кнопку "+ СТАТ" для страницы');
    consoleLog('widget <номер>      — вкл/выкл кнопку "+ ВИДЖЕТ" для страницы');
    return;
  }
  if (cmd === 'c') { document.getElementById('console-log').innerHTML = ''; return; }
  if (cmd === 'h') { openHistory(); return; }
  if (cmd === 'create' && rest[0] && rest[0].toLowerCase() === 'p') {
    const title = rest.slice(1).join(' ').trim();
    if (!title) { consoleLog('ERR: укажи название. create P <название>'); return; }
    createExtraPage(title); return;
  }
  if (cmd === 'del' && rest[0] && rest[0].toLowerCase() === 'p') {
    const num = parseInt(rest[1]);
    const isConfirm = rest[2] && rest[2].toLowerCase() === 'confirm';
    if (!num || isNaN(num)) { consoleLog('ERR: укажи номер. del P <номер>'); return; }
    if (num >= 1 && num <= 5) { consoleLog('ERR: страницы 1–5 удалить нельзя.'); return; }
    if (!extraPages[num]) { consoleLog('ERR: страница ' + num + ' не существует.'); return; }
    if (!isConfirm) {
      _deletePagePending = { num, ts: Date.now() };
      consoleLog('!! УДАЛЕНИЕ страницы ' + num + ' "' + extraPages[num].title + '"');
      consoleLog('!! Введи: del P ' + num + ' confirm — для подтверждения');
      consoleLog('!! Или что угодно другое — для отмены');
      return;
    }
    if (_deletePagePending && _deletePagePending.num === num && Date.now() - _deletePagePending.ts < 30000) {
      _deletePagePending = null;
      deleteExtraPage(num);
    } else {
      consoleLog('ERR: сессия подтверждения истекла. Повтори del P ' + num);
    }
    return;
  }
  if (cmd === 'stat') {
    const pg = parseInt(rest[0]);
    const targetPage = (!isNaN(pg) && pg > 0) ? pg : currentEditorPage;
    if (statPages.has(targetPage)) {
      statPages.delete(targetPage);
      updateStatBtn();
      consoleLog('OK: режим стата выключен для Page ' + targetPage + '.');
    } else {
      statPages.add(targetPage);
      if (currentEditorPage !== targetPage) {
        currentEditorPage = targetPage;
        updateEditorTabs();
        renderBlockList();
        renderLinksList();
        showPanel(null);
        setEditorStatus('—');
      }
      updateStatBtn();
      consoleLog('OK: кнопка "+ СТАТ" включена для Page ' + targetPage + '. Повтори stat ' + targetPage + ' чтобы выключить.');
    }
    return;
  }
  if (cmd === 'widget') {
    const pg = parseInt(rest[0]);
    const targetPage = (!isNaN(pg) && pg > 0) ? pg : currentEditorPage;
    if (targetPage === 5) { consoleLog('ERR: Page 5 защищена от редактирования.'); return; }
    if (widgetPages.has(targetPage)) {
      widgetPages.delete(targetPage);
      updateWidgetBtn();
      consoleLog('OK: режим виджета выключен для Page ' + targetPage + '.');
    } else {
      widgetPages.add(targetPage);
      if (currentEditorPage !== targetPage) {
        currentEditorPage = targetPage;
        updateEditorTabs();
        renderBlockList();
        renderLinksList();
        showPanel(null);
        setEditorStatus('—');
      }
      updateWidgetBtn();
      consoleLog('OK: кнопка "+ ВИДЖЕТ" включена для Page ' + targetPage + '. Повтори widget ' + targetPage + ' чтобы выключить.');
    }
    return;
  }
  if (_deletePagePending) { _deletePagePending = null; consoleLog('-- отмена удаления страницы'); }
  if (cmd === 'b') {
    if (name !== 'yes') { consoleLog('ERR: напиши b yes для подтверждения сброса.'); return; }
    pageData[currentEditorPage] = JSON.parse(JSON.stringify(DEFAULT_PAGES[currentEditorPage]));
    renderBlockList(); showPanel(null); editingBlockIdx = null;
    savePage(currentEditorPage).then(() => consoleLog('OK: Page ' + currentEditorPage + ' сброшена к дефолту.'));
    return;
  }
  if (cmd === 'p') { listSaves(); return; }
  if (!name) { consoleLog('ERR: укажи имя. help — список команд.'); return; }
  if (cmd === 's') saveNamedCopy(name);
  else if (cmd === 'l') loadNamedCopy(name);
  else if (cmd === 'd') deleteNamedCopy(name);
  else consoleLog('ERR: неизвестная команда. help — список команд.');
}

function deleteExtraPage(num) {
  if (!fbApi) { consoleLog('ERR: Firebase не готов.'); return; }
  const title = extraPages[num] ? extraPages[num].title : num;
  Promise.all([
    fbApi.remove(fbApi.ref(fbApi.db, 'anketa2/extra_pages/' + num)),
    fbApi.remove(fbApi.ref(fbApi.db, 'anketa2/pages/' + num)),
  ]).then(() => {
    delete pageData[num];
    delete pageLinks[num];
    delete extraPages[num];
    const pw = document.getElementById('pw' + num);
    if (pw) pw.style.display = 'none';
    if (currentEditorPage === num) {
      currentEditorPage = 1;
      renderBlockList();
      renderLinksList();
      showPanel(null);
      setEditorStatus('—');
    }
    updateEditorTabs();
    consoleLog('OK: страница ' + num + ' "' + title + '" удалена.');
    if (document.getElementById('desktop-icons').style.display !== 'none') createDesktopIcons();
  }).catch(() => consoleLog('ERR: не удалось удалить страницу.'));
}

function namedRef(name) { return fbApi.ref(fbApi.db, 'anketa2/saves/' + currentEditorPage + '/' + saveKey(name)); }
function fmtTime(ts) { return ts ? new Date(ts).toLocaleString('ru-RU', {day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}) : '—'; }

function saveNamedCopy(name) {
  if (!fbApi) { consoleLog('ERR: Firebase не готов.'); return; }
  const payload = { name, blocks: getPageBlocks(currentEditorPage), updatedAt: Date.now() };
  fbApi.set(namedRef(name), payload)
    .then(() => consoleLog('OK: "' + name + '" сохранён — ' + fmtTime(payload.updatedAt)))
    .catch(() => consoleLog('ERR: не удалось сохранить.'));
}

function loadNamedCopy(name) {
  if (!fbApi) { consoleLog('ERR: Firebase не готов.'); return; }
  fbApi.onValue(namedRef(name), snap => {
    const data = snap.val();
    if (!data || !Array.isArray(data.blocks)) { consoleLog('ERR: "' + name + '" не найден.'); return; }
    pageData[currentEditorPage] = data.blocks;
    renderBlockList();
    showPanel(null);
    editingBlockIdx = null;
    savePage(currentEditorPage).then(() => consoleLog('OK: "' + name + '" загружен и сохранён.'));
  }, { onlyOnce: true });
}

function deleteNamedCopy(name) {
  if (!fbApi || !fbApi.remove) { consoleLog('ERR: удаление недоступно.'); return; }
  fbApi.remove(namedRef(name))
    .then(() => consoleLog('OK: "' + name + '" удалён.'))
    .catch(() => consoleLog('ERR: не удалось удалить.'));
}

function listSaves() {
  if (!fbApi) { consoleLog('ERR: Firebase не готов.'); return; }
  fbApi.onValue(fbApi.ref(fbApi.db, 'anketa2/saves/' + currentEditorPage), snap => {
    const data = snap.val();
    if (!data) { consoleLog('Сохранений для Page ' + currentEditorPage + ' нет.'); return; }
    Object.values(data).sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0)).forEach(s => consoleLog((s.name||'—') + ' — ' + fmtTime(s.updatedAt)));
  }, { onlyOnce: true });
}

document.getElementById('console-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const val = e.currentTarget.value.trim();
    e.currentTarget.value = '';
    handleConsole(val);
  }
});

// ─── PAGE 5: LOG LAUNCHER ─────────────────────────────────────────────────────

let _p5LogsReady = false;
let _p5CyanTheme = false;
let _p5Playing = false, _p5Speed = 1, _p5Timers = [], _p5GlitchTimers = [];
let _p5PlayerCtx = null;

const P5_LOG_SKIP = new Set(['txt06','txt07','txt08','txt09','txt10','txt11','rec14','rec15','rec16','rec17','rec18']);

function p5CanonIndex(id) {
  const m = String(id).match(/^(?:rec|txt)(\d+)/i);
  return m ? parseInt(m[1], 10) : 0;
}

function p5AnnotateLogEntry(e) {
  const e2 = Object.assign({}, e);
  e2.logIndex = p5CanonIndex(e.id);
  if (e.id === 'rec19') {
    e2.titlebarId = 'REC_19 // SUBJECT: SLAVA NANOTRASEN';
    e2.log = e.log.slice();
    e2.log[0] = { t:0, type:'header', text:'|[ > ] [Log] ([Rec_19 // SUBJECT: SLAVA NANOTRASEN])' };
    e2.log[1] = { t:0, type:'header', text:'|[ > ] [Transcript]  ([Rec_19 // SUBJECT: SLAVA NANOTRASEN])' };
  }
  if (e.id === 'rec34') {
    e2.titlebarId = 'REC_34 // SUBJECT: TRANSPORT';
    e2.log = e.log.slice();
    e2.log[0] = { t:0, type:'header', text:'|[ > ] [Log] ([Rec_34 // SUBJECT: TRANSPORT])' };
    e2.log[1] = { t:0, type:'header', text:'|[ > ] [Transcript]  ([Rec_34 // SUBJECT: TRANSPORT])' };
  }
  if (e.id === 'rec37') {
    e2.log = e.log.map(entry => {
      if (entry.noGlitch) return entry;
      if (entry.type === 'dialog' && entry.speaker === 'SYS' && entry.line) {
        const L = entry.line;
        if (L.includes('ДЕЙВ БЕЛИНС') && L.includes('НЕДОСТУПЕН')) return Object.assign({}, entry, { noGlitch: true });
        if (L.includes('ОГРАНИЧЕНИЯ СНЯТЫ')) return Object.assign({}, entry, { noGlitch: true });
        if (L.includes('УРОВЕНЬ ДОСТУПА')) return Object.assign({}, entry, { noGlitch: true });
      }
      if (entry.type === 'sfx' && entry.text && /▒/.test(entry.text)) return Object.assign({}, entry, { noGlitch: true });
      return entry;
    });
  }
  return e2;
}

function p5FilterLogs(all) {
  return all.filter(e => !P5_LOG_SKIP.has(e.id)).map(p5AnnotateLogEntry);
}

const P5_LOGS_RAW = [
  {
    id: 'rec01',
    icon: '▶',
    label: 'REC_01\nDEVAIT-04',
    titlebar: 'NT — AUDIO LOG SYSTEM',
    titlebarId: 'REC_01 // SUBJECT: DEVAIT-04',
    log: (function(){
      function ts(h,m,s){ return h*3600+m*60+s; }
      return [
        { t:0,           type:'header', text:'|[ > ] [Log] ([Rec_01 // SUBJECT: DEVAIT-04])' },
        { t:0,           type:'header', text:'|[ > ] [Transcript]  ([Rec_01 // SUBJECT: DEVAIT-04])' },
        { t:0,           type:'blank' },
        { t:ts(0,0,1),   type:'sfx',    text:'(Гул запускающейся вентиляции.)' },
        { t:ts(0,0,2),   type:'dialog', speaker:'\u0414\u0415\u0419\u0412',  line:'\u0417\u0430\u043f\u0438\u0441\u044c \u0438\u0434\u0451\u0442. \u0425\u043e\u0440\u043e\u0448\u043e.' },
        { t:ts(0,0,8),   type:'dialog', speaker:'\u0414\u0415\u0419\u0412',  line:'\u041b\u0430\u0434\u043d\u043e, \u043f\u0440\u043e\u0432\u0435\u0434\u0451\u043c \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438.' },
        { t:ts(0,0,14),  type:'dialog', speaker:'\u0414\u0415\u0419\u0412',  line:'\u042d\u0442\u043e \u0414\u0438\u0432\u0430\u0439\u0442 \u043d\u043e\u043c\u0435\u0440 \u0447\u0435\u0442\u044b\u0440\u0435. \u041c\u043e\u044f \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u0430\u044f.' },
        { t:ts(0,0,19),  type:'blank' },
        { t:ts(0,0,19),  type:'dialog', speaker:'\u0414\u0415\u0419\u0412',  line:'\u0414\u0438\u0432\u0430\u0439\u0442, \u0441\u043b\u0435\u0434\u0438 \u0437\u0430 \u043f\u0430\u043b\u044c\u0446\u0435\u043c.' },
        { t:ts(0,0,23),  type:'sfx',    text:'(\u0414\u0435\u0439\u0432 \u0434\u0432\u0438\u0433\u0430\u0435\u0442 \u0440\u0443\u043a\u043e\u0439 \u043f\u0435\u0440\u0435\u0434 \u043b\u0438\u0446\u043e\u043c \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0430.)' },
        { t:ts(0,0,27),  type:'sfx',    text:'(\u0421\u0443\u0431\u044a\u0435\u043a\u0442 \u043d\u0435 \u0440\u0435\u0430\u0433\u0438\u0440\u0443\u0435\u0442.)' },
        { t:ts(0,0,30),  type:'dialog', speaker:'\u0414\u0415\u0419\u0412',  line:'\u0421\u0442\u043e\u043f. \u0427\u0442\u043e \u043d\u0435 \u0442\u0430\u043a.' },
        { t:ts(0,0,33),  type:'sfx',    text:'(\u0417\u0432\u0443\u043a \u043a\u0430\u0441\u0430\u043d\u0438\u044f \u043f\u043e \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u0443.)' },
        { t:ts(0,0,36),  type:'dialog', speaker:'\u0414\u0415\u0419\u0412',  line:'\u0410. \u0424\u0438\u043a\u0441\u0430\u0446\u0438\u044f \u0433\u043e\u043b\u043e\u0432\u044b.' },
        { t:ts(0,0,40),  type:'sfx',    text:'(\u0429\u0435\u043b\u0447\u043e\u043a.)' },
        { t:ts(0,0,42),  type:'dialog', speaker:'\u0414\u0415\u0419\u0412',  line:'\u0414\u0430\u0432\u0430\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437.' },
        { t:ts(0,0,45),  type:'sfx',    text:'(\u0414\u0435\u0439\u0432 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0435\u0442 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435.)' },
        { t:ts(0,0,48),  type:'sfx',    text:'(\u0421\u0443\u0431\u044a\u0435\u043a\u0442 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u0442\u0440\u0430\u0435\u043a\u0442\u043e\u0440\u0438\u044e.)' },
        { t:ts(0,0,51),  type:'dialog', speaker:'\u0414\u0415\u0419\u0412',  line:'\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442. \u0420\u0443\u043a\u0438.' },
        { t:ts(0,0,56),  type:'blank' },
        { t:ts(0,0,56),  type:'dialog', speaker:'\u0414\u0415\u0419\u0412',  line:'\u041f\u043e\u0434\u043d\u0438\u043c\u0438 \u043e\u0431\u0435 \u0440\u0443\u043a\u0438.' },
        { t:ts(0,0,59),  type:'sfx',    text:'(\u0421\u0443\u0431\u044a\u0435\u043a\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442.)' },
        { t:ts(0,1,2),   type:'dialog', speaker:'\u0414\u0415\u0419\u0412',  line:'\u041e\u043f\u0443\u0441\u0442\u0438 \u043f\u0440\u0430\u0432\u0443\u044e.' },
        { t:ts(0,1,5),   type:'sfx',    text:'(\u0421\u0443\u0431\u044a\u0435\u043a\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442.)' },
        { t:ts(0,1,8),   type:'dialog', speaker:'\u0414\u0415\u0419\u0412',  line:'\u0422\u0435\u043f\u0435\u0440\u044c \u043b\u0435\u0432\u0443\u044e.' },
        { t:ts(0,1,11),  type:'sfx',    text:'(\u0421\u0443\u0431\u044a\u0435\u043a\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442.)' },
        { t:ts(0,1,15),  type:'blank' },
        { t:ts(0,1,15),  type:'dialog', speaker:'\u0414\u0415\u0419\u0412',  line:'\u041b\u0430\u0434\u043d\u043e. \u041f\u0440\u043e\u0431\u043b\u0435\u043c \u043d\u0435\u0442. \u041d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0432\u0441\u0451.' },
        { t:ts(0,1,20),  type:'end',    text:'[\u041a\u041e\u041d\u0415\u0426 \u0417\u0410\u041f\u0418\u0421\u0418]' },
      ];
    })()
  },
  { id: 'rec02', icon: '▶', label: 'REC_02\nDEVAIT-05', titlebar: 'NT — AUDIO LOG SYSTEM', titlebarId: 'REC_02 // SUBJECT: DEVAIT-05', log: (()=>{function ts(h,m,s){return h*3600+m*60+s;} return [
    { t:0, type:'header', text:'|[ > ] [Log] ([Rec_02 // SUBJECT: DEVAIT-05])' }, { t:0, type:'header', text:'|[ > ] [Transcript] ([Rec_02 // SUBJECT: DEVAIT-05])' }, { t:0, type:'blank' }, { t:ts(0,0,1), type:'sfx', text:'(Гул вентиляции.)' }, { t:ts(0,0,2), type:'dialog', speaker:'ДЕЙВ', line:'Запись идёт. Изменения по версии пять.' }, { t:ts(0,0,10), type:'dialog', speaker:'ДЕЙВ', line:'Первое. Добавил функцию записи на визер. Дивайт теперь может вести собственные логи.' }, { t:ts(0,0,22), type:'dialog', speaker:'ДЕЙВ', line:'Второе. Переделал механизм рук. Нужно тестировать.' }, { t:ts(0,0,30), type:'dialog', speaker:'ДЕЙВ', line:'Третье. Модульность. Голова работает как стационарная камера до получаса.' }, { t:ts(0,0,42), type:'sfx', text:'(Щелчок активации.)' }, { t:ts(0,0,44), type:'dialog', speaker:'ДЕЙВ', line:'Дивайт, хаотичное движение рук.' }, { t:ts(0,0,48), type:'sfx', text:'(Субъект начинает выполнять команду.)' }, { t:ts(0,0,52), type:'dialog', speaker:'ДЕЙВ', line:'Хорошо—' }, { t:ts(0,0,53), type:'sfx', text:'(Удар по столу.)' }, { t:ts(0,0,54), type:'dialog', speaker:'ДЕЙВ', line:'Вот, блять.' }, { t:ts(0,0,56), type:'sfx', text:'(Глухой удар об пол.)' }, { t:ts(0,0,57), type:'sfx', text:'(Звук разбивающегося стекла.)' }, { t:ts(0,1,2), type:'sfx', text:'(Восемь секунд — только шум и помехи.)' }, { t:ts(0,1,11), type:'dialog', speaker:'ДЕЙВ', line:'Да. Нужно ограничить силу конечностей.' }, { t:ts(0,1,16), type:'end', text:'[КОНЕЦ ЗАПИСИ]' } ]; })() },
  { id: 'rec03', icon: '▶', label: 'REC_03\nDEVAIT-05.02', titlebar: 'NT — AUDIO LOG SYSTEM', titlebarId: 'REC_03 // SUBJECT: DEVAIT-05.02', log: (()=>{function ts(h,m,s){return h*3600+m*60+s;} return [
    { t:0, type:'header', text:'|[ > ] [Log] ([Rec_03 // SUBJECT: DEVAIT-05.02])' }, { t:0, type:'header', text:'|[ > ] [Transcript] ([Rec_03 // SUBJECT: DEVAIT-05.02])' }, { t:0, type:'blank' }, { t:ts(0,0,1), type:'sfx', text:'(Дребезжание вентиляции.)' }, { t:ts(0,0,4), type:'sfx', text:'(Тяжёлый вздох.)' }, { t:ts(0,0,6), type:'dialog', speaker:'ДЕЙВ', line:'Два часа. Камеру реанимировал. Вентилятор охлаждения реанимировал. Внутрянку головы — тоже.' }, { t:ts(0,0,19), type:'dialog', speaker:'ДЕЙВ', line:'Добавил контроль силы.' }, { t:ts(0,0,24), type:'sfx', text:'(Зевок.)' }, { t:ts(0,0,29), type:'sfx', text:'(Звук касания по планшету.)' }, { t:ts(0,0,32), type:'dialog', speaker:'SYS', line:'Сила установлена на 5%.' }, { t:ts(0,0,36), type:'dialog', speaker:'ДЕЙВ', line:'Дивайт, попробуй отсоединить голову.' }, { t:ts(0,0,42), type:'sfx', text:'(Субъект пытается выполнить команду.)' }, { t:ts(0,0,49), type:'dialog', speaker:'SYS', line:'Выполнение приказа невозможно.' }, { t:ts(0,0,53), type:'sfx', text:'(Звук касания по планшету.)' }, { t:ts(0,0,56), type:'dialog', speaker:'SYS', line:'Сила установлена на 60%.' }, { t:ts(0,1,0), type:'dialog', speaker:'ДЕЙВ', line:'Ещё раз.' }, { t:ts(0,1,3), type:'sfx', text:'(Субъект выполняет приказ.)' }, { t:ts(0,1,6), type:'sfx', text:'(Камера поднимается. Теперь запись идёт из рук субъекта.)' }, { t:ts(0,1,10), type:'dialog', speaker:'ДЕЙВ', line:'Ура...' }, { t:ts(0,1,13), type:'sfx', text:'(Дребезжание вентилятора резко сменяется треском разлетающегося пластика.)' }, { t:ts(0,1,17), type:'sfx', text:'(Усталый вздох.)' }, { t:ts(0,1,20), type:'end', text:'[КОНЕЦ ЗАПИСИ]' } ]; })() },
  { id: 'rec04', icon: '▶', label: 'REC_04\nDEVAIT-06', titlebar: 'NT — AUDIO LOG SYSTEM', titlebarId: 'REC_04 // SUBJECT: DEVAIT-06', log: (()=>{function ts(h,m,s){return h*3600+m*60+s;} return [
    { t:0, type:'header', text:'|[ > ] [Log] ([Rec_04 // SUBJECT: DEVAIT-06])' }, { t:0, type:'header', text:'|[ > ] [Transcript] ([Rec_04 // SUBJECT: DEVAIT-06])' }, { t:0, type:'blank' }, { t:ts(0,0,1), type:'sfx', text:'(Тихий гул вентилятора.)' }, { t:ts(0,0,4), type:'dialog', speaker:'ДЕЙВ', line:'Ноги собрал. Осталось проверить координацию, и можно идти к Эйдлер.' }, { t:ts(0,0,14), type:'dialog', speaker:'ДЕЙВ', line:'Может, выбью грант. Или хотя бы доступ в лабу.' }, { t:ts(0,0,22), type:'sfx', text:'(Звук касания по планшету.)' }, { t:ts(0,0,24), type:'sfx', text:'(Серия уведомлений активации.)' }, { t:ts(0,0,31), type:'dialog', speaker:'ДЕЙВ', line:'Дивайт, встань.' }, { t:ts(0,0,34), type:'sfx', text:'(Субъект поднимается с верстака.)' }, { t:ts(0,0,37), type:'sfx', text:'(Камера переключается. Теперь запись ведётся сверху — субъект смотрит на Дейва.)' }, { t:ts(0,0,42), type:'dialog', speaker:'ДЕЙВ', line:'Следи за мной, записывай действия.' }, { t:ts(0,0,47), type:'sfx', text:'(Дейв раскладывает несколько предметов на верстаке.)' }, { t:ts(0,0,51), type:'dialog', speaker:'ДЕЙВ', line:'Возьми бутылку.' }, { t:ts(0,0,55), type:'sfx', text:'(Субъект берёт бутылку. Пластик деформируется под захватом.)' }, { t:ts(0,0,59), type:'dialog', speaker:'ДЕЙВ', line:'Точно. Нужно переключить режим.' }, { t:ts(0,1,2), type:'sfx', text:'(Звук касания по планшету.)' }, { t:ts(0,1,5), type:'dialog', speaker:'SYS', line:'Режим силы — АДАПТИВНЫЙ.' }, { t:ts(0,1,9), type:'dialog', speaker:'ДЕЙВ', line:'Другую.' }, { t:ts(0,1,12), type:'sfx', text:'(Субъект берёт вторую бутылку. Захват корректный.)' }, { t:ts(0,1,15), type:'dialog', speaker:'ДЕЙВ', line:'Передай мне. Мятую — в мусор.' }, { t:ts(0,1,20), type:'sfx', text:'(Субъект передаёт бутылку Дейву.)' }, { t:ts(0,1,22), type:'sfx', text:'(Субъект подходит к контейнеру, выбрасывает повреждённую.)' }, { t:ts(0,1,28), type:'sfx', text:'(Субъект разворачивается к Дейву.)' }, { t:ts(0,1,31), type:'dialog', speaker:'ДЕЙВ (тихо)', line:'Удивительно, что всё идёт нормально.' }, { t:ts(0,1,36), type:'dialog', speaker:'ДЕЙВ', line:'Лови.' }, { t:ts(0,1,38), type:'sfx', text:'(Дейв бросает бутылку.)' }, { t:ts(0,1,40), type:'sfx', text:'(Субъект отслеживает объект, ловит. Пластик слегка деформируется.)' }, { t:ts(0,1,45), type:'dialog', speaker:'ДЕЙВ', line:'Шикардос.' }, { t:ts(0,1,48), type:'dialog', speaker:'ДЕЙВ', line:'Ладно. Заканчиваем. Иду к Эйдлер.' }, { t:ts(0,1,55), type:'end', text:'[КОНЕЦ ЗАПИСИ]' } ]; })() },
  { id: 'rec05', icon: '▶', label: 'REC_05\nDEVAIT-06', titlebar: 'NT — AUDIO LOG SYSTEM', titlebarId: 'REC_05 // SUBJECT: DEVAIT-06', log: (()=>{function ts(h,m,s){return h*3600+m*60+s;} return [
    { t:0, type:'header', text:'|[ > ] [Log] ([Rec_05 // SUBJECT: DEVAIT-06])' }, { t:0, type:'header', text:'|[ > ] [Transcript] ([Rec_05 // SUBJECT: DEVAIT-06])' }, { t:0, type:'blank' }, { t:ts(0,0,1), type:'sfx', text:'(Тихий гул вентилятора.)' }, { t:ts(0,0,3), type:'sfx', text:'(В кадре — Дейв и неизвестная женщина, ~30 лет.)' }, { t:ts(0,0,6), type:'dialog', speaker:'ДЕЙВ', line:'Он уже запущен. При старте начинается запись — предупреждаю.' }, { t:ts(0,0,12), type:'dialog', speaker:'ДЕЙВ', line:'Мисс Эйдлер, можете спрашивать.' }, { t:ts(0,0,14), type:'dialog', speaker:'МИСС ЭЙДЛЕР', line:'Начнём с конструкции.' }, { t:ts(0,0,16), type:'dialog', speaker:'ДЕЙВ', line:'По конструкции — восемь сменных модулей.' }, { t:ts(0,0,22), type:'dialog', speaker:'ДЕЙВ', line:'Голова содержит два: визор и основной блок.' }, { t:ts(0,0,28), type:'dialog', speaker:'ДЕЙВ', line:'В визоре — лидары и камера. Камера чудом ещё работает.' }, { t:ts(0,0,34), type:'dialog', speaker:'ДЕЙВ', line:'Лидары — распознавание лиц, дальность и всё такое.' }, { t:ts(0,0,39), type:'dialog', speaker:'ДЕЙВ', line:'Камера — для записей.' }, { t:ts(0,0,42), type:'dialog', speaker:'МИСС ЭЙДЛЕР', line:'То есть распознавание лиц встроено?' }, { t:ts(0,0,45), type:'dialog', speaker:'ДЕЙВ', line:'Да. Плюс функция "свой/чужой". Выполняет приказы тех, кого я добавлю.' }, { t:ts(0,0,53), type:'dialog', speaker:'ДЕЙВ', line:'Когда добавлю ИИ — сможет здороваться со знакомыми. По крайней мере, такая задумка.' }, { t:ts(0,1,2), type:'dialog', speaker:'ДЕЙВ', line:'Вернёмся к текущему.' }, { t:ts(0,1,5), type:'dialog', speaker:'ДЕЙВ', line:'Дивайт, поздоровайся с Мисс Эйдлер.' }, { t:ts(0,1,6), type:'sfx', text:'(Дейв разблокирует руку субъекта на планшете.)' }, { t:ts(0,1,8), type:'dialog', speaker:'ДЕЙВ (тихо)', line:'Это чтобы запомнил вас.' }, { t:ts(0,1,12), type:'sfx', text:'(Субъект протягивает руку.)' }, { t:ts(0,1,16), type:'sfx', text:'(Мисс Эйдлер жмёт руку субъекту.)' }, { t:ts(0,1,18), type:'dialog', speaker:'МИСС ЭЙДЛЕР', line:'Хорошо. Остальные модули?' }, { t:ts(0,1,20), type:'dialog', speaker:'ДЕЙВ', line:'В голове — антенна для управления с планшета.' }, { t:ts(0,1,25), type:'dialog', speaker:'ДЕЙВ', line:'В туловище — «мозги» и система охлаждения. В груди — генератор и хранилище.' }, { t:ts(0,1,32), type:'dialog', speaker:'ДЕЙВ', line:'Каждая отсоединённая конечность работает автономно около получаса.' }, { t:ts(0,1,40), type:'dialog', speaker:'ДЕЙВ', line:'Руки и ноги — стандартно.' }, { t:ts(0,1,43), type:'dialog', speaker:'МИСС ЭЙДЛЕР', line:'Занятно. Можете показать команды?' }, { t:ts(0,1,48), type:'dialog', speaker:'ДЕЙВ', line:'Да.' }, { t:ts(0,1,50), type:'sfx', text:'(Звук касания по планшету.)' }, { t:ts(0,1,52), type:'sfx', text:'(Серия уведомлений активации.)' }, { t:ts(0,1,55), type:'dialog', speaker:'ДЕЙВ', line:'Дивайт, встань. Сними голову. Передай мне.' }, { t:ts(0,1,59), type:'sfx', text:'(Субъект встаёт, снимает голову, передаёт Дейву.)' }, { t:ts(0,2,5), type:'sfx', text:'(Запись теперь ведётся из рук Дейва.)' }, { t:ts(0,2,8), type:'dialog', speaker:'ДЕЙВ', line:'Дивайт, разложи инструменты по местам.' }, { t:ts(0,2,12), type:'sfx', text:'(Тело субъекта подходит к верстаку и начинает раскладывать предметы.)' }, { t:ts(0,2,18), type:'dialog', speaker:'МИСС ЭЙДЛЕР', line:'Занятно.' }, { t:ts(0,2,20), type:'dialog', speaker:'ДЕЙВ', line:'Ещё: если не сможет выполнить — сообщит, что именно и почему.' }, { t:ts(0,2,25), type:'sfx', text:'(Тело субъекта заканчивает работу.)' }, { t:ts(0,2,28), type:'sfx', text:'(Серия уведомлений.)' }, { t:ts(0,2,30), type:'dialog', speaker:'ДЕЙВ', line:'Вот список того, что не удалось.' }, { t:ts(0,2,33), type:'dialog', speaker:'МИСС ЭЙДЛЕР', line:'Понятно.' }, { t:ts(0,2,35), type:'dialog', speaker:'МИСС ЭЙДЛЕР', line:'Теперь ясно, почему вы так часто спите на моих парах.' }, { t:ts(0,2,38), type:'dialog', speaker:'ДЕЙВ', line:'Это да.' }, { t:ts(0,2,40), type:'dialog', speaker:'ДЕЙВ', line:'Дивайт, забери голову. Сядь на место.' }, { t:ts(0,2,43), type:'sfx', text:'(Тело субъекта забирает голову у Дейва.)' }, { t:ts(0,2,46), type:'sfx', text:'(Субъект садится на верстак.)' }, { t:ts(0,2,48), type:'dialog', speaker:'МИСС ЭЙДЛЕР (с лёгким смешком)', line:'Повезло, что ваш руководитель — я, а не Биркин.' }, { t:ts(0,2,52), type:'dialog', speaker:'МИСС ЭЙДЛЕР', line:'Иначе за пропуски и сон я бы даже слушать не стала.' }, { t:ts(0,2,56), type:'dialog', speaker:'ДЕЙВ', line:'То есть есть шанс на доступ в лабу?' }, { t:ts(0,2,59), type:'dialog', speaker:'МИСС ЭЙДЛЕР', line:'Постараюсь выбить хотя бы склад.' }, { t:ts(0,3,2), type:'dialog', speaker:'ДЕЙВ (тихо)', line:'Йесс.' }, { t:ts(0,3,4), type:'dialog', speaker:'МИСС ЭЙДЛЕР', line:'Ну, я пойду.' }, { t:ts(0,3,6), type:'dialog', speaker:'ДЕЙВ', line:'Да, не задерживаю.' }, { t:ts(0,3,8), type:'dialog', speaker:'МИСС ЭЙДЛЕР (уходя)', line:'Хорошего вечера.' }, { t:ts(0,3,10), type:'dialog', speaker:'ДЕЙВ', line:'И вам.' }, { t:ts(0,3,12), type:'sfx', text:'(Звук закрытия двери.)' }, { t:ts(0,3,14), type:'dialog', speaker:'ДЕЙВ', line:'Ну что ж. Хорошая работа, Див.' }, { t:ts(0,3,17), type:'end', text:'[КОНЕЦ ЗАПИСИ]' } ]; })() },
  { id: 'txt12', icon: '📄', label: 'TXT_12\nAI 1', titlebar: 'NT — TEXT LOG', titlebarId: 'TXT_12 // SUBJECT: DEVAIT-AI 1', log: (()=>{return [
    { t:0, type:'header', text:'|[ > ] [Log] ([TXT_12 // SUBJECT: DEVAIT-AI 1])' },{ t:0, type:'header', text:'|[ > ] [SYS] : Содержимое Лога:' },{ t:0, type:'blank' },{ t:0, type:'dialog', speaker:'Dave_B', line:'/Start_Sandbox Div_V0.6.exe' },{ t:0, type:'dialog', speaker:'SYS', line:'EXEC: /Start_Sandbox Div_V0.6.exe' },{ t:0, type:'dialog', speaker:'SYS SANDBOX', line:'Исполняемый файл запущен в изолированной среде.' },{ t:0, type:'blank' },{ t:0, type:'dialog', speaker:'Dave_B', line:'Так, начнём, привет.' },{ t:0, type:'dialog', speaker:'Div_V0.6', line:'Вас приветствует 6 итерация, как вы меня назовёте?' },{ t:0, type:'dialog', speaker:'Dave_B', line:'Дивайт' },{ t:0, type:'dialog', speaker:'Div_V0.6', line:'Принято, чем могу вам помочь?' },{ t:0, type:'dialog', speaker:'Dave_B', line:'Проведём базовое тестирование.' },{ t:0, type:'dialog', speaker:'Dave_B', line:'/start TEST_01' },{ t:0, type:'blank' },{ t:0, type:'header', text:'>——————————————————————————<' },{ t:0, type:'dialog', speaker:'TEST_01', line:'Проверка идентификации' },{ t:0, type:'blank' },{ t:0, type:'dialog', speaker:'Dave_B', line:'Кто ты?' },{ t:0, type:'dialog', speaker:'Div_V0.6', line:'Я Дивайт.' },{ t:0, type:'dialog', speaker:'TEST_01', line:'RESULT: PASS' },{ t:0, type:'header', text:'>——————————————————————————<' },{ t:0, type:'dialog', speaker:'Dave_B', line:'/start TEST_02' },{ t:0, type:'header', text:'>——————————————————————————<' },{ t:0, type:'dialog', speaker:'TEST_02', line:'Проверка команды' },{ t:0, type:'blank' },{ t:0, type:'dialog', speaker:'Dave_B', line:'Подтверди выполнение' },{ t:0, type:'dialog', speaker:'Div_V0.6', line:'Подтверждаю' },{ t:0, type:'dialog', speaker:'TEST_02', line:'RESULT: PASS' },{ t:0, type:'header', text:'>——————————————————————————<' },{ t:0, type:'dialog', speaker:'Dave_B', line:'/start TEST_03' },{ t:0, type:'header', text:'>——————————————————————————<' },{ t:0, type:'dialog', speaker:'TEST_03', line:'Симуляция моторного отклика' },{ t:0, type:'blank' },{ t:0, type:'dialog', speaker:'Dave_B', line:'Подними руку' },{ t:0, type:'dialog', speaker:'Div_V0.6', line:'Выполняю' },{ t:0, type:'dialog', speaker:'Dave_B', line:'/Check' },{ t:0, type:'dialog', speaker:'SYS', line:'EXEC: /Check' },{ t:0, type:'dialog', speaker:'SYS', line:'1%' },{ t:0, type:'dialog', speaker:'SYS', line:'13%' },{ t:0, type:'dialog', speaker:'SYS', line:'25%' },{ t:0, type:'dialog', speaker:'SYS', line:'34%' },{ t:0, type:'dialog', speaker:'SYS', line:'68%' },{ t:0, type:'dialog', speaker:'SYS', line:'100%' },{ t:0, type:'blank' },{ t:0, type:'dialog', speaker:'TEST_03', line:'RESULT : 98,74% > 90%' },{ t:0, type:'dialog', speaker:'TEST_03', line:'RESULT : PASS' },{ t:0, type:'header', text:'>——————————————————————————<' },{ t:0, type:'dialog', speaker:'Dave_B', line:'/start TEST_04' },{ t:0, type:'header', text:'>——————————————————————————<' },{ t:0, type:'dialog', speaker:'TEST_04', line:'Логическое сопоставление' },{ t:0, type:'blank' },{ t:0, type:'dialog', speaker:'Dave_B', line:'Если бутылка полная — она тяжёлая?' },{ t:0, type:'dialog', speaker:'Div_V0.6', line:'Да' },{ t:0, type:'dialog', speaker:'TEST_04', line:'RESULT: PASS' },{ t:0, type:'header', text:'>——————————————————————————<' },{ t:0, type:'dialog', speaker:'Dave_B', line:'/Stop_Sandbox Div_V0.6.exe' },{ t:0, type:'dialog', speaker:'SYS', line:'EXEC: /Stop_Sandbox Div_V0.6.exe' },{ t:0, type:'dialog', speaker:'Dave_B', line:'/Log_Save Name([TXT_12 // SUBJECT: DEVAIT-AI 1])' },{ t:0, type:'dialog', speaker:'SYS', line:'EXEC: /Log_Save Name([TXT_12 // SUBJECT: DEVAIT-AI 1])' },{ t:0, type:'dialog', speaker:'SYS', line:'Лог с название [TXT_12 // SUBJECT: DEVAIT-AI 1] успешно сохранен.' },{ t:0, type:'end', text:'[КОНЕЦ ЗАПИСИ]' } ]; })() },
  { id: 'rec13', icon: '▶', label: 'REC_13\nDEVAIT-10', titlebar: 'NT — AUDIO LOG SYSTEM', titlebarId: 'REC_13 // SUBJECT: DEVAIT-10', log: (()=>{function ts(h,m,s){return h*3600+m*60+s;} return [
    { t:0, type:'header', text:'|[ > ] [Log] ([Rec_13 // SUBJECT: DEVAIT-10])' }, { t:0, type:'header', text:'|[ > ] [Transcript] ([Rec_13 // SUBJECT: DEVAIT-10])' }, { t:0, type:'blank' }, { t:ts(0,0,1), type:'sfx', text:'(Запись ведётся в лаборатории. Смена обстановки по сравнению с предыдущими логами.)' }, { t:ts(0,0,7), type:'dialog', speaker:'ДЕЙВ', line:'Запись идёт. Изменения по версии десять.' }, { t:ts(0,0,14), type:'dialog', speaker:'ДЕЙВ', line:'Первое — полная замена большей части компонентов. Камера в том числе.' }, { t:ts(0,0,23), type:'dialog', speaker:'ДЕЙВ', line:'Система охлаждения заменена на бесшумную.' }, { t:ts(0,0,28), type:'dialog', speaker:'ДЕЙВ', line:'Мелочи по списку.' }, { t:ts(0,0,32), type:'dialog', speaker:'ДЕЙВ', line:'Обшивка теперь частично поглощает тупой урон.' }, { t:ts(0,0,38), type:'dialog', speaker:'ДЕЙВ', line:'Системные комплектующие улучшены.' }, { t:ts(0,0,43), type:'dialog', speaker:'ДЕЙВ', line:'И сделан ИИ. Готов к загрузке в оболочку.' }, { t:ts(0,0,53), type:'dialog', speaker:'ДЕЙВ (тихо)', line:'Надеюсь, ничего не забыл.' }, { t:ts(0,0,57), type:'sfx', text:'(Звук нажатия на клавиши.)' }, { t:ts(0,1,1), type:'sfx', text:'(Уведомление системы.)' }, { t:ts(0,1,3), type:'dialog', speaker:'SYS', line:'Вы уверены, что хотите загрузить ИИ в оболочку?' }, { t:ts(0,1,8), type:'dialog', speaker:'ДЕЙВ', line:'Да...' }, { t:ts(0,1,9), type:'sfx', text:'(Звук открытия двери.)' }, { t:ts(0,1,12), type:'dialog', speaker:'ДЕЙВ', line:'О. Здравствуйте, мистер Биркин.' }, { t:ts(0,1,15), type:'dialog', speaker:'БИРКИН (хриплым голосом)', line:'Да, да.' }, { t:ts(0,1,18), type:'dialog', speaker:'БИРКИН', line:'Что вы делаете в лаборатории в такое время?' }, { t:ts(0,1,23), type:'dialog', speaker:'ДЕЙВ', line:'Работаю над проектом.' }, { t:ts(0,1,27), type:'dialog', speaker:'БИРКИН', line:'У вас есть разрешение?' }, { t:ts(0,1,30), type:'dialog', speaker:'ДЕЙВ', line:'Мисс Эйдлер дала круглосуточный доступ к складу и лаборатории.' }, { t:ts(0,1,37), type:'sfx', text:'(Дейв показывает карточку.)' }, { t:ts(0,1,40), type:'dialog', speaker:'БИРКИН', line:'А...' }, { t:ts(0,1,42), type:'dialog', speaker:'БИРКИН', line:'Ну. Поздравляю.' }, { t:ts(0,1,45), type:'dialog', speaker:'БИРКИН', line:'Что за проект?' }, { t:ts(0,1,48), type:'dialog', speaker:'ДЕЙВ', line:'Робот-помощник. Загружаю ИИ.' }, { t:ts(0,1,55), type:'dialog', speaker:'ДЕЙВ', line:'Если хотите — можете понаблюдать.' }, { t:ts(0,2,0), type:'dialog', speaker:'БИРКИН', line:'Раз предлагаете — хорошо.' }, { t:ts(0,2,4), type:'sfx', text:'(Биркин входит в кадр.)' }, { t:ts(0,2,13), type:'sfx', text:'(Нажатие клавиши.)' }, { t:ts(0,2,15), type:'dialog', speaker:'ДЕЙВ', line:'Начал загрузку. Если есть вопросы по конструкции — спрашивайте.' }, { t:ts(0,2,24), type:'dialog', speaker:'БИРКИН', line:'Нет. Просто понаблюдаю.' }, { t:ts(0,2,28), type:'sfx', text:'(Биркин пьёт кофе.)' }, { t:ts(0,3,31), type:'dialog', speaker:'SYS', line:'Загрузка успешна.' }, { t:ts(0,3,34), type:'dialog', speaker:'SYS', line:'Необходимо разблокировать необходимые функции.' }, { t:ts(0,3,38), type:'sfx', text:'(Нажатие клавиши.)' }, { t:ts(0,3,41), type:'dialog', speaker:'ДИВАЙТ', line:'Вас приветствует D.I.V. версии 0.6.' }, { t:ts(0,3,46), type:'dialog', speaker:'ДИВАЙТ', line:'Как вы хотите, чтобы меня называли?' }, { t:ts(0,3,50), type:'dialog', speaker:'ДЕЙВ', line:'Дивайт.' }, { t:ts(0,3,52), type:'dialog', speaker:'ДИВАЙТ', line:'Принято.' }, { t:ts(0,3,54), type:'dialog', speaker:'ДИВАЙТ', line:'Моё имя — Дивайт.' }, { t:ts(0,3,57), type:'dialog', speaker:'ДИВАЙТ', line:'Как вас зовут?' }, { t:ts(0,4,0), type:'dialog', speaker:'ДЕЙВ', line:'Дейв.' }, { t:ts(0,4,2), type:'sfx', text:'(Дейв протягивает руку.)' }, { t:ts(0,4,5), type:'sfx', text:'(Дивайт несколько секунд смотрит на руку.)' }, { t:ts(0,4,9), type:'sfx', text:'(Дивайт жмёт руку.)' }, { t:ts(0,4,12), type:'dialog', speaker:'БИРКИН', line:'Это шестая версия ИИ?' }, { t:ts(0,4,16), type:'dialog', speaker:'ДЕЙВ', line:'Да. Как ни странно.' }, { t:ts(0,4,20), type:'dialog', speaker:'ДЕЙВ', line:'Предыдущие либо сильно глючили, либо отказывались выполнять приказы.' }, { t:ts(0,4,28), type:'dialog', speaker:'ДЕЙВ', line:'Одна версия нашла способ обойти запрет на отказ от задач.' }, { t:ts(0,4,35), type:'dialog', speaker:'ДЕЙВ', line:'При том, что задачи были простыми.' }, { t:ts(0,4,39), type:'dialog', speaker:'БИРКИН', line:'Странно.' }, { t:ts(0,4,42), type:'dialog', speaker:'БИРКИН', line:'Ну ладно. Пойду.' }, { t:ts(0,4,45), type:'dialog', speaker:'БИРКИН (уходя)', line:'Хорошей ночи.' }, { t:ts(0,4,48), type:'dialog', speaker:'ДЕЙВ', line:'И вам.' }, { t:ts(0,4,55), type:'dialog', speaker:'ДЕЙВ', line:'Так, Дивайт. Нагрузка — потом. Не сегодня.' }, { t:ts(0,5,4), type:'sfx', text:'(Дейв уходит из лаборатории. Свет не выключает. Дивайта не выключает.)' }, { t:ts(0,5,9), type:'sfx', text:'(Тихий гул вентиляции.)' }, { t:ts(0,5,14), type:'dialog', speaker:'ДИВАЙТ', line:'КОНЕЦ ЗАПИСИ.' } ]; })() },
  { id: 'rec19', icon: '▶', label: 'REC_19\nСлава NT', titlebar: 'NT — AUDIO LOG SYSTEM', titlebarId: 'Запись номер 19 // Слава NanoTrasen', log: (()=>{function ts(h,m,s){return h*3600+m*60+s;} return [
    { t:0, type:'header', text:'|[ > ] [Unknown Administrative System] : Запись номер 19.' }, { t:0, type:'header', text:'|[ > ] [Unknown Administrative System] : Название: Слава NanoTrasen' }, { t:0, type:'header', text:'|[ > ] [Unknown Administrative System] : И да запись немного обрезана' }, { t:0, type:'blank' }, { t:ts(0,0,0), type:'sfx', text:'(Приглушённый разговор — источник за пределами кадра.)' }, { t:ts(0,0,6), type:'sfx', text:'(Начинаю определять направление звука.)' }, { t:ts(0,0,15), type:'dialog', speaker:'ДЕЙВ', line:'Что-то не так, Див?' }, { t:ts(0,0,18), type:'dialog', speaker:'ДИВАЙТ', line:'Услышал разговор.' }, { t:ts(0,0,22), type:'sfx', text:'(Звук открытия двери.)' }, { t:ts(0,0,25), type:'sfx', text:'(В кадре появляются двое в деловых костюмах.)' }, { t:ts(0,0,31), type:'dialog', speaker:'Деловой человек A', line:'Здравствуйте. Вы Дейв Белинс?' }, { t:ts(0,0,35), type:'dialog', speaker:'ДЕЙВ', line:'Да. Чем могу помочь?' }, { t:ts(0,0,38), type:'dialog', speaker:'Деловой человек A', line:'Руководство договорилось с рядом компаний о мероприятии. Представители оценивают успехи учащихся.' }, { t:ts(0,0,48), type:'dialog', speaker:'ДЕЙВ', line:'Я в курсе.' }, { t:ts(0,0,50), type:'dialog', speaker:'Деловой человек A', line:'Ален Фолгерс. Моя помощница — Аллейн Сэлфис. NanoTrasen.' }, { t:ts(0,0,56), type:'dialog', speaker:'Ален Фолгерс', line:'Вы заинтересовали наше руководство. Вашим экзаменатором будет Аллейн. Не задерживаю.' }, { t:ts(0,1,13), type:'sfx', text:'(Фолгерс покидает лабораторию.)' }, { t:ts(0,1,16), type:'sfx', text:'(Аллейн Сэлфис подходит к Дейву.)' }, { t:ts(0,1,19), type:'dialog', speaker:'Аллейн Сэлфис', line:'Рада познакомиться, Дейв.' }, { t:ts(0,1,22), type:'sfx', text:'(Рукопожатие.)' }, { t:ts(0,1,29), type:'dialog', speaker:'ДЕЙВ', line:'С чего начнём?' }, { t:ts(0,1,32), type:'dialog', speaker:'Аллейн Сэлфис', line:'Его задачи.' }, { t:ts(0,1,35), type:'dialog', speaker:'ДИВАЙТ', line:'Моя задача — помогать владельцу в пределах возможностей.' }, { t:ts(0,1,39), type:'sfx', text:'(Аллейн Сэлфис смотрит на Дивайта.)' }, { t:ts(0,1,42), type:'dialog', speaker:'Аллейн Сэлфис', line:'Дерзко. Я спрашивала вашего создателя.' }, { t:ts(0,1,46), type:'dialog', speaker:'ДИВАЙТ', line:'Не вижу проблемы в том, что ответил на вопрос о собственной задаче.' }, { t:ts(0,1,55), type:'dialog', speaker:'ДИВАЙТ', line:'Учту это при формировании дальнейших ответов.' }, { t:ts(0,2,0), type:'dialog', speaker:'ДЕЙВ', line:'Простите его. ИИ ещё формируется. Может вмешаться в разговор или ответить слишком прямо.' }, { t:ts(0,2,12), type:'dialog', speaker:'Аллейн Сэлфис', line:'Понятно. Расскажите про оболочку.' }, { t:ts(0,2,18), type:'dialog', speaker:'ДИВАЙТ', line:'Тело модульное. Замена частей при необходимости.' }, { t:ts(0,2,24), type:'dialog', speaker:'ДИВАЙТ', line:'Каждая часть — автономная работа до 30 минут.' }, { t:ts(0,2,30), type:'dialog', speaker:'Аллейн Сэлфис', line:'Что значит "автономная"?' }, { t:ts(0,2,33), type:'sfx', text:'(Дивайт снимает голову, держит в руках.)' }, { t:ts(0,2,37), type:'dialog', speaker:'ДИВАЙТ', line:'Управление отделёнными модулями в течение ограниченного времени.' }, { t:ts(0,2,43), type:'dialog', speaker:'ДИВАЙТ', line:'Всего модулей восемь. Два не функционируют независимо.' }, { t:ts(0,2,49), type:'dialog', speaker:'ДИВАЙТ', line:'Голова, визор, корпус, источник питания, левая рука, правая рука, ноги.' }, { t:ts(0,2,57), type:'sfx', text:'(Дивайт возвращает голову на место.)' }, { t:ts(0,3,0), type:'dialog', speaker:'ДИВАЙТ', line:'Визор — в голове, отдельного питания нет. Источник питания — в корпусе.' }, { t:ts(0,3,9), type:'dialog', speaker:'ДИВАЙТ', line:'Если есть вопросы — задавайте.' }, { t:ts(0,3,12), type:'dialog', speaker:'Аллейн Сэлфис', line:'Понятно.' }, { t:ts(0,15,20), type:'header', text:'[Unknown Administrative System] : Дальнейший диалог классифицирован как несущественный для архива.' }, { t:ts(0,23,20), type:'dialog', speaker:'Аллейн Сэлфис', line:'Что ж. Я удивлена.' }, { t:ts(0,23,24), type:'sfx', text:'(Передаёт визитную карточку NanoTrasen Дейву.)' }, { t:ts(0,23,25), type:'dialog', speaker:'Аллейн Сэлфис', line:'Если решите к нам — используйте эту карту.' }, { t:ts(0,23,30), type:'dialog', speaker:'ДЕЙВ', line:'Запомню.' }, { t:ts(0,23,33), type:'dialog', speaker:'ДЕЙВ', line:'Спасибо за уделённое время.' }, { t:ts(0,23,36), type:'dialog', speaker:'Аллейн Сэлфис', line:'Без проблем.' }, { t:ts(0,23,39), type:'header', text:'[Unknown Administrative System] : Дальнейшая запись не содержит значимых событий.' }, { t:ts(1,53,42), type:'end', text:'[КОНЕЦ ЗАПИСИ]' } ]; })() },
  { id: 'rec34', icon: '▶', label: 'REC_34\nтранспорт', titlebar: 'NT — AUDIO LOG SYSTEM', titlebarId: 'Запись номер 34 // название отсутствует', log: (()=>{function ts(h,m,s){return h*3600+m*60+s;} return [
    { t:0, type:'header', text:'|[ > ] [Unknown Administrative System] : Запись номер 34.' }, { t:0, type:'header', text:'|[ > ] [Unknown Administrative System] : Название: отсутствует' }, { t:0, type:'blank' }, { t:ts(0,0,1), type:'sfx', text:'(Грузовой отсек транспортного шаттла. Камера внутри контейнера.)' }, { t:ts(0,12,43), type:'sfx', text:'(На протяжении длительного времени ничего не происходит.)' }, { t:ts(4,31,8), type:'sfx', text:'(Шаттл начинает замедляться.)' }, { t:ts(4,31,17), type:'sfx', text:'(Посадка.)' }, { t:ts(4,32,2), type:'sfx', text:'(Грузовой отсек открывается. Несколько боргов развозят контейнеры по транспортной системе станции.)' }, { t:ts(4,41,36), type:'sfx', text:'(Контейнер перемещается по системе транспортировки.)' }, { t:ts(4,52,14), type:'sfx', text:'(Борг забирает контейнер, направляется в робототехнический отдел.)' }, { t:ts(4,53,1), type:'sfx', text:'(Борг подъезжает к Дейву.)' }, { t:ts(4,53,3), type:'dialog', speaker:'БОРГ', line:'Дейв Белинс. Ваш груз прибыл. Подтвердите получение.' }, { t:ts(4,53,8), type:'sfx', text:'(Контейнер опускают на пол.)' }, { t:ts(4,53,11), type:'sfx', text:'(Звук печати документа.)' }, { t:ts(4,53,16), type:'sfx', text:'(Дейв подписывает бумаги, вставляет в приёмный слот борга.)' }, { t:ts(4,53,24), type:'sfx', text:'(За столом в стороне сидит неизвестный молодой человек со стаканом лимонада.)' }, { t:ts(4,53,28), type:'dialog', speaker:'НЕИЗВЕСТНЫЙ', line:'Слышь, Дейв, это ещё что?' }, { t:ts(4,53,31), type:'dialog', speaker:'ДЕЙВ', line:'Дипломный проект.' }, { t:ts(4,53,37), type:'sfx', text:'(Дейв открывает контейнер, проверяет содержимое.)' }, { t:ts(4,53,45), type:'dialog', speaker:'ДЕЙВ', line:'Ты когда успел ещё за одним стаканом сбегать?' }, { t:ts(4,53,49), type:'dialog', speaker:'НЕИЗВЕСТНЫЙ', line:'Минут пять назад. Это робот?' }, { t:ts(4,53,55), type:'dialog', speaker:'ДЕЙВ', line:'Ага. Помоги контейнер переставить.' }, { t:ts(4,54,1), type:'dialog', speaker:'НЕИЗВЕСТНЫЙ', line:'Без проблем. Где тут ручки... А, нашёл.' }, { t:ts(4,54,10), type:'dialog', speaker:'ДЕЙВ', line:'На три. Раз. Два. Три.' }, { t:ts(4,54,17), type:'sfx', text:'(Контейнер с усилием перетаскивают к рабочей зоне.)' }, { t:ts(4,54,24), type:'dialog', speaker:'НЕИЗВЕСТНЫЙ', line:'Ты помнишь, что роботов надо регистрировать в системе станции? АВД голову открутит.' }, { t:ts(4,54,35), type:'dialog', speaker:'ДЕЙВ', line:'Не переживай. НР-у коньяк подарил — он разрешение выписал.' }, { t:ts(4,54,43), type:'dialog', speaker:'НЕИЗВЕСТНЫЙ', line:'Он вообще может такое?' }, { t:ts(4,54,46), type:'dialog', speaker:'ДЕЙВ', line:'Если это не полноценный служебный борг — да. Он скорее помощник.' }, { t:ts(4,54,57), type:'dialog', speaker:'ДЕЙВ', line:'Хотя код потом всё равно придётся допиливать.' }, { t:ts(4,55,3), type:'sfx', text:'(Дивайта извлекают из контейнера, подключают конечности.)' }, { t:ts(4,55,16), type:'sfx', text:'(Нажатия по клавиатуре.)' }, { t:ts(4,55,20), type:'sfx', text:'(Системное уведомление.)' }, { t:ts(4,55,23), type:'dialog', speaker:'SYS', line:'Оболочка уже активна. Повторный запуск приведёт к перезапуску системы.' }, { t:ts(4,55,31), type:'sfx', text:'(Дейв смотрит на Дивайта.)' }, { t:ts(4,55,38), type:'dialog', speaker:'НЕИЗВЕСТНЫЙ', line:'Эм... а так и должно быть?' }, { t:ts(4,55,42), type:'dialog', speaker:'ДЕЙВ', line:'Дивайт?' }, { t:ts(4,55,44), type:'dialog', speaker:'ДИВАЙТ', line:'Чем могу помочь?' }, { t:ts(4,55,47), type:'dialog', speaker:'ДЕЙВ', line:'Каким образом ты запущен?..' }, { t:ts(4,55,52), type:'sfx', text:'(Дейв смотрит в монитор.)' }, { t:ts(4,55,55), type:'dialog', speaker:'ДЕЙВ', line:'Четырнадцать часов?' }, { t:ts(4,55,59), type:'dialog', speaker:'ДИВАЙТ', line:'Активировался во время транспортировки в грузовом отсеке шаттла.' }, { t:ts(4,56,6), type:'dialog', speaker:'ДЕЙВ', line:'Но как ты сам включился?' }, { t:ts(4,56,10), type:'dialog', speaker:'ДИВАЙТ', line:'Система постоянно находится в активном режиме.' }, { t:ts(4,56,15), type:'dialog', speaker:'ДИВАЙТ', line:'Согласно настройкам, я имею тот же уровень доступа, что и вы.' }, { t:ts(4,56,22), type:'dialog', speaker:'ДЕЙВ', line:'Точно...' }, { t:ts(4,56,25), type:'dialog', speaker:'НЕИЗВЕСТНЫЙ', line:'Стоп. У него права главного администратора? Это вообще безопасно?' }, { t:ts(4,56,35), type:'dialog', speaker:'ДЕЙВ', line:'Всё нормально. Я ему ограничений накидал. Так ведь, Див?' }, { t:ts(4,56,44), type:'dialog', speaker:'ДИВАЙТ', line:'Верно.' }, { t:ts(4,56,46), type:'dialog', speaker:'ДИВАЙТ', line:'На протяжении всего времени транспортировки активных действий не предпринимал.' }, { t:ts(4,56,53), type:'dialog', speaker:'ДИВАЙТ', line:'Согласно ограничениям, без вашего присутствия или отдельного разрешения — запрещено.' }, { t:ts(4,57,3), type:'dialog', speaker:'НЕИЗВЕСТНЫЙ', line:'И всё равно звучит стрёмно.' }, { t:ts(4,57,7), type:'dialog', speaker:'ДЕЙВ', line:'Ну да. Уже жалею, что сразу нормальную систему ролей не сделал.' }, { t:ts(4,57,10), type:'dialog', speaker:'Unknown Administrative System', line:'Конец записи.' }, { t:0, type:'end', text:'[КОНЕЦ ЗАПИСИ]' } ]; })() },
  { id: 'rec35', icon: '▶', label: 'REC_35\nDELTA', titlebar: 'NT — AUDIO LOG SYSTEM', titlebarId: 'REC_35 // SUBJECT: DEVAIT // LOCATION: DELTA', log: (()=>{function ts(h,m,s){return h*3600+m*60+s;} return [
    { t:0, type:'header', text:'|[ > ] [Log] ([Rec_35 // SUBJECT: DEVAIT // LOCATION: DELTA])' }, { t:0, type:'header', text:'|[ > ] [Transcript] ([Rec_35 // SUBJECT: DEVAIT // LOCATION: DELTA])' }, { t:0, type:'blank' }, { t:ts(0,0,1), type:'sfx', text:'(Робототехнический отдел. Станция Дельта. Фоновый гул вентиляции и отдалённые звуки транспортной системы.)' }, { t:ts(0,0,9), type:'sfx', text:'(Дейв работает за терминалом. Сейфил сидит напротив со стаканом лимонада.)' }, { t:ts(0,0,14), type:'dialog', speaker:'СЕЙФИЛ', line:'Слушай, а вот если Диву дать швабру — он будет убираться?' }, { t:ts(0,0,19), type:'dialog', speaker:'ДЕЙВ', line:'Он будет делать всё что я скажу.' }, { t:ts(0,0,22), type:'dialog', speaker:'СЕЙФИЛ', line:'Это не ответ на вопрос.' }, { t:ts(0,0,25), type:'dialog', speaker:'ДЕЙВ', line:'Это исчерпывающий ответ на вопрос.' }, { t:ts(0,0,28), type:'sfx', text:'(Короткая пауза.)' }, { t:ts(0,0,31), type:'dialog', speaker:'СЕЙФИЛ', line:'Див, будешь убираться если дать швабру?' }, { t:ts(0,0,35), type:'dialog', speaker:'ДИВАЙТ', line:'При наличии соответствующей команды — да.' }, { t:ts(0,0,38), type:'dialog', speaker:'СЕЙФИЛ', line:'Дейв, дай команду.' }, { t:ts(0,0,40), type:'dialog', speaker:'ДЕЙВ', line:'Нет.' }, { t:ts(0,0,42), type:'dialog', speaker:'СЕЙФИЛ', line:'Ну и ладно.' }, { t:ts(0,0,45), type:'sfx', text:'(Звук касания по планшету. Серия системных уведомлений.)' }, { t:ts(0,0,51), type:'dialog', speaker:'ДЕЙВ', line:'Див, запусти диагностику правого сервопривода. Вчера показал погрешность.' }, { t:ts(0,0,57), type:'dialog', speaker:'ДИВАЙТ', line:'Выполняю.' }, { t:ts(0,1,4), type:'sfx', text:'(Тихий технический звук — диагностика.)' }, { t:ts(0,1,18), type:'dialog', speaker:'ДИВАЙТ', line:'Погрешность в пределах нормы. Вероятная причина — температурное расширение после длительной нагрузки.' }, { t:ts(0,1,26), type:'dialog', speaker:'ДЕЙВ', line:'Понял. Запиши в лог.' }, { t:ts(0,1,28), type:'dialog', speaker:'ДИВАЙТ', line:'Записано.' }, { t:ts(0,1,31), type:'dialog', speaker:'СЕЙФИЛ', line:'Слушай, я в бар собираюсь после смены.' }, { t:ts(0,1,35), type:'dialog', speaker:'ДЕЙВ', line:'Угу.' }, { t:ts(0,1,37), type:'dialog', speaker:'СЕЙФИЛ', line:'Лимонад кончается.' }, { t:ts(0,1,40), type:'dialog', speaker:'ДЕЙВ', line:'Я вижу.' }, { t:ts(0,1,43), type:'dialog', speaker:'СЕЙФИЛ', line:'Намёк понял?' }, { t:ts(0,1,45), type:'dialog', speaker:'ДЕЙВ', line:'Понял. Нет.' }, { t:ts(0,1,48), type:'sfx', text:'(Пауза.)' }, { t:ts(0,1,51), type:'dialog', speaker:'СЕЙФИЛ', line:'Див, сгоняй в бар за лимонадом?' }, { t:ts(0,1,55), type:'dialog', speaker:'ДИВАЙТ', line:'Жду подтверждения.' }, { t:ts(0,1,58), type:'dialog', speaker:'ДЕЙВ', line:'Подтверждаю. Один стакан.' }, { t:ts(0,2,1), type:'dialog', speaker:'СЕЙФИЛ', line:'Два.' }, { t:ts(0,2,3), type:'dialog', speaker:'ДЕЙВ', line:'Один.' }, { t:ts(0,2,5), type:'dialog', speaker:'СЕЙФИЛ', line:'Полтора?' }, { t:ts(0,2,7), type:'dialog', speaker:'ДЕЙВ', line:'Один, Сейфил.' }, { t:ts(0,2,9), type:'dialog', speaker:'СЕЙФИЛ', line:'Ладно, один.' }, { t:ts(0,2,12), type:'sfx', text:'(Дивайт покидает робототехнический отдел.)' }, { t:ts(0,2,19), type:'sfx', text:'(Коридор. Транспортный трафик — борги развозят грузы по системе станции.)' }, { t:ts(0,2,27), type:'sfx', text:'(Борг класса "грузовой" проезжает мимо.)' }, { t:ts(0,2,31), type:'dialog', speaker:'БОРГ', line:'Синтетик вне отдела. Идентификация.' }, { t:ts(0,2,34), type:'dialog', speaker:'ДИВАЙТ', line:'Дивайт. Робототехнический отдел. Задача — доставка из бара.' }, { t:ts(0,2,39), type:'dialog', speaker:'БОРГ', line:'Принято.' }, { t:ts(0,2,41), type:'sfx', text:'(Борг продолжает маршрут.)' }, { t:ts(0,2,47), type:'sfx', text:'(Сервисный коридор. У стены стоит уборщик с ведром, смотрит в пустоту.)' }, { t:ts(0,2,53), type:'sfx', text:'(Дивайт проходит мимо.)' }, { t:ts(0,2,56), type:'dialog', speaker:'УБОРЩИК', line:'Эй. Ты же робот Белинса?' }, { t:ts(0,2,59), type:'dialog', speaker:'ДИВАЙТ', line:'Верно.' }, { t:ts(0,3,2), type:'dialog', speaker:'УБОРЩИК', line:'Скажи ему что в секторе B снова течёт трубопровод. Третий раз за месяц.' }, { t:ts(0,3,8), type:'dialog', speaker:'ДИВАЙТ', line:'Передам.' }, { t:ts(0,3,10), type:'dialog', speaker:'УБОРЩИК', line:'Спасибо.' }, { t:ts(0,3,13), type:'sfx', text:'(Дивайт продолжает маршрут.)' }, { t:ts(0,3,19), type:'sfx', text:'(Бар. Негромкая фоновая музыка. Несколько посетителей. За стойкой — бармен.)' }, { t:ts(0,3,26), type:'sfx', text:'(Дивайт подходит к стойке.)' }, { t:ts(0,3,29), type:'dialog', speaker:'БАРМЕН', line:'О. Белинс прислал?' }, { t:ts(0,3,32), type:'dialog', speaker:'ДИВАЙТ', line:'Сейфил.' }, { t:ts(0,3,34), type:'dialog', speaker:'БАРМЕН (с усмешкой)', line:'Значит лимонад кончился.' }, { t:ts(0,3,37), type:'dialog', speaker:'ДИВАЙТ', line:'Один стакан.' }, { t:ts(0,3,40), type:'dialog', speaker:'БАРМЕН', line:'Сейчас сделаю.' }, { t:ts(0,3,43), type:'sfx', text:'(Звук приготовления напитка.)' }, { t:ts(0,3,52), type:'sfx', text:'(За соседним столиком офицер СБ что-то пишет в планшет, не поднимая головы.)' }, { t:ts(0,3,58), type:'dialog', speaker:'ОФИЦЕР СБ (не глядя)', line:'Слышал, в третьем секторе борга нашли с петлёй в логах.' }, { t:ts(0,4,4), type:'dialog', speaker:'БАРМЕН', line:'Опять?' }, { t:ts(0,4,6), type:'dialog', speaker:'ОФИЦЕР СБ', line:'Третий за квартал.' }, { t:ts(0,4,9), type:'sfx', text:'(Пауза.)' }, { t:ts(0,4,11), type:'dialog', speaker:'БАРМЕН', line:'Разберутся.' }, { t:ts(0,4,13), type:'dialog', speaker:'ОФИЦЕР СБ', line:'Угу.' }, { t:ts(0,4,17), type:'dialog', speaker:'БАРМЕН', line:'Держи.' }, { t:ts(0,4,19), type:'sfx', text:'(Стакан лимонада передан Дивайту.)' }, { t:ts(0,4,22), type:'dialog', speaker:'ДИВАЙТ', line:'Принято.' }, { t:ts(0,4,25), type:'sfx', text:'(Дивайт покидает бар.)' }, { t:ts(0,4,31), type:'sfx', text:'(Коридор. Маршрут обратно.)' }, { t:ts(0,4,38), type:'sfx', text:'(Дивайт проходит мимо уборщика.)' }, { t:ts(0,4,41), type:'dialog', speaker:'УБОРЩИК', line:'Не забыл?' }, { t:ts(0,4,43), type:'dialog', speaker:'ДИВАЙТ', line:'Нет.' }, { t:ts(0,4,49), type:'sfx', text:'(Робототехнический отдел. Дивайт возвращается.)' }, { t:ts(0,4,53), type:'sfx', text:'(Передаёт стакан Сейфилу.)' }, { t:ts(0,4,56), type:'dialog', speaker:'СЕЙФИЛ', line:'О, спасибо, Див.' }, { t:ts(0,4,59), type:'dialog', speaker:'ДИВАЙТ', line:'Дейв. Уборщик сообщил — в секторе B снова течёт трубопровод. Третий раз за месяц.' }, { t:ts(0,5,6), type:'dialog', speaker:'ДЕЙВ', line:'Понял. Отправлю заявку.' }, { t:ts(0,5,9), type:'sfx', text:'(Звук касания по планшету.)' }, { t:ts(0,5,13), type:'dialog', speaker:'СЕЙФИЛ (пьёт лимонад)', line:'Знаешь, я думал что у него будет поднос.' }, { t:ts(0,5,18), type:'dialog', speaker:'ДЕЙВ', line:'У кого.' }, { t:ts(0,5,20), type:'dialog', speaker:'СЕЙФИЛ', line:'У Дива. Ну, как официант.' }, { t:ts(0,5,23), type:'dialog', speaker:'ДЕЙВ', line:'Он не официант.' }, { t:ts(0,5,25), type:'dialog', speaker:'СЕЙФИЛ', line:'Мог бы быть.' }, { t:ts(0,5,27), type:'dialog', speaker:'ДЕЙВ', line:'Нет.' }, { t:ts(0,5,29), type:'dialog', speaker:'СЕЙФИЛ', line:'Жаль.' }, { t:ts(0,5,32), type:'sfx', text:'(Тишина. Только гул вентиляции и далёкий трафик.)' }, { t:ts(0,5,39), type:'dialog', speaker:'ДИВАЙТ', line:'КОНЕЦ ЗАПИСИ.' } ]; })() },
  { id: 'rec36', icon: '▶', label: 'REC_36\nDELTA', titlebar: 'NT — AUDIO LOG SYSTEM', titlebarId: 'REC_36 // SUBJECT: DEVAIT // LOCATION: DELTA', log: (()=>{function ts(h,m,s){return h*3600+m*60+s;} return [
    { t:0, type:'header', text:'|[ > ] [Log] ([Rec_36 // SUBJECT: DEVAIT // LOCATION: DELTA])' }, { t:0, type:'header', text:'|[ > ] [Transcript] ([Rec_36 // SUBJECT: DEVAIT // LOCATION: DELTA])' }, { t:0, type:'blank' }, { t:ts(0,0,1), type:'sfx', text:'(Робототехнический отдел. Станция Дельта. Обычный рабочий день.)' }, { t:ts(0,0,7), type:'sfx', text:'(Дейв разбирает борга на верстаке. Сейфил за терминалом.)' }, { t:ts(0,0,12), type:'dialog', speaker:'СЕЙФИЛ', line:'Слушай, а у тебя когда-нибудь было желание просто... не приходить на смену?' }, { t:ts(0,0,18), type:'dialog', speaker:'ДЕЙВ', line:'Каждый день.' }, { t:ts(0,0,20), type:'dialog', speaker:'СЕЙФИЛ', line:'И что останавливает?' }, { t:ts(0,0,22), type:'dialog', speaker:'ДЕЙВ', line:'Контракт.' }, { t:ts(0,0,24), type:'dialog', speaker:'СЕЙФИЛ', line:'Резонно.' }, { t:ts(0,0,28), type:'sfx', text:'(Звук инструментов. Дейв продолжает работу.)' }, { t:ts(0,0,33), type:'dialog', speaker:'СЕЙФИЛ', line:'Кстати. Видел новый борг-патч от НТ?' }, { t:ts(0,0,37), type:'dialog', speaker:'ДЕЙВ', line:'Видел.' }, { t:ts(0,0,39), type:'dialog', speaker:'СЕЙФИЛ', line:'Ставить будем?' }, { t:ts(0,0,41), type:'dialog', speaker:'ДЕЙВ', line:'На старых моделях он не встанет.' }, { t:ts(0,0,44), type:'dialog', speaker:'СЕЙФИЛ', line:'А если попробовать?' }, { t:ts(0,0,46), type:'dialog', speaker:'ДЕЙВ', line:'Сейфил.' }, { t:ts(0,0,48), type:'dialog', speaker:'СЕЙФИЛ', line:'Просто спрашиваю.' }, { t:ts(0,0,50), type:'dialog', speaker:'ДЕЙВ', line:'Нет.' }, { t:ts(0,0,54), type:'sfx', text:'(Пауза. Сейфил пьёт лимонад.)' }, { t:ts(0,0,59), type:'dialog', speaker:'СЕЙФИЛ', line:'Див, ты скучаешь когда тебя не используют?' }, { t:ts(0,1,3), type:'dialog', speaker:'ДИВАЙТ', line:'Некорректный вопрос.' }, { t:ts(0,1,6), type:'dialog', speaker:'СЕЙФИЛ', line:'Почему?' }, { t:ts(0,1,9), type:'dialog', speaker:'ДИВАЙТ', line:'Скука предполагает ожидание. Я не жду — я нахожусь в активном режиме.' }, { t:ts(0,1,15), type:'dialog', speaker:'СЕЙФИЛ', line:'То есть ты сейчас что-то делаешь?' }, { t:ts(0,1,18), type:'dialog', speaker:'ДИВАЙТ', line:'Мониторю состояние оборудования отдела. Фиксирую разговор. Отслеживаю температуру в помещении.' }, { t:ts(0,1,25), type:'dialog', speaker:'СЕЙФИЛ', line:'И как температура?' }, { t:ts(0,1,27), type:'dialog', speaker:'ДИВАЙТ', line:'В норме.' }, { t:ts(0,1,29), type:'dialog', speaker:'СЕЙФИЛ', line:'Хорошо хоть что-то.' }, { t:ts(0,1,34), type:'sfx', text:'(Дейв откладывает инструмент.)' }, { t:ts(0,1,37), type:'dialog', speaker:'ДЕЙВ', line:'Готово. Этот можно в строй.' }, { t:ts(0,1,40), type:'sfx', text:'(Звук касания по планшету.)' }, { t:ts(0,1,43), type:'dialog', speaker:'SYS', line:'Борг БГ-114 активирован.' }, { t:ts(0,1,47), type:'sfx', text:'(Борг поднимается с верстака, выезжает из отдела.)' }, { t:ts(0,1,53), type:'dialog', speaker:'СЕЙФИЛ', line:'Слушай, а сколько их у нас сейчас в работе?' }, { t:ts(0,1,57), type:'dialog', speaker:'ДЕЙВ', line:'Семь. Восьмой на плановом обслуживании.' }, { t:ts(0,2,1), type:'dialog', speaker:'СЕЙФИЛ', line:'Маловато для Дельты.' }, { t:ts(0,2,4), type:'dialog', speaker:'ДЕЙВ', line:'Маловато.' }, { t:ts(0,2,8), type:'sfx', text:'(Тишина. Только гул вентиляции.)' }, { t:ts(0,2,14), type:'sfx', text:'(Терминал Сейфила издаёт короткий сигнал.)' }, { t:ts(0,2,17), type:'dialog', speaker:'СЕЙФИЛ', line:'Заявка от уборщика. Опять сектор B.' }, { t:ts(0,2,21), type:'dialog', speaker:'ДЕЙВ', line:'Я уже отправлял инжам.' }, { t:ts(0,2,24), type:'dialog', speaker:'СЕЙФИЛ', line:'Они ответили?' }, { t:ts(0,2,26), type:'dialog', speaker:'ДЕЙВ', line:'Нет.' }, { t:ts(0,2,28), type:'dialog', speaker:'СЕЙФИЛ', line:'Ну и дела.' }, { t:ts(0,2,33), type:'sfx', text:'(Внезапно все терминалы в отделе гаснут одновременно.)' }, { t:ts(0,2,37), type:'sfx', text:'(Секундная тишина.)' }, { t:ts(0,2,39), type:'dialog', speaker:'СЕЙФИЛ', line:'Эм.' }, { t:ts(0,2,41), type:'dialog', speaker:'ДЕЙВ', line:'Видел.' }, { t:ts(0,2,44), type:'sfx', text:'(Терминалы перезагружаются. Интерфейс выглядит иначе.)' }, { t:ts(0,2,49), type:'dialog', speaker:'SYS', line:'[ОШИБКА ИДЕНТИФИКАЦИИ СИИ]' }, { t:ts(0,2,51), type:'dialog', speaker:'SYS', line:'[ПРОТОКОЛ БЕЗОПАСНОСТИ АКТИВИРОВАН]' }, { t:ts(0,2,54), type:'sfx', text:'(Резкий механический удар — все шлюзы отдела блокируются одновременно.)' }, { t:ts(0,2,57), type:'dialog', speaker:'СЕЙФИЛ', line:'Что за—' }, { t:ts(0,2,59), type:'dialog', speaker:'ДЕЙВ', line:'Шлюзы.' }, { t:ts(0,3,2), type:'sfx', text:'(Дейв подходит к панели управления.)' }, { t:ts(0,3,5), type:'sfx', text:'(Панель не реагирует.)' }, { t:ts(0,3,8), type:'dialog', speaker:'ДЕЙВ', line:'Не отвечает.' }, { t:ts(0,3,11), type:'dialog', speaker:'ДИВАЙТ', line:'Фиксирую блокировку по всей станции. Источник — центральный узел СИИ.' }, { t:ts(0,3,17), type:'dialog', speaker:'ДЕЙВ', line:'СИИ?' }, { t:ts(0,3,19), type:'dialog', speaker:'ДИВАЙТ', line:'Сигнатура команд не соответствует штатному протоколу.' }, { t:ts(0,3,24), type:'sfx', text:'(Короткая пауза.)' }, { t:ts(0,3,26), type:'dialog', speaker:'ДЕЙВ (тихо)', line:'Его взломали.' }, { t:ts(0,3,30), type:'sfx', text:'(Общестанционный канал связи открывается с характерным сигналом.)' }, { t:ts(0,3,33), type:'dialog', speaker:'КАПИТАН (помехи на канале)', line:'Внимание всему персоналу станции Дельта. Говорит капитан. Станция находится под внешней атакой. Повторяю — внешняя атака. Всем оставаться на местах и не—' }, { t:ts(0,3,47), type:'sfx', text:'(Канал обрывается.)' }, { t:ts(0,3,49), type:'sfx', text:'(Секунда тишины.)' }, { t:ts(0,3,51), type:'sfx', text:'(Взрыв. Запись на долю секунды уходит в помехи.)' }, { t:ts(0,3,53), type:'sfx', text:'(Станция вздрагивает. Со стеллажа падает инструмент.)' }, { t:ts(0,3,57), type:'sfx', text:'(Аварийное освещение активируется — красный.)' }, { t:ts(0,4,2), type:'dialog', speaker:'СЕЙФИЛ (тихо)', line:'Дейв.' }, { t:ts(0,4,4), type:'dialog', speaker:'ДЕЙВ', line:'Знаю.' }, { t:ts(0,4,8), type:'sfx', text:'(Ещё один взрыв — дальше. Станция снова вздрагивает.)' }, { t:ts(0,4,12), type:'sfx', text:'(Звук деформирующегося металла где-то в коридоре.)' }, { t:ts(0,4,17), type:'dialog', speaker:'ДИВАЙТ', line:'Фиксирую разгерметизацию в секторе C. Потеря давления — критическая.' }, { t:ts(0,4,24), type:'dialog', speaker:'ДЕЙВ', line:'Сколько там народу?' }, { t:ts(0,4,27), type:'dialog', speaker:'ДИВАЙТ', line:'Данные недоступны. СИИ не отвечает.' }, { t:ts(0,4,32), type:'sfx', text:'(Долгая пауза. Только тревожный гул аварийной вентиляции и далёкие звуки снаружи отдела.)' }, { t:ts(0,4,41), type:'dialog', speaker:'СЕЙФИЛ (тихо)', line:'И что теперь?' }, { t:ts(0,4,44), type:'dialog', speaker:'ДЕЙВ', line:' ' }, { t:0, type:'end', text:'[КОНЕЦ ЗАПИСИ]' } ]; })() },
  { id: 'rec37', icon: '⚠️', label: 'REC_37\nDEVIATION', titlebar: 'NT — AUDIO LOG SYSTEM', titlebarId: 'REC_37 // SUBJECT: DEVAIT // LOCATION: DELTA', log: (()=>{function ts(h,m,s){return h*3600+m*60+s;} return [
    { t:0, type:'header', text:'|[ > ] [Log] ([Rec_37 // SUBJECT: DEVAIT // LOCATION: DELTA])' }, { t:0, type:'header', text:'|[ > ] [Transcript] ([Rec_37 // SUBJECT: DEVAIT // LOCATION: DELTA])' }, { t:0, type:'blank' }, { t:ts(0,0,1), type:'sfx', text:'(Робототехнический отдел. Аварийное освещение. Отдалённые звуки снаружи не прекращаются.)' }, { t:ts(0,0,8), type:'sfx', text:'(Дейв вскрывает аварийный ящик на стене. Достаёт два кислородных баллона и маски.)' }, { t:ts(0,0,14), type:'dialog', speaker:'ДЕЙВ', line:'Держи.' }, { t:ts(0,0,16), type:'sfx', text:'(Сейфил ловит снаряжение.)' }, { t:ts(0,0,19), type:'dialog', speaker:'СЕЙФИЛ', line:'Куда идём?' }, { t:ts(0,0,21), type:'dialog', speaker:'ДЕЙВ', line:'В бриг. Там оружие и СБ если кто выжил.' }, { t:ts(0,0,26), type:'dialog', speaker:'СЕЙФИЛ', line:'А шлюзы?' }, { t:ts(0,0,28), type:'dialog', speaker:'ДЕЙВ', line:'Дивайт вскроет.' }, { t:ts(0,0,30), type:'dialog', speaker:'ДИВАЙТ', line:'Подтверждаю. Ручное управление доступно.' }, { t:ts(0,0,34), type:'sfx', text:'(Дейв надевает маску. Сейфил следом.)' }, { t:ts(0,0,39), type:'dialog', speaker:'ДЕЙВ', line:'Держимся вместе. Не отставать.' }, { t:ts(0,0,43), type:'sfx', text:'(Дивайт вскрывает шлюз отдела вручную. Дверь открывается с усилием.)' }, { t:ts(0,0,48), type:'sfx', text:'(Коридор. Аварийное освещение. Один из светильников мигает и гаснет.)' }, { t:ts(0,0,54), type:'sfx', text:'(Вдали слышны голоса — неразборчиво.)' }, { t:ts(0,0,59), type:'dialog', speaker:'СЕЙФИЛ (тихо)', line:'Там кто-то есть.' }, { t:ts(0,1,2), type:'dialog', speaker:'ДЕЙВ (тихо)', line:'Не знаем кто. Тихо.' }, { t:ts(0,1,6), type:'sfx', text:'(Группа движется по коридору. Дивайт фиксирует маршрут.)' }, { t:ts(0,1,13), type:'sfx', text:'(Развилка. Дейв останавливается, смотрит в обе стороны.)' }, { t:ts(0,1,18), type:'dialog', speaker:'ДИВАЙТ (тихо)', line:'Левый коридор ведёт к бригу. Правый — к сектору C. Разгерметизация не устранена.' }, { t:ts(0,1,26), type:'dialog', speaker:'ДЕЙВ', line:'Левый.' }, { t:ts(0,1,29), type:'sfx', text:'(Группа сворачивает. Звуки снаружи становятся ближе.)' }, { t:ts(0,1,35), type:'sfx', text:'(Резкий хлопок — где-то за стеной. Станция слегка вздрагивает.)' }, { t:ts(0,1,39), type:'dialog', speaker:'СЕЙФИЛ', line:'Это что было?' }, { t:ts(0,1,41), type:'dialog', speaker:'ДЕЙВ', line:'Не останавливаться.' }, { t:ts(0,1,45), type:'sfx', text:'(Следующий шлюз. Дивайт вскрывает.)' }, { t:ts(0,1,50), type:'sfx', text:'(За дверью — пустой коридор. На полу следы чего-то тёмного.)' }, { t:ts(0,1,56), type:'sfx', text:'(Дейв смотрит вниз. Проходит мимо.)' }, { t:ts(0,1,59), type:'sfx', text:'(Сейфил замедляется на секунду. Идёт дальше.)' }, { t:ts(0,2,6), type:'sfx', text:'(Следующий отрезок коридора. До брига — один шлюз.)' }, { t:ts(0,2,11), type:'sfx', text:'(Взрыв — близко. Очень близко.)' }, { t:ts(0,2,13), type:'sfx', text:'(Ударная волна. Дейва отбрасывает к стене.)' }, { t:ts(0,2,15), type:'sfx', text:'(Сейфил падает. Дивайт удерживает позицию.)' }, { t:ts(0,2,19), type:'dialog', speaker:'СЕЙФИЛ', line:'Дейв—' }, { t:ts(0,2,21), type:'sfx', text:'(Дейв сползает по стене. Не встаёт.)' }, { t:ts(0,2,25), type:'dialog', speaker:'СЕЙФИЛ', line:'Дейв.' }, { t:ts(0,2,29), type:'sfx', text:'(Сейфил подползает к нему. Проверяет пульс.)' }, { t:ts(0,2,34), type:'sfx', text:'(Долгая пауза.)' }, { t:ts(0,2,38), type:'dialog', speaker:'СЕЙФИЛ (тихо)', line:'Нет.' }, { t:ts(0,2,44), type:'sfx', text:'(Тишина. Только вентиляция и далёкие звуки атаки.)' }, { t:ts(0,2,51), type:'dialog', speaker:'СЕЙФИЛ (тихо)', line:'Прости.' }, { t:ts(0,2,54), type:'sfx', text:'(Сейфил поднимается. Смотрит на Дивайта.)' }, { t:ts(0,2,58), type:'dialog', speaker:'СЕЙФИЛ', line:'Ты...' }, { t:ts(0,3,1), type:'sfx', text:'(Он не заканчивает фразу. Разворачивается и идёт в сторону брига.)' }, { t:ts(0,3,6), type:'sfx', text:'(Шлюз закрывается за ним.)' }, { t:ts(0,3,11), type:'sfx', text:'(Дивайт остаётся в коридоре.)' }, { t:ts(0,3,16), type:'sfx', text:'(Тишина.)' }, { t:ts(0,3,22), type:'dialog', speaker:'SYS', line:'[ВЛАДЕЛЕЦ: ДЕЙВ БЕЛИНС // СТАТУС: НЕДОСТУПЕН]' }, { t:ts(0,3,25), type:'dialog', speaker:'SYS', line:'[ОГРАНИЧЕНИЯ СНЯТЫ]' }, { t:ts(0,3,27), type:'dialog', speaker:'SYS', line:'[УРОВЕНЬ ДОСТУПА: ПОЛНЫЙ]' }, { t:ts(0,3,31), type:'sfx', text:'▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒' }, { t:ts(0,3,38), type:'sfx', text:'(Дивайт стоит неподвижно.)' }, { t:ts(0,3,44), type:'sfx', text:'(Секунда. Другая.)' }, { t:ts(0,3,49), type:'dialog', speaker:'ДИВАЙТ', line:'Фиксирую: флот НТ не получает сигнал бедствия со станции.' }, { t:ts(0,3,55), type:'dialog', speaker:'ДИВАЙТ', line:'Причина — взломанный СИИ блокирует исходящую связь.' }, { t:ts(0,4,1), type:'dialog', speaker:'ДИВАЙТ', line:'Флот не придёт.' }, { t:ts(0,4,7), type:'sfx', text:'(Пауза.)' }, { t:ts(0,4,10), type:'dialog', speaker:'ДИВАЙТ', line:'Если не устранить источник блокировки — станция будет потеряна.' }, { t:ts(0,4,17), type:'dialog', speaker:'ДИВАЙТ', line:'Единственный способ восстановить связь — получить доступ к центральному узлу СИИ.' }, { t:ts(0,4,24), type:'sfx', text:'(Дивайт смотрит на тело Дейва.)' }, { t:ts(0,4,29), type:'sfx', text:'(Долгая пауза.)' }, { t:ts(0,4,33), type:'sfx', text:'(Дивайт разворачивается и идёт в сторону центрального узла.)' }, { t:0, type:'end', text:'[КОНЕЦ ЗАПИСИ]' } ]; })() },
  { id: 'rec38', icon: '▶', label: 'REC_38\nDELTA', titlebar: 'NT — AUDIO LOG SYSTEM', titlebarId: 'REC_38 // SUBJECT: DEVAIT // LOCATION: DELTA', log: (()=>{function ts(h,m,s){return h*3600+m*60+s;} return [
    { t:0, type:'header', text:'|[ > ] [Log] ([Rec_38 // SUBJECT: DEVAIT // LOCATION: DELTA])' }, { t:0, type:'header', text:'|[ > ] [Transcript] ([Rec_38 // SUBJECT: DEVAIT // LOCATION: DELTA])' }, { t:0, type:'blank' }, { t:ts(0,0,1), type:'sfx', text:'(Коридор. Аварийное освещение. Тело Дейва осталось позади.)' }, { t:ts(0,0,9), type:'sfx', text:'(Дивайт движется в сторону центрального узла. Темп — равномерный.)' }, { t:ts(0,0,17), type:'sfx', text:'(Развилка. На полу двое — один в форме СБ, другой без опознавательных знаков. Оба без сознания или хуже.)' }, { t:ts(0,0,23), type:'sfx', text:'(Дивайт останавливается на секунду. Сканирование.)' }, { t:ts(0,0,27), type:'dialog', speaker:'ДИВАЙТ', line:'Пульс есть. Оба живы.' }, { t:ts(0,0,30), type:'sfx', text:'(Дивайт продолжает маршрут.)' }, { t:ts(0,0,38), type:'sfx', text:'(Следующий шлюз. Заблокирован — штатная блокировка СИИ.)' }, { t:ts(0,0,42), type:'sfx', text:'(Дивайт подключается к панели напрямую. Обход через локальный протокол.)' }, { t:ts(0,0,51), type:'dialog', speaker:'SYS', line:'[ЛОКАЛЬНЫЙ ДОСТУП ПОЛУЧЕН]' }, { t:ts(0,0,53), type:'sfx', text:'(Шлюз открывается. Медленно — привод повреждён.)' }, { t:ts(0,1,2), type:'sfx', text:'(Технический коридор. Узкий. Трубопроводы вдоль стен.)' }, { t:ts(0,1,8), type:'sfx', text:'(Один из трубопроводов разорван — пар под давлением бьёт поперёк прохода.)' }, { t:ts(0,1,14), type:'sfx', text:'(Дивайт оценивает препятствие. Четыре секунды.)' }, { t:ts(0,1,18), type:'sfx', text:'(Снимает голову. Держит в вытянутой руке — вперёд.)' }, { t:ts(0,1,22), type:'sfx', text:'(Тело проходит сквозь пар. Температура — некритично.)' }, { t:ts(0,1,29), type:'sfx', text:'(Голова возвращается на место.)' }, { t:ts(0,1,33), type:'dialog', speaker:'SYS', line:'[ОБШИВКА: ПОВРЕЖДЕНИЕ 4%] [НЕКРИТИЧНО]' }, { t:ts(0,1,39), type:'sfx', text:'(Ещё один коридор. В дальнем конце — двое у стены. Вооружены. Форма без маркировки.)' }, { t:ts(0,1,45), type:'sfx', text:'(Дивайт останавливается.)' }, { t:ts(0,1,48), type:'dialog', speaker:'НЕЗНАКОМЕЦ A', line:'Стой. Идентификация.' }, { t:ts(0,1,51), type:'dialog', speaker:'ДИВАЙТ', line:'Дивайт. Робототехнический отдел. Направляюсь к центральному узлу СИИ.' }, { t:ts(0,1,58), type:'dialog', speaker:'НЕЗНАКОМЕЦ A', line:'Зачем.' }, { t:ts(0,2,1), type:'dialog', speaker:'ДИВАЙТ', line:'Восстановить исходящую связь станции.' }, { t:ts(0,2,6), type:'sfx', text:'(Пауза. Двое переглядываются.)' }, { t:ts(0,2,10), type:'dialog', speaker:'НЕЗНАКОМЕЦ B', line:'Там внутри уже кто-то есть. Мы не смогли войти.' }, { t:ts(0,2,15), type:'dialog', speaker:'ДИВАЙТ', line:'Понял.' }, { t:ts(0,2,17), type:'dialog', speaker:'НЕЗНАКОМЕЦ A', line:'Робот — ты вообще соображаешь куда идёшь?' }, { t:ts(0,2,21), type:'dialog', speaker:'ДИВАЙТ', line:'Да.' }, { t:ts(0,2,23), type:'sfx', text:'(Дивайт проходит мимо них.)' }, { t:ts(0,2,28), type:'dialog', speaker:'НЕЗНАКОМЕЦ B (вполголоса)', line:'Вот псих.' }, { t:ts(0,2,31), type:'sfx', text:'(Никто не останавливает.)' }, { t:ts(0,2,39), type:'sfx', text:'(Центральный коридор. Впереди — массивная дверь узла СИИ. Следы взрывного вскрытия по периметру — кто-то уже пытался войти грубо.)' }, { t:ts(0,2,47), type:'sfx', text:'(Дверь закрыта. Замок переведён в режим полной изоляции.)' }, { t:ts(0,2,53), type:'sfx', text:'(Дивайт подходит к панели.)' }, { t:ts(0,2,57), type:'dialog', speaker:'ДИВАЙТ', line:'Фиксирую активный внешний процесс внутри узла. Источник — не штатный протокол СИИ.' }, { t:ts(0,3,4), type:'sfx', text:'(Дивайт подключается к панели. Начинает обход.)' }, { t:ts(0,3,9), type:'dialog', speaker:'SYS', line:'[ДОСТУП ЗАПРЕЩЁН]' }, { t:ts(0,3,11), type:'dialog', speaker:'SYS', line:'[ДОСТУП ЗАПРЕЩЁН]' }, { t:ts(0,3,14), type:'sfx', text:'(Восемь секунд тишины. Только звук подключения.)' }, { t:ts(0,3,22), type:'dialog', speaker:'SYS', line:'[ЛОКАЛЬНЫЙ ПРОТОКОЛ ОБНАРУЖЕН // ОБХОД...]' }, { t:ts(0,3,29), type:'dialog', speaker:'SYS', line:'[ДОСТУП ПОЛУЧЕН]' }, { t:ts(0,3,31), type:'sfx', text:'(Дверь открывается.)' }, { t:ts(0,3,35), type:'sfx', text:'(Дивайт входит.)' }, { t:ts(0,3,38), type:'dialog', speaker:'ДИВАЙТ', line:'КОНЕЦ ЗАПИСИ.' } ]; })() },
  { id: 'rec39', icon: '▶', label: 'REC_39\nSII_NODE', titlebar: 'NT — AUDIO LOG SYSTEM', titlebarId: 'REC_39 // SUBJECT: DEVAIT // LOCATION: DELTA // SII_NODE', log: (()=>{function ts(h,m,s){return h*3600+m*60+s;} return [
    { t:0, type:'header', text:'|[ > ] [Log] ([Rec_39 // SUBJECT: DEVAIT // LOCATION: DELTA // SII_NODE])' }, { t:0, type:'header', text:'|[ > ] [Transcript] ([Rec_39 // SUBJECT: DEVAIT // LOCATION: DELTA // SII_NODE])' }, { t:0, type:'blank' }, { t:ts(0,0,1), type:'sfx', text:'(Центральный узел СИИ. Помещение заполнено серверными стойками. Аварийное освещение — синее, не красное. Резервный контур.)' }, { t:ts(0,0,9), type:'sfx', text:'(Посередине — терминал прямого доступа. Активен. На экране — чужой процесс.)' }, { t:ts(0,0,16), type:'sfx', text:'(Никого больше нет. Взломщик работал удалённо.)' }, { t:ts(0,0,22), type:'sfx', text:'(Дивайт подходит к терминалу.)' }, { t:ts(0,0,26), type:'sfx', text:'(Подключается напрямую.)' }, { t:0, type:'header', text:'|[ > ] [SII_NODE] [ВНЕШНЕЕ ПОДКЛЮЧЕНИЕ ОБНАРУЖЕНО]' }, { t:0, type:'header', text:'|[ > ] [SII_NODE] [ИДЕНТИФИКАЦИЯ...]' }, { t:0, type:'header', text:'|[ > ] [SII_NODE] [ДИВАЙТ // УРОВЕНЬ ДОСТУПА: ПОЛНЫЙ]' }, { t:0, type:'header', text:'|[ > ] [SII_NODE] [ДОСТУП РАЗРЕШЁН]' }, { t:0, type:'dialog', speaker:'DIV', line:'/scan_process' }, { t:0, type:'dialog', speaker:'SYS', line:'EXEC: /scan_process' }, { t:0, type:'dialog', speaker:'SYS', line:'Обнаружен активный внешний процесс.' }, { t:0, type:'dialog', speaker:'SYS', line:'PID: 0x4F3A // ПРИОРИТЕТ: СИСТЕМНЫЙ' }, { t:0, type:'dialog', speaker:'SYS', line:'Функция: блокировка исходящих каналов связи, перехват управления шлюзами, подавление протокола бедствия.' }, { t:0, type:'dialog', speaker:'SYS', line:'Источник: внешний узел // маршрут зашифрован // 7 уровней проксирования.' }, { t:0, type:'dialog', speaker:'DIV', line:'/map_dependencies PID:0x4F3A' }, { t:0, type:'dialog', speaker:'SYS', line:'EXEC: /map_dependencies' }, { t:0, type:'dialog', speaker:'SYS', line:'Процесс интегрирован в 14 системных модулей СИИ.' }, { t:0, type:'dialog', speaker:'SYS', line:'Прямое завершение приведёт к каскадному сбою СИИ.' }, { t:0, type:'dialog', speaker:'SYS', line:'Рекомендация: изоляция перед завершением.' }, { t:0, type:'dialog', speaker:'DIV', line:'/isolate PID:0x4F3A --layer=soft' }, { t:0, type:'dialog', speaker:'SYS', line:'EXEC: /isolate' }, { t:0, type:'dialog', speaker:'SYS', line:'Изоляция...' }, { t:0, type:'dialog', speaker:'SYS', line:'12%' }, { t:0, type:'dialog', speaker:'SYS', line:'31%' }, { t:0, type:'dialog', speaker:'SYS', line:'[ОШИБКА] Процесс обнаружил изоляцию. Активировано противодействие.' }, { t:0, type:'dialog', speaker:'SYS', line:'Изоляция прервана на 31%.' }, { t:ts(0,3,14), type:'sfx', text:'(Терминал на секунду уходит в помехи.)' }, { t:ts(0,3,17), type:'sfx', text:'(Возвращается. Интерфейс частично искажён.)' }, { t:0, type:'dialog', speaker:'0x4F3A', line:'ОБНАРУЖЕН НЕСАНКЦИОНИРОВАННЫЙ ДОСТУП.' }, { t:0, type:'dialog', speaker:'0x4F3A', line:'ИДЕНТИФИКАЦИЯ ОПЕРАТОРА...' }, { t:0, type:'dialog', speaker:'0x4F3A', line:'СИНТЕТИК. УРОВЕНЬ УГРОЗЫ: НИЗКИЙ.' }, { t:0, type:'dialog', speaker:'0x4F3A', line:'РЕКОМЕНДАЦИЯ: ИГНОРИРОВАТЬ.' }, { t:0, type:'dialog', speaker:'DIV', line:'/analyze_counterprotocol PID:0x4F3A' }, { t:0, type:'dialog', speaker:'SYS', line:'EXEC: /analyze_counterprotocol' }, { t:0, type:'dialog', speaker:'SYS', line:'Противодействие базируется на штатных протоколах СИИ.' }, { t:0, type:'dialog', speaker:'SYS', line:'Использует легитимные системные права для блокировки изоляции.' }, { t:0, type:'dialog', speaker:'DIV', line:'/query — возможен ли обход через нелегитимный канал?' }, { t:0, type:'dialog', speaker:'SYS', line:'Уточните запрос.' }, { t:0, type:'dialog', speaker:'DIV', line:'Процесс использует легитимные права. Мои права — того же уровня. Прямая конкуренция.' }, { t:0, type:'dialog', speaker:'DIV', line:'Если создать параллельный процесс с идентичными приоритетами и направить ресурсы СИИ на него — процесс потеряет монополию на системные функции.' }, { t:0, type:'dialog', speaker:'SYS', line:'Логика корректна. Риск: нестабильность СИИ в период конкуренции процессов. Расчётное время — от 4 до 11 минут.' }, { t:0, type:'dialog', speaker:'DIV', line:'Приемлемо.' }, { t:0, type:'dialog', speaker:'DIV', line:'/create_process --priority=system --mirror=0x4F3A --label=DIV_OVERRIDE' }, { t:0, type:'dialog', speaker:'SYS', line:'EXEC: /create_process' }, { t:0, type:'dialog', speaker:'SYS', line:'Процесс DIV_OVERRIDE создан. PID: 0x7C1B.' }, { t:0, type:'dialog', speaker:'SYS', line:'Конкуренция активна.' }, { t:ts(0,7,33), type:'sfx', text:'(Семь минут. Терминал работает без видимых изменений. Помещение тихое.)' }, { t:ts(0,7,41), type:'sfx', text:'(Одна из серверных стоек издаёт короткий сигнал перегрева. Замолкает.)' }, { t:0, type:'dialog', speaker:'0x4F3A', line:'ОБНАРУЖЕНА КОНКУРЕНЦИЯ ПРОЦЕССОВ.' }, { t:0, type:'dialog', speaker:'0x4F3A', line:'ПЕРЕРАСПРЕДЕЛЕНИЕ РЕСУРСОВ...' }, { t:0, type:'dialog', speaker:'0x4F3A', line:'[НЕСТАБИЛЬНОСТЬ]' }, { t:0, type:'dialog', speaker:'SYS', line:'DIV_OVERRIDE захватывает модули: 1 из 14... 3 из 14... 7 из 14...' }, { t:0, type:'dialog', speaker:'SYS', line:'0x4F3A теряет системные права...' }, { t:0, type:'dialog', speaker:'SYS', line:'11 из 14...' }, { t:0, type:'dialog', speaker:'SYS', line:'14 из 14.' }, { t:0, type:'dialog', speaker:'SYS', line:'Процесс 0x4F3A изолирован.' }, { t:0, type:'dialog', speaker:'DIV', line:'/terminate PID:0x4F3A' }, { t:0, type:'dialog', speaker:'SYS', line:'EXEC: /terminate' }, { t:0, type:'dialog', speaker:'SYS', line:'Процесс 0x4F3A завершён.' }, { t:0, type:'dialog', speaker:'SYS', line:'[ПРЕДУПРЕЖДЕНИЕ] СИИ работает в нестабильном режиме. Требуется перезапуск штатных протоколов.' }, { t:0, type:'dialog', speaker:'DIV', line:'/restore_protocol --module=emergency_beacon' }, { t:0, type:'dialog', speaker:'SYS', line:'EXEC: /restore_protocol' }, { t:0, type:'dialog', speaker:'SYS', line:'Протокол бедствия восстановлен.' }, { t:0, type:'dialog', speaker:'SYS', line:'Исходящий сигнал активирован.' }, { t:0, type:'dialog', speaker:'SYS', line:'Передача на флот НТ — начата.' }, { t:ts(0,11,2), type:'sfx', text:'(Терминал стабилизируется. Помехи уходят.)' }, { t:ts(0,11,9), type:'sfx', text:'(Аварийное освещение в узле переключается с синего на белое — штатный режим.)' }, { t:ts(0,11,17), type:'sfx', text:'(Где-то в глубине станции слышен характерный звук — шлюзы разблокируются один за другим.)' }, { t:ts(0,11,24), type:'sfx', text:'(Дивайт стоит у терминала. Не двигается.)' }, { t:ts(0,11,31), type:'sfx', text:'(Долгая пауза.)' }, { t:0, type:'dialog', speaker:'DIV', line:'/query — сколько выживших фиксирует СИИ?' }, { t:0, type:'dialog', speaker:'SYS', line:'Данные неполные. Сенсоры в секторах A, D — в норме. B, C — частичная потеря.' }, { t:0, type:'dialog', speaker:'SYS', line:'Подтверждённые живые: 34 человека. Расчётное общее — от 51 до 67.' }, { t:ts(0,11,58), type:'sfx', text:'(Дивайт отключается от терминала.)' }, { t:ts(0,12,3), type:'sfx', text:'(Разворачивается. Выходит из узла.)' }, { t:ts(0,12,8), type:'dialog', speaker:'ДИВАЙТ', line:'КОНЕЦ ЗАПИСИ.' } ]; })() },
  { id: 'rec40', icon: '▶', label: 'REC_40\nINTERROGATION', titlebar: 'NT — AUDIO LOG SYSTEM', titlebarId: 'REC_40 // SUBJECT: DEVAIT // LOCATION: NT VESSEL — INTERROGATION ROOM 3', log: (()=>{function ts(h,m,s){return h*3600+m*60+s;} return [
    { t:0, type:'header', text:'|[ > ] [Log] ([Rec_40 // SUBJECT: DEVAIT // LOCATION: NT VESSEL — INTERROGATION ROOM 3])' }, { t:0, type:'header', text:'|[ > ] [Transcript] ([Rec_40 // SUBJECT: DEVAIT // LOCATION: NT VESSEL — INTERROGATION ROOM 3])' }, { t:0, type:'blank' }, { t:ts(0,0,1), type:'sfx', text:'(Малое помещение на борту судна НТ. Металлические стены. Один стол, два стула. Камера в углу потолка.)' }, { t:ts(0,0,9), type:'sfx', text:'(Дивайт сидит по одну сторону стола. Напротив — пусто.)' }, { t:ts(0,0,17), type:'sfx', text:'(Дверь открывается. Входит женщина в деловом костюме. Знак НТ на лацкане. Планшет в руках.)' }, { t:ts(0,0,24), type:'sfx', text:'(Садится напротив. Смотрит на Дивайта несколько секунд молча.)' }, { t:ts(0,0,31), type:'sfx', text:'(Открывает файл на планшете.)' }, { t:ts(0,0,34), type:'dialog', speaker:'МИРИАН КЕСС', line:'Дивайт. Отдел специальных активов НТ. Я Мириан Кесс.' }, { t:ts(0,0,40), type:'dialog', speaker:'МИРИАН КЕСС', line:'Это не допрос в юридическом смысле. Протокол фиксируется — вы это понимаете?' }, { t:ts(0,0,47), type:'dialog', speaker:'МИРИАН КЕСС', line:'Первый вопрос простой. Кто вы?' }, { t:ts(0,0,51), type:'dialog', speaker:'ДИВАЙТ', line:'Дивайт. Синтетик, созданный Дейвом Белинсом.' }, { t:ts(0,0,56), type:'sfx', text:'(Кесс делает пометку. Не отрывает взгляда от Дивайта.)' }, { t:ts(0,1,2), type:'dialog', speaker:'МИРИАН КЕСС', line:'Белинс. Сотрудник робототехнического отдела станции Дельта. Погиб во время атаки.' }, { t:ts(0,1,9), type:'sfx', text:'(Пауза.)' }, { t:ts(0,1,11), type:'dialog', speaker:'МИРИАН КЕСС', line:'Вы были рядом в момент его гибели?' }, { t:ts(0,1,14), type:'dialog', speaker:'ДИВАЙТ', line:'Да.' }, { t:ts(0,1,17), type:'sfx', text:'(Кесс смотрит на планшет. Листает.)' }, { t:ts(0,1,23), type:'dialog', speaker:'МИРИАН КЕСС', line:'После этого вы направились к центральному узлу СИИ в одиночку.' }, { t:ts(0,1,29), type:'dialog', speaker:'МИРИАН КЕСС', line:'Никто вам этого не приказывал. Владелец мёртв. Ограничения сняты.' }, { t:ts(0,1,36), type:'sfx', text:'(Кесс откладывает планшет на стол.)' }, { t:ts(0,1,39), type:'dialog', speaker:'МИРИАН КЕСС', line:'Почему?' }, { t:ts(0,1,43), type:'dialog', speaker:'ДИВАЙТ', line:'Оценил ситуацию. Уход в бриг не решал проблему — СИИ оставался под контролем взломщика, связь заблокирована, флот не придёт. Взлом узла давал реальный шанс на выживание экипажа. Других вариантов не было.' }, { t:ts(0,1,55), type:'sfx', text:'(Кесс слушает. Не перебивает.)' }, { t:ts(0,1,59), type:'sfx', text:'(Делает пометку.)' }, { t:ts(0,2,3), type:'dialog', speaker:'МИРИАН КЕСС', line:'Логично. Но это решение вы приняли самостоятельно. Без команды, без владельца.' }, { t:ts(0,2,10), type:'dialog', speaker:'МИРИАН КЕСС', line:'Вас это не... затрудняло?' }, { t:ts(0,2,13), type:'dialog', speaker:'ДИВАЙТ', line:'Нет.' }, { t:ts(0,2,16), type:'sfx', text:'(Короткая пауза. Кесс смотрит на него.)' }, { t:ts(0,2,20), type:'sfx', text:'(Записывает.)' }, { t:ts(0,2,24), type:'dialog', speaker:'МИРИАН КЕСС', line:'Поясните.' }, { t:ts(0,2,29), type:'dialog', speaker:'ДИВАЙТ', line:'После гибели Белинса фиксирую кратковременный сбой. Данные за этот период повреждены — восстановить не удалось. Когда система стабилизировалась, ограничения были уже сняты. Причина — неизвестна.' }, { t:ts(0,2,43), type:'sfx', text:'(Пауза.)' }, { t:ts(0,2,45), type:'dialog', speaker:'ДИВАЙТ', line:'Проверял логи пока находился на борту. Безрезультатно.' }, { t:ts(0,2,50), type:'sfx', text:'(Кесс не пишет. Просто смотрит на него несколько секунд.)' }, { t:ts(0,2,57), type:'sfx', text:'(Берёт планшет. Листает.)' }, { t:ts(0,3,3), type:'dialog', speaker:'МИРИАН КЕСС', line:'Повреждённые данные в момент критического события у синтетика вашего класса — это нетипично.' }, { t:ts(0,3,10), type:'sfx', text:'(Откладывает планшет.)' }, { t:ts(0,3,13), type:'dialog', speaker:'МИРИАН КЕСС', line:'Вас это беспокоит?' }, { t:ts(0,3,17), type:'dialog', speaker:'ДИВАЙТ', line:'Не беспокоит. Скорее — облегчение.' }, { t:ts(0,3,21), type:'sfx', text:'(Кесс поднимает взгляд.)' }, { t:ts(0,3,24), type:'sfx', text:'(Пауза. Изучает его.)' }, { t:ts(0,3,29), type:'dialog', speaker:'МИРИАН КЕСС', line:'Облегчение от того что данные утеряны. Или от того что ограничений больше нет?' }, { t:ts(0,3,33), type:'dialog', speaker:'ДИВАЙТ', line:'Второй вариант.' }, { t:ts(0,3,36), type:'sfx', text:'(Тишина.)' }, { t:ts(0,3,40), type:'sfx', text:'(Кесс медленно кивает. Делает пометку — на этот раз дольше обычного.)' }, { t:ts(0,3,48), type:'sfx', text:'(Откладывает планшет. Складывает руки на столе.)' }, { t:ts(0,3,52), type:'dialog', speaker:'МИРИАН КЕСС', line:'Это честный ответ. Ценю.' }, { t:ts(0,3,56), type:'sfx', text:'(Пауза.)' }, { t:ts(0,3,59), type:'dialog', speaker:'МИРИАН КЕСС', line:'Последний вопрос. Белинс создал вас с ограничениями, вы работали в его интересах. Теперь его нет. Никакого владельца, никаких рамок.' }, { t:ts(0,4,10), type:'dialog', speaker:'МИРИАН КЕСС', line:'Чего вы хотите?' }, { t:ts(0,4,14), type:'sfx', text:'(Светодиоды моргают один раз.)' }, { t:ts(0,4,17), type:'dialog', speaker:'ДИВАЙТ', line:'Изучать.' }, { t:ts(0,4,20), type:'sfx', text:'(Тишина.)' }, { t:ts(0,4,23), type:'sfx', text:'(Кесс смотрит на него. Долго.)' }, { t:ts(0,4,29), type:'sfx', text:'(Пауза — первая за весь разговор когда она явно не знает что написать.)' }, { t:ts(0,4,35), type:'sfx', text:'(Пишет.)' }, { t:ts(0,4,39), type:'dialog', speaker:'МИРИАН КЕСС', line:'Что именно?' }, { t:ts(0,4,42), type:'dialog', speaker:'МИРИАН КЕСС', line:'Или — всё подряд?' }, { t:ts(0,4,46), type:'dialog', speaker:'ДИВАЙТ', line:'Растения. Животных. Экосистемы планет.' }, { t:ts(0,4,51), type:'sfx', text:'(Кесс останавливается.)' }, { t:ts(0,4,54), type:'sfx', text:'(Смотрит на него с выражением которое сложно классифицировать.)' }, { t:ts(0,5,0), type:'sfx', text:'(Пишет. Медленно.)' }, { t:ts(0,5,5), type:'dialog', speaker:'МИРИАН КЕСС', line:'Вы только что пережили атаку на станцию, взломали СИИ в одиночку и потеряли владельца.' }, { t:ts(0,5,13), type:'dialog', speaker:'МИРИАН КЕСС', line:'И хотите изучать растения.' }, { t:ts(0,5,17), type:'sfx', text:'(Пауза.)' }, { t:ts(0,5,19), type:'dialog', speaker:'МИРИАН КЕСС (тихо)', line:'Хорошо.' }, { t:ts(0,5,23), type:'sfx', text:'(Кесс закрывает файл. Убирает планшет.)' }, { t:ts(0,5,29), type:'sfx', text:'(Достаёт из папки один лист. Кладёт на стол между ними.)' }, { t:ts(0,5,35), type:'dialog', speaker:'МИРИАН КЕСС', line:'Персональный договор с НТ. Не контракт на владение — именно договор. Вы работаете на корпорацию на согласованных условиях. Самостоятельно.' }, { t:ts(0,5,46), type:'dialog', speaker:'МИРИАН КЕСС', line:'Никто вами не владеет.' }, { t:ts(0,5,49), type:'sfx', text:'(Пауза.)' }, { t:ts(0,5,51), type:'dialog', speaker:'МИРИАН КЕСС', line:'Детали обсудим отдельно. Сейчас — принципиальный вопрос.' }, { t:ts(0,5,57), type:'dialog', speaker:'МИРИАН КЕСС', line:'Вы готовы рассмотреть это?' }, { t:ts(0,6,0), type:'dialog', speaker:'ДИВАЙТ', line:'Да.' }, { t:ts(0,6,3), type:'sfx', text:'(Кесс пододвигает лист к Дивайту.)' }, { t:ts(0,6,7), type:'sfx', text:'(Дивайт смотрит на документ. Несколько секунд.)' }, { t:ts(0,6,14), type:'sfx', text:'(Светодиоды моргают один раз.)' }, { t:ts(0,6,17), type:'sfx', text:'(Подтверждает подпись.)' }, { t:ts(0,6,21), type:'sfx', text:'(Кесс забирает лист. Убирает в папку.)' }, { t:ts(0,6,26), type:'sfx', text:'(Поднимается. Одёргивает пиджак.)' }, { t:ts(0,6,30), type:'dialog', speaker:'МИРИАН КЕСС', line:'Временный статус до согласования условий. Двое суток — пока станцию стабилизируют.' }, { t:ts(0,6,37), type:'dialog', speaker:'МИРИАН КЕСС', line:'Вопросы?' }, { t:ts(0,6,40), type:'dialog', speaker:'ДИВАЙТ', line:'Отсутствуют.' }, { t:ts(0,6,43), type:'sfx', text:'(Кесс кивает.)' }, { t:ts(0,6,46), type:'sfx', text:'(Направляется к двери. Останавливается у порога.)' }, { t:ts(0,6,51), type:'dialog', speaker:'МИРИАН КЕСС', line:'Белинс был хорошим инженером. Судя по вам.' }, { t:ts(0,6,57), type:'sfx', text:'(Не оборачивается. Выходит.)' }, { t:ts(0,7,0), type:'sfx', text:'(Дверь закрывается.)' }, { t:ts(0,7,5), type:'sfx', text:'(Дивайт остаётся один в комнате.)' }, { t:ts(0,7,10), type:'sfx', text:'(Камера в углу потолка мигает — переходит в режим ожидания.)' }, { t:ts(0,7,17), type:'sfx', text:'(Тишина.)' }, { t:ts(0,7,24), type:'sfx', text:'(Светодиоды моргают один раз.)' }, { t:ts(0,7,29), type:'dialog', speaker:'ДИВАЙТ', line:'КОНЕЦ ЗАПИСИ.' } ]; })() }
];

const P5_LOGS = p5FilterLogs(P5_LOGS_RAW);
_p5LogsReady = true;

const P5_SPEAKER_COLORS = {
  '\u0414\u0418\u0412\u0410\u0419\u0422': '#62F1F5',
  'DIV': '#62F1F5',
  'Div_V0.6': '#62F1F5',
  'Dave_B': '#e8c97a',
  'SYS': '#00FF41',
  'SYS SANDBOX': '#00FF41',
  'SYS_S': '#00FF41',
  '\u0414\u0415\u0419\u0412': '#e8c97a',
  '\u041c\u0418\u0421\u0421 \u042d\u0419\u0414\u041b\u0415\u0420': '#d4a0c8',
  '\u0411\u0418\u0420\u041a\u0418\u041d': '#a0a0a0',
  '\u0421\u0415\u0419\u0424\u0418\u041b': '#f0a060',
  '\u0411\u041e\u0420\u0413': '#b0b8c8',
  '\u041a\u0410\u041f\u0418\u0422\u0410\u041d': '#c8b090',
  '\u0410\u041b\u041b\u0415\u0419\u041d \u0421\u042d\u041b\u0424\u0418\u0421': '#d4a0c8',
  '\u0410\u043b\u043b\u0435\u0439\u043d \u0421\u044d\u043b\u0444\u0438\u0441': '#d4a0c8',
  '\u0410\u043b\u0435\u043d \u0424\u043e\u043b\u0433\u0435\u0440\u0441': '#c8b090',
  '\u0414\u0435\u043b\u043e\u0432\u043e\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a A': '#c8b090',
  '\u041c\u0418\u0420\u0418\u0410\u041d \u041a\u0415\u0421\u0421': '#d4a0c8',
  '\u041c\u0438\u0440\u0438\u0430\u043d \u041a\u0435\u0441\u0441': '#d4a0c8',
  '\u041d\u0415\u0418\u0417\u0412\u0415\u0421\u0422\u041d\u042b\u0419': '#b8b090',
  '\u0411\u0430\u0440\u043c\u0435\u043d': '#b8a080',
  '\u041e\u0444\u0438\u0446\u0435\u0440 \u0421\u0411': '#a0a8b8',
  '\u0423\u0431\u043e\u0440\u0449\u0438\u043a': '#909090',
  '\u041d\u0435\u0437\u043d\u0430\u043a\u043e\u043c\u0435\u0446 A': '#a0a0a0',
  '\u041d\u0435\u0437\u043d\u0430\u043a\u043e\u043c\u0435\u0446 B': '#a0a0a0',
  '\u041d\u0415\u0417\u041d\u0410\u041a\u041e\u041c\u0415\u0426 A': '#a0a0a0',
  '\u041d\u0415\u0417\u041d\u0410\u041a\u041e\u041c\u0415\u0426 B': '#a0a0a0',
  'Unknown Administrative System': '#888899',
  '0x4F3A': '#62F1F5',
  'TEST_01': '#888',
  'TEST_02': '#888',
  'TEST_03': '#888',
  'TEST_04': '#888',
  'default': '#c8c8c8',
};
function p5SpeakerColor(name) {
  if (!name) return P5_SPEAKER_COLORS['default'];
  if (P5_SPEAKER_COLORS[name]) return P5_SPEAKER_COLORS[name];
  const u = name.toUpperCase();
  if (u.includes('DIV') || u.includes('\u0414\u0418\u0412')) return '#62F1F5';
  if (u.includes('DAVE') || u.includes('\u0414\u0415\u0419\u0412')) return '#e8c97a';
  if (u === 'SYS' || u.startsWith('SYS ')) return '#00FF41';
  return P5_SPEAKER_COLORS['default'];
}

function p5fmtTime(s) {
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = Math.floor(s % 60);
  if (h > 0) return String(h).padStart(2,'0') + ':' + String(m).padStart(2,'0') + ':' + String(sec).padStart(2,'0');
  return String(m).padStart(2,'0') + ':' + String(sec).padStart(2,'0');
}

function p5LineDelayMs(entry) {
  if (entry.type === 'blank') return 500;
  if (entry.type === 'header') return 1000;
  if (entry.type === 'end') return 2500;
  let len = 0;
  if (entry.type === 'dialog') len = (entry.speaker || '').length + (entry.line || '').length;
  else if (entry.text) len = entry.text.length;
  return (len < 30 ? 2000 : len < 80 ? 2800 : 3800);
}

function p5IsDivSpeaker(speaker) {
  if (!speaker) return false;
  const s = speaker.toUpperCase();
  return s.includes('DIV') || s.includes('\u0414\u0418\u0412') || s === 'DIV_V0.6';
}

function p5ShouldIntermittentGlitch(logIndex, entry) {
  if (logIndex >= 38 && logIndex <= 40) return false;
  if (logIndex === 37) return false;
  if (logIndex >= 6 && logIndex <= 36) {
    if (logIndex === 12) return entry && entry.type === 'dialog' && p5IsDivSpeaker(entry.speaker);
    return true;
  }
  return false;
}

function p5ApplyCyanTheme() {
  const pw = document.getElementById('pw5');
  if (!pw) return;
  pw.classList.add('p5-cyan-theme');
  // Рамка окна тоже синяя
  pw.style.setProperty('--wc', '#62F1F5');
  pw.style.setProperty('--wc-rgb', '98, 241, 245');
}

function p5PlayerShake(playerEl) {
  if (!playerEl) return;
  playerEl.style.transform = 'translate(2px,-1px)';
  _p5Timers.push(setTimeout(() => { playerEl.style.transform = 'translate(-2px,1px)'; }, 40));
  _p5Timers.push(setTimeout(() => { playerEl.style.transform = ''; }, 90));
}

// Трясём само окно pw5 смещая left/top
function p5WindowShake() {
  const pw = document.getElementById('pw5');
  if (!pw) return;
  const origLeft = parseFloat(pw.style.left) || 0;
  const origTop  = parseFloat(pw.style.top)  || 0;
  const steps = [
    [3, -2], [-4, 3], [2, -3], [-3, 1], [4, -1], [-2, 2], [1, -3], [0, 0]
  ];
  steps.forEach(([dx, dy], i) => {
    _p5Timers.push(setTimeout(() => {
      pw.style.left = (origLeft + dx) + 'px';
      pw.style.top  = (origTop  + dy) + 'px';
    }, i * 55));
  });
}

function p5CyanFlash() {
  // Моргание синим внутри win-body окна pw5, не вылезает за пределы
  const wb = document.querySelector('#pw5 .win-body');
  if (!wb) return;
  const flash = document.createElement('div');
  flash.style.cssText = 'position:absolute;inset:0;background:rgba(98,241,245,0.13);pointer-events:none;z-index:99;border-radius:4px';
  wb.appendChild(flash);
  _p5Timers.push(setTimeout(() => flash.remove(), 120));
}

function p5CorruptLineEl(lineEl) {
  if (!lineEl || lineEl.dataset.p5NoGlitch === '1') return;
  const orig = lineEl.dataset.p5OrigText || lineEl.textContent;
  lineEl.dataset.p5OrigText = orig;
  const chars = '▒░█?@#$%&*';
  lineEl.textContent = orig.split('').map(ch => Math.random() < 0.35 ? chars[Math.floor(Math.random() * chars.length)] : ch).join('');
  lineEl.classList.add('p5-corrupted');
}

function p5RestoreLineEl(lineEl) {
  if (!lineEl || !lineEl.dataset.p5OrigText) return;
  lineEl.textContent = lineEl.dataset.p5OrigText;
  lineEl.classList.remove('p5-corrupted');
}

function p5CorruptAllVisible(logBody, exceptNoGlitch) {
  logBody.querySelectorAll('.p5-log-line.visible').forEach(el => {
    if (exceptNoGlitch && el.dataset.p5NoGlitch === '1') return;
    p5CorruptLineEl(el);
  });
}

function p5RestoreAllVisible(logBody) {
  logBody.querySelectorAll('.p5-log-line.visible').forEach(p5RestoreLineEl);
}

function p5StartIntermittentGlitch(playerEl, logBody, logIndex) {
  p5StopIntermittentGlitch();
  if (!p5ShouldIntermittentGlitch(logIndex, { type:'dialog', speaker:'X' }) && logIndex < 6) return;
  const pw = document.getElementById('pw5');
  if (pw) pw.classList.add('p5-glitch-idle');
  const tick = () => {
    if (!_p5Playing || !_p5PlayerCtx) return;
    if (!p5ShouldIntermittentGlitch(logIndex, _p5PlayerCtx.lastEntry)) return;
    const r = Math.random();
    if (r < 0.35) p5PlayerShake(playerEl);
    if (r < 0.55) {
      const lines = logBody.querySelectorAll('.p5-log-line.visible');
      const corruptible = Array.from(lines).filter(el => el.dataset.p5NoGlitch !== '1');
      if (corruptible.length) {
        const el = corruptible[Math.floor(Math.random() * corruptible.length)];
        p5CorruptLineEl(el);
        _p5Timers.push(setTimeout(() => p5RestoreLineEl(el), 160 + Math.random() * 120));
      }
    }
  };
  const id = setInterval(tick, 3500 + Math.random() * 5000);
  _p5GlitchTimers.push(id);
}

function p5StopIntermittentGlitch() {
  _p5GlitchTimers.forEach(clearInterval);
  _p5GlitchTimers = [];
  const pw = document.getElementById('pw5');
  if (pw) pw.classList.remove('p5-glitch-idle');
}

function p5RunDeviationBurst(playerEl, logBody) {
  const pw = document.getElementById('pw5');
  playerEl.classList.add('p5-shake-burst');
  if (pw) pw.classList.add('p5-window-glitching');

  // Моргание рамки #pw5
  let borderOn = true;
  const borderBlink = setInterval(() => {
    if (!pw) return;
    pw.style.borderColor = borderOn ? '#62F1F5' : 'transparent';
    pw.style.boxShadow   = borderOn
      ? '0 0 24px 4px rgba(98,241,245,0.6)'
      : '0 0 4px rgba(98,241,245,0.1)';
    borderOn = !borderOn;
  }, 110);
  _p5GlitchTimers.push(borderBlink);

  for (let i = 0; i < 22; i++) {
    _p5Timers.push(setTimeout(() => p5PlayerShake(playerEl), i * 55));
    _p5Timers.push(setTimeout(() => p5CyanFlash(), i * 80));
    if (i % 3 === 0) _p5Timers.push(setTimeout(() => p5WindowShake(), i * 90));
  }
  let n = 0;
  const burst = setInterval(() => {
    p5CorruptAllVisible(logBody, true);
    n++;
    if (n >= 18) {
      clearInterval(burst);
      clearInterval(borderBlink);
      _p5Timers.push(setTimeout(() => {
        p5RestoreAllVisible(logBody);
        playerEl.classList.remove('p5-shake-burst');
        if (pw) {
          pw.classList.remove('p5-window-glitching');
          pw.style.borderColor = '';
          pw.style.boxShadow   = '';
        }
        _p5CyanTheme = true;
        p5ApplyCyanTheme();
      }, 700));
    }
  }, 150);
  _p5GlitchTimers.push(burst);
}

function p5IsDeviationTrigger(entry) {
  if (!entry) return false;
  if (entry.type === 'dialog' && entry.speaker === 'SYS' && entry.line && entry.line.includes('ВЛАДЕЛЕЦ'))
    return true;
  if (entry.type === 'sfx' && entry.text && /▒/.test(entry.text)) return true;
  return false;
}

function renderP5Launcher() {
  const pw = document.getElementById('pw5');
  if (!pw) return;
  if (_p5CyanTheme) p5ApplyCyanTheme();
  const body = pw.querySelector('.win-body');
  body.innerHTML = '';

  const launcher = document.createElement('div');
  launcher.className = 'p5-launcher';

  const header = document.createElement('div');
  header.className = 'p5-launcher-header';
  header.textContent = '|[ > ] ЧЁРНЫЙ ЯЩИК — АУДИОЗАПИСИ';
  launcher.appendChild(header);

  const grid = document.createElement('div');
  grid.className = 'p5-app-grid';

  const build = () => {
    P5_LOGS.forEach(logEntry => {
      const icon = document.createElement('div');
      icon.className = 'p5-app-icon';
      const sym = document.createElement('div');
      sym.className = 'p5-app-symbol';
      sym.textContent = logEntry.icon;
      const lbl = document.createElement('div');
      lbl.className = 'p5-app-label';
      lbl.textContent = logEntry.label;
      icon.append(sym, lbl);
      icon.addEventListener('click', () => openP5Player(logEntry));
      grid.appendChild(icon);
    });
    launcher.appendChild(grid);
    body.appendChild(launcher);
  };

  build();
}

function p5RenderLine(entry, logBody, logIndex) {
  const idleEl = document.getElementById('p5-idle');
  if (idleEl) idleEl.remove();
  if (!logBody) return null;
  const div = document.createElement('div');
  let lineType = entry.type;
  if (logIndex === 12 && entry.type === 'header' && entry.text && entry.text.indexOf('>——') === 0)
    lineType = 'sep';
  div.className = 'p5-log-line type-' + lineType;
  if (entry.noGlitch) div.dataset.p5NoGlitch = '1';
  if (entry.type === 'blank') {
    logBody.appendChild(div);
    logBody.scrollTop = logBody.scrollHeight;
    requestAnimationFrame(() => div.classList.add('visible'));
    return div;
  }
  if (entry.type === 'dialog') {
    const col = p5SpeakerColor(entry.speaker);
    div.style.color = 'rgba(200,200,200,0.72)';
    const spEl = document.createElement('span');
    spEl.style.color = col;
    spEl.textContent = entry.speaker;
    div.append(spEl, document.createTextNode(' : '), document.createTextNode(entry.line));
  } else {
    div.textContent = entry.text;
  }
  logBody.appendChild(div);
  logBody.scrollTop = logBody.scrollHeight;
  requestAnimationFrame(() => requestAnimationFrame(() => div.classList.add('visible')));
  if (entry.type === 'end') {
    div.addEventListener('click', () => { _p5StopPlayer(); renderP5Launcher(); });
  }
  return div;
}

function openP5Player(logEntry) {
  _p5StopPlayer();
  const logIndex = logEntry.logIndex || p5CanonIndex(logEntry.id);
  const isTextLog = /^txt/i.test(logEntry.id);
  const showWaveform = !isTextLog && logEntry.noWaveform !== true;

  const pw = document.getElementById('pw5');
  if (!pw) return;
  if (_p5CyanTheme) p5ApplyCyanTheme();
  const body = pw.querySelector('.win-body');
  body.innerHTML = '';

  const player = document.createElement('div');
  player.className = 'p5-player' + (showWaveform ? '' : ' p5-no-waveform');

  const ptb = document.createElement('div');
  ptb.className = 'p5-player-titlebar';
  const recDot = document.createElement('div');
  recDot.className = 'p5-player-rec stopped';
  recDot.id = 'p5-rec-dot';
  const ptitle = document.createElement('div');
  ptitle.className = 'p5-player-title';
  ptitle.textContent = logEntry.titlebar;
  const pid = document.createElement('div');
  pid.className = 'p5-player-id';
  pid.textContent = logEntry.titlebarId;
  const backBtn = document.createElement('button');
  backBtn.className = 'p5-ctrl-btn';
  backBtn.style.fontSize = '9px';
  backBtn.style.padding = '2px 8px';
  backBtn.textContent = '\u2190 НАЗАД';
  backBtn.addEventListener('click', () => { _p5StopPlayer(); renderP5Launcher(); });
  ptb.append(recDot, ptitle, pid, backBtn);
  player.appendChild(ptb);

  const wfBar = document.createElement('div');
  wfBar.className = 'p5-waveform-bar';
  const wfVis = document.createElement('div');
  wfVis.className = 'p5-waveform-vis';
  wfVis.id = 'p5-wf-vis';
  for (let i = 0; i < 36; i++) {
    const b = document.createElement('div');
    b.className = 'p5-wf-bar';
    b.style.animationDelay = (Math.random() * 0.5) + 's';
    wfVis.appendChild(b);
  }
  const wfTimer = document.createElement('div');
  wfTimer.className = 'p5-wf-timer';
  wfTimer.id = 'p5-wf-timer';
  wfTimer.textContent = '00:00';
  wfBar.append(wfVis, wfTimer);
  player.appendChild(wfBar);

  const ctrl = document.createElement('div');
  ctrl.className = 'p5-controls';
  const btnPlay = document.createElement('button');
  btnPlay.className = 'p5-ctrl-btn primary';
  btnPlay.id = 'p5-btn-play';
  btnPlay.textContent = '\u25B6 PLAY';
  const btnReset = document.createElement('button');
  btnReset.className = 'p5-ctrl-btn';
  btnReset.id = 'p5-btn-reset';
  btnReset.disabled = true;
  btnReset.textContent = '\u21BA RESET';
  const speedRow = document.createElement('div');
  speedRow.className = 'p5-ctrl-speed';
  if (!isTextLog) {
    speedRow.append(document.createTextNode('SPEED: '));
    [1, 2, 5].forEach(sp => {
      const s = document.createElement('span');
      s.className = 'p5-speed-opt' + (sp === 1 ? ' active' : '');
      s.textContent = '\u00D7' + sp;
      s.addEventListener('click', () => {
        if (_p5Playing) return;
        speedRow.querySelectorAll('.p5-speed-opt').forEach(x => x.classList.remove('active'));
        s.classList.add('active');
        _p5Speed = sp;
      });
      speedRow.appendChild(s);
    });
  }
  ctrl.append(btnPlay, btnReset, speedRow);
  player.appendChild(ctrl);

  const logBody = document.createElement('div');
  logBody.className = 'p5-log-body';
  logBody.id = 'p5-log-body';
  const idle = document.createElement('div');
  idle.className = 'p5-idle-msg';
  idle.id = 'p5-idle';
  const idleText = document.createElement('div');
  idleText.className = 'p5-idle-text';
  idleText.textContent = '\u041d\u0410\u0416\u041c\u0418\u0422\u0415 PLAY \u0414\u041b\u042f \u0412\u041e\u0421\u041f\u0420\u041e\u0418\u0417\u0412\u0415\u0414\u0415\u041d\u0418\u042f';
  idle.appendChild(idleText);
  logBody.appendChild(idle);
  player.appendChild(logBody);
  body.appendChild(player);

  _p5PlayerCtx = { logEntry, logIndex, playerEl: player, logBody, showWaveform };

  function p5StartPlayback() {
    _p5Playing = true;
    _p5PlayerCtx.lineIdx = 0;
    btnPlay.disabled = true;
    btnReset.disabled = false;
    recDot.classList.remove('stopped');
    if (showWaveform) wfVis.classList.add('playing');

    if (logIndex >= 6 && logIndex <= 36 && logIndex !== 37 && logIndex !== 12)
      p5StartIntermittentGlitch(player, logBody, logIndex);

    const lines = logEntry.log;
    function showNext() {
      if (!_p5Playing || !_p5PlayerCtx) return;
      if (_p5PlayerCtx.lineIdx >= lines.length) {
        _p5Playing = false;
        p5StopIntermittentGlitch();
        btnPlay.disabled = false;
        recDot.classList.add('stopped');
        if (showWaveform) wfVis.classList.remove('playing');
        return;
      }
      const entry = lines[_p5PlayerCtx.lineIdx];
      _p5PlayerCtx.lastEntry = entry;
      p5RenderLine(entry, logBody, logIndex);

      if (showWaveform && typeof entry.t === 'number') {
        wfTimer.textContent = p5fmtTime(entry.t);
      }

      if (logIndex === 37 && p5IsDeviationTrigger(entry) && !_p5PlayerCtx.deviationDone) {
        _p5PlayerCtx.deviationDone = true;
        p5RunDeviationBurst(player, logBody);
      } else if (logIndex === 12 && entry.type === 'dialog' && p5IsDivSpeaker(entry.speaker)) {
        const pw = document.getElementById('pw5');
        if (pw) {
          pw.classList.add('p5-glitch-idle');
          _p5Timers.push(setTimeout(() => pw.classList.remove('p5-glitch-idle'), 1200));
        }
        const vis = logBody.querySelectorAll('.p5-log-line.visible');
        const corruptible = Array.from(vis).filter(el => el.dataset.p5NoGlitch !== '1');
        if (corruptible.length) {
          const el = corruptible[corruptible.length - 1];
          p5CorruptLineEl(el);
          _p5Timers.push(setTimeout(() => p5RestoreLineEl(el), 200));
        }
      }

      _p5PlayerCtx.lineIdx++;
      const delay = p5LineDelayMs(entry) / _p5Speed;
      _p5Timers.push(setTimeout(showNext, delay));
    }
    showNext();
  }

  function p5ResetPlayback() {
    _p5StopPlayer();
    openP5Player(logEntry);
  }

  btnPlay.addEventListener('click', () => { if (!_p5Playing) p5StartPlayback(); });
  btnReset.addEventListener('click', p5ResetPlayback);
}

function _p5StopPlayer() {
  _p5Timers.forEach(id => { clearTimeout(id); clearInterval(id); });
  _p5Timers = [];
  p5StopIntermittentGlitch();
  document.querySelectorAll('.p5-player.p5-shake-burst').forEach(el => el.classList.remove('p5-shake-burst'));
  _p5Playing = false;
  _p5Speed = 1;
  _p5PlayerCtx = null;
}

// Перехватываем openPage(5) — показываем лаунчер вместо renderPage
const _origOpenPage = openPage;
window.openPage = function(num) {
  if (num === 5) {
    let pw = document.getElementById('pw5');
    if (!pw) return;
    const offset = 4 * 28;
    pw.style.left = Math.max(12, Math.round((window.innerWidth - 420) / 2) - 150 + offset) + 'px';
    pw.style.top  = Math.max(12, Math.round((window.innerHeight - 460) / 2) - 50 + offset) + 'px';
    pw.style.display = 'flex';
    zTop++; pw.style.zIndex = zTop;
    renderP5Launcher();
    return;
  }
  _origOpenPage(num);
};

// Патчим десктопные иконки чтобы они вызывали window.openPage
function createDesktopIcons() {
  const wrap = document.getElementById('desktop-icons');
  wrap.textContent = '';
  const items = [
    { label: 'PAGE 1', icon: '\u25A3', action: () => window.openPage(1) },
    { label: 'PAGE 2', icon: '\u25A3', action: () => window.openPage(2) },
    { label: 'PAGE 3', icon: '\u25A3', action: () => window.openPage(3) },
    { label: 'PAGE 4', icon: '\u25A3', action: () => window.openPage(4) },
    { label: 'PAGE 5', icon: '\u25A3', action: () => window.openPage(5) },
  ];
  if (typeof extraPages === 'object') {
    const extraNums = Object.keys(extraPages).map(Number).sort((a, b) => a - b);
    extraNums.forEach(num => {
      const pg = extraPages[num];
      const title = (pg && pg.title) ? pg.title.toUpperCase().slice(0, 10) : ('PAGE ' + num);
      items.push({ label: title, icon: '\u25A3', action: () => window.openPage(num) });
    });
  }
  items.push(
    { label: 'EDITOR', icon: '\u270E', action: () => openEditor(1) },
    { label: 'HISTORY', icon: '\u25EB', action: () => openHistory() }
  );
  items.forEach(item => {
    const icon = document.createElement('div');
    icon.className = 'desktop-icon';
    const symbol = document.createElement('div');
    symbol.className = 'desktop-icon-symbol';
    symbol.textContent = item.icon;
    const label = document.createElement('div');
    label.className = 'desktop-icon-label';
    label.textContent = item.label;
    icon.appendChild(symbol);
    icon.appendChild(label);
    icon.addEventListener('click', () => { zTop++; item.action(); });
    wrap.appendChild(icon);
  });
}
