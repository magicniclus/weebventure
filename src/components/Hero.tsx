import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";

const Hero = () => {
  const devImageRef = useRef(null);
  const imageRef = useRef(null);
  const ecommerceImageRef = useRef(null);

  const imageOptions = [
    { name: "ECOMMERCE", path: "/background/ecommerce.jpg" },
    { name: "SITE VITRINE", path: "/background/vitrine.jpg" },
    { name: "LANDING PAGE", path: "/background/dev.jpg" },
    { name: "SIMULATEURS", path: "/background/simulateur.jpg" },
  ];

  const [activeImage, setActiveImage] = useState(imageOptions[0].path);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, { opacity: 0, duration: 2 }).then(() => {
        setActiveImage(activeImage);
        gsap.to(imageRef.current, { opacity: 1, duration: 2 });
      });
    }
  }, [activeImage]);

  const handleMouseEnter = (imagePath: string) => {
    setActiveImage(imagePath);
  };

  useEffect(() => {
    gsap.set(ecommerceImageRef.current, { opacity: 0 }); //
  }, []);

  const handleMouseLeave = () => {
    gsap.to(devImageRef.current, { opacity: 1, duration: 1 });
    gsap.to(ecommerceImageRef.current, { opacity: 0, duration: 1 });
  };

  return (
    <>
      {/* Styles et autres éléments */}
      <style jsx>{`
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
          right: 30px;
          writing-mode: vertical-lr;
          transform: translateX(100%);
          white-space: nowrap;
          z-index: 31;
          color: white;
          transition: transform 0.3s ease;
        }
        .lignRight:hover .vertical-text {
          transform: translateX(100%) scale(1.1);
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
          background-color: white;
          transition: background-color 0.5s ease;
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
      `}</style>
      <div className="w-full relative bg-accentDev/10 pb-10">
        <Nav />
        <section className="max-w-5xl mx-auto py-4 px-2 flex justify-between md:flex-row flex-col items-center">
          {/* Section gauche */}
          <div className="md:w-5/12 w-full">
            <div className="px-3 py-1 rounded-full border border-primaryDev text-primaryDev max-w-max text-[12px] md:mt-10 bg-primaryDev/5">
              Agence web design & développement web
            </div>
            <h1 className="text-textDev font-extrabold text-[36px] mt-10">
              Nous créons votre{" "}
              <span className="text-highlight">outils Web.</span> Vous
              développez votre activité.
            </h1>
            <p className="text-[12px] w-10/12 mt-3">
              Nos experts optimisent votre acquisition en développement vos
              outils web et marketing afin de trouver les meilleurs leviers de
              croissance.
            </p>
            <div className="text-[12px] flex mt-3">
              <p className="p-1 px-2 bg-primaryDev/20 max-w-max rounded-full">
                #DESIGN
              </p>
              <p className="p-1 px-2 bg-primaryDev/20 max-w-max rounded-full ml-3">
                #DEVELOPPEMENT
              </p>
              <p className="p-1 px-2 bg-primaryDev/20 max-w-max rounded-full ml-3">
                #MAINTENANCE
              </p>
            </div>
            <div className="mt-10">
              <Button variant="perso">Votre projet</Button>
              <Button variant="persoSecondary" className="ml-3">
                Projets récents
              </Button>
            </div>
          </div>

          {/* Section droite avec images */}
          <div className="md:w-7/12 w-full md:mt-0 mt-14 min-h-[400px] relative">
            <Image
              src={activeImage}
              alt="Dynamic Image"
              layout="fill"
              objectFit="cover"
              className="imageTransition"
            />
            <div className="overlay-gradient"></div>
            {/* Vos éléments de texte verticaux ici */}
            <div className="absolute inset-0 flex justify-between items-end w-full">
              {imageOptions.map((item) => (
                <div
                  key={item.name}
                  className="flex-1 lignRight relative w-1/4"
                  onMouseEnter={() => setActiveImage(item.path)}
                >
                  <p className="vertical-text">{item.name}</p>
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
