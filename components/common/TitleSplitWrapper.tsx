"use client";
import {
  ReactNode,
  createElement,
  useLayoutEffect,
  useRef,
  forwardRef,
} from "react";
import { useTitleSplitContext } from "@/components/common/TitleSplitProvider";

interface TitleSplitWrapperProps {
  children: ReactNode;
  tag?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TitleSplitWrapper = forwardRef<HTMLElement, TitleSplitWrapperProps>(
  function TitleSplitWrapper(
    { children, tag = "div", className = "", style = {} },
    ref,
  ) {
    const elementRef = useRef<HTMLElement | null>(null);
    const { registerElement, unregisterElement } = useTitleSplitContext();

    useLayoutEffect(() => {
      const el = elementRef.current;
      if (!el) return;
      registerElement(el);
      if (ref) {
        if (typeof ref === "function") ref(el);
        else (ref as React.MutableRefObject<HTMLElement | null>).current = el;
      }
      return () => {
        unregisterElement(el);
        if (ref) {
          if (typeof ref === "function") ref(null);
          else (ref as React.MutableRefObject<HTMLElement | null>).current = null;
        }
      };
    }, [ref, registerElement, unregisterElement]);

    const finalClassName = className.includes("tmp-title-split")
      ? className
      : `${className} tmp-title-split`.trim();

    const props: Record<string, unknown> = {
      className: finalClassName,
      style,
    };
    Object.defineProperty(props, "ref", {
      get: () => elementRef,
      enumerable: true,
    });
    return createElement(tag, props, children);
  },
);

export default TitleSplitWrapper;
