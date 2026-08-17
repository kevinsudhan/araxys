import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { faqs, services, site } from "@/lib/site";
import "./globals.css";

const title = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "AI engineering",
    "AI agents",
    "agentic workflow automation",
    "voice AI agents",
    "enterprise knowledge base",
    "RAG systems",
    "multi-agent systems",
    "custom AI software",
    "LLM integration",
    "process automation",
    "AI consulting",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description: site.description,
    url: site.url,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0C0E" },
  ],
};

/**
 * Runs before first paint. Applies the stored theme so there is no flash, and
 * marks the document as scripted — scroll reveals only hide their content when
 * this flag is present, so a no-JS visit still gets the full page.
 */
const boot = [
  `document.documentElement.classList.add("js");`,
  `try{if(localStorage.getItem("araxys-theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`,
  // Last resort: if nothing has revealed after four seconds the observer never
  // ran (blocked hydration, exotic browser). Drop the flag so the page is
  // simply visible and unanimated rather than blank.
  `setTimeout(function(){if(document.querySelector('[data-reveal]')&&!document.querySelector('[data-reveal][data-revealed="true"]'))document.documentElement.classList.remove("js")},4000);`,
].join("");

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organization`,
      name: site.name,
      description: site.description,
      url: site.url,
      email: site.email,
      telephone: site.phones.map((phone) => phone.e164),
      contactPoint: site.phones.map((phone) => ({
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: phone.e164,
        email: site.email,
        availableLanguage: ["en"],
      })),
      areaServed: "Worldwide",
      knowsAbout: services.map((service) => service.name),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Engineering & Automation Services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.line,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-GB",
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={GeistSans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:border focus:border-line-strong focus:bg-surface focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-ink focus:shadow-lift"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
