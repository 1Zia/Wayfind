import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end digital growth — websites, CRM, AI integration, SEO, Google & Meta ads, and Google Business Profile.",
};

const SERVICES = [
  {
    href: "/services/website-design",
    number: "01",
    title: "Website Design & Development",
    tagline: "Your storefront to the world, engineered to convert.",
    description:
      "A slow, outdated or ugly website is costing you real customers every single day. WayFind builds fast, beautiful, conversion-optimised websites that work as hard as you do — 24 hours a day, 7 days a week.",
    bullets: [
      "Custom design tailored to your brand and industry",
      "Mobile-first, lightning-fast performance",
      "SEO-ready structure from day one",
      "Integrated contact forms, booking systems and live chat",
    ],
  },
  {
    href: "/services/crm-systems",
    number: "02",
    title: "CRM & Sales Automation",
    tagline: "Stop losing leads. Start closing deals automatically.",
    description:
      "Most businesses lose 60–80% of their leads simply because they don't follow up fast enough. Our CRM and automation systems make sure every lead is captured, followed up and nurtured — without you lifting a finger.",
    bullets: [
      "Automated lead capture from website, WhatsApp and social",
      "Follow-up sequences via SMS, email and WhatsApp",
      "Sales pipeline tracking and reporting dashboard",
      "Integration with your existing tools and channels",
    ],
  },
  {
    href: "/services/ai-integration",
    number: "03",
    title: "AI Integration & Chatbots",
    tagline: "Your business never sleeps. Neither does your AI.",
    description:
      "We build AI assistants trained on your specific business — your services, pricing, FAQs and team. They handle customer queries, book appointments and qualify leads 24/7, so you wake up to a full inbox of ready-to-buy customers.",
    bullets: [
      "AI trained on your specific business knowledge",
      "Works on your website, WhatsApp, Facebook and Instagram",
      "Appointment booking and lead qualification",
      "Reduces admin workload by 50–70% from month one",
    ],
  },
  {
    href: "/services/seo",
    number: "04",
    title: "SEO — Get Found on Google",
    tagline: "Free traffic, every single day. For years.",
    description:
      "When your customer searches for your service in Islamabad, Lahore or Karachi — you need to be at the top. Our SEO service puts you there and keeps you there, turning search engines into your most powerful sales channel.",
    bullets: [
      "Local and national keyword research and strategy",
      "On-page optimisation and technical SEO fixes",
      "Google Business Profile management",
      "Monthly ranking reports and competitor analysis",
    ],
  },
  {
    href: "/services/ads",
    number: "05",
    title: "Google & Meta Ads",
    tagline: "Every rupee working harder than ever.",
    description:
      "Stop wasting budget on ads that don't convert. Our performance marketing team runs ROI-focused Google and Meta campaigns with professional creative, precise targeting and constant optimisation to deliver 3–5× return on ad spend.",
    bullets: [
      "Google Search, Display and YouTube campaigns",
      "Meta (Facebook & Instagram) campaign management",
      "A/B testing of creative and targeting",
      "Full transparency reporting — no smoke and mirrors",
    ],
  },
  {
    href: "/services/google-business",
    number: "06",
    title: "Google Business Profile",
    tagline: "Own your neighbourhood's search results.",
    description:
      "Google Business Profile is the most underutilised free marketing tool in Pakistan. We set it up, optimise it and manage it monthly so your business appears at the top of local search results and Google Maps.",
    bullets: [
      "Full profile setup and optimisation",
      "Photo and video uploads for maximum visibility",
      "Review management and response strategy",
      "Monthly posts and performance reporting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:px-10 md:pt-48">
        <SectionEyebrow>Services</SectionEyebrow>
        <h1 className="mt-6 font-display text-display-md max-w-3xl text-balance leading-none tracking-tight">
          Everything you need to dominate online.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          End-to-end digital growth. One partner. Zero compromise.
        </p>
      </section>

      {/* Alternating sections */}
      <div className="divide-y divide-border border-t border-border">
        {SERVICES.map((service, i) => (
          <section
            key={service.href}
            className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28"
          >
            <div
              className={`grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center ${
                i % 2 !== 0 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Text */}
              <div className="lg:[direction:ltr]">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {service.number}
                  </span>
                  <span className="h-px flex-1 bg-border" aria-hidden />
                </div>
                <h2 className="mt-4 font-display text-display-sm leading-none tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm font-medium italic text-muted-foreground">
                  {service.tagline}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-foreground/80">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground/70">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0 text-accent"
                        aria-hidden
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={service.href} variant="primary" size="md" arrow>
                    Learn more
                  </Button>
                </div>
              </div>

              {/* Visual placeholder */}
              <div className="lg:[direction:ltr]">
                <div className="flex aspect-square max-h-80 w-full items-center justify-center rounded-2xl border border-border bg-muted lg:max-h-none">
                  <span className="text-6xl" aria-hidden>
                    {["◻", "⟳", "◈", "↑", "◉", "◎"][i]}
                  </span>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10">
          <h2 className="font-display text-display-sm leading-none tracking-tight">
            Not sure which service is right for you?
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Book a free 30-minute discovery call. We&apos;ll map out exactly what your business needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" arrow>
              Book Free Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
