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
        .fromTo(button, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "<0.4");
    }
  }, []);

  return (
    <section className="w-full overflow-hidden md:mt-20" id="FAQ">
      <div className="flex flex-col justify-between max-w-5xl px-2 py-4 mx-auto md:flex-row">
        <div className="w-full md:w-1/2">
          <h2 className="text-textDev font-extrabold text-[24px] mt-10 titleLeftText titleFAQ">
            F.A.Q
          </h2>
          <p className="text-[12px] w-10/12 mt-5 textFAQ">
            Dans cette section FAQ, vous trouverez des réponses aux questions
            les plus fréquemment posées sur nos services. Notre objectif est de
            vous éclairer sur notre processus, de clarifier nos offres et de
            vous aider à mieux comprendre comment nous pouvons transformer votre
            projet web en succès. N&apos;hésitez pas à parcourir ces
            informations pour découvrir comment nous travaillons à vos côtés.
          </p>
        </div>
        <div className="w-full md:w-1/2 buttonFAQ md:mt-0 mt-7">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Quelles technologies utilisez-vous pour le développement web ?
              </AccordionTrigger>
              <AccordionContent>
                Notre équipe maîtrise une large gamme de technologies, notamment
                Next.js, React.js, WordPress, Shopify, et Node.js, pour répondre
                aux besoins variés de nos clients, que ce soit pour des sites
                vitrines, des sites e-commerce, des pages d&apos;atterrissage ou
                des simulateurs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Proposez-vous des solutions personnalisées pour chaque projet ?
              </AccordionTrigger>
              <AccordionContent>
                Absolument ! Nous adoptons une approche sur-mesure pour chaque
                projet, en commençant par une analyse détaillée de vos besoins
                pour concevoir et développer une solution qui correspond
                parfaitement à vos attentes et objectifs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Travaillez-vous avec des clients de tous les secteurs ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, nous sommes fiers de travailler avec des clients de divers
                secteurs. Notre expertise nous permet de comprendre et de
                répondre efficacement aux besoins spécifiques de chaque domaine.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Quel est votre processus de développement web ?
              </AccordionTrigger>
              <AccordionContent>
                Notre processus débute par la compréhension de vos objectifs,
                suivi par la planification, la conception, le développement, les
                tests, et enfin, le déploiement de votre projet, tout en
                assurant une communication transparente à chaque étape.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Comment assurez-vous la qualité et la sécurité des sites web
                développés ?
              </AccordionTrigger>
              <AccordionContent>
                La qualité et la sécurité sont nos priorités. Nous suivons les
                meilleures pratiques de codage, réalisons des tests rigoureux et
                appliquons des mesures de sécurité à jour pour assurer la
                robustesse et la protection de votre site web.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Offrez-vous des services de maintenance et de support
                post-lancement ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, nous proposons des services de maintenance et de support
                pour garantir le bon fonctionnement de votre site web après son
                lancement, incluant des mises à jour régulières et des
                vérifications de sécurité.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                Comment gérez-vous les projets à distance avec les clients ?
              </AccordionTrigger>
              <AccordionContent>
                Nous utilisons des outils de communication et de gestion de
                projet en ligne pour assurer une collaboration efficace et
                transparente avec nos clients, peu importe leur emplacement
                géographique.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>
                Quels sont les délais de réalisation pour un projet ?
              </AccordionTrigger>
              <AccordionContent>
                Les délais peuvent varier en fonction de la complexité et de la
                portée du projet. Nous travaillons étroitement avec vous pour
                établir un calendrier réaliste et nous nous engageons à
                respecter les délais convenus.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>
                Comment déterminez-vous le coût d&apos;un projet ?
              </AccordionTrigger>
              <AccordionContent>
                Le coût est déterminé en fonction de la complexité, de la
                technologie utilisée, et de la portée du projet. Nous
                fournissons un devis détaillé après une évaluation complète de
                vos besoins.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>
                Avez-vous des études de cas ou des références clients que je
                peux consulter ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, nous avons un portfolio de projets réussis et des études de
                cas que nous serions ravis de partager avec vous. Cela peut vous
                donner une meilleure idée de notre expertise et de la façon dont
                nous pourrions contribuer à la réussite de votre projet.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
