import styles from './Tag.module.css';

// variant: '' (синій) | 'r' (червоний) | 'y' (жовтий) | 'g' (зелений)
export default function Tag({ variant = '', children }) {
  const className = variant ? `${styles.tag} ${styles[variant]}` : styles.tag;
  return (
    <span className={className} data-variant={variant || 'default'}>
      {children}
    </span>
  );
}
