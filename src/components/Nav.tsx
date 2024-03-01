/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import gsap from "gsap";
import { useEffect } from "react";

const Nav = ({ contact = true }) => {
  useEffect(() => {
    gsap.set("header", { y: -100, opacity: 0 });
    gsap.to("mainNav", {
      opacity: 1,
      duration: 0.5,
      delay: 1.2,
      ease: "power4.out",
    });
    gsap.fromTo(
      "header",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 1.2,
        ease: "power4.out",
      }
    );
  }, []);
  return (
    <header className="max-w-5xl mx-auto py-4 px-2 flex justify-between opacity-0 mainNav">
      <div className="flex items-center">
        <a href="/">
          <img
            src="/logos/logo.png"
            alt="Logo"
            className="h-[30px] w-[110px]"
          />
        </a>
        <div className="px-1 border rounded-md border-primaryDev max-h-[17px]">
          <p className="text-primaryDev text-[9px]">On recrute</p>
        </div>
      </div>
      {contact && (
        <div>
          <a
            href="/contact"
            className="flex items-center text-white bg-primaryDev py-2 px-4 rounded-full group"
          >
            Nous contacter{" "}
            <ArrowRightIcon className="w-4 h-auto group-hover:translate-x-2 transition duration-150 ease-in-out" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Nav;
