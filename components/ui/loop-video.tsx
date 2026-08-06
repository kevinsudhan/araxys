"use client";

import { useInView } from "@/lib/use-in-view";

/**
 * A decorative looping video that does not exist until it is on screen.
 *
 * `autoplay` makes a browser fetch the entire file at page load, even below the
 * fold — 6.5MB for a five-second loop, spent by every visitor whether or not
 * they scroll that far. Withholding `src` until the frame enters the viewport
 * moves that cost to the people who actually see it. The aspect ratio is
 * reserved by the parent frame, so nothing shifts when it arrives.
 */
export function LoopVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLVideoElement>();

  return (
    <video
      ref={ref}
      {...(inView ? { src } : {})}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay
      preload="none"
      aria-hidden
      className={className}
    />
  );
}
