import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function About() {
  return (
    <section className="about-us-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="about-img">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/layers/person.png"
                width={805}
                height={1338}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-content">
              <h2 className="style-text">Neural Networks</h2>
              <div className="sec-title mb-0 white">
                <SubTitleWrapper>about</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Pioneers in artificial intelligence solutions and innovation
                </TitleSplitWrapper>
                <p>
                  At AiDo, we are a leading AI services provider dedicated to
                  delivering innovative solutions that leverage artificial
                  intelligence to transform businesses.
                </p>
                <p className="paragraph">
                  Our team of experts specializes in cutting-edge AI
                  technologies, offering customized strategies and
                  implementations to help you stay ahead in today&apos;s data-driven
                  world. Unlock the full potential of AI with XXLando, your
                  trusted partner in the future of intelligent technology
                </p>
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
      </div>
    </section>
  );
}
