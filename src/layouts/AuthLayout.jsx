import { Link, Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.css';

export default function AuthLayout() {
  return (
    <div className={styles.layout}>
      <div className={styles.brand}>
        <Link className={styles.logo} to="/">
          StudyHub
        </Link>
        <div>
          <h2 className={styles.slogan}>Твоє навчання — під контролем</h2>
          <p className={styles.text}>Розклад, дедлайни, оголошення та матеріали групи в одному місці.</p>
          <ul className={styles.list}>
            <li>📅 Розклад з чисельником і знаменником</li>
            <li>⏰ Нагадування про здачу робіт</li>
            <li>📚 Спільні матеріали групи</li>
          </ul>
        </div>
        <p className={styles.copyright}>© 2026 StudyHub · УжНУ</p>
      </div>
      <div className={styles.content}>
        <div className={styles.box}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
