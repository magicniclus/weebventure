"use client";

import { useEffect } from "react";

import { Button } from "./ui/button";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTAWithoutSVG = () => {
  useEffect(() => {
    const titleCTAWithoutSVG = document.querySelector(".titleCTAWithoutSVG");
    const sustitleCTAWithoutSVG = document.querySelector(
      ".sustitleCTAWithoutSVG"
    );
    const buttonCTAWithoutSVG = document.querySelector(".buttonCTAWithoutSVG");
    const topSection = document.querySelector(".topSection");

    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "easeOut" },
      scrollTrigger: {
        trigger: ".topSection",
        start: "top 80%",
        end: "top 50%",
        // markers: true,
      },
    });

    tl.add(
      gsap.fromTo(
        titleCTAWithoutSVG,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 }
      ),
      0
    )
      .add(
        gsap.fromTo(
          sustitleCTAWithoutSVG,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 }
        ),
        0.2
      )
      .add(
        gsap.fromTo(
          buttonCTAWithoutSVG,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 }
        ),
        0.2
      );
  }, []);

  return (
    <section className="w-full md:mt-16 topSection overflow-hidden">
      <div className="max-w-5xl mx-auto py-4 md:px-4 px-2 md:bg-backgroundDev rounded-md p-3 flex md:items-center container items-start md:flex-row flex-col">
        <div className="w-full flex justify-between md:items-center items-start md:px-4 md:flex-row flex-col mt-5">
          <div className="text-textDev">
            <h2 className="text-textDev text-[24px] font-extrabold titleCTAWithoutSVG mt-5">
              Vous souhaitez un accompagnement marketing ?
            </h2>
            <p className="md:w-9/12 text-[14px] sustitleCTAWithoutSVG mt-3">
              Notre agence Adsventure spécialisé en marketing 100% digital peut
              vous accompagner à atteindre vos objectifs.
            </p>
          </div>
          <div className="buttonCTAWithoutSVG mt-3">
            <Button variant={"perso"}>Adsventure</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAWithoutSVG;
