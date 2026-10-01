import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import Accordion from "@/components/common/Accordion";
import { faqsContent } from "@/data/home1/faqs";

export default function Faqs() {
  const { eyebrow, title, image, cta, items } = faqsContent;
  return (
    <section className="faq-sec ibt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="faq-img"
              style={{
                transform: "translateX(-160px) translateY(-300px)",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                alt="Decorative layer"
                src={image.src}
                width={image.width}
                height={image.height}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="faq-content">
              <div className="sec-title">
                <SubTitleWrapper>{eyebrow}</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  {title}
                </TitleSplitWrapper>
              </div>
              <Accordion items={items} accordionId="accordionExample" />
              <Link href={cta.href} className="ibt-btn ibt-btn-outline">
                <span>{cta.label}</span>
                <i className="icon-arrow-top" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
