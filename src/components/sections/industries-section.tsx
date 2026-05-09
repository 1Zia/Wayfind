"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

const INDUSTRIES = [
  {
    slug: "healthcare",
    emoji: "🏥",
    name: "Healthcare",
    desc: "Clinics, hospitals and medical professionals.",
  },
  {
    slug: "education",
    emoji: "🎓",
    name: "Education",
    desc: "Schools, academies and coaching centres.",
  },
  {
    slug: "fitness",
    emoji: "💪",
    name: "Fitness",
    desc: "Gyms, studios and personal trainers.",
  },
  {
    slug: "food",
    emoji: "🍽️",
    name: "Food & Restaurant",
    desc: "Restaurants, cafés and catering services.",
  },
  {
    slug: "retail",
    emoji: "🛍️",
    name: "Retail",
    desc: "Physical and online retail businesses.",
  },
  {
    slug: "real-estate",
    emoji: "🏢",
    name: "Real Estate",
    desc: "Property agencies and developers.",
  },
  {
    slug: "legal",
    emoji: "⚖️",
    name: "Legal",
    desc: "Law firms and legal consultancies.",
  },
  {
    slug: "automotive",
    emoji: "🚗",
    name: "Automotive",
    desc: "Dealerships, garages and auto services.",
  },
  {
    slug: "hospitality",
    emoji: "🏨",
    name: "Hospitality",
    desc: "Hotels, guesthouses and travel services.",
  },
  {
    slug: "any-business",
    emoji: "🚀",
    name: "Any Business",
    desc: "If you have customers, we can help you grow.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] as const } },
};

export function IndustriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <SectionEyebrow>Industries</SectionEyebrow>
      <h2 className="mt-6 font-display text-display-md max-w-2xl text-balance leading-none tracking-tight">
        We understand your business — not just your code.
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-16 grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-5"
      >
        {INDUSTRIES.map((ind) => (
          <motion.div key={ind.slug} variants={itemVariants}>
            <Link
              href={`/industries/${ind.slug}`}
              data-cursor-hover
              className="group flex flex-col gap-3 bg-background p-6 transition-colors duration-300 hover:bg-muted"
            >
              <span
                className="text-2xl transition-transform duration-300 group-hover:scale-110"
                aria-hidden
              >
                {ind.emoji}
              </span>
              <div>
                <h3 className="flex items-center gap-1 text-[13px] font-medium text-foreground">
                  {ind.name}
                  <ArrowUpRight
                    size={11}
                    className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </h3>
                <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                  {ind.desc}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
