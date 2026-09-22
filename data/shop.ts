import type { ShopProduct, ShopBestProduct } from "@/types/shop";

export const shopProducts: ShopProduct[] = [
  {
    id: "bff-hoody",
    imageSrc: "/assets/images/event/shop1-1.png",
    imageWidth: 305,
    imageHeight: 314,
    title: "BFF Hoody",
    price: "32.50",
  },
  {
    id: "sneakers-blike",
    imageSrc: "/assets/images/event/shop1-2.png",
    imageWidth: 305,
    imageHeight: 314,
    title: "Sneakers Blike",
    price: "32.50",
    oldPrice: "180.99",
    badgeText: "SALE",
    badgeClassName: "tag",
  },
  {
    id: "stylish-white-jacket",
    imageSrc: "/assets/images/event/shop1-3.png",
    imageWidth: 305,
    imageHeight: 314,
    title: "Stylish white jacket",
    price: "149.99",
    cardClassName: "shop-card",
    contentClassName: "shop-content v2",
    badgeText: "NEW",
    badgeClassName: "tag v2",
    rating: 5,
  },
  {
    id: "tri-blemd-cret-tshirt",
    imageSrc: "/assets/images/event/shop1-4.png",
    imageWidth: 305,
    imageHeight: 314,
    title: "Tri blemd cret T-shirt",
    price: "5.99",
  },
  {
    id: "white-hoody",
    imageSrc: "/assets/images/event/shop1-5.png",
    imageWidth: 305,
    imageHeight: 314,
    title: "White Hoody",
    price: "0.10",
  },
  {
    id: "blue-dark-suit",
    imageSrc: "/assets/images/event/shop1-6.png",
    imageWidth: 305,
    imageHeight: 314,
    title: "Blue dark suit",
    price: "82.49",
  },
  {
    id: "perfect-black-boots",
    imageSrc: "/assets/images/event/shop1-7.png",
    imageWidth: 305,
    imageHeight: 314,
    title: "Perfect black boots",
    price: "170.99",
  },
  {
    id: "sport-jacket",
    imageSrc: "/assets/images/event/shop1-8.png",
    imageWidth: 305,
    imageHeight: 314,
    title: "Sport Jacket",
    price: "9.99",
  },
  {
    id: "sneakers-puama",
    imageSrc: "/assets/images/event/shop1-9.png",
    imageWidth: 305,
    imageHeight: 314,
    title: "Sneakers Puama",
    price: "150.99",
  },
];

export const shopBestProducts: ShopBestProduct[] = [
  {
    id: "sneakers-reddy-xl",
    imageSrc: "/assets/images/blog/post2-1.png",
    imageWidth: 75,
    imageHeight: 70,
    title: "Sneakers REDdy XL",
    price: "150.00",
    rating: 5,
  },
  {
    id: "evening-shoes",
    imageSrc: "/assets/images/blog/post2-2.png",
    imageWidth: 75,
    imageHeight: 70,
    title: "Evening shoes",
    price: "119.99",
    rating: 5,
  },
  {
    id: "jeans-shirt",
    imageSrc: "/assets/images/blog/post2-3.png",
    imageWidth: 75,
    imageHeight: 70,
    title: "Jeans shirt",
    price: "29.99",
    rating: 5,
  },
];

export const allShopProducts: (ShopProduct | ShopBestProduct)[] = [
  ...shopProducts,
  ...shopBestProducts,
];

export const shopSidebarServices: string[] = [
  "Network Integration",
  "Deep learning solutions",
  "Transfer learning",
  "Model evaluation",
  "Real-time prediction",
];

export const shopTags: string[] = [
  "Neural",
  "Chat GPT",
  "AI",
  "Robot",
  "Programing",
  "Neuro",
];
