// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZHY4U0TgCIYZOk56NdhJRZn6y0rhVMCk",
  authDomain: "react-product-listing-mustafa.firebaseapp.com",
  projectId: "react-product-listing-mustafa",
  storageBucket: "react-product-listing-mustafa.appspot.com",
  messagingSenderId: "740375255604",
  appId: "1:740375255604:web:8bceb76e3325c023e14861",
  measurementId: "G-5FR0YLMKFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =  getDatabase(app);
export const storage = getStorage(app);