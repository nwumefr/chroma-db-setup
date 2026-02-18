import PageSection from '../components/PageSection';
import { Link } from 'react-router-dom';

export default function WaysToGive() {
  return (
    <PageSection
      title="Ways to Give"
      breadcrumbs={[{ label: 'Get Involved', path: '/get-involved' }, { label: 'Ways to Give' }]}
    >
      <div className="prose">
        <p>
          There are many ways to support RMHC of the Philadelphia Region. Every gift helps keep families close when they need it most.
        </p>
        <ul>
          <li><Link to="/donate">Donate online</Link> — One-time or recurring gifts</li>
          <li><Link to="/superstars">Superstar Sustainers</Link> — Recurring monthly giving</li>
          <li><Link to="/guestfeedonation">Support a specific family</Link> — Donate toward a current guest family's stay</li>
          <li><Link to="/wishlist">Wish list</Link> — Shop and ship items we need</li>
          <li><Link to="/get-involved/volunteer">Volunteer</Link> — Give your time</li>
          <li><Link to="/get-involved/events">Events</Link> — Participate in or sponsor events</li>
        </ul>
      </div>
    </PageSection>
  );
}
