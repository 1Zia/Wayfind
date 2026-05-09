"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Link2 } from "lucide-react";

// Twitter/X SVG icon
function TwitterIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// LinkedIn SVG icon
function LinkedinIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

import { ARTICLES, getArticle, getRelatedArticles, formatDate, relativeDate } from "@/lib/blog-data";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Button } from "@/components/ui/button";
import { use } from "react";

// Reading Progress Bar
function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-0.5 w-full bg-transparent">
      <div
        className="h-full bg-accent transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// Share Button
function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://wayfind.pk/blog/${slug}`;

  function copy() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const linkedinUrl = `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`;

  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        Share
      </span>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-hover
        className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
        title="Share on Twitter"
      >
        <TwitterIcon size={13} />
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-hover
        className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
        title="Share on LinkedIn"
      >
        <LinkedinIcon size={13} />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-hover
        className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground"
        title="Share on WhatsApp"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-muted-foreground hover:text-foreground"
          aria-hidden
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
      <button
        type="button"
        onClick={copy}
        data-cursor-hover
        className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
        title="Copy link"
      >
        <Link2 size={13} />
      </button>
      {copied && (
        <span className="font-mono text-[11px] text-accent">Copied!</span>
      )}
    </div>
  );
}

export default function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 3);

  return (
    <>
      <ReadingProgress />

      {/* Header */}
      <section className="mx-auto max-w-3xl px-6 pb-12 pt-36 md:px-10 md:pt-48">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={12} />
          All Articles
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {article.category}
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">
            {article.readTime} min read
          </span>
        </div>

        <h1 className="mt-6 font-display text-display-sm text-balance leading-tight tracking-tight">
          {article.title}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>

        {/* Author + Date */}
        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 font-medium text-accent text-sm">
              {article.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="text-sm font-medium">{article.author}</p>
              <p className="font-mono text-[11px] text-muted-foreground">{article.authorRole}</p>
            </div>
          </div>
          <p className="text-right font-mono text-[11px] text-muted-foreground">
            <time dateTime={article.date} title={formatDate(article.date)}>
              {relativeDate(article.date)}
            </time>
          </p>
        </div>
      </section>

      {/* Thumbnail placeholder */}
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-muted">
          <span className="font-display text-[120px] leading-none text-muted-foreground/10" aria-hidden>
            {article.title.charAt(0)}
          </span>
        </div>
      </div>

      {/* Article content */}
      <article className="mx-auto max-w-3xl px-6 py-12 md:px-10 md:py-16">
        <div
          className="prose prose-sm max-w-none text-foreground/85
            prose-headings:font-display prose-headings:font-normal prose-headings:tracking-tight prose-headings:text-foreground
            prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-base prose-h3:mt-8 prose-h3:mb-3
            prose-p:leading-relaxed prose-p:text-foreground/80
            prose-ul:text-foreground/80 prose-li:leading-relaxed
            prose-strong:text-foreground prose-strong:font-medium
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {/* Share */}
      <div className="mx-auto max-w-3xl border-t border-border px-6 py-8 md:px-10">
        <ShareButtons title={article.title} slug={article.slug} />
      </div>

      {/* Service CTA */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Ready to apply this?
          </p>
          <h2 className="mt-4 font-display text-display-xs leading-tight tracking-tight">
            Book a free strategy call with WayFind.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            We&apos;ll look at your business and show you exactly where the opportunities are.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary" size="md" arrow>
              Book Free Call
            </Button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <SectionEyebrow>Related Articles</SectionEyebrow>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                data-cursor-hover
                className="group flex flex-col gap-3 rounded-2xl border border-border p-6 transition-all hover:shadow-md"
              >
                <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground w-fit">
                  {rel.category}
                </span>
                <h3 className="text-base font-medium leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                  {rel.title}
                </h3>
                <div className="mt-auto flex items-center justify-between">
                  <p className="font-mono text-[11px] text-muted-foreground">
                    {rel.readTime} min read
                  </p>
                  <ArrowUpRight
                    size={14}
                    className="text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
