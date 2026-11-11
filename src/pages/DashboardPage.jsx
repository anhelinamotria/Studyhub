import Card from '../components/ui/Card.jsx';
import StatCard from '../components/ui/StatCard.jsx';
import ProgressBar from '../components/ui/ProgressBar.jsx';
import DeadlineItem from '../components/DeadlineItem.jsx';
import LessonRow from '../components/schedule/LessonRow.jsx';
import { useAuth } from '../features/auth/useAuth.js';
import { useFetch } from '../hooks/useFetch.js';
import { api } from '../services/api.js';
import { getWeekType } from '../utils/week.js';

export default function DashboardPage() {
  const { user } = useAuth();
  const lessons = useFetch(api.getTodayLessons);
  const deadlines = useFetch(api.getDeadlines);
  const today = new Date();

  return (
    <>
      <div className="top">
        <div>
          <h1 data-cy="greeting">Добрий день, {user?.name} 👋</h1>
          <div className="sub">
            {today.toLocaleDateString('uk-UA', { weekday: 'long', day: 'numeric', month: 'long' })}{' '}
            · {getWeekType(today)}
          </div>
        </div>
      </div>

      <div className="grid g3" style={{ marginBottom: 18 }}>
        <StatCard label="Пар сьогодні" value={lessons.data?.length ?? '…'} />
        <StatCard label="Дедлайни" value={deadlines.data?.length ?? '…'} accent="#c92a2a" />
        <StatCard label="Здано лабораторних" value="11 / 16">
          <ProgressBar value={69} />
        </StatCard>
      </div>

      <div className="grid g2">
        <Card title="Сьогодні">
          {lessons.loading && <p className="muted">Завантаження…</p>}
          {lessons.data?.map((lesson) => (
            <LessonRow key={lesson.id} {...lesson} />
          ))}
        </Card>
        <Card title="Найближчі дедлайни">
          {deadlines.data?.map((d) => (
            <DeadlineItem key={d.id} title={d.title} dueDate={d.dueDate} />
          ))}
        </Card>
      </div>
    </>
  );
}
