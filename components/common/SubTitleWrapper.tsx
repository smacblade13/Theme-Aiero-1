"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useSubTitleSplitContext } from "@/components/common/SubTitleSplitProvider";

interface SubTitleWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function SubTitleWrapper({
  children,
  className = "",
}: SubTitleWrapperProps) {
  const outerRef = useRef<HTMLSpanElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);
  const { registerSubTitle, unregisterSubTitle } = useSubTitleSplitContext();

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (outer && inner) {
      registerSubTitle(outer, inner);
      return () => unregisterSubTitle(outer);
    }
  }, [registerSubTitle, unregisterSubTitle]);

  const finalClassName = ["sub-title", className].filter(Boolean).join(" ");

  return (
    <span ref={outerRef} className={finalClassName}>
      <span ref={innerRef} className="sub-text">
        {children}
      </span>
    </span>
  );
}
