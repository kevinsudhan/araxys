"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -9 * t));

type CounterProps = {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

/**
 * Counts up once on first view. The rendered value is wrapped in an
 * aria-hidden span with the final figure exposed to assistive tech, so screen
 * readers never announce a stream of intermediate numbers.
 */
export function Counter({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1500,
  className,
}: CounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (prefersReducedMotion() || to === 0) {
      setValue(to);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(to * easeOutExpo(progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  const formatted = value.toFixed(decimals);
  const final = `${prefix}${to.toFixed(decimals)}${suffix}`;

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      <span aria-hidden>
        {prefix}
        {formatted}
        {suffix}
      </span>
      <span className="sr-only">{final}</span>
    </span>
  );
}
