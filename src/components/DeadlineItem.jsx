import Tag from './ui/Tag.jsx';
import { getDeadlineStatus } from '../utils/deadline.js';
import styles from './DeadlineItem.module.css';

export default function DeadlineItem({ title, dueDate, today }) {
  const status = getDeadlineStatus(dueDate, today);
  return (
    <div className={styles.row} data-cy="deadline">
      <span>{title}</span>
      <Tag variant={status.variant}>{status.label}</Tag>
    </div>
  );
}
