import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar " id="sidebar">
      {/* collapsed */}
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <h5>
            <i className="bi bi-mortarboard-fill" />
            Kiaalap
          </h5>
          <button className="sidebar-close" id="sidebarClose">
            <i className="bi bi-x-lg" />
          </button>
        </div>
      </div>
      <nav className="sidebar-nav">
        <div className="menu-section">
          <div className="menu-section-title">Main</div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link active " to="/">
                <i className="bi bi-speedometer2" />
                <span>Dashboard</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu-section">
          <div className="menu-section-title">Academic</div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link " to="/instructors">
                <i className="bi bi-person-badge" />
                <span>Professors</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  " to="/students">
                <i className="bi bi-people"></i>
                <span>Students</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  " to="/courses">
                <i className="bi bi-book"></i>
                <span>Course</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
