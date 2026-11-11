import styles from './Card.module.css';

export default function Card({ title, action, children, className = '', ...props }) {
  return (
    <div className={`${styles.card} ${className}`} {...props}>
      {title && (
        <h3 className={styles.title}>
          <span>{title}</span>
          {action && <span className={styles.action}>{action}</span>}
        </h3>
      )}
      {children}
    </div>
  );
}
