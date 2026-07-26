import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Mark and wordmark. The mark repeats the orthogonal step motif from the
 * runtime schematic, so the identity and the product drawing share a language.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Araxys — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="flex size-7 items-center justify-center rounded-[6px] bg-navy">
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          className="size-[18px] text-ink-inverse"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 17h4.5v-5H14V7h5" />
        </svg>
      </span>
      <span className="text-[1.0625rem] font-medium tracking-[-0.03em] text-ink">Araxys</span>
    </Link>
  );
}
