import { loadHTMLFileIntoSection } from "../components/utils.js";

document.addEventListener('DOMContentLoaded', function () {
    loadHTMLFileIntoSection('components/slider/slider.html', 'landing-page-slider', 'components/slider/slider.js');
    // loadHTMLFileIntoSection('components/login-form/login.html', 'join-comunity', 'components/login-form/login-form.js');
});
const redirectButton = document.getElementById("join-comunity");

redirectButton.addEventListener("click", function() {
    window.location.href = "./components/login-form/login.html";
});
