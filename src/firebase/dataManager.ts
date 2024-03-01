import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { getDatabase, push, ref, set } from "firebase/database";
import { app } from "./firebase.config";

interface ProspectData {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  site?: string;
  fonction: string;
  budget: string;
  projet: string;
  souhaits: {
    developpement?: boolean;
    design?: boolean;
    refonte?: boolean;
  };
}

const db = getDatabase(app);

export const addProspect = async (prospectData: ProspectData) => {
  const prospectsRef = ref(db, "webventure/prosects");

  try {
    const newProspectRef = push(prospectsRef);

    const currentDate = format(new Date(), "dd/MM/yyyy", { locale: fr });

    const updatedProspectData = {
      ...prospectData,
      dateAdded: currentDate,
    };

    await set(newProspectRef, updatedProspectData);
    console.log(`Added new prospect successfully.`);
  } catch (error) {
    console.error("Failed to add new prospect: ", error);
  }
};
