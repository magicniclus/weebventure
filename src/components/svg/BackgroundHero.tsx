import gsap from "gsap";
import { useEffect, useRef } from "react";

const BackgroundHero = () => {
  const svgRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const mask = maskRef.current;

    if (svg && mask) {
      const svgHeight = svg.viewBox.baseVal.height; // Utilisez la hauteur définie dans le viewBox du SVG

      // Initialisez le masque pour commencer depuis le haut et ne rien révéler
      gsap.set(mask, { attr: { height: 0, y: 0 } });

      // Animez le masque pour révéler le SVG de haut en bas
      gsap.to(mask, {
        attr: { height: svgHeight, y: 0 }, // Assurez-vous que le masque couvre entièrement le SVG à la fin
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => console.log("Animation completed!"),
      });
    }
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 2xl:flex hidden"
      style={{
        width: "100%",
        height: "auto",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="auto"
        viewBox="0 0 1728 893"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="mask">
            <rect ref={maskRef} x="0" width="100%" height="100%" fill="white" />
          </mask>
        </defs>
        <path
          d="M0 0H1728V611C1728 611 1487 881.5 872.5 892C258 902.5 0 611 0 611V0Z"
          fill="#F7F8FB"
          mask="url(#mask)"
        />
      </svg>
    </div>
  );
};

export default BackgroundHero;
