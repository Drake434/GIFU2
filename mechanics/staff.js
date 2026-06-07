/**
 * Виджет "Саньцзегунь" — трёхсекционный боевой цеп.
 * Встраивается в контейнер через init(container).
 * Переключение хватов кнопками, визуализация секций символами.
 */
function init(container) {
    // Очистка и базовый класс
    container.textContent = '';
    container.classList.add('nt-widget');

    // ===================== ВСТРОЕННЫЕ СТИЛИ =====================
    const style = document.createElement('style');
    style.textContent = `
        .nt-widget {
            background: #0d0d0d;
            color: #00FF41;
            font-family: 'Courier New', monospace;
            font-size: 11px;
            line-height: 1.7;
            padding: 12px 14px;
            position: relative;
            overflow-y: auto;
            scrollbar-width: thin;
            scrollbar-color: rgba(0,255,65,0.3) #0d0d0d;
            border: 1px solid rgba(0,255,65,0.15);
            border-radius: 3px;
            box-shadow: 0 0 15px rgba(0,255,65,0.1);
        }
        .nt-widget * {
            box-sizing: border-box;
        }
        .nt-widget::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(0deg, rgba(0,255,65,0.03) 0px, rgba(0,255,65,0.03) 1px, transparent 1px, transparent 3px);
            pointer-events: none;
            z-index: 1;
        }
        .nt-widget > * {
            position: relative;
            z-index: 2;
        }
        .nt-section-header {
            font-size: 9px;
            letter-spacing: 2px;
            color: rgba(0,255,65,0.45);
            border-bottom: 1px solid rgba(0,255,65,0.15);
            padding-bottom: 6px;
            margin-top: 16px;
            margin-bottom: 8px;
            text-transform: uppercase;
        }
        .nt-row {
            display: flex;
            justify-content: space-between;
            font-size: 11px;
            color: #00FF41;
            padding: 3px 0;
            border-bottom: 1px solid rgba(0,255,65,0.07);
        }
        .nt-label {
            color: rgba(0,255,65,0.45);
            font-size: 9px;
            letter-spacing: 1px;
            min-width: 100px;
        }
        .nt-value {
            color: #00FF41;
            font-size: 11px;
            text-align: right;
            flex: 1;
        }
        .nt-card {
            background: rgba(0,255,65,0.04);
            border: 1px solid rgba(0,255,65,0.12);
            border-radius: 3px;
            padding: 10px 12px;
            margin: 8px 0;
        }
        .nt-btn {
            background: transparent;
            border: 1px solid rgba(0,255,65,0.3);
            color: #00FF41;
            font-family: 'Courier New', monospace;
            font-size: 9px;
            letter-spacing: 2px;
            padding: 4px 12px;
            cursor: pointer;
            border-radius: 2px;
            transition: background 0.15s, border-color 0.15s;
            margin-right: 6px;
            margin-bottom: 6px;
        }
        .nt-btn:hover {
            background: rgba(0,255,65,0.08);
            border-color: rgba(0,255,65,0.5);
        }
        .nt-btn.active {
            background: rgba(0,255,65,0.12);
            border-color: #00FF41;
            color: #62F1F5;
        }
        .nt-sep {
            border: none;
            border-top: 1px solid rgba(0,255,65,0.12);
            margin: 8px 0;
        }
        .nt-prefix {
            color: rgba(0,255,65,0.45);
            font-size: 9px;
            margin-right: 6px;
        }
        .nt-comment {
            color: rgba(0,255,65,0.45);
            font-size: 10px;
            white-space: pre-wrap;
            margin: 4px 0;
        }
        .nt-blink {
            animation: nt-blink 1s step-end infinite;
        }
        @keyframes nt-blink {
            50% { opacity: 0; }
        }
        .nt-ascii {
            font-size: 12px;
            line-height: 1.3;
            color: rgba(0,255,65,0.5);
            white-space: pre;
            margin: 6px 0;
        }
        .nt-ascii .active-segment {
            color: #62F1F5;
        }
        .nt-ascii .hand-marker {
            color: #ffd700;
        }
        .nt-badge {
            font-size: 9px;
            letter-spacing: 1px;
            padding: 2px 6px;
            border-radius: 2px;
            border: 1px solid;
            display: inline-block;
            margin: 2px 0;
        }
        .nt-badge-red { color: #ff4444; border-color: #ff4444; }
        .nt-badge-gold { color: #ffd700; border-color: #ffd700; }
        .nt-badge-accent { color: #62F1F5; border-color: #62F1F5; }
        .grip-panel { display: none; }
        .grip-panel.visible { display: block; }
    `;
    container.appendChild(style);

    // ===================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====================
    const h = (tag, cls, content) => {
        const el = document.createElement(tag);
        if (cls) el.className = cls;
        if (typeof content === 'string') el.textContent = content;
        else if (Array.isArray(content)) content.forEach(c => el.appendChild(c));
        else if (content instanceof Node) el.appendChild(content);
        return el;
    };

    const row = (label, value) => {
        const r = h('div', 'nt-row');
        r.appendChild(h('span', 'nt-label', label));
        r.appendChild(h('span', 'nt-value', value));
        return r;
    };

    const terminalLine = (text) => {
        const div = h('div', '');
        div.appendChild(h('span', 'nt-prefix', '|[ > ]'));
        div.appendChild(h('span', '', text));
        return div;
    };

    const commentLine = (text) => {
        const div = h('div', 'nt-comment');
        div.textContent = '// ' + text;
        return div;
    };

    // Создание ASCII-схемы посоха для разных хватов
    const createAscii = (gripId) => {
        // Секции: left, middle, right. Активные и руки в зависимости от хвата.
        const configs = {
            center:   { left: false, mid: true, right: false, hands: 'mid' },
            end:      { left: true,  mid: false, right: false, hands: 'left' },
            midend:   { left: false, mid: true, right: true, hands: 'mid_right' },
            twoends:  { left: true,  mid: false, right: true, hands: 'left_right' },
            electric: { left: false, mid: false, right: false, hands: 'none' } // для режима покажем другую графику
        };
        const cfg = configs[gripId] || configs.center;

        const seg = (content, isActive) => {
            if (isActive) return `<span class="active-segment">${content}</span>`;
            return `<span>${content}</span>`;
        };

        const hand = (pos) => `<span class="hand-marker">${pos}</span>`;

        // Собираем строку: [левая]~[средняя]~[правая] с руками внизу
        let line1 = '';
        line1 += seg('[===]', cfg.left) + '<span>~</span>';
        line1 += seg('[===]', cfg.mid) + '<span>~</span>';
        line1 += seg('[===]', cfg.right);

        let line2 = '';
        if (cfg.hands === 'mid') {
            line2 = '     ' + hand('H') + '        ' + hand('H');
        } else if (cfg.hands === 'left') {
            line2 = hand('H') + '   ' + hand('H');
        } else if (cfg.hands === 'mid_right') {
            line2 = '          ' + hand('H') + '   ' + hand('H');
        } else if (cfg.hands === 'left_right') {
            line2 = hand('H') + '   ' + hand('H') + '            '; // левая рука слева, правая справа
        } else {
            line2 = '';
        }

        const ascii = h('div', 'nt-ascii');
        ascii.innerHTML = line1 + '\n' + line2; // innerHTML безопасен, т.к. строки статичные
        return ascii;
    };

    // ===================== ДАННЫЕ ХВАТОВ =====================
    const gripData = {
        center: {
            title: 'ХВАТ ЗА ЦЕНТРАЛЬНУЮ СЕКЦИЮ',
            rows: [
                ['Попадание', 'd20 + Ловкость'],
                ['Урон', 'd20 + Сила - 1'],
                ['Зона поражения', 'Все противники в радиусе 2 м'],
                ['Парирование', 'd20 + Ловкость + 2'],
                ['После парирования', 'Мгновенная ответная атака']
            ],
            advantages: ['+2 к парированию', 'Атака по нескольким целям (2 м)', 'Можно атаковать после успешного парирования'],
            disadvantages: ['-1 к урону', 'Невозможен захват цепью'],
            comments: ['Держите за среднюю секцию, работая двумя концами как парными дубинами.']
        },
        end: {
            title: 'ХВАТ ЗА КРАЙНЮЮ СЕКЦИЮ',
            rows: [
                ['Попадание', 'd20 + Ловкость - 2'],
                ['Урон', 'd20 + d6 (без Силы)'],
                ['Дальность', '4 м'],
                ['Парирование', 'd20 + Ловкость - 2'],
                ['Критическое попадание', 'Цель проходит проверку Телосложения (СЛ по ГМ)']
            ],
            advantages: ['Увеличенная дальность (4 м)', 'Мощный критический удар'],
            disadvantages: ['-2 к попаданию и парированию', 'Помеха в тесном пространстве (худший из 2d20)', 'Невозможен захват цепью'],
            comments: ['Раскручиваете посох за один конец, нанося размашистые удары.']
        },
        midend: {
            title: 'ХВАТ ЗА СРЕДНЮЮ И КРАЙНЮЮ СЕКЦИИ',
            rows: [
                ['Попадание', 'd20 + Ловкость'],
                ['Урон', 'd20 + Сила - 1'],
                ['Захват цепью', 'd20 + Ловкость + 2 (цель защищается Ловкостью)'],
                ['Обезоруживание', 'После захвата: d20 + Сила (цель защищается Силой)']
            ],
            advantages: ['+2 к захвату цепью', 'Можно обезоружить захваченного врага'],
            disadvantages: ['-1 к урону'],
            comments: ['Одна рука на средней секции, вторая — на крайней. Компромисс контроля и захвата.']
        },
        twoends: {
            title: 'ХВАТ ЗА ДВЕ КРАЙНИЕ СЕКЦИИ',
            rows: [
                ['Попадание', 'd20 + Ловкость + 2 (ближний бой)'],
                ['Урон', 'd20 + Сила'],
                ['Дальность', '1.5 м'],
                ['Доп. атака', 'Одна дополнительная атака за действие'],
                ['Блок (реакция)', 'd20 + Телосложение - 2 против атаки']
            ],
            advantages: ['+2 к попаданию в ближнем бою', 'Дополнительная атака', 'Возможность блока'],
            disadvantages: ['Потеря бонуса к дальности', 'Нельзя использовать захват цепью', '-2 к блоку'],
            comments: ['Держите обе крайние секции. Средняя свободна и используется для блоков.']
        },
        electric: {
            title: 'ЭЛЕКТРИЧЕСКИЙ РЕЖИМ',
            rows: [
                ['Активация', 'Бонусное действие'],
                ['Длительность', 'До конца боя или перегрузки'],
                ['Доп. урон', '+d4 электрического (каждая атака)'],
                ['Макс. заряд', 'После 3 успешных попаданий'],
                ['Перегрузка', '4-й удар наносит +d8 вместо +d4, режим отключается'],
                ['Восстановление', '8 раундов (или 6 после траты действия)']
            ],
            advantages: ['Дополнительный урон электричеством', 'Возможность мощной перегрузки'],
            disadvantages: ['После перегрузки долгий откат', 'Требуется время на перезарядку'],
            comments: ['Магическая модификация. Вне боя режим полностью восстанавливается.']
        }
    };

    // ===================== СБОРКА ИНТЕРФЕЙСА =====================
    // Заголовок
    const header = h('div', '');
    header.appendChild(h('span', '', 'NANOTRASEN ARMORY DATABASE '));
    header.appendChild(h('span', 'nt-blink', '█'));
    container.appendChild(header);
    container.appendChild(terminalLine('ITEM: SANJIEGUN (TRIPLE-SECTION STAFF)'));
    container.appendChild(h('hr', 'nt-sep'));

    // Кнопки выбора хвата
    const btnContainer = h('div', '');
    const grips = ['center', 'end', 'midend', 'twoends', 'electric'];
    const gripLabels = {
        center: 'ЦЕНТР',
        end: 'КРАЙНЯЯ',
        midend: 'СРЕД+КРАЙ',
        twoends: '2 КРАЯ',
        electric: 'ЭЛЕКТРО'
    };

    // Контейнер для панелей описания
    const panelsContainer = h('div', '');

    // Создаём кнопки и соответствующие панели
    grips.forEach((gripId, index) => {
        // Кнопка
        const btn = h('button', 'nt-btn', gripLabels[gripId]);
        btn.dataset.grip = gripId;
        btn.addEventListener('click', () => switchGrip(gripId));
        btnContainer.appendChild(btn);

        // Панель описания
        const panel = h('div', 'grip-panel' + (index === 0 ? ' visible' : ''));
        panel.id = 'panel_' + gripId;

        const data = gripData[gripId];

        // Заголовок панели
        panel.appendChild(h('div', 'nt-section-header', '// ' + data.title + ' //'));

        // ASCII-схема (кроме электрического, там своя)
        if (gripId !== 'electric') {
            panel.appendChild(createAscii(gripId));
        } else {
            // Схема электрического разряда
            const elecAscii = h('div', 'nt-ascii');
            elecAscii.innerHTML = '<span class="active-segment">⚡</span><span>~~[===]~~[===]~~[===]~~</span><span class="active-segment">⚡</span>';
            panel.appendChild(elecAscii);
        }

        // Карточка с характеристиками
        const card = h('div', 'nt-card');
        data.rows.forEach(([label, value]) => card.appendChild(row(label, value)));
        panel.appendChild(card);

        // Преимущества
        if (data.advantages.length) {
            panel.appendChild(h('div', '', ''));
            const advHeader = h('div', 'nt-label', 'ПРЕИМУЩЕСТВА');
            advHeader.style.marginBottom = '4px';
            panel.appendChild(advHeader);
            data.advantages.forEach(a => {
                const line = h('div', '');
                line.appendChild(h('span', 'nt-prefix', '+'));
                line.appendChild(h('span', '', a));
                panel.appendChild(line);
            });
        }

        // Недостатки
        if (data.disadvantages.length) {
            panel.appendChild(h('div', '', ''));
            const disHeader = h('div', 'nt-label', 'НЕДОСТАТКИ');
            disHeader.style.marginBottom = '4px';
            disHeader.style.color = '#ff4444';
            panel.appendChild(disHeader);
            data.disadvantages.forEach(d => {
                const line = h('div', '');
                line.appendChild(h('span', 'nt-prefix', '-'));
                line.appendChild(h('span', '', d));
                panel.appendChild(line);
            });
        }

        // Комментарий
        if (data.comments.length) {
            panel.appendChild(h('hr', 'nt-sep'));
            data.comments.forEach(c => panel.appendChild(commentLine(c)));
        }

        panelsContainer.appendChild(panel);
    });

    // Добавляем всё в контейнер
    container.appendChild(btnContainer);
    container.appendChild(h('hr', 'nt-sep'));
    container.appendChild(panelsContainer);

    // Футер
    container.appendChild(h('hr', 'nt-sep'));
    container.appendChild(terminalLine('END OF ENTRY'));

    // ===================== ЛОГИКА ПЕРЕКЛЮЧЕНИЯ =====================
    function switchGrip(gripId) {
        // Обновляем кнопки
        const buttons = btnContainer.querySelectorAll('.nt-btn');
        buttons.forEach(b => b.classList.remove('active'));
        const activeBtn = btnContainer.querySelector(`[data-grip="${gripId}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        // Скрываем/показываем панели
        const panels = panelsContainer.querySelectorAll('.grip-panel');
        panels.forEach(p => p.classList.remove('visible'));
        const targetPanel = document.getElementById('panel_' + gripId);
        if (targetPanel) targetPanel.classList.add('visible');
    }

    // Инициализация: первая кнопка активна
    const firstBtn = btnContainer.querySelector('.nt-btn');
    if (firstBtn) firstBtn.classList.add('active');
}
