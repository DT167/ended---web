// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgTxUVXL8LV8LV8LKDNrZAus__vln9-AWdHM",
  authDomain: "t-web-df36d.firebaseapp.com",
  projectId: "t-web-df36d",
  storageBucket: "t-web-df36d.firebasestorage.app",
  messagingSenderId: "1057166792898",
  appId: "1:1057166792898:web:a03ad095b2241129e3835b",
  measurementId: "G-XQE9537E6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };