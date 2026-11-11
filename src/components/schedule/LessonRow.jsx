import Tag from '../ui/Tag.jsx';

export default function LessonRow({ time, name, type, room, tag }) {
  return (
    <div className="row">
      <span className="time">{time}</span>
      <span className="lesson">
        <b>{name}</b>
        <span className="muted">
          {type} · ауд. {room}
        </span>
      </span>
      {tag && <Tag>{tag}</Tag>}
    </div>
  );
}
