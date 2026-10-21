import type { Metadata } from "next";
import Header from "@/components/Header";
import MotionEffects from "@/components/MotionEffects";
import Footer from "@/components/Footer";
import "./globals.css";
import "./backgrounds.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "BSO AI Review Private Limited",
  description:
    "Sports technology for measurement, assisted review and athlete recognition.",
  icons: { icon: "/favicon-v3.png", apple: "/apple-touch-icon-v3.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <MotionEffects />
      </body>
    </html>
  );
}
