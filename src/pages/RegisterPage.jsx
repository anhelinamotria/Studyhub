import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthTabs from '../components/auth/AuthTabs.jsx';
import Button from '../components/ui/Button.jsx';
import FormField from '../components/ui/FormField.jsx';
import { useAuth } from '../features/auth/useAuth.js';
import styles from './AuthPage.module.css';

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
      <h1 className={styles.title}>Створити акаунт</h1>
      <p className={styles.subtitle}>Це займе менше хвилини</p>
      <AuthTabs />
      <FormField id="name" label="Ім'я та прізвище" value={form.name} onChange={update('name')} />
      <FormField
        id="reg-email"
        label="Університетська пошта"
        type="email"
        value={form.email}
        onChange={update('email')}
      />
      <FormField id="group" label="Факультет і група" as="select">
        <option>Факультет інформаційних технологій · ІПЗ-1</option>
      </FormField>
      <FormField
        id="reg-password"
        label="Пароль"
        type="password"
        placeholder="мінімум 8 символів"
        value={form.password}
        onChange={update('password')}
      />
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.row} />
      <Button type="submit" full>
        Зареєструватися
      </Button>
    </form>
  );
}
