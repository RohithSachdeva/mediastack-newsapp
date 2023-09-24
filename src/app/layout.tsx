import "./globals.css";
import type { Metadata } from "next";
import Providers from "./components/Providers";
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
    <html lang="en" suppressHydrationWarning={true}>
      <Providers>
        <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
