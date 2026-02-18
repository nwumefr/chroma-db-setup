import PageSection from '../components/PageSection';

export default function PlanePull() {
  return (
    <PageSection title="Plane Pull" breadcrumbs={[{ label: 'Events', path: '/get-involved/events' }, { label: 'Plane Pull' }]}>
      <div className="prose">
        <p className="event-date">May 2, 2026</p>
        <p>Join teams of 20 individuals for a fun and unique opportunity to pull an airplane, while raising vital funds for the families staying at the House.</p>
        <p><a href="https://rmhcphilly.org/planepull" target="_blank" rel="noopener noreferrer">Click here for more information.</a></p>
      </div>
    </PageSection>
  );
}
