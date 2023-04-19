import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyDs8NPNnho4BxQ15PAYTwswYWeUs8FmJpU",
    authDomain: "form-30391.firebaseapp.com",
    projectId: "form-30391",
    storageBucket: "form-30391.appspot.com",
    messagingSenderId: "998447913500",
    appId: "1:998447913500:web:1c4d5b6a4783d246545dd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

document.getElementById("login").addEventListener("click", function() {
    var email =  document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert(user.email+" Login successfully!!!");
      window.location.replace("index.html")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });	
});