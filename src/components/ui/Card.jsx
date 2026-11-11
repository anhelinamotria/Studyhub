export default function Card({ title, action, children, ...props }) {
  return (
    <div className="card" {...props}>
      {title && (
        <h3>
          {title} {action && <small>{action}</small>}
        </h3>
      )}
      {children}
    </div>
  );
}
