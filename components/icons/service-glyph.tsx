import type { ReactElement } from "react";
import type { ServiceGlyph as GlyphKey } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Hand-drawn service marks on a 32-unit grid. All hairline stroke, no fill,
 * no rounded-blob iconography — each one describes the mechanism of the
 * service rather than decorating it.
 */
const glyphs: Record<GlyphKey, ReactElement> = {
  // Orchestrating node with scoped taps out to four tools.
  agent: (
    <>
      <rect x="10.5" y="10.5" width="11" height="11" rx="2.5" />
      <path d="M16 10.5V5.5M16 21.5V26.5M10.5 16H5.5M21.5 16H26.5" />
      <circle cx="16" cy="4.5" r="1.1" />
      <circle cx="16" cy="27.5" r="1.1" />
      <circle cx="4.5" cy="16" r="1.1" />
      <circle cx="27.5" cy="16" r="1.1" />
    </>
  ),
  // Waveform inside a call capsule.
  voice: (
    <>
      <rect x="4.5" y="9.5" width="23" height="13" rx="6.5" />
      <path d="M10 14v4M13 12v8M16 11v10M19 13v6M22 14v4" />
    </>
  ),
  // Governed stack of source plates, each with a record marker.
  knowledge: (
    <>
      <rect x="5.5" y="6.5" width="21" height="5" rx="1.5" />
      <rect x="5.5" y="13.5" width="21" height="5" rx="1.5" />
      <rect x="5.5" y="20.5" width="21" height="5" rx="1.5" />
      <path d="M9.5 9h.01M9.5 16h.01M9.5 23h.01" />
    </>
  ),
  // Many candidate chunks, bracketed down to one grounded answer.
  retrieval: (
    <>
      <circle cx="7" cy="10" r="1" />
      <circle cx="12" cy="10" r="1" />
      <circle cx="7" cy="16" r="1" />
      <circle cx="12" cy="16" r="1" />
      <circle cx="7" cy="22" r="1" />
      <circle cx="12" cy="22" r="1" />
      <path d="M17.5 8.5h2.5v15h-2.5" />
      <path d="M20 16h6.5M24 13.5 26.5 16 24 18.5" />
    </>
  ),
  // Orthogonal staircase: a process with discrete, ordered steps.
  process: (
    <>
      <path d="M5.5 8.5h7v8h7v8h7" />
      <circle cx="5" cy="8.5" r="1.3" />
      <circle cx="27" cy="24.5" r="1.3" />
    </>
  ),
  // Two half-frames joined across a boundary.
  integration: (
    <>
      <path d="M13 6.5H8.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2H13" />
      <path d="M19 6.5h4.5a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H19" />
      <path d="M12.5 16h7" />
    </>
  ),
  // Application frame with a purpose-built interior.
  software: (
    <>
      <rect x="4.5" y="6.5" width="23" height="19" rx="2.5" />
      <path d="M4.5 12.5h23" />
      <circle cx="8" cy="9.5" r="0.9" />
      <rect x="8" y="16" width="6.5" height="6.5" rx="1.5" />
      <path d="M18 17h6M18 19.5h6M18 22h4" />
    </>
  ),
  // Options evaluated; one recommended.
  consulting: (
    <>
      <path d="M5 16h6" />
      <path d="M11 16c3.5 0 3-7.5 6.5-7.5h4M11 16h10.5M11 16c3.5 0 3 7.5 6.5 7.5h4" />
      <circle cx="23.5" cy="8.5" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="23.5" cy="16" r="1.4" />
      <circle cx="23.5" cy="23.5" r="1.4" />
    </>
  ),
  // Supervisor with specialised agents beneath it.
  swarm: (
    <>
      <circle cx="16" cy="15.5" r="3.5" />
      <circle cx="16" cy="5.5" r="2.4" />
      <circle cx="6.5" cy="24" r="2.4" />
      <circle cx="25.5" cy="24" r="2.4" />
      <path d="M16 12V8M13.4 17.8 8.6 22.2M18.6 17.8l4.8 4.4M8.9 24h14.2" />
    </>
  ),
  // Endpoint with a typed contract on three pins.
  api: (
    <>
      <rect x="12.5" y="8.5" width="15" height="15" rx="2.5" />
      <path d="M12.5 13H5M12.5 16H5M12.5 19H5" />
      <path d="M17.5 13.5h5M17.5 16h5M17.5 18.5h3" />
    </>
  ),
};

export function ServiceGlyph({ name, className }: { name: GlyphKey; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-8", className)}
    >
      {glyphs[name]}
    </svg>
  );
}
