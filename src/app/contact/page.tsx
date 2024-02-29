"use client";

import Image from "next/image";

import Footer from "@/components/Footer";
import Form from "@/components/Form";
import React from "react";
import Nav from "../../components/Nav";
import Logo from "../../components/svg/Logo";

const Page = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  // useEffect(() => {
  //   // Liste des chemins d'accès des images à précharger
  //   const imagePaths = [
  //     "/logos/logo.png",
  //     "/logos/avenue-immo.jpg",
  //     "/logos/dutruch.jpg",
  //     "/logos/duval.jpg",
  //     "/logos/maprimerenov.jpg",
  //     "/logos/signature.jpg",
  //     "/background/dev.jpg",
  //     "/background/ecommerce.jpg",
  //     "/background/simulateur.jpg",
  //     "/background/vitrine.jpg",
  //     "/background/next.png",
  //     "/background/react.png",
  //     "/background/strapi.png",
  //     "/background/shopify.png",
  //     "/background/wordpress.png",
  //     "/background/tailwind.png",
  //     "/background/symphony.png",
  //     "/background/firebase.png",
  //     "/background/google.png",
  //   ];

  //   // Créez des promesses pour le chargement de chaque image
  //   const imagePromises = imagePaths.map((path) => {
  //     return new Promise((resolve) => {
  //       const img = new Image(path); // Remove type annotation and pass path argument
  //       img.onload = resolve;
  //     });
  //   });

  //   // Attendre le chargement de toutes les images
  //   Promise.all(imagePromises).then(() => {
  //     setTimeout(() => {
  //       // setIsLoading(false); // Toutes les images sont chargées, mettre fin au chargement
  //     }, 1800);
  //   });
  // }, []);

  const entreprisePath = [
    "/logos/terabois.jpg",
    "/logos/duval.jpg",
    "/logos/acsd.jpg",
    "/logos/signature.jpg",
    "/logos/dutruch.jpg",
    "/logos/maprimerenov.jpg",
    "/logos/avenue-immo.jpg",
  ];

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
            <h1 className="text-textDev text-[32px] font-extrabold">
              Webventure vous accompagne
            </h1>
            <p className="text-[14px] sustitleCTA mt-14 font-bold">
              Pour toute question ou demande spécifique, remplissez ce
              formulaire, un de nos experts vous répondra dans les plus brefs
              délais.
            </p>
            <p className="text-[14px] sustitleCTA mt-7 ">
              Pour toute demande commerciale vous pouvez aussi nous contacter à
              l’adresse suivante:
            </p>
            <a
              className="text-[14px] sustitleCTA font-bold text-primaryDev"
              href="mailto:contact@webventure-agency.fr"
            >
              contact@webventure-agency.fr
            </a>
            <p className="text-[14px] sustitleCTA mt-7 ">
              Pour toute demande de partenariat vous pouvez nous contacter à
              l’adresse suivante:
            </p>
            <a
              className="text-[14px] sustitleCTA font-bold text-primaryDev"
              href="mailto:contact@webventure-agency.fr"
            >
              partners@webventure-agency.fr
            </a>
            <p className="text-[14px] sustitleCTA mt-7 ">
              Pour toute demande de recrutement vous pouvez nous contacter à
              l’adresse suivante:
            </p>
            <a
              className="text-[14px] sustitleCTA font-bold text-primaryDev"
              href="mailto:contact@webventure-agency.fr"
            >
              talent@webventure-agency.fr
            </a>
            <div className="w-full flex-col md:flex hidden">
              <div className=" flex items-center mt-14">
                <div className="w-[70px] h-[1px] bg-textDev text-[14px]"></div>
                <p className="ml-2">L&apos;EXPERTISE WEBVENTURE</p>
              </div>
              <div className="">
                <div className="flex items-center w-full justify-between mt-7">
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
                </div>
                <div className="flex items-center w-full justify-between mt-3">
                  <div className="logo-container-one">
                    <Image
                      src="/logos/tailwind.png"
                      width={117}
                      height={41}
                      alt="tailwind"
                    />
                  </div>
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
                <div className="w-[70px] h-[1px] bg-textDev text-[14px]"></div>
                <p className="ml-2">IL NOUS ONT FAIT CONFIANCE</p>
              </div>
              <div className="">
                <div className="flex items-center w-full justify-between mt-7">
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
          <div className="w-full flex-col md:hidden flex">
            <div className=" flex items-center mt-14">
              <div className="w-[70px] h-[1px] bg-textDev text-[14px]"></div>
              <p className="ml-2">L&apos;EXPERTISE WEBVENTURE</p>
            </div>
            <div className="">
              <div className="flex items-center w-full justify-between mt-7">
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
              </div>
              <div className="flex items-center w-full justify-between mt-3">
                <div className="logo-container-one">
                  <Image
                    src="/logos/tailwind.png"
                    width={117}
                    height={41}
                    alt="tailwind"
                  />
                </div>
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
              <div className="w-[70px] h-[1px] bg-textDev text-[14px]"></div>
              <p className="ml-2">IL NOUS ONT FAIT CONFIANCE</p>
            </div>
            <div className="">
              <div className="flex items-center w-full justify-between mt-7">
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
