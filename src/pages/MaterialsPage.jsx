import Card from '../components/ui/Card.jsx';
import Tag from '../components/ui/Tag.jsx';
import { useFetch } from '../hooks/useFetch.js';
import { api } from '../services/api.js';

export default function MaterialsPage() {
  const { data: subjects } = useFetch(api.getSubjects);
  const { data: materials } = useFetch(api.getMaterials);

  return (
    <>
      <div className="top">
        <div>
          <h1>Матеріали групи</h1>
          <div className="sub">Конспекти, методички та корисні посилання</div>
        </div>
      </div>
      <div className="grid g3" style={{ marginBottom: 18 }}>
        {subjects?.map((s) => (
          <Card key={s.id} title={`${s.icon} ${s.name}`}>
            <div className="muted">
              {s.files} файлів · оновлено {s.updated}
            </div>
          </Card>
        ))}
      </div>
      <Card title="Нещодавно додані">
        {materials?.map((m) => (
          <div className="file" key={m.id}>
            <span className="ico">{m.icon}</span>
            <span style={{ flex: 1 }}>
              <b>{m.title}</b>
              <br />
              <span className="muted">
                {m.subject} · додав(ла) {m.author}
              </span>
            </span>
            <Tag variant="g">👍 {m.likes}</Tag>
          </div>
        ))}
      </Card>
    </>
  );
}
