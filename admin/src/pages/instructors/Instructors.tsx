import { Link } from 'react-router-dom';

const Instructors = () => {
  return (
    <main className="dashboard-content" id="main-content">
      <div className="container-fluid">
        {/* Page Header */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h3 font-bold">All Instructors</h1>
              <p className="text-muted text-sm">Manage and view all faculty members.</p>
            </div>
            <div>
              <Link to="/instructors/add" className="btn btn-primary">
                <i className="bi bi-plus-lg me-2" />
                Add Instructor
              </Link>
            </div>
          </div>
        </div>
        {/* Stats Cards Row */}
        <div className="dashboard-row">
          <div className="dashboard-grid grid-cols-4">
            <div className="stats-card">
              <div className="stats-card-label">Total Instructors</div>
              <div className="stats-card-value">156</div>
              <span className="stats-card-change positive">+12 this month</span>
              <div className="progress-custom">
                <div className="progress-bar-custom bg-primary" style={{ width: '80%' }} />
              </div>
            </div>
            <div className="stats-card">
              <div className="stats-card-label">Full-Time</div>
              <div className="stats-card-value">89</div>
              <span className="stats-card-change positive">+5 this month</span>
              <div className="progress-custom">
                <div className="progress-bar-custom bg-success" style={{ width: '60%' }} />
              </div>
            </div>
            <div className="stats-card">
              <div className="stats-card-label">Part-Time</div>
              <div className="stats-card-value">67</div>
              <span className="stats-card-change positive">+7 this month</span>
              <div className="progress-custom">
                <div className="progress-bar-custom bg-warning" style={{ width: '40%' }} />
              </div>
            </div>
            <div className="stats-card">
              <div className="stats-card-label">Departments</div>
              <div className="stats-card-value">24</div>
              <span className="stats-card-change neutral">No change</span>
              <div className="progress-custom">
                <div className="progress-bar-custom bg-info" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
        {/* Featured Instructors Cards */}
        <div className="dashboard-row">
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <h5 className="dashboard-card-title mb-0">Featured Instructors</h5>
            </div>
            <div className="dashboard-card-body">
              <div className="dashboard-grid grid-cols-4 gap-4">
                {/* Instructor Card 1 */}
                <div className="professor-card">
                  <div className="text-center mb-3">
                    <img
                      src="https://ui-avatars.com/api/?name=Dr.+Sarah+Johnson&background=0d6efd&color=fff"
                      alt="Dr. Sarah Johnson"
                      className="rounded-circle"
                      style={{ width: 80, height: 80 }}
                    />
                  </div>
                  <div className="text-center">
                    <h6 className="mb-1">Dr. Sarah Johnson</h6>
                    <p className="text-muted text-sm mb-2">Computer Science</p>
                    <div className="mb-2">
                      <span className="badge bg-success">Full-Time</span>
                    </div>
                    <div className="text-warning mb-2">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                      <span className="text-muted text-sm">(4.7)</span>
                    </div>
                    <div className="d-flex gap-2 justify-content-center">
                      <Link to="/instructors/1" className="btn btn-sm btn-outline-primary">
                        View
                      </Link>
                      <Link to="/instructors/edit/2" className="btn btn-sm btn-outline-secondary">
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Instructor Card 2 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Instructors;
