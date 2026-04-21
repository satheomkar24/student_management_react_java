const ContactSection = () => {
  return (
    <>
      {/* START ADDRESS */}
      <section className="address_area  section-padding">
        <div className="container">
          <div className="row text-center">
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              data-wow-offset={0}
            >
              <div className="single_address">
                <i className="ti-map" />
                <h4>Our Location</h4>
                <p>
                  3481 Melrose Place, Beverly Hills <br /> CA 90210
                </p>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="single_address">
                <i className="ti-mobile" />
                <h4>Telephone</h4>
                <p>(+1) 517 397 7100</p>
                <p>(+1) 411 315 8138</p>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              data-wow-offset={0}
            >
              <div className="single_address">
                <i className="ti-email" />
                <h4>Send email</h4>
                <p>Info@example.com</p>
                <p>admin@example.com</p>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END ADDRESS */}
      {/* CONTACT */}
      <div id="contact" className="contact_area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-7 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="section-title-two">
                <h2>Send your message.</h2>
              </div>
              <div className="contact">
                <form className="form" name="enq" method="post" action="contact.php">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required={true}
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        required={true}
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        required={true}
                        placeholder="Your Subject"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        rows={6}
                        name="message"
                        className="form-control"
                        required={true}
                        placeholder="Your Message"
                        defaultValue={''}
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <a href="#" className="cta">
                        <span>Send Message</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                          <path d="M1,5 L11,5" />
                          <polyline points="8 1 12 5 8 9" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* END COL  */}
            <div
              className="col-lg-5 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              {' '}
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.957183635167!2d-74.00402768559431!3d40.71895904512855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a1316e7a7%3A0x47bb20eb6074b3f0!2sNew%20Work%20City%20-%20(CLOSED)!5e0!3m2!1sbn!2sbd!4v1600305497356!5m2!1sbn!2sbd"
                  style={{ border: 0 }}
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
            </div>
            {/* END COL  */}
          </div>
          {/* END ROW */}
        </div>
        {/*- END CONTAINER */}
      </div>
      {/* END CONTACT */}
    </>
  );
};

export default ContactSection;
