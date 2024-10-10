// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-6f995.firebaseapp.com",
    projectId: "mern-estate-6f995",
    storageBucket: "mern-estate-6f995.appspot.com",
    messagingSenderId: "166316297996",
    appId: "1:166316297996:web:ef044c60a564592d8f8329"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);