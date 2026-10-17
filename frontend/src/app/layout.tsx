import type { Metadata } from "next";
import Header from "@/components/Header";
import MotionEffects from "@/components/MotionEffects";
import Footer from "@/components/Footer";
import "./globals.css";
import "./backgrounds.css";

export const metadata: Metadata = {
  title: "BSO AI Review Private Limited",
  description:
    "Sports technology for measurement, assisted review and athlete recognition.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
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
