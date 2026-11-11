import Card from '../components/ui/Card.jsx';
import Grid from '../components/ui/Grid.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import MaterialItem from '../components/materials/MaterialItem.jsx';
import { useFetch } from '../hooks/useFetch.js';
import { api } from '../services/api.js';
import styles from './MaterialsPage.module.css';

export default function MaterialsPage() {
  const { data: subjects } = useFetch(api.getSubjects);
  const { data: materials } = useFetch(api.getMaterials);

  return (
    <>
      <PageHeader title="Матеріали групи" subtitle="Конспекти, методички та корисні посилання" />
      <Grid cols={3}>
        {subjects?.map((s) => (
          <Card key={s.id} title={`${s.icon} ${s.name}`}>
            <div className={styles.meta}>
              {s.files} файлів · оновлено {s.updated}
            </div>
          </Card>
        ))}
      </Grid>
      <Card title="Нещодавно додані">
        {materials?.map((m) => (
          <MaterialItem key={m.id} {...m} />
        ))}
      </Card>
    </>
  );
}
