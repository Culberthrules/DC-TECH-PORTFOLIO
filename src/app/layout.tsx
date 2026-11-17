import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Damasus Culberth", template: "%s | DC Tech" },
  description:
    "Full-stack developer building and maintaining production websites. React, Node.js, TypeScript, real databases. Available for freelance, contract, and permanent roles.",
  authors: [{ name: "Damasus Culberth" }],
  openGraph: {
    siteName: "DC Tech",
    type: "website",
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="antialiased font-sans min-h-screen bg-canvas text-ink flex flex-col">
        <Nav />
        <div className="flex-1">{props.children}</div>
        <Footer />
      </body>
    </html>
  );
}
