import DessinMarketing from "./svg/DessinMarketing";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="w-full">
      <div className="max-w-5xl mx-auto py-4 px-4 bg-backgroundDev rounded-md p-3 flex items-center">
        <div className="w-[257px] h-[145px] flex justify-center items-center bg-white rounded-md">
          <DessinMarketing />
        </div>
        <div className="w-full flex justify-between items-center px-4">
          <div className="text-textDev">
            <h2 className="text-textDev text-[24px] font-extrabold">
              Vous souhaitez un accompagnement marketing ?
            </h2>
            <p className="w-9/12 text-[14px]">
              Notre agence Adsventure spécialisé en marketing 100% digital peut
              vous accompagner à atteindre vos objectifs.
            </p>
          </div>
          <Button variant={"perso"}>Adsventure</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
