import Link from "next/link";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import Services2 from "@/components/services/Services2";
import { servicesSectionContent } from "@/data/home1/services";

export default function Services() {
  const { eyebrow, title, ctaCopy, cta } = servicesSectionContent;
  return (
    <section className="service-sec">
      <div className="container">
        <div className="title-area">
          <div className="row end">
            <div className="col-xl-6 col-lg-12">
              <div className="sec-title mb-0">
                <SubTitleWrapper>{eyebrow}</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  {title}
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="sec-btn-box">
                <p>{ctaCopy}</p>
                <Link href={cta.href} className="ibt-btn ibt-btn-outline">
                  <span>{cta.label}</span>
                  <i className="icon-arrow-top" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Services2 />
        </div>
      </div>
    </section>
  );
}
