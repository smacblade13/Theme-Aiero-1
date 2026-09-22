export type BlogGridPost = {
  id: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  meta: string;
  title: string;
  categoriesLabel: string;
  cardClassName?: string;
};

export type BlogClassicPost = {
  id: string;
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
  meta: string;
  title: string;
  excerpt: string;
  categoriesLabel: string;
  hasImage: boolean;
};

/** Blog card2 layout (home-2, home-8, home-13) */
export type BlogStyle2Post = {
  id: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  meta: string;
  tagLabels: string[];
  title: string;
  excerpt: string;
  cardClassName?: string;
};

/** Blog card3 layout (home-10 case study) */
export type BlogStyle3Post = {
  id: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  dateMonth: string;
  dateDay: string;
  tagLabels: string[];
  title: string;
};

/** Sidebar recent post (blog2, blog-single) */
export type BlogRecentPost = {
  id: string;
  imageSrc: string;
  date: string;
  title: string;
};

