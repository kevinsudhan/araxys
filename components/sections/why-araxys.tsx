import { ValueIcon } from "@/components/icons/value-icon";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { differentiators } from "@/lib/site";

export function WhyAraxys() {
  return (
    <Section
      id="why-araxys"
      index="06"
      eyebrow="Why Araxys"
      title="What you are actually buying"
      lead="Not a licence, and not a pilot that quietly expires. An engineered asset your team owns, understands, and can extend without us in the room."
      tone="surface"
    >
      <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((item, index) => (
          <Reveal key={item.name} as="li" delay={index * 40} className="bg-surface">
            <div className="h-full p-7 lg:p-8">
              <span className="inline-flex size-11 items-center justify-center rounded-md border border-line bg-canvas text-navy">
                <ValueIcon name={item.icon} className="size-[22px]" />
              </span>
              <h3 className="mt-6 text-[1.0625rem] font-medium tracking-[-0.02em] text-ink">
                {item.name}
              </h3>
              <p className="mt-2.5 text-[0.875rem] leading-relaxed text-ink-muted">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
