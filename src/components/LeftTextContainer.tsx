"use client";

import { useEffect } from "react";

import Image from "next/image";
import DessinOne from "./svg/DessinOne";

import gsap from "gsap";

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LeftTextContainer = () => {
  useEffect(() => {
    const titleLeftText = document.querySelector(".titleLeftText");
    const textLeftText = document.querySelector(".textLeftText");
    const buttonLeftText = document.querySelector(".buttonLeftText");
    const imageLeftText = document.querySelector(".imageLeftText");
    const commentaryLeftText = document.querySelector(".commentaryLeftText");
    const nameLeftText = document.querySelector(".nameLeftText");

    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "easeOut" },
      scrollTrigger: {
        trigger: ".titleLeftText",
        start: "top 80%",
        end: "top 50%",
        // markers: true,
      },
    });

    tl.fromTo(titleLeftText, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0 })
      .fromTo(
        textLeftText,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0 },
        "<"
      )
      .fromTo(
        buttonLeftText,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0 },
        "<"
      )
      .fromTo(
        imageLeftText,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0 },
        "<"
      )
      .fromTo(
        commentaryLeftText,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0 },
        "<"
      )
      .fromTo(
        nameLeftText,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0 },
        "<"
      );
  }, []);

  return (
    <section className="w-full overflow-hidden md:mt-14" id="information">
      <div className="flex flex-col items-center justify-between max-w-5xl px-2 py-4 mx-auto md:flex-row">
        <div className="w-full md:w-6/12">
          <h2 className="text-textDev font-extrabold  text-[24px] mt-10 titleLeftText">
            Un service et un accompagnement personnalisé
          </h2>
          <p className="text-[12px] w-10/12 mt-5 textLeftText">
            Vous portez un projet web ? De la conception initiale au design, en
            passant par le développement jusqu&apos;à la maintenance, nous
            possédons l&apos;expertise nécessaire pour vous accompagner à chaque
            étape. En établissant une véritable relation de partenariat avec nos
            clients, nous assurons une transition fluide et une croissance
            soutenue de votre projet. Confiez-nous votre vision, et ensemble,
            donnons-lui vie
          </p>
          <div>
            <a
              href="/contact"
              className="flex items-center px-4 py-2 mt-5 text-white rounded-full bg-primaryDev group max-w-max buttonLeftText"
            >
              Nous contacter{" "}
              <ArrowRightIcon className="w-4 h-auto transition duration-150 ease-in-out group-hover:translate-x-2" />
            </a>
          </div>
          <div className="p-4 overflow-hidden shadow-xl mt-7">
            <div className="imageLeftText">
              <Image
                src="/logos/terabois.jpg"
                width={69}
                height={39}
                alt="terabois"
              />
            </div>
            <p className="text-[10px] text-textDev/50 w-8/12 mt-5 commentaryLeftText">
              Nous travaillons avec Webventure depuis 3 ans maintenant et
              l’équipe est totalement en accord avec nos valeurs. Travail
              réalisé dans les temps, team réactive, créative, super experience
              client.
            </p>
            <p className="text-[12px] text-textDev font-bold w-10/12 mt-5 nameLeftText">
              Franck CASTERA - Chef d’entreprise Terabois
            </p>
          </div>
        </div>
        <div className="w-full md:w-6/12">
          <DessinOne />
        </div>
      </div>
    </section>
  );
};

export default LeftTextContainer;
