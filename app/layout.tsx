import type { Metadata } from "next";
import "./globals.css";

import { NavBar , Footer } from "@/components";

export const metadata: Metadata = {
  title: "CarRent",
  description: "Best Car Rental",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
      </body>
    </html>
  );
}
