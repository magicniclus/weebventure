import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const page = () => {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto py-20 px-2 flex justify-between flex-col text-[12px] w-10/12 mt-5 textLeftText">
        <h1 className="text-[32px] font-extrabold">Mentions légales</h1>
        <h2 className="text-[20px] font-extrabold mt-7">
          Identification de l&apos;éditeur du site
        </h2>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          Le site www.webventure-agency.com est édité par :
        </p>
        <ul className="text-start">
          <li>-Nom de l&apos;entreprise : Nicolas CASTERA</li>
          <li>-Forme juridique : Auto-entreprise</li>
          <li>-E-mail : contact@webventure-agency.fr</li>
          <li>-Siret : 83241465000024</li>
        </ul>
        <h2 className="text-[20px] font-extrabold mt-7">
          Directeur de la publication
        </h2>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          Le directeur de la publication du site est Nicolas CASTERA, en qualité
          de gérant de la société Nicolas CASTERA.
        </p>
        <h2 className="text-[20px] font-extrabold mt-7">Hébergement du site</h2>
        <ul className="text-start">
          <li>Le site www.adsventure.com est hébergé par :</li>
          <li>-Nom de l&apos;hébergeur : Netlify</li>
          <li>-Email de l&apos;hébergeur : privacy@netlify.com</li>
        </ul>
        <h2 className="text-[20px] font-extrabold mt-7">
          Propriété intellectuelle
        </h2>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          Le contenu du site, incluant mais sans s&apos;y limiter, les textes,
          images, graphiques, logos, icônes, et code source, est la propriété
          exclusive de la société Adsventure ou de ses partenaires, et est
          protégé par les lois françaises et internationales relatives aux
          droits d&apos;auteur.
        </p>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          Toute reproduction, représentation, modification, publication,
          transmission, dénaturation, totale ou partielle du site ou de son
          contenu, par quelque procédé que ce soit, et sur quelque support que
          ce soit, est interdite sans l&apos;autorisation préalable et écrite de
          la société Adsventure.
        </p>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          Adsventure s&apos;efforce d&apos;assurer l&apos;exactitude et la mise
          à jour des informations diffusées sur son site. Toutefois, Adsventure
          ne peut garantir l&apos;exactitude, la précision, la mise à jour ou
          l&apos;exhaustivité des informations mises à disposition sur le site.
        </p>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          En conséquence, l&apos;utilisateur reconnaît utiliser ces informations
          sous sa responsabilité exclusive. Adsventure ne saurait être tenu pour
          responsable des erreurs, omissions, interruptions du service ou des
          conséquences qui pourraient en découler pour l&apos;utilisateur.
        </p>
        <h2 className="text-[20px] font-extrabold mt-7">Liens hypertextes</h2>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          Le site peut contenir des liens vers d&apos;autres sites internet.
          Adsventure n&apos;est pas responsable du contenu et de la politique de
          confidentialité des sites auxquels les utilisateurs peuvent accéder
          via ces liens.
        </p>
        <h2 className="text-[20px] font-extrabold mt-7">Droit applicable</h2>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          Les présentes mentions légales sont soumises au droit français. En cas
          de litige, les tribunaux français seront compétents.
        </p>
        <p className="text-[12px] w-10/12 mt-5 textLeftText">
          Date de la dernière mise à jour : 04/03/2024
        </p>
      </main>
      <Footer />
    </>
  );
};

export default page;
