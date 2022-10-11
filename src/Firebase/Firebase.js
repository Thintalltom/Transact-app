// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Gk93BKuZ56qZ0ySNXFimMuauIjX3fRs",
  authDomain: "react-authentication-be1f6.firebaseapp.com",
  projectId: "react-authentication-be1f6",
  storageBucket: "react-authentication-be1f6.appspot.com",
  messagingSenderId: "920706866948",
  appId: "1:920706866948:web:4e1a15d9d607ba5f837a51",
  measurementId: "G-LG1YDW07SB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
