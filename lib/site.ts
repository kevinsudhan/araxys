/**
 * Single source of truth for every piece of copy on the site.
 *
 * REPLACE BEFORE LAUNCH — the following are placeholders:
 *   • site.url, site.email, site.linkedin, site.schedulingUrl
 *   • metrics[].value (use your real, defensible figures)
 *   • testimonials (see the note above that array)
 */

export const site = {
  name: "Araxys",
  role: "AI Engineering & Automation",
  url: "https://araxys.com",
  email: "hello@araxys.com",
  linkedin: "https://www.linkedin.com/company/araxys",
  /** Swap for your Cal.com / Calendly / HubSpot link. */
  schedulingUrl: "#contact",
  description:
    "Araxys designs and builds custom AI systems — autonomous agents, voice assistants, enterprise knowledge bases and intelligent automation — engineered around the way your business already works.",
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
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

export const metrics: Metric[] = [
  {
    value: 100,
    suffix: "%",
    label: "Custom AI Solutions",
    note: "Architected around your process. Never a repackaged template.",
  },
  {
    value: 80,
    suffix: "%",
    label: "Workflow Automation",
    note: "Typical reduction in manual handling across a mapped process.",
  },
  {
    value: 99.9,
    decimals: 1,
    suffix: "%",
    label: "Enterprise Ready",
    note: "Uptime target, with observability and alerting from day one.",
  },
  {
    value: 10,
    suffix: "×",
    label: "Scalable Architecture",
    note: "Volume headroom designed in before the first deployment.",
  },
  {
    value: 0,
    label: "Secure by Design",
    note: "Records leaving your perimeter unless you explicitly allow it.",
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
  problem: string;
  solution: string;
  outcome: string;
};

export const services: Service[] = [
  {
    id: "ai-agents",
    name: "AI Agents",
    glyph: "agent",
    problem:
      "Teams lose hours to multi-step processes that need judgment but follow the same rules every single time.",
    solution:
      "Goal-driven agents with scoped tool access, explicit guardrails, and deterministic fallbacks on the paths that must never improvise.",
    outcome:
      "Whole processes run end to end, with an audit trail for every decision and a human checkpoint wherever you want one.",
  },
  {
    id: "voice-agents",
    name: "AI Voice Agents",
    glyph: "voice",
    problem:
      "Calls go unanswered outside office hours, and phone work pulls your most capable people off higher-value tasks.",
    solution:
      "Low-latency voice agents on your existing telephony stack — live transcription, interruption handling, and warm transfer to a person.",
    outcome:
      "Every call answered, qualified, logged against the right record, and escalated only when a human genuinely adds something.",
  },
  {
    id: "knowledge-bases",
    name: "Enterprise Knowledge Bases",
    glyph: "knowledge",
    problem:
      "The answer already exists — in a wiki, a PDF, a Slack thread, someone's inbox — and nobody can reliably find it.",
    solution:
      "A governed knowledge layer that ingests your sources, preserves existing permissions, and keeps itself current as documents change.",
    outcome:
      "One place to ask, answers that cite their source, and access that mirrors your org structure exactly as it already is.",
  },
  {
    id: "rag-systems",
    name: "RAG Systems",
    glyph: "retrieval",
    problem:
      "General models fill gaps with plausible invention, and a confident wrong answer costs more than no answer at all.",
    solution:
      "Retrieval pipelines tuned per corpus — hybrid search, reranking, and chunking strategies chosen by evaluation rather than by default.",
    outcome:
      "Grounded, citable responses with measured accuracy you can regression-test before every single release.",
  },
  {
    id: "process-automation",
    name: "Business Process Automation",
    glyph: "process",
    problem:
      "Work moves between systems by copy-paste, and every handoff is another place for it to stall, duplicate, or quietly break.",
    solution:
      "Orchestrated workflows with typed state, idempotent steps, retry semantics, and alerting the moment reality diverges from the model.",
    outcome:
      "Processes that clear overnight instead of over days, with genuine exceptions surfaced rather than buried in a queue.",
  },
  {
    id: "ai-integrations",
    name: "AI Integrations",
    glyph: "integration",
    problem:
      "AI features stall in pilot because nothing connects them to the systems that actually run the business.",
    solution:
      "Production integrations into your CRM, ERP, ticketing, warehouse and internal services, with contract tests on every boundary.",
    outcome:
      "Intelligence delivered inside the tools your team already has open — no extra window, no new habit to build.",
  },
  {
    id: "custom-software",
    name: "Custom AI Software",
    glyph: "software",
    problem:
      "Off-the-shelf products force your process into their model, and the gap between the two becomes permanent manual work.",
    solution:
      "Purpose-built applications designed around the workflow you actually run, deployed in your environment and owned outright by you.",
    outcome:
      "Software that fits the process you already do well — and that you can change the week the process changes.",
  },
  {
    id: "ai-consulting",
    name: "Enterprise AI Consulting",
    glyph: "consulting",
    problem:
      "There are fifty candidate AI projects and no shared basis for deciding which three are actually worth funding.",
    solution:
      "Opportunity mapping against real process data, feasibility review, build-versus-buy analysis, and a sequenced delivery roadmap.",
    outcome:
      "A costed plan your finance, security and engineering leads can all sign off before a line of code is written.",
  },
  {
    id: "multi-agent",
    name: "Multi-Agent Systems",
    glyph: "swarm",
    problem:
      "A single agent doing everything becomes unpredictable at precisely the point the work becomes valuable enough to matter.",
    solution:
      "Specialised agents with narrow mandates, an explicit coordination layer, shared memory, and supervision that can halt a run mid-flight.",
    outcome:
      "Complex operations decomposed into parts you can test, observe, and improve independently of each other.",
  },
  {
    id: "api-integrations",
    name: "API Integrations",
    glyph: "api",
    problem:
      "Every new connection is another bespoke script that exactly one person in the building understands.",
    solution:
      "Versioned, documented API layers with authentication, rate-limit handling, schema validation and observability built in from the start.",
    outcome:
      "Integrations that survive vendor changes and staff turnover, because they were engineered rather than improvised.",
  },
];

/* ------------------------------------------------------------------ process */

export type ProcessStep = {
  id: string;
  name: string;
  summary: string;
  detail: string;
  outputs: string[];
};

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    name: "Discovery",
    summary: "We map the process as it genuinely runs, not as the handbook describes it.",
    detail:
      "We sit with the people doing the work and collect volumes, timings and exception rates. Then we separate the steps that are pure rules from the ones that need judgment — and name the ones that should stay manual.",
    outputs: ["Process map", "Opportunity register", "Baseline metrics"],
  },
  {
    id: "architecture",
    name: "Architecture",
    summary: "System design settled on paper before anyone opens an editor.",
    detail:
      "Model selection, retrieval strategy, data boundaries, failure modes and human checkpoints are decided and documented up front. Security review happens here, while changing our mind is still cheap.",
    outputs: ["Architecture document", "Evaluation plan", "Fixed-scope estimate"],
  },
  {
    id: "development",
    name: "Development",
    summary: "Two-week increments, measured against an evaluation suite rather than a demo.",
    detail:
      "Every increment ships behind an eval suite built from your real cases, so accuracy is a number we both watch rather than an impression. Code lands in your repository from the first commit.",
    outputs: ["Working increments", "Evaluation suite", "Code in your repo"],
  },
  {
    id: "integration",
    name: "Integration",
    summary: "Connected to your systems of record with permissions mirrored exactly.",
    detail:
      "We wire into CRM, ERP, ticketing, telephony and data platforms, reflecting your existing access model rather than inventing a parallel one. Contract tests guard every boundary we don't control.",
    outputs: ["Live integrations", "Sandbox environment", "Operational runbook"],
  },
  {
    id: "deployment",
    name: "Deployment",
    summary: "Shadow mode first, then a limited cohort, then full rollout.",
    detail:
      "The system runs alongside your team and is scored before it is trusted with anything. Monitoring, alerting and a tested rollback path are in place before the first real transaction.",
    outputs: ["Staged rollout", "Monitoring & alerting", "Team enablement"],
  },
  {
    id: "improvement",
    name: "Continuous Improvement",
    summary: "Measured monthly, tuned deliberately, expanded only where it earns it.",
    detail:
      "Accuracy, coverage and cost per outcome are reviewed against the baseline we captured in discovery. Scope grows into adjacent processes once the current one is genuinely stable.",
    outputs: ["Live dashboards", "Monthly review", "Forward roadmap"],
  },
];

