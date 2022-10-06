// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBRWWfGNJkh5KbXcb3U3nzhgE1I0UsDj3U",
    authDomain: "netflix-clone-app-c1150.firebaseapp.com",
    projectId: "netflix-clone-app-c1150",
    storageBucket: "netflix-clone-app-c1150.appspot.com",
    messagingSenderId: "14897394137",
    appId: "1:14897394137:web:c0197bffc71e28676529c8",
    measurementId: "G-DL2E9RHH9Y"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);