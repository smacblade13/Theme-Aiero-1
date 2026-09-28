import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/data/site";

type ContactProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  className?: string;
};

export default function Contact({
  eyebrow = "get in touch",
  title = "We are always ready to help you and answer your questions",
  intro = "Reach out about a new project, partnership, or a quick question — we typically respond within one business day.",
  className = "contact-sec ibt-section-gap",
}: ContactProps = {}) {
  const telHref = `tel:${site.contact.phone.replace(/\s+/g, "")}`;
  const mailHref = `mailto:${site.contact.email}`;

  return (
    <div className={className}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contact-content">
              <div className="sec-title white">
                <SubTitleWrapper>{eyebrow}</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  {title}
                </TitleSplitWrapper>
                <p>{intro}</p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="contact-info">
                    <div className="call-center">
                      <h4 className="title">Call</h4>
                      <a href={telHref} className="nmbr">
                        {site.contact.phone}
                      </a>
                    </div>
                    <div className="call-center mb-0">
                      <h4 className="title">Email</h4>
                      <a href={mailHref} className="gmail">
                        {site.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="contact-info">
                    <div className="call-center">
                      <h4 className="title">Our Location</h4>
                      <p>{site.contact.address}</p>
                    </div>
                    <div className="call-center mb-0">
                      <h4 className="title">Social network</h4>
                      <ul className="social-icon">
                        {site.socials.map((social) => (
                          <li key={social.platform}>
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={social.label}
                            >
                              <i className={social.icon} />
                            </a>
                          </li>
                        ))}
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
