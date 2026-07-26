"use client";

import { useEffect, useRef, useState } from "react";

type Entry = (visible: boolean) => void;

let observer: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, Entry>();

/**
 * One shared IntersectionObserver for every reveal and counter on the page.
 * Cheaper than an observer per element, and keeps the scroll path clean.
 */
function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return null;
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        /*
         * `isIntersecting` alone is not enough. The observer samples on a
         * frame, so an element that enters and leaves between two samples —
         * a fast flick, or a jump to an anchor link — is reported only in its
         * final, non-intersecting state and would stay hidden forever. Any
         * element already above the viewport has been passed, so reveal it.
         */
        const alreadyPassed = entry.boundingClientRect.bottom <= 0;
        if (!entry.isIntersecting && !alreadyPassed) continue;
        callbacks.get(entry.target)?.(true);
        observer?.unobserve(entry.target);
        callbacks.delete(entry.target);
      }
    },
    /*
     * threshold MUST stay 0.
     *
     * A ratio threshold is a fraction of the *element*, not of the viewport, so
     * any element taller than viewport/threshold can never reach it and stays
     * at opacity 0 forever — a permanently blank section. A grid of ten cards
     * on a narrow screen is exactly that tall. The negative bottom margin is
     * what holds the reveal until the element is properly on screen, and it is
     * a fraction of the viewport, so it behaves the same at every element size.
     */
    { rootMargin: "0px 0px -10% 0px", threshold: 0 },
  );
  return observer;
}

/** Fires once, when the element first scrolls into view. */
export function useInView<T extends Element>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const io = getObserver();
    if (!io) {
      setInView(true);
      return;
    }

    callbacks.set(element, setInView);
    io.observe(element);

    return () => {
      io.unobserve(element);
      callbacks.delete(element);
    };
  }, []);

  return { ref, inView } as const;
}
