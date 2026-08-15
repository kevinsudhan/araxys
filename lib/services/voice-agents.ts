import type { ServicePage } from "@/lib/services/types";

export const voiceAgents: ServicePage = {
  slug: "voice-agents",
  serviceId: "voice-agents",
  glyph: "voice",
  navLabel: "Voice Agents",
  eyebrow: "AI Voice Agents",
  title: "A voice agent that answers every call — on the number you already use",
  lead: "It picks up on the first ring, understands what the caller wants, looks the answer up in your own systems, and hands to a person the moment it should. No new phone number, no rebuilt call flow.",
  metaTitle: "AI Voice Agents",
  metaDescription:
    "Voice agents that answer every call on the number you already use, look answers up in your CRM, calendar and databases live, and hand to a person the moment they should.",

  heroPrimaryCta: "Hear it on your own call flow",

  // Stat row shown under the CTAs — restatements of facts defined below and
  // in the FAQ, not new claims.
  heroStats: [
    { label: "Your number", value: "Unchanged" },
    { label: "Coverage", value: "24/7" },
    { label: "Handoff", value: "Warm transfer" },
  ],

  /**
   * Real narrated content with on-screen text and audio, so it is a player —
   * controls, sound, nothing downloaded until someone presses play.
   */
  heroMedia: {
    label: "Hero video",
    hint: "public/voice-agents/hero.mp4",
    src: "/voice-agents/hero.mp4",
    kind: "video",
    mode: "player",
    // Full, unedited source, shown at its own native ratio — no cropping.
    ratio: "1/1",
  },

  /** Static title card — "Every call, answered." — leading the call anatomy. */
  flowMedia: {
    label: "Every call, answered",
    hint: "public/voice-agents/call-answered.webp",
    src: "/voice-agents/call-answered.webp",
    kind: "image",
    ratio: "1536/2752",
  },

  /**
   * Native 4:3, so they drop straight into the paired slots. Both are
   * decorative loops — muted, no controls, and not fetched until scrolled to.
   */
  useCaseMedia: [
    {
      label: "Every call, answered",
      hint: "public/voice-agents/call-card.mp4",
      src: "/voice-agents/call-card.mp4",
      kind: "video",
      mode: "loop",
      ratio: "4/3",
    },
    {
      label: "Written back to your systems",
      hint: "public/voice-agents/write-back.mp4",
      src: "/voice-agents/write-back.mp4",
      kind: "video",
      mode: "loop",
      ratio: "4/3",
    },
  ],

  factsHeading: "What we commit to",
  facts: [
    {
      value: "<700ms",
      label: "Response latency",
      note: "Target time to first word, so turn-taking feels like a conversation.",
    },
    {
      value: "24/7",
      label: "Always answered",
      note: "Nights, weekends and holidays included — no queue, no voicemail.",
    },
    {
      value: "100%",
      label: "Logged",
      note: "Every call transcribed, outcome written back to your systems.",
    },
    {
      value: "0",
      label: "Dropped to voicemail",
      note: "Every call is either resolved or warm-transferred to a person.",
    },
  ],

  detail: {
    eyebrow: "Connects to what you already run",
    title: "It joins your phone system. It does not replace it.",
    lead: "The reason most voice pilots die is that they live beside the business rather than inside it. This one answers on your number and writes to your systems while the caller is still on the line.",
    groups: [
      {
        id: "telephony",
        heading: "Your telephony",
        intro:
          "The agent sits on the line you already own. Callers dial the same number they always have.",
        items: [
          {
            name: "Keep your existing numbers",
            detail: "Port them or simply forward — nothing changes for the people calling you.",
          },
          {
            name: "Any SIP or cloud carrier",
            detail: "Twilio, Telnyx, Vonage, or a SIP trunk into the PBX you already run.",
          },
          {
            name: "Alongside your current IVR",
            detail: "Take one menu option first, or replace the whole tree. Your call, reversible.",
          },
          {
            name: "Overflow mode",
            detail: "Answer only what rings out — after hours, at peak, or when the queue is full.",
          },
        ],
      },
      {
        id: "systems",
        heading: "Your systems",
        intro:
          "Mid-call, it reads and writes to the systems that actually run the business — live, not on a nightly sync.",
        items: [
          {
            name: "CRM",
            detail: "Salesforce, HubSpot, Zoho, Pipedrive — or the one you built yourself.",
          },
          {
            name: "Calendars",
            detail: "Google and Microsoft 365, booking into real availability with conflict checks.",
          },
          {
            name: "Helpdesk",
            detail: "Zendesk, Freshdesk, Intercom — tickets created with the transcript attached.",
          },
          {
            name: "Databases and internal APIs",
            detail:
              "Order status, account lookup, stock levels. Anything with an API, plus the legacy systems without one.",
          },
        ],
      },
    ],
  },

  flowLayout: "split",
  flow: {
    eyebrow: "Anatomy of a call",
    title: "Answered, resolved and written back before the line clears",
    steps: [
      {
        id: "answer",
        marker: "00:00",
        name: "Answered",
        line: "Picked up on the first ring. No hold music, no menu tree to climb.",
      },
      {
        id: "understand",
        marker: "00:02",
        name: "Understood",
        line: "Streaming transcription means it is following the sentence while it is still being spoken.",
      },
      {
        id: "lookup",
        marker: "00:06",
        name: "Looked up",
        line: "Queries your CRM, calendar or database live — the caller hears an answer, not a promise to call back.",
      },
      {
        id: "act",
        marker: "00:20",
        name: "Acted on",
        line: "Books the slot, updates the record, raises the ticket, sends the confirmation.",
      },
      {
        id: "escalate",
        marker: "—",
        name: "Escalated, when it should be",
        line: "Warm transfer to the right person with the transcript and context already on their screen.",
      },
      {
        id: "log",
        marker: "End",
        name: "Logged",
        line: "Transcript, recording, outcome and next action written back before the line clears.",
      },
    ],
  },

  useCases: {
    eyebrow: "Where it earns its place",
    title: "Start with one call type, not the whole switchboard",
    lead: "Every deployment begins with a single, high-volume, well-understood call type. It proves itself there before it touches anything else.",
    items: [
      {
        name: "Reception and routing",
        line: "Every caller greeted and sent to the right place, without a receptionist tied to the desk.",
      },
      {
        name: "Lead qualification",
        line: "Inbound enquiries qualified against your criteria and written to the CRM while still warm.",
      },
      {
        name: "Appointment booking",
        line: "Booked, rescheduled and confirmed against live calendar availability.",
      },
      {
        name: "Order and delivery status",
        line: "Looked up and read back from your own database, at any hour.",
      },
      {
        name: "Tier-one support",
        line: "The repeat questions resolved; everything else escalated with context attached.",
      },
      {
        name: "Outbound follow-up",
        line: "No-show recovery, renewal reminders and callbacks, at a volume a team cannot staff.",
      },
    ],
  },

  topology: {
    entry: { kind: "INBOUND", name: "Caller" },
    core: { kind: "ARAXYS", name: "Voice Agent", stages: ["Listen", "Understand", "Speak"] },
    endpoints: [
      { kind: "SYSTEM", name: "CRM" },
      { kind: "SYSTEM", name: "Calendar" },
      { kind: "SYSTEM", name: "Helpdesk" },
      { kind: "SYSTEM", name: "Database & APIs" },
    ],
    escalation: { kind: "ESCALATION", name: "Your team" },
    caption: "Your number · Your systems",
    description:
      "A caller dials your existing number, which routes over PSTN or a SIP trunk to the Araxys voice agent. The agent listens, understands and speaks, reading and writing live to your CRM, calendar, helpdesk and databases, and escalating to your team when its rules require a person.",
  },

  faqs: [
    {
      question: "Will callers know they are not talking to a person?",
      answer:
        "We recommend the agent says so, in the opening line. Being upfront tests better than being caught, it is a legal requirement in a growing number of places, and in practice callers mind far less than teams expect — provided the agent is fast and actually resolves the thing.",
    },
    {
      question: "What happens when it cannot help?",
      answer:
        "It transfers. Escalation rules are yours to define, and anything outside them goes to a person with the transcript and caller context already on screen, so nobody has to repeat themselves. Outside working hours it takes a full message and raises the ticket rather than dropping the caller into voicemail.",
    },
    {
      question: "Do we have to change our phone number?",
      answer:
        "No. Port the number to us or just forward it — callers dial exactly what they always have. If you would rather start small, point a single IVR option or your after-hours overflow at the agent and leave everything else untouched.",
    },
    {
      question: "How does it cope with strong accents or bad lines?",
      answer:
        "This is the part that separates a demo from production, so we tune it against your own call recordings during the build rather than a clean sample set. Where confidence is low the agent asks the caller to confirm instead of guessing, and persistent low confidence is an escalation trigger.",
    },
    {
      question: "Where do the recordings and transcripts go?",
      answer:
        "Wherever you decide — your cloud account or ours, with region and retention set as explicit choices rather than defaults. Transcripts can have PII redacted on write, and every access is logged. We do not train models on your calls.",
    },
    {
      question: "How long until it is taking real calls?",
      answer:
        "Two to three weeks to a documented design, then four to six to an agent handling a defined call type in shadow mode — listening to real calls and drafting responses that nobody hears — so accuracy is measured before a single caller reaches it.",
    },
  ],
};
