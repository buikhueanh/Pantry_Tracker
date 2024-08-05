// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAumjwIn6BLjDcqWHIhRa2uubhW7Xvu6wo",
  authDomain: "inventory-management-2574d.firebaseapp.com",
  projectId: "inventory-management-2574d",
  storageBucket: "inventory-management-2574d.appspot.com",
  messagingSenderId: "336643790892",
  appId: "1:336643790892:web:7e9070c07175b505a01989",
  measurementId: "G-M92V7YQ3KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}
