import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-500 mt-16">
      <div className="max-w-5xl mx-auto py-20 px-2 flex justify-between flex-col items-center text-white">
        <div className="w-full flex justify-between md:flex-row flex-col">
          <div className="">
            <h2 className="text-[20px] font-extrabold">Le groupe</h2>
            <div className="flex flex-col">
              <a href="/" className="mt-6">
                <Image
                  src="/logos/webventure.png"
                  width={135}
                  height={30}
                  alt="webventure"
                />
              </a>
              <a href="/" className="mt-2">
                <Image
                  src="/logos/AdsVenture.png"
                  width={123}
                  height={39}
                  alt="adsventure"
                />
              </a>
              <a href="/" className="mt-1">
                <Image
                  src="/logos/brendventure.png"
                  width={170}
                  height={45}
                  alt="brendventure"
                />
              </a>
            </div>
          </div>
          <div className="flex md:mt-0 mt-7 md:flex-row flex-col">
            <div className="">
              <h2 className="text-[20px] font-extrabold">Légales</h2>
              <ul className="mt-7">
                <li className="mt-2">
                  <a href="/">Mentions légales</a>
                </li>
                <li className="mt-2">
                  <a href="/">Politique de confidentialité</a>
                </li>
              </ul>
            </div>
            <div className="md:ml-7 md:mt-0 mt-7">
              <h2 className="text-[20px] font-extrabold">Agence</h2>
              <ul className="mt-7">
                <li className="mt-2">
                  <a href="/">Contact</a>
                </li>
                <li className="mt-2">
                  <a href="/">A propos</a>
                </li>
                <li className="mt-2">
                  <a href="/">F.A.Q</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white mt-16"></div>
        <div className="w-full flex justify-start mt-4">
          <a href="mailto:contact@webventure-agency.fr">
            contact@webventure-agency.fr
          </a>
        </div>
        <div className="w-full flex justify-between mt-16 md:flex-row flex-col">
          <div className="flex flex-col">
            <Image
              src="/logos/webventure.png"
              width={135}
              height={30}
              alt="webventure"
            />
            <p className="text-[12px] mt-2">
              © 2024 webventure.fr, Inc. Tous droit réservé.
            </p>
          </div>
          <div className="flex flex-col md:items-end md:mt-0 mt-7">
            <h2 className="text-[20px] font-extrabold">New&apos;s letters</h2>
            <form className="mt-4 flex flex-col md:items-end">
              <input
                type="text"
                placeholder="Votre adresse mail"
                className="w-full border-white text-textDev p-2 rounded-md md:max-w-full max-w-[200px]"
              />
              <button className="mt-4 bg-white text-slate-400 py-1 px-2 rounded-md max-w-max">
                S&apos;inscrire
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
