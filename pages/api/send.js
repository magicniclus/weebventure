import sgMail from "@sendgrid/mail";
import React from "react"; // Importez React pour JSX
import ReactDOMServer from "react-dom/server";
import { EmailTemplate } from "../../src/components/mail/EmailTemplate";

// Configurez SendGrid avec votre clé API
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  if (req.method !== "POST") {
    // Gérer les méthodes non supportées
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const {
      nom,
      prenom,
      telephone,
      email,
      site,
      fonction,
      budget,
      projet,
      souhaits,
    } = req.body;

    // Vous devez transformer `souhaits` en une liste de strings `souhaitsListe` ici.
    // Cette étape dépend de la structure de vos données et de la façon dont vous voulez les afficher.
    const souhaitsListe = Object.entries(souhaits)
      .filter(([key, value]) => value)
      .map(([key]) => key);

    const emailContent = ReactDOMServer.renderToString(
      <EmailTemplate
        nom={nom}
        prenom={prenom}
        telephone={telephone}
        email={email}
        site={site}
        fonction={fonction}
        budget={budget}
        projet={projet}
        souhaits={souhaits} // Assurez-vous que cela génère correctement le HTML
        date={new Date().toLocaleString()}
      />
    );

    const msg = {
      to: ["casteranicolas.contact@gmail.com"],
      from: "nouveaucontact@prospect-manager.fr", // Doit être vérifié par SendGrid
      subject: "Webventure-Nouvelle demande reçue",
      html: emailContent,
    };

    console.log("SendGrid API Key:", process.env.SENDGRID_API_KEY);
    console.log("Email message:", msg);

    await sgMail.send(msg);
    return res.status(200).json({ message: "Email envoyé avec succès" });
  } catch (error) {
    console.error("Erreur lors de l'envoi avec SendGrid", error);
    return res.status(500).json({
      message: "Erreur serveur lors de l'envoi de l'email.",
      details: error.message, // Plus détaillé
    });
  }
};
