import type { FooterLinkItem, FooterLinkGroup } from "@/types/footer";

export const footerCompanyLinks: FooterLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  { title: "Site", links: footerCompanyLinks },
];