/* --------------------------------------------------------------- comparison */

export type ComparisonRow = {
  dimension: string;
  generic: string;
  araxys: string;
};

export const comparison: ComparisonRow[] = [
  {
    dimension: "Process fit",
    generic: "Your workflow bends to fit the product's assumptions.",
    araxys: "The system is designed around the process you already run.",
  },
  {
    dimension: "Your data",
    generic: "Sent to a vendor whose roadmap it quietly improves.",
    araxys: "Stays in your environment, under your retention rules.",
  },
  {
    dimension: "Integrations",
    generic: "Whatever the vendor's connector list happens to cover.",
    araxys: "Any system with an API — plus the legacy ones without.",
  },
  {
    dimension: "Accuracy",
    generic: "A demo that impresses, and no way to detect drift after.",
    araxys: "Evaluation suites per use case, regression-tested each release.",
  },
  {
    dimension: "Cost curve",
    generic: "Per-seat pricing that scales with headcount, not with value.",
    araxys: "You own the asset. Cost tracks usage, not licences.",
  },
  {
    dimension: "Changing it",
    generic: "Feature requests queue behind every other customer.",
    araxys: "Source in your repository. Change it when the business changes.",
  },
];

/* ---------------------------------------------------------------- industries */

export type IndustryIcon =
  | "finance"
  | "healthcare"
  | "manufacturing"
  | "retail"
  | "logistics"
  | "education"
  | "realEstate"
  | "saas"
  | "operations";

