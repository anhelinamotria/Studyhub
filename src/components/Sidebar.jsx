import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../features/auth/useAuth.js';

const links = [
  { to: '/dashboard', label: '🏠 Головна' },
  { to: '/schedule', label: '📅 Розклад' },
  { to: '/deadlines', label: '⏰ Дедлайни' },
  { to: '/materials', label: '📚 Матеріали групи' },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="side">
      <div className="logo">StudyHub</div>
      {links.map((link) => (
        <NavLink key={link.to} to={link.to}>
          {link.label}
        </NavLink>
      ))}
      <a href="#logout" onClick={handleLogout} data-cy="logout">
        🚪 Вийти
      </a>
      <div className="me">
        <b>{user?.name}</b>
        {user?.email}
      </div>
    </aside>
  );
}
