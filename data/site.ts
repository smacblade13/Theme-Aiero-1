import type { SiteConfig } from "@/types/site";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://example.com";

export const site: SiteConfig = {
  brand: {
    name: "Aiero",
    tagline: "AI Agency & Technology",
    logoLight: "/assets/images/logo.svg",
    logoDark: "/assets/images/logo2.svg",
    favicon: "/favicon.ico",
  },
  contact: {
    email: "hello@example.com",
    phone: "+1 800 684 32 59",
    address: "1234 Innovation Ave, San Francisco, CA 94103",
  },
  socials: [
    {
      platform: "facebook",
      href: "https://www.facebook.com/",
      icon: "fab fa-facebook-f",
      label: "Facebook",
    },
    {
      platform: "twitter",
      href: "https://www.twitter.com/",
      icon: "fab fa-twitter",
      label: "Twitter",
    },
    {
      platform: "linkedin",
      href: "https://www.linkedin.com/",
      icon: "fab fa-linkedin-in",
      label: "LinkedIn",
    },
    {
      platform: "youtube",
      href: "https://www.youtube.com/",
      icon: "fab fa-youtube",
      label: "YouTube",
    },
  ],
  nav: {
    primaryCta: { label: "Get in Touch", href: "/contact" },
  },
  seo: {
    defaultTitle: "Aiero — AI Agency & Technology",
    titleTemplate: "%s | Aiero",
    defaultDescription:
      "Aiero is a modern AI agency template for startups building intelligent products — neural networks, machine learning, and data science services.",
    ogImage: "/og-image.png",
    siteUrl,
    twitterHandle: "@aiero",
  },
  legal: {
    copyrightHolder: "Aiero",
    foundedYear: 2025,
  },
};
