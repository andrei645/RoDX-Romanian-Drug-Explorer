var urlParams = new URLSearchParams(window.location.search);
var county = urlParams.get('county');
console.log(urlParams)
const svg = document.querySelector('.line-chart');
const lines = document.querySelectorAll('.polyline');

function generateRandomDataSet(length, min, max) {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

function addLabelOnXAx(svg) {
    const numLabelsX = 9; // Includem și zero

    const distanceX = (420 - 20) / (numLabelsX - 1);

    for (let i = 0; i < numLabelsX; i++) {

        const x = 20 + i * distanceX;

        const labelValue = i * 50;

        const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        text.setAttribute('x', x.toString());
        text.setAttribute('y', '200');
        text.setAttribute('text-anchor', 'middle');
        text.textContent = labelValue.toString();

        svg.querySelector('.labels-x').appendChild(text);

        const line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute('class', 'vertical-line');
        line.setAttribute('x1', x.toString());
        line.setAttribute('y1', '177');
        line.setAttribute('x2', x.toString());
        line.setAttribute('y2', '182');
        line.setAttribute('stroke', 'black');
        line.setAttribute('stroke-width', '1');
        svg.appendChild(line);
    }
}

function addLabelOnYAx(svg) {
    const numLabelsY = 3;

    const distanceY = (180 - 20) / (numLabelsY - 1);

    const labelValuesY = [0, 20, 40];

    labelValuesY.forEach((value, index) => {
        const y = 180 - index * distanceY;

        const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        text.setAttribute('x', '17'); // 
        text.setAttribute('y', y.toString());
        text.setAttribute('text-anchor', 'end');
        text.setAttribute('alignment-baseline', 'middle');
        text.textContent = value.toString();

        svg.appendChild(text);

        const line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute('class', 'horizontal-line');
        line.setAttribute('x1', '18');
        line.setAttribute('y1', y.toString());
        line.setAttribute('x2', '22');
        line.setAttribute('y2', y.toString());
        line.setAttribute('stroke', 'black');
        line.setAttribute('stroke-width', '1');
        svg.appendChild(line);
    });
}

function addCirclePointsOnLineIntersection(svg, lines, dataset) {
    const pointRadius = 4;
    const colors = ['blue', 'yellow', 'green'];

    lines.forEach((line, index) => {
        const dataSet = dataSets[index];
        const points = dataSet.map((value, i) => {
            const x = 20 + i * 100;
            const y = 180 - value;

            if (value !== 180 && i != 0) {
                const circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                circle.setAttribute('cx', x.toString());
                circle.setAttribute('cy', y.toString());
                circle.setAttribute('r', pointRadius.toString());
                circle.setAttribute('fill', 'grey');
                svg.appendChild(circle);
            }

            return `${x},${y}`;
        }).join(' ');

        line.setAttribute('points', points);

        line.setAttribute('stroke', colors[index]);

    });
}

const numPoints = 10;

const dataSets = [
    generateRandomDataSet(numPoints, 20, 50),
    generateRandomDataSet(numPoints, 35, 80),
    generateRandomDataSet(numPoints, 60, 120)
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

addLabelOnYAx(svg);
addLabelOnXAx(svg);
addCirclePointsOnLineIntersection(svg, lines, dataSets);
