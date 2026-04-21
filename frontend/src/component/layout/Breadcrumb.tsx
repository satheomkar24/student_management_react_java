import { Link } from 'react-router-dom';

type Props = {
  sectionTitle: string;
};

const Breadcrumb = ({ sectionTitle }: Props) => {
  return (
    <section className="section-top">
      <div className="container">
        <div className="col-lg-10 offset-lg-1 text-center">
          <div
            className="section-top-title wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            data-wow-offset={0}
          >
            <h1>{sectionTitle}</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li> / {sectionTitle}</li>
            </ul>
          </div>
          {/* //.HERO-TEXT */}
        </div>
        {/*- END COL */}
      </div>
      {/*- END CONTAINER */}
    </section>
  );
};

export default Breadcrumb;
