import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button.jsx';
import { useAuth } from '../features/auth/useAuth.js';

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await register(form);
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h1>Створити акаунт</h1>
      <p className="muted">Це займе менше хвилини</p>
      <div className="tabs">
        <Link to="/login">Вхід</Link>
        <Link className="on" to="/register">
          Реєстрація
        </Link>
      </div>
      <label htmlFor="name">Ім&apos;я та прізвище</label>
      <input id="name" className="inp" value={form.name} onChange={update('name')} />
      <label htmlFor="reg-email">Університетська пошта</label>
      <input
        id="reg-email"
        className="inp"
        type="email"
        value={form.email}
        onChange={update('email')}
      />
      <label htmlFor="group">Факультет і група</label>
      <select id="group" className="inp">
        <option>Факультет інформаційних технологій · ІПЗ-1</option>
      </select>
      <label htmlFor="reg-password">Пароль</label>
      <input
        id="reg-password"
        className="inp"
        type="password"
        placeholder="мінімум 8 символів"
        value={form.password}
        onChange={update('password')}
      />
      {error && <p className="error">{error}</p>}
      <div className="line" />
      <Button type="submit" full>
        Зареєструватися
      </Button>
    </form>
  );
}
