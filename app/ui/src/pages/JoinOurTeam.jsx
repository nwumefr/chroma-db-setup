import PageSection from '../components/PageSection';

export default function JoinOurTeam() {
  return (
    <PageSection
      title="Join our Team"
      breadcrumbs={[{ label: 'About Us', path: '/about-us' }, { label: 'Join our Team' }]}
    >
      <div className="prose">
        <p>
          We are always looking for passionate individuals who want to make a difference in the lives of families facing pediatric illness. Employment opportunities at RMHC of the Philadelphia Region include roles in guest services, development, operations, and more.
        </p>
        <p>
          Check back for current openings or contact us to learn about volunteer opportunities that can lead to a career with us.
        </p>
      </div>
    </PageSection>
  );
}
