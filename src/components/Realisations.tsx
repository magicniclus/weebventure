/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useEffect } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Realisations = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "easeOut" },
      scrollTrigger: {
        trigger: ".containerTarget",
        start: "top 80%",
        end: "top 50%",
        // markers: true,
      },
    });
    tl.add(
      gsap.fromTo(
        ".realisationContainer",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0 }
      )
    );
  }, []);
  return (
    <section className="w-full md:mt-14 containerTarget overflow-hidden">
      <div className="max-w-5xl mx-auto py-4 px-2 flex justify-between flex-col flex-col items-center">
        <h2 className="text-textDev mx-auto font-extrabold text-[24px] mt-10 titleLeftText">
          Nos dernières réalisations
        </h2>
        <div className="mt-10 realisationContainer">
          <Carousel>
            <CarouselPrevious />
            <CarouselContent className="">
              <CarouselItem className="basis-1/3">
                <img
                  src="/projects/duval.png"
                  alt="duval"
                  className="shadow-md"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <img
                  src="/projects/avenueimmo.png"
                  alt="avenueimmo"
                  className="shadow-md"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <img
                  src="/projects/terabois.png"
                  alt="terabois"
                  className="shadow-md"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <img
                  src="/projects/signature.png"
                  alt="signature"
                  className="shadow-md"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <img
                  src="/projects/dutruch.png"
                  alt="dutruch"
                  className="shadow-md"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <img
                  src="/projects/maprimerenov.png"
                  alt="maprimerenov"
                  className="shadow-md"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Realisations;
