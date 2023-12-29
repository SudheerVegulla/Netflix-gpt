// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB99PUFTD9fpm5ibSBUS8VXe2kdlcLmF4A",
  authDomain: "netflixgpt-78c1e.firebaseapp.com",
  projectId: "netflixgpt-78c1e",
  storageBucket: "netflixgpt-78c1e.appspot.com",
  messagingSenderId: "878688547232",
  appId: "1:878688547232:web:923a83bf484252aad0f4c5",
  measurementId: "G-ZC8RZ50YB5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
