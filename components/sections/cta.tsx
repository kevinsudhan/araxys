import Link from "next/link";
import { BookCall } from "@/components/ui/book-call";
import { ArrowRight } from "@/components/ui/button";
import { Container, EdgeRules } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

const assurances = [
  "Fixed-scope phases",
  "You own the source",
  "NDA on request",
  "No obligation",
];

/**
 * The one deep-navy surface on the page. It is a literal hex rather than a
 * token because this panel must stay navy in both themes — it is the tonal
 * full stop at the end of the document.
 */
export function Cta() {
  return (
    <section id="contact" className="relative border-t border-line bg-canvas" aria-labelledby="cta-title">
      <EdgeRules />
      <Container className="relative py-20 lg:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#182B52] via-[#141F3A] to-[#0B1226] px-7 py-16 sm:px-12 lg:px-16 lg:py-24">
            <div
              aria-hidden
              className="absolute -top-32 -right-16 size-[26rem] rounded-full bg-[radial-gradient(circle,rgba(76,196,143,0.22),transparent_70%)] blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-40 -left-24 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(91,141,239,0.22),transparent_70%)] blur-2xl"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]"
            />

            <div className="relative mx-auto max-w-[46rem] text-center">
              <p className="flex items-center justify-center gap-3">
                <span aria-hidden className="h-3.5 w-px bg-[#4CC48F]" />
                <span className="label text-[#9FB2D6]">Next Step</span>
              </p>

              <h2
                id="cta-title"
                className="mt-7 text-headline text-[#FAFAF8]"
              >
                Let&apos;s build your next system.
              </h2>

              <p className="mx-auto mt-6 max-w-[52ch] text-lead text-[#C3CEE4]">
                Bring us the process costing your team the most hours. We&apos;ll tell you
                honestly which parts are worth automating.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BookCall className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#FAFAF8] px-6 text-[0.9375rem] font-medium whitespace-nowrap text-[#14213D] transition-[transform,box-shadow] duration-200 ease-out-quint hover:-translate-y-px hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAFAF8]">
                  Book a Strategy Call
                  <ArrowRight />
                </BookCall>
                <Link
                  href={`mailto:${site.email}`}
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 px-6 text-[0.9375rem] font-medium whitespace-nowrap text-[#E4EAF5] transition-colors duration-200 hover:border-white/40 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAFAF8]"
                >
                  {site.email}
                </Link>
              </div>

              {/* Third route, for anyone who would simply rather call. */}
              <p className="mt-7 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.875rem] text-[#9FB2D6]">
                <span>Prefer to talk now?</span>
                {site.phones.map((phone, index) => (
                  <span key={phone.e164} className="flex items-center gap-2">
                    {index > 0 ? (
                      <span aria-hidden className="text-[#5C6E92]">
                        ·
                      </span>
                    ) : null}
                    <a
                      href={`tel:${phone.e164}`}
                      className="inline-block py-2 font-medium text-[#E4EAF5] underline decoration-[#5C6E92] underline-offset-4 transition-colors duration-200 hover:decoration-[#E4EAF5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAFAF8]"
                    >
                      {phone.display}
                    </a>
                  </span>
                ))}
              </p>

              <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-8">
                {assurances.map((assurance) => (
                  <li key={assurance} className="flex items-center gap-2.5">
                    <span aria-hidden className="size-1 rounded-full bg-[#4CC48F]" />
                    <span className="text-[0.8125rem] font-medium text-[#9FB2D6]">{assurance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
