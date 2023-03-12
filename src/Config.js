// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRBeMoKOgnXTlF3p6dbElCN4psIaLCv18",
  authDomain: "fir-af488.firebaseapp.com",
  projectId: "fir-af488",
  storageBucket: "fir-af488.appspot.com",
  messagingSenderId: "493549547745",
  appId: "1:493549547745:web:8794ea83615a03ca7607a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}