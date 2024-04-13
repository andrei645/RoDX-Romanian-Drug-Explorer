import { loadHTMLFileIntoSection } from "../components/utils.js";

document.addEventListener('DOMContentLoaded', function () {
    loadHTMLFileIntoSection('components/column-chart/column-chart.html', 'charts-container__column-chart', 'components/column-chart/column-chart.js');
    loadHTMLFileIntoSection('components/pie-chart/pie-chart.html', 'charts-container__flex-container-pie-chart', 'components/pie-chart/pie-chart.js');
    loadHTMLFileIntoSection('components/line-chart/line-chart.html', 'charts-container__flex-container-line-chart', 'components/line-chart/line-chart.js');

});    

