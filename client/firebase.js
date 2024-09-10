// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArC2dzbqfuSCRvHwDUNO7aviPfI3uN8zM",
  authDomain: "mern-realestate-f9b7f.firebaseapp.com",
  projectId: "mern-realestate-f9b7f",
  storageBucket: "mern-realestate-f9b7f.appspot.com",
  messagingSenderId: "129684147011",
  appId: "1:129684147011:web:df89432f4897a23b8e3df6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);