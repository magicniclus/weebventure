import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  useEffect(() => {
    const title = document.querySelector(".titleFAQ");
    const text = document.querySelector(".textFAQ");
    const button = document.querySelector(".buttonFAQ");

    // S'assurer que tous les éléments sont présents
    if (title && text && button) {
      const tl = gsap.timeline({
        defaults: { duration: 0.7, ease: "easeOut" },
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "top 50%",
          // markers: true,
        },
      });

      tl.fromTo(title, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
        .fromTo(text, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "<")
        .fromTo(button, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "<");
    }
  }, []);

  return (
    <section className="mt-20 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto py-4 px-2 flex justify-between">
        <div className="md:w-1/2 w-full">
          <h2 className="text-textDev font-extrabold text-[36px] mt-10 titleLeftText titleFAQ">
            F.A.Q
          </h2>
          <p className="text-[12px] w-10/12 mt-5 textFAQ">
            Vous avez un projet web? Nous avons les compétences pour vous
            accompagner, developper et optimiser votre idée. Nous devenons de
            véritable partenaire avec nos clients.{" "}
          </p>
        </div>
        <div className="md:w-1/2 w-full buttonFAQ">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Quels sont les technologies que vous proposez ?{" "}
              </AccordionTrigger>
              <AccordionContent>
                Nous travaillons aussi bien sur des site vitrine, des
                simulateur, des sites ecommerces. Soit en partant de rien (from
                scratch) soit en utilisant votre CMS préféré, nos équipes
                s’adapte à vos besoins afin de vous proposer un service
                sur-mesure du design au développement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Quels sont les technologies que vous proposez ?{" "}
              </AccordionTrigger>
              <AccordionContent>
                Nous travaillons aussi bien sur des site vitrine, des
                simulateur, des sites ecommerces. Soit en partant de rien (from
                scratch) soit en utilisant votre CMS préféré, nos équipes
                s’adapte à vos besoins afin de vous proposer un service
                sur-mesure du design au développement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Quels sont les technologies que vous proposez ?{" "}
              </AccordionTrigger>
              <AccordionContent>
                Nous travaillons aussi bien sur des site vitrine, des
                simulateur, des sites ecommerces. Soit en partant de rien (from
                scratch) soit en utilisant votre CMS préféré, nos équipes
                s’adapte à vos besoins afin de vous proposer un service
                sur-mesure du design au développement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Quels sont les technologies que vous proposez ?{" "}
              </AccordionTrigger>
              <AccordionContent>
                Nous travaillons aussi bien sur des site vitrine, des
                simulateur, des sites ecommerces. Soit en partant de rien (from
                scratch) soit en utilisant votre CMS préféré, nos équipes
                s’adapte à vos besoins afin de vous proposer un service
                sur-mesure du design au développement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Quels sont les technologies que vous proposez ?{" "}
              </AccordionTrigger>
              <AccordionContent>
                Nous travaillons aussi bien sur des site vitrine, des
                simulateur, des sites ecommerces. Soit en partant de rien (from
                scratch) soit en utilisant votre CMS préféré, nos équipes
                s’adapte à vos besoins afin de vous proposer un service
                sur-mesure du design au développement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Quels sont les technologies que vous proposez ?{" "}
              </AccordionTrigger>
              <AccordionContent>
                Nous travaillons aussi bien sur des site vitrine, des
                simulateur, des sites ecommerces. Soit en partant de rien (from
                scratch) soit en utilisant votre CMS préféré, nos équipes
                s’adapte à vos besoins afin de vous proposer un service
                sur-mesure du design au développement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                Quels sont les technologies que vous proposez ?{" "}
              </AccordionTrigger>
              <AccordionContent>
                Nous travaillons aussi bien sur des site vitrine, des
                simulateur, des sites ecommerces. Soit en partant de rien (from
                scratch) soit en utilisant votre CMS préféré, nos équipes
                s’adapte à vos besoins afin de vous proposer un service
                sur-mesure du design au développement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                Quels sont les technologies que vous proposez ?{" "}
              </AccordionTrigger>
              <AccordionContent>
                Nous travaillons aussi bien sur des site vitrine, des
                simulateur, des sites ecommerces. Soit en partant de rien (from
                scratch) soit en utilisant votre CMS préféré, nos équipes
                s’adapte à vos besoins afin de vous proposer un service
                sur-mesure du design au développement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                Quels sont les technologies que vous proposez ?{" "}
              </AccordionTrigger>
              <AccordionContent>
                Nous travaillons aussi bien sur des site vitrine, des
                simulateur, des sites ecommerces. Soit en partant de rien (from
                scratch) soit en utilisant votre CMS préféré, nos équipes
                s’adapte à vos besoins afin de vous proposer un service
                sur-mesure du design au développement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>
                Quels sont les technologies que vous proposez ?{" "}
              </AccordionTrigger>
              <AccordionContent>
                Nous travaillons aussi bien sur des site vitrine, des
                simulateur, des sites ecommerces. Soit en partant de rien (from
                scratch) soit en utilisant votre CMS préféré, nos équipes
                s’adapte à vos besoins afin de vous proposer un service
                sur-mesure du design au développement.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
