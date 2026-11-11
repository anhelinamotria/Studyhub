import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button.jsx';
import { useAuth } from '../features/auth/useAuth.js';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate(location.state?.from?.pathname || '/dashboard', { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h1>З поверненням 👋</h1>
      <p className="muted">Увійди, щоб побачити свій розклад і дедлайни</p>
      <div className="tabs">
        <Link className="on" to="/login">
          Вхід
        </Link>
        <Link to="/register">Реєстрація</Link>
      </div>
      <label htmlFor="email">Університетська пошта</label>
      <input
        id="email"
        className="inp"
        type="email"
        placeholder="name.surname@student.uzhnu.edu.ua"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        data-cy="email"
      />
      <label htmlFor="password">Пароль</label>
      <input
        id="password"
        className="inp"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        data-cy="password"
      />
      {error && (
        <p className="error" data-cy="error">
          {error}
        </p>
      )}
      <div className="line">
        <span />
        <a href="#forgot">Забули пароль?</a>
      </div>
      <Button type="submit" full data-cy="submit">
        Увійти
      </Button>
    </form>
  );
}
