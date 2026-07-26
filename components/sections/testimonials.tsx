import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      index="07"
      eyebrow="References"
      title="What the engagements sound like from the inside"
      lead="Attribution is anonymised by role and sector at our clients' request."
      tone="canvas"
    >
      <ul className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.initials} as="li" delay={index * 70}>
            <figure className="flex h-full flex-col rounded-lg border border-line bg-surface p-7 lg:p-8">
              <blockquote className="flex-1">
                <p className="text-[1.0625rem] leading-relaxed text-ink">
                  {testimonial.quote}
                </p>
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-4 border-t border-line pt-6">
                {/* Abstract initials tile — no stock portraits. */}
                <span
                  aria-hidden
                  className="flex size-10 shrink-0 items-center justify-center rounded-md border border-line bg-navy-soft text-[0.8125rem] font-medium tracking-[0.02em] text-navy"
                >
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-[0.875rem] font-medium text-ink">{testimonial.role}</p>
                  <p className="mt-0.5 text-[0.8125rem] text-ink-muted">{testimonial.sector}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
