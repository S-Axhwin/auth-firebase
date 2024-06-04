// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkXux9ZdPVAxnRSJI8ibaRh2fEalHx1TM",
    authDomain: "myfirstnotbestapp.firebaseapp.com",
    databaseURL: "https://myfirstnotbestapp-default-rtdb.firebaseio.com",
    projectId: "myfirstnotbestapp",
    storageBucket: "myfirstnotbestapp.appspot.com",
    messagingSenderId: "114250342342",
    appId: "1:114250342342:web:d4c3f078cab32331401cc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
