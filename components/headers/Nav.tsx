"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import ThemeTrigger from "@/components/common/ThemeTrigger";
import { mobileMenuItems } from "@/data/mobileMenu";
import { isLinkActive, itemHasActiveDescendant } from "@/utils/menuActive";

export default function Nav() {
  const pathname = usePathname();

  const homeSection = mobileMenuItems[0];
  const pagesSection = mobileMenuItems[1];
  const servicesSection = mobileMenuItems[2];
  const shopSection = mobileMenuItems[3];
  const blogSection = mobileMenuItems[4];

  const isHomeActive = itemHasActiveDescendant(pathname, homeSection);
  const isPagesActive = itemHasActiveDescendant(pathname, pagesSection);
  const isServicesActive = itemHasActiveDescendant(pathname, servicesSection);
  const isShopActive = itemHasActiveDescendant(pathname, shopSection);
  const isBlogActive = itemHasActiveDescendant(pathname, blogSection);
  const isContactActive = isLinkActive(pathname, mobileMenuItems[5].href);

  return (
    <>
      {" "}
      <li className={isHomeActive ? "menu-has-items active" : "menu-has-items"}>
        <Link href="/" className={isHomeActive ? "active" : undefined}>
          <span className="menu-item">{homeSection.label}</span>
          <span className="menu-item2">{homeSection.label}</span>
        </Link>
        <ul className="mega-sub-menu">
          <li className="mega-menu-column">
            <ul>
              {homeSection.children?.slice(0, 9).map((child) => {
                const isChildActive = isLinkActive(pathname, child.href);
                return (
                  <li
                    key={child.label}
                    className={isChildActive ? "active" : undefined}
                  >
                    <Link
                      href={child.href!}
                      className={isChildActive ? "active" : undefined}
                    >
                      {child.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul>
              {homeSection.children?.slice(9).map((child) => {
                const isChildActive = isLinkActive(pathname, child.href);
                return (
                  <li
                    key={child.label}
                    className={isChildActive ? "active" : undefined}
                  >
                    <Link
                      href={child.href!}
                      className={isChildActive ? "active" : undefined}
                    >
                      {child.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="mega-menu-column">
            <ThemeTrigger>
              <Link href={`/index1`} className="darkModeTriggerImg">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/event/dark-version.png"
                  width={377}
                  height={351}
                />
              </Link>
            </ThemeTrigger>
            <ThemeTrigger>
              <Link href={`/index1`} className="darkModeTriggerImg2">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/event/light-version.png"
                  width={377}
                  height={351}
                />
              </Link>
            </ThemeTrigger>
          </li>
        </ul>
      </li>
      <li
        className={
          isPagesActive
            ? "menu-has-items menu-item-has-children active"
            : "menu-has-items menu-item-has-children"
        }
      >
        <a href="#" className={isPagesActive ? "active" : undefined}>
          <span className="menu-item">{pagesSection.label}</span>
          <span className="menu-item2">{pagesSection.label}</span>
        </a>
        <ul className="sub-menu">
          {pagesSection.children?.map((child) => {
            if (child.children && child.children.length > 0) {
              const isTeam = child.label.toLowerCase() === "team";
              const subClass = isTeam ? "sub-menu v1" : "sub-menu v2";
              const isChildActive = itemHasActiveDescendant(pathname, child);
              return (
                <li
                  key={child.label}
                  className={
                    isChildActive ? "menu-has-items active" : "menu-has-items"
                  }
                >
                  <Link
                    href={child.href ?? "#"}
                    className={isChildActive ? "active" : undefined}
                  >
                    {child.label}
                  </Link>
                  <ul className={subClass}>
                    {child.children.map((sub) => {
                      const isSubActive = isLinkActive(pathname, sub.href);
                      return (
                        <li
                          key={sub.label}
                          className={isSubActive ? "active" : undefined}
                        >
                          <Link
                            href={sub.href!}
                            className={isSubActive ? "active" : undefined}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
            const isChildActive = isLinkActive(pathname, child.href);
            return (
              <li
                key={child.label}
                className={isChildActive ? "active" : undefined}
              >
                <Link
                  href={child.href!}
                  className={isChildActive ? "active" : undefined}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
      <li
        className={
          isServicesActive ? "menu-has-items active" : "menu-has-items"
        }
      >
        <Link
          href={servicesSection.children?.[0].href ?? "/service"}
          className={isServicesActive ? "active" : undefined}
        >
          <span className="menu-item">{servicesSection.label}</span>
          <span className="menu-item2">{servicesSection.label}</span>
        </Link>
        <ul className="sub-menu">
          {servicesSection.children?.map((child) => {
            const isChildActive = isLinkActive(pathname, child.href);
            return (
              <li
                key={child.label}
                className={isChildActive ? "active" : undefined}
              >
                <Link
                  href={child.href!}
                  className={isChildActive ? "active" : undefined}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
      <li className={isShopActive ? "menu-has-items active" : "menu-has-items"}>
        <Link
          href={shopSection.children?.[0].href ?? "/shop"}
          className={isShopActive ? "active" : undefined}
        >
          <span className="menu-item">{shopSection.label}</span>
          <span className="menu-item2">{shopSection.label}</span>
        </Link>
        <ul className="sub-menu">
          {shopSection.children?.map((child) => {
            const isChildActive = isLinkActive(pathname, child.href);
            return (
              <li
                key={child.label}
                className={isChildActive ? "active" : undefined}
              >
                <Link
                  href={child.href!}
                  className={isChildActive ? "active" : undefined}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
      <li className={isBlogActive ? "menu-has-items active" : "menu-has-items"}>
        <Link
          href={blogSection.children?.[0].href ?? "/blog"}
          className={isBlogActive ? "active" : undefined}
        >
          <span className="menu-item">{blogSection.label}</span>
          <span className="menu-item2">{blogSection.label}</span>
        </Link>
        <ul className="sub-menu">
          {blogSection.children?.map((child) => {
            const isChildActive = isLinkActive(pathname, child.href);
            return (
              <li
                key={child.label}
                className={isChildActive ? "active" : undefined}
              >
                <Link
                  href={child.href!}
                  className={isChildActive ? "active" : undefined}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
      <li className={isContactActive ? "active" : undefined}>
        <Link
          href={mobileMenuItems[5].href ?? "/contact"}
          className={isContactActive ? "active" : undefined}
        >
          <span className="menu-item">{mobileMenuItems[5].label}</span>
          <span className="menu-item2">{mobileMenuItems[5].label}</span>
        </Link>
      </li>
    </>
  );
}
