import Card from '../components/ui/Card.jsx';
import Grid from '../components/ui/Grid.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import ProgressBar from '../components/ui/ProgressBar.jsx';
import Tag from '../components/ui/Tag.jsx';
import { useFetch } from '../hooks/useFetch.js';
import { api } from '../services/api.js';
import { getDeadlineStatus } from '../utils/deadline.js';
import styles from './DeadlinesPage.module.css';

export default function DeadlinesPage() {
  const { data: deadlines } = useFetch(api.getDeadlines);

  return (
    <>
      <PageHeader title="Дедлайни" subtitle="Лабораторні, реферати та інші роботи" />
      <Grid cols={2}>
        {deadlines?.map((d) => {
          const status = getDeadlineStatus(d.dueDate);
          return (
            <Card
              key={d.id}
              title={d.title}
              action={<Tag variant={status.variant}>{status.label}</Tag>}
              data-cy="deadline-card"
            >
              <p className={styles.due}>Здати до {new Date(d.dueDate).toLocaleDateString('uk-UA')}</p>
              <ProgressBar value={d.progress} />
              <p className={styles.progress}>Виконано {d.progress}%</p>
            </Card>
          );
        })}
      </Grid>
    </>
  );
}
