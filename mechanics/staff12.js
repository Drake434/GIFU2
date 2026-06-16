// ===================== ВСТРОЕННЫЕ СТИЛИ =====================
const style = document.createElement('style');
style.textContent = `
    .sw-wrap {
        color: #00FF41;
        font-family: 'Courier New', monospace;
        font-size: 11px;
        line-height: 1.7;
        padding: 4px 2px;
        position: relative;
    }
    .sw-wrap * { box-sizing: border-box; }
    .sw-section-header {
        font-size: 9px;
        letter-spacing: 2px;
        color: rgba(0,255,65,0.45);
        border-bottom: 1px solid rgba(0,255,65,0.15);
        padding-bottom: 5px;
        margin-top: 10px;
        margin-bottom: 6px;
        text-transform: uppercase;
    }
    .sw-section-header:first-child { margin-top: 0; }
    .sw-row {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: #00FF41;
        padding: 3px 0;
        border-bottom: 1px solid rgba(0,255,65,0.07);
    }
    .sw-label {
        color: rgba(0,255,65,0.45);
        font-size: 9px;
        letter-spacing: 1px;
        min-width: 120px;
    }
    .sw-value {
        color: #00FF41;
        font-size: 11px;
        text-align: right;
        flex: 1;
    }
    .sw-stat-block {
        background: rgba(0,255,65,0.04);
        border: 1px solid rgba(0,255,65,0.12);
        border-radius: 3px;
        padding: 8px 10px;
        margin: 6px 0;
    }
    .sw-btn {
        background: transparent;
        border: 1px solid rgba(0,255,65,0.3);
        color: #00FF41;
        font-family: 'Courier New', monospace;
        font-size: 9px;
        letter-spacing: 2px;
        padding: 3px 10px;
        cursor: pointer;
        border-radius: 2px;
        transition: background 0.15s, border-color 0.15s;
        margin-right: 5px;
        margin-bottom: 5px;
    }
    .sw-btn:hover { background: rgba(0,255,65,0.08); border-color: rgba(0,255,65,0.5); }
    .sw-btn.active { background: rgba(0,255,65,0.12); border-color: #00FF41; color: #62F1F5; }
    .sw-sep { border: none; border-top: 1px solid rgba(0,255,65,0.12); margin: 7px 0; }
    .sw-prefix { color: rgba(0,255,65,0.45); font-size: 9px; margin-right: 5px; }
    .sw-comment { color: rgba(0,255,65,0.4); font-size: 10px; margin: 3px 0; font-style: italic; }
    .sw-adv  { color: #00FF41; }
    .sw-dis  { color: #ff4444; }
    .sw-adv-label { color: rgba(0,255,65,0.45); font-size: 9px; letter-spacing: 1px; margin-bottom: 3px; }
    .sw-dis-label { color: rgba(255,68,68,0.6); font-size: 9px; letter-spacing: 1px; margin-bottom: 3px; }
    .sw-blink { animation: sw-blink 1s step-end infinite; }
    @keyframes sw-blink { 50% { opacity: 0; } }
    .sw-ascii {
        font-size: 11px;
        line-height: 1.4;
        color: rgba(0,255,65,0.5);
        white-space: pre;
        margin: 4px 0 6px;
    }
    .sw-ascii .hl { color: #62F1F5; }
    .sw-panel { display: none; }
    .sw-panel.visible { display: block; }
`;
container.appendChild(style);

// ===================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====================
const h = (tag, cls, text) => {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text !== undefined) el.textContent = text;
    return el;
};
const row = (label, value) => {
    const r = h('div', 'sw-row');
    const l = h('span', 'sw-label', label);
    const v = h('span', 'sw-value', value);
    r.append(l, v);
    return r;
};
const prefixLine = (prefix, text, cls) => {
    const d = h('div', cls || '');
    d.append(h('span', 'sw-prefix', prefix), h('span', '', text));
    return d;
};

