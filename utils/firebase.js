// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArRFJssZknLDKHnvT00Au4QeiQRJyfYOI",
    authDomain: "creative-writes-c7dd6.firebaseapp.com",
    projectId: "creative-writes-c7dd6",
    storageBucket: "creative-writes-c7dd6.appspot.com",
    messagingSenderId: "830118571335",
    appId: "1:830118571335:web:cf9b1afc40b1bbc8197062",
    measurementId: "G-80PLT6VL6L"
};

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);