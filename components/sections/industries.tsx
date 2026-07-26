import { IndustryIcon } from "@/components/icons/industry-icon";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { industries } from "@/lib/site";

export function Industries() {
  return (
    <Section
      id="industries"
      index="04"
      eyebrow="Industries"
      title="Different sectors, the same structural problem"
      lead="The specifics change completely. The pattern rarely does: high-volume work that follows rules, blocked behind a handful of steps that need judgment."
      tone="surface"
    >
      <Reveal>
        <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <li
              key={industry.name}
              className="group bg-surface p-7 transition-colors duration-300 hover:bg-sunken lg:p-8"
            >
              <IndustryIcon
                name={industry.icon}
                className="text-ink-faint transition-colors duration-300 group-hover:text-navy"
              />
              <h3 className="mt-6 text-[1.0625rem] font-medium tracking-[-0.02em] text-ink">
                {industry.name}
              </h3>
              <p className="mt-2.5 text-[0.875rem] leading-relaxed text-ink-muted">
                {industry.application}
              </p>
            </li>
          ))}
          {/* Keeps the hairline grid flush when nine cells sit in two columns. */}
          <li aria-hidden className="hidden bg-surface sm:block lg:hidden" />
        </ul>
      </Reveal>
    </Section>
  );
}
