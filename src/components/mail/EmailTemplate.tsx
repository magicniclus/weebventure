import { format } from "date-fns";
import { fr } from "date-fns/locale";
import * as React from "react";

// Définition de l'interface pour les props
interface EmailTemplateProps {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  date: string;
  site?: string;
  fonction: string;
  budget: string;
  projet: string;
  souhaits: string;
}

// Ajout du formatage pour inclure l'heure
const currentDate = format(new Date(), "dd/MM/yyyy HH:mm", { locale: fr });

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  nom,
  prenom,
  telephone,
  email,
  site,
  fonction,
  budget,
  projet,
  souhaits, // Maintenant une chaîne de caractères
}) => {
  return (
    <div>
      <h2>Nouveau Prospect depuis Webventure:</h2>
      <p>Date: {currentDate}</p>
      <ul>
        <li>
          Nom, prénom:{" "}
          <span className="font-bold">
            {nom}, {prenom}
          </span>
        </li>
        <li>
          Email: <span className="font-bold">{email}</span>
        </li>
        <li>
          Téléphone: <span className="font-bold">{telephone}</span>
        </li>
        <li>
          Fonction: <span className="font-bold">{fonction}</span>
        </li>
        <li>
          Site web: <span className="font-bold">{site || "Non spécifié"}</span>
        </li>
        <li>
          Budget: <span className="font-bold">{budget}</span>
        </li>
        <li>
          Projet: <span className="font-bold">{projet}</span>
        </li>
        <li>
          Besoins: <span className="font-bold">{souhaits}</span>
        </li>{" "}
      </ul>
    </div>
  );
};
