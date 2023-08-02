// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRsWOWM4eVy_6rRKwLlaquqeZlCQaEHBE",
  authDomain: "reactjs-61759.firebaseapp.com",
  projectId: "reactjs-61759",
  storageBucket: "reactjs-61759.appspot.com",
  messagingSenderId: "335179704321",
  appId: "1:335179704321:web:89c74ab7a6854b840ef800",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
