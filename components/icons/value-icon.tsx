import type { ReactElement } from "react";
import type { ValueIcon as IconKey } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Marks for the differentiator grid, 32-unit grid, hairline stroke. */
const icons: Record<IconKey, ReactElement> = {
  // A frame redrawn to fit — one corner set out to a different measure.
  custom: (
    <>
      <path d="M6.5 12V9a2.5 2.5 0 0 1 2.5-2.5h3" />
      <path d="M25.5 12V9A2.5 2.5 0 0 0 23 6.5h-3" />
      <path d="M6.5 20v3A2.5 2.5 0 0 0 9 25.5h3" />
      <path d="M20 25.5h3a2.5 2.5 0 0 0 2.5-2.5v-3" />
      <path d="M12.5 16h7M16 12.5v7" />
    </>
  ),
  // Least-privilege lock.
  security: (
    <>
      <rect x="6.5" y="14.5" width="19" height="12" rx="2.5" />
      <path d="M11 14.5v-3.5a5 5 0 0 1 10 0v3.5" />
      <path d="M16 19v3.5" />
    </>
  ),
  // Interchangeable model layers behind one interface.
  stack: (
    <>
      <path d="M16 5.5 27 11l-11 5.5L5 11l11-5.5Z" />
      <path d="M5 16.5 16 22l11-5.5" />
      <path d="M5 22 16 27.5 27 22" />
    </>
  ),
  // Shipped early on the timeline.
  velocity: (
    <>
      <path d="M4.5 22.5h23" />
      <path d="M10 22.5V9.5M10 9.5l9 3-9 3" />
      <path d="M22 18.5v4M26 15.5v7" />
    </>
  ),
  // Handoff between a system and a person.
  human: (
    <>
      <rect x="4.5" y="10.5" width="10" height="11" rx="2" />
      <circle cx="24" cy="11.5" r="3" />
      <path d="M18.5 24.5a5.5 5.5 0 0 1 11 0" />
      <path d="M14.5 16h5.5M17.5 13.5 20 16l-2.5 2.5" />
    </>
  ),
  // Two parties, one overlap that outlasts the engagement.
  partnership: (
    <>
      <circle cx="12.5" cy="16" r="7.5" />
      <circle cx="19.5" cy="16" r="7.5" />
    </>
  ),
};

export function ValueIcon({ name, className }: { name: IconKey; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-7", className)}
    >
      {icons[name]}
    </svg>
  );
}
