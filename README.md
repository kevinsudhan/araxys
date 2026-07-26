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

## Replace before launch

Everything below is placeholder content and lives in [`lib/site.ts`](lib/site.ts).

| What | Where | Note |
| --- | --- | --- |
| `site.url` | `lib/site.ts` | Drives canonical URL, sitemap, robots, JSON-LD. |
| `site.email`, `site.linkedin` | `lib/site.ts` | Used in header, footer and CTA. |
| `site.schedulingUrl` | `lib/site.ts` | Currently `#contact`. Point at Cal.com / Calendly / HubSpot. |
| `metrics[].value` | `lib/site.ts` | **Marketing figures — substitute your own defensible numbers.** |
| `testimonials` | `lib/site.ts` | **Placeholder quotes. Do not publish until replaced with approved client quotes.** Attribution is deliberately anonymised (initials + role + sector) so nothing reads as a named endorsement while it is still placeholder copy. |

Service, process, industry, solution and FAQ copy is written to be accurate to a custom
AI engineering practice, but read it against how you actually sell before shipping.

---

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
accordion, keyboard-operable process steps (`group-focus-within` mirrors every hover
disclosure, which also makes them work on touch), counters that expose only the final figure
to screen readers, and an `sr-only` text description of the schematic.

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
  icons/           hand-drawn glyph sets (service, industry, value)
lib/               site content, shared observer, class joiner
```

Sections are composed in [`app/page.tsx`](app/page.tsx) in document order. Each is
independent — reorder or drop one without touching the others.
