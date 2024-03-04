import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const page = () => {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto py-20 px-2 flex justify-between flex-col text-[12px] w-10/12 mt-5 textLeftText">
        <h1 className="text-[32px] font-extrabold">
          Politique de confidentialité
        </h1>
        <h2 className="text-[20px] font-extrabold mt-7">Introdution</h2>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          Chez Webventure, nous nous engageons à protéger et à respecter la
          confidentialité de nos clients et des visiteurs de notre site Web.
          Cette politique de confidentialité explique comment nous recueillons,
          utilisons et protégeons vos informations personnelles lorsque vous
          interagissez avec notre site Web ou utilisez nos services.
        </p>
        <h2 className="text-[20px] font-extrabold mt-7">
          Collecte des informations :
        </h2>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          Nous recueillons des informations personnelles lorsque vous :
        </p>
        <ul className="text-start">
          <li>-Visitez notre site Web.</li>
          <li>-Utilisez nos services.</li>
          <li>-Inscrivez-vous à notre newsletter.</li>
        </ul>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          Ces informations peuvent inclure votre nom, adresse e-mail, numéro de
          téléphone, adresse IP et d&apos;autres informations pertinentes pour
          fournir nos services.
        </p>
        <h2 className="text-[20px] font-extrabold mt-7">
          Utilisation des informations :
        </h2>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          Nous utilisons vos données pour :
        </p>
        <ul className="text-start">
          <li>-Vous fournir nos services et répondre à vos demandes.</li>
          <li>
            -Améliorer notre site Web et nos services en analysant les données
            de navigation.
          </li>
          <li>
            -Vous envoyer des communications marketing, si vous avez choisi de
            les recevoir.
          </li>
        </ul>
        <h2 className="text-[20px] font-extrabold mt-7">
          Partage des informations :
        </h2>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          Nous prenons la sécurité de vos informations personnelles au sérieux
          et avons mis en place des mesures techniques et organisationnelles
          appropriées pour protéger vos données contre la perte, le vol,
          l&apos;accès non autorisé, la divulgation, l&apos;altération et la
          destruction.
        </p>
        <h2 className="text-[20px] font-extrabold mt-7">Cookies :</h2>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          Notre site Web utilise des cookies pour améliorer votre expérience
          utilisateur et pour analyser l&apos;utilisation de notre site. Vous
          pouvez gérer vos préférences de cookies dans les paramètres de votre
          navigateur.
        </p>
        <h2 className="text-[20px] font-extrabold mt-7">Vos droits</h2>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          Vous avez le droit de demander l&apos;accès, la rectification ou la
          suppression de vos informations personnelles détenues par Adsventure.
          Vous pouvez également vous opposer au traitement de vos données ou
          demander la limitation de ce traitement. Pour exercer ces droits,
          veuillez nous contacter à l&apos;adresse e-mail indiquée ci-dessous.
        </p>
        <h2 className="text-[20px] font-extrabold mt-7">
          Mises à jour de la politique de confidentialité :
        </h2>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          Adsventure se réserve le droit de modifier cette politique de
          confidentialité à tout moment. Les modifications seront publiées sur
          cette page, et nous vous encourageons à consulter régulièrement cette
          politique pour vous tenir informé de la manière dont nous protégeons
          vos informations personnelles.
        </p>
        <h2 className="text-[20px] font-extrabold mt-7">Contact :</h2>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          Si vous avez des questions ou des préoccupations concernant notre
          politique de confidentialité, veuillez nous contacter à
          contact@webventure-agency.fr.
        </p>
        <p>Date de la dernière mise à jour : 04/03/2024</p>
      </main>
      <Footer />
    </>
  );
};

export default page;
