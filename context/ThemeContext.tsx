"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

const THEME_STORAGE = "themeMode";
const DARK_STORAGE = "darkMode";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
  setDark: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

function applyToBody(isActive: boolean) {
  if (typeof document === "undefined") return;
  if (isActive) {
    document.body.classList.add("active-body", "dark-mode");
  } else {
    document.body.classList.remove("active-body", "dark-mode");
  }
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      isDark: false,
      toggleTheme: () => {},
      setDark: () => {},
    };
  }
  return context;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Apply stored preferences on mount; default dark (dark unless explicitly inactive)
  useEffect(() => {
    const stored = typeof localStorage !== "undefined" && localStorage.getItem(THEME_STORAGE) !== "inactive";
    applyToBody(stored);
    queueMicrotask(() => {
      setIsDark(stored);
      setMounted(true);
    });
  }, []);

  const toggleTheme = useCallback(() => {
    if (!mounted) return;
    const next = !isDark;
    setIsDark(next);
    applyToBody(next);
    localStorage.setItem(THEME_STORAGE, next ? "active" : "inactive");
    localStorage.setItem(DARK_STORAGE, next ? "enabled" : "disabled");
  }, [mounted, isDark]);

  const setDark = useCallback(
    (value: boolean) => {
      if (!mounted) return;
      setIsDark(value);
      applyToBody(value);
      localStorage.setItem(THEME_STORAGE, value ? "active" : "inactive");
      localStorage.setItem(DARK_STORAGE, value ? "enabled" : "disabled");
    },
    [mounted]
  );

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
