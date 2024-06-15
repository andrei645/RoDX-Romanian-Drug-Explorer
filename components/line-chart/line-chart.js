const mockedResponse = [
    {
        "month": "Jan",
        "marijuana": 30,
        "cocaine": 20,
        "mdma": 37,
        "heroin": 25
    },
    {
        "month": "Feb",
        "marijuana": 35,
        "cocaine": 25,
        "mdma": 18,
        "heroin": 22
    },
    {
        "month": "Mar",
        "marijuana": 40,
        "cocaine": 22,
        "mdma": 20,
        "heroin": 28
    },
    {
        "month": "Apr",
        "marijuana": 38,
        "cocaine": 19,
        "mdma": 21,
        "heroin": 30
    },
    {
        "month": "May",
        "marijuana": 42,
        "cocaine": 24,
        "mdma": 23,
        "heroin": 28
    },
    {
        "month": "Jun",
        "marijuana": 45,
        "cocaine": 20,
        "mdma": 19,
        "heroin": 27
    },
    {
        "month": "Jul",
        "marijuana": 43,
        "cocaine": 21,
        "mdma": 22,
        "heroin": 29
    },
    {
        "month": "Aug",
        "marijuana": 40,
        "cocaine": 18,
        "mdma": 20,
        "heroin": 26
    },
    {
        "month": "Sep",
        "marijuana": 44,
        "cocaine": 23,
        "mdma": 24,
        "heroin": 30
    },
    {
        "month": "Oct",
        "marijuana": 38,
        "cocaine": 19,
        "mdma": 21,
        "heroin": 27
    },
    {
        "month": "Nov",
        "marijuana": 41,
        "cocaine": 20,
        "mdma": 23,
        "heroin": 29
    },
    {
        "month": "Dec",
        "marijuana": 50,
        "cocaine": 25,
        "mdma": 26,
        "heroin": 35
    }
];

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

drawChart(response);