import { Link } from 'react-router-dom';

const Students = () => {
  return (
    <main className="dashboard-content" id="main-content">
      <div className="container-fluid">
        {/* Page Header */}
        <div className="dashboard-row">
          <div className="dashboard-grid grid-cols-1">
            <div className="dashboard-card">
              <div className="dashboard-card-header d-flex justify-content-between align-items-center">
                <h4 className="dashboard-card-title mb-0">All Students</h4>
              </div>
              <div className="dashboard-card-body">
                {/* Search and Filter */}
                <div className="row gx-3 gy-2 mb-3">
                  <div className="col-md-6">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-search" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search students..."
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select">
                      <option>All Departments</option>
                      <option>Computer Science</option>
                      <option>Engineering</option>
                      <option>Business</option>
                      <option>Medicine</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select">
                      <option>All Years</option>
                      <option>First Year</option>
                      <option>Second Year</option>
                      <option>Third Year</option>
                      <option>Fourth Year</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Students Grid */}
        <div className="dashboard-row">
          <div className="dashboard-grid grid-cols-4">
            {/* Student Card 1 */}
            <div className="dashboard-card h-100">
              <div className="dashboard-card-body text-center">
                <img
                  src="https://ui-avatars.com/api/?name=Alex+Johnson&background=6366f1&color=fff"
                  alt="Alex Johnson"
                  className="rounded-circle mb-3"
                  width={100}
                  height={100}
                  loading="lazy"
                />
                <h5 className="mb-1">Alex Johnson</h5>
                <p className="text-muted mb-2">Computer Science</p>
                <p className="text-muted small mb-3">
                  <strong>Age:</strong> 20 Years
                </p>
                <div className="d-flex gap-2 justify-content-center">
                  <Link to="/students/2" className="btn btn-sm btn-outline-primary">
                    <i className="bi bi-eye" /> View
                  </Link>
                </div>
              </div>
            </div>
            {/* Student Card 2 */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Students;
