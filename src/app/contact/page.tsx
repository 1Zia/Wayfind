"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, Phone, Clock } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SITE_CONFIG, formatPhone } from "@/lib/utils";


const SERVICES_OPTIONS = [
  "Website Design & Development",
  "CRM & Sales Automation",
  "AI Integration & Chatbot",
  "SEO",
  "Google & Meta Ads",
  "Google Business Profile",
];

const BUDGET_OPTIONS = [
  "Under PKR 50,000",
  "PKR 50,000 – 100,000",
  "PKR 100,000 – 250,000",
  "PKR 250,000 – 500,000",
  "PKR 500,000+",
];

const TIMELINE_OPTIONS = [
  "ASAP (within 2 weeks)",
  "1 month",
  "2–3 months",
  "3–6 months",
  "No rush, just exploring",
];

const INDUSTRIES = [
  "Healthcare", "Education", "Fitness", "Food & Restaurant",
  "Retail", "Real Estate", "Legal", "Automotive", "Hospitality", "Other",
];

const CONTACT_METHODS = ["WhatsApp", "Call", "Email", "Video Call"];

type FormState = {
  services: string[];
  businessName: string;
  industry: string;
  size: string;
  currentWebsite: string;
  name: string;
  email: string;
  phone: string;
  contactMethod: string;
  bestTime: string;
  budget: string;
  timeline: string;
  message: string;
};

const initial: FormState = {
  services: [],
  businessName: "",
  industry: "",
  size: "",
  currentWebsite: "",
  name: "",
  email: "",
  phone: "",
  contactMethod: "WhatsApp",
  bestTime: "",
  budget: "",
  timeline: "",
  message: "",
};

const STEPS = [
  "What do you need?",
  "Your business",
  "Contact details",
  "Project details",
  "Confirmation",
];

