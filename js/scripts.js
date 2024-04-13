document.addEventListener('DOMContentLoaded', function () {
    loadHTMLFileIntoSection('diagrams.html', 'diagrams', 'diagram.js');
    loadHTMLFileIntoSection('slider.html', 'carousel', 'slider.js')

});

function loadHTMLFileIntoSection(filePath, sectionId, scriptName) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(htmlContent => {
            document.getElementById(sectionId).innerHTML = htmlContent;
            const scriptElement = document.createElement('script');
            scriptElement.src = 'js/' + scriptName;
           
            document.body.appendChild(scriptElement);
        })
        .catch(error => {
            console.error('There was a problem fetching the HTML file:', error);
        });
}

const screenWidth = window.innerWidth;
const navigationList = document.getElementsByClassName("navigation-items");
const navigationItem = document.getElementsByClassName("navigation-items__item");

function loadLoginForm() {
    document.querySelector(".login-form__load").addEventListener("click", (e) => {
        window.location.href = "login.html"
        console.log("test");
    })
}