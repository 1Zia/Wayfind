import type { Metadata } from "next";
import PricingContent from "./pricing-content";

export const metadata: Metadata = {
  title: "Pricing — Transparent Digital Growth Packages",
  description: "No surprises. Transparent pricing for websites, CRM, AI integration, SEO and ads. Save up to 25% with bundles.",
};

export default function PricingPage() {
  return <PricingContent />;
}
