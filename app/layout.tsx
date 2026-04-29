import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageTransition from "@/components/page-transition";
import { company } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const sourceSerif = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-source-serif"
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Price Consulting, LLC | Federal Consulting Advisory",
    template: "%s | Price Consulting, LLC"
  },
  description:
    "Price Consulting, LLC delivers premium federal consulting services in strategic advisory, modernization, acquisition, and mission performance.",
  openGraph: {
    title: "Price Consulting, LLC",
    description:
      "Premium federal consulting for agencies seeking mission-ready strategy, modernization, and measurable outcomes.",
    url: company.url,
    siteName: company.name,
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.name,
  url: company.url,
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    ...company.address
  },
  areaServed: "United States",
  serviceType: "Federal consulting"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sourceSerif.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}