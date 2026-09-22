import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import Accordion from "@/components/common/Accordion";

const faqItems = [
  {
    question: "What is Artificial Intellegance?",
    answer:
      "Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions, and adapt to new information.",
  },
  {
    question: "How does Machine Learning relate to Artificial Intelligence?",
    answer:
      "Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions, and adapt to new information.",
  },
  {
    question: "Is Artificial Intelligence replacing human jobs?",
    answer:
      "Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions, and adapt to new information.",
  },
  {
    question: "What are the different types of Artificial Intelligence?",
    answer:
      "Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions, and adapt to new information.",
  },
];

export default function Faqs() {
  return (
    <section className="faq-sec ibt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="faq-img">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/layers/layer2.png"
                width={647}
                height={844}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="faq-content">
              <div className="sec-title">
                <SubTitleWrapper>faq</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Everything you need to know about
                </TitleSplitWrapper>
              </div>
              <Accordion items={faqItems} accordionId="accordionExample" />
              <Link
                href={`/service`}
                title=""
                className="ibt-btn ibt-btn-outline"
              >
                <span>Explore More</span>
                <i className="icon-arrow-top" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
