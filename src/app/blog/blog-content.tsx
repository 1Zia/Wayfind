"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { ARTICLES, CATEGORIES, formatDate, relativeDate } from "@/lib/blog-data";

export default function BlogPage() {
  const [category, setCategory] = useState("All");

  const featured = ARTICLES.find((a) => a.featured) ?? ARTICLES[0];
  const filtered =
    category === "All"
      ? ARTICLES.filter((a) => !a.featured)
      : ARTICLES.filter((a) => a.category === category && !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-36 md:px-10 md:pt-48">
        <SectionEyebrow>Blog</SectionEyebrow>
        <h1 className="mt-6 font-display text-display-md max-w-3xl text-balance leading-none tracking-tight">
          Insights for Pakistani businesses.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Strategy, AI, SEO and growth — practical content for business owners who want results,
          not theory.
        </p>
      </section>

      {/* Featured Article */}
      <section className="mx-auto max-w-7xl px-6 pb-8 md:px-10">
        <Link
          href={`/blog/${featured.slug}`}
          data-cursor-hover
          className="group grid grid-cols-1 gap-8 overflow-hidden rounded-2xl border border-border bg-background transition-all hover:shadow-xl hover:shadow-black/8 lg:grid-cols-2"
        >
          {/* Placeholder thumbnail */}
          <div className="flex aspect-video items-center justify-center bg-muted/60 lg:aspect-auto lg:min-h-72">
            <span
              className="font-display text-8xl leading-none text-muted-foreground/20"
              aria-hidden
            >
              {featured.title.charAt(0)}
            </span>
          </div>
          {/* Content */}
          <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
                Featured
              </span>
              <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {featured.category}
              </span>
            </div>
            <h2 className="font-display text-display-xs leading-tight tracking-tight">
              {featured.title}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
              {featured.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[13px] font-medium">{featured.author}</p>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                  <time
                    dateTime={featured.date}
                    title={formatDate(featured.date)}
                  >
                    {relativeDate(featured.date)}
                  </time>{" "}
                  · {featured.readTime} min read
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
              />
            </div>
          </div>
        </Link>
      </section>

      {/* Category filter */}
      <div className="sticky top-16 z-20 border-y border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 md:px-10">
          <div className="flex gap-1 py-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                data-cursor-hover
                className={`shrink-0 rounded-full px-4 py-1.5 text-[12px] font-medium transition-colors ${
                  category === cat
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border py-16 text-center">
            <p className="text-sm text-muted-foreground">No articles in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                data-cursor-hover
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:shadow-lg hover:shadow-black/5"
              >
                {/* Thumbnail */}
                <div className="flex aspect-video items-center justify-center bg-muted/60">
                  <span
                    className="font-display text-6xl leading-none text-muted-foreground/20"
                    aria-hidden
                  >
                    {article.title.charAt(0)}
                  </span>
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-base font-medium leading-snug line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <p className="font-mono text-[11px] text-muted-foreground">
                      <time dateTime={article.date} title={formatDate(article.date)}>
                        {relativeDate(article.date)}
                      </time>{" "}
                      · {article.readTime} min
                    </p>
                    <ArrowUpRight
                      size={14}
                      className="text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-10">
          <SectionEyebrow>Newsletter</SectionEyebrow>
          <h2 className="mt-6 font-display text-display-sm leading-none tracking-tight">
            Practical growth tips, monthly.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            No fluff. One email per month with actionable insights for Pakistani businesses.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="you@example.com"
              className="h-12 w-full max-w-xs rounded-full border border-border bg-background px-5 text-sm placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none sm:w-auto"
            />
            <button
              type="button"
              data-cursor-hover
              className="h-12 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all hover:scale-[1.02]"
            >
              Subscribe →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
