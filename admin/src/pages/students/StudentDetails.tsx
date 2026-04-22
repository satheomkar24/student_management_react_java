const StudentDetails = () => {
  return (
    <main className="dashboard-content" id="main-content">
      <div className="container-fluid">
        {/* Profile Header */}
        <div className="dashboard-row">
          <div className="dashboard-grid grid-cols-1">
            <div className="dashboard-card">
              <div className="dashboard-card-body">
                <div className="row align-items-center">
                  <div className="col-md-auto text-center text-md-start mb-3 mb-md-0 pe-md-3">
                    <img
                      src="https://ui-avatars.com/api/?name=Alex+Johnson&background=6366f1&color=fff&size=120"
                      alt="Alex Johnson"
                      className="rounded-circle"
                      width={120}
                      height={120}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md ms-md-2">
                    <h3 className="mb-1">Alex Johnson</h3>
                    <p className="text-muted mb-2">Computer Science Department</p>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-primary">
                        <i className="bi bi-hash me-1" />
                        STU2024001
                      </span>
                      <span className="badge bg-success">
                        <i className="bi bi-check-circle me-1" />
                        Active
                      </span>
                      <span className="badge bg-info text-dark">
                        <i className="bi bi-calendar me-1" />
                        3rd Year
                      </span>
                      <span className="badge bg-warning text-dark">
                        <i className="bi bi-trophy me-1" />
                        Honor Roll
                      </span>
                    </div>
                  </div>
                  <div className="col-md-auto mt-3 mt-md-0 ms-md-3">
                    <div className="btn-group" role="group">
                      <a href="edit-student.html" className="btn btn-outline-primary">
                        <i className="bi bi-pencil me-2" />
                        Edit Profile
                      </a>
                      <button type="button" className="btn btn-outline-secondary">
                        <i className="bi bi-download me-2" />
                        Download Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Quick Stats */}
        <div className="dashboard-row">
          <div className="dashboard-grid grid-cols-4">
            <div className="dashboard-card">
              <div className="dashboard-card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div
                      className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center"
                      style={{ width: 56, height: 56 }}
                    >
                      <i className="bi bi-book text-primary fs-4" />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="text-muted mb-1">Enrolled Courses</h6>
                    <h4 className="mb-0">6</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div
                      className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center"
                      style={{ width: 56, height: 56 }}
                    >
                      <i className="bi bi-graph-up text-success fs-4" />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="text-muted mb-1">GPA</h6>
                    <h4 className="mb-0">3.85</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div
                      className="rounded-circle bg-warning bg-opacity-10 d-flex align-items-center justify-content-center"
                      style={{ width: 56, height: 56 }}
                    >
                      <i className="bi bi-clock-history text-warning fs-4" />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="text-muted mb-1">Attendance</h6>
                    <h4 className="mb-0">92%</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div
                      className="rounded-circle bg-info bg-opacity-10 d-flex align-items-center justify-content-center"
                      style={{ width: 56, height: 56 }}
                    >
                      <i className="bi bi-award text-info fs-4" />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="text-muted mb-1">Credits Earned</h6>
                    <h4 className="mb-0">72/120</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Profile Details Tabs */}
        <div className="dashboard-row">
          <div className="dashboard-grid grid-cols-1">
            <div className="dashboard-card">
              <div className="dashboard-card-body">
                {/* Tab Navigation */}
                <ul className="nav nav-tabs mb-4" id="profileTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="overview-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#overview"
                      type="button"
                      role="tab"
                    >
                      <i className="bi bi-person me-2" />
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
                    >
                      <i className="bi bi-book me-2" />
                      Courses
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="grades-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#grades"
                      type="button"
                      role="tab"
                    >
                      <i className="bi bi-clipboard-check me-2" />
                      Grades
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="attendance-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#attendance"
                      type="button"
                      role="tab"
                    >
                      <i className="bi bi-calendar-check me-2" />
                      Attendance
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="activities-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#activities"
                      type="button"
                      role="tab"
                    >
                      <i className="bi bi-lightning me-2" />
                      Activities
                    </button>
                  </li>
                </ul>
                {/* Tab Content */}
                <div className="tab-content" id="profileTabContent">
                  {/* Overview Tab */}
                  <div className="tab-pane fade show active" id="overview" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-6">
                        <h5 className="mb-3">Personal Information</h5>
                        <table className="table table-borderless">
                          <tbody>
                            <tr>
                              <td className="text-muted">Full Name:</td>
                              <td>Alex Johnson</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Student ID:</td>
                              <td>STU2024001</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Date of Birth:</td>
                              <td>March 15, 2004</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Gender:</td>
                              <td>Male</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Email:</td>
                              <td>
                                <a href="mailto:alex.johnson@university.edu">
                                  alex.johnson@university.edu
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-muted">Phone:</td>
                              <td>+1 234-567-8900</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Address:</td>
                              <td>
                                123 University Avenue, Building A, Room 205
                                <br />
                                New York, NY 10001
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-lg-6">
                        <h5 className="mb-3">Academic Information</h5>
                        <table className="table table-borderless">
                          <tbody>
                            <tr>
                              <td className="text-muted">Department:</td>
                              <td>Computer Science</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Program:</td>
                              <td>Bachelor of Computer Science</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Year:</td>
                              <td>3rd Year</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Enrollment Date:</td>
                              <td>September 1, 2021</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Expected Graduation:</td>
                              <td>June 2026</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Academic Advisor:</td>
                              <td>Dr. Sarah Williams</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Status:</td>
                              <td>
                                <span className="badge bg-success">Active</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <div className="row">
                      <div className="col-12">
                        <h5 className="mb-3">Emergency Contact</h5>
                        <table className="table table-borderless">
                          <tbody>
                            <tr>
                              <td className="text-muted" width={200}>
                                Contact Name:
                              </td>
                              <td>Robert Johnson (Father)</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Relationship:</td>
                              <td>Parent</td>
                            </tr>
                            <tr>
                              <td className="text-muted">Phone:</td>
                              <td>+1 234-567-8901</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* Courses Tab */}
                  <div className="tab-pane fade" id="courses" role="tabpanel">
                    <h5 className="mb-3">Current Semester Courses</h5>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Course Code</th>
                            <th>Course Name</th>
                            <th>Instructor</th>
                            <th>Credits</th>
                            <th>Schedule</th>
                            <th>Room</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>CS301</td>
                            <td>Data Structures &amp; Algorithms</td>
                            <td>Prof. Michael Chen</td>
                            <td>4</td>
                            <td>Mon, Wed 10:00-11:30</td>
                            <td>Room 201</td>
                          </tr>
                          <tr>
                            <td>CS302</td>
                            <td>Database Management Systems</td>
                            <td>Dr. Emily Davis</td>
                            <td>3</td>
                            <td>Tue, Thu 14:00-15:30</td>
                            <td>Room 305</td>
                          </tr>
                          <tr>
                            <td>CS303</td>
                            <td>Web Development</td>
                            <td>Prof. James Wilson</td>
                            <td>3</td>
                            <td>Mon, Wed 14:00-15:30</td>
                            <td>Lab 102</td>
                          </tr>
                          <tr>
                            <td>CS304</td>
                            <td>Operating Systems</td>
                            <td>Dr. Robert Brown</td>
                            <td>4</td>
                            <td>Tue, Thu 10:00-11:30</td>
                            <td>Room 401</td>
                          </tr>
                          <tr>
                            <td>MATH201</td>
                            <td>Discrete Mathematics</td>
                            <td>Prof. Linda Martinez</td>
                            <td>3</td>
                            <td>Fri 09:00-12:00</td>
                            <td>Room 150</td>
                          </tr>
                          <tr>
                            <td>ENG201</td>
                            <td>Technical Writing</td>
                            <td>Dr. Susan Taylor</td>
                            <td>2</td>
                            <td>Wed 16:00-18:00</td>
                            <td>Room 220</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* Grades Tab */}
                  <div className="tab-pane fade" id="grades" role="tabpanel">
                    <h5 className="mb-3">Academic Performance</h5>
                    <div className="row mb-4">
                      <div className="col-md-4">
                        <div className="alert alert-info">
                          <h6>Current Semester GPA</h6>
                          <h3 className="mb-0">3.85</h3>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="alert alert-success">
                          <h6>Cumulative GPA</h6>
                          <h3 className="mb-0">3.78</h3>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="alert alert-warning">
                          <h6>Class Rank</h6>
                          <h3 className="mb-0">15/250</h3>
                        </div>
                      </div>
                    </div>
                    <h6 className="mb-3">Recent Grades</h6>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Course</th>
                            <th>Semester</th>
                            <th>Grade</th>
                            <th>Credits</th>
                            <th>Points</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>CS201 - Programming Fundamentals</td>
                            <td>Fall 2023</td>
                            <td>
                              <span className="badge bg-success">A</span>
                            </td>
                            <td>4</td>
                            <td>16.0</td>
                          </tr>
                          <tr>
                            <td>CS202 - Computer Networks</td>
                            <td>Fall 2023</td>
                            <td>
                              <span className="badge bg-success">A-</span>
                            </td>
                            <td>3</td>
                            <td>11.1</td>
                          </tr>
                          <tr>
                            <td>MATH101 - Calculus I</td>
                            <td>Fall 2023</td>
                            <td>
                              <span className="badge bg-primary">B+</span>
                            </td>
                            <td>3</td>
                            <td>9.9</td>
                          </tr>
                          <tr>
                            <td>CS203 - Software Engineering</td>
                            <td>Spring 2024</td>
                            <td>
                              <span className="badge bg-success">A</span>
                            </td>
                            <td>4</td>
                            <td>16.0</td>
                          </tr>
                          <tr>
                            <td>PHY101 - Physics I</td>
                            <td>Spring 2024</td>
                            <td>
                              <span className="badge bg-primary">B</span>
                            </td>
                            <td>3</td>
                            <td>9.0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* Attendance Tab */}
                  <div className="tab-pane fade" id="attendance" role="tabpanel">
                    <h5 className="mb-3">Attendance Record</h5>
                    <div className="row mb-4">
                      <div className="col-md-3">
                        <div className="card text-center">
                          <div className="card-body">
                            <h5 className="card-title">Total Classes</h5>
                            <h3 className="text-primary">240</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card text-center">
                          <div className="card-body">
                            <h5 className="card-title">Present</h5>
                            <h3 className="text-success">221</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card text-center">
                          <div className="card-body">
                            <h5 className="card-title">Absent</h5>
                            <h3 className="text-danger">19</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card text-center">
                          <div className="card-body">
                            <h5 className="card-title">Percentage</h5>
                            <h3 className="text-info">92%</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="mb-3">Monthly Attendance</h6>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Month</th>
                            <th>Total Days</th>
                            <th>Present</th>
                            <th>Absent</th>
                            <th>Percentage</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>September 2024</td>
                            <td>22</td>
                            <td>20</td>
                            <td>2</td>
                            <td>
                              <span className="badge bg-success">91%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>October 2024</td>
                            <td>23</td>
                            <td>22</td>
                            <td>1</td>
                            <td>
                              <span className="badge bg-success">96%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>November 2024</td>
                            <td>21</td>
                            <td>19</td>
                            <td>2</td>
                            <td>
                              <span className="badge bg-success">90%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>December 2024</td>
                            <td>15</td>
                            <td>14</td>
                            <td>1</td>
                            <td>
                              <span className="badge bg-success">93%</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* Activities Tab */}
                  <div className="tab-pane fade" id="activities" role="tabpanel">
                    <h5 className="mb-3">Extra-Curricular Activities</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <h6>Clubs &amp; Organizations</h6>
                        <ul className="list-group mb-3">
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Computer Science Club
                            <span className="badge bg-primary rounded-pill">President</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Robotics Team
                            <span className="badge bg-secondary rounded-pill">Member</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Debate Society
                            <span className="badge bg-secondary rounded-pill">Member</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h6>Achievements</h6>
                        <ul className="list-group">
                          <li className="list-group-item">
                            <i className="bi bi-trophy text-warning me-2" />
                            Dean's List - Fall 2023
                          </li>
                          <li className="list-group-item">
                            <i className="bi bi-award text-primary me-2" />
                            Hackathon Winner - March 2024
                          </li>
                          <li className="list-group-item">
                            <i className="bi bi-star text-success me-2" />
                            Academic Excellence Award
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <h6>Recent Activities</h6>
                    <div className="timeline">
                      <div className="alert alert-light">
                        <strong>December 2024:</strong> Participated in International Coding
                        Competition
                      </div>
                      <div className="alert alert-light">
                        <strong>November 2024:</strong> Organized Tech Talk on AI and Machine
                        Learning
                      </div>
                      <div className="alert alert-light">
                        <strong>October 2024:</strong> Volunteered at Campus Open Day
                      </div>
                      <div className="alert alert-light">
                        <strong>September 2024:</strong> Joined University Basketball Team
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

export default StudentDetails;
