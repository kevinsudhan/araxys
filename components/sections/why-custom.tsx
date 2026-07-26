import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { comparison } from "@/lib/site";

/**
 * Comparison as a highlighted column rather than a table. The Araxys column
 * carries a continuous surface panel from header to final row; on narrow
 * screens it degrades into stacked pairs with an emerald rule instead.
 */
export function WhyCustom() {
  return (
    <Section
      id="why-custom"
      index="03"
      eyebrow="Why Custom AI"
      title="A product has one opinion. Your operation has its own."
      lead="Off-the-shelf AI has to serve thousands of customers, so it encodes a single view of how the work should be done. Wherever your process differs, that gap becomes permanent manual effort."
      tone="canvas"
    >
      <Reveal>
        <div className="grid gap-x-8 sm:grid-cols-[minmax(0,8rem)_minmax(0,1fr)_minmax(0,1fr)]">
          {/* ------------------------------------------------- header row */}
          <div className="hidden sm:block" />
          <div className="hidden pb-5 sm:block">
            <p className="label text-ink-faint">Generic AI Tools</p>
          </div>
          <div className="hidden rounded-t-lg border-x border-t border-line bg-surface px-6 pt-6 pb-5 shadow-panel sm:block">
            <p className="label text-navy">Araxys Custom Solutions</p>
          </div>

          {/* ------------------------------------------------------- rows */}
          {comparison.map((row, index) => {
            const last = index === comparison.length - 1;
            return (
              <div key={row.dimension} className="contents">
                <div className="border-t border-line pt-6 sm:pt-7">
                  <p className="label text-ink-faint">{row.dimension}</p>
                </div>

                <div className="pt-3 pb-6 sm:border-t sm:border-line sm:pt-7 sm:pb-7">
                  <p className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                    <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" />
                    <span>
                      <span className="label mr-2 text-ink-faint sm:hidden">Generic</span>
                      {row.generic}
                    </span>
                  </p>
                </div>

                <div
                  className={`border-l-2 border-emerald pb-6 pl-4 sm:border-x sm:border-t sm:border-l-1 sm:border-line sm:bg-surface sm:px-6 sm:py-7 sm:shadow-panel ${
                    last ? "sm:rounded-b-lg sm:border-b" : ""
                  }`}
                >
                  <p className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink">
                    <svg
                      aria-hidden
                      viewBox="0 0 14 14"
                      fill="none"
                      className="mt-1 size-3.5 shrink-0 text-emerald"
                    >
                      <path
                        d="M2.5 7.5 5.5 10.5 11.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>
                      <span className="label mr-2 text-emerald sm:hidden">Araxys</span>
                      {row.araxys}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
