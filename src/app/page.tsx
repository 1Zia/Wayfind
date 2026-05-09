import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { Process } from "@/components/sections/process";
import { FeaturedWork } from "@/components/sections/featured-work";
import { AiDemo } from "@/components/sections/ai-demo";
import { Testimonials } from "@/components/sections/testimonials";
import { IndustriesSection } from "@/components/sections/industries-section";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "WayFind Technologies — Engineering Digital Excellence For Modern Brands",
  description:
    "WayFind builds complete digital growth systems — websites, AI, CRM, SEO and ads — all working as one engine for your business.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Stats />
      <Process />
      <FeaturedWork />
      <AiDemo />
      <Testimonials />
      <IndustriesSection />
      <Faq />
      <FinalCta />
    </>
  );
}
