"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { PROJECTS_DATA } from "@/lib/projects-data";

// We use the centralized data now
const PROJECTS = PROJECTS_DATA.slice(0, 5);

export function FeaturedWork() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const velocityX = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const inertiaRaf = useRef<number>(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current) return;
    cancelAnimationFrame(inertiaRaf.current);
    setIsDragging(true);
    dragStartX.current = e.clientX;
    scrollStartX.current = trackRef.current.scrollLeft;
    velocityX.current = 0;
    lastX.current = e.clientX;
    lastTime.current = performance.now();
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !trackRef.current) return;
      const now = performance.now();
      const dt = now - lastTime.current;
      velocityX.current = dt > 0 ? (lastX.current - e.clientX) / dt : 0;
      lastX.current = e.clientX;
      lastTime.current = now;
      const delta = e.clientX - dragStartX.current;
      trackRef.current.scrollLeft = scrollStartX.current - delta;
    },
    [isDragging],
  );

  const onMouseUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    // Inertia
    let velocity = velocityX.current * 12;
    function step() {
      if (!trackRef.current) return;
      trackRef.current.scrollLeft += velocity;
      velocity *= 0.94;
      if (Math.abs(velocity) > 0.5) {
        inertiaRaf.current = requestAnimationFrame(step);
      }
    }
    inertiaRaf.current = requestAnimationFrame(step);
  }, [isDragging]);

  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Our Work</SectionEyebrow>
            <h2 className="mt-6 font-display text-display-md max-w-xl text-balance leading-none tracking-tight">
              Built for real Pakistani businesses.
            </h2>
          </div>
          <Link
            href="/industries"
            data-cursor-hover
            className="hidden items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground md:flex"
          >
            View all work
            <ArrowUpRight size={14} strokeWidth={2} />
          </Link>
        </div>

        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground/60">
          ← Drag to explore →
        </p>
      </div>

      {/* Drag Track */}
      <div
        ref={trackRef}
        role="list"
        aria-label="Featured projects"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        className={`mt-10 flex gap-5 overflow-x-auto px-6 pb-2 no-scrollbar md:px-10 ${
          isDragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
      >
        {PROJECTS.map((project) => (
          <Link
            key={project.slug}
            href={`/industries/${project.industrySlug}/${project.slug}`}
            role="listitem"
            data-cursor-hover
            draggable={false}
            onClick={(e) => {
              // Prevent navigation if user was dragging
              if (Math.abs(dragStartX.current - lastX.current) > 5) {
                e.preventDefault();
              }
            }}
            className="group relative flex w-[340px] shrink-0 flex-col justify-end overflow-hidden rounded-2xl p-8 md:w-[400px]"
            style={{
              backgroundColor: project.color,
              aspectRatio: "4/5",
            }}
          >
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle at 80% 20%, ${project.accent}22 0%, transparent 60%)`,
              }}
            />

            {/* Industry tag */}
            <span className="relative mb-auto inline-flex h-7 items-center rounded-full border border-white/10 px-3 font-mono text-[10px] uppercase tracking-widest text-white/60">
              {project.industry}
            </span>

            {/* Content */}
            <div className="relative">
              <h3 className="font-display text-2xl leading-tight text-white">
                {project.name}
              </h3>
              <p
                className="mt-2 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors duration-300"
                style={{ color: project.accent }}
              >
                ↑ {project.keyResult}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-white/40 transition-colors group-hover:text-white/80">
                <span>View case study</span>
                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-8 px-6 md:hidden">
        <Link
          href="/industries"
          data-cursor-hover
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          View all work
          <ArrowUpRight size={14} strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}
