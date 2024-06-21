
function drawChart(data) {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    const labels = data.map(item => item.month);
    const marijuanaData = data.map(item => item.marijuana);
    const cocaineData = data.map(item => item.cocaine);
    const mdmaData = data.map(item => item.mdma);
    const heroinData = data.map(item => item.heroin);

    const maxData = Math.max(...marijuanaData, ...cocaineData, ...mdmaData, ...heroinData);

    const colors = {
        marijuana: 'red',
        cocaine: 'blue',
        mdma: 'yellow',
        heroin: 'green'
    };

    ctx.beginPath();
    ctx.moveTo(50, 350); // Y 
    ctx.lineTo(50, 50);
    ctx.moveTo(50, 350); // X 
    ctx.lineTo(750, 350);
    ctx.stroke();

    ctx.font = '12px Arial';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    const yAxisStep = maxData / 10;
    for (let i = 0; i <= 10; i++) {
        const y = 350 - (300 * (i * yAxisStep) / maxData);
        ctx.fillText(Math.round(i * yAxisStep), 45, y);
        ctx.moveTo(50, y);
        ctx.lineTo(750, y);
    }
    ctx.strokeStyle = 'lightgrey';
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    labels.forEach((label, index) => {
        const x = 50 + (index * 60);
        ctx.fillText(label, x, 370);
    });

    function drawLine(data, color) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        data.forEach((value, index) => {
            const x = 50 + (index * 60);
            const y = 350 - (300 * value / maxData);
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
            ctx.arc(x, y, 3, 0, 2 * Math.PI);
        });
        ctx.stroke();
    }

    drawLine(marijuanaData, colors.marijuana);
    drawLine(cocaineData, colors.cocaine);
    drawLine(mdmaData, colors.mdma);
    drawLine(heroinData, colors.heroin);
}

async function getDrugs(){

    const countyName = window.location.href.split("=")[1];
    const auth_code = localStorage.getItem('auth_code');
    const data = await fetch('http://localhost:8080/api/drug_popularity/' + countyName, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + auth_code
        }
    });
    const response = await data.json();

    document.getElementById('line-chart-value').value = JSON.stringify(response);
    drawChart(response)
}

getDrugs()

document.getElementById('download-popularity').addEventListener('click', () => {

    const chartValuesObject = JSON.parse(document.getElementById('line-chart-value').value);
    const chartValuesArray = chartValuesObject.map(item => [item.county_id, item.month, item.year, item.marijuana, item.cocaine, item.mdma, item.heroin]);

    const data = [
        ["County", "Month", "Year", "Marijuana", "Cocaine", "Mdma", "Heroin"],
        ...chartValuesArray
    ];

    const csvContent = data.map(e => e.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "drugs_popularity.csv";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
})
