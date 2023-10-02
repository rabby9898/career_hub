// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDyHtF3TDJ_JFF5fvPQRLlGxqSIgXCF4A",
  authDomain: "career-hub-1dda4.firebaseapp.com",
  projectId: "career-hub-1dda4",
  storageBucket: "career-hub-1dda4.appspot.com",
  messagingSenderId: "280228256986",
  appId: "1:280228256986:web:ec921ffa0e6703eb01d9e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
