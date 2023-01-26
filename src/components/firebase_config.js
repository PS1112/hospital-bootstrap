// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1T9An9Ffppg5TMR1UIq3oSz7cIkDzXR8",
  authDomain: "sp-hospital345.firebaseapp.com",
  projectId: "sp-hospital345",
  storageBucket: "sp-hospital345.appspot.com",
  messagingSenderId: "477376870256",
  appId: "1:477376870256:web:cc8c404304f0ec8f8781b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);