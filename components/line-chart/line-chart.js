
const svg = document.querySelector('.line-chart');
const lines = document.querySelectorAll('.polyline');

function generateRandomDataSet(length, min, max) {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

function addLabelOnXAx(svg) {
    const numLabelsX = 12; // Includem și zero

    const lunilePrescurtate = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      

    const distanceX = (710 - 20) / (numLabelsX - 1);

    for (let i = 0; i < numLabelsX; i++) {

        const x = 20 + i * distanceX;

        const labelValue = lunilePrescurtate[i];

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

function addCirclePointsOnLineIntersection(svg, lines, dataset) {
    const pointRadius = 4;
    const colors = ['blue', 'yellow', 'green', 'red'];
    const lunilePrescurtate = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    lines.forEach((line, lineIndex) => {
        const dataSet = dataset[lineIndex];
        const distanceX = (710 - 20) / (lunilePrescurtate.length - 1); // Ajustăm distanța pe axa x

        const points = dataSet.map((value, dataIndex) => {
            const x = 20 + dataIndex * distanceX;
            const y = 180 - value;

            const circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            circle.setAttribute('cx', x.toString());
            circle.setAttribute('cy', y.toString());
            circle.setAttribute('r', pointRadius.toString());
            circle.setAttribute('fill', colors[lineIndex]);
            svg.appendChild(circle);

            if (dataIndex !== 0) {
                const prevX = 20 + (dataIndex - 1) * distanceX;
                const prevY = 180 - dataSet[dataIndex - 1];

                const line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
                line.setAttribute('x1', prevX.toString());
                line.setAttribute('y1', prevY.toString());
                line.setAttribute('x2', x.toString());
                line.setAttribute('y2', y.toString());
                line.setAttribute('stroke', colors[lineIndex]);
                line.setAttribute('stroke-width', '2');
                svg.appendChild(line);
            }

            return `${x},${y}`;
        }).join(' ');

        line.setAttribute('points', points);
    });
}



const numPoints = 12;

const dataSets = [
    generateRandomDataSet(numPoints, 20, 50),
    generateRandomDataSet(numPoints, 35, 80),
    generateRandomDataSet(numPoints, 60, 120),
    generateRandomDataSet(numPoints, 40, 160)

];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

addLabelOnXAx(svg);
addCirclePointsOnLineIntersection(svg, lines, dataSets);
