import Link from "next/link";

import VideoPopupButton from "@/components/common/VideoPopupButton";

export default function Hero() {
  return (
    <section className="hero-style1">
      <div className="hero-info">
        <div className="container-fluid">
          <div className="row end">
            <div className="col-lg-8">
              <div className="hero-title">
                <h1 className="gradient-title">
                  Unlocking the potential of <span>Neural Networks </span>
                  features
                </h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-content">
                <p>
                  Highlight the potential benefits of Neural Networks, such as
                  improved decision-making, predictive analytics, and
                  automation.
                </p>
                <Link
                  href={`/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                  className="ibt-btn ibt-btn-secondary"
                >
                  <span>Discover</span>
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
              Elevate your business with our innovative solutions
            </span>
            <h1 className="title2">Aiero</h1>
            <p>Creative solutions for your business</p>
            <VideoPopupButton videoUrl="https://www.youtube.com/embed/aircAruvnKk">
              <i className="fa fa-play" /> Watch Video
            </VideoPopupButton>
          </div>
        </div>
      </div>
    </section>
  );
}
