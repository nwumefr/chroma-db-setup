import PageSection from '../components/PageSection';

export default function TermsOfUse() {
  return (
    <PageSection
      title="Terms of Use"
      breadcrumbs={[]}
    >
      <div className="prose">
        <p>
          This website is a recreation for educational purposes. The official website of Ronald McDonald House Charities of the Philadelphia Region is rmhcphilly.org. For official terms of use, please refer to the official site.
        </p>
        <p>
          The trademarks used herein (McDonald's, Ronald McDonald House Charities, RMHC, Ronald McDonald House, Ronald McDonald Family Room, Ronald McDonald Care Mobile) are owned by McDonald's Corporation and its affiliates.
        </p>
      </div>
    </PageSection>
  );
}
