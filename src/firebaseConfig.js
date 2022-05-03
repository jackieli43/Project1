// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdKCfhnhMZuJ0TaeWoH_oMPVLdnUYiHSc",
  authDomain: "logger-6083a.firebaseapp.com",
  projectId: "logger-6083a",
  storageBucket: "logger-6083a.appspot.com",
  messagingSenderId: "164824755257",
  appId: "1:164824755257:web:758f5a1e3e9d59e7a331e8",
  measurementId: "G-M1F8VNXQS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);