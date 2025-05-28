// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJrWF3MlWXhxU-FeEmxVLaAGFndUsfgLQ",
  authDomain: "techbazar24-7798a.firebaseapp.com",
  projectId: "techbazar24-7798a",
  storageBucket: "techbazar24-7798a.firebasestorage.app",
  messagingSenderId: "402279619727",
  appId: "1:402279619727:web:0d56843664bca98f38e4fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;