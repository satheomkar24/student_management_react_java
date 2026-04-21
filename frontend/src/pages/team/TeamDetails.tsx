import Breadcrumb from '../../component/layout/Breadcrumb';
import Newsletter from '../../component/reusables/Newsletter';
import TeamDetailsSection from '../../component/team/TeamDetailsSection';

const TeamDetails = () => {
  return (
    <>
      <Breadcrumb sectionTitle="Instructor Details" />
      <TeamDetailsSection />
      <Newsletter />
    </>
  );
};

export default TeamDetails;
