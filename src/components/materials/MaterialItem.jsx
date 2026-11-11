import Tag from '../ui/Tag.jsx';
import styles from './MaterialItem.module.css';

export default function MaterialItem({ icon, title, subject, author, likes }) {
  return (
    <div className={styles.item}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.info}>
        <b>{title}</b>
        <span className={styles.meta}>
          {subject} · додав(ла) {author}
        </span>
      </span>
      <Tag variant="g">👍 {likes}</Tag>
    </div>
  );
}
