import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export const metadata: Metadata = {
  title: "About",
  description:
    "WayFind Technologies — A digital growth agency based in Islamabad.",
};

const VALUES = [
  {
    icon: "◈",
    title: "Excellence",
    body: "We refuse mediocrity. Every deliverable is crafted to a standard that we'd be proud to put our name on publicly — and we always do.",
  },
  {
    icon: "◻",
    title: "Transparency",
    body: "No jargon, no hidden fees, no smoke and mirrors. We communicate clearly, report honestly and take full ownership of every outcome.",
  },
  {
    icon: "◉",
    title: "Innovation",
    body: "We stay ahead. AI, automation and emerging tools are built into what we do — not bolted on as afterthoughts.",
  },
  {
    icon: "↑",
    title: "Impact",
    body: "We measure success by what changes for our clients. Growth in revenue, leads and market position — that's the only scoreboard that matters.",
  },
];

const MILESTONES = [
  { year: "2022", event: "WayFind founded in Islamabad with a team of 3." },
  { year: "2023", event: "First 20 clients. Expanded into AI integration services." },
  { year: "2024", event: "50+ projects delivered. Team grows to 12 specialists." },
  { year: "2025", event: "22+ AI systems deployed. International clients onboarded." },
];

const TEAM = [
  { name: "Bilal Ahmed", role: "Founder & CEO", initials: "BA", color: "#1D4ED8" },
  { name: "Sara Mahmood", role: "Head of Design", initials: "SM", color: "#7C3AED" },
  { name: "Hassan Ali", role: "Lead Developer", initials: "HA", color: "#059669" },
  { name: "Fatima Khan", role: "AI & Automation Lead", initials: "FK", color: "#D97706" },
  { name: "Umar Farooq", role: "SEO Director", initials: "UF", color: "#DC2626" },
  { name: "Aisha Raza", role: "Performance Marketing", initials: "AR", color: "#0891B2" },
];

const COMPARISON = [
  {
    aspect: "What you get",
    wayfind: "Complete digital growth system",
    typical: "Just a website",
  },
  {
    aspect: "Timeline",
    wayfind: "10–14 days to first results",
    typical: "6–8 weeks minimum",
  },
  {
    aspect: "Communication",
    wayfind: "Dedicated manager, daily updates",
    typical: "Email chains, missed calls",
  },
  {
    aspect: "After launch",
    wayfind: "Ongoing growth partner",
    typical: "You're on your own",
  },
  {
    aspect: "Pricing",
    wayfind: "Transparent packages, no surprises",
    typical: "Vague quotes, hidden costs",
  },
];

