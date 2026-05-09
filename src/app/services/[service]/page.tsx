import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SERVICES_DATA } from "@/lib/services-data";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ service: string }> };

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ service: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const data = SERVICES_DATA[service];
  if (!data) return {};
  return {
    title: data.title,
    description: data.tagline,
  };
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const data = SERVICES_DATA[service];
  if (!data) notFound();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-36 md:px-10 md:pt-48">
        <SectionEyebrow>Services</SectionEyebrow>
        <h1 className="mt-6 font-display text-display-md max-w-3xl text-balance leading-none tracking-tight">
          {data.title}
        </h1>
        <p className="mt-4 text-lg italic text-muted-foreground">{data.tagline}</p>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-foreground/80">
          {data.description}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="primary" size="lg" arrow>
            Start with this service
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Book free consultation
          </Button>
        </div>
      </section>

      {/* Pain points */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionEyebrow>The Problem</SectionEyebrow>
          <h2 className="mt-6 font-display text-display-sm max-w-2xl leading-none tracking-tight">
            Sound familiar?
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {data.painPoints.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-background p-8"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-base font-medium leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <SectionEyebrow>What&apos;s Included</SectionEyebrow>
        <h2 className="mt-6 font-display text-display-sm max-w-2xl leading-none tracking-tight">
          Everything you get with this service.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {data.features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-3 bg-background p-8 transition-colors hover:bg-muted"
            >
              <span className="text-2xl" aria-hidden>{f.icon}</span>
              <h3 className="text-sm font-medium">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionEyebrow>How It Works</SectionEyebrow>
          <h2 className="mt-6 font-display text-display-sm max-w-2xl leading-none tracking-tight">
            Our process for this service.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            {data.processSteps.map((step) => (
              <div key={step.num} className="flex flex-col gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border font-mono text-[11px] text-muted-foreground">
                  {step.num}
                </div>
                <h3 className="text-sm font-medium">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <SectionEyebrow>Case Study</SectionEyebrow>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-baseline gap-2">
              <span className="font-display text-display-md leading-none tracking-tight text-accent">
                {data.caseStudy.metric}
              </span>
              <span className="text-sm text-muted-foreground">{data.caseStudy.metricLabel}</span>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              &ldquo;{data.caseStudy.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm text-muted-foreground">— {data.caseStudy.author}</p>
          </div>
          <div className="rounded-2xl border border-border bg-muted p-10 text-center">
            <p className="text-sm text-muted-foreground">{data.caseStudy.industry}</p>
            <p className="mt-2 font-display text-display-xs font-medium">{data.caseStudy.client}</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionEyebrow>Pricing</SectionEyebrow>
          <h2 className="mt-6 font-display text-display-sm max-w-2xl leading-none tracking-tight">
            Transparent pricing, no surprises.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {data.tiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  "flex flex-col rounded-2xl border p-8",
                  tier.highlighted
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background",
                )}
              >
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
                    "mt-4 font-display text-display-xs leading-none tracking-tight",
                    tier.highlighted ? "text-background" : "text-foreground",
                  )}
                >
                  {tier.price}
                </p>
                <p
                  className={cn(
                    "mt-2 text-xs",
                    tier.highlighted ? "text-background/70" : "text-muted-foreground",
                  )}
                >
                  {tier.description}
                </p>

                <ul className="mt-8 flex flex-1 flex-col gap-2.5">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={cn(
                        "flex items-start gap-2.5 text-sm",
                        tier.highlighted ? "text-background/80" : "text-foreground/70",
                      )}
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={cn(
                          "mt-0.5 shrink-0",
                          tier.highlighted ? "text-background" : "text-accent",
                        )}
                        aria-hidden
                      >
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
                    size="md"
                    arrow
                    className={
                      tier.highlighted
                        ? "w-full bg-background text-foreground hover:bg-background/90"
                        : "w-full"
                    }
                  >
                    Get started
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Need something custom?{" "}
            <a href="/contact" className="underline hover:text-foreground">
              Book a free call
            </a>{" "}
            and we&apos;ll scope it together.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
        <SectionEyebrow>FAQ</SectionEyebrow>
        <h2 className="mt-6 font-display text-display-sm leading-none tracking-tight">
          Common questions.
        </h2>
        <div className="mt-10 divide-y divide-border">
          {data.faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-sm font-medium">
                {faq.q}
                <span className="mt-0.5 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
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
            Ready to start?
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Book a free consultation and we&apos;ll walk you through exactly how this service will work for your business.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" arrow>
              Start with {data.title} →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
