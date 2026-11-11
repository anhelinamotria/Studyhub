import Card from '../components/ui/Card.jsx';
import Grid from '../components/ui/Grid.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import LessonCard from '../components/schedule/LessonCard.jsx';
import { useFetch } from '../hooks/useFetch.js';
import { api } from '../services/api.js';
import { getWeekType } from '../utils/week.js';

export default function SchedulePage() {
  const { data: week } = useFetch(api.getWeekSchedule);

  return (
    <>
      <PageHeader title="Розклад групи ІПЗ-1" subtitle={`Поточний тиждень · ${getWeekType(new Date())}`} />
      <Grid cols={3}>
        {week?.map((day) => (
          <Card key={day.day} title={day.day}>
            {day.lessons.map((lesson) => (
              <LessonCard key={lesson.time + lesson.name} {...lesson} />
            ))}
          </Card>
        ))}
      </Grid>
    </>
  );
}
