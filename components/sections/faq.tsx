"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faqs } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * The one place Framer Motion earns its place: animating an unknown panel
 * height cleanly, with a real exit transition, is genuinely awkward in CSS.
 */
export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="mx-auto max-w-[54rem]">
      {faqs.map((faq, index) => {
        const isOpen = open === index;
        return (
          <li key={faq.question} className="border-t border-line last:border-b">
            <h3>
              <button
                type="button"
                id={`faq-trigger-${index}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                onClick={() => setOpen(isOpen ? null : index)}
                className="group flex w-full items-start justify-between gap-8 py-6 text-left"
              >
                <span
                  className={cn(
                    "text-[1.0625rem] leading-snug font-medium tracking-[-0.015em] transition-colors duration-200",
                    isOpen ? "text-ink" : "text-ink group-hover:text-navy",
                  )}
                >
                  {faq.question}
                </span>

                <span
                  aria-hidden
                  className="relative mt-1 size-3.5 shrink-0 text-ink-faint transition-colors duration-200 group-hover:text-ink"
                >
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                  <span
                    className={cn(
                      "absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current transition-transform duration-300 ease-out-quint",
                      isOpen ? "scale-y-0" : "scale-y-100",
                    )}
                  />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="panel"
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[68ch] pr-8 pb-7 text-[0.9375rem] leading-relaxed text-ink-muted">
                    {faq.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
