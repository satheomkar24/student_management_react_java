import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <main className="dashboard-content" id="main-content">
      <div className="container-fluid">
        {/* Page Header */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h3 font-bold mb-1">All Courses</h1>
              <p className="text-muted">Manage your institution's course catalog</p>
            </div>
            <div>
              <Link to="/courses/add" className="btn btn-primary">
                <i className="bi bi-plus-circle me-2" /> Add New Course
              </Link>
              <button className="btn btn-outline-secondary ms-2">
                <i className="bi bi-download me-2" /> Export
              </button>
            </div>
          </div>
        </div>
        {/* Stats Row */}
        <div className="dashboard-grid grid-cols-4 mb-3">
          <div className="stats-card">
            <div className="stats-card-label">Total Courses</div>
            <div className="stats-card-value">156</div>
            <span className="stats-card-change positive">+12% from last month</span>
          </div>
          <div className="stats-card">
            <div className="stats-card-label">Active Courses</div>
            <div className="stats-card-value">142</div>
            <span className="stats-card-change positive">+8 new</span>
          </div>
          <div className="stats-card">
            <div className="stats-card-label">Total Students</div>
            <div className="stats-card-value">3,245</div>
            <span className="stats-card-change positive">+18%</span>
          </div>
          <div className="stats-card">
            <div className="stats-card-label">Avg. Enrollment</div>
            <div className="stats-card-value">21</div>
            <span className="stats-card-change negative">-2</span>
          </div>
        </div>
        {/* Filters Row */}
        <div className="dashboard-card mb-3">
          <div className="dashboard-grid grid-cols-4 mb-3">
            <div>
              <label htmlFor="departmentFilter" className="form-label small">
                Department
              </label>
              <select className="form-select" id="departmentFilter">
                <option>All Departments</option>
                <option value={1}>Computer Science</option>
                <option value={2}>Mathematics</option>
                <option value={3}>Physics</option>
                <option value={4}>Chemistry</option>
                <option value={5}>Biology</option>
              </select>
            </div>
            <div>
              <label htmlFor="semesterFilter" className="form-label small">
                Semester
              </label>
              <select className="form-select" id="semesterFilter">
                <option>All Semesters</option>
                <option value={1}>Fall 2025</option>
                <option value={2}>Spring 2025</option>
                <option value={3}>Summer 2025</option>
              </select>
            </div>
            <div>
              <label htmlFor="statusFilter" className="form-label small">
                Status
              </label>
              <select className="form-select" id="statusFilter">
                <option>All Status</option>
                <option value={1}>Active</option>
                <option value={2}>Inactive</option>
                <option value={3}>Completed</option>
              </select>
            </div>
            <div>
              <label htmlFor="searchFilter" className="form-label small">
                Search
              </label>
              <input
                type="text"
                className="form-control"
                id="searchFilter"
                placeholder="Search courses..."
              />
            </div>
          </div>
        </div>
        {/* Courses Table */}
        <div className="dashboard-card">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">
                    <input className="form-check-input" type="checkbox" id="selectAll" />
                  </th>
                  <th scope="col">Course Code</th>
                  <th scope="col">Course Name</th>
                  <th scope="col">Department</th>
                  <th scope="col">Professor</th>
                  <th scope="col">Credits</th>
                  <th scope="col">Students</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                  <td className="fw-semibold">CS101</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=50&h=50&fit=crop"
                        alt="Course"
                        className="rounded me-3"
                        width={40}
                        height={40}
                        loading="lazy"
                      />
                      <div>
                        <div className="fw-semibold">Introduction to Computer Science</div>
                        <small className="text-muted">Mon, Wed, Fri - 10:00 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>Computer Science</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://ui-avatars.com/api/?name=John+Smith&background=6366f1&color=fff"
                        alt="Professor"
                        className="rounded-circle me-2"
                        width={30}
                        height={30}
                        loading="lazy"
                      />
                      <span>Dr. John Smith</span>
                    </div>
                  </td>
                  <td>3</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span>45</span>
                      <div className="progress ms-2" style={{ width: 60, height: 6 }}>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: '90%' }}
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-success">Active</span>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button className="btn btn-sm btn-light" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots-vertical" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/courses/4">
                            <i className="bi bi-eye me-2" /> View
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/courses/edit/4">
                            <i className="bi bi-pencil me-2" /> Edit
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item text-danger" href="#">
                            <i className="bi bi-trash me-2" /> Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>{' '}
      </div>
    </main>
  );
};

export default Courses;
