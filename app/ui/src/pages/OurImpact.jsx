import PageSection from '../components/PageSection';

export default function OurImpact() {
  return (
    <PageSection
      title="Our Impact"
      breadcrumbs={[{ label: 'About Us', path: '/about-us' }, { label: 'Our Impact' }]}
    >
      <div className="prose">
        <p>
          RMHC of the Philadelphia Region makes a measurable difference in the lives of families facing pediatric illness. Our two Houses provide thousands of nights of lodging each year. Our Family Rooms offer respite to families inside the hospital, and our Care Mobile brings essential dental care to children in North Philadelphia. Ronald McDonald Camp gives children with cancer and their siblings a week of fun and connection in the Poconos.
        </p>
        <p>
          We track nights of stay, meals served, families supported, and campers served so we can share our impact with the community and our donors. Your support directly helps keep families close when it matters most.
        </p>
      </div>
    </PageSection>
  );
}
