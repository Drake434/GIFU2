/**
 * Виджет терминала NanoTrasen (SS13/SS14) для встройки в анкету персонажа.
 * Принимает DOM-элемент container и рисует внутри него всё оформление.
 * Данные можно передать через container.dataset.characterData (JSON) или используется пример по умолчанию.
 * Полностью автономен: стили внутри <style>, все элементы создаются через createElement, текст – через textContent (безопасно от XSS).
 */
function init(container) {
    // Очистка и базовая стилизация контейнера
    container.textContent = '';
    container.classList.add('nt-widget');

    // Встроенный CSS (только внутри виджета)
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
        }
        .nt-value {
            color: #00FF41;
            font-size: 11px;
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
        }
        .nt-btn:hover {
            background: rgba(0,255,65,0.08);
            border-color: rgba(0,255,65,0.5);
        }
        .nt-badge {
            font-size: 9px;
            letter-spacing: 1px;
            padding: 2px 6px;
            border-radius: 2px;
            border: 1px solid;
        }
        .nt-badge-red {
            color: #ff4444;
            border-color: #ff4444;
        }
        .nt-badge-gold {
            color: #ffd700;
            border-color: #ffd700;
        }
        .nt-badge-accent {
            color: #62F1F5;
            border-color: #62F1F5;
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
            margin-top: 4px;
            white-space: pre-wrap;
        }
        .nt-blink {
            animation: nt-blink 1s step-end infinite;
        }
        @keyframes nt-blink {
            50% { opacity: 0; }
        }
        .nt-skill-bar {
            color: #62F1F5;
            letter-spacing: -1px;
        }
    `;
    container.appendChild(style);

    // --- Вспомогательные функции ---
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

    const skillBar = (level) => {
        const filled = Math.round(level / 10);
        const empty = 10 - filled;
        return '█'.repeat(filled) + '░'.repeat(empty);
    };

    // --- Загрузка данных ---
    const defaultData = {
        identity: {
            name: 'John Doe',
            species: 'Human',
            age: 34,
            gender: 'Male',
            bloodType: 'O+'
        },
        occupation: {
            title: 'Station Engineer',
            department: 'Engineering',
            rank: 'Senior',
            clearance: 'Level 3'
        },
        medical: {
            status: 'Healthy',
            injuries: 'None',
            implants: 'None'
        },
        skills: [
            { name: 'Construction', level: 85 },
            { name: 'Electrical', level: 72 },
            { name: 'Atmospherics', level: 60 }
        ],
        notes: 'No additional notes.'
    };

    let data;
    try {
        data = container.dataset.characterData
            ? JSON.parse(container.dataset.characterData)
            : defaultData;
    } catch (e) {
        data = defaultData;
    }

    // --- Сборка интерфейса ---
    // Заголовок записи
    const headerDiv = h('div', '');
    headerDiv.appendChild(h('span', '', 'NANOTRASEN PERSONNEL ARCHIVE '));
    headerDiv.appendChild(h('span', 'nt-blink', '█'));
    container.appendChild(headerDiv);
    container.appendChild(terminalLine('RECORD STATUS: ACTIVE'));

    // Разделитель
    container.appendChild(h('hr', 'nt-sep'));

    // Секция идентификации
    container.appendChild(h('div', 'nt-section-header', '// IDENTIFICATION //'));
    container.appendChild(row('NAME', data.identity.name));
    container.appendChild(row('SPECIES', data.identity.species));
    container.appendChild(row('AGE', data.identity.age));
    container.appendChild(row('GENDER', data.identity.gender));
    container.appendChild(row('BLOOD TYPE', data.identity.bloodType));

    // Секция занятости
    container.appendChild(h('div', 'nt-section-header', '// OCCUPATION //'));
    const occCard = h('div', 'nt-card');
    occCard.appendChild(row('TITLE', data.occupation.title));
    occCard.appendChild(row('DEPARTMENT', data.occupation.department));
    occCard.appendChild(row('RANK', data.occupation.rank));
    occCard.appendChild(row('CLEARANCE', data.occupation.clearance));
    container.appendChild(occCard);

    // Медицинская секция
    container.appendChild(h('div', 'nt-section-header', '// MEDICAL //'));
    container.appendChild(row('STATUS', data.medical.status));
    container.appendChild(row('INJURIES', data.medical.injuries));
    container.appendChild(row('IMPLANTS', data.medical.implants));

    // Секция навыков
    container.appendChild(h('div', 'nt-section-header', '// SKILLS //'));
    const skillsDiv = h('div', '');
    (data.skills || []).forEach(skill => {
        const skillRow = h('div', 'nt-row');
        const nameSpan = h('span', 'nt-label', skill.name);
        const barSpan = h('span', 'nt-skill-bar', '[' + skillBar(skill.level) + '] ' + skill.level + '%');
        skillRow.appendChild(nameSpan);
        skillRow.appendChild(barSpan);
        skillsDiv.appendChild(skillRow);
    });
    container.appendChild(skillsDiv);

    // Примечания
    container.appendChild(h('div', 'nt-section-header', '// NOTES //'));
    container.appendChild(commentLine(data.notes));

    // Кнопка "TOGGLE CLASSIFIED" и скрытый блок
    const toggleBtn = h('button', 'nt-btn', 'DECODE CLASSIFIED');
    const classifiedDiv = h('div', '');
    classifiedDiv.style.display = 'none';
    classifiedDiv.appendChild(h('div', 'nt-section-header', '// CLASSIFIED //'));
    classifiedDiv.appendChild(terminalLine('CLEARANCE LEVEL: OMEGA'));
    classifiedDiv.appendChild(commentLine('Subject exhibits unusual resilience. Further observation required.'));
    classifiedDiv.appendChild(h('div', 'nt-badge nt-badge-red', 'RESTRICTED'));
    toggleBtn.addEventListener('click', () => {
        classifiedDiv.style.display = classifiedDiv.style.display === 'none' ? 'block' : 'none';
    });
    container.appendChild(toggleBtn);
    container.appendChild(classifiedDiv);

    // Футер
    container.appendChild(h('hr', 'nt-sep'));
    container.appendChild(terminalLine('END OF RECORD'));
}