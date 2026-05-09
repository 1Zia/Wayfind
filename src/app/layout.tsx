import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { CustomCursor } from "@/components/global/custom-cursor";
import { PageLoader } from "@/components/global/page-loader";
import { WhatsAppButton } from "@/components/global/whatsapp-button";
import { ScrollToTop } from "@/components/global/scroll-to-top";
import { CookieBanner } from "@/components/global/cookie-banner";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { SITE_CONFIG } from "@/lib/utils";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "website design Islamabad",
    "digital marketing Pakistan",
    "AI integration",
    "CRM systems",
    "SEO Pakistan",
    "Google Ads Pakistan",
    "Meta ads",
    "WayFind",
  ],
  authors: [{ name: "WayFind Technologies" }],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <SmoothScrollProvider>
            <PageLoader />
            <CustomCursor />
            <Navigation />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
            <CookieBanner />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
