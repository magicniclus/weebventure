"use client";

import { useEffect } from "react";

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import DessinMarketing from "./svg/DessinMarketing";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  useEffect(() => {
    const titleCTA = document.querySelector(".titleCTA");
    const sustitleCTA = document.querySelector(".sustitleCTA");
    const buttonCTA = document.querySelector(".buttonCTA");

    // Initialisation des éléments avec gsap.set
    gsap.set([titleCTA, sustitleCTA, buttonCTA], { opacity: 0 });

    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "easeOut" },
      scrollTrigger: {
        trigger: ".titleCTA",
        start: "top 80%",
        end: "top 50%",
        // markers: true,
      },
    });

    tl.add(
      gsap.fromTo(titleCTA, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0 }),
      0
    )
      .add(
        gsap.fromTo(
          sustitleCTA,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0 }
        ),
        0.2
      )
      .add(
        gsap.fromTo(buttonCTA, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0 }),
        0.2
      );
  }, []);

  return (
    <section className="w-full overflow-hidden md:mt-16">
      <div className="container flex flex-col items-start max-w-5xl p-3 px-2 py-4 mx-auto rounded-md md:px-4 md:bg-backgroundDev md:items-center md:flex-row">
        <div className="md:w-[257px] h-[145px] hidden md:flex justify-center items-center bg-white rounded-md">
          <DessinMarketing />
        </div>
        <div className="flex flex-col items-start justify-between w-full md:items-center md:px-4 md:flex-row">
          <div className="text-textDev">
            <h2
              className="text-textDev text-[24px] font-extrabold titleCTA"
              style={{ width: "fit-content" }}
            >
              Vous souhaitez un accompagnement marketing ?
            </h2>
            <p className="md:w-9/12 text-[14px] sustitleCTA mt-3">
              Notre agence Adsventure, spécialisée en marketing 100% digital,
              peut vous accompagner pour atteindre vos objectifs.
            </p>
          </div>
          <div className="mt-3 buttonCTA">
            <a
              href="https://www.adsventure-agency.com/"
              target="_blank"
              className="flex items-center px-4 py-2 mt-5 text-white rounded-full bg-primaryDev group min-w-[135px]"
            >
              Adsventure
              <ArrowRightIcon className="w-4 h-auto transition duration-150 ease-in-out group-hover:translate-x-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
