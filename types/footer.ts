/** Single footer link */
export type FooterLinkItem = {
  label: string;
  href: string;
};

/** Footer link group (widget title + list of links) */
export type FooterLinkGroup = {
  title: string;
  links: FooterLinkItem[];
};
