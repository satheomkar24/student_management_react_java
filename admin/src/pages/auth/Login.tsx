import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="login_register_section">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="brand-logo">
              <i className="bi bi-mortarboard-fill" />
            </div>
            <h1 className="h3 mb-2 fw-bold">Welcome Back!</h1>
            <p className="text-muted">Please login to your account</p>
          </div>
          <form id="loginForm">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Email Address
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-envelope" />
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="example@kiaalap.edu"
                  aria-label="Email Address"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="invalid-feedback">Please enter a valid email address.</div>
            </div>
            <div className="mb-3">
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
                  placeholder="Enter your password"
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
              <div className="invalid-feedback">Password is required.</div>
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn-primary btn-lg" type="submit">
                <i className="bi bi-box-arrow-in-right me-2" />
                Sign In
              </button>
            </div>
            <hr className="my-4" />
            <div className="text-center">
              <p className="mb-2">
                <a href="password-recovery.html" className="text-decoration-none">
                  Forgot your password?
                </a>
              </p>
              <p>
                Don't have an account?
                <Link to="/auth/register" className="text-decoration-none fw-bold">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
