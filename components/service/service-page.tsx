import Link from "next/link";
import { Cta } from "@/components/sections/cta";
import { ServiceFaq } from "@/components/service/service-faq";
import { ServiceTopology } from "@/components/service/service-topology";
import { BookCall } from "@/components/ui/book-call";
import { ArrowRight, buttonClasses } from "@/components/ui/button";
import { Container, EdgeRules } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow, Section } from "@/components/ui/section";
import type { ServicePage as ServicePageData } from "@/lib/services/types";
import { cn } from "@/lib/utils";

/** The eyebrow row shared by both hero layouts. */
function HeroEyebrow({ page }: { page: ServicePageData }) {
  return (
    <p className="flex items-center gap-3">
      <Link
        href="/#services"
        className="label -my-2 -ml-2 inline-block px-2 py-2 text-ink-faint transition-colors hover:text-ink"
      >
        What we build
      </Link>
      <span aria-hidden className="h-px w-5 bg-line-strong" />
      <span className="label text-navy">{page.eyebrow}</span>
    </p>
  );
}

/**
 * The hero for every service page: text and a compact stat row on the left, a
 * media panel on the right. One layout for all six — a reader comparing two
 * services should be comparing the services, not re-learning a layout.
 *
 * The fixed header (h-16 / lg:h-[4.5rem]) sits out of document flow and
 * overlaps document y=0, so the section is pushed below it with `mt` first —
 * otherwise a `min-h` measured from y=0 ends short of the viewport bottom by
 * exactly the header's height, letting the next section peek into view. With
 * the section's own box starting at the header's bottom edge, reserving the
 * rest of the viewport via `min-h` and centering its content inside lands
 * the hero flush with the fold: header and hero fill the screen on load,
 * nothing else, content centered in what's left.
 *
 * Unlike every other section, this one does not run through `Container` — it
 * skips the site's shared 76rem measure so the media panel gets the full
 * viewport width to work with rather than being squeezed to fit inside it.
 * `EdgeRules` is dropped for the same reason: those hairlines are hard-coded
 * to the 76rem column, so keeping them here would draw lines that no longer
 * line up with the content around them.
 *
 * It is capped at 96rem all the same. Breaking out of 76rem is about giving
 * the media room, not about tracking the viewport forever: past ~1536px the
 * columns drift apart and the h1 runs to a 850px+ line.
 */
