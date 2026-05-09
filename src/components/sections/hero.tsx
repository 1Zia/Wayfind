"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BackgroundVideo } from "@/components/ui/background-video";

const HEADLINE_LINES = [
  ["Engineering", "Digital"],
  ["Excellence", "For"],
  ["Modern", "Brands."],
];

const SUBTITLE =
  "WayFind builds complete digital growth systems — websites, AI, CRM, SEO and ads — all working as one engine for your business.";

const TRUST_ITEMS = [
  "Based in Islamabad",
  "50+ Projects Delivered",
  "AI-Powered",
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-end overflow-hidden bg-background pt-24 md:items-center md:pt-0">
      <div className="absolute inset-0 z-0">
        <BackgroundVideo
          src="/videos/hero-bg.mp4?v=2"
          className="h-full w-full object-cover"
        />
        {/* Simple Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-0">
        <h1 className="font-display text-display-xl text-balance text-foreground">
          {HEADLINE_LINES.map((line, lineIndex) => {
            const totalIndexBefore = HEADLINE_LINES.slice(0, lineIndex).reduce(
              (acc, l) => acc + l.length,
              0,
            );
            return (
              <span key={lineIndex} className="block overflow-hidden">
                <span className="inline-block">
                  {line.map((word, wordIndex) => {
                    const globalIndex = totalIndexBefore + wordIndex;
                    return (
                      <motion.span
                        key={`${lineIndex}-${wordIndex}`}
                        initial={{ y: "110%" }}
                        animate={{ y: "0%" }}
                        transition={{
                          delay: 0.4 + globalIndex * 0.08,
                          duration: 0.9,
                          ease: [0.65, 0, 0.35, 1],
                        }}
                        className="mr-[0.25em] inline-block"
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                </span>
              </span>
            );
          })}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {SUBTITLE}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button href="/contact" variant="primary" size="lg" arrow>
            Start a project
          </Button>
          <Button href="/industries" variant="outline" size="lg">
            See our work
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-muted-foreground"
        >
          {TRUST_ITEMS.map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{item}</span>
              {i < TRUST_ITEMS.length - 1 ? (
                <span
                  className="ml-6 hidden h-1 w-1 rounded-full bg-muted-foreground/40 md:inline-block"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
