import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
    apiKey: "-nhD8iA",
    authDomain: "dreampix-e9fe5.firebaseapp.com",
    projectId: "dreampix-e9fe5",
    storageBucket: "dreampix-e9fe5.firebasestorage.app",
    messagingSenderId: "333244109794",
    appId: "1:333244109794:web:5c876671c1a4d6f70a5fbb",
    measurementId: "G-6X5YS3TJVK"
  };

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);