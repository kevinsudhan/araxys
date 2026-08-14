import Link from "next/link";
import { Cta } from "@/components/sections/cta";
import { ServiceFaq } from "@/components/service/service-faq";
import { ServiceTopology } from "@/components/service/service-topology";
import { BookCall } from "@/components/ui/book-call";
import { ArrowRight, buttonClasses } from "@/components/ui/button";
import { Container, EdgeRules } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { servicePages } from "@/lib/services";
import type { ServicePage as ServicePageData } from "@/lib/services/types";

/**
 * One template for every service page. The pages share a skeleton on purpose —
 * someone comparing two services should be comparing the services, not
 * re-learning a layout.
 */
export function ServicePageView({ page }: { page: ServicePageData }) {
  const others = servicePages.filter((other) => other.slug !== page.slug);
  const showHardParts = Boolean(page.hardParts);
  const showRelated = page.showRelated ?? true;

  // Sections after "detail" (01) and "flow" (02) are conditional per page, so
  // the eyebrow index is computed rather than hard-coded — omitting a section
  // renumbers the ones after it instead of leaving a gap like 01, 02, 04.
  let index = 2;
  const nextIndex = () => String(++index).padStart(2, "0");
  const hardPartsIndex = showHardParts ? nextIndex() : "";
  const useCasesIndex = nextIndex();
  const faqIndex = nextIndex();
  const relatedIndex = showRelated ? nextIndex() : "";

  return (
    <>
      {/* ------------------------------------------------------------- hero */}
      <section className="relative overflow-hidden" aria-labelledby="service-title">
        <EdgeRules />
        <Container className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44">
          <div className="max-w-[46rem]">
            <Reveal>
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
            </Reveal>

            <Reveal delay={80}>
              <h1 id="service-title" className="mt-7 text-display text-ink">
                {page.title}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-[58ch] text-lead text-ink-muted">{page.lead}</p>
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
          </div>

          <Reveal delay={280}>
            <MediaFrame
              ratio={page.heroMedia.ratio ?? "16/9"}
              label={page.heroMedia.label}
              hint={page.heroMedia.hint}
              src={page.heroMedia.src}
              kind={page.heroMedia.kind}
              mode={page.heroMedia.mode}
              className="mt-14 shadow-panel lg:mt-20"
            />
          </Reveal>
        </Container>
      </section>

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

        <ol className="relative">
          <span
            aria-hidden
            className="absolute top-10 bottom-10 left-[5px] hidden w-px bg-line sm:block"
          />
          {page.flow.steps.map((step, index) => (
            <Reveal key={step.id} as="li" delay={index * 40}>
              <div className="group relative border-t border-line py-7 sm:pl-10">
                <span
                  aria-hidden
                  className="absolute top-[2.15rem] left-0 hidden size-[11px] rounded-full border border-line-strong bg-surface transition-colors duration-300 group-hover:border-navy group-hover:bg-navy sm:block"
                />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="label w-14 shrink-0 tabular-nums text-ink-faint">
                    {step.marker}
                  </span>
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
      </Section>

      {/* -------------------------------------------------------- hard parts */}
      {showHardParts && page.hardParts ? (
        <Section
          id="hard-parts"
          index={hardPartsIndex}
          eyebrow={page.hardParts.eyebrow}
          title={page.hardParts.title}
          lead={page.hardParts.lead}
          tone="canvas"
        >
          <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {page.hardParts.items.map((item, itemIndex) => (
              <Reveal key={item.name} as="li" delay={itemIndex * 40} className="bg-surface">
                <div className="h-full p-7 lg:p-8">
                  <span className="label text-ink-faint">
                    {String(itemIndex + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[1.0625rem] font-medium tracking-[-0.02em] text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-2.5 text-[0.875rem] leading-relaxed text-ink-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>
      ) : null}

      {/* --------------------------------------------------------- use cases */}
      <Section
        id="use-cases"
        index={useCasesIndex}
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
        index={faqIndex}
        eyebrow="FAQ"
        title="What teams ask before they commit"
        tone="canvas"
      >
        <ServiceFaq faqs={page.faqs} />
      </Section>

      {/* ------------------------------------------------------------ other */}
      {showRelated ? (
        <Section
          id="more"
          index={relatedIndex}
          eyebrow="Also built here"
          title="The rest of what we do"
          tone="surface"
        >
          <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/${other.slug}`}
                  className="group flex h-full flex-col bg-surface p-7 transition-colors duration-300 hover:bg-sunken lg:p-8"
                >
                  <h3 className="flex items-center gap-2 text-[1.0625rem] font-medium tracking-[-0.02em] text-ink">
                    {other.navLabel}
                    <ArrowRight className="size-3.5 text-ink-faint" />
                  </h3>
                  <p className="mt-2.5 text-[0.875rem] leading-relaxed text-ink-muted">
                    {other.metaDescription}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Cta />
    </>
  );
}
