const AddInstructor = () => {
  return (
    <main className="dashboard-content" id="main-content">
      <div className="container-fluid">
        {/* Page Header */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h3 font-bold">Add New Professor</h1>
              <p className="text-muted text-sm">
                Register a new faculty member to your institution.
              </p>
            </div>
            <div>
              <a href="all-professors.html" className="btn btn-outline-secondary">
                <i className="bi bi-arrow-left me-2" />
                Back to Professors
              </a>
            </div>
          </div>
        </div>
        {/* Add Professor Form */}
        <div className="dashboard-row">
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <h5 className="dashboard-card-title mb-0">Professor Registration</h5>
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
                      <option value="">Choose...</option>
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
                    <input type="text" className="form-control" id="firstName" />
                    <div className="invalid-feedback">Please provide a valid first name.</div>
                  </div>
                  <div className="col-span-5">
                    <label htmlFor="lastName" className="form-label">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" id="lastName" />
                    <div className="invalid-feedback">Please provide a valid last name.</div>
                  </div>
                </div>
                <div className="dashboard-grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input type="email" className="form-control" id="email" />
                    <div className="invalid-feedback">Please provide a valid email address.</div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input type="tel" className="form-control" id="phone" />
                    <div className="invalid-feedback">Please provide a valid phone number.</div>
                  </div>
                </div>
                <div className="dashboard-grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="dateOfBirth" className="form-label">
                      Date of Birth
                    </label>
                    <input type="date" className="form-control" id="dateOfBirth" />
                  </div>
                  <div>
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <select className="form-select" id="gender">
                      <option value="">Choose...</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
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
                      placeholder="Enter full address"
                      defaultValue={''}
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
                      placeholder="e.g., EMP001"
                    />
                    <div className="invalid-feedback">Please provide an employee ID.</div>
                  </div>
                  <div>
                    <label htmlFor="department" className="form-label">
                      Department <span className="text-danger">*</span>
                    </label>
                    <select className="form-select" id="department">
                      <option value="">Choose Department...</option>
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
                      <option value="">Choose Position...</option>
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
                      <option value="">Choose Type...</option>
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
                    <input type="date" className="form-control" id="joiningDate" />
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
                        placeholder={'0.00'}
                        step="0.01"
                      />
                    </div>
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
                      <option value="">Choose Degree...</option>
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
                      placeholder="e.g., Machine Learning"
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
                      placeholder="Name of university"
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
                      min={1950}
                      max={2024}
                      placeholder="YYYY"
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
                      min={0}
                      placeholder="Years"
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
                      placeholder="e.g., Room 301, Building A"
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
                      placeholder="e.g., Data Structures, Algorithms, Machine Learning"
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
                      placeholder="Brief description about the professor's background and expertise"
                      defaultValue={''}
                    />
                  </div>
                </div>
                {/* Profile Photo */}
                <div className="dashboard-grid grid-cols-1 mb-4">
                  <div>
                    <label htmlFor="profilePhoto" className="form-label">
                      Profile Photo
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="profilePhoto"
                      accept="image/*"
                    />
                    <div className="form-text">
                      Upload a professional headshot (JPG, PNG, max 2MB)
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
                        Save Professor
                      </button>
                      <button type="button" className="btn btn-outline-secondary">
                        <i className="bi bi-x-lg me-2" />
                        Cancel
                      </button>
                      <button type="reset" className="btn btn-outline-warning">
                        <i className="bi bi-arrow-clockwise me-2" />
                        Reset Form
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

export default AddInstructor;
