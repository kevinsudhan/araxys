import type { ServicePage } from "@/lib/services/types";

export const integrations: ServicePage = {
  slug: "integrations",
  serviceId: "integrations",
  glyph: "integration",
  navLabel: "Integrations",
  eyebrow: "Integrations",
  title: "Intelligence delivered inside the tools your team already has open",
  lead: "An AI feature nobody opens is worth nothing. The work that decides whether a project lands is unglamorous: authentication, field mapping, rate limits, and staying correct when a vendor changes an API without telling you.",
  metaTitle: "AI Integrations",
  metaDescription:
    "Production integrations into your CRM, ERP, ticketing, warehouse and internal services — versioned, contract-tested and observable, so intelligence arrives inside the tools your team already uses.",

  heroPrimaryCta: "Review your systems with us",
  /** DRAFT — drawn from `facts` below. Confirm before this ships. */
  heroStats: [
    { label: "Every interface", value: "Versioned" },
    { label: "Every boundary", value: "Tested" },
    { label: "By default", value: "Observable" },
  ],

  // Real narrated content with on-screen text and audio, so it is a player —
  // controls, sound, nothing downloaded until someone presses play. Native
  // 1:1 source, no cropping needed.
  heroMedia: {
    label: "Everything connected",
    hint: "public/integrations/hero.mp4",
    src: "/integrations/hero.mp4",
    kind: "video",
    mode: "player",
    ratio: "1/1",
  },

  /** Decorative loops beneath the use-case grid — muted, no controls. */
  useCaseMedia: [
    {
      label: "Automate it",
      hint: "public/integrations/automate-it.mp4",
      src: "/integrations/automate-it.mp4",
      kind: "video",
      mode: "loop",
      ratio: "16/9",
    },
    {
      label: "Real-time insight",
      hint: "public/integrations/real-time-insight.mp4",
      src: "/integrations/real-time-insight.mp4",
      kind: "video",
      mode: "loop",
      ratio: "16/9",
    },
  ],

  factsHeading: "How they are built",
  facts: [
    {
      value: "Versioned",
      label: "Every interface",
      note: "Changes ship behind a version. Nothing breaks the moment we deploy.",
    },
    {
      value: "Tested",
      label: "At every boundary",
      note: "Contract tests against each external system, run on every change.",
    },
    {
      value: "Observable",
      label: "By default",
      note: "Latency, error rate and throughput per integration, visible from day one.",
    },
    {
      value: "0",
      label: "Undocumented scripts",
      note: "No integration depends on one person remembering how it works.",
    },
  ],

  detail: {
    eyebrow: "What integration actually involves",
    title: "The connector is the easy part",
    lead: "Reading a record from an API takes an afternoon. Keeping two systems agreeing for three years, through token rotations, schema changes and rate limits, is the actual engagement.",
    groups: [
      {
        id: "systems",
        heading: "What we connect",
        intro: "Anything with an API — and the systems without one, which is usually where the real friction is.",
        items: [
          {
            name: "CRM and sales",
            detail: "Salesforce, HubSpot, Dynamics, Zoho, Pipedrive — including your custom objects and fields.",
          },
          {
            name: "ERP and finance",
            detail: "SAP, NetSuite, Dynamics, Xero, Tally, QuickBooks and the reporting built around them.",
          },
          {
            name: "Support and operations",
            detail: "Zendesk, Freshdesk, Intercom, ServiceNow, Jira, plus warehouse and logistics platforms.",
          },
          {
            name: "Legacy and internal",
            detail: "On-premise databases, SFTP drops, fixed-width files, and the internal tool nobody has touched in years.",
          },
        ],
      },
      {
        id: "handled",
        heading: "What we handle so you do not",
        intro: "The parts that make an integration survive contact with production and with time.",
        items: [
          {
            name: "Authentication and rotation",
            detail: "OAuth flows, service accounts and token refresh, so nothing expires quietly at 3am on a Sunday.",
          },
          {
            name: "Rate limits and backpressure",
            detail: "Queuing and throttling per vendor, so a burst degrades gracefully instead of being rejected.",
          },
          {
            name: "Field mapping and validation",
            detail: "Explicit, reviewable mapping between schemas, with type validation before anything is written.",
          },
          {
            name: "Backfill and reconciliation",
            detail: "Historic data loaded once, then drift between systems detected and reported continuously.",
          },
        ],
      },
    ],
  },

  flow: {
    eyebrow: "How an integration is delivered",
    title: "Mapped and tested before it touches live data",
    steps: [
      {
        id: "map",
        marker: "01",
        name: "Mapped",
        line: "Every field, object and edge case documented and agreed — including which system wins a conflict.",
      },
      {
        id: "auth",
        marker: "02",
        name: "Authenticated",
        line: "Least-privilege credentials scoped to exactly what is needed, with rotation handled automatically.",
      },
      {
        id: "sandbox",
        marker: "03",
        name: "Proven in sandbox",
        line: "Built against test instances with contract tests, so failures happen before real records are involved.",
      },
      {
        id: "backfill",
        marker: "04",
        name: "Backfilled",
        line: "History loaded and verified against source counts before continuous sync is switched on.",
      },
      {
        id: "sync",
        marker: "05",
        name: "Synced",
        line: "Incremental, idempotent updates in near real time, with conflicts resolved by the rules you set.",
      },
      {
        id: "watch",
        marker: "06",
        name: "Watched",
        line: "Drift, error rates and latency monitored, with alerts before anyone downstream notices a problem.",
      },
    ],
  },

  useCases: {
    eyebrow: "Where it earns its place",
    title: "Wherever your data is currently moved by a person",
    lead: "The candidates are easy to spot: someone exports a CSV on a schedule, or two teams argue about whose system is right.",
    items: [
      {
        name: "AI inside your CRM",
        line: "Summaries, next actions and enriched records where reps already work, not in a separate tool.",
      },
      {
        name: "Support with full context",
        line: "Order, account and usage history pulled into the ticket before an agent opens it.",
      },
      {
        name: "Warehouse and data platform",
        line: "Operational data landed in BigQuery, Snowflake or Postgres for reporting that reconciles.",
      },
      {
        name: "Legacy system bridges",
        line: "A modern API wrapped around a system that has none, so everything else can finally talk to it.",
      },
      {
        name: "Vendor and partner feeds",
        line: "Inbound files and APIs normalised, validated and loaded without a person babysitting them.",
      },
      {
        name: "Two-way sync",
        line: "Records kept consistent across systems, with conflict rules that reflect how you actually operate.",
      },
    ],
  },

  topology: {
    entry: { kind: "SOURCE", name: "Your systems" },
    core: { kind: "ARAXYS", name: "Integration Layer", stages: ["Map", "Validate", "Sync"] },
    endpoints: [
      { kind: "TARGET", name: "CRM & ERP" },
      { kind: "TARGET", name: "Support & Ops" },
      { kind: "TARGET", name: "Data warehouse" },
      { kind: "TARGET", name: "Legacy & SFTP" },
    ],
    escalation: { kind: "ALERTS", name: "On-call & drift" },
    caption: "Contract-tested · Observable",
    description:
      "Your systems feed the Araxys integration layer, which maps, validates and synchronises data out to your CRM and ERP, support and operations tools, data warehouse, and legacy or file-based systems. Drift and failures raise alerts to an on-call channel rather than degrading unnoticed.",
  },

  faqs: [
    {
      question: "One of our systems has no API. Can you still connect it?",
      answer:
        "Usually, yes. Options in order of preference: a direct database connection, a scheduled file exchange over SFTP, a vendor export we normalise, or — last resort — driving the interface itself. We will tell you plainly which one applies and what it costs to maintain, because the maintenance burden differs enormously between them.",
    },
    {
      question: "Why not use Zapier, Make or Workato?",
      answer:
        "For simple, low-volume connections between two popular SaaS tools, those are genuinely the right answer and we will say so. They struggle when you need custom conflict resolution, high volume, transactional guarantees, an unsupported legacy system, or per-record auditability. That is the point at which engineered integrations cost less than fighting the platform.",
    },
    {
      question: "Who owns the integration once it is built?",
      answer:
        "You do. Source lives in your repository from the first commit, with documentation, contract tests and a runbook. It deploys into your environment, and if you later bring it in-house or hand it to another partner, everything needed to do that is already yours.",
    },
    {
      question: "What happens when a vendor changes their API?",
      answer:
        "Contract tests run against each external system on a schedule and in CI, so a changed or removed field fails a build rather than corrupting data quietly. Vendors also publish deprecation notices we track. The result is that migrations become planned work instead of an incident.",
    },
    {
      question: "How do you handle sensitive data crossing systems?",
      answer:
        "Fields carrying personal or financial data are identified during mapping and treated explicitly — encrypted in transit and at rest, redacted from logs, and excluded from any system that does not need them. Access is least-privilege and every transfer is logged with its purpose.",
    },
    {
      question: "How long does a typical integration take?",
      answer:
        "A well-documented modern API with a clear mapping is usually one to two weeks including tests. Legacy systems, unclear ownership of data, or two-way sync with conflict resolution take longer — and the architecture phase gives you a fixed-scope estimate per integration before any build starts.",
    },
  ],
};
