import { aiAgents } from "@/lib/services/ai-agents";
import { automation } from "@/lib/services/automation";
import { customSoftware } from "@/lib/services/custom-software";
import { integrations } from "@/lib/services/integrations";
import { knowledge } from "@/lib/services/knowledge";
import type { ServicePage } from "@/lib/services/types";
import { voiceAgents } from "@/lib/services/voice-agents";

/** Order matches the home page grid. */
export const servicePages: ServicePage[] = [
  aiAgents,
  voiceAgents,
  knowledge,
  automation,
  integrations,
  customSoftware,
];

export const servicePageBySlug = new Map(servicePages.map((page) => [page.slug, page]));

/** serviceId (lib/site.ts) → page slug, so home cards can link to their page. */
export const servicePathByServiceId: Record<string, string> = Object.fromEntries(
  servicePages.map((page) => [page.serviceId, `/${page.slug}`]),
);

export type { ServicePage } from "@/lib/services/types";