const TECH = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion",
  "OpenAI", "GoHighLevel", "Google Analytics", "Meta Business",
  "Vercel", "Cloudflare", "WordPress", "Shopify",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-36 md:px-10 md:pt-52">
        <SectionEyebrow>About WayFind</SectionEyebrow>
        <h1 className="mt-6 font-display text-display-md max-w-3xl text-balance leading-none tracking-tight">
          Engineering Digital Excellence<br />For Modern Brands.
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <p className="text-base leading-relaxed text-foreground/80">
            WayFind was founded in Islamabad with a simple belief: Pakistani businesses deserve world-class digital infrastructure. Not cheap templates. Not copy-paste solutions. Systems that actually grow revenue.
          </p>
          <p className="text-base leading-relaxed text-foreground/80">
            Today we&apos;re a team of designers, developers, AI engineers and marketers — all dedicated to building complete digital growth systems for our clients.
          </p>
        </div>
      </section>

      {/* Story + Timeline */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionEyebrow>Our Story</SectionEyebrow>
          <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-5 text-sm leading-relaxed text-foreground/80">
              <p>
                WayFind started when our founder, Bilal, was helping a family friend&apos;s clinic get more patients. What started as &apos;just fix the website&apos; turned into a complete digital transformation — AI booking bot, Google ads, SEO — that tripled their appointments in 60 days.
              </p>
              <p>
                That clinic became MedCare, our first case study, and proof that Pakistani businesses don&apos;t need to settle for amateur-hour digital work. With the right systems, they can compete with anyone — locally or internationally.
              </p>
              <p>
                We&apos;ve since worked with gyms, schools, restaurants, law firms, real estate agencies and retailers across Pakistan. Every client gets the same commitment: results that matter, delivered without the corporate agency runaround.
              </p>
            </div>
            {/* Timeline */}
            <div className="relative space-y-0 pl-6">
              <div className="absolute left-0 top-2 h-full w-px bg-border" aria-hidden />
              {MILESTONES.map((m) => (
                <div key={m.year} className="relative pb-8 last:pb-0">
                  <div className="absolute -left-6 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                  <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{m.year}</p>
                  <p className="mt-1 text-sm text-foreground/80">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <SectionEyebrow>Our Values</SectionEyebrow>
        <h2 className="mt-6 font-display text-display-sm max-w-xl leading-none tracking-tight">
          What we stand for.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="flex flex-col gap-4 bg-background p-10 transition-colors hover:bg-muted"
            >
              <span className="text-2xl text-accent" aria-hidden>{v.icon}</span>
              <h3 className="text-base font-medium">{v.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <SectionEyebrow>Why WayFind</SectionEyebrow>
          <h2 className="mt-6 font-display text-display-sm leading-none tracking-tight">
            WayFind vs. the typical agency.
          </h2>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    —
                  </th>
                  <th className="border-l border-border bg-foreground px-6 py-4 text-left font-mono text-[11px] uppercase tracking-widest text-background/70">
                    WayFind
                  </th>
                  <th className="border-l border-border px-6 py-4 text-left font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Typical Agency
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {COMPARISON.map((row) => (
                  <tr key={row.aspect} className="bg-background">
                    <td className="px-6 py-4 font-medium">{row.aspect}</td>
                    <td className="border-l border-border bg-foreground/5 px-6 py-4 text-accent">
                      {row.wayfind}
                    </td>
                    <td className="border-l border-border px-6 py-4 text-muted-foreground">
                      {row.typical}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <SectionEyebrow>The Team</SectionEyebrow>
        <h2 className="mt-6 font-display text-display-sm max-w-xl leading-none tracking-tight">
          The people behind your growth.
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {TEAM.map((member) => (
            <div key={member.name} className="group flex flex-col items-center gap-3 text-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-2xl text-xl font-semibold text-white transition-transform group-hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${member.color}cc, ${member.color})`,
                }}
                aria-hidden
              >
                {member.initials}
              </div>
              <div>
                <p className="text-[13px] font-medium">{member.name}</p>
                <p className="text-[11px] text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionEyebrow>Find Us</SectionEyebrow>
          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-display-sm leading-none tracking-tight">
                Based in Islamabad, Pakistan.
              </h2>
              <div className="mt-8 space-y-4 text-sm text-muted-foreground">
                <p>B-17, B1 Markaz, Islamabad, Pakistan</p>
                <p>hello@wayfind.pk</p>
                <p>+92 300 000 0000</p>
                <p>Monday–Saturday, 9am–7pm PKT</p>
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-muted">
              <iframe
                title="WayFind office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.0!2d73.0!3d33.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM2JzAwLjAiTiA3M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2spk!4v1!5m2!1sen!2spk"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <SectionEyebrow>Tech Stack</SectionEyebrow>
        <h2 className="mt-6 font-display text-display-sm max-w-xl leading-none tracking-tight">
          Tools we trust.
        </h2>
        <div className="mt-12 flex flex-wrap gap-3">
          {TECH.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-4 py-2 font-mono text-[12px] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10">
          <h2 className="font-display text-display-sm leading-none tracking-tight">
            Work with us.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Let&apos;s build something great together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" arrow>
              Start a Project
            </Button>
            <Button href="/careers" variant="outline" size="lg">
              Join the Team
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
