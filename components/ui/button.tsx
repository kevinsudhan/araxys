import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "quiet";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-md font-medium " +
  "whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] " +
  "duration-200 ease-out-quint select-none disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-ink-inverse shadow-panel hover:-translate-y-px hover:shadow-lift " +
    "active:translate-y-0 active:shadow-panel",
  secondary:
    "border border-line-strong bg-surface text-ink hover:border-ink/25 hover:bg-sunken " +
    "hover:-translate-y-px active:translate-y-0",
  quiet: "text-ink-muted hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-[0.9375rem]",
  lg: "h-12 px-6 text-[0.9375rem]",
};

type ButtonBaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonBaseProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn(base, variants[variant], variant === "quiet" ? "h-10" : sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonBaseProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], variant === "quiet" ? "h-10" : sizes[size], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

/** 12px chevron that nudges on hover of the parent `group`. */
export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      fill="none"
      className={cn(
        "size-3 shrink-0 transition-transform duration-200 ease-out-quint group-hover:translate-x-0.5",
        className,
      )}
    >
      <path
        d="M1.5 6h9M7 2.5 10.5 6 7 9.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Text link with an animated underline — used in cards and the footer. */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-ink",
        "transition-colors duration-200 hover:text-navy",
        className,
      )}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out-quint group-hover:scale-x-100"
        />
      </span>
      <ArrowRight />
    </Link>
  );
}
