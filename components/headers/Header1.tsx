"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import SideMenuToggler from "../common/SideMenuToggler";
import SearchToggler from "../common/SearchToggler";
import MobileMenuToggler from "../common/MobileMenuToggler";

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
    window.addEventListener("scroll", () => {
      setIsSticky(window.scrollY > 100);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setIsSticky(window.scrollY > 100);
      });
    };
  }, []);
  return (
    <header className={` $ ${isSticky ? stickyClass : className}`}>
      <div className={isSticky ? "" : "container2 position-relative"}>
        <div className={isSticky ? stickyMenuClass || menuClass : menuClass}>
          <div className="row gx-20 align-items-center justify-content-between">
            <div className="col-auto col">
              <div className="header-logo">
                <SideMenuToggler SideMenuTogglerClass={SideMenuTogglerClass} />
                <Link href={`/index1`}>
                  <Image
                    alt="logo"
                    src="/assets/images/logo.svg"
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
                  <a href="#" title="" className="header-contact11">
                    +1 800 684 32 59
                  </a>
                )}
                <SearchToggler />
                {hasLogin && (
                  <Link href={`/account`} title="" className="login-btn">
                    <i className="fa fa-user"></i>login
                  </Link>
                )}
                <Link
                  href={`/contact`}
                  title=""
                  className="ibt-btn ibt-btn-outline-3 ibt-btn-rounded"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
          <MobileMenuToggler />
        </div>
      </div>
      {/*vs-main-menu-wrapper end*/}
    </header>
  );
}
