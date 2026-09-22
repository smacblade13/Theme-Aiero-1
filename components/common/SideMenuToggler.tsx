"use client ";
import { useUi } from "@/context/UiContext";

export default function SideMenuToggler({
  SideMenuTogglerClass = "menu-toggle",
}) {
  const { toggleSideNav } = useUi();
  return (
    <a href="#" className={SideMenuTogglerClass} onClick={toggleSideNav} />
  );
}
