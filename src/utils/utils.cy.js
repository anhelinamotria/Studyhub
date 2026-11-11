import { daysLeft, getDeadlineStatus } from './deadline.js';
import { getWeekType } from './week.js';
import { isUniversityEmail } from './validation.js';

describe('utils: deadline', () => {
  const today = new Date('2026-11-10T12:00:00');

  it('рахує дні до дедлайну', () => {
    expect(daysLeft('2026-11-12', today)).to.equal(2);
    expect(daysLeft('2026-11-09', today)).to.equal(-1);
  });

  it('повертає статус і колір мітки', () => {
    expect(getDeadlineStatus('2026-11-11', today)).to.deep.equal({ label: 'завтра', variant: 'r' });
    expect(getDeadlineStatus('2026-11-13', today).variant).to.equal('y');
    expect(getDeadlineStatus('2026-11-30', today).variant).to.equal('');
    expect(getDeadlineStatus('2026-11-01', today).label).to.equal('прострочено');
  });
});

describe('utils: week', () => {
  it('чергує чисельник і знаменник', () => {
    const start = new Date('2026-09-01');
    expect(getWeekType(new Date('2026-09-02'), start)).to.equal('чисельник');
    expect(getWeekType(new Date('2026-09-09'), start)).to.equal('знаменник');
  });
});

describe('utils: validation', () => {
  it('приймає лише університетську пошту', () => {
    expect(isUniversityEmail('name@student.uzhnu.edu.ua')).to.equal(true);
    expect(isUniversityEmail('name@uzhnu.edu.ua')).to.equal(true);
    expect(isUniversityEmail('name@gmail.com')).to.equal(false);
  });
});
