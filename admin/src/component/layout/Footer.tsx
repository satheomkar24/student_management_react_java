import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer">
              <Link to="/">
                <img src="assets/images/all-img/logo.png" alt="" />
              </Link>
              <p>
                immediately shared the results with a friend who couldn’t believe it was written by
                an AI. is worth every Yaley and then some. Describe my business along with my
                business name.
              </p>
            </div>
            <div className="foot_social">
              <ul>
                <li>
                  <a href="#" className="top_f_facebook">
                    <i className="fa-brands fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="top_f_twitter">
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="top_f_instagram">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" className="top_f_linkedin">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*- END COL */}
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Courses</h4>
              <ul>
                <li>
                  <a href="#">Creative Writing</a>
                </li>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">SEO Business</a>
                </li>
                <li>
                  <a href="#">Social Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
                <li>
                  <a href="#">Website Development</a>
                </li>
              </ul>
            </div>
          </div>
          {/*- END COL */}
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Knowledge Base</a>
                </li>
                <li>
                  <a href="#">Affiliate Program</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Market API</a>
                </li>
                <li>
                  <a href="#">Support team</a>
                </li>
              </ul>
            </div>
          </div>
          {/*- END COL */}
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Contact Info</h4>
              <div className="sf_contact">
                <span className="ti-mobile" />
                <h3>Phone number</h3>
                <p>+88 457 845 695</p>
              </div>
              <div className="sf_contact">
                <span className="ti-email" />
                <h3>Email Address</h3>
                <p>example@yourmail.com</p>
              </div>
              <div className="sf_contact">
                <span className="ti-map" />
                <h3>Office Address</h3>
                <p>California, USA</p>
              </div>
            </div>
          </div>
          {/*- END COL */}
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Download App</h4>
              <p>Download our app from app store and goole play store.</p>
              <a href="#">
                <img src="assets/images/all-img/google-play.jpg" className="foot_img" alt="" />
              </a>
              <a href="#">
                <img src="assets/images/all-img/app-store.jpg" className="foot_img" alt="" />
              </a>
            </div>
          </div>
          {/*- END COL */}
        </div>
        {/*- END ROW */}
        <div className="row fc">
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footer_copyright">
              <p>© 2025. All Rights</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footer_menu">
              <ul>
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
          {/* END COL */}
        </div>
      </div>
      {/*- END CONTAINER */}
    </div>
  );
};

export default Footer;
