import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import Layout from './component/layout/Layout';
import Register from './pages/auth/Register';
import Instructors from './pages/instructors/Instructors';
import AddInstructor from './pages/instructors/AddInstructor';
import EditInstructor from './pages/instructors/EditInstructor';
import InstructorDetails from './pages/instructors/InstructorDetails';
import Courses from './pages/courses/Courses';
import AddCourse from './pages/courses/AddCourse';
import EditCourse from './pages/courses/EditCourse';
import CourseDetails from './pages/courses/CourseDetails';
import Students from './pages/students/Students';
import StudentDetails from './pages/students/StudentDetails';

const routes = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/instructors',
        children: [
          { index: true, Component: Instructors },
          {
            path: 'add',
            Component: AddInstructor,
          },
          {
            path: 'edit/:id',
            Component: EditInstructor,
          },
          {
            path: ':id',
            Component: InstructorDetails,
          },
        ],
      },
      {
        path: '/Courses',
        children: [
          { index: true, Component: Courses },
          {
            path: 'add',
            Component: AddCourse,
          },
          {
            path: 'edit/:id',
            Component: EditCourse,
          },
          {
            path: ':id',
            Component: CourseDetails,
          },
        ],
      },
      {
        path: '/Students',
        children: [
          { index: true, Component: Students },
          {
            path: ':id',
            Component: StudentDetails,
          },
        ],
      },
    ],
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
    ],
  },
  {
    path: '*',
    Component: NotFound,
  },
]);

export default routes;
