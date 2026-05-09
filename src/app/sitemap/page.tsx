import type { Metadata } from "next";
import Link from "next/link";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SERVICES_DATA } from "@/lib/services-data";
import { ARTICLES } from "@/lib/blog-data";
import { INDUSTRIES } from "../industries/page";

export const metadata: Metadata = {
  title: "Sitemap — WayFind",
  description: "A complete list of all pages on the WayFind website.",
};

export default function SitemapPage() {
  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 pb-28 pt-36 md:px-10 md:pb-40 md:pt-48">
      <SectionEyebrow>Directory</SectionEyebrow>
      <h1 className="mt-6 font-display text-display-md leading-none tracking-tight">
        Sitemap
      </h1>

      <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Main Pages */}
        <div>
          <h2 className="font-display text-lg font-medium">Main Pages</h2>
          <ul className="mt-6 space-y-3">
            {mainLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-display text-lg font-medium">Services</h2>
          <ul className="mt-6 space-y-3">
            {Object.values(SERVICES_DATA).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h2 className="font-display text-lg font-medium">Industries</h2>
          <ul className="mt-6 space-y-3">
            {INDUSTRIES.map((industry) => (
              <li key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {industry.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Blog */}
        <div>
          <h2 className="font-display text-lg font-medium">Blog Posts</h2>
          <ul className="mt-6 space-y-3">
            {ARTICLES.slice(0, 10).map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
