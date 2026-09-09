import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JB Tech Consultants | Testing, Surveying & Technical Consultancy",
  description:
    "JB Tech Consultants provides mining exploration, mineral testing, geotechnical surveys, soil testing, land surveys, groundwater surveys and engineering consultancy services.",
  openGraph: {
    title: "JB Tech Consultants",
    description:
      "Technical testing, surveying, exploration and engineering consultancy services.",
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "JB Tech Consultants",
  telephone: "+917728053323",
  url: "https://maps.app.goo.gl/EpYLHGk3XWV8uBSZ7?g_st=ac",
  sameAs: ["https://wa.me/917728053323"],
  areaServed: "Rajasthan",
  description:
    "Technical testing, surveying, exploration and engineering consultancy services."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}