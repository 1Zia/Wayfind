"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

const STEPS = [
  {
    num: "01",
    title: "Discovery Call",
    body: "30 minutes. We understand your business, goals and market. Zero jargon, pure clarity.",
  },
  {
    num: "02",
    title: "Strategy & Design",
    body: "Custom growth strategy and stunning design mockups tailored to your industry.",
  },
  {
    num: "03",
    title: "Build & Integrate",
    body: "Website, CRM, AI and marketing tools integrated into one seamless system.",
  },
  {
    num: "04",
    title: "Launch & Scale",
    body: "Go live with confidence. We manage growth while you serve your clients.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <SectionEyebrow>Our Process</SectionEyebrow>

      <h2 className="mt-6 font-display text-display-md max-w-2xl text-balance leading-none tracking-tight">
        From idea to live — in weeks, not months.
      </h2>

      <div ref={ref} className="mt-20 grid grid-cols-1 gap-0 md:grid-cols-4">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: i * 0.15,
              duration: 0.7,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="group relative flex flex-col gap-4 border-b border-border px-0 py-10 md:border-b-0 md:border-r md:px-8 md:py-0 last:border-0"
          >
            {/* Connector line (desktop only) */}
            {i < STEPS.length - 1 && (
              <span
                aria-hidden
                className="absolute right-0 top-6 hidden h-px w-full bg-border md:block"
                style={{ width: "calc(100% + 2rem)", right: "-1rem" }}
              />
            )}

            {/* Number badge */}
            <div className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-foreground group-hover:text-foreground">
              {step.num}
            </div>

            <h3 className="text-base font-medium text-foreground">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
