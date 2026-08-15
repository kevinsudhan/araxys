import type { ServicePage } from "@/lib/services/types";

export const automation: ServicePage = {
  slug: "process-automation",
  serviceId: "automation",
  glyph: "process",
  navLabel: "Process Automation",
  eyebrow: "Process Automation",
  title: "Work that moves between systems without anyone carrying it",
  lead: "Most operational delay is not work — it is waiting. A record sits in one system until somebody notices and retypes it into another. Orchestration removes the waiting and surfaces only the cases that genuinely need a decision.",
  metaTitle: "Business Process Automation",
  metaDescription:
    "Orchestrated business process automation with typed state, idempotent steps, retries and alerting — so work clears overnight and real exceptions are surfaced rather than buried.",

  heroPrimaryCta: "Map your slowest process",
  heroMedia: {
    label: "Work that moves on its own",
    hint: "public/automation/hero.mp4",
    src: "/automation/hero.mp4",
    kind: "video",
    mode: "loop",
    ratio: "1/1",
  },

  /** Decorative stills beneath the use-case grid. */
  useCaseMedia: [
    {
      label: "Only the real exceptions surface",
      hint: "public/automation/exceptions-surfaced.webp",
      src: "/automation/exceptions-surfaced.webp",
      kind: "image",
      ratio: "1/1",
    },
    {
      label: "Runs in your cloud",
      hint: "public/automation/runs-in-your-cloud.webp",
      src: "/automation/runs-in-your-cloud.webp",
      kind: "image",
      ratio: "1/1",
    },
  ],

  factsHeading: "How it is engineered",
  facts: [
    {
      value: "Idempotent",
      label: "Every step",
      note: "A retry re-runs safely. Nothing is charged, sent or created twice.",
    },
    {
      value: "Typed",
      label: "State",
      note: "Each step declares what it needs and returns. Malformed data stops the run.",
    },
    {
      value: "Alerted",
      label: "On divergence",
      note: "When reality stops matching the model, someone is told — immediately.",
    },
    {
      value: "0",
      label: "Silent queues",
      note: "Exceptions surface in a worklist. Nothing decays quietly in a folder.",
    },
  ],

  detail: {
    eyebrow: "Built for the messy middle",
    title: "The happy path is the easy ten per cent",
    lead: "Anyone can automate a process where every input is clean. The engineering is in what happens when a field is blank, an API is down, or the same invoice arrives twice.",
    groups: [
      {
        id: "starts",
        heading: "What starts a run",
        intro: "Runs are driven by the events your business already emits — no one has to remember to kick them off.",
        items: [
          {
            name: "Inbound documents",
            detail: "An invoice, order or form arrives by email, upload or API and starts its own processing.",
          },
          {
            name: "System events",
            detail: "A status change in your ERP, CRM or warehouse system triggers the next stage automatically.",
          },
          {
            name: "Schedules",
            detail: "Nightly reconciliation, weekly reporting and month-end routines, finished before anyone logs in.",
          },
          {
            name: "Thresholds",
            detail: "Stock below a level, an SLA about to breach, a payment overdue — noticed without a human watching.",
          },
        ],
      },
      {
        id: "handles",
        heading: "What it does with the awkward cases",
        intro: "Exceptions are the point of the system, not an afterthought bolted on once it is live.",
        items: [
          {
            name: "Retries with backoff",
            detail: "Transient failures resolve themselves. Only persistent ones become anybody's problem.",
          },
          {
            name: "Duplicate detection",
            detail: "The same document arriving twice is recognised and collapsed, not processed twice.",
          },
          {
            name: "Exception worklist",
            detail: "Cases needing judgment queue with full context, so a person decides in seconds rather than investigates for minutes.",
          },
          {
            name: "Compensating actions",
            detail: "A run that fails halfway unwinds what it already did, instead of leaving your systems disagreeing.",
          },
        ],
      },
    ],
  },

  flow: {
    eyebrow: "Anatomy of a run",
    title: "Every run is a record you can inspect afterwards",
    steps: [
      {
        id: "trigger",
        marker: "01",
        name: "Triggered",
        line: "An event, document or schedule starts the run with a unique key that makes it safe to repeat.",
      },
      {
        id: "validate",
        marker: "02",
        name: "Validated",
        line: "Inputs checked against a schema before anything is written. Bad data fails here, not three systems later.",
      },
      {
        id: "enrich",
        marker: "03",
        name: "Enriched",
        line: "Related records pulled from your systems so the decision is made with complete context.",
      },
      {
        id: "execute",
        marker: "04",
        name: "Executed",
        line: "Steps run in order, each idempotent, each recording what it changed and where.",
      },
      {
        id: "exception",
        marker: "05",
        name: "Excepted, if needed",
        line: "Anything ambiguous or above threshold routes to the worklist with the evidence attached.",
      },
      {
        id: "close",
        marker: "06",
        name: "Closed",
        line: "Systems updated, notifications sent, and the full run history retained for audit.",
      },
    ],
  },

  useCases: {
    eyebrow: "Where it earns its place",
    title: "High volume, clear rules, and a handoff that always stalls",
    lead: "Pick the process people complain about. It is usually high-volume, rules-based, and blocked on somebody retyping something.",
    items: [
      {
        name: "Invoice to payment",
        line: "Extracted, matched against PO and receipt, posted — with only true discrepancies held for review.",
      },
      {
        name: "Order exceptions",
        line: "Short shipments, address failures and stock issues investigated and resolved before the customer calls.",
      },
      {
        name: "Employee onboarding",
        line: "Accounts, access, equipment and paperwork provisioned across every system on day one.",
      },
      {
        name: "Reconciliation",
        line: "Ledgers, statements and settlements compared nightly, with only genuine breaks escalated.",
      },
      {
        name: "Supplier onboarding",
        line: "Documents collected and validated, records created, compliance checks tracked to completion.",
      },
      {
        name: "Reporting packs",
        line: "Assembled from source systems on schedule, consistent every time, without a late-night export.",
      },
    ],
  },

  topology: {
    entry: { kind: "TRIGGER", name: "Event or document" },
    core: { kind: "ARAXYS", name: "Orchestrator", stages: ["Validate", "Execute", "Reconcile"] },
    endpoints: [
      { kind: "SYSTEM", name: "ERP" },
      { kind: "SYSTEM", name: "CRM" },
      { kind: "SYSTEM", name: "Warehouse" },
      { kind: "SYSTEM", name: "Finance" },
    ],
    escalation: { kind: "EXCEPTION", name: "Worklist" },
    caption: "Idempotent · Fully audited",
    description:
      "An event or inbound document triggers the Araxys orchestrator, which validates, executes and reconciles across your ERP, CRM, warehouse and finance systems. Cases that are ambiguous or exceed a threshold route to a human worklist with full context rather than failing silently.",
  },

  faqs: [
    {
      question: "How is this different from RPA?",
      answer:
        "Robotic process automation drives the user interface — it clicks buttons as a person would, and it breaks whenever a screen layout changes. We integrate at the API and data layer, which is more durable and far faster. Where a system genuinely has no API we will still automate the interface, but as a deliberate last resort rather than the default technique.",
    },
    {
      question: "What happens when one of our systems is down?",
      answer:
        "The run pauses at that step rather than failing the whole process. Transient errors are retried with backoff, and if the outage persists the run holds in a resumable state and alerts. When the system returns, work resumes from where it stopped — no partial writes, no duplicates.",
    },
    {
      question: "Do we lose visibility once it is automated?",
      answer:
        "You gain it. Manual processes are invisible by nature — nobody knows how many invoices are mid-flight or how long a step really takes. Every run here is recorded with timings, so volumes, cycle time and exception rates become numbers on a dashboard for the first time.",
    },
    {
      question: "What about the cases that genuinely need a human?",
      answer:
        "They are designed in from the start, not treated as failures. Discovery explicitly identifies which steps require judgment, and those become checkpoints in the exception worklist with the context pre-assembled — so a person spends seconds deciding rather than minutes gathering.",
    },
    {
      question: "Will this replace people's jobs?",
      answer:
        "In practice it removes the copying and chasing, and the same team handles a larger volume while spending their time on exceptions and customers. We will tell you honestly during discovery which steps should stay manual — some should, either because judgment matters or because the volume does not justify the engineering.",
    },
    {
      question: "How do you decide what to automate first?",
      answer:
        "Discovery measures volume, cycle time and exception rate on the real process, then ranks candidates by effort against hours recovered. You get a costed list, and we usually recommend starting with the second or third item rather than the largest — a fast, visible win builds more internal support than an ambitious one.",
    },
  ],
};
