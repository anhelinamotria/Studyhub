import styles from './PageHeader.module.css';

export default function PageHeader({ title, subtitle, actions, ...props }) {
  return (
    <div className={styles.header}>
      <div>
        <h1 className={styles.title} {...props}>
          {title}
        </h1>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
}
