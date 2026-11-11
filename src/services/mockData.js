// Тимчасові дані. На наступних етапах їх замінить реальний API (бекенд + Moodle Web Services).
export const subjects = [
  { id: 'web', name: 'Веб-технології', icon: '💻', files: 14, updated: 'вчора' },
  { id: 'java', name: 'Java (ООП)', icon: '☕', files: 22, updated: '2 дні тому' },
  { id: 'net', name: "Комп'ютерні мережі", icon: '🌐', files: 9, updated: 'сьогодні' },
];

export const todayLessons = [
  { id: 1, time: '9:40', name: 'Веб-технології', type: 'Лабораторна', room: '214', tag: 'чисельник' },
  { id: 2, time: '11:20', name: "Об'єктно-орієнтоване програмування (Java)", type: 'Лекція', room: '301', tag: 'онлайн' },
  { id: 3, time: '13:20', name: 'Філософія', type: 'Семінар', room: '105', tag: 'презентація' },
];

export const weekSchedule = [
  { day: 'Пн', lessons: [{ time: '9:40', name: 'Веб-технології', room: '214', color: 'c1' }, { time: '11:20', name: 'Java (ООП)', room: '301', color: 'c2' }, { time: '13:20', name: 'Філософія', room: '105', color: 'c3' }] },
  { day: 'Вт', lessons: [{ time: '8:00', name: 'Java', room: '302', color: 'c2' }, { time: '9:40', name: 'Математичний аналіз', room: '401', color: 'c4' }, { time: '11:20', name: 'Дискретна математика', room: '405', color: 'c4' }] },
  { day: 'Ср', lessons: [{ time: '9:40', name: 'Java', room: '301', color: 'c2' }, { time: '13:20', name: 'Веб-технології', room: '214', color: 'c1' }] },
  { day: 'Чт', lessons: [{ time: '8:00', name: 'Мережі', room: '214', color: 'c1' }, { time: '11:20', name: 'Англійська', room: '112', color: 'c3' }, { time: '13:20', name: 'Філософія', room: '105', color: 'c3' }] },
  { day: 'Пт', lessons: [{ time: '9:40', name: 'Мережі', room: '210', color: 'c1' }, { time: '11:20', name: 'Мат. аналіз', room: '401', color: 'c4' }] },
];

export const deadlines = [
  { id: 1, title: 'Лаб. 3 — Веб-технології', dueDate: '2026-11-12', progress: 60 },
  { id: 2, title: "Лаб. 4 — Комп'ютерні мережі", dueDate: '2026-11-14', progress: 30 },
  { id: 3, title: 'Реферат — Філософія', dueDate: '2026-11-16', progress: 10 },
  { id: 4, title: 'Лаб. 5 — Java', dueDate: '2026-11-18', progress: 0 },
];

export const materials = [
  { id: 1, icon: '📄', title: 'Конспект лекції 5 — HTTP і DNS', subject: 'Веб-технології', author: 'Олена К.', likes: 12 },
  { id: 2, icon: '📊', title: 'Методичка до лаб. 4 — Cisco Packet Tracer', subject: "Комп'ютерні мережі", author: 'викладач', likes: 8 },
  { id: 3, icon: '🔗', title: 'Як оформити звіт з лабораторної', subject: 'Загальне', author: 'староста', likes: 20 },
];
