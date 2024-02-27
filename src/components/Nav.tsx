"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { Button } from "./ui/button";

const Nav = () => {
  useEffect(() => {
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
    <header className="max-w-5xl mx-auto py-4 px-2 flex justify-between">
      <a href="/">
        <img src="/logos/logo.png" alt="Logo" className="h-[30px] w-[110px]" />
      </a>
      <div>
        <Button variant="perso">Nous contacter</Button>
      </div>
    </header>
  );
};

export default Nav;
