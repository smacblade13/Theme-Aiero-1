import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <div className="contact-sec ibt-section-gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contact-content">
              <div className="sec-title white">
                <SubTitleWrapper>get in touch</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  We are always ready to help you and answer your questions
                </TitleSplitWrapper>
                <p>
                  Pacific hake false trevally queen parrotfish black prickleback
                  mosshead warbonnet sweeper! Greenling sleeper.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="contact-info">
                    <div className="call-center">
                      <h4 className="title">Call Center</h4>
                      <a href="tel:8003508431" className="nmbr">
                        800 100 975 20 34
                      </a>
                      <a href="mailto:support@aiero.com" className="nmbr">
                        + (123) 1800-234-5678
                      </a>
                    </div>
                    <div className="call-center mb-0">
                      <h4 className="title">Email</h4>
                      <a href="mailto:support@aiero.com" className="gmail">
                        aiero@mail.co
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="contact-info">
                    <div className="call-center">
                      <h4 className="title">Our Location</h4>
                      <p>
                        USA, New York - 1060 <br />
                        Str. First Avenue 1
                      </p>
                    </div>
                    <div className="call-center mb-0">
                      <h4 className="title">Social network</h4>
                      <ul className="social-icon">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title=""
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title=""
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title=""
                          >
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title=""
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
