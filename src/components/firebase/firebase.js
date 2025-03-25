// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "profesional-store.firebaseapp.com",
  projectId: "profesional-store",
  storageBucket: "profesional-store.firebasestorage.app",
  messagingSenderId: "413761376201",
  appId: "1:413761376201:web:1c1641544e0f00265da218",
  measurementId: "G-53HC1GDE37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);