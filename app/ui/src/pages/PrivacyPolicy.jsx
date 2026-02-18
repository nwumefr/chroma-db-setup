import PageSection from '../components/PageSection';

export default function PrivacyPolicy() {
  return (
    <PageSection
      title="Privacy Policy"
      breadcrumbs={[]}
    >
      <div className="prose">
        <p>
          Ronald McDonald House Charities of the Philadelphia Region respects your privacy. We do not sell or share your personal information with third parties for their marketing purposes. We use the information you provide to process donations, send communications you have requested, and improve our services.
        </p>
        <p>
          For the full privacy policy of RMHC of the Philadelphia Region, please contact us or refer to the policy available on the official rmhcphilly.org website.
        </p>
      </div>
    </PageSection>
  );
}
