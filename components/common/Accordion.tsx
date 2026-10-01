"use client";

import { useState, useRef, useEffect } from "react";
import type { AccordionItem } from "@/types/common";

export type { AccordionItem } from "@/types/common";

type AccordionProps = {
  items: AccordionItem[];
  defaultOpenIndex?: number;
  accordionId?: string;
  itemClassName?: string;
  lastItemClassName?: string;
};

function AccordionPanel({ answer, isOpen }: { answer: string; isOpen: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? ref.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      style={{
        height: `${height}px`,
        overflow: "hidden",
        transition: "height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div ref={ref} className="accordion-body">
        {answer}
      </div>
    </div>
  );
}

export default function Accordion({
  items,
  defaultOpenIndex = 0,
  accordionId = "accordion",
  itemClassName = "",
  lastItemClassName = "mb-0",
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordion" id={accordionId}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const isLast = index === items.length - 1;
        const itemClass = [
          "accordion-item",
          itemClassName,
          isLast ? lastItemClassName : "",
        ]
          .filter(Boolean)
          .join(" ");
        const headerId = `${accordionId}-heading-${index}`;
        const collapseId = `${accordionId}-collapse-${index}`;

        return (
          <div key={index} className={itemClass}>
            <h2 className="accordion-header" id={headerId}>
              <button
                type="button"
                className={`accordion-button${isOpen ? "" : " collapsed"}`}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={collapseId}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={collapseId}
              className="accordion-collapse"
              aria-labelledby={headerId}
            >
              <AccordionPanel answer={item.answer} isOpen={isOpen} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
