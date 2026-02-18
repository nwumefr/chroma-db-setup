import PageSection from '../components/PageSection';

export default function Contact() {
  return (
    <PageSection
      title="Contact Us"
      breadcrumbs={[]}
    >
      <div className="prose">
        <p>
          Ronald McDonald House Charities of the Philadelphia Region<br />
          3925 Chestnut Street<br />
          Philadelphia, PA 19104
        </p>
        <p>
          For general inquiries, volunteer opportunities, or to learn more about our programs, please reach out through the main office. For volunteer-specific questions, contact 215.387.8406 or volunteer@rmhcphilly.org. For giving questions, contact Jordan Hanchulak at (484) 473-1957 or giving@rmhcphilly.org.
        </p>
      </div>
    </PageSection>
  );
}
