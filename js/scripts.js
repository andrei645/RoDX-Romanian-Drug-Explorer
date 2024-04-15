import { loadHTMLFileIntoSection } from "../components/utils.js";

document.addEventListener('DOMContentLoaded', function () {
    loadHTMLFileIntoSection('components/diagram/diagrams.html', 'diagrams', 'components/diagram/diagram.js');
});


const screenWidth = window.innerWidth;
const navigationList = document.getElementsByClassName("navigation-items");
const navigationItem = document.getElementsByClassName("navigation-items__item");

function loadLoginForm() {
    document.querySelector(".login-form__load").addEventListener("click", (e) => {
        window.location.href = "login.html"
        console.log("test");
    })
}

document.getElementById("support-us-btn").addEventListener("click", function() {
    window.location.href = "./components/payment/payment-form.html";
});
