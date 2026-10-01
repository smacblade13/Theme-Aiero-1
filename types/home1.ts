export type LinkRef = { label: string; href: string };

export type SectionHeader = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export type HeroContent = {
  eyebrow?: string;
  titleLead: string;
  titleHighlight: string;
  titleTrail?: string;
  subtitle: string;
  cta: LinkRef;
  video: {
    banner: {
      subTitle: string;
      title: string;
      caption: string;
      buttonLabel: string;
    };
    embedUrl: string;
  };
};

export type BrandsContent = {
  headline: {
    lead: string;
    highlight: string;
    trail?: string;
  };
  layerImage: string;
  logos: BrandLogo[];
};

export type BrandLogo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type MarqueeContent = {
  text: string;
};

export type ServicesSectionContent = SectionHeader & {
  ctaCopy: string;
  cta: LinkRef;
};

export type Services2Item = {
  id: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  bullets: string[];
};

export type FeaturesSectionContent = SectionHeader;

export type AboutContent = {
  styleText: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  cta: LinkRef;
  image: { src: string; width: number; height: number; alt: string };
};

export type Fact = {
  colClass: string;
  contentClass?: string;
  prefix?: string;
  max: number;
  extraClass?: string;
  suffix: string;
  title: string;
  description: string;
};

export type FactsContent = SectionHeader & { items: Fact[] };

export type Testimonial = {
  id: string;
  icon: string;
  quote: string;
  author: string;
};

export type TestimonialsContent = SectionHeader & {
  happyClientsLabel: string;
  happyClientsCount: number;
  maskImage: { src: string; width: number; height: number };
  items: Testimonial[];
};

export type FaqsContent = SectionHeader & {
  image: { src: string; width: number; height: number };
  cta: LinkRef;
  items: { question: string; answer: string }[];
};

export type BlogsSectionContent = SectionHeader & { cta: LinkRef };

export type PartnersContent = SectionHeader & { logos: BrandLogo[] };
