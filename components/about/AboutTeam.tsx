import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import Counter from "@/components/common/Counter";
import { aboutTeamContent } from "@/data/pages/about";

type Member = (typeof aboutTeamContent.members)[number];

function TeamCard({ member }: { member: Member }) {
  return (
    <div className={`team-card ${member.vClass}`}>
      <div className="team-img">
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={420}
        />
        <span className="sub-title">{member.tag}</span>
        <div className="team-shap" />
      </div>
      <div className="team-content">
        <div className="share-box">
          <div className="share-icon">
            <i className="fas fa-share-alt" />
          </div>
          <ul className="social-links">
            <li>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
        <h4 className="name">
          <a href="#">{member.name}</a>
        </h4>
        <span className="designation">{member.role}</span>
      </div>
    </div>
  );
}

export default function AboutTeam() {
  const { eyebrow, title, counter, cta, members } = aboutTeamContent;
  const [first, second, ...rest] = members;

  return (
    <section className="team-section ibt-section-gap">
      <div className="container">
        <div className="row align-items-stretch">
          {/* Left: info — stretches full column height */}
          <div className="col-lg-6 d-flex">
            <div className="team-info d-flex flex-column justify-content-between" style={{ width: "100%" }}>
              <div className="sec-title">
                <SubTitleWrapper>{eyebrow}</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  {title}
                </TitleSplitWrapper>
              </div>
              <div>
                <div className="team-counter">
                  <div className="counter-box8">
                    <span className="counter-text">+</span>
                    <Counter max={500} />
                  </div>
                  <span className="title">{counter.label}</span>
                </div>
                <Link href={cta.href} className="ibt-btn ibt-btn-outline">
                  <span>{cta.label}</span>
                  <i className="icon-arrow-top" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: first two cards side by side */}
          <div className="col-lg-6">
            <div className="team-member">
              <div className="row">
                <div className="col-sm-6">{first && <TeamCard member={first} />}</div>
                <div className="col-sm-6">{second && <TeamCard member={second} />}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: 3 cards offset right so they align under the top-right pair, not under "Explore more" */}
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-lg-9 offset-lg-3">
            <div className="row">
              {rest.map((member, i) => (
                <div key={i} className="col-md-4 col-sm-6">
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
