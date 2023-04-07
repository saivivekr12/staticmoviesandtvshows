// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8eVd5EuqCCqmvLoX-q14QWcYZTqkiu2c",
  authDomain: "react-authentication-b0080.firebaseapp.com",
  projectId: "react-authentication-b0080",
  storageBucket: "react-authentication-b0080.appspot.com",
  messagingSenderId: "608645229773",
  appId: "1:608645229773:web:a576ea95aee1fa04c4cd84",
  measurementId: "G-L408T28VTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export {app,auth}