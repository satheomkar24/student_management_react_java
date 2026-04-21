const TeamDetailsSection = () => {
  return (
    <section className="template_agent section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <div className="single_agent">
              <div className="single_agent_image">
                <img src="/assets/images/team/1.jpg" className="img-fluid" alt="" />
              </div>
              <div className="single_agent_content">
                <h4>Kauya Kader. Batpar khan</h4>
                <h5>Digital Marketer</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever type book.
                </p>
                <ul>
                  <li>
                    <i className="fa fa-envelope-o" />
                    yourmail@gmail.com
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    (+123) 123 123 123
                  </li>
                  <li>
                    <i className="fa fa-plane" />
                    www.yourdomainname.com
                  </li>
                  <li>
                    <i className="fa-brands fa-skype" />
                    skype.address
                  </li>
                </ul>
              </div>
              <div className="agent_social">
                <ul className="list-inline">
                  <li>
                    <a href="#" className="top_f_facebook">
                      <img src="/assets/images/icon/fb.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="top_f_facebook">
                      <img src="/assets/images/icon/tw.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="top_f_facebook">
                      <img src="/assets/images/icon/pn.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="top_f_facebook">
                      <img src="/assets/images/icon/ins.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*- END SINGLE ITEM */}
          </div>
          {/*- END COL */}
        </div>
        {/*- END ROW */}
      </div>
      {/*- END CONTAINER */}
    </section>
  );
};

export default TeamDetailsSection;
