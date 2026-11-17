import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Global Pick | Director Chinonso Ajali — Enterprise Systems & Commerce",
  description:
    "Official portfolio and enterprise technology showcase of The Global Pick. Directed by Chinonso Ajali. Featuring flagship platforms: Lifab Foods, Chrismon Laundry, and Nmart.",
  keywords: [
    "The Global Pick",
    "Chinonso Ajali",
    "Nonnybest",
    "Enterprise Systems",
    "Next.js",
    "React",
    "Lifab Foods",
    "Chrismon Laundry",
    "Nmart",
    "Full-Stack Architecture"
  ],
  authors: [{ name: "Chinonso Ajali" }],
  openGraph: {
    title: "The Global Pick | Enterprise Systems & Digital Infrastructure",
    description: "Explore live flagship systems engineered by Director Chinonso Ajali.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#07090e] text-[#f1f5f9] antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
