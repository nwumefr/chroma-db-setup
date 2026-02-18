import PageSection from '../components/PageSection';

export default function Shop() {
  return (
    <PageSection
      title="Shop RMHC Philly Merchandise"
      breadcrumbs={[]}
    >
      <div className="prose">
        <p>
          Show your support for RMHC of the Philadelphia Region with official merchandise. Proceeds benefit our programs and the families we serve.
        </p>
        <p>
          <a href="https://rmhcphilly.org/shop/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit our online shop</a>
        </p>
      </div>
    </PageSection>
  );
}
