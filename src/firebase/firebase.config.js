// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  apiKey: import.meta.env.VITE_apiKey,
  appId: import.meta.env.VITE_appId,
  authDomain: import.meta.env.VITE_authDomain,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
