import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../features/auth/useAuth.js';
import styles from './Sidebar.module.css';

const links = [
  { to: '/dashboard', label: '🏠 Головна' },
  { to: '/schedule', label: '📅 Розклад' },
  { to: '/deadlines', label: '⏰ Дедлайни' },
  { to: '/materials', label: '📚 Матеріали групи' },
];

const linkClass = ({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link);

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    logout();
    navigate('/login');
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>StudyHub</div>
      <nav className={styles.nav}>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} className={linkClass}>
            {link.label}
          </NavLink>
        ))}
        <a href="/login" onClick={handleLogout} className={styles.link} data-cy="logout">
          🚪 Вийти
        </a>
      </nav>
      <div className={styles.user}>
        <b className={styles.userName}>{user?.name}</b>
        {user?.email}
      </div>
    </aside>
  );
}
