import Card from './Card.jsx';
import styles from './StatCard.module.css';

export default function StatCard({ label, value, hint, accent, children }) {
  return (
    <Card>
      <div className={styles.label}>{label}</div>
      <div className={`${styles.value} ${accent ? styles[accent] : ''}`}>{value}</div>
      {hint && <div className={styles.label}>{hint}</div>}
      {children}
    </Card>
  );
}
