"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const STATS = [
  { value: 50, suffix: "+", label: "Websites Delivered" },
  { value: 38, suffix: "+", label: "Satisfied Clients" },
  { value: 8, suffix: "", label: "Industries Served" },
  { value: 22, suffix: "+", label: "AI Systems Deployed" },
];

function CountUp({
  to,
  suffix,
  duration = 1800,
  started,
}: {
  to: number;
  suffix: string;
  duration?: number;
  started: boolean;
}) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * to));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(to);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, to, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="border-y border-border"
      aria-label="Our impact in numbers"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-2 divide-x divide-y divide-border lg:grid-cols-4 lg:divide-y-0">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-start gap-2 px-8 py-12 md:px-12 md:py-16"
              style={{
                transitionDelay: `${i * 120}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? "none" : "translateY(16px)",
                transition:
                  "opacity 0.7s cubic-bezier(0.65,0,0.35,1), transform 0.7s cubic-bezier(0.65,0,0.35,1)",
              }}
            >
              <p
                className="font-display text-display-md leading-none tracking-tight"
                aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
              >
                <CountUp to={stat.value} suffix={stat.suffix} started={isInView} />
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
