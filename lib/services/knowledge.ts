import type { ServicePage } from "@/lib/services/types";

export const knowledge: ServicePage = {
  slug: "knowledge-retrieval",
  serviceId: "knowledge",
  glyph: "knowledge",
  navLabel: "Knowledge & Retrieval",
  eyebrow: "Knowledge & Retrieval",
  title: "The answer already exists. This is how people finally find it.",
  lead: "Your policies, contracts, runbooks and threads hold the answer to almost every question your team asks. A retrieval system makes them answerable in a sentence — with the source attached, and only for the people allowed to see it.",
  metaTitle: "Knowledge & Retrieval",
  metaDescription:
    "Enterprise knowledge bases and RAG systems that answer from your own documents, cite their sources, respect your existing permissions, and refuse rather than invent.",

  heroPrimaryCta: "Test it on your own documents",
  /** DRAFT — drawn from `facts` below. Confirm before this ships. */
  heroStats: [
    { label: "Every answer", value: "Cited" },
    { label: "Permissions", value: "Mirrored" },
    { label: "When unsure", value: "Refuses" },
  ],
  heroMedia: {
    label: "Answer with citations",
    hint: "public/knowledge/answer.mp4",
    src: "/knowledge/answer.mp4",
    kind: "video",
    mode: "player",
    ratio: "16/9",
  },

  /** Decorative loops beneath the use-case grid — muted, no controls. */
  useCaseMedia: [
    {
      label: "One place to ask",
      hint: "public/knowledge/one-place-to-ask.mp4",
      src: "/knowledge/one-place-to-ask.mp4",
      kind: "video",
      mode: "loop",
      ratio: "16/9",
    },
    {
      label: "Inside the tools you already use",
      hint: "public/knowledge/inside-the-tools.mp4",
      src: "/knowledge/inside-the-tools.mp4",
      kind: "video",
      mode: "loop",
      ratio: "16/9",
    },
  ],

  factsHeading: "What we commit to",
  facts: [
    {
      value: "100%",
      label: "Cited",
      note: "Every answer links the passage it came from. Unsourced claims are a bug.",
    },
    {
      value: "Mirrored",
      label: "Permissions",
      note: "If you cannot open the file, the assistant cannot quote it to you.",
    },
    {
      value: "Refuses",
      label: "When unsure",
      note: "Below the confidence threshold it says so rather than filling the gap.",
    },
    {
      value: "0",
      label: "Training on your data",
      note: "Your documents are retrieved from, never used to train a third-party model.",
    },
  ],

  detail: {
    eyebrow: "Built around where your knowledge actually lives",
    title: "No migration. No 'first, consolidate everything into one wiki.'",
    lead: "Every failed knowledge project starts with a tidying exercise nobody finishes. We index what you have, where it is, in whatever state it is in.",
    groups: [
      {
        id: "sources",
        heading: "Where it reads from",
        intro:
          "Connectors pull from the systems your documents already live in, and keep up as those documents change.",
        items: [
          {
            name: "Document stores",
            detail: "Google Drive, SharePoint, OneDrive, Dropbox, Box — folders and permissions intact.",
          },
          {
            name: "Wikis and tickets",
            detail: "Confluence, Notion, Jira, Zendesk, ServiceNow — including resolved-ticket history.",
          },
          {
            name: "Files nobody has cleaned up",
            detail: "Scanned PDFs, spreadsheets, slide decks and contracts, parsed with layout preserved.",
          },
          {
            name: "Conversations",
            detail: "Slack and Teams channels, where a surprising share of institutional knowledge only exists.",
          },
        ],
      },
      {
        id: "delivery",
        heading: "Where people ask",
        intro:
          "Answers arrive in the tool someone already has open, not in a new tab they must remember to visit.",
        items: [
          {
            name: "Slack and Teams",
            detail: "Ask in the channel where the question would have been asked anyway.",
          },
          {
            name: "Inside your helpdesk",
            detail: "Suggested answers with sources, drafted for an agent to approve rather than write.",
          },
          {
            name: "Your own product",
            detail: "An API returning grounded answers with citations, for the interface you already ship.",
          },
          {
            name: "A search page",
            detail: "When a plain, fast, permission-aware search over everything is what is actually wanted.",
          },
        ],
      },
    ],
  },

  flow: {
    eyebrow: "How an answer is produced",
    title: "Retrieval first, generation last",
    steps: [
      {
        id: "ingest",
        marker: "01",
        name: "Ingested",
        line: "Documents pulled from source with their permissions, version and last-modified date carried along.",
      },
      {
        id: "parse",
        marker: "02",
        name: "Parsed",
        line: "Layout-aware extraction keeps tables as tables and headings as structure, rather than flattening to soup.",
      },
      {
        id: "index",
        marker: "03",
        name: "Indexed",
        line: "Chunking strategy chosen by evaluation per corpus — a contract and a chat thread do not split the same way.",
      },
      {
        id: "retrieve",
        marker: "04",
        name: "Retrieved",
        line: "Hybrid keyword and semantic search, then reranked, and filtered to what this specific person may see.",
      },
      {
        id: "ground",
        marker: "05",
        name: "Grounded",
        line: "The model answers only from the retrieved passages. Nothing outside them is treated as knowledge.",
      },
      {
        id: "cite",
        marker: "06",
        name: "Cited",
        line: "Every claim links back to its source passage, so the reader can verify in one click.",
      },
    ],
  },

  useCases: {
    eyebrow: "Where it earns its place",
    title: "Anywhere the same question is answered by hand more than twice a day",
    lead: "The strongest first corpus is the one whose questions already flood a shared inbox or channel.",
    items: [
      {
        name: "Support deflection",
        line: "Repeat questions answered from documentation, with the source shown so agents trust it.",
      },
      {
        name: "HR and policy",
        line: "Leave, expenses and benefits answered per employee, with regional variants respected.",
      },
      {
        name: "Sales enablement",
        line: "Pricing, security posture and competitor answers pulled from approved material, not invented on a call.",
      },
      {
        name: "Engineering runbooks",
        line: "Incident procedures surfaced under pressure, when nobody has time to search Confluence.",
      },
      {
        name: "Contract and policy lookup",
        line: "Obligations, renewal dates and clauses found across thousands of documents in seconds.",
      },
      {
        name: "Onboarding",
        line: "New starters asking freely without spending their first month interrupting colleagues.",
      },
    ],
  },

  topology: {
    entry: { kind: "QUESTION", name: "A person asks" },
    core: { kind: "ARAXYS", name: "Retrieval Layer", stages: ["Search", "Rerank", "Ground"] },
    endpoints: [
      { kind: "SOURCE", name: "Drive & SharePoint" },
      { kind: "SOURCE", name: "Confluence & Notion" },
      { kind: "SOURCE", name: "Tickets & Threads" },
      { kind: "SOURCE", name: "Contracts & PDFs" },
    ],
    escalation: { kind: "FALLBACK", name: "Ask a person" },
    caption: "Permission-aware · Always cited",
    description:
      "A question enters the Araxys retrieval layer, which searches, reranks and grounds against your document stores, wikis, tickets and contracts, filtered to what the asker is permitted to see. When the answer is not present in your sources, it routes the question to a person rather than inventing one.",
  },

  faqs: [
    {
      question: "Do we have to reorganise our documents first?",
      answer:
        "No, and we would advise against making that a prerequisite — it is the step that kills most of these projects. We index what exists in place. Poorly structured sources do lower retrieval quality, but the evaluation set tells us precisely which corpora are weak, so cleanup becomes a targeted, evidence-led task rather than a boil-the-ocean one.",
    },
    {
      question: "How do you stop someone seeing what they should not?",
      answer:
        "Permissions are resolved at query time against your existing identity provider and the source system's own access rules, then applied as a filter before retrieval. The assistant physically cannot return a passage the asker could not already open. Every access is logged.",
    },
    {
      question: "What stops it making things up?",
      answer:
        "It answers only from retrieved passages, and every claim carries a citation — an uncited answer is treated as a defect, not a stylistic choice. Below the confidence threshold it declines and routes to a person. We measure this explicitly: the evaluation set includes questions your documents genuinely do not answer, and refusing them correctly is a pass.",
    },
    {
      question: "How current are the answers?",
      answer:
        "Connectors watch sources for changes and re-index on write, so a policy updated this morning is answerable this morning. Answers surface the source document's date, which matters more than people expect — it lets the reader judge whether they are looking at the current version.",
    },
    {
      question: "Can it handle scanned documents and spreadsheets?",
      answer:
        "Yes. Scanned PDFs go through layout-aware OCR, and spreadsheets and tables are parsed with structure preserved rather than flattened into a wall of text — which is why table lookups work at all. Quality varies with scan quality, and the evaluation set will tell you where it does.",
    },
    {
      question: "How is this different from the AI search built into our tools?",
      answer:
        "Built-in search only sees its own product. The value appears when an answer requires a policy in SharePoint, a resolved ticket in Zendesk and a Slack thread from last year — none of which can see each other. A single permission-aware layer across all of them is the thing no individual vendor will build for you.",
    },
  ],
};
