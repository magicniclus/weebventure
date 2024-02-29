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
    <section className="w-full md:mt-14 overflow-hidden">
      <div className="max-w-5xl mx-auto py-4 px-2 flex justify-between md:flex-row flex-col items-center">
        <div className="md:w-6/12 w-full">
          <h2 className="text-textDev font-extrabold  text-[24px] mt-10 titleLeftText">
            Un service et un accompagnement unique
          </h2>
          <p className="text-[12px] w-10/12 mt-5 textLeftText">
            Vous avez un projet web? Nous avons les compétences pour vous
            accompagner, developper et optimiser votre idée. Nous devenons de
            véritable partenaire avec nos clients.{" "}
          </p>
          <div>
            <a
              href="/contact"
              className="flex items-center text-white bg-primaryDev py-2 px-4 rounded-full group max-w-max mt-5 buttonLeftText"
            >
              Nous contacter{" "}
              <ArrowRightIcon className="w-4 h-auto group-hover:translate-x-2 transition duration-150 ease-in-out" />
            </a>
          </div>
          <div className="mt-7 p-4 shadow-xl overflow-hidden">
            <div className="imageLeftText">
              <Image
                src="/logos/terabois.jpg"
                width={69}
                height={39}
                alt="terabois"
              />
            </div>
            <p className="text-[10px] text-textDev/50 w-8/12 mt-5 commentaryLeftText">
              “Nous travaillons avec Webventure depuis 3 ans maintenant et
              l’équipe est totalement en accord avec nos valeurs. Travail
              réalisé dans les temps, team réactive, créative, super experience
              client.
            </p>
            <p className="text-[12px] text-textDev font-bold w-10/12 mt-5 nameLeftText">
              Franck CASTERA - Chef d’entreprise Terabois
            </p>
          </div>
        </div>
        <div className="md:w-6/12 w-full">
          <DessinOne />
        </div>
      </div>
    </section>
  );
};

export default LeftTextContainer;
