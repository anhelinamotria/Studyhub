import styles from './LessonCard.module.css';

// color: 'c1' | 'c2' | 'c3' | 'c4' — колір предмета з дизайн-системи
export default function LessonCard({ time, name, room, color = 'c1' }) {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <b>{name}</b>
      <div className={styles.meta}>
        {time} · ауд. {room}
      </div>
    </div>
  );
}
