// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuK5hbMRJ9EHlveUJSkC5zU22AnlC4Uqc",
  authDomain: "preshwise-963b7.firebaseapp.com",
  projectId: "preshwise-963b7",
  storageBucket: "preshwise-963b7.firebasestorage.app",
  messagingSenderId: "294342206939",
  appId: "1:294342206939:web:0e44dc857ae3ab34edb3fe",
  measurementId: "G-D3611M7TWN"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);