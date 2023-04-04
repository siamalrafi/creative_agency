// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEHMP6iVhE6OWUYZW4DPOeDz4DmFzVXX4",
    authDomain: "creativeagency-1e265.firebaseapp.com",
    projectId: "creativeagency-1e265",
    storageBucket: "creativeagency-1e265.appspot.com",
    messagingSenderId: "238988706544",
    appId: "1:238988706544:web:62ef970333ae6129a6f835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export app
export default app;