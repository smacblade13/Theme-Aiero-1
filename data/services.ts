import type { ServiceCardSec6, ServiceCard10 } from "@/types/services";

export const serviceSec6Cards: ServiceCardSec6[] = [
  {
    id: "s6-1",
    variant: "default",
    imageSrc: "/assets/images/service/service6-1.png",
    imageWidth: 456,
    imageHeight: 561,
    title: "Neural Network Development",
    description:
      "Custom design and development of neural network architectures tailored to your specific business needs",
  },
  {
    id: "s6-2",
    variant: "default",
    imageSrc: "/assets/images/service/service6-2.png",
    imageWidth: 456,
    imageHeight: 561,
    title: "Training & Optimization",
    description:
      "Fine-tuning neural networks using advanced algorithms to achieve maximum performance and accuracy.",
    contentClassName: "v2",
  },
  {
    id: "s6-3",
    variant: "compact",
    imageSrc: "/assets/images/service/service6-3.png",
    imageWidth: 420,
    imageHeight: 191,
    title: "Neural Network Integration",
    cardClassName: "ser-card v3",
  },
  {
    id: "s6-4",
    variant: "icon",
    iconSrc: "/assets/images/icon/phone.svg",
    iconWidth: 57,
    iconHeight: 57,
    title: "Neural Network Consulting",
    description:
      "Expert guidance and strategic advice on integrating neural networks into your existing systems",
    cardClassName: "ser-card v4",
  },
  {
    id: "s6-5",
    variant: "default",
    imageSrc: "/assets/images/service/service6-5.png",
    imageWidth: 490,
    imageHeight: 561,
    title: "Neural Network Support",
    description:
      "Custom design and development of neural network architectures tailored to specific business needs and objectives.",
    contentClassName: "v2",
    cardClassName: "ser-card v5",
  },
];

export const serviceSec10Cards: ServiceCard10[] = [
  {
    id: "s10-1",
    imageSrc: "/assets/images/service/ser10-1.png",
    imageWidth: 418,
    imageHeight: 601,
    iconSrc: "/assets/images/service/ser-icon10-1.svg",
    iconWidth: 55,
    iconHeight: 47,
    title: "Robotic Process Automation (RPA)",
    titleClassName: "v2",
    colClassName: "col-xl-3 col-lg-6 col-md-6",
  },
  {
    id: "s10-2",
    imageSrc: "/assets/images/service/ser10-2.png",
    imageWidth: 418,
    imageHeight: 601,
    iconSrc: "/assets/images/service/ser-icon10-2.svg",
    iconWidth: 55,
    iconHeight: 55,
    title: "Data Analysis and Visualization",
    colClassName: "col-xl-3 col-lg-6 col-md-6",
  },
  {
    id: "s10-3",
    imageSrc: "/assets/images/service/ser10-3.png",
    imageWidth: 1004,
    imageHeight: 601,
    iconSrc: "/assets/images/service/ser-icon10-3.svg",
    iconWidth: 51,
    iconHeight: 48,
    title: "Insightful market research for strategic business decisions",
    titleClassName: "v3",
    colClassName: "col-xl-6 col-lg-12 col-md-12",
  },
];
