import Image from "next/image";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { aboutIntroContent } from "@/data/pages/about";

export default function AboutIntro() {
  const { eyebrow, title, paragraphs } = aboutIntroContent;
  return (
    <section className="about-us-sec2 ibt-section-gap">
      <div className="container">
        {/* Top row: sec-title (eyebrow + large heading) on left, decorative mark on right */}
        <div className="row align-items-end" style={{ marginBottom: "60px" }}>
          <div className="col-lg-9">
            <div className="sec-title mb-0">
              <SubTitleWrapper>{eyebrow}</SubTitleWrapper>
              <TitleSplitWrapper tag="h2" className="title animated-heading">
                {title}
              </TitleSplitWrapper>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-end align-items-end">
            <Image
              src="/assets/images/about/aboutx.png"
              alt="Decorative mark"
              width={80}
              height={40}
              style={{ width: "80px", height: "auto" }}
            />
          </div>
        </div>

        {/* Bottom row: Aiero watermark text on left, paragraphs on right */}
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2
              className="style-text"
              aria-hidden="true"
              style={{
                marginBottom: 0,
                WebkitTextFillColor: "transparent",
                WebkitTextStroke: "1px #b7cfe4",
                background: "none",
                color: "transparent",
              }}
            >
              Aiero
            </h2>
          </div>
          <div className="col-lg-6">
            <div className="about-info2">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
