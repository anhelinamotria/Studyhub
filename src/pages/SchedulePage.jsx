import Card from '../components/ui/Card.jsx';
import { useFetch } from '../hooks/useFetch.js';
import { api } from '../services/api.js';
import { getWeekType } from '../utils/week.js';

export default function SchedulePage() {
  const { data: week } = useFetch(api.getWeekSchedule);

  return (
    <>
      <div className="top">
        <div>
          <h1>Розклад групи ІПЗ-1</h1>
          <div className="sub">Поточний тиждень · {getWeekType(new Date())}</div>
        </div>
      </div>
      <div className="grid g3">
        {week?.map((day) => (
          <Card key={day.day} title={day.day}>
            {day.lessons.map((lesson) => (
              <div
                key={lesson.time + lesson.name}
                className={`ev ${lesson.color}`}
                style={{ marginBottom: 8 }}
              >
                <b>{lesson.name}</b>
                <br />
                {lesson.time} · ауд. {lesson.room}
              </div>
            ))}
          </Card>
        ))}
      </div>
    </>
  );
}
