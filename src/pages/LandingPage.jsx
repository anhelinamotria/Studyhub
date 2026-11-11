import { Link } from 'react-router-dom';
import Button from '../components/ui/Button.jsx';
import Grid from '../components/ui/Grid.jsx';
import FeatureCard from '../components/landing/FeatureCard.jsx';
import styles from './LandingPage.module.css';

const features = [
  { icon: '📅', title: 'Розклад', text: 'Актуальний розклад групи з чисельником і знаменником.' },
  { icon: '⏰', title: 'Нагадування', text: 'Сповіщення за кілька днів до здачі лабораторних і заліків.' },
  { icon: '📚', title: 'Матеріали', text: 'Спільні конспекти, методички та корисні посилання.' },
];

export default function LandingPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>StudyHub</div>
        <nav className={styles.nav}>
          <Link to="/login">Увійти</Link>
          <Button to="/register" variant="outline">
            Реєстрація
          </Button>
        </nav>
      </header>
      <section className={styles.hero}>
        <h1 className={styles.title}>Усі лабки, дедлайни й розклад — в одному місці</h1>
        <p className={styles.text}>
          StudyHub допомагає студентам УжНУ не губитися в навчанні: розклад пар, нагадування про
          здачу робіт і спільні конспекти для групи.
        </p>
        <Button to="/register" data-cy="cta">
          Спробувати безкоштовно
        </Button>
      </section>
      <section className={styles.features}>
        <Grid cols={3}>
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </Grid>
      </section>
      <footer className={styles.footer}>© 2026 StudyHub · Мотря Ангеліна</footer>
    </>
  );
}
