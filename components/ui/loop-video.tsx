"use client";

import { useNearView } from "@/lib/use-in-view";

/**
 * A decorative looping video that does not exist until it is nearly on screen.
 *
 * `autoplay` makes a browser fetch the entire file at page load, even below the
 * fold, so `src` is withheld until the frame is close to the viewport — moving
 * that cost to visitors who actually scroll there. It uses `useNearView`
 * (an 800px lookahead) rather than the reveal observer's on-screen trigger: by
 * the time the frame is actually visible, the (now small, transcoded) file has
 * had a head start to fetch, so playback is already running rather than
 * starting from a blank first frame. The aspect ratio is reserved by the
 * parent frame, so nothing shifts when it arrives.
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
  const { ref, near } = useNearView<HTMLVideoElement>();

  return (
    <video
      ref={ref}
      {...(near ? { src } : {})}
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
