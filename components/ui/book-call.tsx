"use client";

import { useCallback, type MouseEvent, type ReactNode } from "react";
import { bookingHref, bookingIsLive, site } from "@/lib/site";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (options: { url: string }) => void };
  }
}

/** Module scope, so several CTAs on the page share one injection. */
let assetsRequested = false;

function loadCalendly() {
  if (typeof document === "undefined" || assetsRequested) return;
  assetsRequested = true;

  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = site.booking.widgetCss;
  document.head.appendChild(stylesheet);

  const script = document.createElement("script");
  script.src = site.booking.widgetJs;
  script.async = true;
  document.head.appendChild(script);
}

type BookCallProps = {
  children: ReactNode;
  className?: string;
  /** Fires alongside the booking action — used to close the mobile menu. */
  onClick?: () => void;
};

/**
 * Progressive enhancement, deliberately in that order:
 *
 *  • It is an anchor first. With JS off, Calendly blocked, or no booking link
 *    configured yet, it is still a working link — to Calendly, or to a composed
 *    email. It is never a dead button.
 *  • The widget is fetched on *intent* (hover, focus, touch), not on page load,
 *    so a visitor who never books never pays for the third-party script and the
 *    homepage keeps its no-external-requests-on-load property.
 *  • If the widget has loaded by click time, the click opens a Calendly popup in
 *    place. If it has not, the anchor just navigates to the Calendly page — the
 *    visitor still books either way.
 */
export function BookCall({ children, className, onClick }: BookCallProps) {
  const warm = useCallback(() => {
    if (bookingIsLive) loadCalendly();
  }, []);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.();
      if (!bookingIsLive || !window.Calendly) return;
      event.preventDefault();
      window.Calendly.initPopupWidget({ url: site.booking.url });
    },
    [onClick],
  );

  return (
    <a
      href={bookingHref}
      onPointerEnter={warm}
      onFocus={warm}
      onTouchStart={warm}
      onClick={handleClick}
      {...(bookingIsLive ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={cn(className)}
    >
      {children}
    </a>
  );
}
