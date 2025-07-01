// src/firebase-config.ts
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyDdac6QvUWRGkSfEk8koaOnzvRowytSD08", // <-- tu clave real
  authDomain: "recibos-digitales-c1f67.firebaseapp.com",
  projectId: "recibos-digitales-c1f67",
  storageBucket: "recibos-digitales-c1f67.appspot.com",
  messagingSenderId: "960153431863",
  appId: "1:960153431863:web:76541646b5d8fdb484b4b2"
};



export const app = initializeApp(firebaseConfig);
