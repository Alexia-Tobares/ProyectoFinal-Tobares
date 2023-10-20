import React from 'react'
import ReactDOM from 'react-dom/client'
import productos from "./mocks/productos.json"
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9cTIx_Uag1VvEKxHRYBxavUWlytTUNrA",
  authDomain: "stay-strong-d7bd7.firebaseapp.com",
  projectId: "stay-strong-d7bd7",
  storageBucket: "stay-strong-d7bd7.appspot.com",
  messagingSenderId: "691776656369",
  appId: "1:691776656369:web:41ff8917321b904801aa50"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
