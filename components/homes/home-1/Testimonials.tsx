import Counter from "@/components/common/Counter";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import Testimonials1 from "@/components/testimonials/Testimonials1";
import Image from "next/image";

import { testimonialsContent } from "@/data/home1/testimonials";

export default function TestimonialsSec() {
  const { eyebrow, title, happyClientsLabel, happyClientsCount, maskImage } =
    testimonialsContent;
  return (
    <section className="testimonials-sec ibt-section-gapTop">
      <div className="container2">
        <div className="row">
          <div className="col-lg-7">
            <Testimonials1 />
          </div>
          <div className="col-lg-5">
            <div className="testimonial-content">
              <Image
                alt="Decorative mask"
                src={maskImage.src}
                width={maskImage.width}
                height={maskImage.height}
              />
              <div className="title-area2">
                <div className="sec-title white">
                  <SubTitleWrapper>{eyebrow}</SubTitleWrapper>
                  <TitleSplitWrapper
                    tag="h2"
                    className="title animated-heading"
                  >
                    {title}
                  </TitleSplitWrapper>
                </div>
                <div className="testi-count">
                  <h4>
                    <Counter max={happyClientsCount} />
                    <span className="counter-text">+</span>
                  </h4>
                  <span>{happyClientsLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
