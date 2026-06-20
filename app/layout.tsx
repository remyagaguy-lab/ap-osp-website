import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ap-osp.org'),
  title: {
    default: "AP-OSP Togo | Orientation Scolaire et Professionnelle",
    template: "%s | AP-OSP Togo"
  },
  description: "L'Association pour la Promotion de l'Orientation Scolaire et Professionnelle (AP-OSP) aide les jeunes togolais à faire des choix d'avenir éclairés. Programmes d'orientation, stages, ateliers et conseil.",
  keywords: [
    "orientation scolaire Togo",
    "orientation professionnelle Lomé",
    "AP-OSP",
    "conseil orientation Togo",
    "insertion professionnelle Togo",
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_TG',
    url: 'https://ap-osp.org',
    siteName: 'AP-OSP Togo',
    images: [
      {
        url: '/og-image.jpg', // Placeholder reference
        width: 1200,
        height: 630,
        alt: 'AP-OSP Togo - Orientation Scolaire et Professionnelle',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'], // Placeholder reference
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "AP-OSP Togo",
  "url": "https://ap-osp.org",
  "logo": "https://ap-osp.org/logo.png",
  "description": "Association pour la Promotion de l'Orientation Scolaire et Professionnelle au Togo.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Avedji-Anyigbé, non loin de Style Tahiti",
    "addressLocality": "Lomé",
    "addressCountry": "TG",
    "postOfficeBoxNumber": "15 BP 425"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+228-70-41-82-86",
    "contactType": "customer service"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}>
        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-primary text-surface px-6 py-3 rounded-lg font-bold shadow-lg"
        >
          Aller au contenu principal
        </a>

        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
