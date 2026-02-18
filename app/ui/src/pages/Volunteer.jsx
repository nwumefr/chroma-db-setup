import PageSection from '../components/PageSection';

export default function Volunteer() {
  return (
    <PageSection
      title="Volunteer at RMHC of the Philadelphia Region"
      breadcrumbs={[{ label: 'Volunteer' }]}
    >
      <div className="prose">
        <p className="lead">Your time matters—see how a few hours a week can change lives.</p>
        <p>
          <a href="https://www.volgistics.com/appform/151413169" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Volunteer Application</a>
          {' '}
          <a href="https://www.volgistics.com/ex2/vicnet.dll?FROM=157672" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Volunteer Login</a>
        </p>
        <h2>Served with Love</h2>
        <p>Prepare and serve meals for families in our Chestnut Street kitchen.</p>
        <h2>Opportunities for Groups</h2>
        <p>Corporate and community groups can volunteer together for meal service or special projects.</p>
        <h2>Opportunities for Individuals</h2>
        <p>Individual volunteers help with hospitality, activities, and day-to-day operations.</p>
        <h2>Other Ways to Help</h2>
        <p>From wish list drives to event support, there are many ways to give your time.</p>
        <p>
          If you're interested in becoming a volunteer, complete the online Volunteer Application. If you are a current volunteer, thank you! Use the login button to schedule a shift or sign up for an event. Questions? Contact a Volunteer Coordinator at 215.387.8406 or email volunteer@rmhcphilly.org.
        </p>
      </div>
    </PageSection>
  );
}
