import type { MobileMenuItem } from "@/types/menu";

export function isLinkActive(pathname: string, href?: string) {
  if (!href || href === "#") return false;
  if (href === "/index") {
    return pathname === "/" || pathname === "/index";
  }
  return pathname === href;
}

export function itemHasActiveDescendant(
  pathname: string,
  item: MobileMenuItem,
): boolean {
  if (isLinkActive(pathname, item.href)) return true;
  return (item.children ?? []).some((child) =>
    itemHasActiveDescendant(pathname, child),
  );
}

