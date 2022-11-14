import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR8JUrr7FA_XyLth9Vd8itSQ-qJyEBlqA",
  authDomain: "react-ecommerce-c058f.firebaseapp.com",
  projectId: "react-ecommerce-c058f",
  storageBucket: "react-ecommerce-c058f.appspot.com",
  messagingSenderId: "935561824570",
  appId: "1:935561824570:web:313727ad7d9f92adeaa803",
};

initializeApp(firebaseConfig);
export const db = getFirestore();

export const colRef = collection(db, "cart_items");