function Hero({ page }: { page: ServicePageData }) {
  return (
    <section
      className="relative mt-16 flex min-h-[calc(100vh-4rem)] items-center overflow-hidden lg:mt-[4.5rem] lg:min-h-[calc(100vh-4.5rem)]"
      aria-labelledby="service-title"
    >
      <div className="relative mx-auto w-full max-w-[96rem] px-6 py-20 sm:px-8 sm:py-20 lg:px-10 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          <div>
            <Reveal>
              <HeroEyebrow page={page} />
            </Reveal>

            <Reveal delay={80}>
              <h1 id="service-title" className="mt-7 text-display text-ink">
                {page.title}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-[54ch] text-lead text-ink-muted">{page.lead}</p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <BookCall className={buttonClasses({ size: "lg" })}>
                  {page.heroPrimaryCta}
                  <ArrowRight />
                </BookCall>
                <Link
                  href="#detail"
                  className={buttonClasses({ variant: "secondary", size: "lg" })}
                >
                  How it works
                </Link>
              </div>
            </Reveal>

            {page.heroStats ? (
              <Reveal delay={280}>
                <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-6">
                  {page.heroStats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="label text-ink-faint">{stat.label}</dt>
                      <dd className="mt-1.5 text-[0.9375rem] font-medium text-ink">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ) : null}
          </div>

          {/*
            No `justify-self-end` here. That collapses the grid item to
            fit-content, so the media ignored its 925px column, sized itself
            from the asset's intrinsic width instead, and sat pinned to the
            right edge — leaving ~600px of dead space mid-hero and a different
            media size on every page. Stretching to the track makes the panel
            fill its column and stay identical across all six.
          */}
          <Reveal delay={200} className="w-full lg:pl-4">
            <MediaFrame
              // Hero videos are shot 1:1 — match the shape before the asset
              // arrives so a page never has to change ratio once it does.
              ratio={page.heroMedia.ratio ?? "1/1"}
              label={page.heroMedia.label}
              hint={page.heroMedia.hint}
              src={page.heroMedia.src}
              kind={page.heroMedia.kind}
              mode={page.heroMedia.mode}
              fit={page.heroMedia.fit}
              className="shadow-lift"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** The timeline list shared by both flow layouts. */
function FlowSteps({
  steps,
  showMarker = true,
  tight = false,
}: {
  steps: ServicePageData["flow"]["steps"];
  /** Off for a page whose markers are call-timestamps rather than step numbers. */
  showMarker?: boolean;
  /** Tighter row spacing for a shorter, denser step list. */
  tight?: boolean;
}) {
  return (
    <ol className="relative">
      {steps.map((step, index) => (
        <Reveal key={step.id} as="li" delay={index * 40}>
          <div
            className={cn(
              "group relative border-t border-line sm:pl-10",
              tight ? "py-3" : "py-7",
            )}
          >
            <span
              aria-hidden
              className="absolute top-[2.15rem] left-0 hidden size-[11px] rounded-full border border-line-strong bg-surface transition-colors duration-300 group-hover:border-navy group-hover:bg-navy sm:block"
            />
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
              {showMarker ? (
                <span className="label w-14 shrink-0 tabular-nums text-ink-faint">
                  {step.marker}
                </span>
              ) : null}
              <div>
                <h3 className="text-[1.0625rem] font-medium tracking-[-0.02em] text-ink">
                  {step.name}
                </h3>
                <p className="mt-2 max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink-muted">
                  {step.line}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/**
 * The flow section for a page with `flowLayout: "split"`: steps on the left,
 * flowMedia on the right, no side margin — the same break-out treatment as
 * the hero, for the same reason (the video earns more width than the site's
 * shared 76rem column gives it).
 */
function FlowSplit({ page }: { page: ServicePageData }) {
  return (
    <section
      id="flow"
      className="relative overflow-hidden border-t border-line bg-surface"
      aria-labelledby="flow-title"
    >
      <div className="relative px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-6">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-16">
          <div>
            <div className="mb-8 max-w-[46rem] lg:mb-4">
              <Reveal>
                <Eyebrow index="02">{page.flow.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={60}>
                <h2 id="flow-title" className="mt-5 text-headline text-ink lg:mt-2">
                  {page.flow.title}
                </h2>
              </Reveal>
            </div>

            <FlowSteps steps={page.flow.steps} showMarker={false} tight />
          </div>

          <Reveal delay={200} className="lg:-ml-16 lg:w-[23rem] lg:justify-self-center">
            <MediaFrame
              ratio={page.flowMedia?.ratio ?? "16/9"}
              label={page.flowMedia?.label ?? ""}
              hint={page.flowMedia?.hint}
              src={page.flowMedia?.src}
              kind={page.flowMedia?.kind}
              mode={page.flowMedia?.mode}
              fit={page.flowMedia?.fit}
              className="shadow-lift"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/**
 * One template for every service page. The pages share a skeleton on purpose —
 * someone comparing two services should be comparing the services, not
 * re-learning a layout.
 */
export function ServicePageView({ page }: { page: ServicePageData }) {
  return (
    <>
      <Hero page={page} />

      {/* ------------------------------------------------------------ facts */}
      <section className="relative border-t border-line bg-surface" aria-labelledby="service-facts">
        <EdgeRules />
        <Container className="relative py-16 lg:py-20">
          <Reveal>
            <h2 id="service-facts" className="label text-ink-faint">
              {page.factsHeading}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <dl className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {page.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col bg-surface p-6 lg:p-7">
                  <dt className="order-2 mt-4 text-[0.875rem] font-medium text-ink">
                    {fact.label}
                  </dt>
                  <dd className="order-1 text-[1.875rem] leading-none font-medium tracking-[-0.04em] text-ink tabular-nums">
                    {fact.value}
                  </dd>
                  <dd className="order-3 mt-2 text-[0.8125rem] leading-relaxed text-ink-muted">
                    {fact.note}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* ----------------------------------------------------------- detail */}
      <Section
        id="detail"
        index="01"
        eyebrow={page.detail.eyebrow}
        title={page.detail.title}
        lead={page.detail.lead}
        tone="canvas"
      >
        <Reveal>
          <ServiceTopology topology={page.topology} />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line lg:mt-16 lg:grid-cols-2">
          {page.detail.groups.map((group) => (
            <div key={group.id} className="bg-surface p-8 lg:p-10">
              <h3 className="text-title text-ink">{group.heading}</h3>
              <p className="mt-3 max-w-[46ch] text-[0.9375rem] leading-relaxed text-ink-muted">
                {group.intro}
              </p>
              <dl className="mt-8 flex flex-col gap-6 border-t border-line pt-7">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <dt className="flex items-baseline gap-3 text-[0.9375rem] font-medium text-ink">
                      <span aria-hidden className="mt-1.5 size-1 shrink-0 rounded-full bg-emerald" />
                      {item.name}
                    </dt>
                    <dd className="mt-1.5 pl-4 text-[0.875rem] leading-relaxed text-ink-muted">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------- flow */}
      {page.flowLayout === "split" ? (
        <FlowSplit page={page} />
      ) : (
        <Section
          id="flow"
          index="02"
          eyebrow={page.flow.eyebrow}
          title={page.flow.title}
          tone="surface"
        >
          {page.flowMedia ? (
            <Reveal className="mb-14 block">
              <MediaFrame
                ratio={page.flowMedia.ratio ?? "16/9"}
                label={page.flowMedia.label}
                hint={page.flowMedia.hint}
                src={page.flowMedia.src}
                kind={page.flowMedia.kind}
                mode={page.flowMedia.mode}
                className="shadow-panel"
              />
            </Reveal>
          ) : null}

          <FlowSteps steps={page.flow.steps} />
        </Section>
      )}

      {/* --------------------------------------------------------- use cases */}
      <Section
        id="use-cases"
        index="03"
        eyebrow={page.useCases.eyebrow}
        title={page.useCases.title}
        lead={page.useCases.lead}
        tone="surface"
      >
        <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {page.useCases.items.map((useCase) => (
            <li
              key={useCase.name}
              className="bg-surface p-7 transition-colors duration-300 hover:bg-sunken lg:p-8"
            >
              <h3 className="text-[1.0625rem] font-medium tracking-[-0.02em] text-ink">
                {useCase.name}
              </h3>
              <p className="mt-2.5 text-[0.875rem] leading-relaxed text-ink-muted">
                {useCase.line}
              </p>
            </li>
          ))}
        </ul>

        <Reveal delay={80}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {(
              page.useCaseMedia ?? [
                {
                  label: "Screenshot — in context",
                  hint: `public/${page.slug}/screen-1.png`,
                  kind: "image" as const,
                },
                {
                  label: "Screenshot — result",
                  hint: `public/${page.slug}/screen-2.png`,
                  kind: "image" as const,
                },
              ]
            ).map((slot) => (
              <MediaFrame
                key={slot.label}
                ratio={slot.ratio ?? "4/3"}
                label={slot.label}
                hint={slot.hint}
                src={slot.src}
                kind={slot.kind}
                mode={slot.mode}
                className="shadow-panel"
              />
            ))}
          </div>
        </Reveal>
      </Section>

      {/* -------------------------------------------------------------- FAQ */}
      <Section
        id="service-faq"
        index="04"
        eyebrow="FAQ"
        title="What teams ask before they commit"
        tone="canvas"
      >
        <ServiceFaq faqs={page.faqs} />
      </Section>

      <Cta />
    </>
  );
}
