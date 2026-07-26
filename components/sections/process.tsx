import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { processSteps } from "@/lib/site";

/**
 * Interactive delivery rail. Each step expands on hover, and — because the
 * disclosure is driven by `group-hover` plus `group-focus-within` — also on
 * keyboard focus and on tap, where hover never fires.
 */
export function Process() {
  return (
    <Section
      id="process"
      index="02"
      eyebrow="How We Work"
      title="Six phases, and no code written before phase two"
      lead="The sequence exists so that the expensive decisions happen while they are still cheap to change. Hover or focus any phase for what it produces."
      tone="surface"
    >
      <ol className="relative">
        {/* the rail */}
        <span
          aria-hidden
          className="absolute top-10 bottom-10 left-[5px] hidden w-px bg-line sm:block"
        />

        {processSteps.map((step, index) => (
          <Reveal key={step.id} as="li" delay={index * 40}>
            <div
              tabIndex={0}
              className="group relative border-t border-line py-8 outline-none sm:pl-10 lg:py-9"
            >
              {/* rail node */}
              <span
                aria-hidden
                className="absolute top-[2.65rem] left-0 hidden size-[11px] rounded-full border border-line-strong bg-surface transition-colors duration-300 group-hover:border-navy group-hover:bg-navy group-focus-within:border-navy group-focus-within:bg-navy sm:block"
              />

              <div className="flex items-start justify-between gap-6">
                <div className="flex items-baseline gap-4">
                  <span className="label w-6 shrink-0 text-ink-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-title text-ink">{step.name}</h3>
                    <p className="mt-2.5 max-w-[58ch] text-[0.9375rem] leading-relaxed text-ink-muted">
                      {step.summary}
                    </p>
                  </div>
                </div>

                <svg
                  aria-hidden
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-1.5 size-4 shrink-0 text-ink-faint transition-transform duration-400 ease-out-quint group-hover:rotate-90 group-focus-within:rotate-90"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="collapsible group-hover:collapsible-open group-focus-within:collapsible-open sm:pl-10">
                <div className="overflow-hidden">
                  <div className="pt-5">
                    <p className="max-w-[70ch] text-[0.9375rem] leading-relaxed text-ink-muted">
                      {step.detail}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {step.outputs.map((output) => (
                        <li
                          key={output}
                          className="rounded-md border border-line bg-canvas px-2.5 py-1.5 text-[0.75rem] font-medium text-ink-muted"
                        >
                          {output}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
