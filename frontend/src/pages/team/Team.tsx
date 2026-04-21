import Breadcrumb from '../../component/layout/Breadcrumb';
import Newsletter from '../../component/reusables/Newsletter';
import TeamSection from '../../component/team/TeamSection';

const Team = () => {
  return (
    <>
      <Breadcrumb sectionTitle="Instructor" />
      <TeamSection />
      <Newsletter />
    </>
  );
};

export default Team;
