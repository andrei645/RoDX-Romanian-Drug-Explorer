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
        username: username,
        email: email,
        password: password
    };
    loginUsersArray.push(newUserObject);
    localStorage.setItem("users", JSON.stringify(loginUsersArray));
    console.log("New user added:", newUserObject);
}

function checkUsers() {
    const existingUser = loginUsersArray.find(user => user.username === document.getElementById("regUsername").value);

    if (checkRegisterFields()) {
        if (!existingUser) {
            saveUser(
                document.getElementById("regUsername").value,
                document.getElementById("regEmail").value,
                document.getElementById("regPassword").value
            );
            document.querySelector(".go-to-login").classList.remove("wrong");
            overlay.style.display = "none";
        } else {
            document.querySelector(".go-to-login").classList.add("wrong");
            document.querySelector(".go-to-login").innerText = "This user already exists. Log in?";
            checkLoggedUser();
        }
    } else {
        document.querySelector(".go-to-login").classList.add("wrong");
        document.querySelector(".go-to-login").innerText = "All fields are required";
    }
    console.log("Updated loginUsersArray:", loginUsersArray);
}

// function checkLoggedUser() {
//     const existingUser = loginUsersArray.find(user => user.username === document.getElementById("username").value);

//     if (checkLoginFields()) {
//         if (existingUser) {
//             document.querySelector(".go-to-register").innerText = "Welcome";
//         } else {
//             document.querySelector(".go-to-register").innerText = "User does not exist. Register?";
//             document.querySelector(".go-to-register").classList.add("wrong");
//         }
//     } else {
//         document.querySelector(".go-to-register").classList.add("wrong");
//         document.querySelector(".go-to-register").innerText = "All fields are required";
//     }
// }

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
        const existingUser = loginUsersArray.find(user => user.username === username && user.password === password);

        if (existingUser) {
            // User exists, redirect to index.html
            window.location.href = "../../index.html";
        } else {
            document.querySelector(".go-to-register").innerText = "User does not exist. Register?";
            document.querySelector(".go-to-register").classList.add("wrong");
        }
    } else {
        document.querySelector(".go-to-register").classList.add("wrong");
        document.querySelector(".go-to-register").innerText = "All fields are required";
    }
}

