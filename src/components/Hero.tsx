import Image from "next/image";
import Nav from "./Nav";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <>
      <style jsx>{`
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
          z-index: 20; /* S'assure qu'il est au-dessus de l'image mais sous le texte */
        }

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

        .lignRight {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          z-index: 30;
        }

        .lignRight::before {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          width: 2px;
          height: 100%;
          background-color: white;
          transition: background-color 0.5s ease;
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

        .lignRight::before {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          width: 2px; /* Largeur de la ligne à droite */
          height: 100%; /* Hauteur initiale à 100% */
          background: white; /* Arrière-plan initial blanc */
          z-index: 30;
          transition: background-color 0.5s ease;
        }

        .lignRight:hover::before {
          background: linear-gradient(to top, #5174b4 0%, white 100%);
          background-size: 100% 100%;
          background-repeat: no-repeat;
          animation: fillUpGradient 0.5s ease forwards;
        }

        @keyframes fillUpGradient {
          0% {
            background: white;
            background-size: 100% 0%;
          }
          100% {
            background: linear-gradient(to top, #5174b4 0%, white 100%);
            background-size: 100% 100%;
          }
        }
      `}</style>

      <div className="w-full relative bg-accentDev/10 pb-10">
        <Nav />
        <div className="max-w-5xl mx-auto py-4 px-2 flex justify-between md:flex-row flex-col items-center">
          <div className="md:w-5/12 w-full">
            <div className="px-3 py-1 rounded-full border border-primaryDev text-primaryDev max-w-max text-[12px] md:mt-10 bg-primaryDev/5">
              Agence web design & développement web
            </div>
            <h1 className="text-textDev font-extrabold text-[36px] mt-10">
              Nous créons votre{" "}
              <span className="text-highlight">outils Web.</span>{" "}
              <span className="text-primaryDev">
                Vous développez votre activité.
              </span>
            </h1>
            <p className="text-[12px] w-10/12 mt-3">
              Nos experts optimisent votre acquisition en développement vos
              outils web et marketing afin de trouver les meilleurs levier de
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
          <div className="md:w-7/12 w-full md:mt-0 mt-14">
            <div className="relative">
              <Image
                src="/background/dev.jpg"
                alt="hero"
                width={600}
                height={400}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="w-full h-full absolute top-0 left-0 flex">
                <div className="overlay-gradient"></div>
                <div className="h-full w-1/4 lignRight relative">
                  <p className="vertical-text">ECOMMERCE</p>
                </div>
                <div className="h-full w-1/4 lignRight relative">
                  <p className="vertical-text">SITE VITRINE</p>
                </div>
                <div className="h-full w-1/4 lignRight relative">
                  <p className="vertical-text">LANDING PAGE</p>
                </div>
                <div className="h-full w-1/4 lignRight relative">
                  <p className="vertical-text">SIMULATEURS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
