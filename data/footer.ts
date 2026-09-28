import type { FooterLinkItem, FooterLinkGroup } from "@/types/footer";

/** Company links - used in Footer1, Footer2, Footer4 */
export const footerCompanyLinks: FooterLinkItem[] = [
  { label: "About", href: "/about" },
  { label: "Expertise", href: "#" },
  { label: "Sustainability", href: "#" },
  { label: "News & Media", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "Contacts", href: "/contact" },
];

/** Services links - used in Footer1, Footer2, Footer3 */
export const footerServiceLinks: FooterLinkItem[] = [
  { label: "Air Freight", href: "#" },
  { label: "Sea Freight", href: "#" },
  { label: "Land Transport", href: "#" },
  { label: "Groupage", href: "#" },
  { label: "Consultancy", href: "#" },
  { label: "Value Added Services", href: "#" },
];

/** Services links (alternate) - used in Footer4 */
export const footerServiceLinksAlt: FooterLinkItem[] = [
  { label: "AI Model Deployment", href: "#" },
  { label: "Intelligent Automation", href: "#" },
  { label: "AI Model Deployment", href: "#" },
  { label: "Data Science Consulting", href: "#" },
  { label: "Predictive Analytics", href: "#" },
  { label: "Value Added Services", href: "#" },
];

/** Link groups for Footer1, Footer2 (Company + Services) */
export const footerLinkGroups: FooterLinkGroup[] = [
  { title: "Company", links: footerCompanyLinks },
  { title: "Services", links: footerServiceLinks },
];

/** Link groups for Footer4 (Company + Services alt) */
export const footerLinkGroupsAlt: FooterLinkGroup[] = [
  { title: "Company", links: footerCompanyLinks },
  { title: "Services", links: footerServiceLinksAlt },
];

/** Bottom row links - used in Footer5 */
export const footerBottomLinks: FooterLinkItem[] = [
  { label: "Home", href: "#" },
  { label: "Pages", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Shop", href: "#" },
  { label: "Contacts", href: "#" },
];
