import CourseSection from '../../component/Course/CourseSection';
import Breadcrumb from '../../component/layout/Breadcrumb';
import Newsletter from '../../component/reusables/Newsletter';

const Course = () => {
  return (
    <>
      <Breadcrumb sectionTitle="Course" />
      <CourseSection />
      <Newsletter />
    </>
  );
};

export default Course;
