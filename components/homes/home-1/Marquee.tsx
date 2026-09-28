import { marqueeContent } from "@/data/home1/marquee";

export default function Marquee() {
  return (
    <section className="marquee-sec ibt-section-gapTop">
      <h2 style={{ display: "none" }}>Marquee Section</h2>
      <div className="marquee">
        <div className="marquee-inner">
          <span>{marqueeContent.text}</span>
          <span>{marqueeContent.text}</span>
        </div>
      </div>
    </section>
  );
}
