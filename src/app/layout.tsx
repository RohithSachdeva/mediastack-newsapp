import "./globals.css";
import type { Metadata } from "next";

import Header from "./Header";
import NavLinks from "./components/NavLinks";

export const metadata: Metadata = {
  title: "NewsFlash",
  description:
    "News application retrieving dynamic data from mediastack API.  Created with Next.js 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />

      <body>{children}</body>
    </html>
  );
}
