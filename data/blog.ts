import type {
  BlogGridPost,
  BlogClassicPost,
  BlogStyle2Post,
  BlogStyle3Post,
  BlogRecentPost,
} from "@/types/blog";

export const blogGridPosts: BlogGridPost[] = [
  {
    id: "blog1-1",
    imageSrc: "/assets/images/blog/blog1-1.png",
    imageWidth: 420,
    imageHeight: 314,
    meta: "24 AUG. 2024 / Ann Miller",
    title:
      "How can I get started with Artificial Intelligence for my business?",
    categoriesLabel: "/ AI / Business /",
    cardClassName: "blog-card",
  },
  {
    id: "blog1-2",
    imageSrc: "/assets/images/blog/blog1-2.png",
    imageWidth: 420,
    imageHeight: 314,
    meta: "24 AUG. 2024 / Ann Miller",
    title:
      "AI and Robotics: Advancing Automation and Human-Robot Collaboration",
    categoriesLabel: "/ AI / Business /",
    cardClassName: "blog-card",
  },
  {
    id: "blog1-3",
    imageSrc: "/assets/images/blog/blog1-3.png",
    imageWidth: 420,
    imageHeight: 314,
    meta: "24 AUG. 2024 / Ann Miller",
    title: "How Natural Language Processing is revolutionizing Text Analysis",
    categoriesLabel: "/ AI / Business /",
    cardClassName: "blog-card mb-0",
  },
  {
    id: "blog1-4",
    imageSrc: "/assets/images/blog/blog1-4.png",
    imageWidth: 420,
    imageHeight: 314,
    meta: "24 AUG. 2024 / Ann Miller",
    title: "The Role of AI in Climate Action and Environmental Sustainability",
    categoriesLabel: "/ AI / Business /",
    cardClassName: "blog-card",
  },
  {
    id: "blog1-5",
    imageSrc: "/assets/images/blog/blog1-5.png",
    imageWidth: 420,
    imageHeight: 314,
    meta: "24 AUG. 2024 / Ann Miller",
    title:
      "Understanding Neural Networks: The Backbone of Artificial Intelligence",
    categoriesLabel: "/ AI / Neural Networks /",
    cardClassName: "blog-card",
  },
  {
    id: "blog1-6",
    imageSrc: "/assets/images/blog/blog1-6.png",
    imageWidth: 420,
    imageHeight: 314,
    meta: "24 AUG. 2024 / Ann Miller",
    title: "How Natural Language Processing is Shaping Modern Communication",
    categoriesLabel: "/ AI / Business /",
    cardClassName: "blog-card",
  },
  {
    id: "blog1-10",
    imageSrc: "/assets/images/blog/blog1-10.png",
    imageWidth: 420,
    imageHeight: 314,
    meta: "24 AUG. 2024 / Ann Miller",
    title: "How AI Can Boost Your Marketing Strategy with Personalization",
    categoriesLabel: "/ AI / Business /",
    cardClassName: "blog-card",
  },
  {
    id: "blog1-8",
    imageSrc: "/assets/images/blog/blog1-8.png",
    imageWidth: 420,
    imageHeight: 314,
    meta: "24 AUG. 2024 / Ann Miller",
    title: "Computer Vision and Its Real-World Applications in Industry",
    categoriesLabel: "/ AI / Neural Networks /",
    cardClassName: "blog-card",
  },
  {
    id: "blog1-9",
    imageSrc: "/assets/images/blog/blog1-9.png",
    imageWidth: 420,
    imageHeight: 314,
    meta: "24 AUG. 2024 / Ann Miller",
    title: "Building Ethical AI: Navigating Challenges in Machine Learning",
    categoriesLabel: "/ AI / Business /",
    cardClassName: "blog-card",
  },
];

