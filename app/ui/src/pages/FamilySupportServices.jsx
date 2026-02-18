import PageSection from '../components/PageSection';

export default function FamilySupportServices() {
  return (
    <PageSection
      title="Family Support Services"
      breadcrumbs={[{ label: 'Staying with Us', path: '/staying-with-us' }, { label: 'Family Support Services' }]}
    >
      <div className="prose">
        <p>
          Beyond a place to sleep, we offer a range of family support services to help families during their stay. These include meal programs, laundry facilities, play areas for siblings, and emotional support. Our staff and volunteers are here to help families navigate their child's medical journey.
        </p>
        <p>
          We also work with hospital partners to provide information and resources. Our goal is to reduce the burden on families so they can focus on their child's care.
        </p>
      </div>
    </PageSection>
  );
}
