import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import markBlack from "@/public/brand/araxys-mark-black.png";
import markWhite from "@/public/brand/araxys-mark-white.png";

/**
 * Mark and wordmark.
 *
 * The mark ships as two transparent PNGs — black artwork for the light theme,
 * white artwork for the dark theme. Both files are 1024×1024 with the artwork
 * normalised to the same bounding box, so the two render at identical size and
 * the swap is invisible apart from the colour.
 *
 * Both images are always in the DOM and the `dark:` variant flips which one is
 * visible. That keeps the swap purely stylistic — it happens with the inline
 * boot script's `html.dark` class on the first paint, so there is no flash of
 * the wrong mark before hydration.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Araxys — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative block size-7 shrink-0">
        {/* width/height are the rendered size, not the file's 1024px — without
            them the <img> carries 1024×1024 intrinsics and blows out the
            header for the moment before the stylesheet applies. */}
        <Image
          src={markBlack}
          alt=""
          aria-hidden
          priority
          width={28}
          height={28}
          className="size-full object-contain dark:hidden"
        />
        <Image
          src={markWhite}
          alt=""
          aria-hidden
          priority
          width={28}
          height={28}
          className="hidden size-full object-contain dark:block"
        />
      </span>
      <span className="text-[1.0625rem] font-medium tracking-[-0.03em] text-ink">Araxys</span>
    </Link>
  );
}
