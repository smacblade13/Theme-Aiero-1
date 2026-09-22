"use client";
import { useUi } from "@/context/UiContext";

export default function SearchToggler() {
  const { openSearch } = useUi();
  return (
    <a href="#" className="popup-search" data-popup={1} onClick={openSearch}>
      <i className="fa fa-search" />
    </a>
  );
}
