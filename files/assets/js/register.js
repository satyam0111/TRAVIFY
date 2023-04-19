// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
    apiKey: "AIzaSyDA5SgY7V2FF4tKPU6yL-vaClUUxnD9318",
    authDomain: "travify-8dcfb.firebaseapp.com",
    projectId: "travify-8dcfb",
    storageBucket: "travify-8dcfb.appspot.com",
    messagingSenderId: "442748526368",
    appId: "1:442748526368:web:640f081cb4f60dd8254145"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

var firstname = document.getElementById("firstname")
var lastname = document.getElementById("lastname")
var email = document.getElementById("email")
var password = document.getElementById("password")

window.signup = function(e){
    e.preventDefault();
    var obj = {
        firstname:firstname.value,
        lastname:lastname.value,
        email:email.value,
        password:password.value,
    }

    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        alert(obj.email + " is succesfully registered!")
        window.location.replace("login.html")
    })
    .catch(function(err){
        alert("error"+err)
    })
    console.log(obj)
};
