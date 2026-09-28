import Link from "next/link";
import Image from "next/image";

import { footerLinkGroups } from "@/data/footer";
import { site } from "@/data/site";

export default function Footer1() {
  return (
    <footer className="footer-style1">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <h2 className="title">{site.brand.tagline}</h2>
            <Link
              href={site.nav.primaryCta.href}
              className="ibt-btn ibt-btn-outline"
            >
              <span>{site.nav.primaryCta.label}</span>
              <i className="icon-arrow-top" />
            </Link>
          </div>
        </div>
      </div>
      <div className="widget-area ibt-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-6">
              <div className="about-widget footer-widget">
                <div className="footer-logo">
                  <Image
                    alt={`${site.brand.name} logo`}
                    src={site.brand.logoDark}
                    width={110}
                    height={20}
                  />
                </div>
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
                <h2 className="title">since {site.legal.foundedYear}</h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="footer-menu">
                {footerLinkGroups.map((group) => (
                  <div key={group.title} className="footer-links footer-widget">
                    <h4 className="widget-title">{group.title}</h4>
                    <ul>
                      {group.links.map((item) => (
                        <li key={item.label}>
                          {item.href.startsWith("/") ? (
                            <Link href={item.href}>{item.label}</Link>
                          ) : (
                            <a href={item.href}>{item.label}</a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-botom">
        <div className="container">
          <div className="footer-box">
            <p>
              <Link href="/">©{site.legal.copyrightHolder}</Link>{" "}
              {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
