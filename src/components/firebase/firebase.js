import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "profesional-store.firebaseapp.com",
  projectId: "profesional-store",
  storageBucket: "profesional-store.appspot.com",
  messagingSenderId: "413761376201",
  appId: "1:413761376201:web:1c1641544e0f00265da218",
  measurementId: "G-53HC1GDE37"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };