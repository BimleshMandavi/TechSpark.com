"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/layouts/navbar/NavbarDemo";
import Footer from "@/layouts/footer/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body className={inter.className}>
        <div className="flex w-screen">
          <div className="flex-grow relative">{children}</div>
          <div className="absolute top-0 w-screen">
            <NavbarDemo />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
