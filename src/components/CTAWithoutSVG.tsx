"use client";

import { useEffect } from "react";

import { ArrowRightIcon } from "@heroicons/react/20/solid";

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
    <section className="w-full overflow-hidden md:mt-16 topSection">
      <div className="container flex flex-col items-start max-w-5xl p-3 px-2 py-10 mx-auto rounded-md md:px-4 md:bg-backgroundDev md:items-center md:flex-row">
        <div className="flex flex-col items-start justify-between w-full md:items-center md:px-4 md:flex-row">
          <div className="text-textDev">
            <h2 className="text-textDev text-[24px] font-extrabold titleCTAWithoutSVG">
              Prêt à propulser votre projet ?
            </h2>
            <p className="md:w-8/12 text-[14px] sustitleCTAWithoutSVG mt-3">
              Chez Webventure, nous sommes dédiés à transformer vos idées en
              réalités. Lancez-vous : prenez rendez-vous avec nous pour explorer
              ensemble comment notre expertise en développement web peut faire
              décoller votre projet.
            </p>
          </div>
          <div className="mt-3 buttonCTAWithoutSVG">
            <a
              href="/contact"
              className="flex items-center px-4 py-2 mt-5 text-white rounded-full bg-primaryDev group min-w-min "
            >
              On en parle
              <ArrowRightIcon className="w-4 h-auto transition duration-150 ease-in-out group-hover:translate-x-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAWithoutSVG;
