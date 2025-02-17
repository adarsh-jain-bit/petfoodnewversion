// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAExwPy4ss2-ZjH4HPe3488Dg-zc5FD9bo",
  authDomain: "pet-food-app-ea647.firebaseapp.com",
  projectId: "pet-food-app-ea647",
  storageBucket: "pet-food-app-ea647.appspot.com",
  messagingSenderId: "791704786483",
  appId: "1:791704786483:web:9f026527b132fb16d3b546",
  measurementId: "G-QBBNV72F7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
