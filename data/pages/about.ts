import type { PageContent } from "@/types/pages";

export const aboutPageContent: PageContent = {
  metadata: {
    title: "About",
    description:
      "Meet the Aiero team — engineers, data scientists, and product strategists building trusted AI solutions for modern businesses.",
  },
  header: {
    eyebrow: "",
    title: "/ About us /",
    intro: "",
  },
};

export const aboutIntroContent = {
  eyebrow: "about",
  title: "Awesome things in working with Aiero AI Agency",
  paragraphs: [
    "At Aiero, we are a leading AI services provider dedicated to delivering innovative solutions that leverage artificial intelligence to transform businesses.",
    "Our team of experts specializes in cutting-edge AI technologies, offering customized strategies and implementations to help you stay ahead in today's data-driven world. Unlock the full potential of AI with Aiero, your trusted partner in the future of intelligent technology.",
    "XXLando, your trusted partner in the future of intelligent technology. Stay ahead in today's data-driven world. Unlock the full potential of AI with Aiero, your trusted partner in the future of intelligent technology — stay ahead in today's.",
  ],
};

export const aboutTeamContent = {
  eyebrow: "team",
  title: "The Neural Network experts: uniting talent for intelligent solutions",
  counter: {
    number: "+500",
    label: "Awesome team members",
  },
  cta: { label: "Explore more", href: "#" },
  members: [
    {
      name: "Alan Begham",
      role: "CEO Aiero",
      image: "/assets/images/about/3d-woman-shape-glowing.jpg",
      tag: "Neural",
      vClass: "",
    },
    {
      name: "Arthur Dowson",
      role: "AI Programmer",
      image: "/assets/images/about/about-us-hero.jpg",
      tag: "Solution",
      vClass: "v1",
    },
    {
      name: "Dan Smith",
      role: "ML Engineer",
      image: "/assets/images/about/testimonials-bg.jpg",
      tag: "Future",
      vClass: "v1",
    },
    {
      name: "Brandon Adams",
      role: "Data Scientist",
      image: "/assets/images/about/3d-woman-shape-glowing.jpg",
      tag: "Digital",
      vClass: "",
    },
    {
      name: "Alan Begham",
      role: "AI Researcher",
      image: "/assets/images/about/about-us-hero.jpg",
      tag: "Learning",
      vClass: "v1",
    },
  ],
};