export type Industry = {
  name: string;
  icon: IndustryIcon;
  application: string;
};

export const industries: Industry[] = [
  {
    name: "Finance",
    icon: "finance",
    application: "Reconciliation, KYC review and reporting packs assembled without manual collation.",
  },
  {
    name: "Healthcare",
    icon: "healthcare",
    application: "Intake, prior-authorisation paperwork and documentation support under strict access control.",
  },
  {
    name: "Manufacturing",
    icon: "manufacturing",
    application: "Supplier correspondence, quality-report triage and maintenance scheduling driven by ERP signals.",
  },
  {
    name: "Retail",
    icon: "retail",
    application: "Order exceptions, supplier onboarding and product data enrichment across thousands of SKUs.",
  },
  {
    name: "Logistics",
    icon: "logistics",
    application: "Shipment exception handling, document extraction and carrier communication at volume.",
  },
  {
    name: "Education",
    icon: "education",
    application: "Admissions triage, policy-grounded student answers and a lighter administrative load on faculty.",
  },
  {
    name: "Real Estate",
    icon: "realEstate",
    application: "Voice lead qualification, lease abstraction and document intelligence across portfolios.",
  },
  {
    name: "SaaS",
    icon: "saas",
    application: "Support deflection, onboarding assistance and churn signals drawn from product and ticket data.",
  },
  {
    name: "Enterprise Operations",
    icon: "operations",
    application: "Procurement, HR, IT and finance requests handled inside the tools teams already use.",
  },
];

/* ----------------------------------------------------------------- solutions */

export type Solution = {
  id: string;
  category: string;
  name: string;
  description: string;
  capabilities: [string, string, string];
};

export const solutions: Solution[] = [
  {
    id: "support",
    category: "Support",
    name: "Customer Support AI",
    description:
      "Resolves the questions that repeat, and routes everything else to a person with the full context already attached.",
    capabilities: ["Policy-grounded retrieval", "Ticket deflection", "Warm handoff"],
  },
  {
    id: "invoice",
    category: "Finance",
    name: "Invoice Automation",
    description:
      "Extracts, validates and posts invoices, holding back only the ones that genuinely need a human decision.",
    capabilities: ["Document extraction", "Three-way match", "ERP posting"],
  },
  {
    id: "sales",
    category: "Revenue",
    name: "AI Sales Assistant",
    description:
      "Researches accounts, drafts contextual follow-ups, and keeps the CRM accurate without asking reps to maintain it.",
    capabilities: ["Account research", "CRM hygiene", "Sequence drafting"],
  },
  {
    id: "receptionist",
    category: "Front Office",
    name: "Voice Receptionist",
    description:
      "Answers every inbound call, books directly into live calendars, and transfers the moment a person is needed.",
    capabilities: ["Sub-second latency", "Calendar booking", "Warm transfer"],
  },
  {
    id: "hr",
    category: "People",
    name: "HR Knowledge Assistant",
    description:
      "Answers policy questions from source documents, with regional and contractual variants correctly respected.",
    capabilities: ["Policy grounding", "Access control", "Cited answers"],
  },
  {
    id: "copilot",
    category: "Operations",
    name: "Internal Copilot",
    description:
      "One assistant across your internal systems, scoped precisely to what each individual is permitted to see.",
    capabilities: ["Multi-system tools", "Permission mirroring", "Full audit log"],
  },
  {
    id: "documents",
    category: "Data",
    name: "Document Intelligence",
    description:
      "Turns contracts, forms and scans into structured records your existing systems can consume directly.",
    capabilities: ["Layout-aware OCR", "Schema validation", "Confidence routing"],
  },
  {
    id: "multi-agent-ops",
    category: "Autonomy",
    name: "Multi-Agent Operations",
    description:
      "A supervised team of specialised agents running a complete operational process from trigger to close.",
    capabilities: ["Specialised agents", "Coordination layer", "Halt and review"],
  },
];

/* ----------------------------------------------------------- differentiators */

