"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

import { useLenisRef } from "@/context/LenisContext";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useLenisRef();

  useEffect(() => {
    // Disable Lenis on touch/mobile devices to avoid conflicts
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.userAgent.toLowerCase().includes("mobile"));

    if (isTouchDevice) {
      if (lenisRef) lenisRef.current = null;
      return;
    }

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    if (lenisRef) lenisRef.current = lenis;

    let frameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      if (lenisRef) lenisRef.current = null;
      lenis.destroy();
    };
  }, [lenisRef]);

  return <>{children}</>;
}
