"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
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
      <div className="position-relative">
        <div className={isSticky ? stickyMenuClass || menuClass : menuClass}>
          <div className="row gx-20 align-items-center justify-content-between">
            <div className="col-auto col">
              <div className="header-logo">
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
              <div style={{ display: "flex", alignItems: "center" }}>
                <MobileMenuToggler />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
