// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  getRedirectResult,
} from "firebase/auth"; // Import the auth module

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALgOfd8ikuiazaFDKevIY5yrQRGw99lfE",
  authDomain: "telegrambot-430c6.firebaseapp.com",
  projectId: "telegrambot-430c6",
  storageBucket: "telegrambot-430c6.appspot.com",
  messagingSenderId: "829786538726",
  appId: "1:829786538726:web:2d7fc370fd428d12fef127",
  measurementId: "G-6GWFNCVH0S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseAuth = getAuth(app); // Get the auth instance

const googleProvider = new GoogleAuthProvider(); // Create a GoogleAuthProvider instance

export {
  firebaseAuth as auth,
  googleProvider,
  onAuthStateChanged,
  getRedirectResult,
};
