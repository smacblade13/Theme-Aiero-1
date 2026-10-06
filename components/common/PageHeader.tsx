import React from "react";
import Link from "next/link";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

type Crumb = { label: string; href?: string };

type PageHeaderProps = {
  title: string;
  eyebrow?: string;
  intro?: string;
  breadcrumbs?: Crumb[];
  staffText?: string;
  bannerClass?: string;
};

export default function PageHeader({
  title,
  eyebrow,
  intro,
  breadcrumbs,
  staffText,
  bannerClass = "page-banner",
}: PageHeaderProps) {
  return (
    <section className={`${bannerClass} shape shape3`}>
      <div className="container">
        <div className="page-content">
          {eyebrow && <SubTitleWrapper>{eyebrow}</SubTitleWrapper>}
          <TitleSplitWrapper tag="h1" className="title animated-heading">
            {title}
          </TitleSplitWrapper>
          {intro && <p>{intro}</p>}
        </div>
      </div>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <ul className="breadcrumbs">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.label}>
                <li>
                  {crumb.href && !isLast ? (
                    <Link href={crumb.href}>{crumb.label}</Link>
                  ) : (
                    crumb.label
                  )}
                </li>
                {!isLast && <li className="items">/</li>}
              </React.Fragment>
            );
          })}
        </ul>
      )}
      {staffText && <span className="staff-text">{staffText}</span>}
    </section>
  );
}
