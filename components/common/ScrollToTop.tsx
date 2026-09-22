"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { useLenisRef } from "@/context/LenisContext";

gsap.registerPlugin(ScrollToPlugin);

const SCROLL_THRESHOLD = 200;

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenisRef = useLenisRef();
  const [visible, setVisible] = useState(false);

  // Scroll to top on route change → instant (no animation)
  useEffect(() => {
    const lenis = lenisRef?.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname, lenisRef]);

  // Show/hide button
  useEffect(() => {
    const updateFromWindow = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    updateFromWindow();
    window.addEventListener("scroll", updateFromWindow, { passive: true });

    let lenisOff: (() => void) | undefined;
    const timerId = setTimeout(() => {
      const lenis = lenisRef?.current;
      if (lenis) {
        const onScroll = ({ scroll }: { scroll: number }) => {
          setVisible(scroll > SCROLL_THRESHOLD);
        };
        lenis.on("scroll", onScroll);
        lenisOff = () => lenis.off("scroll", onScroll);
      }
    }, 150);

    return () => {
      window.removeEventListener("scroll", updateFromWindow);
      clearTimeout(timerId);
      lenisOff?.();
    };
  }, [lenisRef]);

  // Button click → smooth scroll
  const handleClick = useCallback(() => {
    const lenis = lenisRef?.current;

    if (lenis) {
      // Let Lenis handle smooth scroll natively
      lenis.scrollTo(0, {
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
      });
    } else {
      // Fallback: GSAP ScrollToPlugin when Lenis is unavailable
      gsap.to(window, {
        scrollTo: { y: 0 },
        duration: 1.2,
        ease: "power3.out",
      });
    }
  }, [lenisRef]);

  return (
    <button
      type="button"
      title="Go to top"
      id="scrollBtn"
      aria-label="Scroll to top"
      onClick={handleClick}
      style={{ display: visible ? "block" : "none" }}
    >
      <i className="fas fa-angle-up" aria-hidden />
    </button>
  );
}
