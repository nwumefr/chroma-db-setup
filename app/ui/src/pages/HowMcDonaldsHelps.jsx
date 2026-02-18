import PageSection from '../components/PageSection';

export default function HowMcDonaldsHelps() {
  return (
    <PageSection
      title="How Does McDonald's Help?"
      breadcrumbs={[{ label: 'About Us', path: '/about-us' }, { label: "How Does McDonald's Help?" }]}
    >
      <div className="prose">
        <p>
          McDonald's and its local owner-operators have been partners of Ronald McDonald House Charities since the first House opened in Philadelphia in 1974. Today, McDonald's supports RMHC through brand awareness, in-restaurant fundraising, and volunteerism. Proceeds from donations made at local McDonald's restaurants make up less than 6% of our annual revenue—the majority of our funding comes from individuals, corporations, and foundations who believe in our mission.
        </p>
        <p>
          The relationship allows us to use the Ronald McDonald House Charities name and to benefit from the visibility of the McDonald's brand, while operating independently to serve families in the Philadelphia region.
        </p>
      </div>
    </PageSection>
  );
}
