import { loadHTMLFileIntoSection, romanianCounties } from "../components/utils.js";

document.addEventListener('DOMContentLoaded', function () {
    loadHTMLFileIntoSection('components/diagram/diagrams.html', 'diagrams', 'components/diagram/diagram.js');
    loadHTMLFileIntoSection('components/faq/faq.html', 'faq', 'components/faq/faq.js');

});



document.getElementById("support-us-btn").addEventListener("click", function() {
    window.location.href = "./components/payment/payment-form.html";
});


document.getElementById("community-btn").addEventListener("click", function() {
    window.location.href = "./landing-page.html";
});

