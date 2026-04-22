const Dashboard = () => {
  return (
    <main className="dashboard-content" id="main-content">
      <div className="container-fluid">
        {/* Page Header */}
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h3 font-bold">Management Dashboard</h1>
              <p className="text-muted text-sm">
                Comprehensive overview of courses, student progress, and academic performance
                metrics.
              </p>
            </div>
          </div>
        </div>
        {/* Academic Overview Cards */}
        <div className="dashboard-row">
          <div className="dashboard-grid grid-cols-4">
            <div className="dashboard-card">
              <div className="dashboard-card-body text-center">
                <div className="mb-3">
                  <div
                    className="stat-icon-large bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="bi bi-book-half" style={{ fontSize: 24, color: '#198754' }} />
                  </div>
                </div>
                <div className="stat-value text-success fw-bold mb-1" style={{ fontSize: '2rem' }}>
                  142
                </div>
                <div className="stat-label text-muted mb-2">Active Courses</div>
                <div className="stat-change text-success small fw-semibold">
                  <i className="bi bi-arrow-up" style={{ fontSize: 12 }} /> +8
                </div>
                <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                  new this semester
                </div>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-body text-center">
                <div className="mb-3">
                  <div
                    className="stat-icon-large bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="bi bi-people-fill" style={{ fontSize: 24, color: '#0d6efd' }} />
                  </div>
                </div>
                <div className="stat-value text-primary fw-bold mb-1" style={{ fontSize: '2rem' }}>
                  9,284
                </div>
                <div className="stat-label text-muted mb-2">Enrolled Students</div>
                <div className="stat-change text-success small fw-semibold">
                  <i className="bi bi-arrow-up" style={{ fontSize: 12 }} /> +412
                </div>
                <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                  since last month
                </div>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-body text-center">
                <div className="mb-3">
                  <div
                    className="stat-icon-large bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="bi bi-person-badge" style={{ fontSize: 24, color: '#ffc107' }} />
                  </div>
                </div>
                <div className="stat-value text-warning fw-bold mb-1" style={{ fontSize: '2rem' }}>
                  68
                </div>
                <div className="stat-label text-muted mb-2">Faculty Members</div>
                <div className="stat-change text-success small fw-semibold">
                  <i className="bi bi-arrow-up" style={{ fontSize: 12 }} /> +3
                </div>
                <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                  new hires
                </div>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-body text-center">
                <div className="mb-3">
                  <div
                    className="stat-icon-large bg-info bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="bi bi-award" style={{ fontSize: 24, color: '#0dcaf0' }} />
                  </div>
                </div>
                <div className="stat-value text-info fw-bold mb-1" style={{ fontSize: '2rem' }}>
                  4.7
                </div>
                <div className="stat-label text-muted mb-2">Course Rating</div>
                <div className="stat-change text-success small fw-semibold">
                  <i className="bi bi-arrow-up" style={{ fontSize: 12 }} /> +0.3
                </div>
                <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                  average improvement
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Academic Insights */}
        <div className="dashboard-row">
          <div className="dashboard-grid grid-cols-3">
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h6 className="dashboard-card-title">Department Overview</h6>
              </div>
              <div className="dashboard-card-body">
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center">
                      <div
                        className="bg-primary bg-opacity-10 rounded me-2"
                        style={{ width: 8, height: 8 }}
                      />
                      <span className="small">Computer Science</span>
                    </div>
                    <strong>34 courses</strong>
                  </div>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-primary" style={{ width: '45%' }} />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center">
                      <div
                        className="bg-success bg-opacity-10 rounded me-2"
                        style={{ width: 8, height: 8 }}
                      />
                      <span className="small">Mathematics</span>
                    </div>
                    <strong>28 courses</strong>
                  </div>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-success" style={{ width: '37%' }} />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center">
                      <div
                        className="bg-info bg-opacity-10 rounded me-2"
                        style={{ width: 8, height: 8 }}
                      />
                      <span className="small">Biology</span>
                    </div>
                    <strong>22 courses</strong>
                  </div>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-info" style={{ width: '29%' }} />
                  </div>
                </div>
                <div className="small text-muted">
                  <strong>Total:</strong> 84 courses across 12 departments
                </div>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h6 className="dashboard-card-title">Academic Calendar</h6>
              </div>
              <div className="dashboard-card-body">
                <div className="mb-3">
                  <div className="d-flex align-items-start">
                    <div
                      className="bg-warning bg-opacity-10 text-warning rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: 32, height: 32, flexShrink: 0 }}
                    >
                      <i className="bi bi-calendar-event" style={{ fontSize: 14 }} />
                    </div>
                    <div>
                      <h6 className="mb-1">Spring Registration</h6>
                      <small className="text-muted">Opens February 1st</small>
                      <div className="small text-warning fw-semibold">In 2 weeks</div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-start">
                    <div
                      className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: 32, height: 32, flexShrink: 0 }}
                    >
                      <i className="bi bi-mortarboard" style={{ fontSize: 14 }} />
                    </div>
                    <div>
                      <h6 className="mb-1">Midterm Exams</h6>
                      <small className="text-muted">March 15-22, 2025</small>
                      <div className="small text-primary fw-semibold">In 8 weeks</div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-start">
                    <div
                      className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: 32, height: 32, flexShrink: 0 }}
                    >
                      <i className="bi bi-trophy" style={{ fontSize: 14 }} />
                    </div>
                    <div>
                      <h6 className="mb-1">Graduation Ceremony</h6>
                      <small className="text-muted">May 18, 2025</small>
                      <div className="small text-success fw-semibold">In 16 weeks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h6 className="dashboard-card-title">Quick Actions</h6>
              </div>
              <div className="dashboard-card-body">
                <div className="d-grid gap-2">
                  <button className="btn btn-outline-primary btn-sm">
                    <i className="bi bi-plus-circle me-2" />
                    Create Course
                  </button>
                  <button className="btn btn-outline-success btn-sm">
                    <i className="bi bi-person-plus me-2" />
                    Enroll Student
                  </button>
                  <button className="btn btn-outline-info btn-sm">
                    <i className="bi bi-calendar-plus me-2" />
                    Schedule Class
                  </button>
                  <button className="btn btn-outline-warning btn-sm">
                    <i className="bi bi-file-earmark-text me-2" />
                    Grade Report
                  </button>
                  <button className="btn btn-outline-secondary btn-sm">
                    <i className="bi bi-gear me-2" />
                    Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Course Activity and Top Students */}
        <div className="dashboard-row">
          <div className="dashboard-grid grid-cols-2">
            <div className="dashboard-card">
              <div className="dashboard-card-header d-flex justify-content-between align-items-center">
                <h5 className="dashboard-card-title mb-0">Recent Course Activity</h5>
                <a href="all-courses.html" className="btn btn-outline-primary btn-sm">
                  View All
                </a>
              </div>
              <div className="dashboard-card-body">
                <div className="list-group list-group-flush">
                  <div className="list-group-item d-flex align-items-center px-0 py-3">
                    <div
                      className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: 40, height: 40 }}
                    >
                      <i className="bi bi-plus-circle" style={{ color: '#0d6efd', fontSize: 16 }} />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">New Course Created</h6>
                      <small className="text-muted">Advanced Machine Learning</small>
                      <div className="small text-muted">Prof. Sarah Johnson - 2 hours ago</div>
                    </div>
                    <span className="badge bg-primary">New</span>
                  </div>
                  <div className="list-group-item d-flex align-items-center px-0 py-3">
                    <div
                      className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: 40, height: 40 }}
                    >
                      <i
                        className="bi bi-person-check"
                        style={{ color: '#198754', fontSize: 16 }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Student Enrollment</h6>
                      <small className="text-muted">15 new students in Data Structures</small>
                      <div className="small text-muted">Prof. Michael Chen - 4 hours ago</div>
                    </div>
                    <span className="badge bg-success">+15</span>
                  </div>
                  <div className="list-group-item d-flex align-items-center px-0 py-3">
                    <div
                      className="bg-warning bg-opacity-10 text-warning rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: 40, height: 40 }}
                    >
                      <i
                        className="bi bi-file-earmark-check"
                        style={{ color: '#ffc107', fontSize: 16 }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Assignment Graded</h6>
                      <small className="text-muted">Programming Assignment #3</small>
                      <div className="small text-muted">Prof. Lisa Wang - 6 hours ago</div>
                    </div>
                    <span className="badge bg-warning text-dark">85% avg</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-header d-flex justify-content-between align-items-center">
                <h5 className="dashboard-card-title mb-0">Top Performing Courses</h5>
                <a href="#" className="btn btn-outline-primary btn-sm">
                  View Report
                </a>
              </div>
              <div className="dashboard-card-body">
                <div className="list-group list-group-flush">
                  <div className="list-group-item d-flex align-items-center px-0 py-3">
                    <div
                      className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: 40, height: 40 }}
                    >
                      <strong
                        style={{
                          color: '#198754',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}
                      >
                        1
                      </strong>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Advanced Programming</h6>
                      <small className="text-muted">Prof. Sarah Johnson</small>
                      <div className="small text-success">4.9/5.0 rating • 98% completion</div>
                    </div>
                    <div className="text-end">
                      <div className="fw-bold text-success">45</div>
                      <small className="text-muted">enrolled</small>
                    </div>
                  </div>
                  <div className="list-group-item d-flex align-items-center px-0 py-3">
                    <div
                      className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: 40, height: 40 }}
                    >
                      <strong
                        style={{
                          color: '#0d6efd',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}
                      >
                        2
                      </strong>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Data Structures</h6>
                      <small className="text-muted">Prof. Michael Chen</small>
                      <div className="small text-success">4.8/5.0 rating • 96% completion</div>
                    </div>
                    <div className="text-end">
                      <div className="fw-bold text-primary">38</div>
                      <small className="text-muted">enrolled</small>
                    </div>
                  </div>
                  <div className="list-group-item d-flex align-items-center px-0 py-3">
                    <div
                      className="bg-warning bg-opacity-10 text-warning rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: 40, height: 40 }}
                    >
                      <strong
                        style={{
                          color: '#ffc107',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}
                      >
                        3
                      </strong>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Machine Learning</h6>
                      <small className="text-muted">Prof. David Kim</small>
                      <div className="small text-success">4.7/5.0 rating • 94% completion</div>
                    </div>
                    <div className="text-end">
                      <div className="fw-bold text-warning">32</div>
                      <small className="text-muted">enrolled</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{' '}
      </div>
    </main>
  );
};

export default Dashboard;
