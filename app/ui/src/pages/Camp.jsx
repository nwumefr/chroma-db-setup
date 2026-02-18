import PageSection from '../components/PageSection';
import { Link } from 'react-router-dom';

export default function Camp() {
  return (
    <PageSection
      title="Ronald McDonald Camp"
      breadcrumbs={[{ label: 'Camp', path: '/camp' }]}
    >
      <div className="prose">
        <p>
          Ronald McDonald Camp is a week-long overnight camp for children with cancer and their siblings, held in the Pocono Mountains every August. Since 1986, we have offered an integrated camp experience that gives kids a chance to have fun, make friends, and build memories in a supportive environment.
        </p>
        <p>
          <Link to="/camp/donate">Donate to RMC</Link> to support camp operations and camper scholarships.
        </p>
        <p>
          <Link to="/camp/family-camp">Learn more about Ronald McDonald Family Camp</Link> and our <Link to="/camp/volunteer-counselor">Volunteer Counselor Application</Link>.
        </p>
      </div>
    </PageSection>
  );
}
