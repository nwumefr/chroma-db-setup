import PageSection from '../components/PageSection';

export default function TaxInformation() {
  return (
    <PageSection
      title="Tax Information"
      breadcrumbs={[]}
    >
      <div className="prose">
        <p>
          Ronald McDonald House Charities of the Philadelphia Region (EIN: 23-7377505) is recognized as a public charity under Internal Revenue Code section 509(a) and has 501(c)(3) status.
        </p>
        <p>
          Donors should consult their tax advisor for questions regarding the deductibility of contributions. A copy of the RMHC of the Philadelphia Region determination letter is available upon request.
        </p>
      </div>
    </PageSection>
  );
}
