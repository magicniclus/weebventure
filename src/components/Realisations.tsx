/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useEffect, useState } from "react";

import { type CarouselApi } from "@/components/ui/carousel";

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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const initialCount = 6;

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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

  useEffect(() => {
    console.log(count);
    console.log(current);
  }, [count, current]);
  return (
    <section className="w-full md:mt-16 containerTarget overflow-hidden">
      <div className="max-w-5xl mx-auto py-4 px-2 flex justify-between flex-col flex-col items-center">
        <h2 className="text-textDev mx-auto font-extrabold text-[24px] titleLeftText">
          Nos dernières réalisations
        </h2>
        <div className="mt-10 realisationContainer md:flex hidden">
          <Carousel setApi={setApi}>
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
        <div className="mt-10 realisationContainer md:hidden flex">
          <Carousel setApi={setApi}>
            <CarouselContent>
              <CarouselItem>
                <img
                  src="/projects/duval.png"
                  alt="duval"
                  className="shadow-md"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/projects/avenueimmo.png"
                  alt="avenueimmo"
                  className="shadow-md"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/projects/terabois.png"
                  alt="terabois"
                  className="shadow-md"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/projects/signature.png"
                  alt="signature"
                  className="shadow-md"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/projects/dutruch.png"
                  alt="dutruch"
                  className="shadow-md"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/projects/maprimerenov.png"
                  alt="maprimerenov"
                  className="shadow-md"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <div className="flex justify-center mt-7">
              {[1, 2, 3, 4, 5, 6].map((value) => (
                <div
                  key={value}
                  className={`w-2 h-2 rounded-full ${
                    value - 1 === current ? "bg-slate-500" : "bg-slate-100"
                  } mx-1 transition duration-150 ease-in-out`}
                ></div>
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Realisations;
