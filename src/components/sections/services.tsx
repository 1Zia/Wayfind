"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

const SERVICES = [
  {
    id: "website-design",
    icon: "◻",
    title: "Website Design & Development",
    description:
      "Stunning, fast, conversion-driven websites for every Pakistani business.",
    href: "/services/website-design",
  },
  {
    id: "crm-systems",
    icon: "⟳",
    title: "CRM & Sales Automation",
    description:
      "Never lose a lead. Your pipeline always working automatically.",
    href: "/services/crm-systems",
  },
  {
    id: "ai-integration",
    icon: "◈",
    title: "AI Integration & Chatbots",
    description:
      "Intelligent bots handling customer queries 24/7 while you sleep.",
    href: "/services/ai-integration",
  },
  {
    id: "seo",
    icon: "↑",
    title: "SEO — Get Found on Google",
    description:
      "Rank above competitors and get free traffic every single day.",
    href: "/services/seo",
  },
  {
    id: "ads",
    icon: "◉",
    title: "Google & Meta Ads",
    description:
      "Every rupee in your budget working harder than ever before.",
    href: "/services/ads",
  },
  {
    id: "google-business",
    icon: "◎",
    title: "Google Business Profile",
    description:
      "Own your neighbourhood's search results completely.",
    href: "/services/google-business",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] as const } },
};

export function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <SectionEyebrow>What We Build</SectionEyebrow>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display text-display-md max-w-2xl text-balance leading-none tracking-tight">
          Everything your business needs to dominate online.
        </h2>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground md:text-right">
          End-to-end digital growth. One partner. Zero compromise.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-16 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3"
      >
        {SERVICES.map((service) => (
          <motion.div key={service.id} variants={cardVariants}>
            <Link
              href={service.href}
              data-cursor-hover
              className="group relative flex flex-col gap-6 bg-background p-8 transition-colors duration-300 hover:bg-muted"
            >
              {/* Accent line on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-0 w-[2px] bg-accent transition-all duration-500 group-hover:h-full"
              />

              {/* Icon */}
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-lg text-muted-foreground transition-colors group-hover:border-foreground group-hover:text-foreground"
                aria-hidden
              >
                {service.icon}
              </span>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-base font-medium leading-snug text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                <span>Learn more</span>
                <ArrowUpRight
                  size={13}
                  strokeWidth={2}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
