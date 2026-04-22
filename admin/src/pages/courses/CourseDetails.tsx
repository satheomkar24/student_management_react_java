const CourseDetails = () => {
  return (
    <main className="dashboard-content" id="main-content">
      <div className="container-fluid">
        {/* Course Header */}
        <div className="mb-3">
          <div className="dashboard-card">
            <div className="dashboard-card-body">
              <div className="d-flex align-items-start gap-3">
                <img
                  src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=200&h=120&fit=crop"
                  alt="Course Image"
                  className="rounded flex-shrink-0"
                  width={200}
                  height={120}
                  loading="lazy"
                />
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h1 className="h3 fw-bold mb-1">CS101 - Introduction to Computer Science</h1>
                      <p className="text-muted mb-2">Computer Science Department</p>
                      <div className="d-flex flex-wrap gap-2 mb-2">
                        <span className="badge bg-success">Active</span>
                        <span className="badge bg-info text-dark">3 Credits</span>
                        <span className="badge bg-warning text-dark">Fall 2025</span>
                        <span className="badge bg-primary">Core Course</span>
                      </div>
                      <div className="d-flex align-items-center text-muted small">
                        <i className="bi bi-person me-1" />
                        <span className="me-3">Dr. Robert Smith</span>
                        <i className="bi bi-people me-1" />
                        <span className="me-3">42/45 Students</span>
                        <i className="bi bi-clock me-1" />
                        <span>MWF 10:00-11:30 AM</span>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-outline-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="edit-course.html">
                            <i className="bi bi-pencil me-2" />
                            Edit Course
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-people me-2" />
                            Manage Students
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-file-text me-2" />
                            View Syllabus
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-download me-2" />
                            Export Data
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Course Tabs */}
        <div className="dashboard-card">
          <div className="dashboard-card-header border-0">
            <ul className="nav nav-tabs card-header-tabs" id="courseInfoTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="overview-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#overview"
                  type="button"
                  role="tab"
                >
                  <i className="bi bi-info-circle me-2" />
                  Overview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="students-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#students"
                  type="button"
                  role="tab"
                >
                  <i className="bi bi-people me-2" />
                  Students
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="schedule-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#schedule"
                  type="button"
                  role="tab"
                >
                  <i className="bi bi-calendar me-2" />
                  Schedule
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="materials-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#materials"
                  type="button"
                  role="tab"
                >
                  <i className="bi bi-book me-2" />
                  Materials
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="analytics-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#analytics"
                  type="button"
                  role="tab"
                >
                  <i className="bi bi-graph-up me-2" />
                  Analytics
                </button>
              </li>
            </ul>
          </div>
          <div className="dashboard-card-body">
            <div className="tab-content" id="courseInfoTabsContent">
              {/* Overview Tab */}
              <div className="tab-pane fade show active" id="overview" role="tabpanel">
                <div className="dashboard-grid grid-cols-3-1">
                  <div>
                    <h5 className="mb-3">Course Description</h5>
                    <p className="mb-3">
                      This course provides a comprehensive introduction to computer science
                      principles, programming fundamentals, and computational thinking. Students
                      will learn basic programming concepts, data structures, and problem-solving
                      techniques using modern programming languages.
                    </p>
                    <h5 className="mb-3">Learning Objectives</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="bi bi-check-circle text-success me-2" />
                        Understand fundamental programming concepts
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle text-success me-2" />
                        Learn problem-solving techniques
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle text-success me-2" />
                        Master basic data structures
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle text-success me-2" />
                        Develop algorithmic thinking
                      </li>
                    </ul>
                    <h5 className="mb-3">Prerequisites</h5>
                    <div className="alert alert-info" role="alert">
                      <i className="bi bi-info-circle me-2" />
                      <strong>Required:</strong> MATH101 - College Algebra
                    </div>
                  </div>
                  <div>
                    <div className="dashboard-card">
                      <div className="dashboard-card-header">
                        <h5 className="dashboard-card-title">Quick Stats</h5>
                      </div>
                      <div className="dashboard-card-body">
                        {/* Enrollment */}
                        <div className="mb-4">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="text-muted" style={{ fontSize: '0.875rem' }}>
                              Enrollment
                            </span>
                            <span className="fw-semibold">42/45</span>
                          </div>
                          <div className="progress" style={{ height: 6 }}>
                            <div className="progress-bar bg-success" style={{ width: '93%' }} />
                          </div>
                        </div>
                        {/* Attendance */}
                        <div className="mb-4">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="text-muted" style={{ fontSize: '0.875rem' }}>
                              Avg. Attendance
                            </span>
                            <span className="fw-semibold">89%</span>
                          </div>
                          <div className="progress" style={{ height: 6 }}>
                            <div className="progress-bar bg-info" style={{ width: '89%' }} />
                          </div>
                        </div>
                        {/* Course Progress */}
                        <div className="mb-4">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="text-muted" style={{ fontSize: '0.875rem' }}>
                              Course Progress
                            </span>
                            <span className="fw-semibold">35%</span>
                          </div>
                          <div className="progress" style={{ height: 6 }}>
                            <div className="progress-bar bg-warning" style={{ width: '35%' }} />
                          </div>
                        </div>
                        {/* Divider */}
                        <div className="border-top my-3 pt-3">
                          {/* Course Details */}
                          <div className="d-flex align-items-center mb-2">
                            <div className="flex-shrink-0">
                              <div
                                className="rounded-circle bg-light d-flex align-items-center justify-content-center"
                                style={{ width: 32, height: 32 }}
                              >
                                <i
                                  className="bi bi-calendar text-muted"
                                  style={{ fontSize: '0.875rem' }}
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-2">
                              <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                                Created
                              </div>
                              <div className="small fw-semibold">Sept 15, 2025</div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <div className="flex-shrink-0">
                              <div
                                className="rounded-circle bg-light d-flex align-items-center justify-content-center"
                                style={{ width: 32, height: 32 }}
                              >
                                <i
                                  className="bi bi-clock text-muted"
                                  style={{ fontSize: '0.875rem' }}
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-2">
                              <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                                Duration
                              </div>
                              <div className="small fw-semibold">16 weeks</div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <div
                                className="rounded-circle bg-light d-flex align-items-center justify-content-center"
                                style={{ width: 32, height: 32 }}
                              >
                                <i
                                  className="bi bi-geo-alt text-muted"
                                  style={{ fontSize: '0.875rem' }}
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-2">
                              <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                                Location
                              </div>
                              <div className="small fw-semibold">Building A, Room 101</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Students Tab */}
              <div className="tab-pane fade" id="students" role="tabpanel">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Enrolled Students (42)</h5>
                  <div className="d-flex gap-2">
                    <div className="input-group" style={{ width: 300 }}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search students..."
                      />
                      <button className="btn btn-outline-secondary" type="button">
                        <i className="bi bi-search" />
                      </button>
                    </div>
                    <button className="btn btn-primary">
                      <i className="bi bi-plus-circle me-2" />
                      Add Student
                    </button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Student</th>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Attendance</th>
                        <th>Grade</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="https://ui-avatars.com/api/?name=Alex+Johnson&background=6366f1&color=fff"
                              alt="Student"
                              className="rounded-circle me-2"
                              width={32}
                              height={32}
                            />
                            <span>Alex Johnson</span>
                          </div>
                        </td>
                        <td>STU2025001</td>
                        <td>alex.johnson@student.edu</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="me-2">92%</span>
                            <div className="progress" style={{ width: 60, height: 6 }}>
                              <div className="progress-bar bg-success" style={{ width: '92%' }} />
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success">A-</span>
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
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-eye me-2" />
                                  View Profile
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-envelope me-2" />
                                  Send Message
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-graph-up me-2" />
                                  View Grades
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="https://ui-avatars.com/api/?name=Sarah+Wilson&background=10b981&color=fff"
                              alt="Student"
                              className="rounded-circle me-2"
                              width={32}
                              height={32}
                            />
                            <span>Sarah Wilson</span>
                          </div>
                        </td>
                        <td>STU2025002</td>
                        <td>sarah.wilson@student.edu</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="me-2">87%</span>
                            <div className="progress" style={{ width: 60, height: 6 }}>
                              <div className="progress-bar bg-warning" style={{ width: '87%' }} />
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-info text-dark">B+</span>
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
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-eye me-2" />
                                  View Profile
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-envelope me-2" />
                                  Send Message
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-graph-up me-2" />
                                  View Grades
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Schedule Tab */}
              <div className="tab-pane fade" id="schedule" role="tabpanel">
                <div className="dashboard-grid grid-cols-3-1">
                  <div>
                    <h5 className="mb-3">Class Schedule</h5>
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Topic</th>
                            <th>Room</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Monday</td>
                            <td>10:00 - 11:30 AM</td>
                            <td>Introduction to Programming</td>
                            <td>Building A, Room 101</td>
                            <td>
                              <span className="badge bg-success">Completed</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Wednesday</td>
                            <td>10:00 - 11:30 AM</td>
                            <td>Variables and Data Types</td>
                            <td>Building A, Room 101</td>
                            <td>
                              <span className="badge bg-primary">Upcoming</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Friday</td>
                            <td>10:00 - 11:30 AM</td>
                            <td>Control Structures</td>
                            <td>Building A, Room 101</td>
                            <td>
                              <span className="badge bg-secondary">Scheduled</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <div className="dashboard-card">
                      <div className="dashboard-card-header">
                        <h5 className="dashboard-card-title">Upcoming Events</h5>
                      </div>
                      <div className="dashboard-card-body">
                        <div className="d-flex align-items-start mb-4">
                          <div className="flex-shrink-0">
                            <div
                              className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center"
                              style={{ width: 40, height: 40 }}
                            >
                              <i className="bi bi-calendar text-primary" />
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="mb-1 fw-semibold">Midterm Exam</h6>
                            <p className="text-muted mb-0" style={{ fontSize: '0.875rem' }}>
                              March 15, 2025 • 10:00 AM
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-4">
                          <div className="flex-shrink-0">
                            <div
                              className="rounded-circle bg-warning bg-opacity-10 d-flex align-items-center justify-content-center"
                              style={{ width: 40, height: 40 }}
                            >
                              <i className="bi bi-file-text text-warning" />
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="mb-1 fw-semibold">Assignment Due</h6>
                            <p className="text-muted mb-0" style={{ fontSize: '0.875rem' }}>
                              March 10, 2025 • 11:59 PM
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start">
                          <div className="flex-shrink-0">
                            <div
                              className="rounded-circle bg-info bg-opacity-10 d-flex align-items-center justify-content-center"
                              style={{ width: 40, height: 40 }}
                            >
                              <i className="bi bi-people text-info" />
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="mb-1 fw-semibold">Project Presentation</h6>
                            <p className="text-muted mb-0" style={{ fontSize: '0.875rem' }}>
                              March 25, 2025 • 2:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Materials Tab */}
              <div className="tab-pane fade" id="materials" role="tabpanel">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="mb-0">Course Materials</h5>
                  <button className="btn btn-primary">
                    <i className="bi bi-cloud-upload me-2" />
                    Upload Material
                  </button>
                </div>
                <div className="dashboard-grid grid-cols-2">
                  <div className="dashboard-card">
                    <div className="d-flex align-items-start">
                      <div className="flex-shrink-0">
                        <div
                          className="rounded-circle bg-danger bg-opacity-10 d-flex align-items-center justify-content-center"
                          style={{ width: 48, height: 48 }}
                        >
                          <i className="bi bi-file-pdf text-danger fs-5" />
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-1">Course Syllabus</h6>
                        <p className="text-muted small mb-2">
                          Complete course outline and requirements
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                            Sep 15, 2025 • 245 KB
                          </span>
                          <button className="btn btn-sm btn-outline-primary">
                            <i className="bi bi-download" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-card">
                    <div className="d-flex align-items-start">
                      <div className="flex-shrink-0">
                        <div
                          className="rounded-circle bg-warning bg-opacity-10 d-flex align-items-center justify-content-center"
                          style={{ width: 48, height: 48 }}
                        >
                          <i className="bi bi-file-slides text-warning fs-5" />
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-1">Lecture 1 - Introduction</h6>
                        <p className="text-muted small mb-2">
                          Introduction to programming concepts
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                            Sep 20, 2025 • 1.2 MB
                          </span>
                          <button className="btn btn-sm btn-outline-primary">
                            <i className="bi bi-download" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-card">
                    <div className="d-flex align-items-start">
                      <div className="flex-shrink-0">
                        <div
                          className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center"
                          style={{ width: 48, height: 48 }}
                        >
                          <i className="bi bi-file-code text-success fs-5" />
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-1">Sample Code</h6>
                        <p className="text-muted small mb-2">Example programs and exercises</p>
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                            Sep 22, 2025 • 85 KB
                          </span>
                          <button className="btn btn-sm btn-outline-primary">
                            <i className="bi bi-download" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-card">
                    <div className="d-flex align-items-start">
                      <div className="flex-shrink-0">
                        <div
                          className="rounded-circle bg-info bg-opacity-10 d-flex align-items-center justify-content-center"
                          style={{ width: 48, height: 48 }}
                        >
                          <i className="bi bi-file-text text-info fs-5" />
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-1">Assignment Guidelines</h6>
                        <p className="text-muted small mb-2">Homework and project instructions</p>
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                            Sep 25, 2025 • 156 KB
                          </span>
                          <button className="btn btn-sm btn-outline-primary">
                            <i className="bi bi-download" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Analytics Tab */}
              <div className="tab-pane fade" id="analytics" role="tabpanel">
                {/* Stats Cards */}
                <div className="dashboard-grid grid-cols-4 mb-4">
                  <div className="stats-card">
                    <div className="stats-card-label">Total Students</div>
                    <div className="stats-card-value">42</div>
                    <span className="stats-card-change positive">+3 this week</span>
                  </div>
                  <div className="stats-card">
                    <div className="stats-card-label">Avg. Attendance</div>
                    <div className="stats-card-value">89%</div>
                    <span className="stats-card-change positive">+2% from last month</span>
                  </div>
                  <div className="stats-card">
                    <div className="stats-card-label">Avg. GPA</div>
                    <div className="stats-card-value">3.2</div>
                    <span className="stats-card-change negative">-0.1 from last term</span>
                  </div>
                  <div className="stats-card">
                    <div className="stats-card-label">Completion Rate</div>
                    <div className="stats-card-value">94%</div>
                    <span className="stats-card-change positive">+5% improvement</span>
                  </div>
                </div>
                {/* Charts Row */}
                <div className="dashboard-grid grid-cols-2">
                  <div className="chart-wrapper">
                    <div className="dashboard-card-header">
                      <h5 className="dashboard-card-title">Attendance Trend</h5>
                    </div>
                    <div className="chart-container-main">
                      <canvas id="attendanceChart" />
                    </div>
                  </div>
                  <div className="chart-wrapper">
                    <div className="dashboard-card-header">
                      <h5 className="dashboard-card-title">Grade Distribution</h5>
                    </div>
                    <div className="chart-container-main">
                      <canvas id="gradeChart" />
                    </div>
                  </div>
                </div>
                {/* Additional Charts Row */}
                <div className="dashboard-grid grid-cols-3 mt-4">
                  <div className="chart-wrapper">
                    <div className="dashboard-card-header">
                      <h5 className="dashboard-card-title">Weekly Activity</h5>
                    </div>
                    <div className="chart-container-small">
                      <canvas id="weeklyActivityChart" />
                    </div>
                  </div>
                  <div className="chart-wrapper">
                    <div className="dashboard-card-header">
                      <h5 className="dashboard-card-title">Assignment Scores</h5>
                    </div>
                    <div className="chart-container-small">
                      <canvas id="assignmentScoresChart" />
                    </div>
                  </div>
                  <div className="chart-wrapper">
                    <div className="dashboard-card-header">
                      <h5 className="dashboard-card-title">Participation Rate</h5>
                    </div>
                    <div className="chart-container-small">
                      <canvas id="participationChart" />
                    </div>
                  </div>
                </div>
                {/* Performance Metrics */}
                <div className="dashboard-grid grid-cols-3 mt-4">
                  <div className="dashboard-card">
                    <h6 className="mb-3">Assignment Performance</h6>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted small">Submitted on time</span>
                        <span className="small fw-semibold">85%</span>
                      </div>
                      <div className="progress" style={{ height: 6 }}>
                        <div className="progress-bar bg-success" style={{ width: '85%' }} />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted small">Late submissions</span>
                        <span className="small fw-semibold">10%</span>
                      </div>
                      <div className="progress" style={{ height: 6 }}>
                        <div className="progress-bar bg-warning" style={{ width: '10%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted small">Missing</span>
                        <span className="small fw-semibold">5%</span>
                      </div>
                      <div className="progress" style={{ height: 6 }}>
                        <div className="progress-bar bg-danger" style={{ width: '5%' }} />
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-card">
                    <h6 className="mb-3">Engagement Metrics</h6>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted small">Forum participation</span>
                        <span className="small fw-semibold">72%</span>
                      </div>
                      <div className="progress" style={{ height: 6 }}>
                        <div className="progress-bar bg-info" style={{ width: '72%' }} />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted small">Resource downloads</span>
                        <span className="small fw-semibold">91%</span>
                      </div>
                      <div className="progress" style={{ height: 6 }}>
                        <div className="progress-bar bg-primary" style={{ width: '91%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted small">Video views</span>
                        <span className="small fw-semibold">68%</span>
                      </div>
                      <div className="progress" style={{ height: 6 }}>
                        <div className="progress-bar bg-secondary" style={{ width: '68%' }} />
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-card">
                    <h6 className="mb-3">Top Performers</h6>
                    <div className="d-flex align-items-center mb-2">
                      <span className="badge bg-warning text-dark me-2">1</span>
                      <div className="flex-grow-1">
                        <div className="small fw-semibold">Sarah Johnson</div>
                        <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                          GPA: 3.9
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span className="badge bg-secondary text-white me-2">2</span>
                      <div className="flex-grow-1">
                        <div className="small fw-semibold">Michael Chen</div>
                        <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                          GPA: 3.8
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="badge bg-success bg-opacity-75 me-2">3</span>
                      <div className="flex-grow-1">
                        <div className="small fw-semibold">Emily Davis</div>
                        <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                          GPA: 3.7
                        </div>
                      </div>
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

export default CourseDetails;
