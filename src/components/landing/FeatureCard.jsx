import Card from '../ui/Card.jsx';
import styles from './FeatureCard.module.css';

export default function FeatureCard({ icon, title, text }) {
  return (
    <Card>
      <h4 className={styles.title}>
        {icon} {title}
      </h4>
      <p className={styles.text}>{text}</p>
    </Card>
  );
}
