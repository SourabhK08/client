// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB20Awx0Z0xnL5B_TIr1gPHD-xd_gKja6E",
  authDomain: "authentication-f0c22.firebaseapp.com",
  projectId: "authentication-f0c22",
  storageBucket: "authentication-f0c22.appspot.com",
  messagingSenderId: "950336523197",
  appId: "1:950336523197:web:f6c07707a829e86f6e60d4",
  measurementId: "G-J0Q9GM2J83",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
