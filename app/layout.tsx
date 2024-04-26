import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "../lib/utils";
import { Sidebar } from "../components/sidebar";

export const metadata: Metadata = {
  title: "Vidur Khanal, Software Engineer",
  description:
    "Hi! I am a driven software engineer specializing in crafting high-quality and performant software solutions. I invite you to explore my portfolio and witness firsthand the passion, attention to detail, and commitment to excellence that I bring to every project.",
  applicationName: "Vidur Khanal - Portfolio",
  authors: {
    name: "Vidur Khanal",
    url: "https://www.github.com/vidurkhanal",
  },
  keywords: [
    "vidur",
    "khanal",
    "developer",
    "software",
    "engineer",
    "New York",
    "portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cn(GeistSans.className)} lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#0E243D" />
      <body className={"h-screen antialiased flex"}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
