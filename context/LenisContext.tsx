"use client";

import {
  createContext,
  useContext,
  useRef,
  type ReactNode,
  type MutableRefObject,
} from "react";
import type Lenis from "lenis";

type LenisRef = MutableRefObject<Lenis | null>;

const LenisContext = createContext<LenisRef | null>(null);

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}

export function useLenisRef(): LenisRef | null {
  return useContext(LenisContext);
}
