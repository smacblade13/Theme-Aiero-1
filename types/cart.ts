import type { ShopProductLike } from "./shop";

/** Cart line item (id + quantity only; product resolved elsewhere) */
export type CartItem = {
  productId: string;
  quantity: number;
};

/** Cart line item with product and line total (for display) */
export type PopulatedCartItem = {
  product: ShopProductLike;
  quantity: number;
  lineTotal: number;
};

export type CartState = {
  items: CartItem[];
};

export type CartAction =
  | { type: "HYDRATE"; items: CartItem[] }
  | { type: "ADD_ITEM"; productId: string; quantity: number }
  | { type: "UPDATE_QUANTITY"; productId: string; quantity: number }
  | { type: "REMOVE_ITEM"; productId: string }
  | { type: "CLEAR_CART" };

export type CartContextValue = {
  items: CartItem[];
  populatedItems: PopulatedCartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (productId: string, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};