export type ValueIcon =
  | "custom"
  | "security"
  | "stack"
  | "velocity"
  | "human"
  | "partnership";

export type Differentiator = {
  name: string;
  icon: ValueIcon;
  body: string;
};

export const differentiators: Differentiator[] = [
  {
    name: "Custom-Built Solutions",
    icon: "custom",
    body: "Every system starts from your process, not from a template we are trying to resell for the fourth time.",
  },
  {
    name: "Enterprise Security",
    icon: "security",
    body: "Least-privilege access, data residency you choose, complete audit trails, and your existing SSO from day one.",
  },
  {
    name: "Modern LLM Stack",
    icon: "stack",
    body: "Model-agnostic architecture, so you are never locked to a single provider's pricing, limits or roadmap.",
  },
  {
    name: "Rapid Development",
    icon: "velocity",
    body: "A first working increment in weeks, evaluated against your real data long before it touches production.",
  },
  {
    name: "Human-Centered Design",
    icon: "human",
    body: "Automation designed around where judgment belongs, with explicit checkpoints, overrides and escalation.",
  },
  {
    name: "Long-Term Partnership",
    icon: "partnership",
    body: "Documentation and handover built to outlast the engagement, rather than to manufacture dependency on us.",
  },
];

/* -------------------------------------------------------------- testimonials */

/**
 * PLACEHOLDER CONTENT — do not publish as-is.
 * Replace with approved quotes from real clients before launch. Attribution is
 * deliberately anonymised (initials + role + sector) so that it cannot be
 * mistaken for a named endorsement while it remains placeholder copy.
 */
export type Testimonial = {
  quote: string;
  initials: string;
  role: string;
  sector: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They spent the first two weeks understanding how we actually work before proposing anything. What came out of it handles cases our previous vendor's product could not even represent.",
    initials: "MR",
    role: "Head of Operations",
    sector: "Logistics",
  },
  {
    quote:
      "The evaluation suite changed the conversation internally. We could show our risk committee a measured accuracy figure instead of asking them to trust a demonstration.",
    initials: "SK",
    role: "Director of Technology",
    sector: "Financial Services",
  },
  {
    quote:
      "Our support team moved from triaging everything to reviewing exceptions. Nobody lost a role — the work simply stopped being repetitive.",
    initials: "JA",
    role: "Customer Experience Lead",
    sector: "SaaS",
  },
];

/* ---------------------------------------------------------------------- FAQ */

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "How is this different from buying an off-the-shelf AI tool?",
    answer:
      "A product has to serve thousands of customers, so it encodes one opinion about how the work should be done. Where your process differs, the gap becomes permanent manual effort. We start from your process, integrate with the systems you already run, and hand you software you own outright.",
  },
  {
    question: "How long until a first system is in production?",
    answer:
      "Discovery and architecture typically take two to three weeks. A first working increment follows within four to six weeks of that, running in shadow mode against real data. Full rollout depends on how many systems it needs to touch and how your change process works — we scope both explicitly before starting.",
  },
  {
    question: "Where does our data go, and what happens to it?",
    answer:
      "Wherever you decide. We deploy inside your cloud account or ours, with the region and retention period as an explicit architectural decision rather than a default. We do not train models on your data, and every system ships with an audit log of what was accessed, by whom, and when.",
  },
  {
    question: "Which models do you build on?",
    answer:
      "Whichever fits the task, measured rather than assumed — frontier models for reasoning-heavy steps, smaller or open-weight models where latency and cost dominate. The architecture keeps the model behind an interface, so swapping providers is a configuration change and not a rebuild.",
  },
  {
    question: "What happens when the system gets something wrong?",
    answer:
      "It is designed on the assumption that it will. Confidence thresholds route uncertain cases to a person, guardrails constrain what an agent can do unsupervised, and every run is traced end to end. Failures become evaluation cases, which is how accuracy improves release over release.",
  },
  {
    question: "Do we own the code?",
    answer:
      "Yes. Source lands in your repository from the first commit, along with the architecture documentation, evaluation suite and runbooks. If you later want to take it fully in-house, everything needed to do that is already in your hands.",
  },
  {
    question: "How do you price engagements?",
    answer:
      "Discovery and architecture are a fixed fee. Build work is quoted as fixed-scope phases against the architecture, so you approve cost per phase rather than signing an open-ended commitment. Ongoing support is a monthly retainer sized to the systems actually in production.",
  },
  {
    question: "We have no in-house AI expertise. Is that a problem?",
    answer:
      "No — it is the normal starting point. You bring deep knowledge of your process, which is the part that cannot be outsourced. We handle the engineering, and enablement is part of delivery: your team leaves able to operate, monitor and extend what we build together.",
  },
];
