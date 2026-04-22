const EditCourse = () => {
  return (
    <main className="dashboard-content" id="main-content">
      <div className="container-fluid">
        {/* Page Header */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h3 fw-bold mb-2">Edit Course</h1>
              <p className="text-muted mb-0">
                Modify course details for CS101 - Introduction to Computer Science
              </p>
            </div>
            <div className="d-none d-md-flex gap-2">
              <button type="button" className="btn btn-outline-secondary">
                <i className="bi bi-eye me-2" />
                Preview
              </button>
              <button type="button" className="btn btn-light">
                <i className="bi bi-info-circle me-2" />
                View Course Info
              </button>
            </div>
          </div>
        </div>
        {/* Edit Course Form */}
        <div className="dashboard-row">
          {/* Form */}
          <form className="needs-validation">
            <div className="dashboard-grid" style={{ gridTemplateColumns: '2fr 1fr', gap: 20 }}>
              <div>
                {/* Basic Information */}
                <div className="dashboard-card mb-3">
                  <div className="dashboard-card-header">
                    <h5 className="dashboard-card-title">Basic Information</h5>
                  </div>
                  <div className="dashboard-card-body">
                    <div className="dashboard-grid grid-cols-2 mb-3">
                      <div>
                        <label htmlFor="courseCode" className="form-label">
                          Course Code <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="courseCode"
                          defaultValue="CS101"
                        />
                        <div className="invalid-feedback">Please provide a valid course code.</div>
                      </div>
                      <div>
                        <label htmlFor="courseName" className="form-label">
                          Course Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="courseName"
                          defaultValue="Introduction to Computer Science"
                        />
                        <div className="invalid-feedback">Please provide a course name.</div>
                      </div>
                    </div>
                    <div className="dashboard-grid grid-cols-2 mb-3">
                      <div>
                        <label htmlFor="department" className="form-label">
                          Department <span className="text-danger">*</span>
                        </label>
                        <select className="form-select" id="department">
                          <option value="">Select Department</option>
                          <option value="cs">Computer Science</option>
                          <option value="math">Mathematics</option>
                          <option value="physics">Physics</option>
                          <option value="chemistry">Chemistry</option>
                          <option value="biology">Biology</option>
                          <option value="business">Business Administration</option>
                          <option value="engineering">Engineering</option>
                          <option value="english">English Literature</option>
                        </select>
                        <div className="invalid-feedback">Please select a department.</div>
                      </div>
                      <div>
                        <label htmlFor="professor" className="form-label">
                          Professor <span className="text-danger">*</span>
                        </label>
                        <select className="form-select" id="professor">
                          <option value="">Select Professor</option>
                          <option value={1}>Dr. Robert Smith</option>
                          <option value={2}>Dr. Emily Johnson</option>
                          <option value={3}>Prof. Michael Chen</option>
                          <option value={4}>Dr. Sarah Williams</option>
                          <option value={5}>Prof. David Brown</option>
                          <option value={6}>Dr. Jennifer Garcia</option>
                        </select>
                        <div className="invalid-feedback">Please select a professor.</div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="courseDescription" className="form-label">
                        Course Description
                      </label>
                      <textarea
                        className="form-control"
                        id="courseDescription"
                        rows={4}
                        defaultValue={
                          'This course provides a comprehensive introduction to computer science principles, programming fundamentals, and computational thinking. Students will learn basic programming concepts, data structures, and problem-solving techniques using modern programming languages.'
                        }
                      />
                    </div>
                    <div className="dashboard-grid grid-cols-3 mb-3">
                      <div>
                        <label htmlFor="credits" className="form-label">
                          Credits <span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="credits"
                          min={1}
                          max={6}
                          defaultValue={3}
                        />
                        <div className="invalid-feedback">Credits must be between 1 and 6.</div>
                      </div>
                      <div>
                        <label htmlFor="duration" className="form-label">
                          Duration (weeks) <span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="duration"
                          min={1}
                          max={52}
                          defaultValue={16}
                        />
                        <div className="invalid-feedback">
                          Duration must be between 1 and 52 weeks.
                        </div>
                      </div>
                      <div>
                        <label htmlFor="maxStudents" className="form-label">
                          Max Students
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="maxStudents"
                          min={1}
                          max={500}
                          defaultValue={45}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="prerequisites" className="form-label">
                        Prerequisites
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="prerequisites"
                        defaultValue="MATH101"
                      />
                      <small className="text-muted">
                        Enter prerequisite course codes separated by commas
                      </small>
                    </div>
                  </div>
                </div>
                {/* Schedule Information */}
                <div className="dashboard-card mb-3">
                  <div className="dashboard-card-header">
                    <h5 className="dashboard-card-title">Schedule Information</h5>
                  </div>
                  <div className="dashboard-card-body">
                    <div className="dashboard-grid grid-cols-2 mb-3">
                      <div>
                        <label htmlFor="semester" className="form-label">
                          Semester <span className="text-danger">*</span>
                        </label>
                        <select className="form-select" id="semester">
                          <option value="">Select Semester</option>
                          <option value="fall2025">Fall 2025</option>
                          <option value="spring2025">Spring 2025</option>
                          <option value="summer2025">Summer 2025</option>
                        </select>
                        <div className="invalid-feedback">Please select a semester.</div>
                      </div>
                      <div>
                        <label htmlFor="courseType" className="form-label">
                          Course Type <span className="text-danger">*</span>
                        </label>
                        <select className="form-select" id="courseType">
                          <option value="">Select Type</option>
                          <option value="core">Core Course</option>
                          <option value="elective">Elective</option>
                          <option value="lab">Laboratory</option>
                          <option value="seminar">Seminar</option>
                        </select>
                        <div className="invalid-feedback">Please select a course type.</div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Class Days <span className="text-danger">*</span>
                      </label>
                      <div className="d-flex flex-wrap gap-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="monday"
                            name="days"
                          />
                          <label className="form-check-label" htmlFor="monday">
                            Monday
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="tuesday"
                            name="days"
                          />
                          <label className="form-check-label" htmlFor="tuesday">
                            Tuesday
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="wednesday"
                            name="days"
                          />
                          <label className="form-check-label" htmlFor="wednesday">
                            Wednesday
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="thursday"
                            name="days"
                          />
                          <label className="form-check-label" htmlFor="thursday">
                            Thursday
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="friday"
                            name="days"
                          />
                          <label className="form-check-label" htmlFor="friday">
                            Friday
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-grid grid-cols-2 mb-3">
                      <div>
                        <label htmlFor="startTime" className="form-label">
                          Start Time <span className="text-danger">*</span>
                        </label>
                        <input
                          type="time"
                          className="form-control"
                          id="startTime"
                          defaultValue="10:00"
                        />
                        <div className="invalid-feedback">Please select a start time.</div>
                      </div>
                      <div>
                        <label htmlFor="endTime" className="form-label">
                          End Time <span className="text-danger">*</span>
                        </label>
                        <input
                          type="time"
                          className="form-control"
                          id="endTime"
                          defaultValue="11:30"
                        />
                        <div className="invalid-feedback">Please select an end time.</div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="classroom" className="form-label">
                        Classroom/Location
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="classroom"
                        defaultValue="Building A, Room 101"
                      />
                    </div>
                  </div>
                </div>
                {/* Student Enrollment */}
                <div className="dashboard-card mb-3">
                  <div className="dashboard-card-header">
                    <h5 className="dashboard-card-title">Current Enrollment</h5>
                  </div>
                  <div className="dashboard-card-body">
                    <div className="dashboard-grid grid-cols-2 mb-3">
                      <div>
                        <div className="d-flex justify-content-between mb-2">
                          <span>Enrolled Students</span>
                          <strong>42 / 45</strong>
                        </div>
                        <div className="progress" style={{ height: 10 }}>
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: '93%' }}
                            aria-valuenow={93}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="d-flex justify-content-between mb-2">
                          <span>Average Attendance</span>
                          <strong>89%</strong>
                        </div>
                        <div className="progress" style={{ height: 10 }}>
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: '89%' }}
                            aria-valuenow={89}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="alert alert-info" role="alert">
                      <i className="bi bi-info-circle me-2" />
                      <strong>Note:</strong> There are 3 pending enrollment requests for this
                      course. <a href="#">Review requests</a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* Course Image */}
                <div className="dashboard-card mb-3">
                  <div className="dashboard-card-header">
                    <h5 className="dashboard-card-title">Course Image</h5>
                  </div>
                  <div className="dashboard-card-body text-center">
                    <img
                      src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop"
                      alt="Course Thumbnail"
                      className="img-fluid rounded mb-3"
                      id="courseImagePreview"
                    />
                    <div className="mb-3">
                      <label htmlFor="courseImage" className="form-label">
                        Change Image
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="courseImage"
                        accept="image/*"
                      />
                      <small className="text-muted">Recommended size: 800x500px</small>
                    </div>
                  </div>
                </div>
                {/* Course Settings */}
                <div className="dashboard-card mb-3">
                  <div className="dashboard-card-header">
                    <h5 className="dashboard-card-title">Course Settings</h5>
                  </div>
                  <div className="dashboard-card-body">
                    <div className="mb-3">
                      <label htmlFor="courseStatus" className="form-label">
                        Status
                      </label>
                      <select className="form-select" id="courseStatus">
                        <option value="active">Active</option>
                        <option value="draft">Draft</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="enrollmentType" className="form-label">
                        Enrollment Type
                      </label>
                      <select className="form-select" id="enrollmentType">
                        <option value="open">Open Enrollment</option>
                        <option value="approval">Requires Approval</option>
                        <option value="closed">Closed</option>
                      </select>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" id="onlineAvailable" />
                      <label className="form-check-label" htmlFor="onlineAvailable">
                        Available Online
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" id="certificateOffered" />
                      <label className="form-check-label" htmlFor="certificateOffered">
                        Certificate Offered
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="recordedLectures" />
                      <label className="form-check-label" htmlFor="recordedLectures">
                        Recorded Lectures Available
                      </label>
                    </div>
                  </div>
                </div>
                {/* Fee Structure */}
                <div className="dashboard-card mb-3">
                  <div className="dashboard-card-header">
                    <h5 className="dashboard-card-title">Fee Structure</h5>
                  </div>
                  <div className="dashboard-card-body">
                    <div className="mb-3">
                      <label htmlFor="courseFee" className="form-label">
                        Course Fee ($)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="courseFee"
                        min={0}
                        step="0.01"
                        defaultValue={1200.0}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="labFee" className="form-label">
                        Lab Fee ($)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="labFee"
                        min={0}
                        step="0.01"
                        defaultValue={150.0}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="materialFee" className="form-label">
                        Material Fee ($)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="materialFee"
                        min={0}
                        step="0.01"
                        defaultValue={50.0}
                      />
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <strong>Total Fee:</strong>
                      <strong id="totalFee">$1,400.00</strong>
                    </div>
                  </div>
                </div>
                {/* Course History */}
                <div className="dashboard-card">
                  <div className="dashboard-card-header">
                    <h5 className="dashboard-card-title">Course History</h5>
                  </div>
                  <div className="dashboard-card-body">
                    <div className="small text-muted mb-2">
                      <i className="bi bi-clock-history me-1" /> Last modified: 3 days ago
                    </div>
                    <div className="small text-muted mb-2">
                      <i className="bi bi-person me-1" /> Modified by: Dr. Robert Smith
                    </div>
                    <div className="small text-muted mb-2">
                      <i className="bi bi-calendar me-1" /> Created: Sept 15, 2025
                    </div>
                    <div className="small text-muted">
                      <i className="bi bi-hash me-1" /> Course ID: #12345
                    </div>
                  </div>
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
                    Save Changes
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    <i className="bi bi-x-lg me-2" />
                    Cancel
                  </button>
                  <button type="reset" className="btn btn-outline-warning">
                    <i className="bi bi-arrow-clockwise me-2" />
                    Reset Form
                  </button>
                  <button type="button" className="btn btn-outline-danger">
                    <i className="bi bi-trash me-2" />
                    Delete Course
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>{' '}
      </div>
    </main>
  );
};

export default EditCourse;
