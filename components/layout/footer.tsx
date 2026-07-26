import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { Container, EdgeRules } from "@/components/ui/container";
import { services, site } from "@/lib/site";

const columns = [
  {
    heading: "What we build",
    links: services.map((service) => ({
      label: service.name,
      href: `#${service.id}`,
    })),
  },
  {
    heading: "Company",
    links: [
      { label: "How it works", href: "#process" },
      { label: "Selected work", href: "#work" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Schedule a consultation", href: site.schedulingUrl },
      { label: site.email, href: `mailto:${site.email}` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-canvas">
      <EdgeRules />
      <Container className="relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div>
            <Logo />
            <p className="mt-5 max-w-[26ch] text-sm leading-relaxed text-ink-muted">
              Business infrastructure powered by AI. Engineered for the way your organisation
              actually works.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {columns.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h2 className="label text-ink-faint">{column.heading}</h2>
                <ul className="mt-5 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={`${column.heading}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer noopener" }
                          : {})}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-ink-faint">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-[0.8125rem] text-ink-faint">
            {site.role} · Custom systems, not off-the-shelf products.
          </p>
        </div>
      </Container>
    </footer>
  );
}
