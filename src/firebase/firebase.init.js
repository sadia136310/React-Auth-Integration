// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYFxyaKPlnNeh_7qTuf2glOb8QPs2_KEo",
  authDomain: "auth-router-conrext.firebaseapp.com",
  projectId: "auth-router-conrext",
  storageBucket: "auth-router-conrext.appspot.com",
  messagingSenderId: "733153758761",
  appId: "1:733153758761:web:037aa1e05fbfbb00151638"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;