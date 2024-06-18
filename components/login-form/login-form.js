const overlay = document.getElementById("overlay");
const loginBtn = document.getElementById("join-comunity");
const loginBox = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const loginButton = document.getElementById("loginButton");
const loginUsersArray = JSON.parse(localStorage.getItem("users")) || [];

document.addEventListener("DOMContentLoaded", function() {
    overlay.style.display = "block";
    showLoginForm();
});

document.body.addEventListener("click", (e) => {
    if (!loginBox.contains(e.target) && e.target != loginBtn && !registerForm.contains(e.target)) {
        overlay.style.display = "none";
    }
});

function showRegisterForm() {
    loginBox.style.display = "none";
    registerForm.style.display = "block";
}

function showLoginForm() {
    loginBox.style.display = "block";
    registerForm.style.display = "none";
}

function saveUser(username, email, password) {
    const newUserObject = {
        username: document.getElementById('regUsername').value,
        email: document.getElementById('regEmail').value,
        password: document.getElementById('regPassword').value
    };

    fetch('http://localhost:8080/api/register', {
        method:'POST',
        body:JSON.stringify(newUserObject)
    }).then((response)=>{
        console.log(response);
        if(response.status === 201) {
            window.location.href = "./login.html";
        } else {
            document.querySelector(".go-to-login").classList.add("wrong");
            document.querySelector(".go-to-login").innerText = "Error registering user";
        }
    })
}

function checkLoginFields() {
    return document.getElementById("username").value !== "" && document.getElementById("password").value !== "";
}

function checkRegisterFields() {
    return document.getElementById("regUsername").value !== "" && document.getElementById("regEmail").value !== "" && document.getElementById("regPassword").value !== "";
}

function checkLoggedUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (checkLoginFields()) {
        const loggedUser = {
            email: document.getElementById('username').value,
            password: document.getElementById('password').value
        };
    
        fetch('http://localhost:8080/api/authenticate', {
            method:'POST',
            body:JSON.stringify(loggedUser)
        }).then((response)=>{
            if(response.status === 200) {
                window.location.href = "../../index.html";
            } else {
                document.querySelector(".go-to-register").classList.add("wrong");
                document.querySelector(".go-to-register").innerText = "Error logging in";
            }
        })
    }
}
