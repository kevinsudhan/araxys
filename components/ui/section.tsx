import type { ReactNode } from "react";
import { Container, EdgeRules } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/** Section index + name, set as a technical marker rather than a soft badge. */
export function Eyebrow({
  index,
  children,
  className,
}: {
  index?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("flex items-center gap-3", className)}>
      {index ? <span className="label text-ink-faint">{index}</span> : null}
      {index ? <span aria-hidden className="h-px w-7 bg-line-strong" /> : null}
      <span className="label text-navy">{children}</span>
    </p>
  );
}

type SectionProps = {
  id: string;
  index?: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  /** Optional content pinned to the right of the heading on wide screens. */
  aside?: ReactNode;
  children: ReactNode;
  tone?: "canvas" | "surface";
  rules?: boolean;
  className?: string;
  headingClassName?: string;
};

export function Section({
  id,
  index,
  eyebrow,
  title,
  lead,
  aside,
  children,
  tone = "canvas",
  rules = true,
  className,
  headingClassName,
}: SectionProps) {
  const hasHeading = Boolean(eyebrow ?? title ?? lead);

  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-title` : undefined}
      className={cn(
        "relative border-t border-line",
        tone === "surface" ? "bg-surface" : "bg-canvas",
        className,
      )}
    >
      {rules ? <EdgeRules /> : null}
      <Container className="relative py-20 sm:py-24 lg:py-32">
        {hasHeading ? (
          <div
            className={cn(
              "mb-14 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between lg:gap-16",
              headingClassName,
            )}
          >
            <div className="max-w-[46rem]">
              {eyebrow ? (
                <Reveal>
                  <Eyebrow index={index}>{eyebrow}</Eyebrow>
                </Reveal>
              ) : null}
              {title ? (
                <Reveal delay={60}>
                  <h2 id={`${id}-title`} className="mt-5 text-headline text-ink">
                    {title}
                  </h2>
                </Reveal>
              ) : null}
              {lead ? (
                <Reveal delay={120}>
                  <p className="mt-6 max-w-[52ch] text-lead text-ink-muted">{lead}</p>
                </Reveal>
              ) : null}
            </div>
            {aside ? (
              <Reveal delay={160} className="shrink-0">
                {aside}
              </Reveal>
            ) : null}
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
