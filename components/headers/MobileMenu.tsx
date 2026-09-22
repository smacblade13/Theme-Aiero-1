"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import SearchToggler from "../common/SearchToggler";
import { useUi } from "@/context/UiContext";
import { mobileMenuItems } from "@/data/mobileMenu";
import type { MobileMenuItem } from "@/types/menu";
import { itemHasActiveDescendant } from "@/utils/menuActive";

type OpenItemsState = Set<string>;

function renderMenuItems(
  items: MobileMenuItem[],
  parentKey: string,
  openItems: OpenItemsState,
  toggleItem: (key: string) => void,
  pathname: string,
) {
  return items.map((item, index) => {
    const itemKey = parentKey ? `${parentKey}-${index}` : `${index}`;
    const hasChildren =
      Array.isArray(item.children) && item.children.length > 0;
    const isOpen = openItems.has(itemKey);
    const isActive = itemHasActiveDescendant(pathname, item);
    // Only use "active" on li for expand/collapse (isOpen). Use "current" for
    // current-page highlight so the submenu can collapse when openItems is toggled off.
    const liClassName =
      [
        item.liClassName,
        isOpen ? "active" : undefined,
        isActive ? "current" : undefined,
      ]
        .filter(Boolean)
        .join(" ") || undefined;

    const href = item.href ?? "#";
    const isInternalLink = href.startsWith("/");

    const handleClick = (
      e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    ) => {
      if (hasChildren) {
        e.preventDefault();
        e.stopPropagation();
        toggleItem(itemKey);
      }
    };

    const linkClassName = isActive ? "active" : undefined;

    const labelContent = isInternalLink ? (
      <Link href={href} onClick={handleClick} className={linkClassName}>
        {item.label}
      </Link>
    ) : (
      <a href={href} onClick={handleClick} className={linkClassName}>
        {item.label}
      </a>
    );

    return (
      <li key={item.label} className={liClassName}>
        {labelContent}
        {hasChildren && (
          <ul className={isOpen ? "active" : undefined}>
            {renderMenuItems(
              item.children!,
              itemKey,
              openItems,
              toggleItem,
              pathname,
            )}
          </ul>
        )}
      </li>
    );
  });
}

export default function MobileMenu() {
  const { mobileMenuOpen, closeMobileMenu } = useUi();
  const [openItems, setOpenItems] = useState<OpenItemsState>(new Set());
  const pathname = usePathname();

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

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
          {renderMenuItems(
            mobileMenuItems,
            "root",
            openItems,
            toggleItem,
            pathname,
          )}
        </ul>
        <div className="menu-contact">
          <span>Contacts</span>
          <a href="tel:+13685678954" className="nmbr" title="">
            +1 800 529 10 37
          </a>
          <a href="mailto:aiero@mail.co" title="" className="gmail">
            aiero@mail.co
          </a>
        </div>
        <div className="menu-links">
          <span>Follow us:</span>
          <ul className="social-icon">
            <li>
              <a href="#" title="">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#" title="">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#" title="">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="#" title="">
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
          <a
            href="#"
            title=""
            className="ibt-btn ibt-btn-outline-3 ibt-btn-rounded"
          >
            <span>Get in Touch</span>
          </a>
        </div>
      </div>

      <div
        className={`overlay2 ${mobileMenuOpen ? "active" : ""}`}
        onClick={closeMobileMenu}
      />
    </>
  );
}
