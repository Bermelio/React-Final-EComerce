// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "profesional-store.firebaseapp.com",
  projectId: "profesional-store",
  storageBucket: "profesional-store.firebasestorage.app",
  messagingSenderId: "413761376201",
  appId: "1:413761376201:web:1c1641544e0f00265da218",
  measurementId: "G-53HC1GDE37"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db,app,analytics };