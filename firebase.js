// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChxbLaWhlTLHmQJdUK7N3ljPy04rcI1Os",
  authDomain: "hooshack-1c550.firebaseapp.com",
  projectId: "hooshack-1c550",
  storageBucket: "hooshack-1c550.appspot.com",
  messagingSenderId: "996994938112",
  appId: "1:996994938112:web:cc476f012d024b63bfafe5",
  measurementId: "G-TY7K4TSL38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);