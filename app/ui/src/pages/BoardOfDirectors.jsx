import PageSection from '../components/PageSection';

export default function BoardOfDirectors() {
  return (
    <PageSection
      title="Board of Directors"
      breadcrumbs={[{ label: 'About Us', path: '/about-us' }, { label: 'Board of Directors' }]}
    >
      <div className="prose">
        <p>
          Our Board of Directors provides strategic leadership and governance for RMHC of the Philadelphia Region. Board members bring expertise from healthcare, business, law, and the nonprofit sector to advance our mission of keeping families close.
        </p>
        <p>
          For more information about our board or to inquire about board service, please contact us through our Contact Us page.
        </p>
      </div>
    </PageSection>
  );
}
