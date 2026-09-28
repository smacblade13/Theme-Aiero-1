import Link from "next/link";

import VideoPopupButton from "@/components/common/VideoPopupButton";
import { heroContent } from "@/data/home1/hero";

export default function Hero() {
  const { titleLead, titleHighlight, titleTrail, subtitle, cta, video } =
    heroContent;

  return (
    <section className="hero-style1">
      <div className="hero-info">
        <div className="container-fluid">
          <div className="row end">
            <div className="col-lg-8">
              <div className="hero-title">
                <h1 className="gradient-title">
                  {titleLead}
                  <span>{titleHighlight}</span>
                  {titleTrail}
                </h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-content">
                <p>{subtitle}</p>
                <Link
                  href={cta.href}
                  className="ibt-btn ibt-btn-secondary"
                >
                  <span>{cta.label}</span>
                  <i className="icon-arrow-top" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-banner">
        <div className="container2">
          <div className="banner-content">
            <span className="sub-title" id="animatedHeading">
              {video.banner.subTitle}
            </span>
            <h1 className="title2">{video.banner.title}</h1>
            <p>{video.banner.caption}</p>
            <VideoPopupButton videoUrl={video.embedUrl}>
              <i className="fa fa-play" /> {video.banner.buttonLabel}
            </VideoPopupButton>
          </div>
        </div>
      </div>
    </section>
  );
}
