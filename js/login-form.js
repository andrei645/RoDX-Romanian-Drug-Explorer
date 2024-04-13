const overlay = document.getElementById("overlay");
const loginBtn = document.getElementById("loginBtn");
const loginBox = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const loginButton = document.getElementById("loginButton");
let registeredUsers = [];
const loginUsersArray = [];
const object = {
    username : document.getElementById("username").value,

}

loginBtn.addEventListener("click", function() {
    overlay.style.display = "block";
    showLoginForm();
});

document.body.addEventListener("click" , (e) => {
    if(!loginBox.contains(e.target) && e.target != loginBtn && !registerForm.contains(e.target)) {
        overlay.style.display = "none";
    }
})

function showRegisterForm() {
    loginBox.style.display = "none";
    registerForm.style.display = "block";
}

function showLoginForm() {
    loginBox.style.display= "block";
    registerForm.style.display ="none";
}

function checkUsers() {
    const existingUser = loginUsersArray.find(user => user.username === document.getElementById("regUsername").value);

    if(checkRegisterFields()) {
        if (!existingUser) {
            const newUserObject = {
                username: document.getElementById("regUsername").value,
                email : document.getElementById("regEmail").value,
                password: document.getElementById("regPassword").value
            };
            loginUsersArray.push(newUserObject);
            document.querySelector(".go-to-login").classList.remove("wrong");
            console.log("New user added:", newUserObject);
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

function checkLoggedUser(){
    const existingUser = loginUsersArray.find(user => user.username === document.getElementById("username").value);

    if (checkLoginFields()) {
    if(existingUser) {
        document.querySelector(".go-to-register").innerText = "Welcome";
    } else {
        document.querySelector(".go-to-register").innerText = "User does not exist. Register?";
        document.querySelector(".go-to-register").classList.add("wrong");
        }
    } else {
        document.querySelector(".go-to-register").classList.add("wrong");
        document.querySelector(".go-to-register").innerText = "All fields are required";
    }
}

function checkLoginFields(){
    if(document.getElementById("username").value !== "" && document.getElementById("password").value !== "") {
        return true;
    } else {
        return false;
    }
}

function checkRegisterFields(){
    if(document.getElementById("regUsername").value !== "" && document.getElementById("regEmail").value !== "" && 
    document.getElementById("regPassword").value !== "") {
        return true;
    }
    else {
        return false;
    }
}