import PageSection from '../components/PageSection';

export default function Read() {
  return (
    <PageSection title="Read for the House" breadcrumbs={[{ label: 'Events', path: '/get-involved/events' }, { label: 'Read for the House' }]}>
      <div className="prose">
        <p className="event-date">February 2026</p>
        <p>Your child can help other children by reading! Kids can join either as part of their school or on their own.</p>
        <p>For more information, visit the official RMHC Philly website at <a href="https://rmhcphilly.org/read" target="_blank" rel="noopener noreferrer">rmhcphilly.org/read</a>.</p>
      </div>
    </PageSection>
  );
}
