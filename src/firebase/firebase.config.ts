import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "adsventure-66776.firebaseapp.com",
  databaseURL:
    "https://adsventure-66776-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "adsventure-66776",
  storageBucket: "adsventure-66776.appspot.com",
  messagingSenderId: "565103293150",
  appId: "1:565103293150:web:9d20355e1ba8a47170c84f",
};

// Vérifier si Firebase a déjà été initialisé
let app: FirebaseApp; // Typage explicite de `app`
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
