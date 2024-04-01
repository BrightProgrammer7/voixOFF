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

document.getElementById("login").addEventListener("click", function () {
  var email = document.getElementById("login_email").value;
  var password = document.getElementById("login_password").value;

  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          alert(user.email + " Login successful!");
          window.location.href = "../../index.html";
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          alert(errorMessage);
      });
});