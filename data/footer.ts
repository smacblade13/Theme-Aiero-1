import type { FooterLinkItem, FooterLinkGroup } from "@/types/footer";

export const footerCompanyLinks: FooterLinkItem[] = [
  { label: "About", href: "#" },
  { label: "Expertise", href: "#" },
  { label: "Sustainability", href: "#" },
  { label: "News & Media", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "Contacts", href: "#" },
];

export const footerServicesLinks: FooterLinkItem[] = [
  { label: "AI Consulting", href: "#" },
  { label: "Machine Learning", href: "#" },
  { label: "Natural Language Processing", href: "#" },
  { label: "Computer Vision", href: "#" },
  { label: "Data Analytics", href: "#" },
  { label: "AI Integration", href: "#" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  { title: "Company", links: footerCompanyLinks },
  { title: "Services", links: footerServicesLinks },
];
