"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds. Keep under ~280ms so nothing feels slow. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Opacity + 14px lift on first scroll into view. The transition itself lives
 * in globals.css so no JS runs during the animation frame.
 */
export function Reveal({ children, delay = 0, as: Tag = "div", className }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-revealed={inView ? "true" : "false"}
      style={delay ? { ["--reveal-delay" as string]: `${delay}ms` } : undefined}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
