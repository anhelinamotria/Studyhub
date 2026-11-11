import { Link } from 'react-router-dom';
import styles from './Button.module.css';

// variant: 'primary' | 'outline'; to — якщо задано, рендериться як посилання
export default function Button({ variant = 'primary', full = false, to, type = 'button', children, ...props }) {
  const className = [styles.button, styles[variant], full ? styles.full : ''].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link to={to} className={className} data-variant={variant} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={className} data-variant={variant} {...props}>
      {children}
    </button>
  );
}
