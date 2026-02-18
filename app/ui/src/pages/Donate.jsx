import PageSection from '../components/PageSection';
import { Link } from 'react-router-dom';

export default function Donate() {
  return (
    <PageSection
      title="Give the Gift of Comfort and Hope"
      breadcrumbs={[{ label: 'Donate' }]}
    >
      <div className="prose">
        <p className="lead">
          RMHC Philly creates a community of comfort and hope for the hundreds of families who stay with us all year long. Your gift makes you part of that community and provides for the needs of families facing childhood illnesses.
        </p>
        <div className="donate-options">
          <div className="donate-option">
            <h3><Link to="/superstars">Superstar Sustainers</Link></h3>
            <p>Become a Superstar Sustainer by making a recurring donation to support our families year-round.</p>
          </div>
          <div className="donate-option">
            <h3><Link to="/guestfeedonation">Support a Specific Family</Link></h3>
            <p>Make a donation to support a specific family currently staying at the Ronald McDonald House.</p>
          </div>
        </div>
        <p>
          If you prefer to donate by mail, please send to 3925 Chestnut St, Philadelphia, PA 19104.
        </p>
        <p>
          If you have any questions or are interested in learning how to become more involved, please contact Jordan Hanchulak at (484) 473-1957 or giving@rmhcphilly.org.
        </p>
        <p>
          <Link to="/guestfeedonation">To make a donation to support a specific family currently staying at the Ronald McDonald House, click HERE.</Link>
        </p>
      </div>
    </PageSection>
  );
}
