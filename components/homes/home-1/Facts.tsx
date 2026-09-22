import Counter from "@/components/common/Counter";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

const facts = [
  {
    colClass: "col-lg-6 col-md-12 col-sm-12",
    contentClass: "black",
    prefix: "$",
    max: 75,
    suffix: "million",
    title: "Revenue Growth",
    description:
      "Generated over $50 million in additional revenue for our clients",
  },
  {
    colClass: "col-lg-3 col-md-6 col-sm-6",
    max: 97,
    extraClass: "percent-counter",
    suffix: "%",
    title: "Client Satisfaction",
    description: "97% client satisfaction rate across all marketing campaigns.",
  },
  {
    colClass: "col-lg-3 col-md-6 col-sm-6",
    max: 2000,
    extraClass: "percent-counter2",
    suffix: "+",
    title: "Conversion Rate",
    description:
      "Successfully managed and executed 2,000+ marketing campaigns.",
  },
];

export default function Facts() {
  return (
    <section className="fun-fact-sec ibt-section-gapTop">
      <div className="container">
        <div className="sec-title">
          <SubTitleWrapper>achievements</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            Notable accomplishments and key milestone
          </TitleSplitWrapper>
        </div>
        <div className="row">
          {facts.map((fact, i) => (
            <div key={i} className={fact.colClass}>
              <div
                className={`fun-fact-content${fact.contentClass ? ` ${fact.contentClass}` : ""}`}
              >
                <div className="counter-box">
                  {fact.prefix && (
                    <span className="counter-text">{fact.prefix}</span>
                  )}
                  <Counter max={fact.max} extraClass={fact.extraClass} />
                  <span className="counter-text">{fact.suffix}</span>
                </div>
                <span className="title">{fact.title}</span>
                <p>{fact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
