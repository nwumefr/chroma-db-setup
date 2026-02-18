import { Link } from 'react-router-dom';
import './PageSection.css';

export default function PageSection({ title, breadcrumbs = [], children, className = '' }) {
  return (
    <section className={`page-section ${className}`}>
      <div className="page-section-inner">
        {breadcrumbs.length > 0 && (
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {breadcrumbs.map(({ label, path }, i) => (
              <span key={path || i}>
                <span className="sep">»</span>
                {path ? <Link to={path}>{label}</Link> : <span>{label}</span>}
              </span>
            ))}
          </nav>
        )}
        {title && <h1 className="page-title">{title}</h1>}
        {children}
      </div>
    </section>
  );
}
