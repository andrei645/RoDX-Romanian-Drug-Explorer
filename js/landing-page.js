import { loadHTMLFileIntoSection } from "../components/utils.js";

document.addEventListener('DOMContentLoaded', function () {
    loadHTMLFileIntoSection('components/slider/slider.html', 'landing-page-slider', 'components/slider/slider.js');
    loadHTMLFileIntoSection('components/faq/faq.html', 'faq', 'components/faq/faq.js');
    loadHTMLFileIntoSection('components/expanding-cards/expanding-cards.html', 'community-cards', 'components/expanding-cards/expanding-cards.js');
});
const redirectButton = document.getElementById("join-comunity");

redirectButton.addEventListener("click", function() {
    window.location.href = "./components/login-form/login.html";
});
