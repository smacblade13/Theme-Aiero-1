import type { FaqsContent } from "@/types/home1";

export const faqsContent: FaqsContent = {
  eyebrow: "faq",
  title: "Everything you need to know about",
  image: {
    src: "/assets/images/about/elements-1.png",
    width: 647,
    height: 844,
  },
  cta: { label: "Explore More", href: "/services" },
  items: [
    {
      question: "What is Artificial Intelligence?",
      answer:
        "Artificial Intelligence (AI) is the branch of computer science that builds systems capable of performing tasks that normally require human intelligence — reasoning, perception, learning, and language understanding. From recognising speech to analysing medical scans, AI systems are trained on large datasets to find patterns and make decisions with minimal human intervention.\n\nAt its core, AI is about creating machines that can adapt and improve. Unlike traditional software that follows fixed rules, modern AI models learn from experience, meaning they get more accurate and capable the more data they process. This makes AI a transformative force across virtually every industry — from finance and healthcare to marketing and logistics.",
    },
    {
      question: "How does Machine Learning relate to Artificial Intelligence?",
      answer:
        "Machine Learning (ML) is a subset of AI focused on algorithms that learn patterns from data and continuously improve over time without being explicitly reprogrammed. It powers most modern AI applications — from personalised recommendations and fraud detection to computer vision and predictive analytics.\n\nRather than relying on hand-crafted rules, ML models identify statistical relationships in training data and generalise them to new inputs. Deep learning, a further subset of ML, uses multi-layered neural networks to tackle especially complex tasks like image recognition, natural language understanding, and autonomous decision-making — forming the backbone of today's most powerful AI products.",
    },
    {
      question: "Is Artificial Intelligence replacing human jobs?",
      answer:
        "AI automates specific tasks rather than whole professions. Most successful deployments augment human decision-making — freeing teams from repetitive, time-consuming work so they can focus on creative strategy, relationship-building, and higher-value problem solving. Studies consistently show that organisations using AI see productivity gains alongside workforce growth, not reduction.\n\nThe more nuanced reality is that AI shifts the nature of work. Roles evolve to require new skills — prompt engineering, model oversight, data curation, and ethical governance — creating a growing demand for people who can work alongside intelligent systems. Businesses that invest in AI literacy today position their teams to thrive as the technology matures.",
    },
    {
      question: "What are the different types of Artificial Intelligence?",
      answer:
        "AI is typically categorised by capability: narrow AI handles a single well-defined task (image classification, language translation, fraud scoring), while general AI — still largely theoretical — would match human-level reasoning across any domain. Virtually every commercial AI product today is narrow AI, built on machine-learning or deep-learning foundations.\n\nWithin narrow AI, there are further distinctions worth knowing: supervised learning models are trained on labelled examples, unsupervised models find hidden structure in unlabelled data, and reinforcement learning agents optimise behaviour through reward signals. Generative AI — the technology behind large language models and image generators — adds the ability to create new content, making it one of the most impactful categories to emerge in recent years.",
    },
  ],
};
