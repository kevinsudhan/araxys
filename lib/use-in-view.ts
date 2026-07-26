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
        if (!entry.isIntersecting) continue;
        callbacks.get(entry.target)?.(true);
        observer?.unobserve(entry.target);
        callbacks.delete(entry.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
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
