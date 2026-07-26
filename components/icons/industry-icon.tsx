import type { ReactElement } from "react";
import type { IndustryIcon as IconKey } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Monochrome hairline industry marks, 32-unit grid. */
const icons: Record<IconKey, ReactElement> = {
  // Ledger sheet with a totals column.
  finance: (
    <>
      <rect x="5.5" y="5.5" width="21" height="21" rx="2.5" />
      <path d="M5.5 11h21M19.5 11v15.5" />
      <path d="M9 15h7M9 19h7M9 23h4" />
      <path d="M22.5 22.5h1.5" />
    </>
  ),
  // Vitals trace on a record.
  healthcare: (
    <>
      <rect x="4.5" y="7.5" width="23" height="17" rx="2.5" />
      <path d="M8 16.5h3.5l2-4.5 3 9 2.5-4.5H24" />
    </>
  ),
  // Plate travelling over conveyor rollers.
  manufacturing: (
    <>
      <rect x="6.5" y="8.5" width="19" height="7" rx="1.5" />
      <path d="M4.5 20.5h23" />
      <circle cx="9.5" cy="23.5" r="2.5" />
      <circle cx="16" cy="23.5" r="2.5" />
      <circle cx="22.5" cy="23.5" r="2.5" />
    </>
  ),
  // Price tag with an eyelet.
  retail: (
    <>
      <path d="M16.8 4.9 27.1 15.2a2 2 0 0 1 0 2.8l-9.1 9.1a2 2 0 0 1-2.8 0L4.9 16.8a2 2 0 0 1-.6-1.6l.6-9a2 2 0 0 1 1.9-1.9l9-.6a2 2 0 0 1 1 .2Z" />
      <circle cx="11" cy="11" r="2" />
    </>
  ),
  // Crate with a routing leg.
  logistics: (
    <>
      <path d="M6.5 11.5 16 6.5l9.5 5v9L16 25.5l-9.5-5v-9Z" />
      <path d="M6.5 11.5 16 16.5l9.5-5M16 16.5v9" />
    </>
  ),
  // Open volume on a spine.
  education: (
    <>
      <path d="M16 9.5c-2.4-1.8-5.4-2.6-9.5-2.5v16c4.1-.1 7.1.7 9.5 2.5 2.4-1.8 5.4-2.6 9.5-2.5V7c-4.1-.1-7.1.7-9.5 2.5Z" />
      <path d="M16 9.5v16" />
    </>
  ),
  // Property elevation.
  realEstate: (
    <>
      <path d="M5.5 14.2 16 6.5l10.5 7.7v11.3h-21V14.2Z" />
      <path d="M13 25.5v-7h6v7" />
    </>
  ),
  // Tenanted application on a renewal cycle.
  saas: (
    <>
      <rect x="5.5" y="7.5" width="21" height="14" rx="2.5" />
      <path d="M5.5 12.5h21" />
      <path d="M11 25.5a6.5 6.5 0 0 0 10-1.5" />
      <path d="M10 22.5v3h3" />
    </>
  ),
  // Operations grid with one lane in flight.
  operations: (
    <>
      <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
      <rect x="18.5" y="5.5" width="8" height="8" rx="1.5" />
      <rect x="5.5" y="18.5" width="8" height="8" rx="1.5" />
      <rect x="18.5" y="18.5" width="8" height="8" rx="1.5" fill="currentColor" stroke="none" />
      <path d="M13.5 9.5h5M9.5 13.5v5" />
    </>
  ),
};

export function IndustryIcon({ name, className }: { name: IconKey; className?: string }) {
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
