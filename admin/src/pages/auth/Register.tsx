import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      {/* START LOGIN AND REGISTER */}
      <section className="login_register_section">
        <div className="auth-container register">
          <div className="auth-card">
            <div className="auth-header">
              <div className="brand-logo">
                <i className="bi bi-mortarboard-fill" />
              </div>
              <h1 className="h3 mb-2 fw-bold">Create Account</h1>
              <p className="text-muted">Join the Kiaalap community today</p>
            </div>
            <form id="registerForm">
              <div className="dashboard-grid grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    aria-label="First Name"
                  />
                  <div className="invalid-feedback">Please enter your first name.</div>
                </div>
                <div>
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    aria-label="Last Name"
                  />
                  <div className="invalid-feedback">Please enter your last name.</div>
                </div>
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope" />
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="example@kiaalap.edu"
                    aria-label="Email Address"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="invalid-feedback">Please enter a valid email address.</div>
              </div>

              <div className="dashboard-grid grid-cols-2">
                <div>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-lock" />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Min 8 characters"
                      minLength={8}
                      aria-label="Password"
                      aria-describedby="passwordHelp"
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="togglePassword"
                      aria-label="Toggle password visibility"
                    >
                      <i className="bi bi-eye" />
                    </button>
                  </div>
                  <div className="invalid-feedback">Password must be at least 8 characters.</div>
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-lock-fill" />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Repeat password"
                      aria-label="Confirm Password"
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="toggleConfirmPassword"
                      aria-label="Toggle confirm password visibility"
                    >
                      <i className="bi bi-eye" />
                    </button>
                  </div>
                  <div className="invalid-feedback">Passwords do not match.</div>
                </div>
              </div>

              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-primary btn-lg" type="submit">
                  <i className="bi bi-person-plus me-2" />
                  Create Account
                </button>
              </div>

              <hr className="my-4" />
              <div className="text-center">
                <p>
                  Already have an account?
                  <Link to="/auth/login" className="text-decoration-none fw-bold">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/*- END CONTAINER */}
      </section>
      {/* END LOGIN AND REGISTER */}
    </>
  );
};

export default Register;
