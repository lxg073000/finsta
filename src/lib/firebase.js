import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const config = {
  apiKey: "AIzaSyD0mFX9Tj4Yw85aIshWdEJnGEmD0d2ftiA",
  authDomain: "finst-lg.firebaseapp.com",
  projectId: "finst-lg",
  storageBucket: "finst-lg.appspot.com",
  messagingSenderId: "889850045741",
  appId: "1:889850045741:web:76217c1c6358ecd9599fa4",
};

const firebase = initializeApp(config);
const fireDB = getFirestore(firebase);
const fireAuth = getAuth(firebase);

// import { seedDatabase } from "../seed";

// const firebase = Firebase.initializeApp(config);

// const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, fireDB, fireAuth };
