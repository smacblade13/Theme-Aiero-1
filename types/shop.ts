/** Shop product (main grid listing) */
export type ShopProduct = {
  id: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  price: string;
  oldPrice?: string;
  cardClassName?: string;
  contentClassName?: string;
  badgeText?: string;
  badgeClassName?: string;
  rating?: number;
};

/** Shop best/sidebar product (compact) */
export type ShopBestProduct = {
  id: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  price: string;
  rating: number;
};

/** Union of all product types used in shop/cart */
export type ShopProductLike = ShopProduct | ShopBestProduct;
