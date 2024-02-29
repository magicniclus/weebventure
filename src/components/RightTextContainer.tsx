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
      <div className="max-w-5xl mx-auto py-4 px-2 flex justify-between md:flex-row flex-col items-center">
        <div className="md:w-6/12 md:flex hidden w-full">
          <div className="w-[80%]">
            <DessinProcess />
          </div>
        </div>
        <div className="md:w-6/12 w-full">
          <h2 className="text-textDev font-extrabold  text-[24px] md:mt-10 titleRightText">
            Un panel de service complet
          </h2>
          <p className="text-[12px] w-10/12 mt-5 textRightText">
            Nous travaillons aussi bien sur des site vitrine, des simulateur,
            des sites ecommerces. Soit en partant de rien (from scratch) soit en
            utilisant votre CMS préféré, nos équipes s’adapte à vos besoins afin
            de vous proposer un service sur-mesure du design au développement.
          </p>
          <div>
            <a
              href="/contact"
              className="flex items-center text-white bg-primaryDev py-2 px-4 rounded-full group max-w-max mt-5 buttonRightText"
            >
              On en parle
              <ArrowRightIcon className="w-4 h-auto group-hover:translate-x-2 transition duration-150 ease-in-out" />
            </a>
          </div>
          <div className="mt-7 p-4 shadow-xl overflow-hidden">
            <div className="imageRightText">
              <Image
                src="/logos/avenue-immo.jpg"
                width={69}
                height={39}
                alt="avenue-immo"
              />
            </div>
            <p className="text-[10px] text-textDev/50 w-8/12 mt-5 commentaryRightText">
              “Nous travaillons avec Webventure depuis 3 ans maintenant et
              l’équipe est totalement en accord avec nos valeurs. Travail
              réalisé dans les temps, team réactive, créative, super experience
              client.
            </p>
            <p className="text-[12px] text-textDev font-bold w-10/12 mt-5 nameRightText">
              Pauline MASSE - Chargé de developpement Avenueimmo.com
            </p>
          </div>
          <div className="md:w-6/12 flex md:hidden w-full mt-20 justify-center items-center">
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
