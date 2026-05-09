import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { MotionDiv, MotionH1, MotionP } from "@/components/ui/motion-wrapper";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { BackgroundVideo } from "@/components/ui/background-video";
import { INDUSTRIES } from "../page";
import { PROJECTS_DATA } from "@/lib/projects-data";

// ── Video map ─────────────────────────────────────────────────────────────────
const INDUSTRY_VIDEOS: Record<string, string> = {
  healthcare: "/videos/industry-healthcare.mp4?v=2",
  education: "/videos/industry-education.mp4?v=2",
  fitness: "/videos/industry-fitness.mp4?v=2",
  food: "/videos/industry-restaurant.mp4?v=2",
  retail: "/videos/industry-retail.mp4?v=2",
  "real-estate": "/videos/industry-realestate.mp4?v=2",
};

// ── Per-industry extra data ──────────────────────────────────────────────────
const INDUSTRY_DETAIL: Record<
  string,
  {
    hero: string;
    painPoints: { title: string; body: string }[];
    solution: string;
    caseStudy: { name: string; result: string; body: string };
    testimonial: { quote: string; author: string; role: string };
    auditLabel: string;
  }
> = {
  healthcare: {
    hero: "More patients, less admin — the complete digital clinic.",
    painPoints: [
      {
        title: "Your phone rings all day but bookings are still low",
        body: "Patients give up waiting on hold. An AI booking system handles every inquiry 24/7.",
      },
      {
        title: "Competitors appear above you on Google",
        body: "Most clinics have outdated or non-existent websites. WayFind puts you at #1.",
      },
      {
        title: "No-shows and last-minute cancellations drain revenue",
        body: "Automated reminders and follow-ups keep your schedule full.",
      },
    ],
    solution:
      "We build the complete digital infrastructure for your clinic: a professional website with online booking, an AI assistant trained on your services, a CRM that tracks every patient inquiry, and local SEO that puts you at the top of Google.",
    caseStudy: {
      name: "MedCare Clinic",
      result: "3× more appointments in 60 days",
      body: "A Islamabad clinic went from 35% capacity to a waitlist in just 60 days after we deployed their new website, AI booking bot and local SEO campaign.",
    },
    testimonial: {
      quote:
        "Appointments tripled in 60 days. The AI bot handles 90% of patient queries and our front desk finally has time to focus on care, not admin.",
      author: "Dr. Sara Ahmed",
      role: "Founder, MedCare Clinic",
    },
    auditLabel: "clinic",
  },
  education: {
    hero: "Fill every seat, every term — a complete enrollment engine.",
    painPoints: [
      {
        title: "Parents can't find you when searching for schools",
        body: "Without SEO and Google Ads, parents choosing schools in your area simply won't see you.",
      },
      {
        title: "Inquiries go unanswered for days",
        body: "Parents decide quickly. Automated responses and CRM follow-ups keep every lead warm.",
      },
      {
        title: "Your website doesn't reflect the quality you offer",
        body: "First impressions matter. A premium website builds trust before parents visit.",
      },
    ],
    solution:
      "We build schools a complete admissions engine: a professional website, Google and Facebook ads targeting local parents, CRM for tracking every inquiry, and automated follow-up sequences that convert interest into enrollment.",
    caseStudy: {
      name: "BrightPath Academy",
      result: "180 new admissions, first term",
      body: "A new Islamabad school was worried about filling seats. WayFind launched targeted Google ads and a professional website. They ended their first term oversubscribed.",
    },
    testimonial: {
      quote:
        "We ended up oversubscribed and had to add a waitlist. The ROI on our digital investment was extraordinary.",
      author: "Principal Hira Baig",
      role: "BrightPath Academy",
    },
    auditLabel: "school",
  },
  fitness: {
    hero: "A packed schedule and a growing membership base.",
    painPoints: [
      {
        title: "Your ads spend budget but memberships don't grow",
        body: "Untargeted ads burn budget. WayFind builds campaigns with proper funnel strategy and creative testing.",
      },
      {
        title: "DMs and inquiries sit unread",
        body: "Leads go cold in hours. An AI membership bot responds instantly and books trials automatically.",
      },
      {
        title: "Members leave after the first month",
        body: "Automated retention sequences re-engage members before they cancel.",
      },
    ],
    solution:
      "We deploy a complete member acquisition system: high-ROAS Meta ad campaigns, an AI bot that qualifies and books leads, an optimised website and a CRM that automates your entire membership sales process.",
    caseStudy: {
      name: "Elite Fitness Hub",
      result: "PKR 2.4M new memberships, Month 1",
      body: "Islamabad's Elite Fitness Hub was wasting their ad budget with no strategy. We rebuilt their campaigns and deployed an AI membership assistant. Month 1 results were PKR 2.4M in new membership revenue.",
    },
    testimonial: {
      quote:
        "The AI bot alone saved us two full-time staff costs. It responds instantly and books trial sessions while we sleep.",
      author: "Kamran Raza",
      role: "Elite Fitness Hub",
    },
    auditLabel: "fitness centre",
  },
  food: {
    hero: "Full tables, 5-star reviews and #1 on Google.",
    painPoints: [
      {
        title: "Customers can't find you when hungry and searching",
        body: "Local search is the most valuable channel for restaurants. WayFind gets you to the top.",
      },
      {
        title: "No way to take reservations online",
        body: "Customers expect to book instantly. No online booking means lost covers.",
      },
      {
        title: "Bad reviews (or no reviews) hurting your reputation",
        body: "We set up automated review collection so your happy customers become your best marketing.",
      },
    ],
    solution:
      "We optimise your Google Business Profile, build a beautiful restaurant website with online reservations, and run a local SEO campaign that puts you above every competitor in your area.",
    caseStudy: {
      name: "Dastarkhan Restaurant",
      result: "#1 on Google for 12 local keywords",
      body: "Dastarkhan went from invisible to #1 on Google for every target keyword in Islamabad. Monthly online reservations went from zero to 180+.",
    },
    testimonial: {
      quote:
        "People now walk in saying they found us on Google. That never happened before. The ROI in the first 3 months was 12×.",
      author: "Ali Khan",
      role: "Dastarkhan Restaurant",
    },
    auditLabel: "restaurant",
  },
  retail: {
    hero: "Turn your store into a national brand.",
    painPoints: [
      {
        title: "Revenue is limited by your physical location",
        body: "E-commerce lets you sell to customers across Pakistan — and internationally.",
      },
      {
        title: "Your Meta ads spend money but don't convert",
        body: "Most retail ad campaigns lack proper targeting, creative and funnel strategy.",
      },
      {
        title: "No customer data or repeat purchase strategy",
        body: "A CRM with automated loyalty sequences turns one-time buyers into regulars.",
      },
    ],
    solution:
      "We build your e-commerce store, run high-ROAS Meta ad campaigns and set up a CRM with retention sequences. The result is a complete online retail operation that drives consistent revenue.",
    caseStudy: {
      name: "Luxe Boutique",
      result: "4.2× ROAS on Meta campaigns",
      body: "A Lahore boutique wanted to go national. We built their e-commerce store and ran Meta ads with a full funnel strategy. Month 3 online revenue hit PKR 1.8M.",
    },
    testimonial: {
      quote:
        "We're now shipping nationwide and internationally. WayFind made us a real online brand.",
      author: "Sana Mirza",
      role: "Luxe Boutique",
    },
    auditLabel: "retail",
  },
  "real-estate": {
    hero: "More qualified leads. A fuller pipeline. Faster closings.",
    painPoints: [
      {
        title: "You're getting enquiries but they're not serious buyers",
        body: "Targeted Google Ads and a proper CRM qualification system filters for serious buyers only.",
      },
      {
        title: "Leads go cold before you can follow up",
        body: "Automated CRM sequences follow up instantly and keep leads warm for months.",
      },
      {
        title: "Your online presence doesn't match the properties you sell",
        body: "Premium real estate demands a premium digital presence to attract premium buyers.",
      },
    ],
    solution:
      "We build property websites, Google ad campaigns targeting buyers in your area, and CRM automation that qualifies and nurtures every lead — so your team only speaks to serious buyers.",
    caseStudy: {
      name: "Premier Properties",
      result: "5× lead volume in 90 days",
      body: "A real estate firm was generating 10–12 leads per month from word of mouth. We built targeted Google campaigns and a CRM. Within 90 days they were receiving 55+ qualified leads per month.",
    },
    testimonial: {
      quote:
        "Our pipeline has never been this full. The leads are qualified, the follow-ups are automated and we're closing faster than ever.",
      author: "Tariq Mahmood",
      role: "Premier Properties",
    },
    auditLabel: "property",
  },
  legal: {
    hero: "Rank on Google. Build trust. Fill your consultation calendar.",
    painPoints: [
      {
        title: "Potential clients can't find you when they need legal help",
        body: "People search for lawyers online immediately. Without SEO you're invisible at the moment they're ready to hire.",
      },
      {
        title: "Your website doesn't convey the credibility you've earned",
        body: "In legal services, trust is everything. Your website must project authority from the first second.",
      },
      {
        title: "No system for converting website visitors into consultations",
        body: "A clear CTA, easy booking and automated follow-ups turn visitors into booked calls.",
      },
    ],
    solution:
      "We build a professional law firm website, run targeted local SEO for your practice areas, optimise your Google Business Profile, and set up automated consultation booking.",
    caseStudy: {
      name: "Qureshi & Associates",
      result: "Top 3 Google ranking for 8 practice areas",
      body: "An Islamabad law firm was relying entirely on referrals. We built them a professional website and ran local SEO for their key practice areas. Within 10 weeks they were in the top 3 for all target terms.",
    },
    testimonial: {
      quote:
        "Our consultation calendar is now fully booked two weeks ahead. We had to hire another associate to handle the demand.",
      author: "Adeel Qureshi",
      role: "Qureshi & Associates",
    },
    auditLabel: "law firm",
  },
  automotive: {
    hero: "More bookings, more sales — a complete auto digital presence.",
    painPoints: [
      {
        title: "Customers searching for mechanics or cars can't find you",
        body: "Most auto businesses have poor local SEO. WayFind gets you to the top for every relevant search.",
      },
      {
        title: "No way to book service appointments online",
        body: "Customers expect online booking. Without it, you're losing business to competitors who have it.",
      },
      {
        title: "Your reputation on Google doesn't reflect your quality",
        body: "Reviews drive automotive decisions. A systematic review strategy makes you the obvious choice.",
      },
    ],
    solution:
      "We build a professional website with online service booking, optimise your Google Business Profile for maximum local visibility, and build a review strategy that makes you the highest-rated option in your area.",
    caseStudy: {
      name: "Capital Auto Workshop",
      result: "+200% service inquiries in 60 days",
      body: "A well-established Islamabad workshop had poor online visibility. We rebuilt their Google presence and launched local SEO. Inquiries more than doubled in 60 days.",
    },
    testimonial: {
      quote:
        "We went from 4 online bookings a week to 20+. Our Google rating went from 3.8 to 4.8 stars.",
      author: "Imran Shah",
      role: "Capital Auto Workshop",
    },
    auditLabel: "auto business",
  },
  hospitality: {
    hero: "More direct bookings. Higher occupancy. Standout reviews.",
    painPoints: [
      {
        title: "You're paying OTA commissions on bookings you should own",
        body: "A professional website with direct booking saves 15–25% commission on every reservation.",
      },
      {
        title: "Guests can't find you when searching for accommodation",
        body: "Local SEO and Google Business optimisation puts you above the competition when guests search.",
      },
      {
        title: "Reviews are inconsistent and hard to manage",
        body: "Automated review collection and response strategy builds your reputation consistently.",
      },
    ],
    solution:
      "We build hotel and guesthouse websites with direct booking, run local SEO campaigns, optimise your Google Business Profile and set up automated guest communication — pre-arrival, during stay and post-checkout.",
    caseStudy: {
      name: "Murree Heights Hotel",
      result: "Direct bookings up 180%",
      body: "A 30-room hotel in Murree was paying heavy OTA commissions. We built a direct booking website and optimised their Google presence. Direct bookings increased 180% in the first season.",
    },
    testimonial: {
      quote:
        "We saved more in OTA commissions in 3 months than the entire website cost us. It's now our best investment.",
      author: "Hamid Iqbal",
      role: "Murree Heights Hotel",
    },
    auditLabel: "hospitality",
  },
  other: {
    hero: "Whatever your business — we build growth.",
    painPoints: [
      {
        title:
          "Your digital presence doesn't match the quality of your business",
        body: "A premium website and digital presence positions you as the obvious choice in your market.",
      },
      {
        title: "You're not getting enough qualified leads online",
        body: "The right combination of SEO, ads and automation can transform your lead flow.",
      },
      {
        title: "You don't have time to manage digital marketing yourself",
        body: "WayFind is your complete digital partner — you focus on your business, we handle the rest.",
      },
    ],
    solution:
      "WayFind builds complete digital growth systems for businesses across any industry. Website, AI, CRM, SEO, ads — all working together as one engine for your growth.",
    caseStudy: {
      name: "WayFind Portfolio",
      result: "50+ projects delivered across 8+ industries",
      body: "From healthcare to hospitality, education to e-commerce — WayFind has built proven digital systems for businesses across Pakistan.",
    },
    testimonial: {
      quote:
        "WayFind understood our business from day one. They built exactly what we needed and the results were beyond what we expected.",
      author: "A WayFind Client",
      role: "Islamabad, Pakistan",
    },
    auditLabel: "business",
  },
};

