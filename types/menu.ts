/** Single nav/menu item (used by mobile menu, side menu, desktop nav) */
export type MobileMenuItem = {
  label: string;
  href?: string;
  liClassName?: string;
  children?: MobileMenuItem[];
};
