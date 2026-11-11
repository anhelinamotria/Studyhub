import Button from '../components/ui/Button.jsx';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.text}>Такої сторінки немає</p>
      <Button to="/">На головну</Button>
    </main>
  );
}
