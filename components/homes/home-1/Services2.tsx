import Image from "next/image";

export default function Services2() {
  return (
    <section className="service-sec2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="ser-block2">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/ser2-1.svg"
                width={73}
                height={73}
              />
              <h4 className="title">Blockchain Technology</h4>
              <ul className="ser-list">
                <li>Synthesis of specialized compounds and reagents</li>
                <li>Tailored solutions for specific research needs</li>
                <li>Advanced data analysis services</li>
                <li>Comprehensive interpretation and reporting</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ser-block2">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/ser2-2.svg"
                width={74}
                height={73}
              />
              <h4 className="title">Virtual and Augmented Reality</h4>
              <ul className="ser-list">
                <li>Development of prototypes for new products</li>
                <li>Scale-up services for commercial production</li>
                <li>Hands-on training for laboratory techniques</li>
                <li>Workshops on emerging technologies a</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ser-block2">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/ser2-3.svg"
                width={69}
                height={71}
              />
              <h4 className="title">Blockchain Technology</h4>
              <ul className="ser-list">
                <li>Synthesis of specialized compounds and reagents</li>
                <li>Tailored solutions for specific research needs</li>
                <li>Advanced data analysis services</li>
                <li>Comprehensive interpretation and reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
