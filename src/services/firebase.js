// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
// import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
import { apiKey, authDomain,appId,measurementId, messagingSenderId, projectId, storageBucket } from "./config";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:apiKey,
    authDomain:authDomain,
    projectId:projectId,
    storageBucket:storageBucket,
    messagingSenderId:messagingSenderId ,
    appId:appId,
    measurementId:measurementId

  };
  
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// export const auth = getAuth(app)
const analytics = getAnalytics(app);