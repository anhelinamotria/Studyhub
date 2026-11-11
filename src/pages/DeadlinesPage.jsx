import Card from '../components/ui/Card.jsx';
import ProgressBar from '../components/ui/ProgressBar.jsx';
import Tag from '../components/ui/Tag.jsx';
import { useFetch } from '../hooks/useFetch.js';
import { api } from '../services/api.js';
import { getDeadlineStatus } from '../utils/deadline.js';

export default function DeadlinesPage() {
  const { data: deadlines } = useFetch(api.getDeadlines);

  return (
    <>
      <div className="top">
        <h1>Дедлайни</h1>
      </div>
      <div className="grid g2">
        {deadlines?.map((d) => {
          const status = getDeadlineStatus(d.dueDate);
          return (
            <Card
              key={d.id}
              title={d.title}
              action={<Tag variant={status.variant}>{status.label}</Tag>}
            >
              <p className="muted">Здати до {new Date(d.dueDate).toLocaleDateString('uk-UA')}</p>
              <ProgressBar value={d.progress} />
              <p className="muted" style={{ marginTop: 6 }}>
                Виконано {d.progress}%
              </p>
            </Card>
          );
        })}
      </div>
    </>
  );
}
