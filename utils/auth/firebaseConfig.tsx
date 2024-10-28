// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, isSignInWithEmailLink } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_duqZWxydRYtp0SXuNMGFVqTgpSoDY0A",
  authDomain: "slots-calendar-app.firebaseapp.com",
  projectId: "slots-calendar-app",
  storageBucket: "slots-calendar-app.appspot.com",
  messagingSenderId: "1080303265785",
  appId: "1:1080303265785:web:810854323804e29f317f28",
  measurementId: "G-ZZ1TB35V52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };