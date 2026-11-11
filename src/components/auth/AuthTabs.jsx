import { NavLink } from 'react-router-dom';
import styles from './AuthTabs.module.css';

const tabClass = ({ isActive }) => (isActive ? `${styles.tab} ${styles.active}` : styles.tab);

export default function AuthTabs() {
  return (
    <div className={styles.tabs}>
      <NavLink to="/login" className={tabClass}>
        Вхід
      </NavLink>
      <NavLink to="/register" className={tabClass}>
        Реєстрація
      </NavLink>
    </div>
  );
}
