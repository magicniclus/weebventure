"useClient";

import { useEffect } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DessinOne = () => {
  useEffect(() => {
    const cercle = document.querySelectorAll(".cercle");
    const pouce = document.querySelectorAll(".pouce");
    const cloud = document.querySelectorAll(".cloud");
    const check = document.querySelectorAll(".check");
    const graphPaths = document.querySelectorAll(".graphPath");

    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "easeOut" },
      // Décommentez pour activer le ScrollTrigger
      // scrollTrigger: {
      //   trigger: pouceRef.current,
      //   start: "top 80%",
      //   end: "top 50%",
      //   scrub: true,
      //   markers: true,
      // },
    });

    // Ajoute des animations à la timeline pour les cercles, pouces, nuages, et checks
    tl.fromTo(cercle, { y: 100 }, { y: 0 })
      .fromTo(pouce, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, "0.2")
      .fromTo(cloud, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, "<")
      .fromTo(check, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, "<")
      .addLabel("finAnimations");

    graphPaths.forEach((path) => {
      const pathLength = (path as SVGPathElement).getTotalLength();

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        fill: "transparent",
      });

      tl.fromTo(
        path,
        { strokeDashoffset: pathLength },
        { strokeDashoffset: 0, duration: 0.5, ease: "power2.out" },
        "finAnimations"
      ).to(path, { fill: "#8EA8D8" });
    });

    tl.to(
      [cercle, pouce, cloud, check],
      {
        y: "-=10",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 1.5,
      },
      "finAnimations+=0.2"
    );
  }, []);

  return (
    <svg
      width="635"
      height="630"
      viewBox="0 0 635 630"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M93.9999 187.988C93.9999 185.226 96.2385 182.988 98.9999 182.988H529C531.761 182.988 534 185.226 534 187.988V436.988H93.9999V187.988Z"
        fill="#D9D9D9"
      />
      <path
        d="M104 197.988C104 195.226 106.239 192.988 109 192.988H518C520.761 192.988 523 195.226 523 197.988V426.988H104V197.988Z"
        fill="#F7F8FB"
      />
      <rect x="93.9999" y="445" width="440" height="31" rx="5" fill="#D9D9D9" />
      <path
        d="M253 316L348 366.499L523 209L523 426.999L104 426.999L253 316Z"
        className="graphPath"
        fill="#8EA8D8"
      />
      <g filter="url(#filter0_di_460_156)" className="cercle">
        <rect
          width="122.349"
          height="122.941"
          rx="61.1744"
          transform="matrix(0.810409 -0.585865 0.574482 0.818517 47.9999 351.953)"
          fill="white"
        />
        <rect
          x="0.70227"
          y="0.117977"
          width="121.335"
          height="121.927"
          rx="60.6673"
          transform="matrix(0.810409 -0.585865 0.574482 0.818517 48.0652 352.385)"
          stroke="black"
          stroke-opacity="0.15"
          stroke-width="1.01419"
        />
      </g>
      <g filter="url(#filter1_di_460_156)" className="cercle">
        <rect
          width="122.349"
          height="122.941"
          rx="61.1744"
          transform="matrix(0.810409 -0.585865 0.574482 0.818517 357 163.68)"
          fill="white"
        />
        <rect
          x="0.70227"
          y="0.117977"
          width="121.335"
          height="121.927"
          rx="60.6673"
          transform="matrix(0.810409 -0.585865 0.574482 0.818517 357.065 164.113)"
          stroke="black"
          stroke-opacity="0.15"
          stroke-width="1.01419"
        />
      </g>
      <g filter="url(#filter2_di_460_156)" className="cercle">
        <rect
          x="480.15"
          y="371.339"
          width="70.095"
          height="70.095"
          rx="35.0475"
          transform="rotate(-22.8232 480.15 371.339)"
          fill="white"
        />
        <rect
          x="480.804"
          y="371.606"
          width="69.095"
          height="69.095"
          rx="34.5475"
          transform="rotate(-22.8232 480.804 371.606)"
          stroke="black"
          stroke-opacity="0.15"
        />
      </g>
      <path
        className="pouce"
        d="M450.836 208.736C445.811 208.216 438.284 207.299 430.927 205.893C425.863 204.922 420.657 203.656 416.864 201.002C415.795 200.253 414.575 199.978 413.492 199.74C413.031 199.637 412.599 199.543 412.235 199.42C409.455 198.479 407.702 195.831 407.962 192.98L409.739 173.894C409.985 171.253 412.077 169.224 414.721 169.065C414.768 169.063 414.81 169.055 414.857 169.048C415.188 168.974 423.082 167.209 429.28 163.249C432.197 161.386 434.834 158.339 436.336 155.101C437.831 151.875 438.172 148.232 438.445 145.307C438.624 143.419 438.842 141.07 439.388 140.775C440.713 140.072 442.128 139.784 443.591 139.923C448.089 140.352 452.289 144.897 452.071 149.098C451.923 152.012 450.624 155.345 449.37 158.565C447.89 162.381 446.606 165.675 447.255 168.06C447.35 168.416 447.655 168.668 448.017 168.703C448.028 168.704 452.278 168.961 452.278 168.961L452.319 168.965C457.074 169.418 460.574 173.656 460.128 178.405L457.814 203.003C457.652 204.699 456.848 206.227 455.534 207.307C454.226 208.388 452.572 208.901 450.876 208.739L450.836 208.736Z"
        fill="url(#paint0_radial_460_156)"
      />
      <path
        className="pouce"
        d="M443.507 140.797C447.505 141.178 451.382 145.346 451.194 149.049C451.053 151.823 449.784 155.089 448.554 158.247C447.013 162.204 445.688 165.623 446.41 168.285C446.601 168.991 447.211 169.502 447.94 169.571L448.004 169.577L452.213 169.831L452.248 169.835C456.519 170.242 459.667 174.046 459.265 178.323L456.952 202.921C456.813 204.378 456.117 205.699 454.987 206.632C453.857 207.565 452.434 208.006 450.971 207.867L450.925 207.862C445.917 207.344 438.414 206.429 431.091 205.032C426.125 204.083 421.022 202.844 417.368 200.285C416.155 199.435 414.784 199.134 413.685 198.888C413.247 198.793 412.838 198.701 412.52 198.589C410.127 197.779 408.615 195.506 408.842 193.064L410.613 173.977C410.817 171.774 412.566 170.076 414.772 169.946C414.86 169.942 414.956 169.928 415.04 169.906C415.376 169.833 423.415 168.029 429.745 163.987C432.794 162.037 435.555 158.855 437.124 155.47C438.684 152.109 439.033 148.385 439.313 145.389C439.448 143.968 439.626 142.044 439.926 141.485C441.063 140.905 442.266 140.679 443.507 140.797ZM443.674 139.049C442.13 138.902 440.528 139.173 438.974 140.001C436.967 141.068 438.297 148.768 435.537 154.725C433.879 158.301 431.108 161.036 428.804 162.504C422.669 166.423 414.669 168.189 414.669 168.189C411.611 168.374 409.15 170.762 408.864 173.816L407.093 192.903C406.792 196.191 408.829 199.19 411.956 200.252C413.22 200.678 414.994 200.765 416.36 201.724C420.015 204.283 424.884 205.629 430.763 206.753C438.039 208.146 445.478 209.06 450.746 209.609L450.805 209.615C454.784 209.994 458.326 207.074 458.7 203.088L461.013 178.49C461.508 173.239 457.652 168.591 452.414 168.092L452.344 168.086L448.111 167.83C447.023 163.822 452.625 155.571 452.955 149.141C453.185 144.571 448.767 139.534 443.674 139.049Z"
        fill="#EDA600"
      />
      <path
        className="pouce"
        d="M442.816 173.182C443.634 176.199 443.212 180.745 441.838 183.448C439.849 187.351 435.589 190.526 431.003 190.718C429.881 190.765 430.442 191.847 431.558 191.8C436.523 191.591 443.343 190.236 445.487 186.001C451.37 174.361 446.438 167.5 443.787 169.152C442.511 169.96 442.355 171.474 442.816 173.182Z"
        fill="#EDA600"
      />
      <path
        className="pouce"
        d="M454.151 178.624C449.279 178.16 443.509 176.699 443.67 172.357C443.718 171.115 444.19 170.114 445.114 169.302C447.545 167.17 453.093 166.399 460.737 167.127C463.511 167.391 465.516 167.765 465.539 167.767C465.562 167.769 465.591 167.778 465.614 167.78L465.667 167.785C465.749 167.787 465.824 167.794 465.906 167.802C468.382 168.038 470.238 170.466 470.136 173.332C470.03 176.297 467.85 178.629 465.278 178.531C465.237 178.527 465.19 178.529 465.148 178.536C465.095 178.537 459.593 179.142 454.151 178.624Z"
        fill="url(#paint1_radial_460_156)"
      />
      <path
        className="pouce"
        d="M460.66 168.002C463.387 168.261 465.363 168.626 465.381 168.628C465.433 168.639 465.485 168.644 465.537 168.649C465.572 168.652 465.607 168.655 465.637 168.652C465.702 168.652 465.766 168.659 465.824 168.664C467.834 168.856 469.346 170.887 469.259 173.283C469.211 174.525 468.75 175.663 467.959 176.493C467.221 177.27 466.277 177.674 465.31 177.64C465.222 177.638 465.134 177.641 465.05 177.651C464.997 177.658 459.572 178.252 454.235 177.744C451.135 177.448 448.71 176.853 447.036 175.976C444.734 174.769 444.511 173.348 444.549 172.388C444.586 171.386 444.953 170.615 445.698 169.957C447.911 168.022 453.365 167.307 460.66 168.002ZM460.827 166.254C454.172 165.62 443.04 165.577 442.791 172.326C442.615 177.201 448.351 178.953 454.067 179.498C459.667 180.031 465.248 179.404 465.248 179.404C468.307 179.513 470.893 176.808 471.016 173.357C471.14 170.017 468.915 167.2 465.996 166.922C465.897 166.913 465.804 166.904 465.704 166.9C465.704 166.9 463.676 166.525 460.827 166.254Z"
        fill="#EDA600"
      />
      <path
        className="pouce"
        d="M456.748 190.06C450.391 189.455 442.917 187.667 443.403 182.574C443.888 177.481 451.564 177.137 457.921 177.742C463.311 178.256 468.148 179.51 468.194 179.52C468.24 179.531 468.286 179.541 468.333 179.545C470.903 179.79 472.433 182.676 472.201 185.111C471.956 187.681 469.766 190.483 467.313 190.249C467.267 190.245 467.22 190.246 467.172 190.248C467.119 190.254 462.132 190.573 456.748 190.06Z"
        fill="url(#paint2_radial_460_156)"
      />
      <path
        className="pouce"
        d="M457.837 178.622C463.152 179.128 467.926 180.365 467.972 180.375C468.063 180.402 468.156 180.416 468.249 180.425C470.242 180.615 471.518 183.018 471.326 185.034C471.126 187.138 469.272 189.56 467.396 189.381C467.303 189.372 467.209 189.369 467.114 189.378C467.067 189.379 462.139 189.692 456.831 189.186C452.851 188.807 449.727 188.086 447.54 187.037C444.386 185.525 444.167 183.811 444.277 182.657C444.387 181.498 444.925 179.862 448.308 178.973C450.648 178.361 453.858 178.243 457.837 178.622ZM458.004 176.874C451.053 176.212 443.076 176.74 442.528 182.497C441.98 188.254 449.707 190.277 456.664 190.94C462.194 191.467 467.229 191.135 467.229 191.135C470.236 191.421 472.79 188.19 473.074 185.206C473.358 182.223 471.422 178.969 468.415 178.683C468.416 178.677 463.528 177.4 458.004 176.874Z"
        fill="#EDA600"
      />
      <path
        className="pouce"
        d="M459.745 209.89C457.292 209.656 444.882 208.28 441.477 204.152C440.881 203.43 440.634 202.69 440.71 201.885C441.014 198.828 446.419 197.573 455.538 198.441C458.789 198.751 461.284 199.224 461.313 199.227C461.337 199.229 461.365 199.237 461.389 199.24C462.752 199.375 463.987 200.052 464.852 201.151C465.728 202.258 466.13 203.66 465.993 205.093C465.701 208.035 463.172 210.205 460.352 209.936C460.31 209.944 460.106 209.924 459.745 209.89Z"
        fill="url(#paint3_radial_460_156)"
      />
      <path
        className="pouce"
        d="M455.46 199.322C458.659 199.626 461.125 200.091 461.148 200.099C461.2 200.109 461.252 200.114 461.305 200.119C462.429 200.232 463.445 200.794 464.164 201.703C464.899 202.631 465.24 203.81 465.119 205.016C464.879 207.474 462.777 209.297 460.417 209.072L460.411 209.071L460.376 209.068C460.364 209.067 460.166 209.054 459.822 209.021C449.246 208.014 443.691 205.468 442.147 203.598C441.561 202.89 441.544 202.335 441.578 201.98C441.827 199.546 447.139 198.529 455.46 199.322ZM455.626 197.574C449.38 196.979 440.315 196.962 439.842 201.803C439.183 208.478 456.247 210.439 459.662 210.764C460.04 210.8 460.251 210.814 460.251 210.814L460.268 210.816C463.578 211.131 466.528 208.613 466.867 205.183C467.206 201.746 464.792 198.694 461.478 198.366C461.477 198.372 458.954 197.89 455.626 197.574Z"
        fill="#EDA600"
      />
      <path
        className="pouce"
        d="M458.447 200.435C453.208 199.936 441.087 198.182 441.611 192.676C442.052 188.049 450.899 188.198 456.137 188.697C460.769 189.138 464.712 190.031 464.752 190.041C464.786 190.05 464.827 190.054 464.862 190.057C467.292 190.289 470.01 191.759 469.687 195.144C469.382 198.349 466.599 201.024 463.843 200.761L463.773 200.755C463.749 200.758 461.488 200.725 458.447 200.435Z"
        fill="url(#paint4_radial_460_156)"
      />
      <path
        className="pouce"
        d="M456.22 187.829L456.053 189.577C460.615 190.011 464.518 190.894 464.552 190.904C464.627 190.923 464.703 190.93 464.778 190.937C466.899 191.139 469.073 192.328 468.812 195.067C468.555 197.764 466.18 200.108 463.925 199.893C463.879 199.888 463.832 199.884 463.779 199.885C463.756 199.883 461.53 199.853 458.523 199.566C455.348 199.264 450.828 198.628 447.324 197.33C443.945 196.073 442.316 194.536 442.484 192.77C442.536 192.228 442.693 190.579 446.498 189.772C448.868 189.269 452.079 189.204 456.047 189.582L456.22 187.829ZM456.22 187.829C449.484 187.187 441.225 187.47 440.737 192.598C440.161 198.64 451.376 200.65 458.363 201.315C461.486 201.613 463.759 201.641 463.759 201.641C467.045 201.954 470.218 198.828 470.56 195.233C470.903 191.638 468.231 189.502 464.945 189.189C464.945 189.189 460.957 188.28 456.22 187.829Z"
        fill="#EDA600"
      />
      <path
        className="pouce"
        d="M417.573 201.586L415.831 190.308L413.722 200.102L417.573 201.586Z"
        fill="#EDA600"
      />
      <path
        className="cloud"
        d="M545.059 383.153C544.772 383.197 544.491 383.262 544.217 383.338C544.324 382.565 544.327 381.763 544.202 380.951C543.51 376.425 539.281 373.319 534.754 374.012C532.83 374.306 531.164 375.246 529.934 376.572C527.505 373.29 523.388 371.427 519.069 372.088C512.864 373.038 508.604 378.838 509.554 385.043C509.589 385.268 509.631 385.486 509.677 385.704C505.087 386.996 502.072 391.536 502.811 396.367C503.603 401.536 508.395 405.101 513.557 404.402C515.741 407.132 519.491 408.662 523.468 408.084C527.313 407.525 530.389 405.136 531.778 402.049C533.491 403.428 535.749 404.121 538.097 403.762C541.456 403.247 544.015 400.738 544.76 397.629C545.572 397.786 546.417 397.821 547.28 397.689C551.295 397.074 554.049 393.323 553.435 389.309C552.825 385.294 549.074 382.539 545.059 383.153Z"
        fill="url(#paint5_radial_460_156)"
      />
      <g opacity="0.2">
        <path
          d="M523.384 407.512C519.768 408.066 516.188 406.683 514.063 404.03C513.923 403.852 513.695 403.748 513.475 403.778C508.677 404.426 504.179 401.058 503.447 396.278C502.766 391.828 505.518 387.553 509.852 386.336C510.179 386.242 510.376 385.913 510.304 385.582C510.258 385.373 510.218 385.163 510.185 384.951C509.29 379.105 513.317 373.623 519.163 372.728C523.11 372.123 527.037 373.743 529.413 376.959C529.528 377.115 529.702 377.209 529.894 377.219C529.938 377.221 529.985 377.218 530.027 377.212C530.171 377.19 530.304 377.122 530.399 377.012C531.589 375.73 533.126 374.91 534.847 374.647C539.018 374.008 542.926 376.882 543.564 381.049C543.674 381.772 543.679 382.512 543.576 383.25C543.548 383.463 543.629 383.68 543.789 383.82C543.933 383.945 544.123 383.998 544.31 383.969C544.335 383.965 544.36 383.962 544.381 383.954C544.663 383.876 544.915 383.82 545.147 383.785C548.802 383.225 552.235 385.743 552.795 389.402C553.356 393.061 550.837 396.49 547.178 397.05C546.425 397.166 545.652 397.146 544.875 396.996C544.8 396.982 544.726 396.98 544.654 396.991C544.404 397.029 544.19 397.213 544.126 397.474C543.412 400.445 541.002 402.663 537.986 403.125C535.922 403.441 533.799 402.865 532.164 401.544C532.021 401.432 531.84 401.381 531.663 401.409L531.612 401.416C531.42 401.463 531.263 401.626 531.183 401.811C529.849 404.773 526.895 406.97 523.46 407.496L523.384 407.508L523.384 407.512Z"
          fill="url(#paint6_radial_460_156)"
          className="cloud"
        />
        <path
          className="cloud"
          d="M519.264 373.357C522.973 372.789 526.666 374.315 528.899 377.337C529.128 377.644 529.478 377.833 529.862 377.856C529.949 377.86 530.039 377.855 530.128 377.841C530.412 377.798 530.676 377.658 530.877 377.445C531.966 376.27 533.375 375.522 534.949 375.281C538.768 374.696 542.349 377.326 542.933 381.145C543.035 381.809 543.04 382.488 542.948 383.165C542.888 383.594 543.049 384.02 543.374 384.303C543.659 384.554 544.044 384.664 544.416 384.607C544.467 384.599 544.512 384.588 544.563 384.576C544.82 384.506 545.046 384.454 545.258 384.422C548.566 383.915 551.668 386.194 552.174 389.502C552.681 392.81 550.402 395.912 547.094 396.418C546.413 396.523 545.713 396.504 545.013 396.369C544.866 396.34 544.714 396.337 544.574 396.358C544.071 396.435 543.647 396.807 543.519 397.329C542.866 400.044 540.665 402.074 537.907 402.496C536.021 402.785 534.083 402.259 532.586 401.051C532.304 400.821 531.939 400.726 531.584 400.78C531.55 400.785 531.516 400.79 531.479 400.801C531.09 400.895 530.756 401.084 530.595 401.447C529.347 404.209 526.563 406.159 523.34 406.653L523.263 406.665C519.871 407.184 516.533 405.998 514.552 403.522C514.269 403.171 513.831 403.026 513.382 403.086C508.928 403.69 504.757 400.593 504.078 396.155C503.446 392.027 506 388.068 510.022 386.942C510.674 386.76 511.072 386.106 510.932 385.443C510.885 385.221 510.847 385.032 510.82 384.854C509.982 379.354 513.769 374.199 519.264 373.357ZM519.069 372.088C512.864 373.038 508.604 378.838 509.554 385.043C509.589 385.268 509.631 385.491 509.678 385.709C505.087 387 502.072 391.536 502.811 396.367C503.603 401.536 508.384 405.025 513.545 404.321C515.729 407.052 519.472 408.539 523.444 407.931L523.533 407.918C527.336 407.336 530.386 405.029 531.765 401.965C533.479 403.347 535.747 404.078 538.095 403.719C541.453 403.204 544.016 400.717 544.76 397.602C545.572 397.76 546.419 397.803 547.282 397.671C551.296 397.056 554.052 393.31 553.438 389.3C552.824 385.289 549.073 382.534 545.059 383.149C544.771 383.193 544.491 383.258 544.217 383.334C544.323 382.56 544.326 381.759 544.202 380.947C543.509 376.421 539.28 373.315 534.754 374.008C532.829 374.302 531.163 375.241 529.933 376.568C527.505 373.29 523.384 371.428 519.069 372.088Z"
          fill="#424242"
        />
      </g>
      <path
        className="check"
        d="M127.66 394.257L97.6201 378.926C95.8153 378.005 95.0838 375.788 95.9862 373.973L99.2542 367.404C100.157 365.589 102.351 364.865 104.156 365.786L124.393 376.114L146.066 332.544C146.969 330.73 149.164 330.006 150.969 330.927L157.504 334.263C159.309 335.184 160.041 337.401 159.138 339.216L132.562 392.64C131.66 394.454 129.465 395.178 127.66 394.257Z"
        fill="#43A22B"
      />
      <defs>
        <filter
          id="filter0_di_460_156"
          x="66.6249"
          y="301.063"
          width="132.53"
          height="134.351"
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
          <feOffset dy="1.81115" />
          <feGaussianBlur stdDeviation="2.71672" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="hard-light"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_460_156"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_460_156"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-1.81115" dy="-5.43344" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="hard-light"
            in2="shape"
            result="effect2_innerShadow_460_156"
          />
        </filter>
        <filter
          id="filter1_di_460_156"
          x="375.625"
          y="112.791"
          width="132.53"
          height="134.351"
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
          <feOffset dy="1.81115" />
          <feGaussianBlur stdDeviation="2.71672" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="hard-light"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_460_156"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_460_156"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-1.81115" dy="-5.43344" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="hard-light"
            in2="shape"
            result="effect2_innerShadow_460_156"
          />
        </filter>
        <filter
          id="filter2_di_460_156"
          x="488.07"
          y="353.044"
          width="75.9545"
          height="75.9545"
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
          <feOffset dy="0.973542" />
          <feGaussianBlur stdDeviation="1.46031" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="hard-light"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_460_156"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_460_156"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-0.973542" dy="-2.92063" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="hard-light"
            in2="shape"
            result="effect2_innerShadow_460_156"
          />
        </filter>
        <radialGradient
          id="paint0_radial_460_156"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(436.18 154.264) rotate(95.5663) scale(50.9459 40.1097)"
        >
          <stop offset="0.6" stop-color="#FFCA28" />
          <stop offset="1" stop-color="#FFB300" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_460_156"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(464.486 173.033) rotate(-177.832) scale(16.548 8.0972)"
        >
          <stop offset="0.5993" stop-color="#FFCA28" />
          <stop offset="1" stop-color="#FFB300" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_460_156"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(466.012 184.573) rotate(-174.495) scale(18.6239 7.46847)"
        >
          <stop offset="0.5993" stop-color="#FFCA28" />
          <stop offset="1" stop-color="#FFB300" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_460_156"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(460.483 204.319) rotate(-174.284) scale(15.6405 8.14285)"
        >
          <stop offset="0.5993" stop-color="#FFCA28" />
          <stop offset="1" stop-color="#FFB300" />
        </radialGradient>
        <radialGradient
          id="paint4_radial_460_156"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(463.605 195.027) rotate(-174.493) scale(17.8195 7.41192)"
        >
          <stop offset="0.5993" stop-color="#FFCA28" />
          <stop offset="1" stop-color="#FFB300" />
        </radialGradient>
        <radialGradient
          id="paint5_radial_460_156"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(513.124 371.794) rotate(-8.70446) scale(49.0546 49.0546)"
        >
          <stop offset="0.1402" stop-color="#E3F2FD" />
          <stop offset="1" stop-color="#90CAF9" />
        </radialGradient>
        <radialGradient
          id="paint6_radial_460_156"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(513.517 372.425) rotate(-8.70446) scale(47.6125 47.6125)"
        >
          <stop offset="0.1402" stop-color="#E3F2FD" />
          <stop offset="1" stop-color="#90CAF9" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default DessinOne;