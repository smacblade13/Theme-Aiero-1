/** Feature card (icon + title + description) - Features.tsx, feature-sec1 */
export type FeatureItem = {
  id: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  description: string;
  cardClassName?: string;
};

/** Feature card10 - Features2.tsx, 8 cards */
export type FeatureItem10 = {
  id: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  description: string;
};

/** Feature card style2 - home-2 Features (first card v1, different images) */
export type FeatureItemStyle2 = {
  id: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  description: string;
  cardClassName?: string;
};

/** Feature card7 - home-8 FeatureSec7 */
export type FeatureItem7 = {
  id: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  description: string;
  contentClassName?: string;
};
