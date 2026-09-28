"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { mobileMenuItems } from "@/data/mobileMenu";
import { isLinkActive } from "@/utils/menuActive";

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      {mobileMenuItems.map((item) => {
        const href = item.href ?? "#";
        const active = isLinkActive(pathname, href);
        return (
          <li key={item.label} className={active ? "active" : undefined}>
            <Link href={href} className={active ? "active" : undefined}>
              <span className="menu-item">{item.label}</span>
              <span className="menu-item2">{item.label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
}
