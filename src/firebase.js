/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9tPyalehdVqmjarV_pWHXG5-HllDN3Ow",
  authDomain: "h2code-e-commerce.firebaseapp.com",
  projectId: "h2code-e-commerce",
  storageBucket: "h2code-e-commerce.appspot.com",
  messagingSenderId: "388459136921",
  appId: "1:388459136921:web:d36f87911c1295803cf508",
  measurementId: "G-TR88VRWK8T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export default app;
