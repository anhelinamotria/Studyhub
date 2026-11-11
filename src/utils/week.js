// Визначає тип тижня (чисельник / знаменник) від дати початку семестру
export function getWeekType(date, semesterStart = new Date('2026-09-01')) {
  const DAY = 24 * 60 * 60 * 1000;
  const startMonday = new Date(semesterStart);
  startMonday.setDate(startMonday.getDate() - ((startMonday.getDay() + 6) % 7));
  const weekNumber = Math.floor((date - startMonday) / (7 * DAY));
  return weekNumber % 2 === 0 ? 'чисельник' : 'знаменник';
}
