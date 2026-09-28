import Counter from "@/components/common/Counter";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { factsContent } from "@/data/home1/facts";

export default function Facts() {
  const { eyebrow, title, items } = factsContent;
  return (
    <section className="fun-fact-sec ibt-section-gapTop">
      <div className="container">
        <div className="sec-title">
          <SubTitleWrapper>{eyebrow}</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            {title}
          </TitleSplitWrapper>
        </div>
        <div className="row">
          {items.map((fact, i) => (
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
