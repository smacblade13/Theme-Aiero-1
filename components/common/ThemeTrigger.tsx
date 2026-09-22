"use client";

import { cloneElement, isValidElement, type ReactElement } from "react";
import { useTheme } from "@/context/ThemeContext";

type ThemeTriggerProps = {
  children: ReactElement;
};

/**
 * Wraps a single child (e.g. Link) and on click prevents default and toggles theme.
 * Use for elements with class darkModeTrigger, darkModeTriggerImg, darkModeTriggerImg2.
 */
export default function ThemeTrigger({ children }: ThemeTriggerProps) {
  const { toggleTheme } = useTheme();

  if (!isValidElement(children)) return children;

  const child = children as ReactElement<{
    onClick?: (e: React.MouseEvent) => void;
  }>;
  return cloneElement(child, {
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      toggleTheme();
      child.props.onClick?.(e);
    },
  });
}
