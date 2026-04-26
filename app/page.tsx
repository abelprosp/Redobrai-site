import { AboutStrip } from "@/components/about-strip";
import { EngineShowcases } from "@/components/engine-showcases";
import { EnginesBento } from "@/components/engines-bento";
import { FinalCtaSection } from "@/components/final-cta-section";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { PricingEngines } from "@/components/pricing-engines";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutStrip />
        <EnginesBento />
        <EngineShowcases />
        <PricingEngines />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
