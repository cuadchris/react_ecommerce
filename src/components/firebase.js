// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR8JUrr7FA_XyLth9Vd8itSQ-qJyEBlqA",
  authDomain: "react-ecommerce-c058f.firebaseapp.com",
  projectId: "react-ecommerce-c058f",
  storageBucket: "react-ecommerce-c058f.appspot.com",
  messagingSenderId: "935561824570",
  appId: "1:935561824570:web:313727ad7d9f92adeaa803"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();

export const colRef = collection(db, "cart_items")
