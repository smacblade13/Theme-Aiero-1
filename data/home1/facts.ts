import type { FactsContent } from "@/types/home1";

export const factsContent: FactsContent = {
  eyebrow: "achievements",
  title: "Notable accomplishments and key milestones",
  items: [
    {
      colClass: "col-lg-6 col-md-12 col-sm-12",
      contentClass: "black",
      prefix: "$",
      max: 75,
      suffix: "million",
      title: "Revenue Growth",
      description:
        "Generated over $50 million in additional revenue for our clients.",
    },
    {
      colClass: "col-lg-3 col-md-6 col-sm-6",
      max: 97,
      extraClass: "percent-counter",
      suffix: "%",
      title: "Client Satisfaction",
      description:
        "97% client satisfaction rate across all marketing campaigns.",
    },
    {
      colClass: "col-lg-3 col-md-6 col-sm-6",
      max: 2000,
      extraClass: "percent-counter2",
      suffix: "+",
      title: "Conversion Rate",
      description:
        "Successfully managed and executed 2,000+ marketing campaigns.",
    },
  ],
};
