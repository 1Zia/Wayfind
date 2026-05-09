"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Upload } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Button } from "@/components/ui/button";

const PERKS = [
  { emoji: "💰", title: "Competitive Pay", body: "Market-rate salaries with performance bonuses." },
  { emoji: "📈", title: "Growth Path", body: "Clear career progression and regular salary reviews." },
  { emoji: "🏠", title: "Hybrid Work", body: "Mix of in-office and remote — we trust your judgment." },
  { emoji: "🎓", title: "Learning Budget", body: "PKR 30,000/year for courses, books and conferences." },
  { emoji: "🕐", title: "Flexible Hours", body: "Core hours 11am–4pm. Rest is yours to manage." },
  { emoji: "🏥", title: "Health Cover", body: "Medical insurance for you and your immediate family." },
  { emoji: "🚀", title: "Fast Decisions", body: "No bureaucracy. Good ideas ship fast here." },
  { emoji: "🎉", title: "Team Events", body: "Monthly team dinners, quarterly retreats." },
];

const VALUES = [
  {
    title: "Build things that matter",
    body: "Every project we take on has a real impact on a real business. You'll see results fast.",
  },
  {
    title: "Learn constantly",
    body: "AI, automation and web technology move fast. We stay ahead and bring everyone along.",
  },
  {
    title: "Own your work",
    body: "No micromanagement. You own your projects end-to-end and take pride in the outcome.",
  },
  {
    title: "Say it straight",
    body: "Direct, honest communication — with clients and with each other. No politics, no drama.",
  },
];

const ROLES = [
  {
    id: "fullstack-dev",
    title: "Full-Stack Developer",
    department: "Engineering",
    type: "Full-time",
    responsibilities: [
      "Build and maintain client websites using Next.js and React",
      "Integrate third-party APIs (CRM, AI, payment gateways)",
      "Write clean, tested, well-documented code",
      "Collaborate with designers on pixel-perfect implementations",
    ],
    requirements: [
      "2+ years experience with React / Next.js",
      "Solid understanding of TypeScript",
      "Experience with REST APIs and databases",
      "Strong attention to detail",
    ],
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    responsibilities: [
      "Design websites, landing pages and dashboards for clients",
      "Create brand identities and design systems",
      "Produce high-fidelity Figma prototypes",
      "Work closely with developers during build phase",
    ],
    requirements: [
      "2+ years commercial UI/UX design experience",
      "Expert-level Figma skills",
      "Strong portfolio of web and product design",
      "Understanding of conversion design principles",
    ],
  },
  {
    id: "ai-engineer",
    title: "AI & Automation Engineer",
    department: "AI",
    type: "Full-time",
    responsibilities: [
      "Build and deploy AI chatbots for client businesses",
      "Design automation workflows using tools like GoHighLevel and Make",
      "Integrate AI APIs (OpenAI, etc.) into web applications",
      "Train models on client-specific knowledge bases",
    ],
    requirements: [
      "Experience with LLM APIs (OpenAI, Claude etc.)",
      "Proficiency in Python or TypeScript",
      "Knowledge of no-code automation tools",
      "Problem-solving mindset",
    ],
  },
  {
    id: "seo-specialist",
    title: "SEO Specialist",
    department: "Marketing",
    type: "Full-time",
    responsibilities: [
      "Manage SEO campaigns for multiple client accounts",
      "Conduct keyword research and competitive analysis",
      "Write SEO-optimised blog content",
      "Monitor rankings and produce monthly client reports",
    ],
    requirements: [
      "2+ years SEO experience with proven results",
      "Knowledge of technical SEO and Google Search Console",
      "Experience with local SEO and Google Business",
      "Strong analytical skills",
    ],
  },
  {
    id: "paid-media",
    title: "Paid Media Specialist",
    department: "Marketing",
    type: "Full-time",
    responsibilities: [
      "Manage Google Ads and Meta Ads for client accounts",
      "Write compelling ad copy and brief creative teams",
      "Conduct A/B testing and optimise for conversions",
      "Deliver monthly performance reports with insights",
    ],
    requirements: [
      "2+ years managing paid media accounts",
      "Experience with Google Ads and Meta Business Manager",
      "Strong analytical skills and ROAS focus",
      "Google Ads certification preferred",
    ],
  },
  {
    id: "project-manager",
    title: "Project Manager",
    department: "Operations",
    type: "Full-time",
    responsibilities: [
      "Manage client projects from kick-off to launch",
      "Coordinate between design, development and marketing teams",
      "Maintain project timelines and communicate with clients",
      "Identify risks and resolve blockers proactively",
    ],
    requirements: [
      "2+ years project management in a digital agency",
      "Excellent communication skills in English and Urdu",
      "Experience with project management tools",
      "Calm under pressure and deadline-focused",
    ],
  },
  {
    id: "content-writer",
    title: "Content Writer",
    department: "Marketing",
    type: "Full-time",
    responsibilities: [
      "Write website copy, blog articles and social media content",
      "Research and produce SEO-optimised long-form content",
      "Write email sequences and ad copy",
      "Maintain brand voice across all client content",
    ],
    requirements: [
      "Exceptional written English",
      "Understanding of SEO and content strategy",
      "Ability to write for diverse industries and audiences",
      "Research skills and attention to accuracy",
    ],
  },
  {
    id: "business-dev",
    title: "Business Development Executive",
    department: "Sales",
    type: "Full-time",
    responsibilities: [
      "Identify and reach out to potential clients across Pakistan",
      "Conduct discovery calls and present WayFind solutions",
      "Prepare custom proposals and follow up diligently",
      "Work closely with delivery teams on scoping",
    ],
    requirements: [
      "2+ years in B2B sales or business development",
      "Excellent communication in English and Urdu",
      "Understanding of digital marketing services",
      "Self-motivated with strong closing skills",
    ],
  },
];

