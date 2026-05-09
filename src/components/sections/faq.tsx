"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

const FAQS = [
  {
    q: "How long does a website take?",
    a: "Most websites are live within 10–14 days. More complex projects involving CRM, AI or e-commerce typically take 3–6 weeks. We always share a clear milestone plan before we begin.",
  },
  {
    q: "How much does it cost?",
    a: "Website packages start from PKR 50,000 for a professional 5-page site. Industry-specific packages (clinic, gym, school, restaurant) start from PKR 70K. We offer bundles that include CRM, SEO and AI — saving you 25–30% versus buying separately.",
  },
  {
    q: "Do you work outside Islamabad?",
    a: "Yes, absolutely. We work with clients across all of Pakistan — Lahore, Karachi, Rawalpindi, Peshawar and beyond. We also work with international clients, primarily Pakistani businesses abroad.",
  },
  {
    q: "What makes WayFind different from other agencies?",
    a: "Most agencies build a website and stop. WayFind builds a full digital growth engine — website, CRM, AI, SEO and ads all integrated and working together. One partner, one strategy, measurable results.",
  },
  {
    q: "Do I need to be technical to work with you?",
    a: "Not at all. We handle everything end-to-end and explain everything in plain language. Most of our clients are business owners with no technical background, which is exactly the way we like it.",
  },
  {
    q: "What happens after the website launches?",
    a: "We offer ongoing support and growth packages — from basic maintenance to full monthly retainers covering SEO, ads and AI management. We're a long-term partner, not a one-time vendor.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-3xl px-6 py-28 md:px-10 md:py-40">
        <SectionEyebrow className="justify-center">FAQ</SectionEyebrow>
        <h2 className="mt-6 text-center font-display text-display-md leading-none tracking-tight">
          Everything you want to know about WayFind.
        </h2>

        <div className="mt-14 divide-y divide-border">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  data-cursor-hover
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-foreground"
                >
                  <span className="text-[15px] font-medium leading-snug text-foreground">
                    {faq.q}
                  </span>
                  <span
                    className="mt-0.5 shrink-0 text-muted-foreground transition-colors"
                    aria-hidden
                  >
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
                    >
                      <Plus size={18} strokeWidth={1.75} />
                    </motion.div>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
