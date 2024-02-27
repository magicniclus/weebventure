"use client";

import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import LeftTextContainer from "@/components/LeftTextContainer";
import LogoEntreprise from "@/components/LogoEntreprise";
import RightTextContainer from "@/components/RightTextContainer";
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
      <main className="flex min-h-screen flex-col items-center">
        <CTA />
        <LogoEntreprise />
        <LeftTextContainer />
        <RightTextContainer />
      </main>
    </>
  );
}
