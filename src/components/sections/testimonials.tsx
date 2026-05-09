"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

const TESTIMONIALS = [
  {
    quote:
      "WayFind didn't just build us a website — they rebuilt our entire patient acquisition system. Appointments tripled in 60 days. The AI bot handles 80% of our inquiry calls now.",
    name: "Dr. Sara Ahmed",
    role: "Director, MedCare Clinic",
    stat: "3× appointments",
    initials: "SA",
    color: "#1D4ED8",
  },
  {
    quote:
      "I was sceptical about AI chatbots but WayFind's system handles 90% of our membership inquiries. We saved the cost of two staff members in the first month alone.",
    name: "Kamran Raza",
    role: "Owner, Elite Fitness Hub",
    stat: "90% queries automated",
    initials: "KR",
    color: "#16A34A",
  },
  {
    quote:
      "Ranking #1 on Google in Islamabad for our category within two months. The ROI in our first quarter was 12×. I only wish I had found WayFind sooner.",
    name: "Ali Khan",
    role: "Founder, Dastarkhan Restaurant",
    stat: "12× ROI, Q1",
    initials: "AK",
    color: "#D97706",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-amber-400"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <SectionEyebrow>Client Stories</SectionEyebrow>
        <h2 className="mt-6 font-display text-display-md max-w-2xl text-balance leading-none tracking-tight">
          Businesses that trusted WayFind to lead the way.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.7,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="group relative flex flex-col gap-6 rounded-2xl border border-border bg-background p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5"
            >
              {/* Decorative quote mark */}
              <span
                className="absolute right-7 top-5 select-none font-display text-7xl leading-none text-border transition-colors group-hover:text-muted"
                aria-hidden
              >
                &ldquo;
              </span>

              <Stars />

              <blockquote className="relative flex-1 text-sm leading-relaxed text-foreground/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Stat pill */}
              <div
                className="inline-flex w-fit items-center rounded-full px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-widest"
                style={{
                  backgroundColor: `${t.color}15`,
                  color: t.color,
                }}
              >
                {t.stat}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white"
                  style={{ backgroundColor: t.color }}
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-foreground">{t.name}</p>
                  <p className="text-[11px] text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
