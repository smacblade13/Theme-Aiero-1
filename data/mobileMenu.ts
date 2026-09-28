import type { MobileMenuItem } from "@/types/menu";

export const mobileMenuItems: MobileMenuItem[] = [
  {
    label: "Home",
    href: "#",
    children: [
      { label: "Modern Technology", href: "/" },
      { label: "Neural Networks", href: "#" },
      { label: "AI Agency", href: "#" },
      { label: "Chatbot", href: "#" },
      { label: "Startup", href: "#" },
      { label: "AI Consulting", href: "#" },
      { label: "Futurism", href: "#" },
      { label: "Hi-Tech", href: "#" },
      { label: "Voiceover", href: "#" },
      { label: "Science", href: "#" },
      { label: "Creative Bureau", href: "#" },
      { label: "Video Voiceover", href: "#" },
      { label: "IT Services", href: "#" },
      { label: "AI Devices", href: "#" },
      { label: "AI Solutions", href: "#" },
      { label: "Image Generator", href: "#" },
      { label: "Content Generator", href: "#" },
      { label: "Intro", href: "#" },
    ],
  },
  {
    label: "pages",
    href: "#",
    children: [
      { label: "About us", href: "/about" },
      {
        label: "Team",
        href: "#",
        liClassName: "sub-menu",
        children: [
          { label: "Creative team", href: "#" },
          { label: "Team Single", href: "#" },
        ],
      },
      {
        label: "Projects",
        href: "#",
        liClassName: "sub-menu",
        children: [
          { label: "Projects Grid", href: "#" },
          { label: "Projects Modern", href: "#" },
          { label: "Project Single", href: "#" },
        ],
      },
      { label: "Gallery Grid", href: "#" },
      { label: "Gallery Masonry", href: "#" },
      { label: "Pricing plans", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Typography", href: "#" },
      { label: "404", href: "#" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Services Page", href: "/services" },
      { label: "Service Single", href: "#" },
    ],
  },
  {
    label: "Shop",
    href: "#",
    children: [
      { label: "Products", href: "#" },
      { label: "Single Product", href: "#" },
      { label: "Shopping cart", href: "#" },
      { label: "Checkout", href: "#" },
      { label: "My account", href: "#" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    children: [
      { label: "Blog Classic", href: "#" },
      { label: "Blog Grid", href: "#" },
      { label: "Blog Single", href: "#" },
    ],
  },
  {
    label: "Contacts",
    href: "/contact",
  },
];
