import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { solutions } from "@/lib/site";

export function Solutions() {
  return (
    <Section
      id="solutions"
      index="05"
      eyebrow="Featured Solutions"
      title="Systems we have engineered before"
      lead="Each of these was built from a specific process, for a specific organisation. They are shown here as reference architectures — starting points, not products."
      tone="canvas"
    >
      <Reveal>
        <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <li
              key={solution.id}
              className="group flex flex-col bg-surface p-7 transition-colors duration-300 hover:bg-sunken"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="label text-navy">{solution.category}</p>
                <span className="label text-ink-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-6 text-[1.0625rem] leading-snug font-medium tracking-[-0.02em] text-ink">
                {solution.name}
              </h3>
              <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-ink-muted">
                {solution.description}
              </p>

              <ul className="mt-6 flex flex-col gap-2 border-t border-line pt-5">
                {solution.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-center gap-2.5 text-[0.75rem] font-medium text-ink-muted"
                  >
                    <span aria-hidden className="size-1 shrink-0 rounded-full bg-emerald" />
                    {capability}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
