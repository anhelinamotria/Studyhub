import { Link } from 'react-router-dom';

const features = [
  { icon: '📅', title: 'Розклад', text: 'Актуальний розклад групи з чисельником і знаменником.' },
  {
    icon: '⏰',
    title: 'Нагадування',
    text: 'Сповіщення за кілька днів до здачі лабораторних і заліків.',
  },
  { icon: '📚', title: 'Матеріали', text: 'Спільні конспекти, методички та корисні посилання.' },
];

export default function LandingPage() {
  return (
    <>
      <header className="landing-header">
        <div className="logo" style={{ color: '#3b5bdb', fontWeight: 700, fontSize: 22 }}>
          StudyHub
        </div>
        <nav>
          <Link to="/login">Увійти</Link>
        </nav>
      </header>
      <section className="landing-hero">
        <div>
          <h1>Усі лабки, дедлайни й розклад — в одному місці</h1>
          <p>
            StudyHub допомагає студентам УжНУ не губитися в навчанні: розклад пар, нагадування про
            здачу робіт і спільні конспекти для групи.
          </p>
          <Link className="btn" to="/register" data-cy="cta">
            Спробувати безкоштовно
          </Link>
        </div>
      </section>
      <section className="features">
        {features.map((f) => (
          <div className="card" key={f.title}>
            <h4>
              {f.icon} {f.title}
            </h4>
            <p>{f.text}</p>
          </div>
        ))}
      </section>
    </>
  );
}
