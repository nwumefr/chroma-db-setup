import { Link } from 'react-router-dom';
import PageSection from '../components/PageSection';

export default function ServedWithLove() {
  return (
    <PageSection
      title="Served with Love"
      breadcrumbs={[]}
    >
      <div className="prose">
        <p>
          Provide the comforts of home to our guest families by preparing and serving delicious meals in our Chestnut Street kitchen. Volunteer groups and individuals can sign up to cook and serve meals, giving families one less thing to worry about during their child's treatment.
        </p>
        <p>
          To learn more and sign up, visit our <Link to="/get-involved/volunteer">Volunteer</Link> page or contact our volunteer team at 215.387.8406 or volunteer@rmhcphilly.org.
        </p>
      </div>
    </PageSection>
  );
}
