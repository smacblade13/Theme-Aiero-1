"use client";

import { useTheme } from "@/context/ThemeContext";
import { useUi } from "@/context/UiContext";

export default function ThemeButton() {
  const { isDark, toggleTheme } = useTheme();
  const { showModeSwitcher } = useUi();

  if (!showModeSwitcher) return null;

  return (
    <button
      id="themeBtn"
      type="button"
      onClick={toggleTheme}
      className={isDark ? "active-btn" : undefined}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <i className="far fa-moon" />
    </button>
  );
}
