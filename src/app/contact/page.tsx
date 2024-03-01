"use client";

import { useEffect } from "react";

import Image from "next/image";

import Footer from "@/components/Footer";
import Form from "@/components/Form";
import React from "react";
import Nav from "../../components/Nav";
import Logo from "../../components/svg/Logo";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const entreprisePath = [
    "/logos/terabois.jpg",
    "/logos/duval.jpg",
    "/logos/acsd.jpg",
    "/logos/signature.jpg",
    "/logos/dutruch.jpg",
    "/logos/maprimerenov.jpg",
    "/logos/avenue-immo.jpg",
  ];

  useEffect(() => {
    gsap.set(
      ".titleForm, .sustitleForm, .stepOneForm, .stepOneMailForm, .stepTwoForm, .stepTwoMailForm, .stepThreeForm, .stepThreeMailForm, .expertiseFrom, .technoOneForm, .technoTwoForm, .technoThreeForm, .confience, .confienceOneForm",
      { opacity: 0, y: 50 }
    );
    gsap.set(".lignOneForm, .lignTwoForm", { opacity: 0, x: -150 });
    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "easeOut" },
      scrollTrigger: {
        trigger: ".titleForm",
        start: "top 80%",
        end: "top 50%",
        // markers: true,
      },
    });
    tl.add(
      gsap.fromTo(".titleForm", { opacity: 0, y: 50 }, { opacity: 1, y: 0 }),
      0
    )
      .add(
        gsap.fromTo(
          ".sustitleForm",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 }
        ),
        0.2
      )
      .add(
        gsap.fromTo(
          ".stepOneForm",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 }
        ),
        0.2
      )
      .add(
        gsap.fromTo(
          ".stepOneMailForm",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 }
        ),
        0.2
      )
      .add(
        gsap.fromTo(
          ".stepTwoForm",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 }
        ),
        0.2
      )
      .add(
        gsap.fromTo(
          ".stepTwoMailForm",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 }
        ),
        0.2
      )
      .add(
        gsap.fromTo(
          ".stepThreeForm",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 }
        ),
        0.2
      )
      .add(
        gsap.fromTo(
          ".stepThreeMailForm",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 }
        ),
        0.2
      )
      .add(
        gsap.fromTo(
          ".lignOneForm",
          { opacity: 0, x: -150 },
          { opacity: 1, x: 0 }
        ),
        0.2
      )
      .add(
        gsap.fromTo(
          ".expertiseFrom",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 }
        ),
        "<"
      )
      .add(
        gsap.fromTo(
          ".technoOneForm",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 }
        ),
        "<"
      )
      .add(
        gsap.fromTo(
          ".technoTwoForm",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 }
        ),
        "<"
      )
      .add(
        gsap.fromTo(
          ".technoThreeForm",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 }
        ),
        "<"
      )
      .add(
        gsap.fromTo(
          ".lignTwoForm",
          { opacity: 0, x: -150 },
          { opacity: 1, x: 0 }
        ),
        "0.2"
      )
      .add(
        gsap.fromTo(".confience", { opacity: 0, y: 50 }, { opacity: 1, y: 0 }),
        "<"
      )
      .add(
        gsap.fromTo(
          ".confienceOneForm",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 }
        ),
        "0.2"
      );
  }, []);

  if (isLoading) {
    return (
      <>
        <main
          className={"flex min-h-screen flex-col items-center justify-center"}
        >
          <Logo />
        </main>
      </>
    );
  }
  return (
    <>
      <style jsx>{`
        .logo-container-one {
          width: 69px;
          height: auto;
        }
        .logo-container-two {
          width: 53px;
          height: auto;
        }
        .logo-container-three {
          width: 33px;
          height: auto;
        }
        .logo-container-four {
          width: 100px;
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
          width: 80px;
          height: auto;
        }
      `}</style>
      <Nav contact={false} />
      <main className="w-full min-h-[calc(100vh-20px)]">
        <div className="max-w-5xl mx-auto py-4 px-2 flex md:flex-row flex-col">
          <div className="mt-16 md:w-1/2 w-full md:pr-16">
            <h1 className="text-textDev text-[32px] font-extrabold titleForm">
              Webventure vous accompagne
            </h1>
            <p className="text-[14px] sustitleCTA mt-14 font-bold sustitleForm">
              Pour toute question ou demande spécifique, remplissez ce
              formulaire, un de nos experts vous répondra dans les plus brefs
              délais.
            </p>
            <p className="text-[14px] sustitleCTA mt-7 stepOneForm">
              Pour toute demande commerciale vous pouvez aussi nous contacter à
              l’adresse suivante:
            </p>
            <a
              className="text-[14px] sustitleCTA font-bold text-primaryDev stepOneMailForm"
              href="mailto:contact@webventure-agency.fr"
            >
              contact@webventure-agency.fr
            </a>
            <p className="text-[14px] sustitleCTA mt-7 stepTwoForm ">
              Pour toute demande de partenariat vous pouvez nous contacter à
              l’adresse suivante:
            </p>
            <a
              className="text-[14px] sustitleCTA font-bold text-primaryDev stepTwoMailForm"
              href="mailto:contact@webventure-agency.fr"
            >
              partners@webventure-agency.fr
            </a>
            <p className="text-[14px] sustitleCTA mt-7  stepThreeForm">
              Pour toute demande de recrutement vous pouvez nous contacter à
              l’adresse suivante:
            </p>
            <a
              className="text-[14px] sustitleCTA font-bold text-primaryDev stepThreeMailForm"
              href="mailto:contact@webventure-agency.fr"
            >
              talent@webventure-agency.fr
            </a>
            <div className="w-full flex-col md:flex hidden">
              <div className=" flex items-center mt-14 overflow-hidden">
                <div className="w-[70px] h-[1px] bg-textDev text-[14px] lignOneForm"></div>
                <p className="ml-2 expertiseFrom">
                  L&apos;EXPERTISE WEBVENTURE
                </p>
              </div>
              <div className="">
                <div className="flex items-center w-full justify-between mt-7 technoOneForm">
                  <div className="logo-container-one-techno">
                    <Image
                      src="/logos/next.png"
                      width={45.5}
                      height={45.5}
                      alt="next"
                    />
                  </div>
                  <div className="logo-container-o">
                    <Image
                      src="/logos/react.png"
                      width={45.5}
                      height={45.5}
                      alt="react"
                    />
                  </div>
                  <div className="logo-container-o">
                    <Image
                      src="/logos/strapi.png"
                      width={140}
                      height={33}
                      alt="strapi"
                    />
                  </div>
                </div>
                <div className="flex items-center w-full justify-between mt-7 technoTwoForm">
                  <div className="logo-container-o">
                    <Image
                      src="/logos/shopify.png"
                      width={127}
                      height={48}
                      alt="shopify"
                    />
                  </div>
                  <div className="logo-container-o">
                    <Image
                      src="/logos/wordpress.png"
                      width={45.5}
                      height={45.5}
                      alt="wordpress"
                    />
                  </div>
                  <div className="logo-container-o">
                    <Image
                      src="/logos/tailwind.png"
                      width={117}
                      height={41}
                      alt="tailwind"
                    />
                  </div>
                </div>
                <div className="flex items-center w-full justify-between mt-7 technoThreeForm">
                  <div className="logo-container-techno-on">
                    <Image
                      src="/logos/symfony.png"
                      width={36}
                      height={44.5}
                      alt="symfony"
                    />
                  </div>
                  <div className="logo-container-one-techn">
                    <Image
                      src="/logos/firebase.png"
                      width={202.5}
                      height={44.5}
                      alt="firebase"
                    />
                  </div>
                  <div className="logo-container-one">
                    <Image
                      src="/logos/google.png"
                      width={37}
                      height={29}
                      alt="google"
                    />
                  </div>
                </div>
              </div>
              <div className=" flex items-center mt-14">
                <div className="w-[70px] h-[1px] bg-textDev text-[14px] lignTwoForm"></div>
                <p className="ml-2 confience">IL NOUS ONT FAIT CONFIANCE</p>
              </div>
              <div className="">
                <div className="flex items-center w-full justify-between mt-7 confienceOneForm">
                  <div className="logo-container-one logo-container">
                    <Image
                      src={entreprisePath[0]}
                      width={138}
                      height={78}
                      alt="terabois"
                    />
                  </div>
                  <div className="logo-container-two logo-container">
                    <Image
                      src={entreprisePath[1]}
                      width={53}
                      height={52}
                      alt="duval"
                    />
                  </div>
                  <div className="logo-container-four logo-container">
                    <Image
                      src={entreprisePath[3]}
                      width={100}
                      height={36}
                      alt="signature"
                    />
                  </div>
                  <div className="logo-container-seven logo-container">
                    <Image
                      src={entreprisePath[6]}
                      width={80}
                      height={80}
                      alt="avenue-immo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 md:w-1/2 w-full md:pl-4">
            <Form />
          </div>
          <div className="md:hidden flex flex-col">
            <div className="items-center mt-14 overflow-hidden flex">
              <div className="w-[70px] h-[1px] bg-textDev text-[14px] lignOneForm"></div>
              <p className="ml-2 expertiseFrom">L&apos;EXPERTISE WEBVENTURE</p>
            </div>
            <div className="">
              <div className="flex items-center w-full justify-between mt-7 technoOneForm max-w-[500px] mx-auto">
                <div className="logo-container-one-techno">
                  <Image
                    src="/logos/next.png"
                    width={45.5}
                    height={45.5}
                    alt="next"
                  />
                </div>
                <div className="logo-container-o">
                  <Image
                    src="/logos/react.png"
                    width={45.5}
                    height={45.5}
                    alt="react"
                  />
                </div>
                <div className="logo-container-o">
                  <Image
                    src="/logos/strapi.png"
                    width={140}
                    height={33}
                    alt="strapi"
                  />
                </div>
              </div>
              <div className="flex items-center w-full justify-between mt-7 technoTwoForm max-w-[500px] mx-auto">
                <div className="logo-container-o">
                  <Image
                    src="/logos/shopify.png"
                    width={127}
                    height={48}
                    alt="shopify"
                  />
                </div>
                <div className="logo-container-o">
                  <Image
                    src="/logos/wordpress.png"
                    width={45.5}
                    height={45.5}
                    alt="wordpress"
                  />
                </div>
                <div className="logo-container-o">
                  <Image
                    src="/logos/tailwind.png"
                    width={117}
                    height={41}
                    alt="tailwind"
                  />
                </div>
              </div>
              <div className="flex items-center w-full justify-between mt-7 max-w-[500px] mx-auto technoThreeForm">
                <div className="logo-container-techno-on">
                  <Image
                    src="/logos/symfony.png"
                    width={36}
                    height={44.5}
                    alt="symfony"
                  />
                </div>
                <div className="logo-container-one-techn">
                  <Image
                    src="/logos/firebase.png"
                    width={202.5}
                    height={44.5}
                    alt="firebase"
                  />
                </div>
                <div className="logo-container-one">
                  <Image
                    src="/logos/google.png"
                    width={37}
                    height={29}
                    alt="google"
                  />
                </div>
              </div>
            </div>
            <div className=" flex items-center mt-14">
              <div className="w-[70px] h-[1px] bg-textDev text-[14px] lignTwoForm"></div>
              <p className="ml-2 confience">IL NOUS ONT FAIT CONFIANCE</p>
            </div>
            <div className="">
              <div className="flex items-center w-full justify-between mt-7 confienceOneForm max-w-[500px] mx-auto">
                <div className="logo-container-one logo-container">
                  <Image
                    src={entreprisePath[0]}
                    width={138}
                    height={78}
                    alt="terabois"
                  />
                </div>
                <div className="logo-container-two logo-container">
                  <Image
                    src={entreprisePath[1]}
                    width={53}
                    height={52}
                    alt="duval"
                  />
                </div>
                <div className="logo-container-four logo-container">
                  <Image
                    src={entreprisePath[3]}
                    width={100}
                    height={36}
                    alt="signature"
                  />
                </div>
                <div className="logo-container-seven logo-container">
                  <Image
                    src={entreprisePath[6]}
                    width={80}
                    height={80}
                    alt="avenue-immo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
