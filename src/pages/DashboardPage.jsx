import Card from '../components/ui/Card.jsx';
import Grid from '../components/ui/Grid.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import StatCard from '../components/ui/StatCard.jsx';
import ProgressBar from '../components/ui/ProgressBar.jsx';
import DeadlineItem from '../components/DeadlineItem.jsx';
import LessonRow from '../components/schedule/LessonRow.jsx';
import { useAuth } from '../features/auth/useAuth.js';
import { useFetch } from '../hooks/useFetch.js';
import { api } from '../services/api.js';
import { getWeekType } from '../utils/week.js';
import styles from './DashboardPage.module.css';

export default function DashboardPage() {
  const { user } = useAuth();
  const lessons = useFetch(api.getTodayLessons);
  const deadlines = useFetch(api.getDeadlines);
  const today = new Date();
  const date = today.toLocaleDateString('uk-UA', { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <>
      <PageHeader
        title={`Добрий день, ${user?.name} 👋`}
        subtitle={`${date} · ${getWeekType(today)}`}
        data-cy="greeting"
      />

      <Grid cols={3}>
        <StatCard label="Пар сьогодні" value={lessons.data?.length ?? '…'} />
        <StatCard label="Дедлайни" value={deadlines.data?.length ?? '…'} accent="danger" />
        <StatCard label="Здано лабораторних" value="11 / 16">
          <ProgressBar value={69} />
        </StatCard>
      </Grid>

      <Grid cols="wide">
        <Card title="Сьогодні">
          {lessons.loading && <p className={styles.loading}>Завантаження…</p>}
          {lessons.data?.map((lesson) => (
            <LessonRow key={lesson.id} {...lesson} />
          ))}
        </Card>
        <Card title="Найближчі дедлайни">
          {deadlines.loading && <p className={styles.loading}>Завантаження…</p>}
          {deadlines.data?.map((d) => (
            <DeadlineItem key={d.id} title={d.title} dueDate={d.dueDate} />
          ))}
        </Card>
      </Grid>
    </>
  );
}
