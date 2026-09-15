"use client";

import { useState } from "react";
import { clsx } from "clsx";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-forest-light"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg text-forest md:text-xl">
                {item.question}
              </span>
              <span
                className={clsx(
                  "flex h-8 w-8 shrink-0 items-center justify-center text-gold transition-transform duration-400",
                  isOpen && "rotate-45"
                )}
              >
                +
              </span>
            </button>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-500 ease-out",
                isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <p className="max-w-3xl text-sm leading-relaxed text-charcoal-muted md:text-base">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
