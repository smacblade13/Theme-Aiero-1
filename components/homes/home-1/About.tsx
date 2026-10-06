import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { aboutContent } from "@/data/home1/about";

export default function About() {
  const { styleText, eyebrow, title, paragraphs, cta, image } = aboutContent;
  return (
    <section className="about-us-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-5" style={{ minHeight: "500px" }}>
            <div className="about-img">
              <Image
                alt={image.alt}
                src={image.src}
                width={image.width}
                height={image.height}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-content">
              <h2 className="style-text">{styleText}</h2>
              <div className="sec-title mb-0 white">
                <SubTitleWrapper>{eyebrow}</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  {title}
                </TitleSplitWrapper>
                {paragraphs.map((paragraph, i) => (
                  <p key={i} className={i > 0 ? "paragraph" : undefined}>
                    {paragraph}
                  </p>
                ))}
                <Link href={cta.href} className="ibt-btn ibt-btn-outline">
                  <span>{cta.label}</span>
                  <i className="icon-arrow-top" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
