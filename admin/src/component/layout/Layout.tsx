import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <>
      <section className="row g-0">
        <aside className="col-auto">
          <Sidebar />
        </aside>
        <main className="col overflow-y-auto" style={{ maxHeight: '100vh' }}>
          <Header />
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default Layout;
