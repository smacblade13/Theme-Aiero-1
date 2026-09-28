"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import SearchToggler from "../common/SearchToggler";
import { useUi } from "@/context/UiContext";
import { mobileMenuItems } from "@/data/mobileMenu";
import { site } from "@/data/site";
import { isLinkActive } from "@/utils/menuActive";

export default function MobileMenu() {
  const { mobileMenuOpen, closeMobileMenu } = useUi();
  const pathname = usePathname();
  const telHref = `tel:${site.contact.phone.replace(/\s+/g, "")}`;
  const mailHref = `mailto:${site.contact.email}`;

  return (
    <>
      <div className={`side-menu2 ${mobileMenuOpen ? "active" : ""}`}>
        <div className="menu-btns">
          <SearchToggler />
          <button
            id="mobileCloseBtn2"
            className="close-btn"
            onClick={closeMobileMenu}
          />
        </div>
        <ul>
          {mobileMenuItems.map((item) => {
            const href = item.href ?? "#";
            const active = isLinkActive(pathname, href);
            return (
              <li key={item.label} className={active ? "current" : undefined}>
                <Link href={href} className={active ? "active" : undefined}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="menu-contact">
          <span>Contacts</span>
          <a href={telHref} className="nmbr">
            {site.contact.phone}
          </a>
          <a href={mailHref} className="gmail">
            {site.contact.email}
          </a>
        </div>
        <div className="menu-links">
          <span>Follow us:</span>
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
          <Link
            href={site.nav.primaryCta.href}
            className="ibt-btn ibt-btn-outline-3 ibt-btn-rounded"
          >
            <span>{site.nav.primaryCta.label}</span>
          </Link>
        </div>
      </div>

      <div
        className={`overlay2 ${mobileMenuOpen ? "active" : ""}`}
        onClick={closeMobileMenu}
      />
    </>
  );
}
