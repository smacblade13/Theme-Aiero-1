import Image from "next/image";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import { aboutIntroContent } from "@/data/pages/about";

export default function AboutIntro() {
  const { eyebrow, title } = aboutIntroContent;
  return (
    <section className="about-us-sec2 ibt-section-gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content2">
              <p className="sub-title">[ {eyebrow} ]</p>
              <TitleSplitWrapper tag="h2" className="title animated-heading">
                {title}
              </TitleSplitWrapper>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-img" style={{ position: "relative", borderRadius: "25px", overflow: "hidden" }}>
              <Image
                src="/assets/images/about/elements-1.png"
                alt="About Aiero"
                width={647}
                height={844}
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "25px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
