# Araxys — AI Engineering & Automation

Marketing site for Araxys. Next.js App Router, React 19, TypeScript, Tailwind CSS v4,
Framer Motion. Single static page, no runtime data dependencies.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # all routes prerender as static
npm run typecheck
```

---

## Still outstanding

All copy lives in [`lib/site.ts`](lib/site.ts).

| What | Note |
| --- | --- |
| `site.schedulingUrl` | Currently a composed `mailto:`. Point at Cal.com / Calendly when one exists — no other file changes. |
| LinkedIn | Removed until a company page exists. Re-add to `site` and to the footer's Contact column plus the `sameAs` array in `app/layout.tsx`. |
| `work` | One entry (EBS). Add more as they ship. |

### Two rules that keep this site honest

**`metrics` are commitments, not measurements.** Each figure is a term of the engagement
the client can verify on day one — not an averaged outcome we cannot substantiate. If you
add one, it must pass the same test.

**`work` is shipped, named, publicly verifiable work only.** Every entry needs a live `url`.
`clientFigures` are the *client's* published numbers and render under an explicit
"the client's own published figures" label — never present them as results Araxys produced.
Anonymised engagements and invented testimonial quotes do not belong here; a thin section of
real work outperforms a full one of placeholders.

### The word budget

The page is **~620 words**. It was ~2,900 across nine sections, and it read as a brochure
nobody finishes: ten services with three paragraphs each, plus eight "solutions" and nine
"industries" that were three overlapping lists of the same claim.

The structure is now Hero → Terms → What we build (6) → How it works (4) → Work → FAQ (5) → CTA.
One item, one line. Industries is a single sentence under the services grid, not a grid of its
own. Before adding copy, cut some — the budget is the feature.

## Design system

One font (Geist Sans), one canvas, four ink weights, two hairlines, two accents. Typography
and rules carry the design; there is no decorative gradient, glow, glass or blur anywhere
except the header's scroll backdrop.

Tokens live at the top of [`app/globals.css`](app/globals.css) as CSS custom properties, then
get exposed to Tailwind through `@theme inline`. To retheme the site, edit the `:root` and
`.dark` blocks — nothing else references a colour literal.

| Token | Light | Dark |
| --- | --- | --- |
| `canvas` | `#FAFAF8` | `#0B0C0E` |
| `surface` | `#FFFFFF` | `#111214` |
| `ink` / `ink-muted` / `ink-faint` | `#111111` / `#55565A` / `#6E6F74` | `#F4F4F1` / `#9C9DA3` / `#85868D` |
| `line` / `line-strong` | `#E5E4DF` / `#D2D1CA` | `#22242A` / `#303338` |
| `navy` (accent) | `#14213D` | `#AEC0E4` |
| `emerald` (secondary) | `#1E7D5A` | `#4CC48F` |

Navy inverts to a light slate in dark mode because `#14213D` on a near-black canvas is
unreadable. The CTA panel keeps a literal `#14213D` so it stays navy in both themes — it is
the one deliberate exception, and it is commented as such.

**Structural signature.** Two hairlines sit at the container edges of every section
(`EdgeRules`). Because adjacent sections repeat them, they read as one continuous rule down
the whole page. Card grids use a `gap-px` over a `bg-line` container rather than per-cell
borders, so the hairline grid holds at every breakpoint with no `nth-child` arithmetic.

## Motion

Deliberately small. The budget goes to: scroll reveals, the schematic's travelling packets,
counter tweens, and hover states.

- **Reveals** are a single shared `IntersectionObserver` ([`lib/use-in-view.ts`](lib/use-in-view.ts))
  that flips `data-revealed`; the transition itself is CSS, so nothing runs during the frame.
- **The hero schematic** ([`components/sections/architecture-diagram.tsx`](components/sections/architecture-diagram.tsx))
  is pure CSS on a normalised `pathLength="1"`, so the entire visual costs **zero JavaScript**.
- **Framer Motion is used in exactly two places** — the FAQ accordion and the mobile nav —
  where animating an unknown height with a real exit transition is genuinely awkward in CSS.
- Every animation is disabled under `prefers-reduced-motion`.

### The reveal safety net

Scroll reveals start at `opacity: 0`, which would mean a blank page if the observer never
ran. Three things prevent that:

1. The hidden state is scoped to `html.js`, added by the boot script in `<head>` **before
   first paint**. No JS ⇒ nothing is hidden. (A class, not a data attribute — React
   reconciles unknown attributes off `<html>` during hydration but preserves added classes.)
2. `useInView` reveals immediately if `IntersectionObserver` is unavailable.
3. A 4-second timer drops the `js` class if nothing has revealed, so a blocked hydration
   degrades to *visible and unanimated* rather than blank.

**`threshold` must stay `0`.** It was `0.12`, and a ratio threshold is a fraction of the
*element*, not of the viewport — so any element taller than `viewport / 0.12` could never
reach it and stayed at `opacity: 0` permanently. The ten-card services grid was 8,182px tall
against an 820px viewport: a maximum achievable ratio of 0.088, i.e. a permanently blank
section, and worse at narrow widths. The negative bottom `rootMargin` is what holds the
reveal until an element is properly on screen, and it is a fraction of the viewport, so it
behaves identically at every element size.

The callback also reveals any element whose `boundingClientRect.bottom <= 0`. The observer
samples on a frame, so an element that enters and leaves between two samples is reported only
in its final non-intersecting state; anything already above the viewport has been passed and
should be visible. This matters on load with a restored scroll position or a deep link.

Regression test, run in the browser console at 375px and 1280px: scroll the page in
half-viewport steps and assert that no `[data-reveal]` with a computed `opacity` of `0` is
ever within the viewport.

## The hero schematic

An engineering drawing, not artwork: orthogonal routing on a shared vertical trunk with one
horizontal bus per tier, and junction dots on true T-junctions only. Geometry is generated
from a config object, so the wide (4-column) and narrow (2-column) variants stay in exact
agreement — change `wide`/`narrow` in that file and both stay correct. Endpoint labels were
verified to sit inside their node boxes at every breakpoint.

## Accessibility

Verified in both themes: every text/background pair meets WCAG AA (measured 4.8–17.8:1;
lowest is the 11px index label at 4.8:1). Plus: one `h1`, ordered headings, skip link, visible
focus rings via `:focus-visible`, `aria-expanded`/`aria-controls`/`role="region"` on the
accordion, counters that expose only the final figure to screen readers, and an `sr-only`
text description of the schematic. The process steps no longer hide anything behind hover, so
the `group-focus-within` mirroring they needed is gone with it.

## SEO

Metadata and JSON-LD (`ProfessionalService` + `WebSite` + `FAQPage`) in
[`app/layout.tsx`](app/layout.tsx); `sitemap.ts`, `robots.ts`, `manifest.ts` and a generated
`opengraph-image.tsx` alongside it. No external requests: the font is local and every graphic
is inline SVG, so there is nothing to block first paint.

## Structure

```
app/               layout, page, metadata routes, icon, OG image
components/
  layout/          header, footer, logo, theme toggle
  sections/        one file per page section
  ui/              container, section, button, reveal, counter
  icons/           hand-drawn service glyphs
lib/               site content, shared observer, class joiner
```

Sections are composed in [`app/page.tsx`](app/page.tsx) in document order. Each is
independent — reorder or drop one without touching the others.
