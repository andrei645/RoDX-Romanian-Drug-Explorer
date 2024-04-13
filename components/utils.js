export const loadHTMLFileIntoSection = (filePath, sectionId, scriptName) => {
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
            scriptElement.src = scriptName;
           
            document.body.appendChild(scriptElement);
        })
        .catch(error => {
            console.error('There was a problem fetching the HTML file:', error);
        });
};
