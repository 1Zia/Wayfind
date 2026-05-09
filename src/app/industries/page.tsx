import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MotionDiv } from "@/components/ui/motion-wrapper";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "WayFind builds digital growth systems for businesses across Pakistan — healthcare, education, fitness, restaurants, retail and more.",
};

export const INDUSTRIES = [
  {
    slug: "healthcare",
    emoji: "🏥",
    name: "Healthcare",
    tagline: "More patients. Less admin. Better care.",
    description:
      "Clinics, hospitals and practices that want more bookings, automated patient communication and a professional online presence.",
    services: ["Website Design", "AI Chatbot", "CRM", "SEO"],
    stat: "3× more appointments",
  },
  {
    slug: "education",
    emoji: "🎓",
    name: "Education",
    tagline: "Fill seats. Build reputation. Grow faster.",
    description:
      "Schools, academies and tutoring centres that need more admissions, stronger brand recognition and automated enrollment workflows.",
    services: ["Website Design", "Google Ads", "SEO", "CRM"],
    stat: "180 new admissions",
  },
  {
    slug: "fitness",
    emoji: "💪",
    name: "Fitness",
    tagline: "More members. Better retention. Full schedule.",
    description:
      "Gyms, studios and personal trainers that want to fill classes, automate membership sales and build a loyal community online.",
    services: ["Meta Ads", "AI Integration", "Website Design"],
    stat: "PKR 2.4M Month 1",
  },
  {
    slug: "food",
    emoji: "🍽️",
    name: "Food & Restaurant",
    tagline: "Full tables. 5-star reviews. #1 on Google.",
    description:
      "Restaurants, cafes and food brands that want more foot traffic, online orders and a dominant local search presence.",
    services: ["Google Business", "SEO", "Website Design"],
    stat: "#1 for 12 keywords",
  },
  {
    slug: "retail",
    emoji: "🛍️",
    name: "Retail",
    tagline: "Sell more. Reach further. Build a real brand.",
    description:
      "Boutiques, stores and product brands ready to go online, grow nationally and build a loyal customer base with paid media.",
    services: ["Meta Ads", "Website Design", "CRM"],
    stat: "4.2× ROAS",
  },
  {
    slug: "real-estate",
    emoji: "🏠",
    name: "Real Estate",
    tagline: "More leads. Faster closings. Bigger pipeline.",
    description:
      "Agents, developers and property firms that want qualified leads, automated follow-ups and a professional digital presence.",
    services: ["Website Design", "Google Ads", "CRM"],
    stat: "5× lead volume",
  },
  {
    slug: "legal",
    emoji: "⚖️",
    name: "Legal",
    tagline: "Get found. Build trust. Fill your calendar.",
    description:
      "Law firms and solicitors that want to rank on Google, build credibility online and convert website visitors into consultations.",
    services: ["SEO", "Website Design", "Google Business"],
    stat: "Top 3 on Google",
  },
  {
    slug: "automotive",
    emoji: "🚗",
    name: "Automotive",
    tagline: "More service bookings. More car sales.",
    description:
      "Dealerships, workshops and auto services that want more online visibility, easier booking and stronger Google Reviews.",
    services: ["Google Business", "SEO", "Website Design"],
    stat: "+200% inquiries",
  },
  {
    slug: "hospitality",
    emoji: "🏨",
    name: "Hospitality",
    tagline: "More bookings. Better reviews. Higher occupancy.",
    description:
      "Hotels, guesthouses and travel services that want direct bookings, 5-star reviews and dominant local search rankings.",
    services: ["Website Design", "SEO", "Google Business"],
    stat: "Direct bookings +180%",
  },
  {
    slug: "other",
    emoji: "🚀",
    name: "Any Business",
    tagline: "Whatever your industry — we build growth.",
    description:
      "WayFind has worked across 8+ industries. If you have customers, we can build the digital system to reach more of them.",
    services: ["Website Design", "AI Integration", "Ads", "SEO"],
    stat: "50+ projects delivered",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:px-10 md:pt-48">
        <SectionEyebrow>Industries</SectionEyebrow>
        <h1 className="mt-6 font-display text-display-md max-w-3xl text-balance leading-none tracking-tight">
          We understand your business — not just your code.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Deep experience across Pakistan&apos;s key industries means we know your customers, your
          competitors and what actually drives growth in your sector.
        </p>
      </section>

      {/* Industry grid */}
      <section className="relative mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => (
            <MotionDiv
              key={industry.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={`/industries/${industry.slug}`}
                data-cursor-hover
                className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5"
              >
                {/* Decorative background glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/5 blur-3xl transition-colors group-hover:bg-accent/10" />
                
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted transition-colors group-hover:bg-accent/10">
                    <span className="text-2xl" aria-hidden>
                      {industry.emoji}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>

                <div>
                  <h2 className="text-lg font-medium tracking-tight">{industry.name}</h2>
                  <p className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
                    {industry.stat}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>

                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  {industry.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background px-3 py-1 text-[10px] font-medium text-muted-foreground transition-colors group-hover:border-accent/20 group-hover:text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10">
          <h2 className="font-display text-display-sm leading-none tracking-tight">
            Don&apos;t see your industry?
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            We&apos;ve worked with businesses across many sectors. Book a call and let&apos;s talk.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg" arrow>
              Book Free Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