// ── Static Params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return { title: "Not Found" };
  return {
    title: `${industry.name} Digital Marketing — WayFind`,
    description: industry.description,
  };
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  const detail = INDUSTRY_DETAIL[slug];
  if (!industry || !detail) notFound();

  const videoSrc = INDUSTRY_VIDEOS[slug] ?? null;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {videoSrc && (
          <BackgroundVideo
            src={videoSrc}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {/* Simple Dark Overlay for Text Readability */}
        <div
          className="absolute inset-0 bg-black/30 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 md:px-10 md:pt-52">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <span className="text-4xl filter drop-shadow-xl" aria-hidden>
              {industry.emoji}
            </span>
            <SectionEyebrow className="text-white/80">
              {industry.name}
            </SectionEyebrow>
          </MotionDiv>
          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-display text-display-md max-w-3xl text-balance leading-none tracking-tight text-white drop-shadow-2xl"
          >
            {detail.hero}
          </MotionH1>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70"
          >
            {industry.description}
          </MotionP>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {industry.services.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-3 py-1.5 font-mono text-[11px] text-white/80"
              >
                {s}
              </span>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Pain Points */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionEyebrow>The Problem</SectionEyebrow>
          <h2 className="mt-6 font-display text-display-sm max-w-xl leading-none tracking-tight">
            Why most {industry.name.toLowerCase()} businesses struggle online.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {detail.painPoints.map((p, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-muted"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  0{i + 1}
                </span>
                <h3 className="text-base font-medium leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <SectionEyebrow>The WayFind Solution</SectionEyebrow>
        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-display-sm leading-none tracking-tight">
              Everything your {industry.name.toLowerCase()} business needs.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              {detail.solution}
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="md" arrow>
                Start a Project
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {industry.services.map((s) => (
              <div
                key={s}
                className="rounded-xl border border-border bg-muted/40 p-5"
              >
                <p className="text-sm font-medium">{s}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                  Included
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionEyebrow>Selected Work</SectionEyebrow>
          <h2 className="mt-6 font-display text-display-sm max-w-xl leading-none tracking-tight">
            Our results in {industry.name.toLowerCase()}.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {PROJECTS_DATA.filter((p) => p.industrySlug === slug).length > 0 ? (
              PROJECTS_DATA.filter((p) => p.industrySlug === slug).map(
                (project) => (
                  <Link
                    key={project.slug}
                    href={`/industries/${slug}/${project.slug}`}
                    data-cursor-hover
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border transition-shadow duration-300 hover:shadow-xl hover:shadow-black/8"
                  >
                    {/* Thumbnail */}
                    <div
                      className="relative flex aspect-video items-center justify-center overflow-hidden"
                      style={{ backgroundColor: project.color }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background: `radial-gradient(circle at 70% 30%, ${project.accent}30 0%, transparent 60%)`,
                        }}
                      />
                      <span
                        className="relative font-display text-7xl leading-none opacity-20"
                        style={{ color: project.accent }}
                        aria-hidden
                      >
                        {project.name.charAt(0)}
                      </span>
                      <span className="absolute left-4 top-4 rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/60">
                        {project.industry}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col gap-3 bg-background p-6 transition-colors group-hover:bg-muted/50">
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="text-base font-medium">
                          {project.name}
                        </h2>
                        <ArrowUpRight
                          size={16}
                          className="mt-0.5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                        />
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <p
                        className="mt-auto font-mono text-[12px] font-medium uppercase tracking-[0.1em]"
                        style={{ color: project.accent }}
                      >
                        ↑ {project.keyResult}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.services.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ),
              )
            ) : (
              <div className="col-span-full rounded-2xl border border-border bg-background p-8 text-center text-muted-foreground">
                <p>
                  New case studies for {industry.name.toLowerCase()} are being
                  added soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Relevant Services */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <SectionEyebrow>Relevant Services</SectionEyebrow>
        <h2 className="mt-6 font-display text-display-sm max-w-xl leading-none tracking-tight">
          Everything we deploy for {industry.name.toLowerCase()} businesses.
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {industry.services.map((s) => {
            const serviceSlug = s
              .toLowerCase()
              .replace(/\s+&\s+/g, "-")
              .replace(/\s+/g, "-");
            return (
              <Link
                key={s}
                href={`/services/${serviceSlug}`}
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-foreground hover:text-foreground"
              >
                {s}
                <ArrowUpRight size={12} className="text-muted-foreground" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Audit CTA */}
      <section className="border-t border-border bg-foreground text-background">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-10 md:py-28">
          <h2 className="font-display text-display-sm leading-none tracking-tight">
            Get a free {detail.auditLabel} digital audit.
          </h2>
          <p className="mt-4 text-sm text-background/70">
            We&apos;ll review your current online presence and show you exactly
            how to get more customers. No strings attached.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="ghost" size="lg" arrow>
              Claim Free Audit
            </Button>
          </div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          Other Industries
        </p>
        <div className="flex flex-wrap gap-3">
          {INDUSTRIES.filter((i) => i.slug !== slug).map((i) => (
            <Link
              key={i.slug}
              href={`/industries/${i.slug}`}
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              <span aria-hidden>{i.emoji}</span>
              {i.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
