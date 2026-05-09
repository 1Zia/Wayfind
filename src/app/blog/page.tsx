import type { Metadata } from "next";
import BlogContent from "./blog-content";

export const metadata: Metadata = {
  title: "Blog — Insights for Pakistani Businesses",
  description: "Practical strategy, AI, SEO and growth insights from the experts at WayFind. Real content for business owners who want results.",
};

export default function BlogPage() {
  return <BlogContent />;
}
