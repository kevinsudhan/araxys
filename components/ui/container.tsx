import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** The single horizontal measure every section aligns to. */
export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[76rem] px-6 sm:px-8 lg:px-10", className)}>
      {children}
    </Tag>
  );
}

/**
 * Two hairlines at the container edges, running the full height of a section.
 * Because adjacent sections repeat them, they read as one continuous rule down
 * the page — the site's structural signature.
 */
export function EdgeRules({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="mx-auto h-full w-full max-w-[76rem] border-x border-line" />
    </div>
  );
}

/** Technical-drawing crosshairs at the corners of a framed panel. */
export function Crosshairs({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
      {[
        "-top-[3.5px] -left-[3.5px]",
        "-top-[3.5px] -right-[3.5px]",
        "-bottom-[3.5px] -left-[3.5px]",
        "-bottom-[3.5px] -right-[3.5px]",
      ].map((position) => (
        <span key={position} className={cn("absolute size-[7px]", position)}>
          <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-line-strong" />
          <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-line-strong" />
        </span>
      ))}
    </div>
  );
}
