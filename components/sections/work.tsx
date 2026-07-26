import { ArrowRight } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { work } from "@/lib/site";

/**
 * Shipped work, laid out as a case record rather than a card grid.
 *
 * The layout is deliberately built for a *small* number of entries: one project
 * fills the width and reads as a considered feature, where a lone card in a
 * three-column grid would read as two missing ones. Adding a second project
 * stacks another record beneath it with no layout change.
 */
export function Work() {
  return (
    <Section
      id="work"
      index="03"
      eyebrow="Selected work"
      title="Shipped, live, open to inspection"
      tone="canvas"
    >
      <div className="flex flex-col gap-16 lg:gap-20">
        {work.map((project) => (
          <Reveal key={project.id}>
            <article className="overflow-hidden rounded-lg border border-line bg-surface">
              <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
                {/* ---------------------------------------------- the record */}
                <div className="flex flex-col p-8 lg:p-12">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <p className="label text-navy">{project.sector}</p>
                    <span aria-hidden className="h-px w-5 bg-line-strong" />
                    <p className="label text-ink-faint">{project.year}</p>
                  </div>

                  <h3 className="mt-6 text-[1.75rem] leading-[1.15] font-medium tracking-[-0.03em] text-ink lg:text-[2rem]">
                    {project.client}
                  </h3>

                  <p className="mt-5 max-w-[54ch] text-[1rem] leading-relaxed text-ink-muted">
                    {project.brief}
                  </p>

                  {/* Pushes the link to the panel floor on tall viewports. */}
                  <div className="mt-8 flex-1" />

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex w-fit items-center gap-2 border-b border-line-strong pb-1 text-[0.9375rem] font-medium text-ink transition-colors duration-200 hover:border-navy hover:text-navy"
                  >
                    {project.displayUrl}
                    <ArrowRight className="-rotate-45" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>

                {/* ------------------------------------------------- the scope */}
                <div className="border-t border-line bg-sunken p-8 lg:border-t-0 lg:border-l lg:p-12">
                  <h4 className="label text-ink-faint">What we built</h4>
                  <ul className="mt-6 flex flex-col gap-3.5">
                    {project.scope.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[0.875rem] leading-relaxed text-ink"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.5rem] size-1 shrink-0 rounded-full bg-emerald"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* --------------------------------------------- client figures */}
              {/* Explicitly labelled as the client's own published numbers.
                  These describe the business we built for; they are not our
                  results and must never be presented as such. */}
              <div className="border-t border-line">
                <p className="px-8 pt-7 text-[0.75rem] tracking-[0.08em] text-ink-faint uppercase lg:px-12">
                  The client&rsquo;s own published figures
                </p>
                <dl className="mt-6 grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
                  {/* dt precedes dd in the DOM as the spec requires; `order`
                      lifts the figure above its label visually. */}
                  {project.clientFigures.map((figure) => (
                    <div
                      key={figure.label}
                      className="flex flex-col bg-surface px-8 py-7 lg:px-12"
                    >
                      <dt className="order-2 mt-2 text-[0.8125rem] text-ink-muted">
                        {figure.label}
                      </dt>
                      <dd className="order-1 text-[1.5rem] leading-none font-medium tracking-[-0.03em] text-ink tabular-nums">
                        {figure.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
