import { Link } from 'react-router-dom';
import PageSection from '../components/PageSection';

export default function StayingWithUs() {
  return (
    <PageSection
      title="Staying with Us"
      breadcrumbs={[{ label: 'Staying with Us' }]}
    >
      <div className="prose">
        <p>
          Our two Ronald McDonald Houses in Philadelphia offer a place to stay for families whose children are receiving treatment at area hospitals. We provide lodging, meals, and family support services so families can focus on their child's care.
        </p>
        <ul>
          <li><Link to="/staying-with-us/request-a-room">Request a Room</Link> — How to request a stay</li>
          <li><Link to="/staying-with-us/family-support-services">Family Support Services</Link> — What we offer during your stay</li>
          <li><Link to="/staying-with-us/support-a-family">Support a Current Family</Link> — Donate to support a family staying with us</li>
        </ul>
      </div>
    </PageSection>
  );
}
