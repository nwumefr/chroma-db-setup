import PageSection from '../components/PageSection';

export default function RequestARoom() {
  return (
    <PageSection
      title="Request a Room"
      breadcrumbs={[{ label: 'Staying with Us', path: '/staying-with-us' }, { label: 'Request a Room' }]}
    >
      <div className="prose">
        <p>
          Our two Ronald McDonald Houses in Philadelphia provide a place to stay for families whose children are receiving treatment at area hospitals. We offer temporary lodging, meals, transportation assistance, and family support services.
        </p>
        <p>
          To request a room, families must be referred by the social work or care team at the hospital where their child is receiving treatment. If you are a family in need, please ask your child's medical team about a referral to the Ronald McDonald House.
        </p>
        <p>
          For more information about eligibility and the referral process, please contact us through our Contact Us page or call our main office.
        </p>
      </div>
    </PageSection>
  );
}
