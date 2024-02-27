"useClient";

import { useEffect } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DessinMarketing = () => {
  useEffect(() => {
    const lignMarketing = document.querySelector(".lignMarketing");
    const cercleMarketing = document.querySelector(".cercleStarMarketing");
    const starMarketing = document.querySelector(".starMarketing");

    if (lignMarketing && cercleMarketing && starMarketing) {
      const tl = gsap.timeline({
        defaults: { duration: 0.7, ease: "easeOut" },
        scrollTrigger: {
          trigger: ".lignMarketing", // Assurez-vous que cela correspond à un élément existant
          start: "top 80%",
          end: "top 50%",
          // markers: true, // Utile pour le débogage
        },
      });

      // Animation de la ligne
      if (lignMarketing) {
        const lignLength = (lignMarketing as SVGPathElement).getTotalLength();
        gsap.set(lignMarketing, {
          strokeDasharray: lignLength,
          strokeDashoffset: lignLength,
        });

        tl.fromTo(
          lignMarketing,
          { strokeDashoffset: lignLength },
          { strokeDashoffset: 0 }
        );
      }

      // Animation du cercle
      if (cercleMarketing) {
        tl.fromTo(
          cercleMarketing,
          { scale: 0, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1 },
          ">0.1"
        );
      }

      // Animation de l'étoile
      if (starMarketing) {
        tl.fromTo(
          starMarketing,
          { scale: 0, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1 },
          ">0.1"
        );
      }
    }
  }, []);

  return (
    <svg
      width="171"
      height="101"
      viewBox="0 0 171 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 98.5L55.5 54L80.5 79L140 26"
        stroke="#5174B4"
        stroke-width="5"
        className="lignMarketing"
      />
      <g filter="url(#filter0_di_471_32)" className="cercleStarMarketing">
        <rect
          x="113"
          y="2"
          width="55.0211"
          height="55.0211"
          rx="27.5106"
          fill="white"
        />
        <rect
          x="113.5"
          y="2.5"
          width="54.0211"
          height="54.0211"
          rx="27.0106"
          stroke="black"
          stroke-opacity="0.15"
        />
      </g>
      <path
        d="M140 8L144.939 23.2016H160.923L147.992 32.5967L152.931 47.7984L140 38.4033L127.069 47.7984L132.008 32.5967L119.077 23.2016H135.061L140 8Z"
        fill="#FFF848"
        className="starMarketing"
      />
      <defs>
        <filter
          id="filter0_di_471_32"
          x="110.707"
          y="0.471635"
          width="59.6062"
          height="59.6062"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.764182" />
          <feGaussianBlur stdDeviation="1.14627" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="hard-light"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_471_32"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_471_32"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.764182" dy="-2.29255" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="hard-light"
            in2="shape"
            result="effect2_innerShadow_471_32"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default DessinMarketing;
