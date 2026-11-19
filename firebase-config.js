
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { getFunctions } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-functions.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxmaPhwbKk7sr_TBDlyIIbImUKYt2kTBE",
  authDomain: "airline-corner-academy.firebaseapp.com",
  projectId: "airline-corner-academy",
  storageBucket: "airline-corner-academy.firebasestorage.app",
  messagingSenderId: "724707690176",
  appId: "1:724707690176:web:a6d223aa61f6fd4a4a8f25",
  measurementId: "G-3P08830LKZ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app, "asia-south1");

export const authPersistence = setPersistence(
  auth,
  browserLocalPersistence
);
