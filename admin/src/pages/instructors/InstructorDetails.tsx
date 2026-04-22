const InstructorDetails = () => {
  return (
    <main className="dashboard-content" id="main-content">
      <div className="container-fluid">
        {/* Page Header */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h3 font-bold">Professor Profile</h1>
              <p className="text-muted text-sm">
                Comprehensive faculty member information and performance overview.
              </p>
            </div>
            <div className="d-flex gap-2">
              <a href="edit-professor.html" className="btn btn-primary">
                <i className="bi bi-pencil me-2" />
                Edit Profile
              </a>
              <a href="all-professors.html" className="btn btn-outline-secondary">
                <i className="bi bi-arrow-left me-2" />
                Back to Professors
              </a>
            </div>
          </div>
        </div>
        {/* Professor Profile Header */}
        <div className="dashboard-row">
          <div className="dashboard-card">
            <div className="dashboard-card-body">
              <div className="dashboard-grid grid-cols-12 gap-4">
                <div className="col-span-3 text-center">
                  <img
                    src="https://ui-avatars.com/api/?name=Dr.+Sarah+Johnson&background=0d6efd&color=fff&size=200"
                    alt="Dr. Sarah Johnson"
                    className="rounded-circle mb-3"
                    style={{ width: 150, height: 150 }}
                    loading="lazy"
                  />
                  <div className="mb-3">
                    <span className="badge bg-success mb-1">Active</span>
                    <br />
                    <small className="text-muted">Last seen: Today at 9:30 AM</small>
                  </div>
                </div>
                <div className="col-span-6">
                  <h2 className="h3 mb-1">Dr. Sarah Johnson</h2>
                  <p className="text-muted mb-2">Professor of Computer Science</p>
                  <div className="dashboard-grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <strong>Employee ID:</strong> EMP001
                      <br />
                      <strong>Department:</strong> Computer Science
                      <br />
                      <strong>Email:</strong> s.johnson@kiaalap.edu
                      <br />
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </div>
                    <div>
                      <strong>Office:</strong> Room 301, CS Building
                      <br />
                      <strong>Joining Date:</strong> August 15, 2018
                      <br />
                      <strong>Experience:</strong> 12 years
                      <br />
                      <strong>Employment:</strong> Full-Time
                    </div>
                  </div>
                  <div className="mb-3">
                    <strong>Office Hours:</strong> Mon-Wed 2-4 PM, Fri 10-12 PM
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-2">
                      <strong>Rating:</strong>
                    </span>
                    <div className="text-warning me-2">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                    <span className="text-muted">4.8/5.0 (124 reviews)</span>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="text-center">
                    <div className="d-flex justify-content-center gap-2 mb-3">
                      <button className="btn btn-outline-primary btn-sm">
                        <i className="bi bi-envelope" />
                      </button>
                      <button className="btn btn-outline-secondary btn-sm">
                        <i className="bi bi-telephone" />
                      </button>
                      <button className="btn btn-outline-info btn-sm">
                        <i className="bi bi-calendar" />
                      </button>
                    </div>
                    <div className="dashboard-grid grid-cols-3 gap-2 text-center mt-3">
                      <div className="col-4">
                        <div className="border-end">
                          <h4 className="mb-1 text-primary fw-bold">5</h4>
                          <small className="text-muted">Courses</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="border-end">
                          <h4 className="mb-1 text-success fw-bold">156</h4>
                          <small className="text-muted">Students</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div>
                          <h4 className="mb-1 text-info fw-bold">52</h4>
                          <small className="text-muted">Publications</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Professor Details Tabs */}
        <div className="dashboard-row">
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <ul className="nav nav-tabs dashboard-card-tabs" id="professorTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="overview-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#overview"
                    type="button"
                    role="tab"
                    aria-controls="overview"
                    aria-selected="true"
                  >
                    <i className="bi bi-info-circle me-2" />
                    Overview
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="courses-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#courses"
                    type="button"
                    role="tab"
                    aria-controls="courses"
                    aria-selected="false"
                  >
                    <i className="bi bi-book me-2" />
                    Courses
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="research-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#research"
                    type="button"
                    role="tab"
                    aria-controls="research"
                    aria-selected="false"
                  >
                    <i className="bi bi-journal-text me-2" />
                    Research
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="performance-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#performance"
                    type="button"
                    role="tab"
                    aria-controls="performance"
                    aria-selected="false"
                  >
                    <i className="bi bi-graph-up me-2" />
                    Performance
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="activity-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#activity"
                    type="button"
                    role="tab"
                    aria-controls="activity"
                    aria-selected="false"
                  >
                    <i className="bi bi-clock-history me-2" />
                    Activity
                  </button>
                </li>
              </ul>
            </div>
            <div className="dashboard-card-body">
              <div className="tab-content" id="professorTabContent">
                {/* Overview Tab */}
                <div
                  className="tab-pane fade show active"
                  id="overview"
                  role="tabpanel"
                  aria-labelledby="overview-tab"
                >
                  <div className="dashboard-grid grid-cols-12 gap-4">
                    <div className="col-span-8">
                      <h6 className="fw-semibold mb-3">Biography</h6>
                      <p className="mb-3">
                        Dr. Sarah Johnson is a distinguished professor and leading researcher in
                        artificial intelligence and machine learning. With over 12 years of academic
                        experience, she has authored 52 peer-reviewed publications and holds 8
                        patents in AI technologies.
                      </p>
                      <p className="mb-3">
                        Her current research focuses on <strong>ethical AI systems</strong> and{' '}
                        <strong>explainable machine learning</strong>, addressing critical
                        challenges in AI transparency and responsible development.
                      </p>
                      <p className="mb-3">
                        Prior to joining Kiaalap University, Dr. Johnson served as a Senior Research
                        Scientist at Stanford Research Institute, where she led groundbreaking
                        projects in natural language processing and computer vision. Her work has
                        been presented at premier conferences including NIPS, ICML, and AAAI.
                      </p>
                      <h6 className="fw-semibold mb-3 mt-4">Educational Background</h6>
                      <div className="timeline">
                        <div className="timeline-item">
                          <div className="timeline-marker" />
                          <div className="timeline-content">
                            <h6 className="mb-1">Ph.D. in Computer Science</h6>
                            <p className="text-muted mb-1">Stanford University • 2015</p>
                            <small className="text-muted">
                              Specialization: Artificial Intelligence &amp; Machine Learning
                            </small>
                          </div>
                        </div>
                        <div className="timeline-item">
                          <div className="timeline-marker" />
                          <div className="timeline-content">
                            <h6 className="mb-1">M.S. in Computer Science</h6>
                            <p className="text-muted mb-1">MIT • 2010</p>
                            <small className="text-muted">Specialization: Machine Learning</small>
                          </div>
                        </div>
                        <div className="timeline-item">
                          <div className="timeline-marker" />
                          <div className="timeline-content">
                            <h6 className="mb-1">B.S. in Computer Science</h6>
                            <p className="text-muted mb-1">UC Berkeley • 2008</p>
                            <small className="text-muted">Magna Cum Laude</small>
                          </div>
                        </div>
                      </div>
                      <h6 className="fw-semibold mb-3 mt-4">Research Interests</h6>
                      <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-primary bg-opacity-10 text-primary">
                          Artificial Intelligence
                        </span>
                        <span className="badge bg-primary bg-opacity-10 text-primary">
                          Machine Learning
                        </span>
                        <span className="badge bg-primary bg-opacity-10 text-primary">
                          Natural Language Processing
                        </span>
                        <span className="badge bg-primary bg-opacity-10 text-primary">
                          Computer Vision
                        </span>
                        <span className="badge bg-primary bg-opacity-10 text-primary">
                          Ethical AI
                        </span>
                        <span className="badge bg-primary bg-opacity-10 text-primary">
                          Deep Learning
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Stats Cards Row */}
                  <div className="dashboard-grid grid-cols-2 gap-4 mt-4">
                    <div className="dashboard-card">
                      <div className="dashboard-card-header">
                        <h6 className="dashboard-card-title mb-0">Quick Stats</h6>
                      </div>
                      <div className="dashboard-card-body">
                        <div className="dashboard-grid grid-cols-2 gap-3">
                          <div>
                            <div className="text-muted small">Experience</div>
                            <div className="fw-bold">12 years</div>
                          </div>
                          <div>
                            <div className="text-muted small">Publications</div>
                            <div className="fw-bold">52 papers</div>
                          </div>
                          <div>
                            <div className="text-muted small">Citations</div>
                            <div className="fw-bold">2,847</div>
                          </div>
                          <div>
                            <div className="text-muted small">H-Index</div>
                            <div className="fw-bold">28</div>
                          </div>
                          <div>
                            <div className="text-muted small">Grant Funding</div>
                            <div className="fw-bold">$2.3M</div>
                          </div>
                          <div>
                            <div className="text-muted small">Awards</div>
                            <div className="fw-bold">5</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-card">
                      <div className="dashboard-card-header">
                        <h6 className="dashboard-card-title mb-0">Contact Information</h6>
                      </div>
                      <div className="dashboard-card-body">
                        <div className="dashboard-grid grid-cols-1 gap-2">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-envelope me-2 text-primary" />
                            <a href="mailto:s.johnson@kiaalap.edu" className="text-sm">
                              s.johnson@kiaalap.edu
                            </a>
                          </div>
                          <div className="d-flex align-items-center">
                            <i className="bi bi-telephone me-2 text-primary" />
                            <a href="tel:+15551234567" className="text-sm">
                              +1 (555) 123-4567
                            </a>
                          </div>
                          <div className="d-flex align-items-center">
                            <i className="bi bi-geo-alt me-2 text-primary" />
                            <span className="text-sm">Room 301, CS Building</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <i className="bi bi-clock me-2 text-primary" />
                            <span className="text-sm">Mon-Wed 2-4 PM, Fri 10-12 PM</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <i className="bi bi-globe me-2 text-primary" />
                            <a href="#" className="text-sm">
                              Personal Website
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Courses Tab */}
                <div
                  className="tab-pane fade"
                  id="courses"
                  role="tabpanel"
                  aria-labelledby="courses-tab"
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="mb-1">Current Teaching Load</h5>
                      <p className="text-muted mb-0 text-sm">
                        Fall 2024 Semester • 156 Total Students
                      </p>
                    </div>
                    <button className="btn btn-sm btn-outline-primary">
                      <i className="bi bi-download me-1" />
                      Export Schedule
                    </button>
                  </div>
                  {/* Summary Cards Row */}
                  <div className="dashboard-grid grid-cols-3 gap-3 mb-4">
                    <div className="dashboard-card">
                      <div className="dashboard-card-body">
                        <div className="text-center">
                          <canvas id="courseDistributionChart" style={{ maxHeight: 150 }} />
                          <h6 className="mt-2 mb-0">Course Distribution</h6>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-card">
                      <div className="dashboard-card-body">
                        <h6 className="mb-3">Teaching Summary</h6>
                        <div className="dashboard-grid grid-cols-2 gap-2">
                          <div>
                            <div className="text-muted small">Active Courses</div>
                            <div className="fw-bold">4</div>
                          </div>
                          <div>
                            <div className="text-muted small">Office Hours</div>
                            <div className="fw-bold">12/week</div>
                          </div>
                          <div>
                            <div className="text-muted small">Undergraduate</div>
                            <div className="fw-bold">86</div>
                          </div>
                          <div>
                            <div className="text-muted small">Graduate</div>
                            <div className="fw-bold">70</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-card">
                      <div className="dashboard-card-body">
                        <h6 className="mb-3">Quick Actions</h6>
                        <div className="d-grid gap-2">
                          <button className="btn btn-sm btn-outline-primary text-start">
                            <i className="bi bi-calendar-plus me-2" />
                            Office Hours
                          </button>
                          <button className="btn btn-sm btn-outline-secondary text-start">
                            <i className="bi bi-file-earmark-text me-2" />
                            Syllabi
                          </button>
                          <button className="btn btn-sm btn-outline-info text-start">
                            <i className="bi bi-people me-2" />
                            Roster
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Course Cards */}
                  <h6 className="fw-semibold mb-3">Active Courses</h6>
                  <div className="dashboard-grid grid-cols-2 gap-3">
                    <div className="mb-3">
                      <div className="dashboard-card">
                        <div className="dashboard-card-body">
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <div>
                              <h6 className="mb-1 text-primary">CS 401 - Machine Learning</h6>
                              <small className="text-muted">
                                <i className="bi bi-clock me-1" />
                                Mon, Wed, Fri 10:00-11:00 AM
                              </small>
                              <br />
                              <small className="text-muted">
                                <i className="bi bi-geo-alt me-1" />
                                Room 205, CS Building
                              </small>
                            </div>
                            <span className="badge bg-success">Graduate Level</span>
                          </div>
                          <div className="dashboard-grid grid-cols-3 gap-2 text-center">
                            <div className="col-4">
                              <div className="fw-bold text-primary">45/50</div>
                              <small className="text-muted">Enrolled</small>
                            </div>
                            <div className="col-4">
                              <div className="fw-bold text-success">B+</div>
                              <small className="text-muted">Avg Grade</small>
                            </div>
                            <div className="col-4">
                              <div className="fw-bold text-info">94%</div>
                              <small className="text-muted">Completion</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="dashboard-card">
                        <div className="dashboard-card-body">
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <div>
                              <h6 className="mb-1 text-primary">CS 301 - Data Structures</h6>
                              <small className="text-muted">
                                <i className="bi bi-clock me-1" />
                                Tue, Thu 2:00-3:30 PM
                              </small>
                              <br />
                              <small className="text-muted">
                                <i className="bi bi-geo-alt me-1" />
                                Room 102, CS Building
                              </small>
                            </div>
                            <span className="badge bg-primary">Undergraduate</span>
                          </div>
                          <div className="dashboard-grid grid-cols-3 gap-2 text-center">
                            <div className="col-4">
                              <div className="fw-bold text-primary">38/40</div>
                              <small className="text-muted">Enrolled</small>
                            </div>
                            <div className="col-4">
                              <div className="fw-bold text-success">A-</div>
                              <small className="text-muted">Avg Grade</small>
                            </div>
                            <div className="col-4">
                              <div className="fw-bold text-info">97%</div>
                              <small className="text-muted">Completion</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="dashboard-card">
                        <div className="dashboard-card-body">
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <div>
                              <h6 className="mb-1 text-primary">CS 501 - AI Ethics</h6>
                              <small className="text-muted">
                                <i className="bi bi-clock me-1" />
                                Wed 6:00-9:00 PM
                              </small>
                              <br />
                              <small className="text-muted">
                                <i className="bi bi-geo-alt me-1" />
                                Seminar Room A
                              </small>
                            </div>
                            <span className="badge bg-warning text-dark">Graduate Seminar</span>
                          </div>
                          <div className="dashboard-grid grid-cols-3 gap-2 text-center">
                            <div className="col-4">
                              <div className="fw-bold text-primary">25/30</div>
                              <small className="text-muted">Enrolled</small>
                            </div>
                            <div className="col-4">
                              <div className="fw-bold text-success">A</div>
                              <small className="text-muted">Avg Grade</small>
                            </div>
                            <div className="col-4">
                              <div className="fw-bold text-success">100%</div>
                              <small className="text-muted">Completion</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="dashboard-card">
                        <div className="dashboard-card-body">
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <div>
                              <h6 className="mb-1 text-primary">
                                CS 101 - Introduction to Programming
                              </h6>
                              <small className="text-muted">
                                <i className="bi bi-clock me-1" />
                                Mon, Wed 1:00-2:30 PM
                              </small>
                              <br />
                              <small className="text-muted">
                                <i className="bi bi-geo-alt me-1" />
                                Lab 301, CS Building
                              </small>
                            </div>
                            <span className="badge bg-info">Introductory</span>
                          </div>
                          <div className="dashboard-grid grid-cols-3 gap-2 text-center">
                            <div className="col-4">
                              <div className="fw-bold text-primary">48/50</div>
                              <small className="text-muted">Enrolled</small>
                            </div>
                            <div className="col-4">
                              <div className="fw-bold text-success">B</div>
                              <small className="text-muted">Avg Grade</small>
                            </div>
                            <div className="col-4">
                              <div className="fw-bold text-info">92%</div>
                              <small className="text-muted">Completion</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h6 className="fw-semibold mb-3">Teaching History</h6>
                <div className="table-responsive">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Semester</th>
                        <th>Students</th>
                        <th>Avg Grade</th>
                        <th>Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>CS 401 - Machine Learning</td>
                        <td>Spring 2024</td>
                        <td>42</td>
                        <td>B+</td>
                        <td>4.8/5.0</td>
                      </tr>
                      <tr>
                        <td>CS 301 - Data Structures</td>
                        <td>Fall 2023</td>
                        <td>45</td>
                        <td>A-</td>
                        <td>4.9/5.0</td>
                      </tr>
                      <tr>
                        <td>CS 501 - AI Ethics</td>
                        <td>Spring 2023</td>
                        <td>28</td>
                        <td>A</td>
                        <td>4.7/5.0</td>
                      </tr>
                      <tr>
                        <td>CS 101 - Intro Programming</td>
                        <td>Fall 2022</td>
                        <td>50</td>
                        <td>B</td>
                        <td>4.6/5.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Research Tab */}
            <div
              className="tab-pane fade"
              id="research"
              role="tabpanel"
              aria-labelledby="research-tab"
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 className="mb-1">Research Portfolio</h5>
                  <p className="text-muted mb-0 text-sm">
                    AI, Machine Learning &amp; Ethics • 52 Publications • 2,847 Citations
                  </p>
                </div>
                <div className="btn-group btn-group-sm" role="group">
                  <button type="button" className="btn btn-outline-primary active">
                    Publications
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    Projects
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    Grants
                  </button>
                </div>
              </div>
              {/* Research Metrics Row */}
              <div className="dashboard-grid grid-cols-3 gap-3 mb-4">
                <div className="dashboard-card">
                  <div className="dashboard-card-body text-center">
                    <h4 className="text-primary mb-0">2,847</h4>
                    <small className="text-muted">Total Citations</small>
                    <div className="dashboard-grid grid-cols-2 gap-2 mt-2">
                      <div>
                        <div className="fw-bold">28</div>
                        <small className="text-muted">H-Index</small>
                      </div>
                      <div>
                        <div className="fw-bold">52</div>
                        <small className="text-muted">Papers</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-card">
                  <div className="dashboard-card-body">
                    <h6 className="mb-2">Active Grants</h6>
                    <div className="small">
                      <div className="d-flex justify-content-between mb-1">
                        <span>NSF</span>
                        <strong>$850K</strong>
                      </div>
                      <div className="d-flex justify-content-between mb-1">
                        <span>DARPA</span>
                        <strong>$650K</strong>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Industry</span>
                        <strong>$450K</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-card">
                  <div className="dashboard-card-body">
                    <h6 className="mb-2">Research Areas</h6>
                    <div className="d-flex flex-wrap gap-1">
                      <span className="badge bg-primary bg-opacity-10 text-primary small">
                        AI Ethics
                      </span>
                      <span className="badge bg-info bg-opacity-10 text-info small">
                        Machine Learning
                      </span>
                      <span className="badge bg-success bg-opacity-10 text-success small">NLP</span>
                      <span className="badge bg-warning bg-opacity-10 text-warning small">XAI</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Publications Grid */}
              <h6 className="fw-semibold mb-3">Recent Publications (2022-2024)</h6>
              <div className="dashboard-grid grid-cols-3 gap-3 mb-4">
                <div className="publication-item">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h6 className="mb-0 text-primary">"Ethical AI Systems"</h6>
                    <span className="badge bg-success">2023</span>
                  </div>
                  <p className="text-muted mb-1 small">Nature AI</p>
                  <p className="text-sm mb-2">
                    Framework for responsible AI development addressing ethical challenges.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-1">
                      <span className="badge bg-info bg-opacity-10 text-info small">AI Ethics</span>
                    </div>
                    <small className="text-muted">
                      <i className="bi bi-quote" /> 47
                    </small>
                  </div>
                </div>
                <div className="publication-item">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h6 className="mb-0 text-primary">"ML Algorithms for NLP"</h6>
                    <span className="badge bg-primary">2022</span>
                  </div>
                  <p className="text-muted mb-1 small">ACM Computing Surveys</p>
                  <p className="text-sm mb-2">
                    Survey of state-of-the-art ML algorithms for language processing.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-1">
                      <span className="badge bg-info bg-opacity-10 text-info small">NLP</span>
                    </div>
                    <small className="text-muted">
                      <i className="bi bi-quote" /> 89
                    </small>
                  </div>
                </div>
                <div className="publication-item">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h6 className="mb-0 text-primary">"Explainable AI"</h6>
                    <span className="badge bg-primary">2022</span>
                  </div>
                  <p className="text-muted mb-1 small">AAAI Conference</p>
                  <p className="text-sm mb-2">
                    Novel approaches for interpretable and transparent AI decisions.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-1">
                      <span className="badge bg-info bg-opacity-10 text-info small">XAI</span>
                    </div>
                    <small className="text-muted">
                      <i className="bi bi-quote" /> 156
                    </small>
                  </div>
                </div>
                <div className="publication-item">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h6 className="mb-0 text-primary">"Deep Learning Security"</h6>
                    <span className="badge bg-warning text-dark">2024</span>
                  </div>
                  <p className="text-muted mb-1 small">IEEE Security &amp; Privacy</p>
                  <p className="text-sm mb-2">
                    Adversarial attacks and defense mechanisms in deep neural networks.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-1">
                      <span className="badge bg-info bg-opacity-10 text-info small">Security</span>
                    </div>
                    <small className="text-muted">
                      <i className="bi bi-quote" /> 23
                    </small>
                  </div>
                </div>
              </div>
              {/* Active Research Projects */}
              <h6 className="fw-semibold mb-3">Active Research Projects</h6>
              <div className="dashboard-grid grid-cols-2 gap-3">
                <div className="research-project-item">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h6 className="mb-1">Ethical AI Framework Development</h6>
                      <p className="text-sm text-muted mb-0">
                        NSF Grant #12345 • $850,000 • 2023-2026
                      </p>
                    </div>
                    <span className="badge bg-success">Active</span>
                  </div>
                  <p className="text-sm">
                    Developing comprehensive frameworks for ethical AI development in healthcare.
                  </p>
                  <div className="progress mt-2" style={{ height: 6 }}>
                    <div className="progress-bar bg-success" style={{ width: '35%' }} />
                  </div>
                </div>
                <div className="research-project-item">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h6 className="mb-1">Explainable ML Systems</h6>
                      <p className="text-sm text-muted mb-0">NIH Grant • $1,200,000 • 2024-2027</p>
                    </div>
                    <span className="badge bg-warning">Pending</span>
                  </div>
                  <p className="text-sm">
                    Creating interpretable ML models for medical diagnosis with human-readable
                    explanations.
                  </p>
                  <div className="progress mt-2" style={{ height: 6 }}>
                    <div className="progress-bar bg-warning" style={{ width: '15%' }} />
                  </div>
                </div>
                <div className="research-project-item">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h6 className="mb-1">ML Security Research</h6>
                      <p className="text-sm text-muted mb-0">DARPA Grant • $650,000 • 2023-2025</p>
                    </div>
                    <span className="badge bg-success">Active</span>
                  </div>
                  <p className="text-sm">
                    Developing robust defenses against adversarial attacks in deep learning systems.
                  </p>
                  <div className="progress mt-2" style={{ height: 6 }}>
                    <div className="progress-bar bg-success" style={{ width: '60%' }} />
                  </div>
                </div>
                <div className="research-project-item">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h6 className="mb-1">Applied AI Solutions</h6>
                      <p className="text-sm text-muted mb-0">
                        Industry Partnership • $450,000 • 2024-2026
                      </p>
                    </div>
                    <span className="badge bg-info">Planning</span>
                  </div>
                  <p className="text-sm">
                    Collaborative research on practical AI applications for enterprise automation.
                  </p>
                  <div className="progress mt-2" style={{ height: 6 }}>
                    <div className="progress-bar bg-info" style={{ width: '10%' }} />
                  </div>
                </div>
              </div>
            </div>
            {/* Performance Tab */}
            <div
              className="tab-pane fade"
              id="performance"
              role="tabpanel"
              aria-labelledby="performance-tab"
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 className="mb-1">Teaching Performance Analytics</h5>
                  <p className="text-muted mb-0 text-sm">
                    8 Years of Data • 124 Student Reviews • 4.8/5.0 Overall Rating
                  </p>
                </div>
              </div>
              {/* Performance Charts Row */}
              <div className="dashboard-grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h6 className="fw-semibold mb-3">Teaching Performance Trends</h6>
                  <div
                    className="chart-container"
                    style={{
                      height: 350,
                      position: 'relative',
                      background: '#f8f9fa',
                      borderRadius: 8,
                      padding: 20,
                    }}
                  >
                    <canvas id="performanceChart" />
                  </div>
                </div>
                <div>
                  <h6 className="fw-semibold mb-3">Course Rating Distribution</h6>
                  <div
                    className="chart-container"
                    style={{
                      height: 350,
                      position: 'relative',
                      background: '#f8f9fa',
                      borderRadius: 8,
                      padding: 20,
                    }}
                  >
                    <canvas id="ratingDistributionChart" />
                  </div>
                </div>
              </div>
              {/* Student Evaluation Metrics */}
              <h6 className="fw-semibold mb-3">Student Evaluation Metrics</h6>
              <p className="text-muted mb-3 text-sm">
                Based on 124 student reviews from the past 2 academic years
              </p>
              <div className="dashboard-grid grid-cols-4 gap-3 mb-4">
                <div>
                  <div className="performance-metric">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>Course Organization</span>
                      <span className="fw-semibold">4.9/5.0</span>
                    </div>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-success" style={{ width: '98%' }} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="performance-metric">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>Teaching Clarity</span>
                      <span className="fw-semibold">4.8/5.0</span>
                    </div>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-success" style={{ width: '96%' }} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="performance-metric">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>Accessibility</span>
                      <span className="fw-semibold">4.7/5.0</span>
                    </div>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-info" style={{ width: '94%' }} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="performance-metric">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>Assignment Quality</span>
                      <span className="fw-semibold">4.6/5.0</span>
                    </div>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-primary" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Performance Sidebar Cards */}
          <div className="dashboard-grid grid-cols-2 gap-4 mt-4">
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h6 className="dashboard-card-title mb-0">Performance Summary</h6>
              </div>
              <div className="dashboard-card-body">
                <div className="performance-score">
                  <div className="score-circle">
                    <h3 className="text-success">4.8</h3>
                    <small>Overall Rating</small>
                  </div>
                  <div className="score-details text-center">
                    <div className="score-item">
                      <span>Excellent</span>
                      <strong className="d-block">124 reviews</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h6 className="dashboard-card-title mb-0">Recent Recognition</h6>
              </div>
              <div className="dashboard-card-body">
                <div className="award-item mb-2">
                  <i className="bi bi-trophy text-warning me-2" />
                  <div>
                    <div className="fw-semibold small">Teacher of the Year</div>
                    <small className="text-muted">2023</small>
                  </div>
                </div>
                <div className="award-item mb-2">
                  <i className="bi bi-award text-primary me-2" />
                  <div>
                    <div className="fw-semibold small">Research Excellence</div>
                    <small className="text-muted">2022</small>
                  </div>
                </div>
                <div className="award-item">
                  <i className="bi bi-star text-info me-2" />
                  <div>
                    <div className="fw-semibold small">Innovation Award</div>
                    <small className="text-muted">2021</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Activity Tab */}
        <div className="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="activity-tab">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="mb-1">Faculty Activity Timeline</h5>
              <p className="text-muted mb-0 text-sm">
                Recent achievements, publications, and academic activities
              </p>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-sm btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-filter me-1" />
                Filter
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item active" href="#">
                    All Activities
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Publications
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Teaching
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Conferences
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Activity Summary Cards */}
          <div className="dashboard-grid grid-cols-4 gap-3 mb-4">
            <div className="dashboard-card">
              <div className="dashboard-card-body text-center">
                <i
                  className="bi bi-journal-plus text-success mb-2"
                  style={{ fontSize: '1.5rem' }}
                />
                <div className="fw-bold">3</div>
                <small className="text-muted">Publications This Year</small>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-body text-center">
                <i
                  className="bi bi-calendar-event text-warning mb-2"
                  style={{ fontSize: '1.5rem' }}
                />
                <div className="fw-bold">5</div>
                <small className="text-muted">Keynote Speeches</small>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-body text-center">
                <i className="bi bi-cash-coin text-info mb-2" style={{ fontSize: '1.5rem' }} />
                <div className="fw-bold">$2.1M</div>
                <small className="text-muted">Grants Received</small>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-body text-center">
                <i className="bi bi-people text-primary mb-2" style={{ fontSize: '1.5rem' }} />
                <div className="fw-bold">6</div>
                <small className="text-muted">PhD Students</small>
              </div>
            </div>
          </div>
          {/* Activity Timeline */}
          <h6 className="fw-semibold mb-3">Recent Activities</h6>
          <div className="dashboard-grid grid-cols-2 gap-4">
            <div>
              <div className="activity-timeline">
                <div className="activity-item border-start border-3 border-success ps-4 pb-4 mb-4">
                  <div className="d-flex align-items-start">
                    <div
                      className="activity-icon bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: 40,
                        height: 40,
                        marginTop: 2,
                        border: '2px solid #198754',
                      }}
                    >
                      <i
                        className="bi bi-book-half"
                        style={{
                          color: '#198754',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="mb-0 fw-semibold">Published New Research Paper</h6>
                        <small className="text-muted">Jan 15, 2025</small>
                      </div>
                      <p className="mb-1 text-muted">
                        "Ethical AI Systems" accepted for publication in Nature AI journal
                      </p>
                      <div className="d-flex gap-2">
                        <span className="badge bg-success bg-opacity-10 text-success">
                          Publication
                        </span>
                        <span className="badge bg-info bg-opacity-10 text-info">High Impact</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="activity-item border-start border-3 border-primary ps-4 pb-4 mb-4">
                  <div className="d-flex align-items-start">
                    <div
                      className="activity-icon bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: 40,
                        height: 40,
                        marginTop: 2,
                        border: '2px solid #0d6efd',
                      }}
                    >
                      <i
                        className="bi bi-people"
                        style={{
                          color: '#0d6efd',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="mb-0 fw-semibold">New Course Enrollment</h6>
                        <small className="text-muted">Jan 12, 2025</small>
                      </div>
                      <p className="mb-1 text-muted">
                        3 new students enrolled in AI Ethics graduate seminar
                      </p>
                      <div className="d-flex gap-2">
                        <span className="badge bg-primary bg-opacity-10 text-primary">
                          Teaching
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="activity-item border-start border-3 border-warning ps-4 pb-4 mb-4">
                  <div className="d-flex align-items-start">
                    <div
                      className="activity-icon bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: 40,
                        height: 40,
                        marginTop: 2,
                        border: '2px solid #ffc107',
                      }}
                    >
                      <i
                        className="bi bi-calendar"
                        style={{
                          color: '#856404',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="mb-0 fw-semibold">Keynote Presentation</h6>
                        <small className="text-muted">Jan 8, 2025</small>
                      </div>
                      <p className="mb-1 text-muted">
                        Delivered keynote address at AI Ethics Summit 2024 in San Francisco
                      </p>
                      <div className="d-flex gap-2">
                        <span className="badge bg-warning bg-opacity-10 text-warning">
                          Conference
                        </span>
                        <span className="badge bg-secondary bg-opacity-10 text-secondary">
                          Keynote
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="activity-item border-start border-3 border-info ps-4 pb-4 mb-4">
                  <div className="d-flex align-items-start">
                    <div
                      className="activity-icon bg-info bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: 40,
                        height: 40,
                        marginTop: 2,
                        border: '2px solid #0dcaf0',
                      }}
                    >
                      <i
                        className="bi bi-cash"
                        style={{
                          color: '#055160',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="mb-0 fw-semibold">Grant Funding Received</h6>
                        <small className="text-muted">Jan 3, 2025</small>
                      </div>
                      <p className="mb-1 text-muted">
                        NSF approved $850,000 funding for ethical AI framework research
                      </p>
                      <div className="d-flex gap-2">
                        <span className="badge bg-info bg-opacity-10 text-info">Grant</span>
                        <span className="badge bg-success bg-opacity-10 text-success">$850K</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="activity-item border-start border-3 border-secondary ps-4 pb-4 mb-4">
                  <div className="d-flex align-items-start">
                    <div
                      className="activity-icon bg-secondary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: 40,
                        height: 40,
                        marginTop: 2,
                        border: '2px solid #6c757d',
                      }}
                    >
                      <i
                        className="bi bi-file-text"
                        style={{
                          color: '#495057',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="mb-0 fw-semibold">Course Materials Updated</h6>
                        <small className="text-muted">Dec 28, 2024</small>
                      </div>
                      <p className="mb-1 text-muted">
                        Machine Learning course syllabus revised for Spring 2025 semester
                      </p>
                      <div className="d-flex gap-2">
                        <span className="badge bg-secondary bg-opacity-10 text-secondary">
                          Curriculum
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="activity-item border-start border-3 border-success ps-4 pb-2">
                  <div className="d-flex align-items-start">
                    <div
                      className="activity-icon bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: 40,
                        height: 40,
                        marginTop: 2,
                        border: '2px solid #198754',
                      }}
                    >
                      <i
                        className="bi bi-mortarboard"
                        style={{
                          color: '#198754',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="mb-0 fw-semibold">New PhD Mentorship</h6>
                        <small className="text-muted">Dec 20, 2024</small>
                      </div>
                      <p className="mb-1 text-muted">
                        Started mentoring 2 new PhD students specializing in AI research
                      </p>
                      <div className="d-flex gap-2">
                        <span className="badge bg-success bg-opacity-10 text-success">
                          Mentorship
                        </span>
                        <span className="badge bg-primary bg-opacity-10 text-primary">
                          PhD Students
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="activity-timeline">
                {/* Additional timeline items would go here in the second column */}
                <div className="activity-item border-start border-3 border-info ps-4 pb-4 mb-4">
                  <div className="d-flex align-items-start">
                    <div
                      className="activity-icon bg-info bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: 40,
                        height: 40,
                        marginTop: 2,
                        border: '2px solid #0dcaf0',
                      }}
                    >
                      <i
                        className="bi bi-graph-up"
                        style={{
                          color: '#0dcaf0',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="mb-0 fw-semibold">Research Milestone</h6>
                        <small className="text-muted">Dec 15, 2024</small>
                      </div>
                      <p className="mb-1 text-muted">
                        Reached 2,847 total citations across all publications
                      </p>
                      <div className="d-flex gap-2">
                        <span className="badge bg-info bg-opacity-10 text-info">Achievement</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="activity-item border-start border-3 border-primary ps-4 pb-4 mb-4">
                  <div className="d-flex align-items-start">
                    <div
                      className="activity-icon bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: 40,
                        height: 40,
                        marginTop: 2,
                        border: '2px solid #0d6efd',
                      }}
                    >
                      <i
                        className="bi bi-award"
                        style={{
                          color: '#0d6efd',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="mb-0 fw-semibold">Grant Approved</h6>
                        <small className="text-muted">Dec 10, 2024</small>
                      </div>
                      <p className="mb-1 text-muted">
                        NSF Grant for Ethical AI Framework research approved
                      </p>
                      <div className="d-flex gap-2">
                        <span className="badge bg-primary bg-opacity-10 text-primary">Funding</span>
                        <span className="badge bg-success bg-opacity-10 text-success">$850K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InstructorDetails;
