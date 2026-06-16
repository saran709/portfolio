import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Loader from "@/components/ui/loader"
import { getSiteUrl } from "@/lib/site"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "SARAN R - Full Stack Developer & Creative Technologist",
  description:
    "Explore my portfolio of interactive web experiences, 3D integrations, and full-stack projects. Building beautiful digital experiences with React, Next.js, and modern web technologies.",
  keywords: [
    "SARAN R",
    "saran709",
    "Saran R",
    "Paavai Engineering College",
    "Full Stack Developer",
    "Java Backend",
    "Portfolio",
    "React",
    "Next.js",
  ],
  authors: [{ name: "SARAN R", url: "https://github.com/saran709" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: { index: true, follow: true },
  },
  generator: "v0.app",
  applicationName: "SARAN R Portfolio",
  alternates: {
    canonical: "/",
  },
  // icons removed to disable favicon/tab image
  openGraph: {
    title: "SARAN R - Full Stack Developer & Creative Technologist",
    description:
      "Explore my portfolio of interactive web experiences, 3D integrations, and full-stack projects.",
    siteName: "SARAN R",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "SARAN R - Full Stack Developer & Creative Technologist",
    description:
      "Explore my portfolio of interactive web experiences, 3D integrations, and full-stack projects.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="I2BYrsWNantOwzqHl-55e_N4EK6LPyIJlVImBZJWvNg" />
        {/* Schema.org JSON-LD for Person to help search engines associate names/affiliations */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "SARAN R",
              url: getSiteUrl(),
              alternateName: ["saran709", "Saran R"],
              jobTitle: "Full Stack Developer",
              alumniOf: "Paavai Engineering College",
              sameAs: [
                "https://github.com/saran709",
                "https://www.linkedin.com/in/saran709/",
              ],
              email: "mailto:saranramesh709@gmail.com",
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Loader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
