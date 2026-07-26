import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { processSteps } from "@/lib/site";

/**
 * Four steps on a rail. The previous version had six, each with a hover
 * disclosure hiding a paragraph and three output chips — roughly 340 words of
 * detail nobody reads before a first call. One line per step says the same.
 */
export function Process() {
  return (
    <Section
      id="process"
      index="02"
      eyebrow="How it works"
      title="No code before step two"
      tone="surface"
    >
      <ol className="relative">
        {/* the rail */}
        <span
          aria-hidden
          className="absolute top-10 bottom-10 left-[5px] hidden w-px bg-line sm:block"
        />

        {processSteps.map((step, index) => (
          <Reveal key={step.id} as="li" delay={index * 50}>
            <div className="group relative border-t border-line py-8 sm:pl-10">
              {/* rail node */}
              <span
                aria-hidden
                className="absolute top-[2.4rem] left-0 hidden size-[11px] rounded-full border border-line-strong bg-surface transition-colors duration-300 group-hover:border-navy group-hover:bg-navy sm:block"
              />

              <div className="flex items-baseline gap-5">
                <span className="label w-6 shrink-0 text-ink-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-title text-ink">{step.name}</h3>
                  <p className="mt-2.5 max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink-muted">
                    {step.line}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
