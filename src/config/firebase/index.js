import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB-X8JvjLA3oaxO8QEbnu8BriBFH7XA2U",
  authDomain: "askdev-1acaa.firebaseapp.com",
  projectId: "askdev-1acaa",
  storageBucket: "askdev-1acaa.appspot.com",
  messagingSenderId: "172396897819",
  appId: "1:172396897819:web:e6f8f3e41033bf53a83abe",
  measurementId: "G-M0PW16D87T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
