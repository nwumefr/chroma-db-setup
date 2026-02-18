import PageSection from '../components/PageSection';

export default function HitEm() {
  return (
    <PageSection title="Hit 'Em for the House" breadcrumbs={[{ label: 'Events', path: '/get-involved/events' }, { label: "Hit 'Em for the House" }]}>
      <div className="prose">
        <p className="event-date">August 17, 2026</p>
        <p>Join us for a full day of golf and dinner at one of Philadelphia's most prestigious golf courses.</p>
        <p><a href="https://rmhcphilly.org/hitem" target="_blank" rel="noopener noreferrer">Click here for more information</a>.</p>
      </div>
    </PageSection>
  );
}