function Toggle({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-cursor-hover
      className={`rounded-full border px-4 py-2 text-sm transition-all ${
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}

function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-medium">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-foreground focus:outline-none"
      />
    </div>
  );
}

export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState(1);

  function set(key: keyof FormState, value: string | string[]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function toggleService(s: string) {
    set(
      "services",
      form.services.includes(s)
        ? form.services.filter((x) => x !== s)
        : [...form.services, s],
    );
  }

  function next() {
    setDirection(1);
    setStep((s) => s + 1);
  }

  function back() {
    setDirection(-1);
    setStep((s) => s - 1);
  }

  function submit() {
    setSubmitted(true);
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
  };

  const transition = { duration: 0.35, ease: [0.65, 0, 0.35, 1] as const };

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:px-10 md:pt-48">
        <SectionEyebrow>Contact</SectionEyebrow>
        <h1 className="mt-6 font-display text-display-md max-w-3xl text-balance leading-none tracking-tight">
          Let&apos;s build something great together.
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          We respond within 2 business hours.
        </p>
      </section>

      {/* Main grid */}
      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left — Info */}
          <div>
            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value: SITE_CONFIG.address,
                  href: `https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address)}`,
                  external: true,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: SITE_CONFIG.email,
                  href: `mailto:${SITE_CONFIG.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: SITE_CONFIG.phone,
                  href: `tel:${formatPhone(SITE_CONFIG.phone)}`,
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: SITE_CONFIG.hours,
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href, external }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border">
                    <Icon size={16} strokeWidth={1.5} className="text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        data-cursor-hover
                        className="mt-0.5 text-sm text-foreground transition-colors hover:text-accent"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
                "Hello WayFind, I'd like to discuss a project",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-border bg-muted px-6 py-4 text-sm transition-colors hover:border-foreground"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-green-500"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <p className="font-medium">Chat on WhatsApp</p>
                <p className="text-[11px] text-muted-foreground">Typically replies in minutes</p>
              </div>
              <ArrowUpRight size={15} className="ml-auto text-muted-foreground" />
            </a>
          </div>

          {/* Right — Multi-step form */}
          <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
            {/* Progress */}
            <div className="mb-8">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Step {submitted ? STEPS.length : step + 1} of {STEPS.length}
                </p>
                <p className="text-[13px] font-medium">{submitted ? "Done!" : STEPS[step]}</p>
              </div>
              <div className="h-0.5 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-foreground transition-all duration-500"
                  style={{
                    width: `${((submitted ? STEPS.length : step + 1) / STEPS.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-6 py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border text-3xl">
                    🎉
                  </div>
                  <div>
                    <h2 className="font-display text-display-xs leading-tight">
                      We&apos;ll be in touch!
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Thanks, {form.name || "there"}! We&apos;ve received your details and will
                      respond within 2 business hours. In the meantime, feel free to WhatsApp us.
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello WayFind, I just submitted a project request. My name is ${form.name}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background"
                  >
                    Continue on WhatsApp
                    <ArrowUpRight size={14} />
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="flex flex-col gap-5"
                >
                  {/* Step 1 — Services */}
                  {step === 0 && (
                    <>
                      <p className="text-sm text-muted-foreground">
                        Select everything that applies. We can do it all.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {SERVICES_OPTIONS.map((s) => (
                          <Toggle
                            key={s}
                            label={s}
                            active={form.services.includes(s)}
                            onClick={() => toggleService(s)}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Step 2 — Business */}
                  {step === 1 && (
                    <>
                      <InputField
                        label="Business name"
                        value={form.businessName}
                        onChange={(v) => set("businessName", v)}
                        placeholder="e.g. MedCare Clinic"
                        required
                      />
                      <div>
                        <label className="mb-1.5 block text-[13px] font-medium">
                          Industry
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {INDUSTRIES.map((ind) => (
                            <Toggle
                              key={ind}
                              label={ind}
                              active={form.industry === ind}
                              onClick={() => set("industry", ind)}
                            />
                          ))}
                        </div>
                      </div>
                      <InputField
                        label="Current website (if any)"
                        value={form.currentWebsite}
                        onChange={(v) => set("currentWebsite", v)}
                        placeholder="https://yoursite.com"
                        type="url"
                      />
                    </>
                  )}

                  {/* Step 3 — Contact */}
                  {step === 2 && (
                    <>
                      <InputField
                        label="Your name"
                        value={form.name}
                        onChange={(v) => set("name", v)}
                        placeholder="Muhammad Ali"
                        required
                      />
                      <InputField
                        label="Email address"
                        type="email"
                        value={form.email}
                        onChange={(v) => set("email", v)}
                        placeholder="you@example.com"
                        required
                      />
                      <InputField
                        label="WhatsApp / Phone"
                        type="tel"
                        value={form.phone}
                        onChange={(v) => set("phone", v)}
                        placeholder="+92 300 000 0000"
                        required
                      />
                      <div>
                        <label className="mb-1.5 block text-[13px] font-medium">
                          Preferred contact method
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {CONTACT_METHODS.map((m) => (
                            <Toggle
                              key={m}
                              label={m}
                              active={form.contactMethod === m}
                              onClick={() => set("contactMethod", m)}
                            />
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Step 4 — Project Details */}
                  {step === 3 && (
                    <>
                      <div>
                        <label className="mb-1.5 block text-[13px] font-medium">Budget range</label>
                        <div className="flex flex-wrap gap-2">
                          {BUDGET_OPTIONS.map((b) => (
                            <Toggle
                              key={b}
                              label={b}
                              active={form.budget === b}
                              onClick={() => set("budget", b)}
                            />
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-[13px] font-medium">Timeline</label>
                        <div className="flex flex-wrap gap-2">
                          {TIMELINE_OPTIONS.map((t) => (
                            <Toggle
                              key={t}
                              label={t}
                              active={form.timeline === t}
                              onClick={() => set("timeline", t)}
                            />
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-[13px] font-medium">
                          Tell us about your project
                        </label>
                        <textarea
                          value={form.message}
                          onChange={(e) => set("message", e.target.value)}
                          placeholder="What are you trying to achieve? Any specific requirements?"
                          rows={4}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-foreground focus:outline-none"
                        />
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Nav buttons */}
            {!submitted && (
              <div className="mt-8 flex items-center gap-3">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={back}
                    data-cursor-hover
                    className="h-11 rounded-full border border-border px-5 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                  >
                    Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={step < STEPS.length - 2 ? next : submit}
                  data-cursor-hover
                  className="ml-auto inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all hover:scale-[1.02]"
                >
                  {step < STEPS.length - 2 ? (
                    <>
                      Continue
                      <ArrowUpRight size={14} />
                    </>
                  ) : (
                    "Submit →"
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
