// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByCvwI1zJgENrjrgjIKIMoVkX4XAp0CeU",
  authDomain: "voix-off-ai.firebaseapp.com",
  projectId: "voix-off-ai",
  storageBucket: "voix-off-ai.appspot.com",
  messagingSenderId: "1098652714736f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();