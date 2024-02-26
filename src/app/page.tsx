"use client";

import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import LogoEntreprise from "@/components/LogoEntreprise";
import Logo from "@/components/svg/Logo";

import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <>
        <main
          className={"flex min-h-screen flex-col items-center justify-center"}
        >
          <Logo />
        </main>
      </>
    );
  }

  return (
    <>
      <Hero />
      <main className="flex min-h-screen flex-col items-center p-24">
        <CTA />
        <LogoEntreprise />
      </main>
    </>
  );
}
