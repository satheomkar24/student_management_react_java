import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      {/* START LOGIN AND REGISTER */}
      <section className="login_register section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-xs-12">
              <div className="register">
                <h4 className="login_register_title">Create a new account:</h4>
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
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    className=" form-control requiredField input-label"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    className="form-control requiredField input-label"
                    name="email"
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
                    Signup Now
                  </button>
                </div>
                <p>
                  Already have an account? <Link to="/auth/login">Login</Link>
                </p>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END LOGIN AND REGISTER */}
    </>
  );
};

export default Register;
