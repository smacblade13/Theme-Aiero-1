import type { FaqsContent } from "@/types/home1";

export const faqsContent: FaqsContent = {
  eyebrow: "faq",
  title: "Everything you need to know about",
  image: {
    src: "/assets/images/layers/layer2.png",
    width: 647,
    height: 844,
  },
  cta: { label: "Explore More", href: "/services" },
  items: [
    {
      question: "What is Artificial Intelligence?",
      answer:
        "Artificial Intelligence (AI) is the branch of computer science that builds systems capable of performing tasks that normally require human intelligence — reasoning, perception, learning, and language understanding.",
    },
    {
      question: "How does Machine Learning relate to Artificial Intelligence?",
      answer:
        "Machine Learning is a subset of AI focused on algorithms that learn patterns from data and improve over time. It powers most modern AI systems, from recommendations to computer vision.",
    },
    {
      question: "Is Artificial Intelligence replacing human jobs?",
      answer:
        "AI automates specific tasks rather than whole professions. Most successful deployments augment human decision-making — freeing teams from repetitive work so they can focus on higher-value problems.",
    },
    {
      question: "What are the different types of Artificial Intelligence?",
      answer:
        "AI ranges from narrow (task-specific systems like image classifiers) to general (theoretical human-level reasoning). Modern products almost exclusively use narrow AI, often built on machine-learning or deep-learning models.",
    },
  ],
};
