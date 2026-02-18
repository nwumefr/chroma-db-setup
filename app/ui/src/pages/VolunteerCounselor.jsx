import PageSection from '../components/PageSection';

export default function VolunteerCounselor() {
  return (
    <PageSection
      title="Volunteer Counselor Application"
      breadcrumbs={[{ label: 'Camp', path: '/camp' }, { label: 'Volunteer Counselor Application' }]}
    >
      <div className="prose">
        <p>
          Ronald McDonald Camp relies on volunteer counselors to create a safe, fun experience for campers. Counselors work alongside staff to lead activities, support campers, and help with day-to-day operations during the week of camp.
        </p>
        <p>
          If you are interested in becoming a volunteer counselor, please complete the Volunteer Counselor Application when it opens for the upcoming camp season. Requirements and training details will be provided during the application process.
        </p>
      </div>
    </PageSection>
  );
}
