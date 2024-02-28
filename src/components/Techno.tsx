import { useEffect } from "react";

import Image from "next/image";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Techno = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".containerTechno",
        start: "top 90%",
        end: "top 50%",
        // markers: true,
      },
    });
    tl.fromTo(
      ".logo-container-techno",
      { autoAlpha: 0, y: 150 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "easeOut",
      }
    );
  }, []);

  return (
    <section className="w-full md:mt-14 containerTechno">
      <div className="max-w-5xl mx-auto py-4 px-2 flex justify-between flex-col items-center">
        <h2 className="text-textDev font-extrabold  text-[24px] mt-10 titleLeftText mx-auto">
          Nos technologies
        </h2>
        <div className="max-w-3xl flex-col w-full mx-auto md:flex hidden justify-between items-center logo-container-global md:flex-nowrap">
          <div className="w-full flex justify-between items-center mt-10">
            <div className="logo-container-one-techno logo-container-techno">
              <Image
                src="/logos/next.png"
                width={45.5}
                height={45.5}
                alt="next"
              />
            </div>
            <div className="logo-container-one-techno logo-container-techno">
              <Image
                src="/logos/react.png"
                width={45.5}
                height={45.5}
                alt="react"
              />
            </div>
            <div className="logo-container-one-techno logo-container-techno">
              <Image
                src="/logos/strapi.png"
                width={140}
                height={33}
                alt="strapi"
              />
            </div>
            <div className="logo-container-one-techno logo-container-techno">
              <Image
                src="/logos/shopify.png"
                width={127}
                height={48}
                alt="shopify"
              />
            </div>
            <div className="logo-container-one-techno logo-container-techno">
              <Image
                src="/logos/wordpress.png"
                width={45.5}
                height={45.5}
                alt="wordpress"
              />
            </div>
          </div>
          <div className="w-full flex justify-between items-center mt-7">
            <div className="logo-container-one  logo-container-techno-Two">
              <Image
                src="/logos/tailwind.png"
                width={117}
                height={41}
                alt="tailwind"
              />
            </div>
            <div className="logo-container-techno-one logo-container-techno-two">
              <Image
                src="/logos/symfony.png"
                width={36}
                height={44.5}
                alt="symfony"
              />
            </div>
            <div className="logo-container-one-techno logo-container-techno-two">
              <Image
                src="/logos/firebase.png"
                width={202.5}
                height={44.5}
                alt="firebase"
              />
            </div>
            <div className="logo-container-one  logo-container-techno-two">
              <Image
                src="/logos/google.png"
                width={37}
                height={29}
                alt="google"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Techno;
