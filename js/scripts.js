const screenWidth = window.innerWidth;
const navigationList = document.getElementsByClassName("navigation-items");
const navigationItem = document.getElementsByClassName("navigation-items__item");

function loadLoginForm() {
    document.querySelector(".login-form__load").addEventListener("click", (e) => {
        window.location.href = "login.html"
        console.log("test");
    })
}