import Link from "next/link";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

type Crumb = { label: string; href?: string };

type PageHeaderProps = {
  title: string;
  eyebrow?: string;
  intro?: string;
  breadcrumbs?: Crumb[];
};

export default function PageHeader({
  title,
  eyebrow,
  intro,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="page-banner">
      <div className="container">
        <div className="page-content">
          {eyebrow && <SubTitleWrapper>{eyebrow}</SubTitleWrapper>}
          <TitleSplitWrapper tag="h1" className="title animated-heading">
            {title}
          </TitleSplitWrapper>
          {intro && <p className="page-banner-intro">{intro}</p>}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="page-banner-breadcrumbs">
              <ol>
                {breadcrumbs.map((crumb, index) => {
                  const isLast = index === breadcrumbs.length - 1;
                  return (
                    <li
                      key={crumb.label}
                      aria-current={isLast ? "page" : undefined}
                    >
                      {crumb.href && !isLast ? (
                        <Link href={crumb.href}>{crumb.label}</Link>
                      ) : (
                        <span>{crumb.label}</span>
                      )}
                      {!isLast && <span aria-hidden> / </span>}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
