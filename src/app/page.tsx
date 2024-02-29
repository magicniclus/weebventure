"use client";

import CTA from "@/components/CTA";
import CTAWithoutSVG from "@/components/CTAWithoutSVG";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LeftTextContainer from "@/components/LeftTextContainer";
import LogoEntreprise from "@/components/LogoEntreprise";
import Realisations from "@/components/Realisations";
import RightTextContainer from "@/components/RightTextContainer";
import Techno from "@/components/Techno";
import Logo from "@/components/svg/Logo";

import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Liste des chemins d'accès des images à précharger
    const imagePaths = [
      "/logos/logo.png",
      "/logos/avenue-immo.jpg",
      "/logos/dutruch.jpg",
      "/logos/duval.jpg",
      "/logos/maprimerenov.jpg",
      "/logos/signature.jpg",
      "/background/dev.jpg",
      "/background/ecommerce.jpg",
      "/background/simulateur.jpg",
      "/background/vitrine.jpg",
    ];

    // Créez des promesses pour le chargement de chaque image
    const imagePromises = imagePaths.map((path) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = path;
        img.onload = resolve;
      });
    });

    // Attendre le chargement de toutes les images
    Promise.all(imagePromises).then(() => {
      setTimeout(() => {
        setIsLoading(false); // Toutes les images sont chargées, mettre fin au chargement
      }, 1800);
    });
  }, []);

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
        <Techno />
        <Realisations />
        <FAQ />
        <CTAWithoutSVG />
      </main>
      <Footer />
    </>
  );
}
