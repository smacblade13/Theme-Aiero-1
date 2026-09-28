import type { TestimonialsContent } from "@/types/home1";

export const testimonialsContent: TestimonialsContent = {
  eyebrow: "testimonials",
  title: "Discover what our clients have to say about our AI solutions",
  happyClientsLabel: "Happy clients",
  happyClientsCount: 250,
  maskImage: {
    src: "/assets/images/layers/mask.png",
    width: 740,
    height: 792,
  },
  items: [
    {
      id: "t1",
      quote:
        "Working with Aiero has been a game-changer for our business. Their AI solutions have revolutionized our operations, enabling us to automate repetitive tasks and make data-driven decisions with ease.",
      author: "— John Anderson, CEO of XYZ Company",
    },
    {
      id: "t2",
      quote:
        "The Aiero team delivered a bespoke predictive model in half the time our previous vendor quoted. Onboarding was seamless and the accuracy uplift is already showing in our quarterly numbers.",
      author: "— Priya Menon, Head of Data at Northwind",
    },
    {
      id: "t3",
      quote:
        "From strategy to production, Aiero felt like an in-house team. They understood our domain constraints and shipped a robust, well-documented deployment we can actually maintain.",
      author: "— Marcus Lee, CTO at BlueGrid",
    },
  ],
};
