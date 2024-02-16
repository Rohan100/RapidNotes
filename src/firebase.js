// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf-4FkVS7MtUvF2D3I1RRLRnE-01owlF8",
  authDomain: "rapidnotes-72d3a.firebaseapp.com",
  projectId: "rapidnotes-72d3a",
  storageBucket: "rapidnotes-72d3a.appspot.com",
  messagingSenderId: "646245588474",
  appId: "1:646245588474:web:48779a5a10d49fd27b9843",
  measurementId: "G-52P0J15NZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

export{ app, auth };