export const blogClassicPosts: BlogClassicPost[] = [
  {
    id: "classic-1",
    imageSrc: "/assets/images/blog/blog4-1.png",
    imageWidth: 996,
    imageHeight: 474,
    meta: "24 AUG. 2024 / Ann Miller",
    title: "Is Artificial Intelligence accessible to businesses of all sizes",
    excerpt:
      "Yes, AI solutions are becoming increasingly accessible to businesses .",
    categoriesLabel: "/ AI / Business /",
    hasImage: true,
  },
  {
    id: "classic-2",
    meta: "15 Apr. 2023 / Tim Taylor",
    title:
      "The role of Artificial Intelligence in healthcare: Improving patient care",
    excerpt:
      "At our company, we specialize in providing comprehensive neural network services that can revolutionize your business. Whether you're looking to enhance your data analysis capabilities, automate repetitive tasks.",
    categoriesLabel: "/ AI / Business /",
    hasImage: false,
  },
  {
    id: "classic-3",
    imageSrc: "/assets/images/blog/blog4-3.png",
    imageWidth: 996,
    imageHeight: 474,
    meta: "24 AUG. 2024 / Ann Miller",
    title:
      "Ethical considerations in Artificial Intelligence: Building responsible AI systems",
    excerpt:
      "Deployment and Iteration: After the model has been validated and meets the desired performance criteria, it can be deployed in real-world applications.",
    categoriesLabel: "/ AI / Business /",
    hasImage: true,
  },
];

/** First 3 posts for home blog sections (blog-card) */
export const blogSectionPosts = blogGridPosts.slice(0, 3);

export const blogStyle2Posts: BlogStyle2Post[] = [
  {
    id: "style2-1",
    imageSrc: "/assets/images/blog/blog2-1.png",
    imageWidth: 338,
    imageHeight: 253,
    meta: "24 AUG. 2024 / Ann Miller",
    tagLabels: ["AI Solutions", "AI Solutions"],
    title:
      "The Role of AI in Predictive Analytics: Transforming Data into Actionable Insights",
    excerpt:
      "How AI is being used to provide personalized shopping experiences and improve customer satisfaction",
    cardClassName: "blog-card2",
  },
  {
    id: "style2-2",
    imageSrc: "/assets/images/blog/blog2-2.png",
    imageWidth: 338,
    imageHeight: 253,
    meta: "24 AUG. 2024 / Ann Miller",
    tagLabels: ["AI Solutions", "AI Solutions"],
    title:
      "Understanding Machine Learning: A Beginner's Guide to AI Algorithms",
    excerpt:
      "How AI is being used to provide personalized shopping experiences and improve customer satisfaction",
    cardClassName: "blog-card2 mb-0",
  },
];

export const blogStyle3Posts: BlogStyle3Post[] = [
  {
    id: "style3-1",
    imageSrc: "/assets/images/blog/blog3-1.png",
    imageWidth: 606,
    imageHeight: 320,
    dateMonth: "Jan / 25",
    dateDay: "05",
    tagLabels: ["Solutions", "Urban"],
    title: "Predictive maintenance for manufacturing",
  },
  {
    id: "style3-2",
    imageSrc: "/assets/images/blog/blog3-2.png",
    imageWidth: 606,
    imageHeight: 320,
    dateMonth: "Jan / 25",
    dateDay: "14",
    tagLabels: ["Solutions", "Urban"],
    title: "Personalized learning platforms for education",
  },
];

/** Sidebar recent posts (blog2, blog-single) */
export const blogRecentPosts: BlogRecentPost[] = [
  {
    id: "recent-1",
    imageSrc: "/assets/images/blog/post1-1.png",
    date: "15 Apr. 2023",
    title: "How Natural language processing",
  },
  {
    id: "recent-2",
    imageSrc: "/assets/images/blog/post1-2.png",
    date: "15 Apr. 2023",
    title: "The role of AI in healthcare",
  },
  {
    id: "recent-3",
    imageSrc: "/assets/images/blog/post1-3.png",
    date: "15 Apr. 2023",
    title: "Enhancing image recognition with AI",
  },
];

export type Home15Blog = {
  date: string;
  month: string;
  author: string;
  category: string;
  title: string;
};

export const home15Blogs: Home15Blog[] = [
  {
    date: "20",
    month: "January’ 23",
    author: "Anserson silva",
    category: "Technology",
    title: "Our approach to AI safety",
  },
  {
    date: "15",
    month: "February ’ 23",
    author: "Sam Peters",
    category: "Bloging",
    title: "Announcing OpenAI’s Bug Bounty Program",
  },
  {
    date: "21",
    month: "March ’ 23",
    author: "Ann Miller",
    category: "Science",
    title: "March 20 ChatGPT outage: Here’s what happened",
  },
];
