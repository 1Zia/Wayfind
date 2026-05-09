import Link from "next/link";
import { ArrowUpRight, Home, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* 404 Display */}
      <div className="relative select-none">
        <p className="font-display text-[160px] leading-none tracking-tight opacity-[0.04] sm:text-[220px]">
          404
        </p>
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <p className="font-display text-display-md leading-none tracking-tight">404</p>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mt-8 max-w-md">
        <h1 className="font-display text-display-xs leading-tight tracking-tight">
          Looks like this page lost its way.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist, has been moved, or the URL might be
          slightly off. Let&apos;s get you back on track.
        </p>
      </div>

      {/* Decorative rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
        <div className="h-[300px] w-[300px] animate-ping-slow rounded-full border border-border opacity-40" />
        <div className="absolute h-[500px] w-[500px] rounded-full border border-border opacity-20" />
      </div>

      {/* CTAs */}
      <div className="relative mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          data-cursor-hover
          className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-7 text-sm font-medium text-background transition-all hover:scale-[1.02]"
        >
          <Home size={14} />
          Go Home
        </Link>
        <Link
          href="/contact"
          data-cursor-hover
          className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-7 text-sm font-medium text-foreground transition-all hover:border-foreground hover:scale-[1.02]"
        >
          <Mail size={14} />
          Contact Us
          <ArrowUpRight size={13} className="text-muted-foreground" />
        </Link>
      </div>

      {/* Quick nav */}
      <div className="relative mt-16 flex flex-wrap justify-center gap-3">
        {[
          { href: "/services", label: "Services" },
          { href: "/industries", label: "Industries" },
          { href: "/pricing", label: "Pricing" },
          { href: "/about", label: "About" },
          { href: "/blog", label: "Blog" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            data-cursor-hover
            className="rounded-full border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
