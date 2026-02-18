import { Link } from 'react-router-dom';
import PageSection from '../components/PageSection';

export default function Events() {
  return (
    <PageSection
      title="Upcoming Events"
      breadcrumbs={[{ label: 'Events' }]}
    >
      <div className="prose">
        <p className="lead">Join us at one of our upcoming events to support families benefiting from our programs.</p>
        <div className="event-list">
          <article className="event-card">
            <h3><Link to="/read">Read for the House</Link></h3>
            <p className="event-date">February 2026</p>
            <p>Your child can help other children by reading! Kids can join either as part of their school or on their own.</p>
            <Link to="/read" className="card-link">Click here for more information</Link>
          </article>
          <article className="event-card">
            <h3><Link to="/planepull">Plane Pull</Link></h3>
            <p className="event-date">May 2, 2026</p>
            <p>Join teams of 20 individuals for a fun and unique opportunity to pull an airplane, while raising vital funds for the families staying at the House.</p>
            <Link to="/planepull" className="card-link">Click here for more information.</Link>
          </article>
          <article className="event-card">
            <h3><Link to="/hitem">Hit 'Em for the House</Link></h3>
            <p className="event-date">August 17, 2026</p>
            <p>Join us for a full day of golf and dinner at one of Philadelphia's most prestigious golf courses.</p>
            <Link to="/hitem" className="card-link">Click here for more information</Link>
          </article>
          <article className="event-card">
            <h3><Link to="/champions">Champions of Hope</Link></h3>
            <p className="event-date">TBD, 2026</p>
            <p>Our Champions of Hope event recognizes individuals dedicated to the well-being of families and their children.</p>
            <Link to="/champions" className="card-link">Click here for more information</Link>
          </article>
        </div>
      </div>
    </PageSection>
  );
}
