// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxe7DQgHMCdMc___hak9zHjTnT1QS9oqg",
  authDomain: "netflixgpt-c3a7b.firebaseapp.com",
  projectId: "netflixgpt-c3a7b",
  storageBucket: "netflixgpt-c3a7b.firebasestorage.app",
  messagingSenderId: "715274732821",
  appId: "1:715274732821:web:0e469addf3c3188e8d551c",
  measurementId: "G-4HHQ37X518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

