import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDmcpGCsvWzhp7y_ELooXD5jNoHejaw_4c",
  authDomain: "dream-pix.firebaseapp.com",
  databaseURL: "https://dream-pix-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dream-pix",
  storageBucket: "dream-pix.firebasestorage.app",
  messagingSenderId: "755265040947",
  appId: "1:755265040947:web:1eb85804d265244d2f2946",
  measurementId: "G-NRHSG5Y1CS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);