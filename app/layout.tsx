import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "../lib/utils";
import { Sidebar } from "../components/sidebar";

export const metadata: Metadata = {
  title: "Vidur Khanal | Software Engineer & Undergrad CS Researcher",
  description:
    "Vidur Khanal is a driven Computer Science and Mathematics undergraduate specializing in high-quality software solutions, backend systems, distributed architectures, compilers, and performance engineering.",
  applicationName: "Vidur Khanal - Portfolio",
  authors: {
    name: "Vidur Khanal",
    url: "https://www.github.com/vidurkhanal/",
  },
  keywords: [
    "vidur",
    "khanal",
    "developer",
    "software",
    "engineer",
    "Vidur Khanal, software engineer, computer science, mathematics, backend developer, distributed systems, compilers, performance engineering, frontend development, user experience design",
  ],
  openGraph: {
    url: "https://www.vidurkhanal.dev",
    siteName: "Vidur Khanal - Portfolio",
    description:
      "Vidur Khanal is a driven Computer Science and Mathematics undergraduate specializing in high-quality software solutions, backend systems, distributed architectures, compilers, and performance engineering.",
    type: "website",
  },
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
