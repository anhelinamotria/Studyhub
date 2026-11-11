import Tag from './ui/Tag.jsx';
import { getDeadlineStatus } from '../utils/deadline.js';

export default function DeadlineItem({ title, dueDate, today }) {
  const status = getDeadlineStatus(dueDate, today);
  return (
    <div className="row" data-cy="deadline">
      <span>{title}</span>
      <Tag variant={status.variant}>{status.label}</Tag>
    </div>
  );
}
