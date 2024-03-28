// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "golds-estate.firebaseapp.com",
    projectId: "golds-estate",
    storageBucket: "golds-estate.appspot.com",
    messagingSenderId: "14637401369",
    appId: "1:14637401369:web:c8738d135fb6f0394a3188",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
