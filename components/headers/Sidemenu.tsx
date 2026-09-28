"use client";
import Link from "next/link";
import Image from "next/image";

import { useUi } from "@/context/UiContext";
import { site } from "@/data/site";

export default function Sidemenu() {
  const { closeSideNav, sideNavOpen } = useUi();
  const telHref = `tel:${site.contact.phone.replace(/\s+/g, "")}`;
  const mailHref = `mailto:${site.contact.email}`;

  return (
    <div className={`side-menu ${sideNavOpen ? "active" : ""}`} id="sideMenu">
      <div
        className={`overlay ${sideNavOpen ? "active" : ""}`}
        id="overlay"
        onClick={closeSideNav}
      />
      <button
        type="button"
        className="close-btn"
        id="closeBtn"
        onClick={closeSideNav}
      >
        <i className="fa fa-close" /> close
      </button>
      <div className="menu-content">
        <Link href="/" className="logo">
          <Image
            alt={`${site.brand.name} logo`}
            src={site.brand.logoDark}
            width={110}
            height={20}
          />
        </Link>
        <div className="sidebar-menu">
          <h4 className="title">contacts</h4>
          <p>{site.contact.address}</p>
          <a href={telHref} className="nmbr">
            {site.contact.phone}
          </a>
          <a href={mailHref} className="email">
            {site.contact.email}
          </a>
          <Link
            href={site.nav.primaryCta.href}
            className="ibt-btn ibt-btn-outline-3 ibt-btn-rounded"
          >
            <span>{site.nav.primaryCta.label}</span>
          </Link>
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
      </div>
    </div>
  );
}
