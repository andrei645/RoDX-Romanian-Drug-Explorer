

async function getDrugPopularity() {


    const countyName = window.location.href.split("=")[1];
    const auth_code = localStorage.getItem('auth_code');
    const data = await fetch('http://localhost:8080/api/drug_reports/' + countyName, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + auth_code
        }
    });

    const response = await data.json();
    document.getElementById('chart-value-hidden').value = JSON.stringify(response);
    const groupedData = {};

    response.forEach(item => {
        const { year, male, female } = item;

        if (!groupedData[year]) {
            groupedData[year] = { male: 0, female: 0 };
        }

        groupedData[year].male += male;
        groupedData[year].female += female;

    });

    var yearsContainer = document.getElementById('years');

    let leftStyleSpan = 7.5;
    const NEXT_SPAN_ELEM = 15;
    const defaultColumnLeftStyle = 5;
    let leftMargin = 5;

    Object.keys(groupedData).forEach((year, index) => {
        const spanElement = document.createElement('span');
        spanElement.classList.add('year');
        spanElement.style.left = leftStyleSpan + '%';
        spanElement.textContent = year;
        yearsContainer.appendChild(spanElement);
        leftStyleSpan += NEXT_SPAN_ELEM;

        const dataPointContainer = document.getElementById('line');
        const maleColumn = document.createElement('div');
        const femaleColumn = document.createElement('div');

        maleColumn.classList.add('data-point');

        femaleColumn.classList.add('data-point-female');


        maleColumn.style.left = leftMargin + '%';
        femaleColumn.style.left = defaultColumnLeftStyle + leftMargin + '%'

        maleColumn.style.height = groupedData[year].male + '%';
        femaleColumn.style.height = groupedData[year].female + '%';

        leftMargin = leftMargin + 15;

        dataPointContainer.appendChild(maleColumn);
        dataPointContainer.appendChild(femaleColumn);

    });
}


function saveCSV() {

    const chartValuesObject = JSON.parse(document.getElementById('chart-value-hidden').value);
    const chartValuesArray = chartValuesObject.map(item => [item.year, item.countyId, item.male, item.female]);

    const data = [
        ["Year", "County", "Male", "Female"],
        ...chartValuesArray
    ];


    const csvContent = data.map(e => e.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "report_of_people.csv";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

getDrugPopularity();

const downloadCSVButton = document.getElementById('download-csv');
downloadCSVButton.addEventListener('click', () => {

    saveCSV()

});