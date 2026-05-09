"use client";

const INDUSTRIES = [
  "Healthcare",
  "Education",
  "Fitness",
  "Restaurant",
  "Real Estate",
  "Retail",
  "Legal",
  "Automotive",
  "Hospitality",
  "E-Commerce",
];

// Duplicate list so the seamless loop works (50% translateX trick)
const ITEMS = [...INDUSTRIES, ...INDUSTRIES];

export function TrustStrip() {
  return (
    <section
      aria-label="Industries we serve"
      className="relative border-y border-border py-6 overflow-hidden"
    >
      <p className="text-center eyebrow mb-5 px-6">
        Trusted by businesses across Pakistan
      </p>

      {/* Fade edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{
          background:
            "linear-gradient(to right, var(--background), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{
          background:
            "linear-gradient(to left, var(--background), transparent)",
        }}
      />

      {/* Marquee track */}
      <div className="flex overflow-hidden">
        <ul
          className="flex shrink-0 items-center gap-0 animate-marquee hover:[animation-play-state:paused]"
          aria-hidden
        >
          {ITEMS.map((name, i) => (
            <li
              key={`${name}-${i}`}
              className="flex items-center"
            >
              <span className="whitespace-nowrap px-8 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground/70 transition-colors hover:text-foreground">
                {name}
              </span>
              <span
                className="h-1 w-1 shrink-0 rounded-full bg-muted-foreground/25"
                aria-hidden
              />
            </li>
          ))}
        </ul>
        {/* Duplicate for seamless loop */}
        <ul
          className="flex shrink-0 items-center gap-0 animate-marquee hover:[animation-play-state:paused]"
          aria-hidden
        >
          {ITEMS.map((name, i) => (
            <li
              key={`dup-${name}-${i}`}
              className="flex items-center"
            >
              <span className="whitespace-nowrap px-8 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground/70">
                {name}
              </span>
              <span className="h-1 w-1 shrink-0 rounded-full bg-muted-foreground/25" aria-hidden />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
