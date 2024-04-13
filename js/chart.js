import { loadHTMLFileIntoSection, romanianCounties } from "../components/utils.js";


document.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var county = urlParams.get('county');
    
    const countyDetails = romanianCounties.find(countyElem => countyElem.name === county);

    if(countyDetails){
        const populationText = countyDetails.name + ' has a population of ' + countyDetails.population + ' inhabitants.';
        document.getElementById('county-name').textContent = countyDetails.name;
        document.getElementById('county-description').textContent = countyDetails.description + ' ' + populationText;
    }

    loadHTMLFileIntoSection('components/column-chart/column-chart.html', 'charts-container__column-chart', 'components/column-chart/column-chart.js');
    loadHTMLFileIntoSection('components/pie-chart/pie-chart.html', 'charts-container__flex-container-pie-chart', 'components/pie-chart/pie-chart.js');
    loadHTMLFileIntoSection('components/line-chart/line-chart.html', 'charts-container__flex-container-line-chart', 'components/line-chart/line-chart.js');

    romanianCounties.forEach
});    

