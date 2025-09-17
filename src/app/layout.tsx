import type { Metadata } from "next";
import { Source_Sans_3 as SourceSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const fontSans = SourceSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SmartPDF Hub | AI PDF Editor & Summarizer",
  description:
    "SmartPDF Hub is an AI-powered platform to edit PDFs online, summarize videos & documents, and convert files between PDF, Word, Excel, PowerPoint, and images. Fast, secure, and easy to use.",
  keywords: [
    "AI PDF Editor",
    "PDF Summarizer",
    "Video Summarizer",
    "PDF to Word",
    "PDF to Excel",
    "PDF to Image",
    "Edit PDFs Online",
  ],
  authors: [{ name: "SmartPDF Hub" }],
  openGraph: {
    title: "SmartPDF Hub | AI PDF Editor & Summarizer",
    description:
      "Edit, summarize, and convert PDFs & videos with AI in one simple platform.",
    url: "https://smartpdfhub.com", // replace with your domain
    siteName: "SmartPDF Hub",
    images: [
      {
        url: "https://smartpdfhub.com/og-image.png", // replace with your image
        width: 1200,
        height: 630,
        alt: "SmartPDF Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <div className="relative  flex min-h-screen  flex-col">
          <Header />
          <main className="felx-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
