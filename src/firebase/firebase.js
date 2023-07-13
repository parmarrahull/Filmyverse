import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyClc9OTJlL26MB9Kf2damGtfjDAVP_G9Gg",
    authDomain: "filmyverse-479cd.firebaseapp.com",
    projectId: "filmyverse-479cd",
    storageBucket: "filmyverse-479cd.appspot.com",
    messagingSenderId: "584720320211",
    appId: "1:584720320211:web:dcae2c177c3f24982fb626"
};

const apps = initializeApp(firebaseConfig);


export const db = getFirestore(apps);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default apps