import type { ServicePage } from "@/lib/services/types";

export const customSoftware: ServicePage = {
  slug: "custom-software",
  serviceId: "custom-software",
  glyph: "software",
  navLabel: "Custom Software",
  eyebrow: "Custom Software",
  title: "Software shaped around the process you already run well",
  lead: "Off-the-shelf products encode one opinion about how the work should be done. Where yours differs, the gap becomes permanent manual effort — a spreadsheet beside the system, forever. Purpose-built software closes it, and you own the result.",
  metaTitle: "Custom AI Software",
  metaDescription:
    "Purpose-built applications designed around the workflow you actually run, deployed in your environment, owned outright by you — with the documentation and tests to change it without us.",

  heroPrimaryCta: "Talk through what you need",
  heroMedia: {
    label: "Layered around what you need",
    hint: "public/software/hero.mp4",
    src: "/software/hero.mp4",
    kind: "video",
    mode: "loop",
    ratio: "1/1",
  },

  /** Decorative stills beneath the use-case grid. */
  useCaseMedia: [
    {
      label: "Yours from day one",
      hint: "public/software/yours-from-day-one.webp",
      src: "/software/yours-from-day-one.webp",
      kind: "image",
      ratio: "1/1",
    },
    {
      label: "Documented, not a black box",
      hint: "public/software/documented.webp",
      src: "/software/documented.webp",
      kind: "image",
      ratio: "1/1",
    },
  ],

  factsHeading: "The terms of the engagement",
  facts: [
    {
      value: "100%",
      label: "Yours",
      note: "Source in your repository from the first commit. No licence, no lock-in.",
    },
    {
      value: "2 weeks",
      label: "To architecture",
      note: "A documented design and a fixed price, before any code is written.",
    },
    {
      value: "Your cloud",
      label: "Deployment",
      note: "Runs in your accounts, under your controls and your data residency.",
    },
    {
      value: "0",
      label: "Per-seat fees",
      note: "Cost tracks usage and support, never how many people log in.",
    },
  ],

  detail: {
    eyebrow: "What we build, and how you get it",
    title: "Built to be handed over, not to create dependency",
    lead: "The measure of this work is whether your team could take it forward without us. Everything we produce is aimed at that outcome from the first week.",
    groups: [
      {
        id: "build",
        heading: "What we build",
        intro: "Applications that sit where no product fits — usually because your process is the thing that makes you competitive.",
        items: [
          {
            name: "Internal operations tools",
            detail: "The system your team runs the business in, replacing the spreadsheet everyone actually uses.",
          },
          {
            name: "Customer-facing portals",
            detail: "Self-service for your clients, connected live to the systems that hold the real data.",
          },
          {
            name: "AI-native applications",
            detail: "Products where retrieval, agents or voice are the core of the workflow, not a bolted-on panel.",
          },
          {
            name: "Data and reporting products",
            detail: "Interfaces over your operational data that reconcile, refresh and can be trusted in a board pack.",
          },
        ],
      },
      {
        id: "handover",
        heading: "What you receive",
        intro: "Not a black box. Everything required for a competent engineer to pick it up cold.",
        items: [
          {
            name: "The source, from day one",
            detail: "Your repository, your history — not a delivery dropped at the end of the engagement.",
          },
          {
            name: "Tests and evaluations",
            detail: "A suite that proves it works and catches regressions, so changes are safe to make.",
          },
          {
            name: "Architecture and runbooks",
            detail: "Why it is built this way, how it deploys, and what to do at 3am when something breaks.",
          },
          {
            name: "Enablement",
            detail: "Your team walked through the codebase and the deployment until they can operate it unaided.",
          },
        ],
      },
    ],
  },

  flow: {
    eyebrow: "How it is delivered",
    title: "Nothing is built before the expensive decisions are settled",
    steps: [
      {
        id: "discovery",
        marker: "01",
        name: "Discovery",
        line: "We sit with the people doing the work and map the process as it genuinely runs, not as the handbook describes it.",
      },
      {
        id: "architecture",
        marker: "02",
        name: "Architecture",
        line: "Data model, integrations, security and failure modes decided on paper, while changing our mind is still free.",
      },
      {
        id: "increments",
        marker: "03",
        name: "Two-week increments",
        line: "Working software every fortnight, used by real people, with direction corrected by what they actually do.",
      },
      {
        id: "integrate",
        marker: "04",
        name: "Integration",
        line: "Wired into your systems of record with your existing permissions mirrored rather than reinvented.",
      },
      {
        id: "deploy",
        marker: "05",
        name: "Deployment",
        line: "Into your environment, with monitoring, alerting and a tested rollback before the first real user.",
      },
      {
        id: "handover",
        marker: "06",
        name: "Handover",
        line: "Documentation, walkthroughs and support sized to what is actually running — not a retainer by default.",
      },
    ],
  },

  useCases: {
    eyebrow: "Where it earns its place",
    title: "When the spreadsheet beside the system is the real system",
    lead: "If your team has quietly built a workaround that the official tool cannot support, that workaround is a specification.",
    items: [
      {
        name: "Replacing the critical spreadsheet",
        line: "The shared workbook the business depends on, rebuilt with validation, history and concurrent access.",
      },
      {
        name: "Operations consoles",
        line: "One screen across systems that were never designed to be used together.",
      },
      {
        name: "Client portals",
        line: "Status, documents and requests self-served, cutting the email that consumes your team's day.",
      },
      {
        name: "Quoting and configuration",
        line: "Complex pricing rules encoded once, so quotes are consistent and no longer tribal knowledge.",
      },
      {
        name: "Compliance workflows",
        line: "Evidence, approvals and audit trails captured as work happens rather than reconstructed later.",
      },
      {
        name: "AI-native products",
        line: "Where retrieval, agents or voice are the product itself, not a feature added to something existing.",
      },
    ],
  },

  topology: {
    entry: { kind: "USERS", name: "Your team" },
    core: { kind: "ARAXYS", name: "Your Application", stages: ["Interface", "Logic", "Data"] },
    endpoints: [
      { kind: "CONNECTED", name: "Systems of record" },
      { kind: "CONNECTED", name: "AI services" },
      { kind: "CONNECTED", name: "Your database" },
      { kind: "CONNECTED", name: "Identity & SSO" },
    ],
    escalation: { kind: "OWNERSHIP", name: "Your repository" },
    caption: "Your cloud · Your code",
    description:
      "Your team uses an application built by Araxys, comprising its interface, business logic and data layer. It connects to your systems of record, AI services, database and identity provider, and the entire source lives in your own repository.",
  },

  faqs: [
    {
      question: "Why build when we could buy?",
      answer:
        "Usually you should buy. For anything commodity — email, accounting, payroll, CRM — a product will beat a build comfortably, and we will tell you so. Building earns its place where the process is genuinely yours, where the gap between the product and your workflow is being paid for daily in manual effort, or where that process is a competitive advantage you should not standardise away.",
    },
    {
      question: "Do we really own the code?",
      answer:
        "Yes, outright. It lands in your repository from the first commit, along with the architecture documentation, test suite and runbooks. There is no licence, no per-seat fee and no component we hold back. If you take it in-house or to another partner, nothing is missing.",
    },
    {
      question: "What happens if we want to change it later?",
      answer:
        "You change it. That is the point, and it is why we use a conventional stack, ordinary patterns and a real test suite rather than something exotic. Your own engineers can pick it up, and if you would prefer we make the change we will — but as a choice rather than because nobody else can.",
    },
    {
      question: "How do you keep the cost predictable?",
      answer:
        "Discovery and architecture are a fixed fee. Build work is then quoted as fixed-scope phases against that architecture, so you approve each phase on its own merits. Scope changes are re-quoted openly rather than absorbed silently and surfaced as an overrun at the end.",
    },
    {
      question: "Where does it run?",
      answer:
        "Your cloud account by default — AWS, Azure, GCP or on-premise — under your controls, your network policy and your data residency requirements. We can host it if you would rather not, but ownership and portability do not change either way.",
    },
    {
      question: "What support do we get after launch?",
      answer:
        "A monthly retainer sized to what is actually in production, covering monitoring, incident response and a defined amount of change. It is deliberately easy to leave: if your team takes over operations, the retainer should shrink or end. Support that only exists because handover was withheld is not support.",
    },
  ],
};
