import type { ServicePage } from "@/lib/services/types";

export const aiAgents: ServicePage = {
  slug: "ai-agents",
  serviceId: "ai-agents",
  glyph: "agent",
  navLabel: "AI Agents",
  eyebrow: "AI Agents",
  title: "Agents that finish the work, with a checkpoint wherever you want one",
  lead: "Most business processes are ninety per cent rules and ten per cent judgment. An agent runs the ninety, pauses at the ten, and leaves a trace of every decision it made along the way.",
  metaTitle: "AI Agents",
  metaDescription:
    "Goal-driven AI agents that run multi-step business processes end to end across your systems, with scoped tool access, explicit guardrails and a human checkpoint wherever you want one.",

  heroPrimaryCta: "Map a process with us",
  /** DRAFT — drawn from `facts` below. Confirm before this ships. */
  heroStats: [
    { label: "Tool access", value: "Scoped" },
    { label: "Every decision", value: "Traced" },
    { label: "Mid-run halt", value: "Always" },
  ],
  heroMedia: {
    label: "Agents that finish the work",
    hint: "public/agents/hero.mp4",
    src: "/agents/hero.mp4",
    kind: "video",
    mode: "loop",
    ratio: "1/1",
  },

  /** Decorative stills beneath the use-case grid. */
  useCaseMedia: [
    {
      label: "Scoped, not open-ended",
      hint: "public/agents/scoped-access.webp",
      src: "/agents/scoped-access.webp",
      kind: "image",
      ratio: "1/1",
    },
    {
      label: "A checkpoint, wherever you want one",
      hint: "public/agents/checkpoint.webp",
      src: "/agents/checkpoint.webp",
      kind: "image",
      ratio: "1/1",
    },
  ],

  factsHeading: "How they are built",
  facts: [
    {
      value: "100%",
      label: "Traced",
      note: "Every tool call, input and decision recorded and replayable after the fact.",
    },
    {
      value: "Scoped",
      label: "Tool access",
      note: "An agent can reach only the systems and actions you explicitly grant it.",
    },
    {
      value: "Halt",
      label: "Always available",
      note: "Any run can be paused or stopped mid-flight, by a rule or by a person.",
    },
    {
      value: "0",
      label: "Silent failures",
      note: "Anything uncertain stops and surfaces. Nothing is quietly guessed at.",
    },
  ],

  detail: {
    eyebrow: "How an agent is bounded",
    title: "Autonomy is a dial, not a switch",
    lead: "The question is never whether an agent is capable of an action — it is whether it is permitted to take that action unsupervised. Both halves are designed before anything is built.",
    groups: [
      {
        id: "triggers",
        heading: "What starts a run",
        intro:
          "Agents do not sit and wait to be prompted. They are woken by the events your business already produces.",
        items: [
          {
            name: "A record changes",
            detail: "A deal moves stage, a ticket is raised, an invoice arrives, a form is submitted.",
          },
          {
            name: "A schedule",
            detail: "Nightly reconciliation, weekly reporting, month-end close — run and checked before you arrive.",
          },
          {
            name: "A message",
            detail: "An email into a shared inbox, a Slack mention, a webhook from a third party.",
          },
          {
            name: "A person",
            detail: "Someone asks for it directly, from the tool they already have open.",
          },
        ],
      },
      {
        id: "guardrails",
        heading: "What keeps it in bounds",
        intro:
          "Every agent ships with its limits written down and enforced in code, not implied in a prompt.",
        items: [
          {
            name: "Least-privilege tools",
            detail: "Read-only where reading is enough. Write access granted per action, never wholesale.",
          },
          {
            name: "Value and risk thresholds",
            detail: "Above your limit — refunds, credits, contract changes — it stops and asks a person.",
          },
          {
            name: "Deterministic paths",
            detail: "Steps that must never improvise are plain code. The model decides only what genuinely needs judgment.",
          },
          {
            name: "Loop and cost ceilings",
            detail: "Runs are bounded in steps, time and spend. A confused agent stops rather than spirals.",
          },
        ],
      },
    ],
  },

  flow: {
    eyebrow: "Anatomy of a run",
    title: "Plan, act, verify — and prove it afterwards",
    steps: [
      {
        id: "trigger",
        marker: "01",
        name: "Triggered",
        line: "An event in your systems starts the run, carrying the context it needs to begin.",
      },
      {
        id: "plan",
        marker: "02",
        name: "Planned",
        line: "The agent decomposes the goal into concrete steps against the tools it is actually allowed to use.",
      },
      {
        id: "act",
        marker: "03",
        name: "Acted",
        line: "It executes step by step — reading records, calling APIs, drafting output, writing results.",
      },
      {
        id: "verify",
        marker: "04",
        name: "Verified",
        line: "Each result is checked against the expected shape before the next step depends on it.",
      },
      {
        id: "checkpoint",
        marker: "05",
        name: "Checkpointed",
        line: "Anything above your risk threshold pauses here and waits for a person to approve or reject.",
      },
      {
        id: "close",
        marker: "06",
        name: "Closed and traced",
        line: "The outcome is written back and the full trace stored — inputs, tool calls, decisions, cost.",
      },
    ],
  },

  useCases: {
    eyebrow: "Where they earn their place",
    title: "Processes that repeat, span systems, and stall on handoffs",
    lead: "The best first candidate is high-volume, well-understood, and currently done by someone copying between two screens.",
    items: [
      {
        name: "Order exception handling",
        line: "Mismatches investigated across ERP and carrier data, resolved or escalated with the evidence attached.",
      },
      {
        name: "Invoice processing",
        line: "Extracted, matched against PO and receipt, posted — with only genuine discrepancies reaching a person.",
      },
      {
        name: "Customer onboarding",
        line: "Accounts created across every system, documents chased, and status kept current without a checklist.",
      },
      {
        name: "Renewal preparation",
        line: "Usage, tickets and contract terms assembled into a briefing before the account manager asks.",
      },
      {
        name: "Reconciliation",
        line: "Ledgers compared nightly, breaks identified and categorised, clean items closed automatically.",
      },
      {
        name: "Internal request triage",
        line: "IT, HR and finance requests classified, routed and actioned where the rules are unambiguous.",
      },
    ],
  },

  topology: {
    entry: { kind: "TRIGGER", name: "Event" },
    core: { kind: "ARAXYS", name: "Agent Layer", stages: ["Plan", "Act", "Verify"] },
    endpoints: [
      { kind: "SYSTEM", name: "CRM" },
      { kind: "SYSTEM", name: "ERP" },
      { kind: "SYSTEM", name: "Database" },
      { kind: "SYSTEM", name: "Internal APIs" },
    ],
    escalation: { kind: "CHECKPOINT", name: "Human approval" },
    caption: "Scoped tools · Traced runs",
    description:
      "An event in your systems triggers the Araxys agent layer, which plans, acts and verifies. It reads and writes to your CRM, ERP, databases and internal APIs using only the access it has been granted, and pauses for human approval whenever a decision exceeds the thresholds you set.",
  },

  faqs: [
    {
      question: "How is this different from a workflow tool like Zapier or n8n?",
      answer:
        "Those execute a fixed path you drew in advance, which is exactly right when every case looks the same. An agent handles the cases that do not: it reads an unusual email, decides which of six paths applies, and stops when none of them do. We use ordinary automation for the deterministic parts precisely because it is cheaper and more predictable — the agent is reserved for the judgment.",
    },
    {
      question: "What stops it doing something expensive or irreversible?",
      answer:
        "Three things. Tool access is granted per action, so it cannot call what it was never given. Value thresholds you define force a pause for approval. And irreversible operations are deliberately implemented as deterministic code with their own confirmation step rather than left to the model's discretion.",
    },
    {
      question: "Can we see what it did and why?",
      answer:
        "Yes — every run stores a full trace: the trigger, the plan, each tool call with its inputs and outputs, each decision, the token and API cost, and the final outcome. Traces are replayable, which is how we debug and how you audit.",
    },
    {
      question: "What happens when an agent gets it wrong?",
      answer:
        "It is designed on the assumption that it will. Validation failures stop the run rather than propagate. Anything uncertain routes to a person. And the failure becomes an evaluation case, so the same mistake is caught automatically on every subsequent release.",
    },
    {
      question: "Do we need to change our existing systems?",
      answer:
        "No. Agents work through the APIs your systems already expose, and for legacy systems without one we build an integration layer around them. Nothing is replaced, and nothing depends on a migration finishing first.",
    },
    {
      question: "How do you price this?",
      answer:
        "Discovery and architecture at a fixed fee, then build quoted as fixed-scope phases against that architecture. Running costs are model and API usage, which the trace makes visible per run — so cost per outcome is a number you can actually see.",
    },
  ],
};
