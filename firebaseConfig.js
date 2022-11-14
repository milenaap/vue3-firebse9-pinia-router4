// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC3IrqTSrE-kj1UUTTs8QhHddd_PK9RQ0Y",
  authDomain: "fir-app-8f166.firebaseapp.com",
  projectId: "fir-app-8f166",
  storageBucket: "fir-app-8f166.appspot.com",
  messagingSenderId: "980941790333",
  appId: "1:980941790333:web:7269428d4a2791bd712514"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export { auth };