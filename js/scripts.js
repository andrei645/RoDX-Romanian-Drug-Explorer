import { loadHTMLFileIntoSection, romanianCounties } from "../components/utils.js";

document.addEventListener('DOMContentLoaded', function () {
    loadHTMLFileIntoSection('components/diagram/diagrams.html', 'diagrams', 'components/diagram/diagram.js');
    loadHTMLFileIntoSection('components/faq/faq.html', 'faq', 'components/faq/faq.js');

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

