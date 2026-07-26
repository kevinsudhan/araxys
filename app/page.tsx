import { Cta } from "@/components/sections/cta";
import { FaqList } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";
import { Section } from "@/components/ui/section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <Services />
      <Process />
      <Work />
      <Section id="faq" index="04" eyebrow="FAQ" title="Questions we get first" tone="surface">
        <FaqList />
      </Section>
      <Cta />
    </>
  );
}
