import { ServiceGlyph } from "@/components/icons/service-glyph";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { industriesLine, services } from "@/lib/site";

export function Services() {
  return (
    <Section
      id="services"
      index="01"
      eyebrow="What we build"
      title="Six things, built properly"
      tone="canvas"
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="group scroll-mt-28 bg-surface p-8 transition-colors duration-300 hover:bg-sunken lg:p-9"
          >
            <ServiceGlyph
              name={service.glyph}
              className="text-ink-faint transition-colors duration-300 group-hover:text-navy"
            />
            <h3 className="mt-7 text-title text-ink">{service.name}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
              {service.line}
            </p>
          </article>
        ))}
      </div>

      {/* What used to be a nine-card industries grid. */}
      <Reveal delay={80}>
        <p className="mt-8 text-sm text-ink-faint">{industriesLine}</p>
      </Reveal>
    </Section>
  );
}
