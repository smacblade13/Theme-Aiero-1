import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import Features from "@/components/features/Features";
import { featuresSectionContent } from "@/data/home1/features";

export default function FeaturesSec() {
  const { eyebrow, title } = featuresSectionContent;
  return (
    <section className="feature-sec1 ibt-section-gap">
      <div className="container">
        <div className="sec-title">
          <SubTitleWrapper>{eyebrow}</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            {title}
          </TitleSplitWrapper>
        </div>
        <div className="row">
          <Features />
        </div>
      </div>
    </section>
  );
}
