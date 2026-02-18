import PageSection from '../components/PageSection';
import { Link } from 'react-router-dom';

export default function SupportAFamily() {
  return (
    <PageSection
      title="Support a Current Family"
      breadcrumbs={[{ label: 'Staying with Us', path: '/staying-with-us' }, { label: 'Support a Current Family' }]}
    >
      <div className="prose">
        <p>
          You can make a direct impact on a family currently staying at the Ronald McDonald House by making a donation to support their stay. Your gift helps cover the cost of lodging and services for families who need it most.
        </p>
        <p>
          <Link to="/guestfeedonation">Click here to make a donation to support a specific family currently staying at the Ronald McDonald House.</Link>
        </p>
      </div>
    </PageSection>
  );
}
