"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { cn } from "@/lib/utils";

// ── Pricing data ──────────────────────────────────────────────
const ONE_TIME = [
  {
    service: "Website Design",
    tiers: [
      { name: "Basic", price: 50000, features: ["5 pages", "Mobile responsive", "Contact form", "Basic SEO"] },
      { name: "Growth", price: 90000, features: ["10 pages", "Custom design", "Booking system", "Blog", "Advanced SEO"], highlighted: true },
      { name: "Premium", price: 150000, features: ["Unlimited pages", "Bespoke design", "E-commerce", "CRM integration", "AI widget"] },
    ],
  },
  {
    service: "CRM & Automation",
    tiers: [
      { name: "Basic", price: 80000, features: ["3 users", "Lead capture", "2 automation sequences", "Dashboard"] },
      { name: "Growth", price: 130000, features: ["10 users", "Multi-channel", "5 sequences", "Email + SMS", "Reports"], highlighted: true },
      { name: "Premium", price: 200000, features: ["Unlimited users", "All integrations", "Unlimited sequences", "AI lead scoring"] },
    ],
  },
  {
    service: "AI Integration",
    tiers: [
      { name: "Basic", price: 60000, features: ["AI chatbot", "Website only", "FAQ handling", "WhatsApp handoff"] },
      { name: "Growth", price: 100000, features: ["Advanced AI", "Website + WhatsApp", "Appointment booking", "CRM integration"], highlighted: true },
      { name: "Premium", price: 180000, features: ["Deep AI training", "All channels", "Full automation", "Weekly reports"] },
    ],
  },
];

const MONTHLY = [
  {
    service: "SEO",
    tiers: [
      { name: "Starter", price: 25000, features: ["5 keywords", "On-page SEO", "Google Business", "Monthly report"] },
      { name: "Growth", price: 40000, features: ["15 keywords", "Full on-page", "2 blog articles", "Citation building"], highlighted: true },
      { name: "Dominate", price: 65000, features: ["30+ keywords", "4 articles/mo", "Link building", "National SEO"] },
    ],
  },
  {
    service: "Google & Meta Ads",
    tiers: [
      { name: "Starter", price: 30000, features: ["1 platform", "Campaign management", "3 ad variations", "Monthly report"] },
      { name: "Growth", price: 50000, features: ["Google + Meta", "A/B testing", "6 ad variations", "Retargeting"], highlighted: true },
      { name: "Scale", price: 80000, features: ["All platforms", "Full funnel", "Unlimited creative", "Weekly reports"] },
    ],
  },
  {
    service: "Google Business",
    tiers: [
      { name: "Setup", price: 15000, features: ["One-time setup", "Full optimisation", "10 photos", "Q&A setup"] },
      { name: "Starter Mgmt", price: 8000, features: ["2 posts/month", "Review monitoring", "Photo updates", "Monthly report"] },
      { name: "Growth Mgmt", price: 15000, features: ["4 posts/month", "Review strategy", "All responses", "Competitor tracking"], highlighted: true },
    ],
  },
];

// ── Calculator ────────────────────────────────────────────────
const CALC_OPTIONS = [
  { label: "Website (Basic)", price: 50000 },
  { label: "Website (Growth)", price: 90000 },
  { label: "Website (Premium)", price: 150000 },
  { label: "CRM (Basic)", price: 80000 },
  { label: "CRM (Growth)", price: 130000 },
  { label: "AI Chatbot (Basic)", price: 60000 },
  { label: "AI Chatbot (Growth)", price: 100000 },
  { label: "SEO (Starter/mo)", price: 25000 },
  { label: "SEO (Growth/mo)", price: 40000 },
  { label: "Ads (Starter/mo)", price: 30000 },
  { label: "Ads (Growth/mo)", price: 50000 },
  { label: "Google Business Setup", price: 15000 },
  { label: "Google Business Mgmt/mo", price: 15000 },
];

