import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYcNrox7ij7JbPA_CIxnlfR98qnlHEWg8",
  authDomain: "chat-app-production-a53c7.firebaseapp.com",
  projectId: "chat-app-production-a53c7",
  storageBucket: "chat-app-production-a53c7.appspot.com",
  messagingSenderId: "993439016252",
  appId: "1:993439016252:web:a425bcc775845441642a39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)