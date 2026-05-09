import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy — WayFind",
  description: "How we handle your data at WayFind Technologies.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-28 pt-36 md:px-10 md:pb-40 md:pt-48">
      <SectionEyebrow>Legal</SectionEyebrow>
      <h1 className="mt-6 font-display text-display-md leading-none tracking-tight">
        Privacy Policy
      </h1>
      <p className="mt-6 text-sm text-muted-foreground">
        Last updated: April 15, 2024
      </p>

      <div className="prose prose-sm prose-invert mt-12 max-w-none text-foreground/80">
        <p>
          At WayFind Technologies, we take your privacy seriously. This policy
          outlines how we collect, use, and protect your information when you
          visit our website and use our services.
        </p>

        <h2 className="text-foreground">1. Information We Collect</h2>
        <p>
          We collect information that you provide directly to us when you fill out
          a contact form, book a consultation, or sign up for our services. This
          may include your name, email address, phone number, and business details.
        </p>

        <h2 className="text-foreground">2. How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Provide and improve our services</li>
          <li>Communicate with you about your projects</li>
          <li>Send you marketing communications (if you've opted in)</li>
          <li>Analyze how our website is used</li>
        </ul>

        <h2 className="text-foreground">3. Data Protection</h2>
        <p>
          We implement industry-standard security measures to protect your
          information from unauthorized access, disclosure, or destruction.
        </p>

        <h2 className="text-foreground">4. Third-Party Services</h2>
        <p>
          We may use third-party services (like Google Analytics and CRM
          providers) to help us operate our business. These services have their
          own privacy policies and are not covered by this document.
        </p>

        <h2 className="text-foreground">5. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal
          information. Contact us at privacy@wayfind.pk for any requests.
        </p>
      </div>
    </main>
  );
}
