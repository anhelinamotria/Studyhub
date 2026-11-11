const DAY = 24 * 60 * 60 * 1000;

// Кількість повних днів до дедлайну (від'ємне число — прострочено)
export function daysLeft(dueDate, today = new Date()) {
  const due = new Date(dueDate);
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const end = new Date(due.getFullYear(), due.getMonth(), due.getDate());
  return Math.round((end - start) / DAY);
}

// Статус і колір мітки згідно з дизайн-системою: червоний → жовтий → синій
export function getDeadlineStatus(dueDate, today = new Date()) {
  const days = daysLeft(dueDate, today);
  if (days < 0) return { label: 'прострочено', variant: 'r' };
  if (days === 0) return { label: 'сьогодні', variant: 'r' };
  if (days === 1) return { label: 'завтра', variant: 'r' };
  if (days <= 4) return { label: `${days} дні`, variant: 'y' };
  return { label: `${days} днів`, variant: '' };
}
