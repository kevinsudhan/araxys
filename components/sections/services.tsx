import Link from "next/link";
import { ServiceGlyph } from "@/components/icons/service-glyph";
import { ArrowRight } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { servicePathByServiceId } from "@/lib/services";
import { industriesLine, services } from "@/lib/site";

/** Every card links to that service's own page. */
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
          <Link
            key={service.id}
            id={service.id}
            href={servicePathByServiceId[service.id] ?? `/${service.id}`}
            className="group block scroll-mt-28 bg-surface p-8 transition-colors duration-300 hover:bg-sunken lg:p-9"
          >
            <ServiceGlyph
              name={service.glyph}
              className="text-ink-faint transition-colors duration-300 group-hover:text-navy"
            />
            <h3 className="mt-7 flex items-center gap-2 text-title text-ink">
              {service.name}
              <ArrowRight className="size-3.5 text-ink-faint" />
            </h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">{service.line}</p>
          </Link>
        ))}
      </div>

      {/* What used to be a nine-card industries grid. */}
      <Reveal delay={80}>
        <p className="mt-8 text-sm text-ink-faint">{industriesLine}</p>
      </Reveal>
    </Section>
  );
}
