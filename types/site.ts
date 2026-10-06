export type SocialPlatform =
  | "facebook"
  | "twitter"
  | "linkedin"
  | "youtube"
  | "instagram"
  | "github";

export type SocialLink = {
  platform: SocialPlatform;
  href: string;
  /** Font Awesome icon class (e.g. "fab fa-facebook-f"). */
  icon: string;
  label: string;
};

export type BrandConfig = {
  name: string;
  tagline: string;
  logoLight: string;
  logoDark: string;
  favicon: string;
};

export type ContactConfig = {
  email: string;
  phone: string;
  address: string;
};

export type NavCtaConfig = {
  label: string;
  href: string;
};

export type SeoConfig = {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  ogImage: string;
  siteUrl: string;
  twitterHandle?: string;
};

export type SiteConfig = {
  brand: BrandConfig;
  contact: ContactConfig;
  socials: SocialLink[];
  nav: { primaryCta: NavCtaConfig };
  seo: SeoConfig;
  legal: {
    copyrightHolder: string;
  };
};
