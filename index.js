// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPpoxoBnm8y11GIEbdiYRitZxSfXqFFvo",
    authDomain: "food-fusion-1e03c.firebaseapp.com",
    projectId: "food-fusion-1e03c",
    storageBucket: "food-fusion-1e03c.appspot.com",
    messagingSenderId: "1051146015879",
    appId: "1:1051146015879:web:e0ff48b151166f7f495422",
    measurementId: "G-253LXKNR72"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Form submission handler
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorDiv = document.getElementById("error");

    // Firebase Authentication: Sign In with Email and Password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login successful
            alert("Login successful! Welcome, " + email);
            window.location.href = "dashboard.html"; // Redirect to dashboard or another page
        })
        .catch((error) => {
            // Handle errors
            const errorMessage = error.message;
            errorDiv.textContent = "Error: " + errorMessage;
        });
});
