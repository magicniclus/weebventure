import Image from "next/image";

const LogoEntreprise = () => {
  const entreprisePath = [
    "/logos/terabois.jpg",
    "/logos/duval.jpg",
    "/logos/acsd.jpg",
    "/logos/signature.jpg",
    "/logos/dutruch.jpg",
    "/logos/maprimerenov.jpg",
    "/logos/avenue-immo.jpg",
  ];
  return (
    <>
      <style jsx>{`
        .logo-container-one {
          width: 69px;
          height: auto;
        }
        .logo-container-two {
          width: 76px;
          height: auto;
        }
        .logo-container-three {
          width: 33px;
          height: auto;
        }
        .logo-container-four {
          width: 155px;
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
          width: 97px;
          height: auto;
        }
      `}</style>
      <section className="w-full mt-24">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="logo-container-one">
            <Image
              src={entreprisePath[0]}
              width={69}
              height={39}
              alt="terabois"
            />
          </div>
          <div className="logo-container-two">
            <Image src={entreprisePath[1]} width={76} height={52} alt="duval" />
          </div>
          <div className="logo-container-three">
            <Image src={entreprisePath[2]} width={33} height={40} alt="acsd" />
          </div>
          <div className="logo-container-four">
            <Image
              src={entreprisePath[3]}
              width={155}
              height={36}
              alt="signature"
            />
          </div>
          <div className="logo-container-five">
            <Image
              src={entreprisePath[4]}
              width={109}
              height={43}
              alt="dutruch"
            />
          </div>
          <div className="logo-container-six">
            <Image
              src={entreprisePath[5]}
              width={51}
              height={43}
              alt="maprimerenov"
            />
          </div>
          <div className="logo-container-seven">
            <Image
              src={entreprisePath[6]}
              width={97}
              height={31}
              alt="avenue-immo"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoEntreprise;
