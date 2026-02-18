import PageSection from '../components/PageSection';
import { Link } from 'react-router-dom';

export default function CampDonate() {
  return (
    <PageSection
      title="Donate to RMC"
      breadcrumbs={[{ label: 'Camp', path: '/camp' }, { label: 'Donate to RMC' }]}
    >
      <div className="prose">
        <p>
          Your donation to Ronald McDonald Camp helps provide a week of camp for children with cancer and their siblings. Funds support programming, meals, activities, and camper scholarships so that every child who wants to attend can do so.
        </p>
        <p>
          <Link to="/donate">Make a general donation</Link> and designate "Camp" in the notes, or contact us to learn about camp-specific giving opportunities.
        </p>
      </div>
    </PageSection>
  );
}