export default function PricingPage() {
  const [monthly, setMonthly] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const total = selected.reduce((acc, label) => {
    const opt = CALC_OPTIONS.find((o) => o.label === label);
    return acc + (opt?.price ?? 0);
  }, 0);

  const discount = selected.length >= 3 ? 0.25 : selected.length >= 2 ? 0.15 : 0;
  const discounted = Math.round(total * (1 - discount));

  const toggleCalc = (label: string) =>
    setSelected((s) => (s.includes(label) ? s.filter((x) => x !== label) : [...s, label]));

  const data = monthly ? MONTHLY : ONE_TIME;

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:px-10 md:pt-48">
        <SectionEyebrow>Pricing</SectionEyebrow>
        <h1 className="mt-6 font-display text-display-md max-w-3xl text-balance leading-none tracking-tight">
          No surprises. Just results.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Transparent pricing for every service. Bundle multiple services and save 15–25%.
        </p>

        {/* Toggle */}
        <div className="mt-10 inline-flex items-center rounded-full border border-border bg-muted p-1">
          <button
            type="button"
            onClick={() => setMonthly(false)}
            data-cursor-hover
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              !monthly ? "bg-foreground text-background" : "text-muted-foreground",
            )}
          >
            One-Time Projects
          </button>
          <button
            type="button"
            onClick={() => setMonthly(true)}
            data-cursor-hover
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              monthly ? "bg-foreground text-background" : "text-muted-foreground",
            )}
          >
            Monthly Services
          </button>
        </div>
      </section>

      {/* Pricing cards */}
      {data.map((group) => (
        <section key={group.service} className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
            <h2 className="mb-10 font-display text-display-xs leading-none tracking-tight">
              {group.service}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {group.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={cn(
                    "flex flex-col rounded-2xl border p-8",
                    tier.highlighted
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-background",
                  )}
                >
                  {tier.highlighted && (
                    <span className="mb-3 inline-flex w-fit rounded-full bg-background/10 px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest text-background/80">
                      Most Popular
                    </span>
                  )}
                  <p
                    className={cn(
                      "font-mono text-[11px] uppercase tracking-widest",
                      tier.highlighted ? "text-background/60" : "text-muted-foreground",
                    )}
                  >
                    {tier.name}
                  </p>
                  <p
                    className={cn(
                      "mt-3 font-display text-display-xs leading-none tracking-tight",
                      tier.highlighted ? "text-background" : "text-foreground",
                    )}
                  >
                    PKR {tier.price.toLocaleString()}
                    {monthly && <span className="text-sm font-sans">/mo</span>}
                  </p>

                  <ul className="mt-6 flex flex-1 flex-col gap-2">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className={cn(
                          "flex items-center gap-2 text-sm",
                          tier.highlighted ? "text-background/80" : "text-foreground/70",
                        )}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={tier.highlighted ? "text-background" : "text-accent"} aria-hidden>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      href="/contact"
                      variant={tier.highlighted ? "ghost" : "outline"}
                      className={cn(
                        "w-full",
                        tier.highlighted && "bg-background text-foreground hover:bg-background/90",
                      )}
                      arrow
                    >
                      Get started
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Calculator */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <SectionEyebrow>Estimate</SectionEyebrow>
          <h2 className="mt-6 font-display text-display-sm leading-none tracking-tight">
            Build your own package.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Select any services below to see an instant estimate. Bundles of 2+ services save 15–25%.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-wrap gap-2">
              {CALC_OPTIONS.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => toggleCalc(opt.label)}
                  data-cursor-hover
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm transition-all",
                    selected.includes(opt.label)
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-foreground/40",
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Estimate panel */}
            <div className="rounded-2xl border border-border bg-background p-8">
              <p className="eyebrow mb-6">Your estimate</p>
              {selected.length === 0 ? (
                <p className="text-sm text-muted-foreground">Select services to see pricing.</p>
              ) : (
                <>
                  <div className="space-y-2">
                    {selected.map((label) => {
                      const opt = CALC_OPTIONS.find((o) => o.label === label)!;
                      return (
                        <div key={label} className="flex justify-between text-sm">
                          <span className="text-foreground/80">{label}</span>
                          <span>PKR {opt.price.toLocaleString()}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6 border-t border-border pt-6">
                    {discount > 0 && (
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-green-600">Bundle discount ({(discount * 100).toFixed(0)}%)</span>
                        <span className="text-green-600">− PKR {(total - discounted).toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="font-medium">Total estimate</span>
                      <span className="font-display text-display-xs leading-none">
                        PKR {discounted.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button href="/contact" variant="primary" size="md" arrow className="w-full">
                      Get exact quote
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
        <SectionEyebrow>Pricing FAQ</SectionEyebrow>
        <div className="mt-10 divide-y divide-border">
          {[
            { q: "Are these prices fixed or negotiable?", a: "These are our standard packages. For large or complex projects we provide a custom quote — book a free call." },
            { q: "What payment methods do you accept?", a: "Bank transfer, Easypaisa, JazzCash and credit card. 50% upfront, 50% on completion for project work." },
            { q: "Are there any hidden fees?", a: "None. What you see is what you pay. Any scope changes are quoted separately before work begins." },
            { q: "Do you offer discounts for non-profits or startups?", a: "Yes, we offer a 20% discount for registered non-profits and early-stage startups (less than 1 year old). Contact us to verify." },
          ].map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-sm font-medium">
                {faq.q}
                <span className="mt-0.5 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10">
          <h2 className="font-display text-display-sm leading-none tracking-tight">
            Not sure what you need?
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Book a free 30-minute call. We&apos;ll scope it out together.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg" arrow>
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
