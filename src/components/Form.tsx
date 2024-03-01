import { useEffect, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    siteWeb: "",
    fonction: "",
    souhaits: {
      developpement: false,
      design: false,
      refonte: false,
    },
    budget: "",
    projet: "",
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    const {
      nom,
      prenom,
      telephone,
      email,
      fonction,
      budget,
      projet,
      souhaits,
    } = formData;
    const isSoouhaitsFilled =
      souhaits.developpement || souhaits.design || souhaits.refonte;
    const isFormFilled =
      nom &&
      prenom &&
      telephone &&
      email &&
      fonction &&
      budget &&
      projet &&
      isSoouhaitsFilled;
    setIsSubmitDisabled(!isFormFilled);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target;
    const value =
      target.type === "checkbox"
        ? (target as HTMLInputElement).checked
        : target.value;
    const name = target.name;

    if (target.type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        souhaits: {
          ...prevFormData.souhaits,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value, // value est un string pour les autres types d'input et textarea
      }));
    }
  };

  return (
    <form className="p-10 bg-slate-100">
      <h2 className="text-textDev font-extrabold text-[24px] titleLeftText mx-auto">
        Contactez-nous <span></span>
      </h2>
      <div className="flex flex-col text-[14px] mt-7">
        <div className="flex justify-between">
          <input
            type="text"
            name="nom"
            className="inputCTA mt-2 w-[49%] px-3 py-2"
            placeholder="Votre nom*"
            value={formData.nom}
            onChange={handleChange}
          />
          <input
            type="text"
            name="prenom"
            className="inputCTA mt-2 w-[49%] px-3 py-2"
            placeholder="Votre prénom*"
            value={formData.prenom}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="telephone"
          className="inputCTA mt-2 w-[100%] px-3 py-2"
          placeholder="Numéro de téléphone*"
          value={formData.telephone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          className="inputCTA mt-2 w-[100%] px-3 py-2"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="siteWeb"
          className="inputCTA mt-2 w-[100%] px-3 py-2"
          placeholder="URL de votre site web (si vous en avez un)"
          value={formData.siteWeb}
          onChange={handleChange}
        />
        <input
          type="text"
          name="fonction"
          className="inputCTA mt-2 w-[100%] px-3 py-2"
          placeholder="Fonction*"
          value={formData.fonction}
          onChange={handleChange}
        />
        <div className="mt-7">
          <h3 className="font-bold">
            Vous souhaitez{" "}
            <span className="text-[10px]">(plusieurs choix possibles)</span>*
          </h3>
          <div className="flex mt-2">
            <input
              type="checkbox"
              id="developpement"
              name="developpement"
              checked={formData.souhaits.developpement}
              onChange={handleChange}
            />
            <label htmlFor="developpement" className="text-[12px] ml-2">
              Développement de votre site web
            </label>
          </div>
          <div className="flex mt-2">
            <input
              type="checkbox"
              id="design"
              name="design"
              checked={formData.souhaits.design}
              onChange={handleChange}
            />
            <label htmlFor="design" className="text-[12px] ml-2">
              Design de votre site web
            </label>
          </div>
          <div className="flex mt-2">
            <input
              type="checkbox"
              id="refonte"
              name="refonte"
              checked={formData.souhaits.refonte}
              onChange={handleChange}
            />
            <label htmlFor="refonte" className="text-[12px] ml-2">
              Refonte de votre site web
            </label>
          </div>
        </div>
        {/* Select pour le budget */}
        <select
          name="budget"
          className="inputCTA mt-7 w-full px-3 py-2 text-textDev"
          value={formData.budget}
          onChange={handleChange}
        >
          <option value="" disabled>
            Quel est votre budget ?
          </option>
          <option value="-3000€">-3000€</option>
          <option value="3000€ à 5000€">3000€ à 5000€</option>
          <option value="5000€ à 10 000€">5000€ à 10 000€</option>
          <option value="10 000€ à 30 000€">10 000€ à 30 000€</option>
          <option value="+30 000€">Plus de 30 000€</option>
        </select>
        <textarea
          name="projet"
          className="inputCTA min-h-[200px] mt-7 w-full px-3 py-2"
          placeholder="Décrivez-nous votre projet*"
          value={formData.projet}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className={`btnCTA mt-7 w-full py-3 text-white ${
            !isSubmitDisabled ? "bg-primaryDev" : "bg-primaryDev/50"
          } rounded-md`}
          disabled={isSubmitDisabled}
        >
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default Form;
