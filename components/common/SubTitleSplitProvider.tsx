"use client";

import {
  createContext,
  useContext,
  useRef,
  ReactNode,
  useEffect,
  useCallback,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type SubTitleEntry = { outer: HTMLElement; inner: HTMLElement };

interface SubTitleSplitContextType {
  registerSubTitle: (outer: HTMLElement, inner: HTMLElement) => void;
  unregisterSubTitle: (outer: HTMLElement) => void;
}

const SubTitleSplitContext = createContext<SubTitleSplitContextType | null>(null);

export function useSubTitleSplitContext() {
  const context = useContext(SubTitleSplitContext);
  return (
    context || {
      registerSubTitle: () => {},
      unregisterSubTitle: () => {},
    }
  );
}

export default function SubTitleSplitProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const entriesRef = useRef<Map<HTMLElement, SubTitleEntry>>(new Map());
  const initializedRef = useRef<Set<HTMLElement>>(new Set());
  const tweensRef = useRef<Map<HTMLElement, gsap.core.Tween>>(new Map());
  const [entryCount, setEntryCount] = useState(0);

  const registerSubTitle = useCallback(
    (outer: HTMLElement, inner: HTMLElement) => {
      if (outer && inner && !entriesRef.current.has(outer)) {
        entriesRef.current.set(outer, { outer, inner });
        setEntryCount(entriesRef.current.size);
      }
    },
    [],
  );

  const unregisterSubTitle = useCallback((outer: HTMLElement) => {
    const tween = tweensRef.current.get(outer);
    if (tween) {
      tween.kill();
      tweensRef.current.delete(outer);
    }
    entriesRef.current.delete(outer);
    initializedRef.current.delete(outer);
    setEntryCount(entriesRef.current.size);
  }, []);

  // Reset subtitle animations on route change so they can replay
  useEffect(() => {
    initializedRef.current.forEach((outer) => {
      const tween = tweensRef.current.get(outer);
      if (tween) {
        tween.kill();
        tweensRef.current.delete(outer);
      }
    });
    initializedRef.current.clear();
  }, [pathname]);

  useEffect(() => {
    const entries = Array.from(entriesRef.current.values()).filter(
      ({ outer }) => !initializedRef.current.has(outer),
    );

    entries.forEach(({ outer, inner }) => {
      if (!inner.textContent?.trim()) return;

      gsap.set(inner, {
        width: 1,
        display: "inline-block",
        overflow: "hidden",
      });

      const trigger = outer.parentElement;
      if (!trigger) return;

      const tween = gsap.to(inner, {
        width: inner.scrollWidth,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
      tweensRef.current.set(outer, tween);
      initializedRef.current.add(outer);
    });

    ScrollTrigger.refresh();
  }, [pathname, entryCount]);

  return (
    <SubTitleSplitContext.Provider
      value={{ registerSubTitle, unregisterSubTitle }}
    >
      {children}
    </SubTitleSplitContext.Provider>
  );
}
