
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAFSlsHg1rhrpq1tAFSUu050lYD73s6rxI",
    authDomain: "learning-portal-b17cd.firebaseapp.com",
    projectId: "learning-portal-b17cd",
    storageBucket: "learning-portal-b17cd.appspot.com",
    messagingSenderId: "432297172789",
    appId: "1:432297172789:web:f9af3d983f3984201df67c",
    measurementId: "G-J38JG8YTPZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignupLink = document.getElementById('showSignup');
    const showLoginLink = document.getElementById('showLogin');

    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('signupPage');
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('loginPage');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        if(email=='admin@kce.ac.in' && password=='admin123'){
            window.location.href='Admin.html'; 
        }

        else if (email && password) {
            if (isValidEmail(email)) {
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        alert("Logged in successfully!");
                        window.location.href = 'index2.html'; 
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        alert("Error: " + errorMessage);
                    });
            } else {
                alert("Please enter a valid email address.");
            }
        } else {
            alert("Please enter both email and password.");
        }
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (username && email && password && confirmPassword) {
            if (isValidEmail(email)) {
                if (password === confirmPassword) {
                    createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            alert("Account created successfully!");
                            showPage('loginPage');
                        })
                        .catch((error) => {
                            const errorMessage = error.message;
                            alert("Error: " + errorMessage);
                        });
                } else {
                    alert("Passwords do not match.");
                }
            } else {
                alert("Please enter a valid email address.");
            }
        } else {
            alert("Please fill in all fields.");
        }
    });
});
