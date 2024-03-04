import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";

const Hero = () => {
  const imageRef = useRef(null);
  const ecommerceImageRef = useRef(null);

  const imageOptions = [
    { name: "ECOMMERCE", path: "/background/ecommerce.jpg" },
    { name: "SITE VITRINE", path: "/background/vitrine.jpg" },
    { name: "LANDING PAGE", path: "/background/dev.jpg" },
    { name: "SIMULATEUR", path: "/background/simulateur.jpg" },
  ];
  const [hoverStates, setHoverStates] = useState(
    imageOptions.reduce((acc, item) => ({ ...acc, [item.name]: false }), {})
  );

  const [activeImage, setActiveImage] = useState(imageOptions[0].path);
  const [prevImage, setPrevImage] = useState("");

  useEffect(() => {
    if (prevImage) {
      // Faire disparaître l'ancienne image et la déplacer vers le haut
      gsap.fromTo(
        ".prevImage",
        { y: 0, opacity: 1 },
        { opacity: 0, duration: 0.5 }
      );
    }

    // Attendre que l'ancienne image commence à disparaître avant de commencer l'animation de la nouvelle
    gsap.fromTo(
      ".activeImage",
      { opacity: 0 }, // Commence avec une position plus basse et invisible
      { y: 0, opacity: 1, duration: 0.5 } // Termine à sa position normale et devient visible
    );
  }, [activeImage, prevImage]);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, { opacity: 0, duration: 2 }).then(() => {
        setActiveImage(activeImage);
        gsap.to(imageRef.current, { opacity: 1, duration: 2 });
      });
    }
  }, [activeImage]);

  useEffect(() => {
    gsap.set(ecommerceImageRef.current, { opacity: 0 }); //
  }, []);

  const handleMouseEnter = (path: string, name: string) => {
    if (path !== activeImage) {
      setPrevImage(activeImage); // Définir l'image actuelle comme précédente
      setActiveImage(path); // Mettre à jour l'image active
      setHoverStates((prevState) => ({ ...prevState, [name]: true }));
    }
  };

  // Fonction pour gérer la sortie de la souris d'une div spécifique
  const handleMouseLeave = (itemName: string) => {
    setHoverStates({ ...hoverStates, [itemName]: false });
  };

  const animAllElements = () => {
    gsap.fromTo(
      ".vignette",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".title",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        delay: 0.2,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".text",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        delay: 0.4,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".tagOne",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        delay: 0.6,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".tagTwo",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        delay: 0.7,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".tagThree",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        delay: 0.8,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".button",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        delay: 1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".imageContainer",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 1.2,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".lignContainer",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 1.5,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".vertical-text",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 1.2,
        stagger: 0.1,
        ease: "power1",
      }
    );
    gsap.fromTo(
      ".lignRight::before",
      {
        y: -1000,
      },
      {
        y: 0,
        duration: 0.5,
        delay: 1.7,
        ease: "power2.out",
      }
    );
  };

  useEffect(() => {
    animAllElements();
    // Initialisation des éléments avec gsap.set
    gsap.set(
      ".vignette, .title, .text, .tagOne, .tagTwo, .tagThree, .button, .imageContainer, .lignContainer, .vertical-text, .lignRight::before",
      { opacity: 0 }
    );
  }, []);

  return (
    <>
      {/* Styles et autres éléments */}
      <style jsx>{`
        .text-highlight {
          display: inline-block;
          position: relative;
          z-index: 2;
        }

        .text-highlight::before {
          content: "";
          position: absolute;
          bottom: 12px;
          left: 0;
          width: 100%;
          height: 5px;
          background-color: #5174b4;
          z-index: -1;
        }
        .imageTransition {
          transition: opacity 1s ease-in-out;
          position: absolute;
          inset: 0;
        }
        .overlay-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            #5174b4 100%
          );
          z-index: 19;
        }

        .container-lign-right {
          z-index: 20;
        }

        .vertical-text {
          position: absolute;
          bottom: 10px;
          right: 10px;
          writing-mode: vertical-lr;
          transform: translateX(100%);
          white-space: nowrap;
          z-index: 31;
          color: white;
          transition: transform 0.3s ease;
          opacity: 0;
        }

        .lignRight:hover .vertical-text {
          transform: translateX(100%);
          color: #f7f8fb;
        }

        .lignRight {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          z-index: 50;
          height: 100%;
        }

        .lignRight::before {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          width: 1px;
          height: 100%;
          background: white;
          z-index: 70;
          transition: background-color 0.5s ease;
        }

        .lignRight:hover::before {
          background: linear-gradient(to top, #5174b4 0%, white 100%);
          background-size: 100% 100%;
          background-repeat: no-repeat;
          animation: fillUpGradient 1s ease forwards;
        }
        @keyframes fillDownGradient {
          0% {
            background: linear-gradient(to top, #5174b4 0%, white 100%);
            background-size: 100% 100%;
          }
          100% {
            background: white;
            background-size: 100% 0%;
          }
        }

        /* Classe pour l'animation inverse */
        .lignRight.reverseAnimation::before {
          animation: fillDownGradient 1s ease forwards;
        }
        @keyframes fillDownGradient {
          0% {
            background: linear-gradient(to top, #5174b4 0%, white 100%);
            background-size: 100% 100%;
          }
          100% {
            background: white;
            background-size: 100% 0%;
          }
        }

        .lignRight.reverseAnimation::before {
          animation: fillDownGradient 1s ease forwards;
        }

        @keyframes fillUpGradient {
          0% {
            background: white;
            background-size: 100% 0%;
          }
          50% {
            background: linear-gradient(to top, #5174b4 0%, white 100%);
            background-size: 100% 100%;
          }
        }
        @keyframes fillUpFromBottom {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }

        .lignRight::before {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          width: 1px;
          height: 100%;
          background-color: white;
          transform-origin: bottom;
          animation: fillUpFromBottom 1.7s ease forwards 1.7s;
        }
      `}</style>
      <div className="relative w-full bg-accentDev/10 md:pb-10">
        <Nav />
        <section className="flex flex-col items-center justify-between max-w-5xl pt-16 mx-auto md:px-2 md:py-4 md:pt-0 md:flex-row">
          {/* Section gauche */}
          <div className="w-full px-2 md:w-5/12 md:px-0">
            <div className="px-3 py-1 rounded-full border border-primaryDev text-primaryDev max-w-max text-[12px] md:mt-10 bg-primaryDev/5 vignette">
              Agence web design & développement web
            </div>
            <h1 className="text-textDev font-extrabold text-[36px] mt-10 title">
              Nous développons votre{" "}
              <span className="text-highlight">outil Web.</span>{" "}
              <span className="text-accentDev">
                Vous développez votre activité.
              </span>
            </h1>
            <p className="text-[12px] w-10/12 mt-3 text">
              Nos spécialistes transforment vos idées en réalité numérique, en
              créant des outils web sur-mesure pour booster votre croissance.
            </p>
            <div className="text-[12px] flex mt-3">
              <p className="p-1 px-2 rounded-full bg-primaryDev/20 max-w-max tagOne">
                #DESIGN
              </p>
              <p className="p-1 px-2 ml-3 rounded-full bg-primaryDev/20 max-w-max tagTwo">
                #DEVELOPPEMENT
              </p>
              <p className="p-1 px-2 ml-3 rounded-full bg-primaryDev/20 max-w-max tagThree">
                #MAINTENANCE
              </p>
            </div>
            <div className="flex mt-10 button">
              <a
                href="/contact"
                className="flex items-center px-4 py-2 text-white rounded-full bg-primaryDev group max-w-max"
              >
                Votre projet{" "}
                <ArrowRightIcon className="w-4 h-auto transition duration-150 ease-in-out group-hover:translate-x-2" />
              </a>
              <a
                href="#projects"
                className="flex items-center px-4 py-2 ml-3 bg-transparent border rounded-full border-primaryDev text-primaryDev group max-w-max"
              >
                Projets récents{" "}
                <ArrowRightIcon className="w-4 h-auto transition duration-150 ease-in-out group-hover:translate-x-2" />
              </a>
            </div>
          </div>

          {/* Section droite avec images */}
          <div className="md:w-7/12 w-full md:mt-0 mt-14 min-h-[400px] relative">
            <div className="relative h-[400px] overflow-hidden imageContainer">
              {/* Image précédente */}
              {prevImage && (
                <Image
                  src={prevImage}
                  alt="Previous Image"
                  layout="fill"
                  objectFit="cover"
                  className="prevImage"
                  style={{ position: "absolute", zIndex: 1 }}
                />
              )}
              {/* Image active */}
              <Image
                src={activeImage}
                alt="Active Image"
                layout="fill"
                objectFit="cover"
                className="activeImage"
                style={{ position: "absolute", zIndex: 2 }}
              />
              {/* Votre logique de survol ici */}
            </div>
            <div className="overlay-gradient imageContainer"></div>
            {/* Vos éléments de texte verticaux ici */}
            <div className="absolute inset-0 flex items-end justify-between w-full">
              {imageOptions.map((item) => (
                <div
                  key={item.name}
                  className={`${
                    item.name
                  } lignContainer flex-1 lignRight relative w-1/4 ${
                    hoverStates[item.name as keyof typeof hoverStates]
                      ? ""
                      : "reverseAnimation"
                  }`}
                  onMouseEnter={() => handleMouseEnter(item.path, item.name)} // Assurez-vous d'utiliser item.path ici
                  onMouseLeave={() => handleMouseLeave(item.name)}
                >
                  <p className={`vertical-text ${item.name + "-text"}`}>
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