// ===================== ДАННЫЕ ХВАТОВ =====================
const gripData = {
    center: {
        label: 'ЦЕНТР',
        title: 'ХВАТ ЗА ЦЕНТРАЛЬНУЮ СЕКЦИЮ',
        ascii: '[===]~<span class="hl">[===]</span>~[===]',
        rows: [
            ['Попадание',       'd20 + Ловкость'],
            ['Урон',            'd20 + Сила − 1'],
            ['Зона поражения',  'все в радиусе 2 м'],
            ['Парирование',     'd20 + Ловкость + 2'],
        ],
        adv: ['+2 к парированию', 'Атака по нескольким целям (2 м)', 'Атака после успешного парирования'],
        dis: ['−1 к урону', 'Невозможен захват цепью'],
        comment: 'Держите за среднюю секцию, работая двумя концами как парными дубинами.',
    },
    end: {
        label: 'КРАЙНЯЯ',
        title: 'ХВАТ ЗА КРАЙНЮЮ СЕКЦИЮ',
        ascii: '<span class="hl">[===]</span>~[===]~[===]',
        rows: [
            ['Попадание',       'd20 + Ловкость − 2'],
            ['Урон',            'd20 + d6 (без Силы)'],
            ['Дальность',       '4 м'],
            ['Парирование',     'd20 + Ловкость − 2'],
        ],
        adv: ['Увеличенная дальность (4 м)', 'Мощный критический удар'],
        dis: ['−2 к попаданию и парированию', 'Помеха в тесном пространстве', 'Невозможен захват цепью'],
        comment: 'Раскручиваете посох за один конец, нанося размашистые удары.',
    },
    midend: {
        label: 'СРЕД+КРАЙ',
        title: 'ХВАТ ЗА СРЕДНЮЮ И КРАЙНЮЮ СЕКЦИИ',
        ascii: '[===]~<span class="hl">[===]~[===]</span>',
        rows: [
            ['Попадание',   'd20 + Ловкость'],
            ['Урон',        'd20 + Сила − 1'],
            ['Захват цепью','d20 + Ловкость + 2'],
            ['Обезоруживание','после захвата: d20 + Сила'],
        ],
        adv: ['+2 к захвату цепью', 'Можно обезоружить захваченного врага'],
        dis: ['−1 к урону'],
        comment: 'Одна рука на средней секции, вторая — на крайней.',
    },
    twoends: {
        label: '2 КРАЯ',
        title: 'ХВАТ ЗА ДВЕ КРАЙНИЕ СЕКЦИИ',
        ascii: '<span class="hl">[===]</span>~[===]~<span class="hl">[===]</span>',
        rows: [
            ['Попадание',   'd20 + Ловкость + 2'],
            ['Урон',        'd20 + Сила'],
            ['Дальность',   '1.5 м'],
            ['Доп. атака',  'одна дополнительная атака за действие'],
            ['Блок',        'd20 + Телосложение − 2 (реакция)'],
        ],
        adv: ['+2 к попаданию', 'Дополнительная атака', 'Возможность блока'],
        dis: ['Нельзя использовать захват цепью', '−2 к блоку'],
        comment: 'Держите обе крайние секции — средняя свободна для блоков.',
    },
    electric: {
        label: 'ЭЛЕКТРО',
        title: 'ЭЛЕКТРИЧЕСКИЙ РЕЖИМ',
        ascii: '<span class="hl">⚡</span>[===]~[===]~[===]<span class="hl">⚡</span>',
        rows: [
            ['Активация',       'бонусное действие'],
            ['Доп. урон',       '+d4 электрического (каждая атака)'],
            ['Макс. заряд',     'после 3 попаданий'],
            ['Перегрузка',      '4-й удар: +d8, режим отключается'],
            ['Восстановление',  '8 раундов (или 6 за действие)'],
        ],
        adv: ['Доп. урон электричеством', 'Мощная перегрузка'],
        dis: ['Долгий откат после перегрузки'],
    },
};

// ===================== СБОРКА =====================
const wrap = h('div', 'sw-wrap');

// Шапка
const topLine = h('div', '');
topLine.append(h('span', '', 'NT ARMORY DB // SANJIEGUN '), h('span', 'sw-blink', '█'));
wrap.appendChild(topLine);
wrap.appendChild(h('hr', 'sw-sep'));

// Кнопки
const btnRow = h('div', '');
const panelsWrap = h('div', '');
const gripIds = Object.keys(gripData);

gripIds.forEach((id, i) => {
    const d = gripData[id];

    // Кнопка
    const btn = h('button', 'sw-btn' + (i === 0 ? ' active' : ''), d.label);
    btn.dataset.grip = id;
    btn.addEventListener('click', () => {
        wrap.querySelectorAll('.sw-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        panelsWrap.querySelectorAll('.sw-panel').forEach(p => p.classList.remove('visible'));
        document.getElementById('swp_' + id).classList.add('visible');
    });
    btnRow.appendChild(btn);

    // Панель
    const panel = h('div', 'sw-panel' + (i === 0 ? ' visible' : ''));
    panel.id = 'swp_' + id;

    panel.appendChild(h('div', 'sw-section-header', '// ' + d.title + ' //'));

    // ASCII
    const ascii = h('div', 'sw-ascii');
    ascii.innerHTML = d.ascii;
    panel.appendChild(ascii);

    // Таблица характеристик
    const statBlock = h('div', 'sw-stat-block');
    d.rows.forEach(([l, v]) => statBlock.appendChild(row(l, v)));
    panel.appendChild(statBlock);

    // Преимущества
    if (d.adv.length) {
        panel.appendChild(h('div', 'sw-adv-label', 'ПРЕИМУЩЕСТВА'));
        d.adv.forEach(a => panel.appendChild(prefixLine('+', a, 'sw-adv')));
    }

    // Недостатки
    if (d.dis.length) {
        const disLabel = h('div', 'sw-dis-label', 'НЕДОСТАТКИ');
        disLabel.style.marginTop = '5px';
        panel.appendChild(disLabel);
        d.dis.forEach(d2 => panel.appendChild(prefixLine('−', d2, 'sw-dis')));
    }

    // Комментарий
    if (d.comment) {
        panel.appendChild(h('hr', 'sw-sep'));
        panel.appendChild(h('div', 'sw-comment', '// ' + d.comment));
    }

    panelsWrap.appendChild(panel);
});

wrap.appendChild(btnRow);
wrap.appendChild(h('hr', 'sw-sep'));
wrap.appendChild(panelsWrap);
wrap.appendChild(h('hr', 'sw-sep'));
wrap.appendChild(prefixLine('|[ > ]', ' END OF ENTRY'));

container.appendChild(wrap);
