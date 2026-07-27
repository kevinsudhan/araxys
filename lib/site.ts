/**
 * Single source of truth for every piece of copy on the site.
 *
 * The page has a word budget of roughly 700. That is not an arbitrary limit:
 * the previous draft ran to ~2,900 words across nine sections, three of which
 * were overlapping lists of what we do, and it read as a brochure nobody
 * finishes. Before adding copy here, cut some.
 */

export const site = {
  name: "Araxys",
  role: "AI Engineering & Automation",
  url: "https://araxys.dev",
  email: "contact@araxys.dev",
  phones: [
    { display: "+91 89391 53390", e164: "+918939153390" },
    { display: "+91 63806 69805", e164: "+916380669805" },
  ],
  /**
   * Scheduling — Calendly free tier.
   *
   * `url` drives every "schedule" CTA on the site. Clear it and they all fall
   * back to a composed email, so no call to action is ever a dead end.
   *
   * This is Calendly's *popup* rather than their inline widget: the inline
   * snippet loads a third-party script and a 700px iframe on every page view,
   * whereas the popup fetches nothing until a visitor actually shows intent.
   */
  booking: {
    url: "https://calendly.com/kevin-araxys/30min",
    widgetJs: "https://assets.calendly.com/assets/external/widget.js",
    widgetCss: "https://assets.calendly.com/assets/external/widget.css",
  },
  description:
    "Araxys designs and builds custom AI systems — agents, voice, retrieval and automation — engineered around the way your business already works.",
} as const;

/** Composed email used wherever a booking link does not yet exist. */
export const enquiryMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Consultation request",
)}&body=${encodeURIComponent(
  "A line or two on the process you want to automate, and we'll find a time.",
)}`;

/** Single target for every "schedule" call to action on the site. */
export const bookingHref: string = site.booking.url || enquiryMailto;

export const bookingIsLive = Boolean(site.booking.url);

export const nav = [
  { label: "What we build", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
] as const;

/* ------------------------------------------------------------------ metrics */

export type Metric = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  note: string;
};

/**
 * Commitments we control, not outcomes we measured. A young practice quoting
 * an "80% average reduction" is quoting nothing, and the one reader who matters
 * will know it. Every figure here is a term of the engagement, verifiable by
 * the client on day one. Anything added must pass the same test.
 */
export const metrics: Metric[] = [
  {
    value: 2,
    suffix: " weeks",
    label: "To architecture",
    note: "A documented design and a fixed price, before any code.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Code ownership",
    note: "Source in your repository from the first commit.",
  },
  {
    value: 0,
    label: "Training on your data",
    note: "Your records never train a third-party model.",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Monitoring",
    note: "Alerting and a tested rollback before go-live.",
  },
];

/* ----------------------------------------------------------------- services */

export type ServiceGlyph =
  | "agent"
  | "voice"
  | "knowledge"
  | "retrieval"
  | "process"
  | "integration"
  | "software"
  | "consulting"
  | "swarm"
  | "api";

export type Service = {
  id: string;
  name: string;
  glyph: ServiceGlyph;
  /** One sentence. If it needs two, the idea is not sharp enough yet. */
  line: string;
};

export const services: Service[] = [
  {
    id: "ai-agents",
    name: "AI Agents",
    glyph: "agent",
    line: "Multi-step processes run end to end, with a human checkpoint wherever you want one.",
  },
  {
    id: "voice-agents",
    name: "Voice Agents",
    glyph: "voice",
    line: "Every call answered, qualified and logged — transferred to a person when it matters.",
  },
  {
    id: "knowledge",
    name: "Knowledge & Retrieval",
    glyph: "knowledge",
    line: "One place to ask, answers that cite their source, permissions you already have.",
  },
  {
    id: "automation",
    name: "Process Automation",
    glyph: "process",
    line: "Work moves between your systems without copy-paste, with retries and alerting built in.",
  },
  {
    id: "integrations",
    name: "Integrations",
    glyph: "integration",
    line: "Intelligence delivered inside the CRM, ERP and tools your team already has open.",
  },
  {
    id: "custom-software",
    name: "Custom Software",
    glyph: "software",
    line: "Purpose-built applications for the workflow you actually run, deployed in your environment.",
  },
];

/** Was a nine-card grid. It is a single line, and it says the same thing. */
export const industriesLine =
  "Delivered across finance, healthcare, logistics, retail, real estate and SaaS.";

/* ------------------------------------------------------------------ process */

export type ProcessStep = {
  id: string;
  name: string;
  line: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    name: "Discovery",
    line: "We map the process as it actually runs — and name the parts that should stay manual.",
  },
  {
    id: "architecture",
    name: "Architecture",
    line: "Design, security and cost settled on paper, while changing our mind is still cheap.",
  },
  {
    id: "build",
    name: "Build",
    line: "Two-week increments, scored against an evaluation suite built from your real cases.",
  },
  {
    id: "deploy",
    name: "Deploy",
    line: "Shadow mode, then a limited cohort, then full rollout with monitoring and rollback.",
  },
];

/* --------------------------------------------------------------------- work */

/**
 * Shipped client work only — every entry must be publicly verifiable at `url`.
 * Nothing anonymised, no invented quotes. If an engagement cannot be named, it
 * does not belong here.
 *
 * `clientFigures` are the CLIENT's own published numbers, rendered under an
 * explicit label. They describe the business we built for — never present them
 * as results Araxys produced.
 */
export type WorkProject = {
  id: string;
  client: string;
  url: string;
  displayUrl: string;
  sector: string;
  year: string;
  brief: string;
  scope: string[];
  clientFigures: { value: string; label: string }[];
};

export const work: WorkProject[] = [
  {
    id: "ebs",
    client: "Everyday Banking Solutions",
    url: "https://www.everydaybankingsolutions.com/",
    displayUrl: "everydaybankingsolutions.com",
    sector: "Financial Services",
    year: "2026",
    brief:
      "A wide catalogue of loans, insurance and cards, sold through a national partner network. The site had to carry a first-time visitor from a vague intention to a specific application.",
    scope: [
      "Design system and full site build",
      "Product catalogue across three lines",
      "Enquiry capture and routing",
      "Conversational assistant",
    ],
    clientFigures: [
      { value: "75+", label: "Cities served" },
      { value: "1,250+", label: "Professionals" },
      { value: "50+", label: "Lending partners" },
      { value: "₹75,000Cr+", label: "Loans disbursed" },
    ],
  },
];

/* ---------------------------------------------------------------------- FAQ */

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Why not just buy an off-the-shelf AI tool?",
    answer:
      "A product encodes one opinion about how the work should be done. Where your process differs, the gap becomes permanent manual effort. We start from your process instead.",
  },
  {
    question: "How long until something is in production?",
    answer:
      "Two to three weeks to a documented architecture, then four to six to a first increment running in shadow mode against real data.",
  },
  {
    question: "Where does our data go?",
    answer:
      "Wherever you decide — your cloud account or ours, with region and retention as explicit decisions. We do not train models on your data, and every system ships with an audit log.",
  },
  {
    question: "Do we own the code?",
    answer:
      "Yes. Source lands in your repository from the first commit, with the architecture docs, evaluation suite and runbooks. Taking it in-house later requires nothing from us.",
  },
  {
    question: "How do you price?",
    answer:
      "Discovery and architecture are a fixed fee. Build work is quoted as fixed-scope phases, so you approve cost per phase rather than signing an open-ended commitment.",
  },
];
