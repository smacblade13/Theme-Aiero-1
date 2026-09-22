"use client";

import { useState } from "react";
import type { AccordionItem } from "@/types/common";

export type { AccordionItem } from "@/types/common";

type AccordionProps = {
  items: AccordionItem[];
  defaultOpenIndex?: number;
  accordionId?: string;
  itemClassName?: string;
  lastItemClassName?: string;
};

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
              className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
              aria-labelledby={headerId}
              data-bs-parent={`#${accordionId}`}
            >
              <div className="accordion-body">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
