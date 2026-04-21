import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="login_register section-padding ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-xs-12">
            <div className="login">
              <h4 className="login_register_title">Already a member? Sign in:</h4>
              <div className="form-group">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  id="contact-name"
                  className=" form-control requiredField input-label"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  id="contact-email"
                  className="form-control requiredField input-label"
                  name="password"
                />
              </div>
              <div className="form-group col-lg-12">
                <button className="btn_one" type="submit" name="submit">
                  Login
                </button>
              </div>
              <p>
                Don't have an account? <Link to="/auth/register">Register Now</Link>
              </p>
            </div>
          </div>
          {/*- END COL */}
        </div>
        {/*- END ROW */}
      </div>
      {/*- END CONTAINER */}
    </section>
  );
};

export default Login;
