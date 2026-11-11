import Card from './Card.jsx';

export default function StatCard({ label, value, hint, accent, children }) {
  return (
    <Card>
      <div className="muted">{label}</div>
      <div className="stat" style={accent ? { color: accent } : undefined}>
        {value}
      </div>
      {hint && <div className="muted">{hint}</div>}
      {children}
    </Card>
  );
}
