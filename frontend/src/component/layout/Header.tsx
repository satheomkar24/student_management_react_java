import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="top_header_banner">
        {/* START LOGO WITH CONTACT */}
        <section className="logo-contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="single-top-contact">
                  <i className="ti-mobile" />
                  <h4>
                    <Link to="/tel:+4857548854826">+ 485 7548 8546</Link>
                  </h4>
                </div>
              </div>
              {/*- END COL */}
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="single-top-contact">
                  <i className="ti-email" />
                  <h4>
                    <Link to="/mailto:example@gmail.com">example@mail.com</Link>
                  </h4>
                </div>
              </div>
              {/*- END COL */}
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="single-top-contact">
                  <i className="ti-alarm-clock" />
                  <h4>Mon to sat Open: 9am - 6pm</h4>
                </div>
              </div>
              {/*- END COL */}
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="top_social_profile">
                  <ul>
                    <li>
                      <Link to="/#" className="top_f_facebook">
                        <i className="fa-brands fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/#" className="top_f_twitter">
                        <i className="fa-brands fa-square-x-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/#" className="top_f_instagram">
                        <i className="fa-brands fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/#" className="top_f_linkedin">
                        <i className="fa-brands fa-linkedin-in" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </section>
        {/* END LOGO WITH CONTACT */}
        {/* START NAVBAR */}
        <div id="navigation" className="navbar-light bg-faded site-navigation">
          <div className="container">
            <div className="row">
              <div className="col-20 align-self-center">
                <div className="site-logo">
                  <Link to="/">
                    <img src="assets/images/all-img/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              {/*- END Col */}
              <div className="col-60 d-flex">
                <nav id="main-menu">
                  <ul>
                    <li>
                      <Link to="/course">Course</Link>
                    </li>
                    <li>
                      <Link to="/team">Instructor</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*- END Col */}
              <div className="col-30 d-none d-xl-block text-end align-self-center">
                <div className="call_to_action">
                  <Link className="btn_two" to="/auth/login">
                    Login
                  </Link>
                </div>
                {/*- END SOCIAL PROFILE */}
              </div>
              {/*- END Col */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </div>
        {/* END NAVBAR */}
      </div>
      {/* END  TOP HEADER CLASS */}
    </>
  );
};

export default Header;
