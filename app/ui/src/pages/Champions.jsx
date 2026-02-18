import PageSection from '../components/PageSection';

export default function Champions() {
  return (
    <PageSection title="Champions of Hope" breadcrumbs={[{ label: 'Events', path: '/get-involved/events' }, { label: 'Champions of Hope' }]}>
      <div className="prose">
        <p className="event-date">TBD, 2026</p>
        <p>Our Champions of Hope event recognizes individuals dedicated to the well-being of families and their children.</p>
        <p><a href="https://rmhcphilly.org/champions/" target="_blank" rel="noopener noreferrer">Click here for more information</a>.</p>
      </div>
    </PageSection>
  );
}
