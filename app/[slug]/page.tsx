import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/service/service-page";
import { servicePageBySlug, servicePages } from "@/lib/services";
import { site } from "@/lib/site";

/**
 * One route for every service page.
 *
 * `dynamicParams = false` means only the slugs returned by
 * generateStaticParams resolve — anything else is a 404 rather than an
 * attempted render, so a root-level dynamic segment cannot swallow future
 * static routes.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePageBySlug.get(slug);
  if (!page) return {};

  const url = `${site.url}/${page.slug}`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: `${page.metaTitle} · ${site.name}`,
      description: page.metaDescription,
      url,
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.metaTitle} · ${site.name}`,
      description: page.metaDescription,
    },
  };
}

export default async function ServiceRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = servicePageBySlug.get(slug);
  if (!page) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/${page.slug}/#service`,
        name: page.metaTitle,
        serviceType: page.metaTitle,
        description: page.metaDescription,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: "Worldwide",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: page.metaTitle,
            item: `${site.url}/${page.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/${page.slug}/#faq`,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicePageView page={page} />
    </>
  );
}
