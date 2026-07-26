import { ArchitectureDiagram } from "@/components/sections/architecture-diagram";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { Container, EdgeRules } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

const capabilities = ["Agents", "Voice AI", "RAG", "Automation", "Integrations"];

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <EdgeRules />
      <Container className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-20">
          {/* ------------------------------------------------------ copy */}
          <div className="max-w-[36rem]">
            <Reveal>
              <p className="flex items-center gap-3">
                <span aria-hidden className="h-3.5 w-px bg-emerald" />
                <span className="label text-ink-muted">{site.role}</span>
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 id="hero-title" className="mt-7 text-display text-ink">
                Engineering AI Systems That Actually Transform Businesses
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 text-lead text-ink-muted">
                We design and build custom AI solutions—from autonomous agents and voice assistants
                to enterprise knowledge systems and intelligent automations—tailored to the way your
                business works.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href={site.schedulingUrl} size="lg">
                  Schedule a Consultation
                  <ArrowRight />
                </ButtonLink>
                <ButtonLink href="#services" variant="secondary" size="lg">
                  Explore Services
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <p className="mt-5 text-sm text-ink-faint">
                A 30-minute technical conversation. No slide deck, no obligation.
              </p>
            </Reveal>

            <Reveal delay={340}>
              <ul className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-6">
                {capabilities.map((capability) => (
                  <li key={capability} className="flex items-center gap-2.5">
                    <span aria-hidden className="size-1 rounded-full bg-line-strong" />
                    <span className="text-[0.8125rem] font-medium text-ink-muted">{capability}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* --------------------------------------------------- schematic */}
          <Reveal delay={200} className="lg:pl-4">
            <ArchitectureDiagram />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
