import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "Brilliant Minds Academy | 25+ Years of Maths Tuition in Jalandhar",
    description:
      "Brilliant Minds Academy offers offline academic tuition in Jalandhar with 25+ years of Mathematics teaching experience, plus a Sunday-only Vedic Maths crash course.",
    keywords: [
      "Maths tuition Jalandhar",
      "CBSE maths coaching",
      "Class 10 maths tuition",
      "Science tuition Jalandhar",
      "All subjects tuition Classes 6–8",
      "Vedic maths Jalandhar",
      "Brilliant Minds Maths Academy",
    ],
    alternates: { canonical: "/" },
    openGraph: {
      title: "Brilliant Minds Academy | From First Doubt to Full Confidence",
      description: "25+ years of Mathematics teaching · Offline academic tuition · Sunday-only Vedic Maths crash course",
      url: "/",
      siteName: "Brilliant Minds Maths Academy",
      locale: "en_IN",
      images: [{ url: "/og.png", width: 1731, height: 909, alt: "Brilliant Minds Academy programmes in Jalandhar" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Brilliant Minds Academy | Jalandhar",
      description: "25+ years of Mathematics teaching, offline academic tuition and a Sunday-only Vedic Maths crash course in Jalandhar.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skipLink" href="#main-content">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
