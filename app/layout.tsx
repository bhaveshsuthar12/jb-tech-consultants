import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { businessInfo } from "./data/servicesData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const viewport: Viewport = {
  themeColor: "#081220",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jbtechconsultants.com"),
  title: {
    default: "JB TECH CONSULTANTS | Testing, Surveying & Diamond Core Drilling | Rajasthan",
    template: "%s | JB TECH CONSULTANTS"
  },
  description:
    "JB Tech Consultants is a certified engineering consultancy in Chittorgarh, Rajasthan. Lead by Niranjan Suthar, providing diamond core drilling, soil testing, mineral assays, geotechnical surveys, and civil testing.",
  keywords: [
    "soil testing chittorgarh",
    "mineral testing lab rajasthan",
    "diamond core drilling services",
    "geotechnical surveys rajasthan",
    "rock drilling agency chittorgarh",
    "mining exploration consultants",
    "land surveys total station dgps",
    "ground water surveys rajasthan",
    "structural consultancy chittorgarh",
    "material testing lab bhilwara udaipur",
    "Niranjan Suthar JB Tech"
  ],
  authors: [{ name: "Niranjan Suthar", url: businessInfo.waUrl }],
  creator: "JB Tech Consultants",
  publisher: "JB Tech Consultants",
  openGraph: {
    title: "JB TECH CONSULTANTS | Precision Testing, Surveys & Diamond Core Drilling",
    description:
      "Certified geotechnical analysis, mineral testing, diamond core drilling, and engineering surveying across Rajasthan. Lead by Niranjan Suthar.",
    url: "https://jbtechconsultants.com",
    siteName: "JB TECH CONSULTANTS",
    locale: "en_IN",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "/"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService", "EngineeringService"],
  name: "JB Tech Consultants",
  legalName: "JB Tech Consultants",
  image: "https://jbtechconsultants.com/images/jb-tech-01.jpg",
  telephone: businessInfo.phone,
  url: businessInfo.mapsUrl,
  sameAs: [
    businessInfo.waUrl,
    businessInfo.mapsUrl
  ],
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "MP Setu Marg, Basant Nagar, Krishna Nagar",
    addressLocality: "Chittorgarh",
    addressRegion: "Rajasthan",
    postalCode: "312001",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.8887,
    longitude: 74.6269
  },
  founder: {
    "@type": "Person",
    name: "Niranjan Suthar",
    jobTitle: "Technical Director & Lead Consultant"
  },
  employee: {
    "@type": "Person",
    name: "Niranjan Suthar",
    jobTitle: "Lead Consultant & Technical Director"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:30"
    }
  ],
  areaServed: [
    { "@type": "City", name: "Chittorgarh" },
    { "@type": "City", name: "Bhilwara" },
    { "@type": "City", name: "Udaipur" },
    { "@type": "City", name: "Kota" },
    { "@type": "AdministrativeArea", name: "Rajasthan" }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Engineering & Testing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diamond Core Drilling Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Geotechnical Surveys" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soil Testing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mineral Testing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mining Exploration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Land Surveys" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ground Water Surveys" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Raw Material Testing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Structural Consultancy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Food Testing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Infrastructure & Agriculture Services" } }
    ]
  },
  description:
    "JB Tech Consultants provides certified geotechnical investigations, soil testing, diamond core drilling, mineral testing, land surveys, and structural consultancy across Rajasthan."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
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