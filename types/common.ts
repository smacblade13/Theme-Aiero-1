import type { ReactNode } from "react";

/** Pagination component props */
export type PaginationProps = {
  totalPages: number;
  currentPage?: number;
  basePath: string;
  ulClassName?: string;
  nextLabel?: string;
};

/** Accordion item (question + answer) */
export type AccordionItem = {
  question: string;
  answer: ReactNode;
};

/** Custom cursor utility options */
export type CustomCursorOptions = {
  cursor: HTMLElement | null;
  blocks: HTMLElement[];
  container?: HTMLElement | null;
};

/** Force theme mode component (e.g. force dark on index15) */
export type ForceThemeModeProps = {
  mode: "dark" | "light";
};

/** Add to cart button props */
export type AddToCartButtonProps = {
  productId: string;
  className?: string;
  title?: string;
};
