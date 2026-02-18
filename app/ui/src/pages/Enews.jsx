import PageSection from '../components/PageSection';

export default function Enews() {
  return (
    <PageSection
      title="Sign up to receive e-news"
      breadcrumbs={[]}
    >
      <div className="prose">
        <p>
          Stay connected with RMHC of the Philadelphia Region. Sign up for our e-newsletter to receive updates on our programs, events, and ways to get involved.
        </p>
        <p>
          <a href="https://rmhcphilly.org/enews/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Sign up for e-news</a>
        </p>
      </div>
    </PageSection>
  );
}
