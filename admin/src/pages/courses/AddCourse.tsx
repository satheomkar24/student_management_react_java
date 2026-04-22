const AddCourse = () => {
  return (
    <main className="dashboard-content" id="main-content">
      <div className="container-fluid">
        {/* Page Header */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h3 fw-bold mb-2">Add New Course</h1>
              <p className="text-muted mb-0">Create a new course for the academic curriculum</p>
            </div>
            <div className="d-none d-md-flex gap-2">
              <button type="button" className="btn btn-outline-secondary">
                <i className="bi bi-question-circle me-2" />
                Help
              </button>
              <button type="button" className="btn btn-light">
                <i className="bi bi-arrow-left me-2" />
                Back to Courses
              </button>
            </div>
          </div>
        </div>
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
                        placeholder="e.g., CS101"
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
                        placeholder="e.g., Introduction to Computer Science"
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
                      placeholder="Enter detailed course description..."
                      defaultValue={''}
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
                        defaultValue={30}
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
                      placeholder="e.g., MATH101, CS100 (comma separated)"
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
                        <option value="spring2025">Spring 2025</option>
                        <option value="summer2025">Summer 2025</option>
                        <option value="fall2025">Fall 2025</option>
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
                      <input type="time" className="form-control" id="startTime" />
                      <div className="invalid-feedback">Please select a start time.</div>
                    </div>
                    <div>
                      <label htmlFor="endTime" className="form-label">
                        End Time <span className="text-danger">*</span>
                      </label>
                      <input type="time" className="form-control" id="endTime" />
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
                      placeholder="e.g., Building A, Room 101"
                    />
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
                  <div className="position-relative d-inline-block mb-3">
                    <img
                      src="https://picsum.photos/400/250?random=1"
                      alt="Course Thumbnail"
                      className="img-fluid rounded"
                      id="courseImagePreview"
                      style={{ maxHeight: 200, width: '100%', objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 end-0 p-2">
                      <span className="badge bg-primary">Preview</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="courseImage" className="form-label">
                      Upload Course Image
                    </label>
                    <input className="form-control" type="file" id="courseImage" accept="image/*" />
                    <small className="text-muted">JPG, PNG up to 5MB. Recommended: 800x500px</small>
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
                  <div className="mb-3">
                    <label className="form-label">Course Options</label>
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
              </div>
              {/* Fee Structure */}
              <div className="dashboard-card">
                <div className="dashboard-card-header">
                  <h5 className="dashboard-card-title">Fee Structure</h5>
                </div>
                <div className="dashboard-card-body">
                  <div className="dashboard-grid grid-cols-3 mb-3">
                    <div>
                      <label htmlFor="courseFee" className="form-label">
                        Course Fee ($)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="courseFee"
                        min={0}
                        step="0.01"
                        placeholder={'0.00'}
                      />
                    </div>
                    <div>
                      <label htmlFor="labFee" className="form-label">
                        Lab Fee ($)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="labFee"
                        min={0}
                        step="0.01"
                        placeholder={'0.00'}
                      />
                    </div>
                    <div>
                      <label htmlFor="materialFee" className="form-label">
                        Material Fee ($)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="materialFee"
                        min={0}
                        step="0.01"
                        placeholder={'0.00'}
                      />
                    </div>
                  </div>
                  <div className="border-top pt-3 mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="h6 mb-0">Total Course Fee:</span>
                      <span className="h5 mb-0 text-primary fw-bold" id="totalFee">
                        $0.00
                      </span>
                    </div>
                    <small className="text-muted">All fees are per semester</small>
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
                  Create Course
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  <i className="bi bi-x-lg me-2" />
                  Cancel
                </button>
                <button type="reset" className="btn btn-outline-warning">
                  <i className="bi bi-arrow-clockwise me-2" />
                  Reset Form
                </button>
                <button type="button" className="btn btn-outline-info">
                  <i className="bi bi-file-text me-2" />
                  Save as Draft
                </button>
              </div>
            </div>
          </div>
        </form>{' '}
      </div>
    </main>
  );
};

export default AddCourse;
