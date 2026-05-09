import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { PROJECTS_DATA } from "@/lib/projects-data";

// ── Helpers ──────────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const params: { slug: string; projectSlug: string }[] = [];
  for (const project of PROJECTS_DATA) {
    params.push({ slug: project.industrySlug, projectSlug: project.slug });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; projectSlug: string }>;
}): Promise<Metadata> {
  const { projectSlug } = await params;
  const study = PROJECTS_DATA.find((s) => s.slug === projectSlug);
  if (!study) return { title: "Not Found" };
  return {
    title: `${study.name} Case Study`,
    description: study.tagline,
  };
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string; projectSlug: string }>;
}) {
  const { slug, projectSlug } = await params;
  const study = PROJECTS_DATA.find((s) => s.slug === projectSlug && s.industrySlug === slug);
  if (!study) notFound();

  // Find prev/next within the same industry
  const industryProjects = PROJECTS_DATA.filter(p => p.industrySlug === slug);
  const currentIndex = industryProjects.findIndex((s) => s.slug === projectSlug);
  const prev = industryProjects[currentIndex - 1] ?? null;
  const next = industryProjects[currentIndex + 1] ?? null;

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pb-24 pt-36 md:pt-52"
        style={{ backgroundColor: study.color }}
      >
        {/* Glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at 60% 40%, ${study.accent}25 0%, transparent 60%)`,
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <Link
            href={`/industries/${slug}`}
            className="mb-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-white/40 transition-colors hover:text-white/80"
          >
            <ArrowLeft size={12} />
            Back to {study.industry}
          </Link>

          <div className="mt-4">
            <span
              className="inline-block rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest"
              style={{ borderColor: `${study.accent}50`, color: study.accent }}
            >
              {study.industry}
            </span>
          </div>

          <h1 className="mt-4 font-display text-display-md max-w-3xl leading-none tracking-tight text-white">
            {study.tagline}
          </h1>

          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Industry", value: study.industry },
              { label: "Timeline", value: study.timeline },
              { label: "Key Result", value: study.keyResult },
              { label: "Services", value: study.services.length.toString() + " combined" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 p-4"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm font-medium text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionEyebrow>The Challenge</SectionEyebrow>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              {study.challenge}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {study.services.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Decorative initial */}
          <div
            className="hidden items-center justify-center rounded-2xl lg:flex"
            style={{ backgroundColor: study.color }}
          >
            <span
              className="font-display text-[160px] leading-none opacity-20"
              style={{ color: study.accent }}
              aria-hidden
            >
              {study.name.charAt(0)}
            </span>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionEyebrow>Our Approach</SectionEyebrow>
          <h2 className="mt-6 font-display text-display-sm max-w-xl leading-none tracking-tight">
            How we solved it.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {study.approach.map((step) => (
              <div
                key={step.step}
                className="flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-muted"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {step.step}
                </span>
                <h3 className="text-base font-medium">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <SectionEyebrow>The Results</SectionEyebrow>
        <h2 className="mt-6 font-display text-display-sm max-w-xl leading-none tracking-tight">
          Numbers that matter.
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {study.results.map((r) => (
            <div
              key={r.label}
              className="rounded-2xl border border-border p-8"
            >
              <p
                className="font-display text-display-md leading-none tracking-tight"
                style={{ color: study.accent }}
              >
                {r.value}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{r.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-28">
          <span
            className="font-display text-8xl leading-none opacity-20"
            style={{ color: study.accent }}
            aria-hidden
          >
            &ldquo;
          </span>
          <blockquote className="-mt-4 font-display text-display-xs leading-tight tracking-tight">
            {study.testimonial.quote}
          </blockquote>
          <div className="mt-8">
            <p className="text-sm font-medium">{study.testimonial.author}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
               {study.testimonial.role}
            </p>
          </div>
        </div>
      </section>

      {/* Services tags */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          Services Used
        </p>
        <div className="flex flex-wrap gap-3">
          {study.services.map((s) => {
            const serviceSlug = s
              .toLowerCase()
              .replace(/\s+&\s+/g, "-")
              .replace(/\s+/g, "-");
            return (
              <Link
                key={s}
                href={`/services/${serviceSlug}`}
                data-cursor-hover
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 font-mono text-[11px] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                {s}
                <ArrowUpRight size={10} />
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10">
          <h2 className="font-display text-display-sm leading-none tracking-tight">
            Start a similar project.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Book a free strategy call and let&apos;s talk about your business.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg" arrow>
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <div className="border-t border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {prev ? (
            <Link
              href={`/industries/${slug}/${prev.slug}`}
              data-cursor-hover
              className="group flex items-center gap-4 px-8 py-8 transition-colors hover:bg-muted"
            >
              <ArrowLeft
                size={16}
                className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-1"
              />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Previous Project
                </p>
                <p className="mt-0.5 text-sm font-medium">{prev.name}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/industries/${slug}/${next.slug}`}
              data-cursor-hover
              className="group flex items-center justify-end gap-4 px-8 py-8 transition-colors hover:bg-muted"
            >
              <div className="text-right">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Next Project
                </p>
                <p className="mt-0.5 text-sm font-medium">{next.name}</p>
              </div>
              <ArrowRight
                size={16}
                className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1"
              />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </>
  );
}
