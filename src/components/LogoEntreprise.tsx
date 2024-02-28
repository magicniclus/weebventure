import Image from "next/image";
import { useEffect, useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/littleCard";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LogoEntreprise = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
  useEffect(() => {
    const logoContainerGlobal = document.querySelector(
      ".logo-container-global"
    );

    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "easeOut" },
      scrollTrigger: {
        trigger: logoContainerGlobal,
        start: "top 90%",
        end: "top 50%",
        // markers: true,
      },
    });
    tl.fromTo(
      logoContainerGlobal,
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0 }
    );
  }, []);

  const entreprisePath = [
    "/logos/terabois.jpg",
    "/logos/duval.jpg",
    "/logos/acsd.jpg",
    "/logos/signature.jpg",
    "/logos/dutruch.jpg",
    "/logos/maprimerenov.jpg",
    "/logos/avenue-immo.jpg",
  ];
  return (
    <>
      <style jsx>{`
        .logo-container-one {
          width: 69px;
          height: auto;
        }
        .logo-container-two {
          width: 76px;
          height: auto;
        }
        .logo-container-three {
          width: 33px;
          height: auto;
        }
        .logo-container-four {
          width: 155px;
          height: auto;
        }
        .logo-container-five {
          width: 109px;
          height: auto;
        }
        .logo-container-six {
          width: 51px;
          height: auto;
        }
        .logo-container-seven {
          width: 97px;
          height: auto;
        }
      `}</style>
      <section className="w-full mt-10 md:mt-24 overflow-hidden">
        <div className="max-w-5xl mx-auto md:flex hidden justify-between items-center logo-container-global md:flex-nowrap">
          <div className="logo-container-one logo-container">
            <Image
              src={entreprisePath[0]}
              width={69}
              height={39}
              alt="terabois"
            />
          </div>
          <div className="logo-container-two logo-container">
            <Image src={entreprisePath[1]} width={76} height={52} alt="duval" />
          </div>
          <div className="logo-container-three logo-container">
            <Image src={entreprisePath[2]} width={33} height={40} alt="acsd" />
          </div>
          <div className="logo-container-four logo-container">
            <Image
              src={entreprisePath[3]}
              width={155}
              height={36}
              alt="signature"
            />
          </div>
          <div className="logo-container-five logo-container">
            <Image
              src={entreprisePath[4]}
              width={109}
              height={43}
              alt="dutruch"
            />
          </div>
          <div className="logo-container-six logo-container">
            <Image
              src={entreprisePath[5]}
              width={51}
              height={43}
              alt="maprimerenov"
            />
          </div>
          <div className="logo-container-seven logo-container">
            <Image
              src={entreprisePath[6]}
              width={97}
              height={31}
              alt="avenue-immo"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto md:hidden flex justify-center">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs"
            // onMouseEnter={plugin.current.stop}
            // onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {entreprisePath.map((path, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={path} alt={`Logo ${index + 1}`} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default LogoEntreprise;
