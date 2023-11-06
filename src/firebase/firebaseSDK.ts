// $ firebase login
// $ firebase init

// When you're ready, deploy your web app
// Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). 
// Then, run this command from your app's root directory:
// $ firebase deploy

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkKvIjVrjeBctkzEFja3jnqmxcTvrLP8o",
  authDomain: "sport-portal-a4ee3.firebaseapp.com",
  projectId: "sport-portal-a4ee3",
  storageBucket: "sport-portal-a4ee3.appspot.com",
  messagingSenderId: "324634681536",
  appId: "1:324634681536:web:342974654c5b5b11580d25",
  measurementId: "G-W9LTWX8NYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);