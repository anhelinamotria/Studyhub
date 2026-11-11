import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthTabs from '../components/auth/AuthTabs.jsx';
import Button from '../components/ui/Button.jsx';
import FormField from '../components/ui/FormField.jsx';
import { useAuth } from '../features/auth/useAuth.js';
import styles from './AuthPage.module.css';

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
      <h1 className={styles.title}>З поверненням 👋</h1>
      <p className={styles.subtitle}>Увійди, щоб побачити свій розклад і дедлайни</p>
      <AuthTabs />
      <FormField
        id="email"
        label="Університетська пошта"
        type="email"
        placeholder="name.surname@student.uzhnu.edu.ua"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        data-cy="email"
      />
      <FormField
        id="password"
        label="Пароль"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        data-cy="password"
      />
      {error && (
        <p className={styles.error} data-cy="error">
          {error}
        </p>
      )}
      <div className={styles.row}>
        <span />
        <a className={styles.link} href="#forgot">
          Забули пароль?
        </a>
      </div>
      <Button type="submit" full data-cy="submit">
        Увійти
      </Button>
    </form>
  );
}
