const Newsletter = () => {
  return (
    <>
      {/* START NEWSLETTER */}
      <section className="newsletter_area section-padding">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-6 offset-lg-3 col-sm-12 col-xs-12">
              <div className="subs_form">
                <h3>Subscripbe to our newsletter, We don't make any spam.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim
                  minim
                </p>
                <form action="#" className="home_subs">
                  <input
                    type="text"
                    className="subscribe__input"
                    placeholder="Enter your Email Address"
                  />
                  <button type="button" className="subscribe__btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END NEWSLETTER */}
    </>
  );
};

export default Newsletter;
