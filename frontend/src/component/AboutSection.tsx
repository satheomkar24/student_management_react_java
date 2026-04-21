import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <>
      {/* START ABOUT US HOME ONE */}
      <section className="ab_one section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset={0}
            >
              <div className="ab_content">
                <h2>Create, Learn &amp; grow your skills from anywhere.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                  tempor incididunt ut labore et simply.
                </p>
              </div>
              <div className="abmv">
                <img src="assets/images/all-img/light.svg" alt="" />
                <h4>Discover the joy of lifelong learning</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut
                  labore.
                </p>
              </div>
              <div className="abmv">
                <img src="assets/images/all-img/target.svg" alt="" />
                <h4>Build a real community</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut
                  labore.
                </p>
              </div>
              <div className="cta_two">
                <a href="#" className="cta">
                  <span>Discover More</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5" />
                    <polyline points="8 1 12 5 8 9" />
                  </svg>
                </a>
              </div>
            </div>
            {/*- END COL */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="ab_img">
                <img src="assets/images/all-img/about1.jpg" className="img-fluid" alt="image" />
                {/* <div class="wc_year">
							<h3><span>6k+</span> <br />Happy Clients</h3>
						</div> */}
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END ABOUT US HOME ONE */}
      {/* START WHY CHOOSE US*/}
      <section className="marketing_content_area section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Why Choose Purdue</h4>
            <h1>Find the best features of Purdue.</h1>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset={0}
            >
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-school" />
                  <h2>
                    <Link to="/about">
                      Learn More <br />
                      Anywhere
                    </Link>
                  </h2>
                </div>
                <p>
                  The results with a friend who couldn’t believe it was written by an AI. is worth
                  every Yaley and then some.
                </p>
                <Link to="/about">
                  Read More <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-person-chalkboard" />
                  <h2>
                    <Link to="/about">
                      Expert <br />
                      Instructor
                    </Link>
                  </h2>
                </div>
                <p>
                  The results with a friend who couldn’t believe it was written by an AI. is worth
                  every Yaley and then some.
                </p>
                <Link to="/about">
                  Read More <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              data-wow-offset={0}
            >
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-people-group" />
                  <h2>
                    <Link to="/about">
                      Team <br />
                      Management
                    </Link>
                  </h2>
                </div>
                <p>
                  The results with a friend who couldn’t believe it was written by an AI. is worth
                  every Yaley and then some.
                </p>
                <Link to="/about">
                  Read More <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
              data-wow-offset={0}
            >
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-book" />
                  <h2>
                    <Link to="/about">
                      Course <br />
                      Planing
                    </Link>
                  </h2>
                </div>
                <p>
                  The results with a friend who couldn’t believe it was written by an AI. is worth
                  every Yaley and then some.
                </p>
                <Link to="/about">
                  Read More <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
              data-wow-offset={0}
            >
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-chalkboard-user" />
                  <h2>
                    <Link to="/about">
                      Teacher <br />
                      Monitoring
                    </Link>
                  </h2>
                </div>
                <p>
                  The results with a friend who couldn’t believe it was written by an AI. is worth
                  every Yaley and then some.
                </p>
                <Link to="/about">
                  Read More <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.6s"
              data-wow-offset={0}
            >
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-ticket" />
                  <h2>
                    <Link to="/about">
                      24/7 Strong <br />
                      Support
                    </Link>
                  </h2>
                </div>
                <p>
                  The results with a friend who couldn’t believe it was written by an AI. is worth
                  every Yaley and then some.
                </p>
                <Link to="/about">
                  Read More <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/* END CONTAINER */}
      </section>
      {/* END WHY CHOOSE US */}
      {/* START VIDEO */}
      <section
        className="vid_area va2"
        style={{
          backgroundImage: 'url(assets/images/banner/video.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 vp_top wow fadeInUDown"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="video-area2"></div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END VIDEO */}
      {/* START COUNTER */}
      <section className="count_area counter_feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single-counter count_one">
                <span className="ti-folder sc_one" />
                <h2 className="counter-num">134</h2>
                <p>Our Online Course</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single-counter count_two">
                <span className="ti-medall-alt sc_two" />
                <h2 className="counter-num">299</h2>
                <p>Academic Programs</p>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single-counter count_three">
                <span className="ti-id-badge sc_three" />
                <h2 className="counter-num">684</h2>
                <p>Certified Students</p>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single-counter count_four">
                <span className="ti-user sc_four" />
                <h2 className="counter-num">941</h2>
                <p>Enrolled Students</p>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END COUNTER */}
      {/* START TEAM*/}
      <section className="team_member section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Our Instructor</h4>
            <h1>Our Expert Instructors</h1>
          </div>
          <div className="row text-center">
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset={0}
            >
              <div className="our-team">
                <div className="team-content">
                  <h3 className="title">Stephen Cronin</h3>
                  <span className="post">Designer</span>
                  <div className="sth_det2">
                    <span className="ti-file">
                      {' '}
                      <u>5 Course</u>
                    </span>
                    <span className="ti-user">
                      {' '}
                      <u>12 Student</u>
                    </span>
                  </div>
                </div>
                <div className="team_img">
                  <img src="assets/images/team/1.jpg" alt="team-image" />
                  <ul className="social">
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
            </div>
            {/*- END COL */}
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="our-team">
                <div className="team_img">
                  <img src="assets/images/team/2.jpg" alt="team-image" />
                  <ul className="social">
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
                <div className="team-content">
                  <h3 className="title">Rachel Park</h3>
                  <span className="post">Developer</span>
                  <div className="sth_det2">
                    <span className="ti-file">
                      {' '}
                      <u>19 Course</u>
                    </span>
                    <span className="ti-user">
                      {' '}
                      <u>41 Student</u>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*- END COL */}
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              data-wow-offset={0}
            >
              <div className="our-team">
                <div className="team-content">
                  <h3 className="title">Dan Billson</h3>
                  <span className="post">Marketer</span>
                  <div className="sth_det2">
                    <span className="ti-file">
                      {' '}
                      <u>14 Course</u>
                    </span>
                    <span className="ti-user">
                      {' '}
                      <u>33 Student</u>
                    </span>
                  </div>
                </div>
                <div className="team_img">
                  <img src="assets/images/team/3.jpg" alt="team-image" />
                  <ul className="social">
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
            </div>
            {/*- END COL */}
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
              data-wow-offset={0}
            >
              <div className="our-team">
                <div className="team_img">
                  <img src="assets/images/team/4.jpg" alt="team-image" />
                  <ul className="social">
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
                <div className="team-content">
                  <h3 className="title">Gina Mellow</h3>
                  <span className="post">Co-founder</span>
                  <div className="sth_det2">
                    <span className="ti-file">
                      {' '}
                      <u>11 Course</u>
                    </span>
                    <span className="ti-user">
                      {' '}
                      <u>27 Student</u>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/* END CONTAINER */}
      </section>
      {/* END TEAM */}
      {/* START COMPANY PARTNER LOGO  */}
      <div className="partner-logo section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="partner_title">
                <h3>Trusted Company Arround The World! </h3>
              </div>
              <div className="partner">
                <a href="#">
                  <img src="assets/images/all-img/clients/1.png" alt="image" />
                </a>
                <a href="#">
                  <img src="assets/images/all-img/clients/2.png" alt="image" />
                </a>
                <a href="#">
                  <img src="assets/images/all-img/clients/3.png" alt="image" />
                </a>
                <a href="#">
                  <img src="assets/images/all-img/clients/4.png" alt="image" />
                </a>
                <a href="#">
                  <img src="assets/images/all-img/clients/5.png" alt="image" />
                </a>
                <a href="#">
                  <img src="assets/images/all-img/clients/2.png" alt="image" />
                </a>
                <a href="#">
                  <img src="assets/images/all-img/clients/1.png" alt="image" />
                </a>
                <a href="#">
                  <img src="assets/images/all-img/clients/3.png" alt="image" />
                </a>
                <a href="#">
                  <img src="assets/images/all-img/clients/4.png" alt="image" />
                </a>
              </div>
            </div>
            {/* END COL  */}
          </div>
          {/*END  ROW  */}
        </div>
        {/* END CONTAINER  */}
      </div>
      {/* END COMPANY PARTNER LOGO */}
      {/* START FAQ */}
      <section className="faq_area section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Asked Question</h4>
            <h1>Frequently Asked Question</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What does it take excellent author?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Great value and so easy to use and saves me so much time! I was shocked by how
                      much time and brain energy it saved me. Simple &amp; easy gotta love that.
                      Great value and so easy to use.
                    </div>
                  </div>
                </div>
                {/* END ACCORDION ITEM  */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Who will view my content?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Great value and so easy to use and saves me so much time! I was shocked by how
                      much time and brain energy it saved me. Simple &amp; easy gotta love that.
                      Great value and so easy to use.
                    </div>
                  </div>
                </div>
                {/* END ACCORDION ITEM  */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What does it take become an author?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Great value and so easy to use and saves me so much time! I was shocked by how
                      much time and brain energy it saved me. Simple &amp; easy gotta love that.
                      Great value and so easy to use.
                    </div>
                  </div>
                </div>
                {/* END ACCORDION ITEM  */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How to Change my Password easily?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Great value and so easy to use and saves me so much time! I was shocked by how
                      much time and brain energy it saved me. Simple &amp; easy gotta love that.
                      Great value and so easy to use.
                    </div>
                  </div>
                </div>
                {/* END ACCORDION ITEM  */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="true"
                      aria-controls="collapseFive"
                    >
                      How does it create content?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Great value and so easy to use and saves me so much time! I was shocked by how
                      much time and brain energy it saved me. Simple &amp; easy gotta love that.
                      Great value and so easy to use.
                    </div>
                  </div>
                </div>
                {/* END ACCORDION ITEM  */}
              </div>
            </div>
            {/* END COL  */}
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="pt_faq">
                <img src="assets/images/all-img/faq.png" className="img-fluid" alt="image" />
              </div>
            </div>
            {/* END COL  */}
          </div>
          {/*END  ROW  */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END FAQ */}
    </>
  );
};

export default AboutSection;
