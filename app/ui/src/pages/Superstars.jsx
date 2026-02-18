import PageSection from '../components/PageSection';
import { Link } from 'react-router-dom';

export default function Superstars() {
  return (
    <PageSection
      title="Superstar Sustainers"
      breadcrumbs={[{ label: 'Donate', path: '/donate' }, { label: 'Superstar Sustainers' }]}
    >
      <div className="prose">
        <p>
          Become a Superstar Sustainer by setting up a recurring gift. Your monthly or annual commitment helps families access care whenever they need it and provides predictable support for our programs.
        </p>
        <p>
          <Link to="/donate" className="btn btn-primary">Set up a recurring gift</Link>
        </p>
      </div>
    </PageSection>
  );
}
