"use client";

import { useEffect } from "react";

import DessinMarketing from "./svg/DessinMarketing";
import { Button } from "./ui/button";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  useEffect(() => {
    const titleCTA = document.querySelector(".titleCTA");
    const sustitleCTA = document.querySelector(".sustitleCTA");
    const buttonCTA = document.querySelector(".buttonCTA");

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
    <section className="w-full">
      <div className="max-w-5xl mx-auto py-4 px-4 bg-backgroundDev rounded-md p-3 flex items-center container">
        <div className="w-[257px] h-[145px] flex justify-center items-center bg-white rounded-md">
          <DessinMarketing />
        </div>
        <div className="w-full flex justify-between items-center px-4">
          <div className="text-textDev">
            <h2 className="text-textDev text-[24px] font-extrabold titleCTA">
              Vous souhaitez un accompagnement marketing ?
            </h2>
            <p className="w-9/12 text-[14px] sustitleCTA">
              Notre agence Adsventure spécialisé en marketing 100% digital peut
              vous accompagner à atteindre vos objectifs.
            </p>
          </div>
          <div className="buttonCTA">
            <Button variant={"perso"}>Adsventure</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
