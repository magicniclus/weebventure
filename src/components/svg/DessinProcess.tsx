"useClient";

import { useEffect } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DessinProcess = () => {
  useEffect(() => {
    const code = document.querySelectorAll(".code");
    const lign = document.querySelector(".lign");
    const light = document.querySelectorAll(".light");
    const cercleLight = document.querySelector(".cercleLight");
    const circleCode = document.querySelector(".circleCode");

    if (lign && cercleLight && circleCode) {
      const lign = document.querySelector(".lign") as SVGPathElement;
      const lignLength = lign.getTotalLength();
      gsap.set(lign, {
        strokeDasharray: lignLength,
        strokeDashoffset: lignLength,
        autoAlpha: 0,
      });

      const tl = gsap.timeline({
        defaults: { duration: 0.7, ease: "easeOut" },
        scrollTrigger: {
          trigger: ".dessinProcess",
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        [cercleLight, circleCode],
        { autoAlpha: 0, scale: 0 },
        { autoAlpha: 1, scale: 1 }
      )
        .fromTo(
          lign,
          { strokeDashoffset: lignLength },
          { strokeDashoffset: 0, autoAlpha: 1, duration: 1, ease: "power2.out" }
        )
        .fromTo(code, { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.1 }, ">0.1")
        .fromTo(light, { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.1 }, "<")
        .add(() => {
          // Utilisation de add() pour exécuter le code une fois que la timeline est terminée
          // Démarre les animations de lévitation pour chaque élément
          [...code, cercleLight, circleCode, ...light].forEach((target) => {
            gsap.to(target, {
              y: "-=10",
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              duration: 1.5,
            });
          });
        });
    }
  }, []);
  return (
    <svg
      className="dessinProcess"
      viewBox="0 0 416 361"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="cercleOne" cx="132" cy="132" r="132" fill="#8EA8D8" />
      <ellipse
        className="cercleTwo"
        cx="239.5"
        cy="291.5"
        rx="76.5"
        ry="69.5"
        fill="#F7F8FB"
      />
      <mask id="path-3-inside-1_460_155" fill="white">
        <path d="M370.246 131.055C371.862 128.815 374.987 128.31 377.226 129.926L411.285 154.502C413.524 156.118 414.03 159.244 412.414 161.483L310.011 303.394L267.843 272.965L370.246 131.055Z" />
      </mask>
      <path
        className="crayon"
        d="M370.246 131.055C371.862 128.815 374.987 128.31 377.226 129.926L411.285 154.502C413.524 156.118 414.03 159.244 412.414 161.483L310.011 303.394L267.843 272.965L370.246 131.055Z"
        fill="#618AD5"
        stroke="#618AD5"
        stroke-width="14"
        mask="url(#path-3-inside-1_460_155)"
      />
      <path
        className="crayon"
        d="M275.229 282.162L270.779 278.951L269.744 284.34L263.636 316.139L262.297 323.108L268.641 319.928L298.251 305.088L303.414 302.5L298.731 299.121L275.229 282.162Z"
        stroke="#618AD5"
        stroke-width="7"
      />
      <g className="circleCode" filter="url(#filter0_di_460_155)">
        <rect
          width="56.5926"
          height="57.281"
          rx="28.2963"
          transform="matrix(0.952014 0.306053 -0.297936 0.954586 175.37 231)"
          fill="white"
        />
        <rect
          x="0.333996"
          y="0.643728"
          width="55.5713"
          height="56.2597"
          rx="27.7856"
          transform="matrix(0.952014 0.306053 -0.297936 0.954586 175.578 230.927)"
          stroke="black"
          stroke-opacity="0.15"
          stroke-width="1.02127"
        />
      </g>
      <path
        className="code"
        d="M177.647 265.832L187.137 256.343C187.595 255.886 188.337 255.886 188.794 256.343L189.901 257.45C190.358 257.907 190.359 258.647 189.903 259.105L182.382 266.661L189.903 274.217C190.359 274.675 190.358 275.415 189.901 275.872L188.794 276.979C188.336 277.437 187.594 277.437 187.137 276.979L177.647 267.49C177.19 267.032 177.19 266.29 177.647 265.832Z"
        fill="#0B0D11"
      />
      <path
        className="code"
        d="M208.901 267.49L199.412 276.979C198.954 277.437 198.212 277.437 197.754 276.979L196.647 275.872C196.19 275.415 196.19 274.675 196.646 274.217L204.167 266.661L196.646 259.105C196.19 258.647 196.191 257.907 196.648 257.45L197.755 256.343C198.212 255.886 198.955 255.886 199.412 256.343L208.901 265.833C209.359 266.29 209.359 267.033 208.901 267.49Z"
        fill="#0B0D11"
      />
      <g filter="url(#filter1_di_460_155)" className="cercleLight">
        <rect
          width="122.753"
          height="124.247"
          rx="61.3766"
          transform="matrix(0.952014 0.306053 -0.297936 0.954586 189.677 27)"
          fill="white"
        />
        <rect
          x="0.333996"
          y="0.643728"
          width="121.732"
          height="123.225"
          rx="60.866"
          transform="matrix(0.952014 0.306053 -0.297936 0.954586 189.885 26.927)"
          stroke="black"
          stroke-opacity="0.15"
          stroke-width="1.02127"
        />
      </g>
      <path
        d="M214.708 117.775L243.476 124.651C243.476 124.651 241.564 125.446 240.738 129.007C240.358 130.645 238.94 135.852 237.521 140.998C235.668 147.715 228.847 151.72 222.069 150.101V150.101C215.068 148.427 210.711 141.386 212.338 134.374C213.487 129.421 214.622 124.53 215.009 122.858C215.891 119.06 214.708 117.775 214.708 117.775Z"
        fill="#D9D9D9"
        className="light"
      />
      <ellipse
        cx="25.0098"
        cy="25.343"
        rx="25.0098"
        ry="25.343"
        transform="matrix(0.972611 0.232439 -0.226016 0.974124 215.202 71.2788)"
        fill="#FFF848"
        className="light"
      />
      <rect
        width="4.85399"
        height="12.8119"
        rx="2.42699"
        transform="matrix(0.567471 0.823393 -0.815431 0.578854 267.057 73.647)"
        fill="#FFF848"
        className="light"
      />
      <rect
        width="4.808"
        height="12.7792"
        rx="2.404"
        transform="matrix(0.984119 0.177508 -0.172491 0.985011 239.216 56)"
        fill="#FFF848"
        className="light"
      />
      <rect
        width="4.83927"
        height="9.66722"
        rx="2.41964"
        transform="matrix(0.725881 -0.68782 0.677037 0.735949 204.152 73.1309)"
        fill="#FFF848"
        className="light"
      />
      <rect
        width="4.87362"
        height="11.6669"
        rx="2.43681"
        transform="matrix(0.227171 0.973855 -0.972327 0.233623 202.344 102.606)"
        fill="#FFF848"
        className="light"
      />
      <rect
        width="4.86741"
        height="9.34676"
        rx="2.43371"
        transform="matrix(-0.369845 0.929094 -0.925245 -0.379369 268.019 114.819)"
        fill="#FFF848"
        className="light"
      />
      <path
        d="M243 331H79V288H143.5V245H79V189.5H223V182"
        stroke="#0B0D11"
        stroke-width="7"
        className="lign"
      />
      <defs>
        <filter
          id="filter0_di_460_155"
          x="159.967"
          y="234.651"
          width="67.6167"
          height="68.3463"
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
          <feOffset dy="1.8238" />
          <feGaussianBlur stdDeviation="2.7357" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="hard-light"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_460_155"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_460_155"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-1.8238" dy="-5.47139" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="hard-light"
            in2="shape"
            result="effect2_innerShadow_460_155"
          />
        </filter>
        <filter
          id="filter1_di_460_155"
          x="162.664"
          y="39.1827"
          width="133.872"
          height="135.455"
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
          <feOffset dy="1.8238" />
          <feGaussianBlur stdDeviation="2.7357" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="hard-light"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_460_155"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_460_155"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-1.8238" dy="-5.47139" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="hard-light"
            in2="shape"
            result="effect2_innerShadow_460_155"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default DessinProcess;
