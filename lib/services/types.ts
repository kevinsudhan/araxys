import type { ServiceGlyph } from "@/lib/site";

/**
 * One shape for every service page.
 *
 * The pages share a skeleton deliberately: a reader comparing two of our
 * services should be comparing the services, not re-learning a layout. What
 * differs is entirely the content — including the topology diagram, which is
 * generated from `topology` rather than hand-drawn per page.
 */

export type Fact = {
  /** Rendered verbatim, so "<700ms" and "24/7" are both fine. */
  value: string;
  label: string;
  note: string;
};

export type DetailGroup = {
  id: string;
  heading: string;
  intro: string;
  items: { name: string; detail: string }[];
};

export type FlowStep = {
  id: string;
  /** Short left-hand marker — a stage number, a timestamp, a phase. */
  marker: string;
  name: string;
  line: string;
};

/**
 * A media slot. Without `src` it renders as a labelled placeholder at the right
 * aspect ratio, so pages ship before the artwork exists and swap in later with
 * no layout shift.
 */
export type MediaSlot = {
  label: string;
  hint: string;
  src?: string;
  kind?: "video" | "image";
  /** loop = decorative autoplay; player = real content with controls. */
  mode?: "loop" | "player";
  /** Player only. "cover" crops to the frame; omit for the safe "contain". */
  fit?: "contain" | "cover";
  ratio?: string;
};

export type UseCase = { name: string; line: string };
export type Faq = { question: string; answer: string };

/** Drives the generated schematic. Entry → core (3 stages) → endpoints. */
export type Topology = {
  entry: { kind: string; name: string };
  /** The node between entry and endpoints, e.g. "Agent Layer". */
  core: { kind: string; name: string; stages: [string, string, string] };
  /** Exactly four, so the wide and narrow layouts both stay balanced. */
  endpoints: [Endpoint, Endpoint, Endpoint, Endpoint];
  /** The emerald node — wherever a person stays in the loop. */
  escalation: { kind: string; name: string };
  /** Strip labels above the drawing. */
  caption: string;
  /** Screen-reader description of what the diagram conveys. */
  description: string;
};

export type Endpoint = { kind: string; name: string };

export type ServicePage = {
  /** URL segment. The page lives at /{slug}. */
  slug: string;
  /** Matches the id in lib/site.ts so the home card can link here. */
  serviceId: string;
  glyph: ServiceGlyph;

  navLabel: string;
  eyebrow: string;
  title: string;
  lead: string;
  /** Used for <title>, OG and the meta description. */
  metaTitle: string;
  metaDescription: string;

  heroPrimaryCta: string;
  /** Rendered in the hero's right-hand panel. No src yet → shows a placeholder. */
  heroMedia: MediaSlot;
  /** Exactly three, shown as a compact row under the CTAs. */
  heroStats?: [
    { label: string; value: string },
    { label: string; value: string },
    { label: string; value: string },
  ];
  /** Optional looping visual that leads the flow section. */
  flowMedia?: MediaSlot;
  /** The pair beneath the use-case grid. Falls back to placeholders. */
  useCaseMedia?: [MediaSlot, MediaSlot];

  factsHeading: string;
  facts: Fact[];

  detail: {
    eyebrow: string;
    title: string;
    lead: string;
    groups: [DetailGroup, DetailGroup];
  };

  flow: { eyebrow: string; title: string; steps: FlowStep[] };
  /**
   * "list" (default) is the standard Section: heading, then flowMedia (if
   * any) full-width above the step list. "split" breaks out of the site's
   * shared column the same way the hero does — steps on the left, flowMedia
   * on the right, no side margin — for a page whose flow video earns that
   * extra width. Opt in per page; most won't need it.
   */
  flowLayout?: "list" | "split";
  useCases: { eyebrow: string; title: string; lead: string; items: UseCase[] };

  topology: Topology;
  faqs: Faq[];
};
