import Counter from "@/components/common/Counter";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import Testimonials1 from "@/components/testimonials/Testimonials1";
import Image from "next/image";

export default function TestimonialsSec() {
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
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/layers/mask.png"
                width={740}
                height={792}
              />
              <div className="title-area2">
                <div className="sec-title white">
                  <SubTitleWrapper>testimonials</SubTitleWrapper>
                  <TitleSplitWrapper
                    tag="h2"
                    className="title animated-heading"
                  >
                    Discover what our clients have to say about our AI solutions
                  </TitleSplitWrapper>
                </div>
                <div className="testi-count">
                  <h4>
                    <Counter max={250} />
                    <span className="counter-text">+</span>
                  </h4>
                  <span>Happy clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
