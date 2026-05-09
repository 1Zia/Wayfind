import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export const metadata: Metadata = {
  title: "Terms of Service — WayFind",
  description: "The terms and conditions for using WayFind services.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-28 pt-36 md:px-10 md:pb-40 md:pt-48">
      <SectionEyebrow>Legal</SectionEyebrow>
      <h1 className="mt-6 font-display text-display-md leading-none tracking-tight">
        Terms of Service
      </h1>
      <p className="mt-6 text-sm text-muted-foreground">
        Last updated: April 15, 2024
      </p>

      <div className="prose prose-sm prose-invert mt-12 max-w-none text-foreground/80">
        <p>
          By accessing or using WayFind's website and services, you agree to be
          bound by these terms and conditions.
        </p>

        <h2 className="text-foreground">1. Services</h2>
        <p>
          WayFind provides digital marketing, website design, AI integration, and
          CRM consulting services. The specific scope of work will be outlined
          in a separate proposal or agreement for each project.
        </p>

        <h2 className="text-foreground">2. Payments</h2>
        <p>
          Payments for services are due according to the schedule outlined in
          your project proposal. We reserve the right to suspend work if payments
          are not made on time.
        </p>

        <h2 className="text-foreground">3. Intellectual Property</h2>
        <p>
          Upon full payment, the client owns the final deliverables produced by
          WayFind. WayFind retains the right to use the project for portfolio and
          marketing purposes unless otherwise agreed.
        </p>

        <h2 className="text-foreground">4. Limitation of Liability</h2>
        <p>
          WayFind is not liable for any indirect, incidental, or consequential
          damages arising out of the use of our services or website.
        </p>

        <h2 className="text-foreground">5. Governing Law</h2>
        <p>
          These terms are governed by the laws of Pakistan. Any disputes will be
          resolved in the courts of Islamabad.
        </p>
      </div>
    </main>
  );
}
