import { LoopVideo } from "@/components/ui/loop-video";
import { cn } from "@/lib/utils";

export type MediaFrameProps = {
  /** Aspect ratio as a CSS value, e.g. "16/9", "4/3", "1/1". */
  ratio?: string;
  /** Shown in the placeholder so it is obvious what belongs here. */
  label: string;
  /** Where the asset should be dropped, e.g. "public/voice/demo.mp4". */
  hint?: string;
  /** Once set, the real asset renders and the placeholder disappears. */
  src?: string;
  kind?: "video" | "image";
  /**
   * How a video behaves:
   *   loop   — decorative. Autoplays muted on repeat, no controls.
   *   player — content. Controls, sound, and nothing downloaded until played.
   */
  mode?: "loop" | "player";
  /**
   * "contain" (player default) never crops — the safe choice when a frame
   * might not match the video's native ratio, since a narrated or on-screen-
   * text video cropped arbitrarily could cut off part of what it's saying.
   * "cover" (loop's only option) fills the frame and crops to it — pass this
   * explicitly for a player-mode video whose content is fine to crop, e.g. one
   * deliberately re-cut to match the frame it will sit in.
   */
  fit?: "contain" | "cover";
  poster?: string;
  alt?: string;
  className?: string;
};

/**
 * A slot for artwork, whether or not it exists yet.
 *
 * Without `src` it renders a labelled frame at the correct aspect ratio, so a
 * page can be designed and shipped at final proportions with no stock imagery.
 * Adding the file and passing `src` swaps it in with zero layout shift, because
 * the ratio is reserved either way.
 */
export function MediaFrame({
  ratio = "16/9",
  label,
  hint,
  src,
  kind = "video",
  mode = "loop",
  fit,
  poster,
  alt = "",
  className,
}: MediaFrameProps) {
  const isPlayer = kind === "video" && mode === "player";
  const playerFit = fit === "cover" ? "object-cover" : "object-contain";

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-lg border border-line",
        // A player keeps a neutral dark bed so letterboxing reads as intentional.
        isPlayer ? "bg-[#0B0C0E]" : "bg-sunken",
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        kind === "video" ? (
          isPlayer ? (
            <video
              src={src}
              poster={poster}
              controls
              /* metadata only: the first frame paints as a poster without
                 pulling the whole file down for visitors who never press play */
              preload="metadata"
              playsInline
              className={cn("size-full", playerFit)}
            />
          ) : (
            <LoopVideo src={src} poster={poster} className="size-full object-cover" />
          )
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} loading="lazy" className="size-full object-cover" />
        )
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <span
            aria-hidden
            className="flex size-10 items-center justify-center rounded-full border border-line-strong text-ink-faint"
          >
            <svg viewBox="0 0 16 16" fill="none" className="size-4">
              {kind === "video" ? (
                <path
                  d="M6 4.5 11.5 8 6 11.5V4.5Z"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinejoin="round"
                />
              ) : (
                <>
                  <rect
                    x="2.5"
                    y="3.5"
                    width="11"
                    height="9"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.1"
                  />
                  <path
                    d="m2.5 10 3-2.5 3 2.5 2-1.5 3 2"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinejoin="round"
                  />
                </>
              )}
            </svg>
          </span>
          <figcaption className="label text-ink-faint">{label}</figcaption>
          {hint ? <p className="text-[0.75rem] text-ink-faint/80">{hint}</p> : null}
        </div>
      )}

      {/* Hairline crop marks — keeps an empty frame feeling deliberate. */}
      {!src ? (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <span className="absolute top-4 left-4 size-3 border-t border-l border-line-strong" />
          <span className="absolute top-4 right-4 size-3 border-t border-r border-line-strong" />
          <span className="absolute bottom-4 left-4 size-3 border-b border-l border-line-strong" />
          <span className="absolute right-4 bottom-4 size-3 border-r border-b border-line-strong" />
        </div>
      ) : null}
    </figure>
  );
}
