import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC21DaYnRu0K5rZhNFJ4hVGayDtzDM183M",
    authDomain: "react-bllog-app.firebaseapp.com",
    projectId: "react-bllog-app",
    storageBucket: "react-bllog-app.appspot.com",
    messagingSenderId: "331218405668",
    appId: "1:331218405668:web:22170a8815a01c70fc0bb1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
