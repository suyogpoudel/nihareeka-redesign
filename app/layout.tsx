import type { Metadata } from "next";
import { Calistoga, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { baseKeywords, baseMetadata } from "@/lib/base-metadata";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" });

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Nihareeka College of Management & Information Technology",
  description:
    "Nihareeka College of Management & Information Technology is a premier educational institution dedicated to providing high-quality education in management and IT. Our programs combine practical learning, industry-relevant curriculum, and experienced faculty to prepare students for success.",
  keywords: [
    ...baseKeywords,
    "College",
    "Management",
    "IT",
    "Education",
    "Nepal",
  ],

  openGraph: {
    ...baseMetadata.openGraph,
    title: "Nihareeka College of Management & Information Technology",
    description:
      "Nihareeka College of Management & Information Technology is a premier educational institution dedicated to providing high-quality education in management and IT.",
    url: "https://nihareeka-redesign.vercel.app",
    images: [
      {
        url: "https://nihareeka-redesign.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    ...baseMetadata.twitter,
    title: "Nihareeka College of Management & Information Technology",
    description:
      "Nihareeka College of Management & Information Technology is a premier educational institution dedicated to providing high-quality education in management and IT.",
    images: ["https://nihareeka-redesign.vercel.app/images/og-default.png"],
  },

  alternates: {
    canonical: "https://nihareeka-redesign.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${calistoga.variable}`}
    >
      <body className={`flex flex-col min-h-screen font-sans antialiased`}>
        <header>
          <Navbar />
        </header>

        <main className="flex-1 flex justify-center items-center">
          {children}
        </main>
        <Toaster />

        <Footer />
      </body>
    </html>
  );
}
