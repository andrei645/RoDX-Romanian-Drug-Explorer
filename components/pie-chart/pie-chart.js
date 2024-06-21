async function getPieChartData() {
    const countyName = window.location.href.split("=")[1];
    const auth_code = localStorage.getItem('auth_code');
    
    try {
        const response = await fetch('http://localhost:8080/api/pie_chart_data/' + countyName, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + auth_code
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        updatePieChart(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function updatePieChart(data) {
    const pieWrap = document.getElementById('pie-wrap');
    pieWrap.innerHTML = '';  // Clear existing content

    const entries = [
        { colorClass: 'red', percentage: data.marijuanaValue, drugType: 'Marijuana' },
        { colorClass: 'dark-blue', percentage: data.cocaineValue, drugType: 'Cocaine' },
        { colorClass: 'wheat', percentage: data.mdmaValue, drugType: 'MDMA' },
        { colorClass: 'green', percentage: data.heroinValue, drugType: 'Heroin' },
        { colorClass: 'pink', percentage: data.amphetamineValue, drugType: 'Amphetamine' },
        { colorClass: 'purple', percentage: data.cannabis_resinValue, drugType: 'Cannabis resin' }
    ];

    entries.forEach(item => {
        const entry = document.createElement('div');
        entry.className = `${item.colorClass} entry`;

        const percentage = document.createElement('p');
        percentage.className = 'percentage';
        percentage.textContent = `${item.percentage}%`;

        const entryValue = document.createElement('p');
        // entryValue.className = 'entry-value';
        // entryValue.textContent = item.drugType;

        entry.appendChild(percentage);
        entry.appendChild(entryValue);
        pieWrap.appendChild(entry);
    });
}

getPieChartData();
