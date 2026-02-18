import PageSection from '../components/PageSection';

export default function GuestFeeDonation() {
  return (
    <PageSection
      title="Support a Specific Family"
      breadcrumbs={[{ label: 'Donate', path: '/donate' }, { label: 'Support a Family' }]}
    >
      <div className="prose">
        <p>
          Make a donation to support a specific family currently staying at the Ronald McDonald House. Your gift helps cover the cost of their stay and the services we provide.
        </p>
        <p>
          <a href="https://rmhcphilly.org/guestfeedonation/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Donate to support a current guest family</a>
        </p>
      </div>
    </PageSection>
  );
}
