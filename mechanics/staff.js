// TEST WIDGET — тестовый виджет для проверки системы
// Получает container — DOM-элемент внутри карточки

const rows = [
  { id: 'NT-001', name: 'Дейв Белинс',    role: 'Инженер',    status: 'АКТИВЕН',  color: '#00FF41' },
  { id: 'NT-002', name: 'Сейфил',         role: 'Техник',     status: 'АКТИВЕН',  color: '#00FF41' },
  { id: 'NT-003', name: 'Мисс Эйдлер',   role: 'Куратор',    status: 'АКТИВЕН',  color: '#62F1F5' },
  { id: 'NT-004', name: 'Биркин',         role: 'Надзор',     status: 'АКТИВЕН',  color: '#a0a0a0' },
  { id: 'NT-005', name: 'Дивайт',         role: 'Синтетик',   status: 'ДОГОВОР',  color: '#62F1F5' },
];

// Стили
const style = document.createElement('style');
style.textContent = `
  .tw-wrap { font-family: 'Courier New', monospace; font-size: 11px; color: #00FF41; }
  .tw-section { font-size: 9px; letter-spacing: 2px; color: rgba(0,255,65,0.45);
    border-bottom: 1px solid rgba(0,255,65,0.15); padding-bottom: 5px; margin-bottom: 8px; }
  .tw-row { display: flex; justify-content: space-between; align-items: center;
    padding: 4px 0; border-bottom: 1px solid rgba(0,255,65,0.07); gap: 8px; }
  .tw-row:last-child { border-bottom: none; }
  .tw-id   { color: rgba(0,255,65,0.35); font-size: 9px; min-width: 52px; }
  .tw-name { flex: 1; }
  .tw-role { color: rgba(0,255,65,0.5); font-size: 9px; min-width: 70px; text-align: center; }
  .tw-badge { font-size: 8px; letter-spacing: 1px; padding: 1px 5px;
    border-radius: 2px; border: 1px solid currentColor; min-width: 60px; text-align: center; }
  .tw-footer { font-size: 9px; color: rgba(0,255,65,0.25); margin-top: 8px;
    letter-spacing: 1px; text-align: right; }
`;
container.appendChild(style);

const wrap = document.createElement('div');
wrap.className = 'tw-wrap';

// Заголовок
const section = document.createElement('div');
section.className = 'tw-section';
section.textContent = 'РЕЕСТР ПЕРСОНАЛА // ТЕСТОВЫЕ ДАННЫЕ';
wrap.appendChild(section);

// Строки
rows.forEach(r => {
  const row = document.createElement('div');
  row.className = 'tw-row';

  const id = document.createElement('span');
  id.className = 'tw-id';
  id.textContent = r.id;

  const name = document.createElement('span');
  name.className = 'tw-name';
  name.textContent = r.name;
  name.style.color = r.color;

  const role = document.createElement('span');
  role.className = 'tw-role';
  role.textContent = r.role;

  const badge = document.createElement('span');
  badge.className = 'tw-badge';
  badge.textContent = r.status;
  badge.style.color = r.status === 'АКТИВЕН' ? '#00FF41' : r.status === 'ДОГОВОР' ? '#62F1F5' : '#ff4444';

  row.append(id, name, role, badge);
  wrap.appendChild(row);
});

// Футер
const footer = document.createElement('div');
footer.className = 'tw-footer';
footer.textContent = '|[ > ] ЗАПИСЕЙ: ' + rows.length + ' // NT SYSTEM';
wrap.appendChild(footer);

container.appendChild(wrap);
