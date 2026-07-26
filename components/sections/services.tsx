import { ServiceGlyph } from "@/components/icons/service-glyph";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { services } from "@/lib/site";

const rows = [
  { key: "problem", label: "Problem", tone: "text-ink-faint" },
  { key: "solution", label: "What we build", tone: "text-ink-faint" },
  { key: "outcome", label: "Outcome", tone: "text-emerald" },
] as const;

export function Services() {
  return (
    <Section
      id="services"
      index="01"
      eyebrow="Services"
      title="Ten disciplines, one engineering standard"
      lead="Every engagement starts with the same question: which part of your operation is repeating work a system should be doing? What we build from there depends entirely on the answer."
      tone="canvas"
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
        {services.map((service, index) => (
          <article
            key={service.id}
            id={service.id}
            className="group scroll-mt-28 bg-surface p-7 transition-colors duration-300 hover:bg-sunken lg:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <ServiceGlyph
                name={service.glyph}
                className="text-ink-faint transition-colors duration-300 group-hover:text-navy"
              />
              <span className="label text-ink-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-7 text-title text-ink">{service.name}</h3>

            <dl className="mt-6 border-l border-line pl-5">
              {rows.map((row, rowIndex) => (
                <div key={row.key} className={rowIndex === 0 ? "" : "mt-5"}>
                  <dt className={`label ${row.tone}`}>{row.label}</dt>
                  <dd className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted">
                    {service[row.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      <Reveal delay={80}>
        <p className="mt-8 max-w-[62ch] text-sm text-ink-muted">
          Most engagements combine three or four of these. The architecture phase decides which, and
          why, before anything gets built.
        </p>
      </Reveal>
    </Section>
  );
}
