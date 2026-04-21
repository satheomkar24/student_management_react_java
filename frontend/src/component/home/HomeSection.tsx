import { Link } from 'react-router-dom';
import Newsletter from '../reusables/Newsletter';

const HomeSection = () => {
  return (
    <>
      {/* START TOP HEADER CLASS */}
      <div className="top_header_banner">
        {/* START HOME */}
        <section id="home" className="home_bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="home_content">
                  <h1>Purdue is the best choice for everyone!</h1>
                  <p>
                    It is a long established fact that reader will be distracted readable content of
                    a page when.
                  </p>
                </div>
                <div className="home_btn">
                  <Link to="/course" className="cta">
                    <span>Explore Courses</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </Link>
                </div>
              </div>
              {/* END COL*/}
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="home_me_img">
                  <img src="assets/images/all-img/home-image.png" className="img-fluid" alt="" />
                  <div className="home_ps">
                    <img src="assets/images/icon/user2.svg" alt="" />
                    <h2>7500+</h2>
                    <span>Active student</span>
                  </div>
                  <div className="home_ps2">
                    <img src="assets/images/icon/file2.svg" alt="" />
                    <h2>4500+</h2>
                    <span>Online Course</span>
                  </div>
                </div>
              </div>
              {/* END COL*/}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </section>
        {/* END  HOME */}
      </div>
      {/* END  TOP HEADER CLASS */}

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
      {/* START ABOUT US HOME ONE */}
      <section className="ab_one section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="ab_img">
                <img src="assets/images/all-img/about1.png" className="img-fluid" alt="image" />
                <div className="wc_year">
                  <h3>
                    <span>6k+</span> <br />
                    Happy Clients
                  </h3>
                </div>
              </div>
            </div>
            {/*- END COL */}
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
                <i className="fa-regular fa-lightbulb" />
                <h4>Discover the joy of lifelong learning</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut
                  labore.
                </p>
              </div>
              <div className="abmv">
                <i className="fa-solid fa-satellite-dish" />
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
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END ABOUT US HOME ONE */}
      {/* START TOP PROMO FEATURES */}
      <section className="tp_feature section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h4>Start Learning </h4>
            <h1>Build Better skills, faster From Today.</h1>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
              data-wow-offset={0}
            >
              <div className="single_tp">
                <h3>Award Wining</h3>
                <i className="fa-solid fa-medal" />
                <p>Lorem ipsum dolor sit amet consectetur notted adipisicing elit.</p>
                <Link to="/about" className="cta">
                  <span>Learn More</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5" />
                    <polyline points="8 1 12 5 8 9" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="single_tp st_one">
                <h3>Quality Education</h3>
                <i className="fa-solid fa-book-journal-whills" />
                <p>Lorem ipsum dolor sit amet consectetur notted adipisicing elit. </p>
                <Link to="/about" className="cta">
                  <span>Learn More</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5" />
                    <polyline points="8 1 12 5 8 9" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              data-wow-offset={0}
            >
              <div className="single_tp st_two">
                <h3>Expert Teachers</h3>
                <i className="fa-solid fa-user-graduate" />
                <p>Lorem ipsum dolor sit amet consectetur notted adipisicing elit.</p>
                <Link to="/about" className="cta">
                  <span>Learn More</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5" />
                    <polyline points="8 1 12 5 8 9" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
              data-wow-offset={0}
            >
              <div className="single_tp st_three">
                <h3>Life Time Support</h3>
                <i className="fa-solid fa-headset" />
                <p>Lorem ipsum dolor sit amet consectetur notted adipisicing elit.</p>
                <Link to="/about" className="cta">
                  <span>Learn More</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5" />
                    <polyline points="8 1 12 5 8 9" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/* END CONTAINER */}
      </section>
      {/* END TOP PROMO FEATURES */}
      {/* START TOPIC*/}
      <section className="topic_content_p2 section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Start Learning </h4>
            <h1>Popular Categories From Today.</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_one">
                <img src="assets/images/icon/ct1.svg" alt="" />
                <h2>
                  <a href="#">IT &amp; Software</a>
                </h2>
                <span>71 Courses</span>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_two">
                <img src="assets/images/icon/ct2.svg" alt="" />
                <h2>
                  <a href="#">Digital Program</a>
                </h2>
                <span>59 Courses</span>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_three">
                <img src="assets/images/icon/ct3.svg" alt="" />
                <h2>
                  <a href="#">Finance Marketing</a>
                </h2>
                <span>68 Courses</span>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_four">
                <img src="assets/images/icon/ct4.svg" alt="" />
                <h2>
                  <a href="#">Modern Physics</a>
                </h2>
                <span>83 Courses</span>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_five">
                <img src="assets/images/icon/ct5.svg" alt="" />
                <h2>
                  <a href="#">Music Production</a>
                </h2>
                <span>37 Courses</span>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_six">
                <img src="assets/images/icon/ct6.svg" alt="" />
                <h2>
                  <a href="#">Website Design</a>
                </h2>
                <span>51 Courses</span>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_seven">
                <img src="assets/images/icon/ct6.svg" alt="" />
                <h2>
                  <a href="#">UI/UX Design</a>
                </h2>
                <span>38 Courses</span>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_eight">
                <img src="assets/images/icon/ct6.svg" alt="" />
                <h2>
                  <a href="#">Health &amp; Fitness</a>
                </h2>
                <span>43 Courses</span>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-12 text-center">
              <div className="cc_btn">
                <a href="#" className="cta">
                  <span>View All category</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5" />
                    <polyline points="8 1 12 5 8 9" />
                  </svg>
                </a>
              </div>
            </div>
            {/*END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/* END CONTAINER */}
      </section>
      {/* END TOPIC */}
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
      {/*START COURSE */}
      <div className="best-course section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Popular Courses</h4>
            <h1>Choose Our Top Courses</h1>
          </div>
          <div className="course-list row wow fadeIn">
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="course-item d-flex">
                <div className="course-inner">
                  <div className="course-img">
                    <img src="assets/images/course/c1.png" alt="course" />
                    <div className="course-price">$150</div>
                  </div>
                  <div className="course-content">
                    <div className="ccategory">
                      <a href="#">Data Science</a>
                    </div>
                    <h3>
                      <a href="#">Professional Ceramic Moulding for Beginners</a>
                    </h3>
                    <div className="crating">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <span>5.0 / 28 Rating</span>
                    </div>
                    <div className="cmeta">
                      <span>
                        <svg fill="none" viewBox="0 0 20 20">
                          <path
                            stroke="#2c7aff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M14.376 6.25H3.126a.625.625 0 00-.626.625v8.75c0 .345.28.625.625.625h11.25c.346 0 .626-.28.626-.625v-8.75a.625.625 0 00-.625-.625z"
                          />
                          <path
                            stroke="#2c7aff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M5 3.75h11.875a.625.625 0 01.625.625v9.375"
                          />
                        </svg>
                        25 Lessons
                      </span>
                      <span className="cmtime">
                        <svg fill="none" viewBox="0 0 20 20">
                          <path
                            stroke="#2c7aff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M10 5.625V10h4.375"
                          />
                          <path
                            stroke="#2c7aff"
                            strokeMiterlimit={10}
                            strokeWidth="1.5"
                            d="M10 16.875a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75z"
                          />
                          <path
                            stroke="#2c7aff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15.303 2.045l2.652 2.652M2.045 4.697l2.652-2.652"
                          />
                        </svg>
                        8 Hours
                      </span>
                    </div>
                  </div>
                </div>
                <div className="course-hover align-self-center">
                  <div className="chover_content">
                    <div className="ccategory">
                      <a href="#">Data Science</a>
                    </div>
                    <h3>
                      <a href="#">Professional Ceramic Moulding for Beginners</a>
                    </h3>
                    <div className="hcourse-price">$150.00</div>
                    <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.</p>
                    <div className="hcmeta">
                      <span>
                        <img src="assets/images/all-img/avator.png" alt="img" />
                        <a href="#">Theme Ocean</a>
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                        5.0 (2k)
                      </span>
                    </div>
                    <div className="text-center">
                      <a href="#" className="cta">
                        <span>Enroll Now</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                          <path d="M1,5 L11,5" />
                          <polyline points="8 1 12 5 8 9" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End course-item */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="course-item d-flex">
                <div className="course-inner">
                  <div className="course-img">
                    <img src="assets/images/course/c2.png" alt="course" />
                    <div className="course-price">$120</div>
                  </div>
                  <div className="course-content">
                    <div className="ccategory">
                      <a href="#">Management</a>
                    </div>
                    <h3>
                      <a href="#">Ultimate Photoshop Training: From Beginner</a>
                    </h3>
                    <div className="crating">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <span>5.0 / 28 Rating</span>
                    </div>
                    <div className="cmeta">
                      <span>
                        <svg fill="none" viewBox="0 0 20 20">
                          <path
                            stroke="#2c7aff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M14.376 6.25H3.126a.625.625 0 00-.626.625v8.75c0 .345.28.625.625.625h11.25c.346 0 .626-.28.626-.625v-8.75a.625.625 0 00-.625-.625z"
                          />
                          <path
                            stroke="#2c7aff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M5 3.75h11.875a.625.625 0 01.625.625v9.375"
                          />
                        </svg>
                        25 Lessons
                      </span>
                      <span className="cmtime">
                        <svg fill="none" viewBox="0 0 20 20">
                          <path
                            stroke="#2c7aff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M10 5.625V10h4.375"
                          />
                          <path
                            stroke="#2c7aff"
                            strokeMiterlimit={10}
                            strokeWidth="1.5"
                            d="M10 16.875a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75z"
                          />
                          <path
                            stroke="#2c7aff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15.303 2.045l2.652 2.652M2.045 4.697l2.652-2.652"
                          />
                        </svg>
                        8 Hours
                      </span>
                    </div>
                  </div>
                </div>
                <div className="course-hover align-self-center">
                  <div className="chover_content">
                    <div className="ccategory">
                      <a href="#">Management</a>
                    </div>
                    <h3>
                      <a href="#">Ultimate Photoshop Training: From Beginner</a>
                    </h3>
                    <div className="hcourse-price">$120.00</div>
                    <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.</p>
                    <div className="hcmeta">
                      <span>
                        <img src="assets/images/all-img/avator.png" alt="img" />
                        <a href="#">Theme Ocean</a>
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                        5.0 (2k)
                      </span>
                    </div>
                    <div className="text-center">
                      <a href="#" className="cta">
                        <span>Enroll Now</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                          <path d="M1,5 L11,5" />
                          <polyline points="8 1 12 5 8 9" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End course-item */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="course-item d-flex">
                <div className="course-inner">
                  <div className="course-img">
                    <img src="assets/images/course/c3.png" alt="course" />
                    <div className="course-price">$170</div>
                  </div>
                  <div className="course-content">
                    <div className="ccategory">
                      <a href="#">Graphics</a>
                    </div>
                    <h3>
                      <a href="#">Basic Fundamentals of Interior &amp; Graphics Design</a>
                    </h3>
                    <div className="crating">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <span>5.0 / 28 Rating</span>
                    </div>
                    <div className="cmeta">
                      <span>
                        <svg fill="none" viewBox="0 0 20 20">
                          <path
                            stroke="#2c7aff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M14.376 6.25H3.126a.625.625 0 00-.626.625v8.75c0 .345.28.625.625.625h11.25c.346 0 .626-.28.626-.625v-8.75a.625.625 0 00-.625-.625z"
                          />
                          <path
                            stroke="#2c7aff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M5 3.75h11.875a.625.625 0 01.625.625v9.375"
                          />
                        </svg>
                        25 Lessons
                      </span>
                      <span className="cmtime">
                        <svg fill="none" viewBox="0 0 20 20">
                          <path
                            stroke="#2c7aff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M10 5.625V10h4.375"
                          />
                          <path
                            stroke="#2c7aff"
                            strokeMiterlimit={10}
                            strokeWidth="1.5"
                            d="M10 16.875a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75z"
                          />
                          <path
                            stroke="#2c7aff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15.303 2.045l2.652 2.652M2.045 4.697l2.652-2.652"
                          />
                        </svg>
                        8 Hours
                      </span>
                    </div>
                  </div>
                </div>
                <div className="course-hover align-self-center">
                  <div className="chover_content">
                    <div className="ccategory">
                      <a href="#">Graphics</a>
                    </div>
                    <h3>
                      <a href="#">Basic Fundamentals of Interior &amp; Graphics Design</a>
                    </h3>
                    <div className="hcourse-price">$170.00</div>
                    <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.</p>
                    <div className="hcmeta">
                      <span>
                        <img src="assets/images/all-img/avator.png" alt="img" />
                        <a href="#">Theme Ocean</a>
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                        5.0 (2k)
                      </span>
                    </div>
                    <div className="text-center">
                      <a href="#" className="cta">
                        <span>Enroll Now</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                          <path d="M1,5 L11,5" />
                          <polyline points="8 1 12 5 8 9" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End course-item */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="course-item d-flex">
                <div className="course-inner">
                  <div className="course-img">
                    <img src="assets/images/course/c4.png" alt="course" />
                    <div className="course-price">$140</div>
                  </div>
                  <div className="course-content">
                    <div className="ccategory">
                      <a href="#">Development</a>
                    </div>
                    <h3>
                      <a href="#">WordPress for Beginners – Master WordPress</a>
                    </h3>
                    <div className="crating">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <span>5.0 / 28 Rating</span>
                    </div>
                    <div className="cmeta">
                      <span>
                        <svg fill="none" viewBox="0 0 20 20">
                          <path
                            stroke="#2c7aff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M14.376 6.25H3.126a.625.625 0 00-.626.625v8.75c0 .345.28.625.625.625h11.25c.346 0 .626-.28.626-.625v-8.75a.625.625 0 00-.625-.625z"
                          />
                          <path
                            stroke="#2c7aff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M5 3.75h11.875a.625.625 0 01.625.625v9.375"
                          />
                        </svg>
                        25 Lessons
                      </span>
                      <span className="cmtime">
                        <svg fill="none" viewBox="0 0 20 20">
                          <path
                            stroke="#2c7aff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M10 5.625V10h4.375"
                          />
                          <path
                            stroke="#2c7aff"
                            strokeMiterlimit={10}
                            strokeWidth="1.5"
                            d="M10 16.875a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75z"
                          />
                          <path
                            stroke="#2c7aff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15.303 2.045l2.652 2.652M2.045 4.697l2.652-2.652"
                          />
                        </svg>
                        8 Hours
                      </span>
                    </div>
                  </div>
                </div>
                <div className="course-hover align-self-center">
                  <div className="chover_content">
                    <div className="ccategory">
                      <a href="#">Development</a>
                    </div>
                    <h3>
                      <a href="#">WordPress for Beginners – Master WordPress</a>
                    </h3>
                    <div className="hcourse-price">$140.00</div>
                    <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.</p>
                    <div className="hcmeta">
                      <span>
                        <img src="assets/images/all-img/avator.png" alt="img" />
                        <a href="#">Theme Ocean</a>
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                        5.0 (2k)
                      </span>
                    </div>
                    <div className="text-center">
                      <a href="#" className="cta">
                        <span>Enroll Now</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                          <path d="M1,5 L11,5" />
                          <polyline points="8 1 12 5 8 9" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End course-item */}
          </div>
          {/*END ROW */}
        </div>
        {/*END CONTAINER */}
      </div>
      {/*END COURSE */}
      {/* START VIDEO */}
      <section className="vid_area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUDown"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="video-area"></div>
            </div>
            {/*- END COL */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset={0}
            >
              <div className="cp_content">
                <h4>Best Online Learning Platform</h4>
                <h2>One Platfrom &amp; Many Courses For You</h2>
                <p>
                  From blogs to emails to ad copies, auto-generate catchy, original, and
                  high-converting copies in popular tones languages.
                </p>
                <ul>
                  <li>
                    <span className="ti-check" />
                    9/10 Average Satisfaction Rate
                  </li>
                  <li>
                    <span className="ti-check" />
                    96% Completitation Rate
                  </li>
                  <li>
                    <span className="ti-check" />
                    Friendly Environment &amp; Expert Teacher
                  </li>
                </ul>
              </div>
              <div className="cp_btn">
                <Link to="/course" className="cta">
                  <span>Explore Our Courses</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5" />
                    <polyline points="8 1 12 5 8 9" />
                  </svg>
                </Link>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END VIDEO */}
      {/* START TEAM*/}
      <section className="team_member section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Our Instructor</h4>
            <h1>Our Expert Instructors</h1>
          </div>
          <div className="row text-center">
            <div
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
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
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
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
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
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
              className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
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
      {/* START TESTIMONIALS*/}
      <section className="testi_home_area section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Testimonial</h4>
            <h1>What users saying about Purdue</h1>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div id="testimonial-slider" className="owl-carousel">
                <div className="testimonial">
                  <div className="testi_pic_title">
                    <div className="pic">
                      <img src="assets/images/all-img/t1.png" alt="" />
                    </div>
                    <h4>Kallu Mastan</h4>
                    <small className="post">Bissa Batpar</small>
                  </div>
                  <p>
                    I immediately shared the results with a friend who couldn’t believe it was
                    written by an AI. is worth every Yaley and then some. Describe my business along
                    with my business name.
                  </p>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                {/* END TESTIMONIAL */}
                <div className="testimonial">
                  <div className="testi_pic_title">
                    <div className="pic">
                      <img src="assets/images/all-img/t2.png" alt="" />
                    </div>
                    <h4>Kader Kaku</h4>
                    <small className="post">Mitthay Expert</small>
                  </div>
                  <p>
                    I immediately shared the results with a friend who couldn’t believe it was
                    written by an AI. is worth every Yaley and then some. Describe my business along
                    with my business name.
                  </p>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                {/* END TESTIMONIAL */}
                <div className="testimonial">
                  <div className="testi_pic_title">
                    <div className="pic">
                      <img src="assets/images/all-img/t3.png" alt="" />
                    </div>
                    <h4>Mittha Hasina</h4>
                    <small className="post">Lotpat Company</small>
                  </div>
                  <p>
                    I immediately shared the results with a friend who couldn’t believe it was
                    written by an AI. is worth every Yaley and then some. Describe my business along
                    with my business name.
                  </p>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                {/* END TESTIMONIAL */}
                <div className="testimonial">
                  <div className="testi_pic_title">
                    <div className="pic">
                      <img src="/assets/images/all-img/t4.png" alt="" />
                    </div>
                    <h4>Hasau Mahmud</h4>
                    <small className="post">Mastan group</small>
                  </div>
                  <p>
                    I immediately shared the results with a friend who couldn’t believe it was
                    written by an AI. is worth every Yaley and then some. Describe my business along
                    with my business name.
                  </p>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                {/* END TESTIMONIAL */}
                <div className="testimonial">
                  <div className="testi_pic_title">
                    <div className="pic">
                      <img src="assets/images/all-img/t1.png" alt="" />
                    </div>
                    <h4>Kutta Leauge</h4>
                    <small className="post">Kutta iNC</small>
                  </div>
                  <p>
                    I immediately shared the results with a friend who couldn’t believe it was
                    written by an AI. is worth every Yaley and then some. Describe my business along
                    with my business name.
                  </p>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                {/* END TESTIMONIAL */}
              </div>
              {/* END TESTIMONIAL SLIDER */}
            </div>
            {/* END COL  */}
          </div>
          {/* END ROW */}
        </div>
        {/* END CONTAINER */}
      </section>
      {/* END TESTIMONIALS */}
      {/* START BLOG */}
      <section id="blog" className="blog_area section-padding">
        <div className="container">
          <div className="section-title">
            <h4>News</h4>
            <h1>Our Latest Blogs</h1>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset={0}
            >
              <div className="single_blog">
                <img src="assets/images/blog/1.jpg" className="img-fluid" alt="image" />
                <div className="img_info">
                  <span>
                    August 26, 2025 | <a href="blog_single.html">Education</a>
                  </span>
                </div>
                <div className="content_box">
                  <h2>
                    <a href="blog_single.html">Professional Mobile Painting and Sculpting</a>
                  </h2>
                  <a href="#" className="cta">
                    <span>Read More</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* END COL*/}
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset={0}
            >
              <div className="single_blog">
                <img src="assets/images/blog/2.jpg" className="img-fluid" alt="image" />
                <div className="img_info">
                  <span>
                    August 28, 2025 | <a href="blog_single.html">Design</a>
                  </span>
                </div>
                <div className="content_box">
                  <h2>
                    <a href="blog_single.html">Professional Ceramic Moulding for Beginner</a>
                  </h2>
                  <a href="#" className="cta">
                    <span>Read More</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* END COL*/}
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              data-wow-offset={0}
            >
              <div className="single_blog">
                <img src="assets/images/blog/3.jpg" className="img-fluid" alt="image" />
                <div className="img_info">
                  <span>
                    August 30, 2025 | <a href="blog_single.html">Marketing</a>
                  </span>
                </div>
                <div className="content_box">
                  <h2>
                    <a href="blog_single.html">Education Is About Create Leaders For Tomorrow </a>
                  </h2>
                  <a href="#" className="cta">
                    <span>Read More</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* END COL*/}
          </div>
          {/* / END ROW */}
        </div>
        {/* END CONTAINER  */}
      </section>
      {/* END BLOG */}
      {/* START INSTRUCTOR+FREE COURSE */}
      <section className="insfreecourse section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="single_ins">
                <div className="single_ins_content">
                  <h4>Build Your Career</h4>
                  <h1>Become an Instructor</h1>
                  <p>Learn at your own pace, move the between multiple courses. </p>
                  <Link to="/register" className="cta">
                    <span>Apply Now</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </Link>
                </div>
                <div className="single_ins_img">
                  <img
                    src="assets/images/all-img/become-ins.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
              </div>
            </div>
            {/*- END COL */}
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="single_ins">
                <div className="single_ins_content">
                  <h4>Build Your Career</h4>
                  <h1>Get Free Courses</h1>
                  <p>Learn at your own pace, move the between multiple courses. </p>
                  <Link to="/contact" className="cta">
                    <span>Contact Us</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </Link>
                </div>
                <div className="single_ins_img">
                  <img
                    src="assets/images/all-img/free-course.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END INSTRUCTOR+FREE COURSE */}
      <Newsletter />
    </>
  );
};

export default HomeSection;
