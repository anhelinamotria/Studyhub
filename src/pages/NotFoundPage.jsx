import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main style={{ textAlign: 'center', paddingTop: 120 }}>
      <h1>404</h1>
      <p className="muted">Такої сторінки немає</p>
      <p style={{ marginTop: 16 }}>
        <Link className="btn" to="/">
          На головну
        </Link>
      </p>
    </main>
  );
}
