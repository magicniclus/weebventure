"use client";

import { useEffect } from "react";

import Image from "next/image";

import gsap from "gsap";

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DessinProcess from "./svg/DessinProcess";

gsap.registerPlugin(ScrollTrigger);

const RightTextContainer = () => {
  useEffect(() => {
    const titleRightText = document.querySelector(".titleRightText");
    const textRightText = document.querySelector(".textRightText");
    const buttonRightText = document.querySelector(".buttonRightText");
    const imageRightText = document.querySelector(".imageRightText");
    const commentaryRightText = document.querySelector(".commentaryRightText");
    const nameRightText = document.querySelector(".nameRightText");

    // Crée une timeline avec ScrollTrigger
    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "easeOut" },
      scrollTrigger: {
        trigger: ".titleRightText",
        start: "top 80%",
        end: "top 50%",
      },
    });

    // Ajoute les animations à la timeline
    tl.fromTo(titleRightText, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0 })
      .fromTo(
        textRightText,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0 },
        "<"
      )
      .fromTo(
        buttonRightText,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0 },
        "<"
      )
      .fromTo(
        imageRightText,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0 },
        "<"
      )
      .fromTo(
        commentaryRightText,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0 },
        "<"
      )
      .fromTo(
        nameRightText,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0 },
        "<"
      );
    // Utilise la fonction then pour attendre que la timeline soit complète

    // Répétez pour d'autres éléments si nécessaire
  }, []);
  return (
    <section className="w-full md:mt-16">
      <div className="flex flex-col items-center justify-between max-w-5xl px-2 py-4 mx-auto md:flex-row">
        <div className="hidden w-full md:w-6/12 md:flex">
          <div className="w-[80%]">
            <DessinProcess />
          </div>
        </div>
        <div className="w-full md:w-6/12">
          <h2 className="text-textDev font-extrabold  text-[24px] md:mt-10 titleRightText">
            Une gamme complète de services adaptés à chaque projet
          </h2>
          <p className="text-[12px] w-10/12 mt-5 textRightText">
            Que vous envisagiez de lancer un site vitrine, un simulateur, ou une
            plateforme e-commerce, nous sommes à votre écoute. Notre approche
            flexible nous permet de développer votre projet soit entièrement à
            partir de zéro, soit en reprenant et en optimisant un projet
            existant. En privilégiant votre CMS favori ou en construisant sur
            mesure, nos équipes s&apos;engagent à répondre précisément à vos
            besoins avec un service personnalisé du design au développement.
          </p>
          <div>
            <a
              href="/contact"
              className="flex items-center px-4 py-2 mt-5 text-white rounded-full bg-primaryDev group max-w-max buttonRightText"
            >
              On en parle
              <ArrowRightIcon className="w-4 h-auto transition duration-150 ease-in-out group-hover:translate-x-2" />
            </a>
          </div>
          <div className="p-4 overflow-hidden shadow-xl mt-7">
            <div className="imageRightText">
              <Image
                src="/logos/avenue-immo.jpg"
                width={69}
                height={39}
                alt="avenue-immo"
              />
            </div>
            <p className="text-[10px] text-textDev/50 w-8/12 mt-5 commentaryRightText">
              Collaborer avec Webventure, c&apos;était comme avoir une baguette
              magique pour notre projet web : efficacité, créativité et soutien
              sur mesure. Ils ont non seulement donné vie à notre site mais ont
              aussi ajouté cette étincelle unique qui le distingue vraiment. Un
              grand bravo à toute l&apos;équipe !
            </p>
            <p className="text-[12px] text-textDev font-bold w-10/12 mt-5 nameRightText">
              Pauline MASSE - Chargé de developpement Avenueimmo.com
            </p>
          </div>
          <div className="flex items-center justify-center w-full mt-20 md:w-6/12 md:hidden">
            <div className="w-[80%]">
              <DessinProcess />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightTextContainer;
