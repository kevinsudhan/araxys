import { Counter } from "@/components/ui/counter";
import { Container, EdgeRules } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { metrics } from "@/lib/site";

/**
 * Trust is established with operating characteristics rather than a logo wall.
 * The hairline grid comes from a 1px gap over a line-coloured container — it
 * holds at every breakpoint without nth-child border arithmetic.
 */
export function Metrics() {
  return (
    <section className="relative border-t border-line bg-surface" aria-labelledby="metrics-title">
      <EdgeRules />
      <Container className="relative py-16 lg:py-20">
        <Reveal>
          <h2 id="metrics-title" className="label text-ink-faint">
            Terms of every engagement
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {/* Each dt precedes its dd in the DOM, as the spec requires; `order`
                lifts the figure above its label visually. */}
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col bg-surface p-6 lg:p-7">
                <dt className="order-2 mt-4 text-[0.875rem] font-medium text-ink">
                  {metric.label}
                </dt>
                <dd className="order-1 text-[2.125rem] leading-none font-medium tracking-[-0.04em] text-ink">
                  <Counter
                    to={metric.value}
                    decimals={metric.decimals}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                  />
                </dd>
                <dd className="order-3 mt-2 text-[0.8125rem] leading-relaxed text-ink-muted">
                  {metric.note}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
