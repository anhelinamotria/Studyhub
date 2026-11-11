import { Link, Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="auth">
      <div className="brand">
        <Link className="logo" to="/">
          StudyHub
        </Link>
        <div>
          <h2>Твоє навчання — під контролем</h2>
          <p>Розклад, дедлайни, оголошення та матеріали групи в одному місці.</p>
          <ul>
            <li>📅 Розклад з чисельником і знаменником</li>
            <li>⏰ Нагадування про здачу робіт</li>
            <li>📚 Спільні матеріали групи</li>
          </ul>
        </div>
        <p style={{ fontSize: 13 }}>© 2026 StudyHub · УжНУ</p>
      </div>
      <div className="form">
        <div className="box2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
