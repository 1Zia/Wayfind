import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  return phone.replace(/\s/g, "");
}

export const SITE_CONFIG = {
  name: "WayFind Technologies",
  tagline: "Engineering Digital Excellence For Modern Brands",
  description:
    "WayFind builds complete digital growth systems — websites, AI, CRM, SEO and ads — all working as one engine for your business.",
  url: "https://wayfind.pk",
  email: "hello@wayfind.pk",
  phone: "+92 300 000 0000",
  whatsapp: "923000000000",
  address: "B-17, B1 Markaz, Islamabad, Pakistan",
  hours: "Monday–Saturday, 9am–7pm PKT",
  social: {
    linkedin: "https://linkedin.com/company/wayfind",
    twitter: "https://twitter.com/wayfindpk",
    facebook: "https://facebook.com/wayfindpk",
    instagram: "https://instagram.com/wayfindpk",
  },
};