type Role = (typeof ROLES)[0];

function RoleCard({
  role,
  onApply,
}: {
  role: Role;
  onApply: (role: Role) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-background overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        data-cursor-hover
        className="flex w-full items-start justify-between gap-6 p-6 text-left transition-colors hover:bg-muted"
      >
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {role.department}
            </span>
            <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {role.type}
            </span>
          </div>
          <h3 className="mt-2 text-base font-medium">{role.title}</h3>
        </div>
        <span
          className={`mt-1 shrink-0 text-xl text-muted-foreground transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-8 border-t border-border p-6 md:grid-cols-2">
              <div>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Responsibilities
                </p>
                <ul className="space-y-2">
                  {role.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Requirements
                </p>
                <ul className="space-y-2">
                  {role.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-border px-6 py-4">
              <button
                type="button"
                onClick={() => onApply(role)}
                data-cursor-hover
                className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all hover:scale-[1.02]"
              >
                Apply Now
                <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ApplicationModal({
  role,
  onClose,
}: {
  role: Role;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function set(k: keyof typeof form, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-background"
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-border p-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Apply for
            </p>
            <h3 className="mt-0.5 text-base font-medium">{role.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            data-cursor-hover
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[70vh] overflow-y-auto p-6">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <span className="text-4xl">🎉</span>
              <div>
                <h4 className="font-display text-display-xs">Application received!</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks {form.name || "there"}! We&apos;ll review your application and be in touch
                  within 3 business days.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {[
                { label: "Full Name", key: "name" as const, placeholder: "Muhammad Ali", required: true },
                { label: "Email", key: "email" as const, placeholder: "you@example.com", type: "email", required: true },
                { label: "Phone / WhatsApp", key: "phone" as const, placeholder: "+92 300 000 0000", type: "tel", required: true },
                { label: "Portfolio / LinkedIn / GitHub", key: "portfolio" as const, placeholder: "https://", type: "url" },
              ].map(({ label, key, placeholder, type = "text", required }) => (
                <div key={key}>
                  <label className="mb-1.5 block text-[13px] font-medium">
                    {label}
                    {required && <span className="ml-1 text-accent">*</span>}
                  </label>
                  <input
                    type={type}
                    value={form[key]}
                    onChange={(e) => set(key, e.target.value)}
                    placeholder={placeholder}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 transition-colors focus:border-foreground focus:outline-none"
                  />
                </div>
              ))}

              <div>
                <label className="mb-1.5 block text-[13px] font-medium">
                  Why WayFind? (optional)
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  placeholder="Tell us about yourself and why you want to join WayFind..."
                  rows={3}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 transition-colors focus:border-foreground focus:outline-none"
                />
              </div>

              <div className="rounded-xl border border-dashed border-border p-4 text-center">
                <Upload size={16} className="mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  CV / Resume — email to{" "}
                  <a
                    href="mailto:careers@wayfind.pk"
                    className="text-foreground underline underline-offset-2"
                  >
                    careers@wayfind.pk
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>

        {!submitted && (
          <div className="border-t border-border p-6">
            <button
              type="button"
              onClick={() => setSubmitted(true)}
              data-cursor-hover
              className="w-full rounded-full bg-foreground py-3 text-sm font-medium text-background transition-all hover:scale-[1.01]"
            >
              Submit Application →
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function CareersPage() {
  const [applyRole, setApplyRole] = useState<Role | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-36 md:px-10 md:pt-52">
        <SectionEyebrow>Careers</SectionEyebrow>
        <h1 className="mt-6 font-display text-display-md max-w-3xl text-balance leading-none tracking-tight">
          Build Pakistan&apos;s digital future with us.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          We&apos;re a small team with big ambitions. If you want to do the best work of your career
          and see your work change real businesses, WayFind is for you.
        </p>
      </section>

      {/* Culture / Values */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionEyebrow>Our Culture</SectionEyebrow>
          <h2 className="mt-6 font-display text-display-sm max-w-xl leading-none tracking-tight">
            How we work.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="flex flex-col gap-3 bg-background p-8 transition-colors hover:bg-muted"
              >
                <h3 className="text-base font-medium">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <SectionEyebrow>Perks & Benefits</SectionEyebrow>
        <h2 className="mt-6 font-display text-display-sm max-w-xl leading-none tracking-tight">
          What you get.
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {PERKS.map((p) => (
            <div key={p.title} className="flex flex-col gap-3">
              <span className="text-2xl" aria-hidden>
                {p.emoji}
              </span>
              <h3 className="text-sm font-medium">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Roles */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionEyebrow>Open Positions</SectionEyebrow>
          <h2 className="mt-6 font-display text-display-sm max-w-xl leading-none tracking-tight">
            {ROLES.length} roles currently open.
          </h2>
          <div className="mt-12 space-y-3">
            {ROLES.map((role) => (
              <RoleCard key={role.id} role={role} onApply={setApplyRole} />
            ))}
          </div>
        </div>
      </section>

      {/* Speculative CTA */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10">
        <h2 className="font-display text-display-sm leading-none tracking-tight">
          Don&apos;t see your role?
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">
          We&apos;re always interested in exceptional talent. Send us your portfolio.
        </p>
        <div className="mt-8">
          <Button href="mailto:careers@wayfind.pk" variant="outline" size="lg" external>
            Send Speculative Application
          </Button>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {applyRole && (
          <ApplicationModal role={applyRole} onClose={() => setApplyRole(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
