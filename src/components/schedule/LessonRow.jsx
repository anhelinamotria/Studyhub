import Tag from '../ui/Tag.jsx';
import styles from './LessonRow.module.css';

export default function LessonRow({ time, name, type, room, tag }) {
  return (
    <div className={styles.row}>
      <span className={styles.time}>{time}</span>
      <span className={styles.lesson}>
        <b className={styles.name}>{name}</b>
        <span className={styles.meta}>
          {type} · ауд. {room}
        </span>
      </span>
      {tag && <Tag>{tag}</Tag>}
    </div>
  );
}
