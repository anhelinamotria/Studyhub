import { deadlines, materials, subjects, todayLessons, weekSchedule } from './mockData.js';

// Імітація мережевого запиту. Інтерфейс (асинхронні функції) не зміниться,
// коли замість mockData з'явиться справжній бекенд.
const delay = (data, ms = 150) => new Promise((resolve) => setTimeout(() => resolve(data), ms));

export const api = {
  getTodayLessons: () => delay(todayLessons),
  getWeekSchedule: () => delay(weekSchedule),
  getDeadlines: () => delay(deadlines),
  getSubjects: () => delay(subjects),
  getMaterials: () => delay(materials),
};
