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
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check if the user is authenticated
onAuthStateChanged(auth, (user) => {
    if (!user) {
        // If the user is not authenticated, redirect to the login page
        window.location.href = "index.html";
    }
});

// Toggle the menu for small screens
document.getElementById("menu-btn").addEventListener("click", function() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
});
