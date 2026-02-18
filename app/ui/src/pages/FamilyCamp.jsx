import PageSection from '../components/PageSection';

export default function FamilyCamp() {
  return (
    <PageSection
      title="Ronald McDonald Family Camp"
      breadcrumbs={[{ label: 'Camp', path: '/camp' }, { label: 'Ronald McDonald Family Camp' }]}
    >
      <div className="prose">
        <p>
          Ronald McDonald Family Camp is our week-long overnight camp in the Pocono Mountains for children with cancer and their siblings. Campers enjoy traditional camp activities—swimming, arts and crafts, games, and campfires—in a medically supervised, supportive setting.
        </p>
        <p>
          Applications for campers and volunteer counselors open each year. Contact us or visit our Camp page for the latest information and application links.
        </p>
      </div>
    </PageSection>
  );
}
