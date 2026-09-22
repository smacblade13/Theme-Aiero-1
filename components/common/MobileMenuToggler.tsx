"use client";
import { useUi } from "@/context/UiContext";

export default function MobileMenuToggler() {
  const { openMobileMenu } = useUi();
  return (
    <button
      className="hamburger popup-menu"
      data-menu="mobileMenu"
      onClick={openMobileMenu}
    >
      <span />
      <span />
      <span />
    </button>
  );
}
