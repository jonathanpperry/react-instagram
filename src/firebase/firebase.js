// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDR6lMx-UcBrzBsxeFbqbqOKBjj5RKw4A",
  authDomain: "reacstagram.firebaseapp.com",
  projectId: "reacstagram",
  storageBucket: "reacstagram.appspot.com",
  messagingSenderId: "406421441328",
  appId: "1:406421441328:web:25ea0ccf4dc5466a09d6f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
