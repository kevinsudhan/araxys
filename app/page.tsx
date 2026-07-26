import { Cta } from "@/components/sections/cta";
import { FaqList } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Industries } from "@/components/sections/industries";
import { Metrics } from "@/components/sections/metrics";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Solutions } from "@/components/sections/solutions";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyAraxys } from "@/components/sections/why-araxys";
import { WhyCustom } from "@/components/sections/why-custom";
import { Section } from "@/components/ui/section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <Services />
      <Process />
      <WhyCustom />
      <Industries />
      <Solutions />
      <WhyAraxys />
      <Testimonials />
      <Section
        id="faq"
        index="08"
        eyebrow="FAQ"
        title="The questions that come up first"
        lead="If something here is not covered, it is usually the most useful thing to open a call with."
        tone="surface"
      >
        <FaqList />
      </Section>
      <Cta />
    </>
  );
}
