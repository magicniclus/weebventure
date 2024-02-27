"use client";

import Image from "next/image";
import { Button } from "./ui/button";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import DessinProcess from "./svg/DessinProcess";

gsap.registerPlugin(ScrollTrigger);

const RightTextContainer = () => {
  return (
    <section className="w-full md:mt-16">
      <div className="max-w-5xl mx-auto py-4 px-2 flex justify-between md:flex-row flex-col items-center">
        <div className="md:w-6/12 md:flex hidden w-full">
          <div className="w-[80%]">
            <DessinProcess />
          </div>
        </div>
        <div className="md:w-6/12 w-full">
          <h2 className="text-textDev font-extrabold text-[36px] mt-10 titleLeftText">
            Un panel de service complet
          </h2>
          <p className="text-[12px] w-10/12 mt-5 textLeftText">
            Nous travaillons aussi bien sur des site vitrine, des simulateur,
            des sites ecommerces. Soit en partant de rien (from scratch) soit en
            utilisant votre CMS préféré, nos équipes s’adapte à vos besoins afin
            de vous proposer un service sur-mesure du design au développement.
          </p>
          <Button variant={"perso"} className="mt-7 buttonLeftText">
            On en parle
          </Button>
          <div className="mt-7 p-4 shadow-xl overflow-hidden">
            <div className="imageLeftText">
              <Image
                src="/logos/avenue-immo.jpg"
                width={69}
                height={39}
                alt="avenue-immo"
              />
            </div>
            <p className="text-[10px] text-textDev/50 w-8/12 mt-5 commentaryLeftText">
              “Nous travaillons avec Webventure depuis 3 ans maintenant et
              l’équipe est totalement en accord avec nos valeurs. Travail
              réalisé dans les temps, team réactive, créative, super experience
              client.
            </p>
            <p className="text-[12px] text-textDev font-bold w-10/12 mt-5 nameLeftText">
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
