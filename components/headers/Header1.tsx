"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import SideMenuToggler from "../common/SideMenuToggler";
import SearchToggler from "../common/SearchToggler";
import MobileMenuToggler from "../common/MobileMenuToggler";
import { site } from "@/data/site";

export default function Header1({
  className = "vs-header",
  stickyClass = "sticky-active is-sticky",
  hasLogin = false,
  menuClass = "header-menu-area",
  stickyMenuClass = "",
  navClass = "menu-style1",
  hasNumber = false,
  SideMenuTogglerClass = "menu-toggle",
}: {
  className?: string;
  stickyClass?: string;
  hasLogin?: boolean;
  menuClass?: string;
  stickyMenuClass?: string;
  navClass?: string;
  hasNumber?: boolean;
  SideMenuTogglerClass?: string;
}) {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`${isSticky ? stickyClass : className}`}>
      <div className={isSticky ? "" : "container2 position-relative"}>
        <div className={isSticky ? stickyMenuClass || menuClass : menuClass}>
          <div className="row gx-20 align-items-center justify-content-between">
            <div className="col-auto col">
              <div className="header-logo">
                <SideMenuToggler SideMenuTogglerClass={SideMenuTogglerClass} />
                <Link href="/" aria-label={site.brand.name}>
                  <Image
                    alt={`${site.brand.name} logo`}
                    src={site.brand.logoLight}
                    width={110}
                    height={20}
                  />
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <nav className={`main-menu ${navClass}`}>
                <ul>
                  <Nav />
                </ul>
              </nav>
            </div>
            <div className="col-auto d-none d-xl-block">
              <div className="btn-box">
                {hasNumber && (
                  <a
                    href={`tel:${site.contact.phone.replace(/\s+/g, "")}`}
                    className="header-contact11"
                  >
                    {site.contact.phone}
                  </a>
                )}
                <SearchToggler />
                {hasLogin && (
                  <Link href="/account" className="login-btn">
                    <i className="fa fa-user"></i>login
                  </Link>
                )}
                <Link
                  href={site.nav.primaryCta.href}
                  className="ibt-btn ibt-btn-outline-3 ibt-btn-rounded"
                >
                  <span>{site.nav.primaryCta.label}</span>
                </Link>
              </div>
            </div>
          </div>
          <MobileMenuToggler />
        </div>
      </div>
    </header>
  );
}
