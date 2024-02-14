// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1lnyBxcvAD9ctfzqoPH1IOKn8u8FaaUc",
  authDomain: "booi-koi.firebaseapp.com",
  projectId: "booi-koi",
  storageBucket: "booi-koi.appspot.com",
  messagingSenderId: "992605649649",
  appId: "1:992605649649:web:52e09f1483ba4dd1b0c750"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;