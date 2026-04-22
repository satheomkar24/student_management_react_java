const EditInstructor = () => {
  return (
    <main className="dashboard-content" id="main-content">
      <div className="container-fluid">
        {/* Page Header */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h3 font-bold">Edit Professor</h1>
              <p className="text-muted text-sm">Update faculty member information.</p>
            </div>
            <div className="d-flex gap-2">
              <a href="professor-profile.html" className="btn btn-outline-primary">
                <i className="bi bi-eye me-2" />
                View Profile
              </a>
              <a href="all-professors.html" className="btn btn-outline-secondary">
                <i className="bi bi-arrow-left me-2" />
                Back to Professors
              </a>
            </div>
          </div>
        </div>
        {/* Edit Professor Form */}
        <div className="dashboard-row">
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <div className="d-flex align-items-center">
                <img
                  src="https://ui-avatars.com/api/?name=Dr.+Sarah+Johnson&background=0d6efd&color=fff"
                  alt="Dr. Sarah Johnson"
                  className="rounded-circle me-3"
                  style={{ width: 48, height: 48 }}
                  loading="lazy"
                />
                <div>
                  <h5 className="dashboard-card-title mb-0">Dr. Sarah Johnson</h5>
                  <small className="text-muted">Employee ID: EMP001 • Computer Science</small>
                </div>
              </div>
            </div>
            <div className="dashboard-card-body">
              <form className="needs-validation">
                {/* Personal Information Section */}
                <div className="dashboard-grid grid-cols-1 mb-4">
                  <div>
                    <h6 className="text-primary fw-semibold mb-3">
                      <i className="bi bi-person-circle me-2" />
                      Personal Information
                    </h6>
                  </div>
                </div>
                <div className="dashboard-grid grid-cols-12 gap-3 mb-3">
                  <div className="col-span-2">
                    <label htmlFor="title" className="form-label">
                      Title <span className="text-danger">*</span>
                    </label>
                    <select className="form-select" id="title">
                      <option value="Dr.">Dr.</option>
                      <option value="Prof.">Prof.</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Mrs.">Mrs.</option>
                    </select>
                    <div className="invalid-feedback">Please select a title.</div>
                  </div>
                  <div className="col-span-5">
                    <label htmlFor="firstName" className="form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      defaultValue="Sarah"
                    />
                    <div className="invalid-feedback">Please provide a valid first name.</div>
                  </div>
                  <div className="col-span-5">
                    <label htmlFor="lastName" className="form-label">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      defaultValue="Johnson"
                    />
                    <div className="invalid-feedback">Please provide a valid last name.</div>
                  </div>
                </div>
                <div className="dashboard-grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      defaultValue="s.johnson@kiaalap.edu"
                    />
                    <div className="invalid-feedback">Please provide a valid email address.</div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      defaultValue="+1 (555) 123-4567"
                    />
                    <div className="invalid-feedback">Please provide a valid phone number.</div>
                  </div>
                </div>
                <div className="dashboard-grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="dateOfBirth" className="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="dateOfBirth"
                      defaultValue="1982-05-15"
                    />
                  </div>
                  <div>
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <select className="form-select" id="gender">
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>
                </div>
                <div className="dashboard-grid grid-cols-1 mb-4">
                  <div>
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      id="address"
                      rows={2}
                      defaultValue={'123 University Ave, College Town, CT 06037'}
                    />
                  </div>
                </div>
                {/* Academic Information Section */}
                <div className="dashboard-grid grid-cols-1 mb-4">
                  <div>
                    <h6 className="text-primary fw-semibold mb-3">
                      <i className="bi bi-mortarboard me-2" />
                      Academic Information
                    </h6>
                  </div>
                </div>
                <div className="dashboard-grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="employeeId" className="form-label">
                      Employee ID <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="employeeId"
                      defaultValue="EMP001"
                    />
                    <div className="form-text">Employee ID cannot be changed</div>
                  </div>
                  <div>
                    <label htmlFor="department" className="form-label">
                      Department <span className="text-danger">*</span>
                    </label>
                    <select className="form-select" id="department">
                      <option value="Computer Science">Computer Science</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Biology">Biology</option>
                      <option value="English Literature">English Literature</option>
                      <option value="History">History</option>
                      <option value="Economics">Economics</option>
                      <option value="Business Administration">Business Administration</option>
                      <option value="Engineering">Engineering</option>
                    </select>
                    <div className="invalid-feedback">Please select a department.</div>
                  </div>
                </div>
                <div className="dashboard-grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="position" className="form-label">
                      Position <span className="text-danger">*</span>
                    </label>
                    <select className="form-select" id="position">
                      <option value="Professor">Professor</option>
                      <option value="Associate Professor">Associate Professor</option>
                      <option value="Assistant Professor">Assistant Professor</option>
                      <option value="Lecturer">Lecturer</option>
                      <option value="Senior Lecturer">Senior Lecturer</option>
                      <option value="Visiting Professor">Visiting Professor</option>
                    </select>
                    <div className="invalid-feedback">Please select a position.</div>
                  </div>
                  <div>
                    <label htmlFor="employmentType" className="form-label">
                      Employment Type <span className="text-danger">*</span>
                    </label>
                    <select className="form-select" id="employmentType">
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Contract">Contract</option>
                      <option value="Adjunct">Adjunct</option>
                    </select>
                    <div className="invalid-feedback">Please select employment type.</div>
                  </div>
                </div>
                <div className="dashboard-grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="joiningDate" className="form-label">
                      Joining Date <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="joiningDate"
                      defaultValue="2018-08-15"
                    />
                    <div className="invalid-feedback">Please provide joining date.</div>
                  </div>
                  <div>
                    <label htmlFor="salary" className="form-label">
                      Monthly Salary
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input
                        type="number"
                        className="form-control"
                        id="salary"
                        defaultValue={8500.0}
                        step="0.01"
                      />
                    </div>
                  </div>
                </div>
                {/* Employment Status */}
                <div className="dashboard-grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <label htmlFor="status" className="form-label">
                      Employment Status
                    </label>
                    <select className="form-select" id="status">
                      <option value="Active">Active</option>
                      <option value="On Leave">On Leave</option>
                      <option value="Sabbatical">Sabbatical</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="officeHours" className="form-label">
                      Office Hours
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="officeHours"
                      defaultValue="Mon-Wed 2-4 PM, Fri 10-12 PM"
                    />
                  </div>
                </div>
                {/* Educational Background */}
                <div className="dashboard-grid grid-cols-1 mb-4">
                  <div>
                    <h6 className="text-primary fw-semibold mb-3">
                      <i className="bi bi-book me-2" />
                      Educational Background
                    </h6>
                  </div>
                </div>
                <div className="dashboard-grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="highestDegree" className="form-label">
                      Highest Degree <span className="text-danger">*</span>
                    </label>
                    <select className="form-select" id="highestDegree">
                      <option value="PhD">PhD</option>
                      <option value="Master's">Master's</option>
                      <option value="Bachelor's">Bachelor's</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="invalid-feedback">Please select highest degree.</div>
                  </div>
                  <div>
                    <label htmlFor="specialization" className="form-label">
                      Specialization/Field
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="specialization"
                      defaultValue="Artificial Intelligence & Machine Learning"
                    />
                  </div>
                </div>
                <div className="dashboard-grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="university" className="form-label">
                      University/Institution
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="university"
                      defaultValue="Stanford University"
                    />
                  </div>
                  <div>
                    <label htmlFor="graduationYear" className="form-label">
                      Graduation Year
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="graduationYear"
                      defaultValue={2015}
                      min={1950}
                      max={2024}
                    />
                  </div>
                </div>
                {/* Additional Information */}
                <div className="dashboard-grid grid-cols-1 mb-4">
                  <div>
                    <h6 className="text-primary fw-semibold mb-3">
                      <i className="bi bi-info-circle me-2" />
                      Additional Information
                    </h6>
                  </div>
                </div>
                <div className="dashboard-grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="experience" className="form-label">
                      Years of Experience
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="experience"
                      defaultValue={12}
                      min={0}
                    />
                  </div>
                  <div>
                    <label htmlFor="office" className="form-label">
                      Office Location
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="office"
                      defaultValue="Room 301, CS Building"
                    />
                  </div>
                </div>
                <div className="dashboard-grid grid-cols-2 gap-3 mb-3">
                  <div className="col-12">
                    <label htmlFor="subjects" className="form-label">
                      Subjects to Teach
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subjects"
                      defaultValue="Machine Learning, Data Structures, Algorithms, AI Ethics"
                    />
                    <div className="form-text">Separate multiple subjects with commas</div>
                  </div>
                </div>
                <div className="dashboard-grid grid-cols-2 gap-3 mb-3">
                  <div className="col-12">
                    <label htmlFor="bio" className="form-label">
                      Biography/About
                    </label>
                    <textarea
                      className="form-control"
                      id="bio"
                      rows={3}
                      defaultValue={
                        'Dr. Sarah Johnson is a leading researcher in artificial intelligence and machine learning. She has published over 50 peer-reviewed papers and holds 8 patents in AI technologies. Her current research focuses on ethical AI and explainable machine learning systems.'
                      }
                    />
                  </div>
                </div>
                {/* Research & Publications */}
                <div className="dashboard-grid grid-cols-1 mb-4">
                  <div>
                    <h6 className="text-primary fw-semibold mb-3">
                      <i className="bi bi-journal-text me-2" />
                      Research &amp; Publications
                    </h6>
                  </div>
                </div>
                <div className="dashboard-grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="researchInterests" className="form-label">
                      Research Interests
                    </label>
                    <textarea
                      className="form-control"
                      id="researchInterests"
                      rows={2}
                      defaultValue={
                        'Artificial Intelligence, Machine Learning, Natural Language Processing, Computer Vision, Ethical AI'
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="publications" className="form-label">
                      Notable Publications
                    </label>
                    <textarea
                      className="form-control"
                      id="publications"
                      rows={2}
                      defaultValue={
                        '"Ethical Considerations in AI Systems" (Nature AI, 2023), "Advanced ML Algorithms" (ACM Computing, 2022)'
                      }
                    />
                  </div>
                </div>
                {/* Profile Photo */}
                <div className="dashboard-grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <label htmlFor="profilePhoto" className="form-label">
                      Update Profile Photo
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="profilePhoto"
                      accept="image/*"
                    />
                    <div className="form-text">
                      Upload a new professional headshot (JPG, PNG, max 2MB)
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Current Photo</label>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://ui-avatars.com/api/?name=Dr.+Sarah+Johnson&background=0d6efd&color=fff"
                        alt="Current Photo"
                        className="rounded"
                        style={{ width: 80, height: 80 }}
                        loading="lazy"
                      />
                      <div className="ms-3">
                        <small className="text-muted">Last updated: March 2024</small>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Activity Log */}
                <div className="dashboard-grid grid-cols-1 mb-4">
                  <div>
                    <h6 className="text-secondary fw-semibold mb-3">
                      <i className="bi bi-clock-history me-2" />
                      Recent Activity
                    </h6>
                    <div className="alert alert-light">
                      <small className="text-muted">
                        <div className="d-flex justify-content-between">
                          <span>
                            <strong>Last Profile Update:</strong> December 15, 2024
                          </span>
                          <span>by Sarah Johnson</span>
                        </div>
                        <div className="d-flex justify-content-between mt-1">
                          <span>
                            <strong>Account Created:</strong> August 15, 2018
                          </span>
                          <span>
                            <strong>Last Login:</strong> December 24, 2024 at 9:30 AM
                          </span>
                        </div>
                      </small>
                    </div>
                  </div>
                </div>
                {/* Form Actions */}
                <div className="row">
                  <div className="col-12">
                    <hr className="my-4" />
                    <div className="d-flex gap-3">
                      <button type="submit" className="btn btn-primary">
                        <i className="bi bi-check-lg me-2" />
                        Update Professor
                      </button>
                      <button type="button" className="btn btn-outline-secondary">
                        <i className="bi bi-x-lg me-2" />
                        Cancel Changes
                      </button>
                      <button type="button" className="btn btn-outline-info">
                        <i className="bi bi-eye me-2" />
                        View Profile
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger ms-auto"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteConfirmModal"
                      >
                        <i className="bi bi-trash me-2" />
                        Delete Professor
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>{' '}
      </div>
    </main>
  );
};

export default EditInstructor;
