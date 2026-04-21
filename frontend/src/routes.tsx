import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import Layout from './component/layout/Layout';
import Course from './pages/course/Course';
import CourseDetails from './pages/course/CourseDetails';
import Team from './pages/team/Team';
import TeamDetails from './pages/team/TeamDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/auth/Register';

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
        path: 'course',
        children: [
          {
            index: true,
            Component: Course,
          },
          {
            path: ':id',
            Component: CourseDetails,
          },
        ],
      },
      {
        path: 'team',
        children: [
          {
            index: true,
            Component: Team,
          },
          {
            path: ':id',
            Component: TeamDetails,
          },
        ],
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'contact',
        Component: Contact,
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
