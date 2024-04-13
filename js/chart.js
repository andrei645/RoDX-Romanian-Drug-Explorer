import { loadHTMLFileIntoSection } from "../components/utils.js";

document.addEventListener('DOMContentLoaded', function () {
    loadHTMLFileIntoSection('components/column-chart/column-chart.html', 'charts-container__column-chart', 'components/column-chart/column-chart.js');
    loadHTMLFileIntoSection('components/pie-chart/pie-chart.html', 'charts-container__flex-container-pie-chart', 'components/column-chart/pie-chart.js');

});    

