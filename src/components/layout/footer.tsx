"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { SITE_CONFIG, formatPhone } from "@/lib/utils";

const SERVICES = [
  { href: "/services/website-design", label: "Website design" },
  { href: "/services/crm-systems", label: "CRM and sales automation" },
  { href: "/services/ai-integration", label: "AI integration" },
  { href: "/services/seo", label: "SEO" },
  { href: "/services/ads", label: "Google and Meta ads" },
  { href: "/services/google-business", label: "Google Business profile" },
];

const COMPANY = [
  { href: "/about", label: "About" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Journal" },
];

const socialLinkStyle = "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  }

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 md:px-10 md:pt-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
            <form onSubmit={onSubmit} className="mt-8 max-w-sm">
              <p className="eyebrow mb-3">Newsletter</p>
              <div className="flex items-center border-b border-border pb-2 transition-colors focus-within:border-foreground">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  data-cursor-hover
                  aria-label="Subscribe"
                  className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full text-foreground transition-transform hover:translate-x-0.5"
                >
                  <ArrowRight size={16} strokeWidth={1.75} />
                </button>
              </div>
              {subscribed ? (
                <p className="mt-2 text-xs text-muted-foreground">Thanks, you are on the list.</p>
              ) : null}
            </form>
            <div className="mt-8 flex items-center gap-3">
              <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-cursor-hover className={socialLinkStyle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href={SITE_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" data-cursor-hover className={socialLinkStyle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" data-cursor-hover className={socialLinkStyle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-cursor-hover className={socialLinkStyle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Services</p>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} data-cursor-hover className="text-muted-foreground transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Company</p>
            <ul className="space-y-3 text-sm">
              {COMPANY.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} data-cursor-hover className="text-muted-foreground transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Contact</p>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <a href={"https://maps.google.com/?q=" + encodeURIComponent(SITE_CONFIG.address)} target="_blank" rel="noopener noreferrer" data-cursor-hover className="leading-snug transition-colors hover:text-foreground">
                  {SITE_CONFIG.address}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} strokeWidth={1.5} className="shrink-0" />
                <a href={"mailto:" + SITE_CONFIG.email} data-cursor-hover className="transition-colors hover:text-foreground">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} strokeWidth={1.5} className="shrink-0" />
                <a href={"tel:" + formatPhone(SITE_CONFIG.phone)} data-cursor-hover className="transition-colors hover:text-foreground">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="pt-1 text-xs">{SITE_CONFIG.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            (C) {new Date().getFullYear()} WayFind Technologies. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <li>
              <Link href="/privacy" data-cursor-hover className="transition-colors hover:text-foreground">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" data-cursor-hover className="transition-colors hover:text-foreground">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/sitemap" data-cursor-hover className="transition-colors hover:text-foreground">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
