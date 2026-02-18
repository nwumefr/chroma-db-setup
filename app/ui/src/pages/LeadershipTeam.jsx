import PageSection from '../components/PageSection';

export default function LeadershipTeam() {
  return (
    <PageSection
      title="Leadership Team"
      breadcrumbs={[{ label: 'About Us', path: '/about-us' }, { label: 'Leadership Team' }]}
    >
      <div className="prose">
        <p>
          The leadership team of RMHC of the Philadelphia Region oversees day-to-day operations, program delivery, and community partnerships. Our staff work alongside volunteers and donors to ensure every family we serve receives comfort and hope during their child's medical journey.
        </p>
        <p>
          For inquiries about our programs or leadership, please visit our Contact Us page.
        </p>
      </div>
    </PageSection>
  );
}
