import React from "react";

import { NavBar , Footer } from "@/components";

export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
      <NavBar />
        <main>
        {children}
        </main>
      <Footer />
      </>
    );
}
  