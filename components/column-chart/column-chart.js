const response = [
    {
        id: 1,
        year: "2015",
        county: "CountyA",
        male: 50,
        female: 60
    },
    {
        id: 3,
        year: "2016",
        county: "CountyA",
        male: 50,
        female: 60
    },
    {
        id: 5,
        year: "2017",
        county: "CountyA",
        male: 50,
        female: 60
    },
    {
        id: 5,
        year: "2018",
        county: "CountyA",
        male: 50,
        female: 60
    },
    {
        id: 5,
        year: "2019",
        county: "CountyA",
        male: 20,
        female: 40
    },
    {
        id: 5,
        year: "2020",
        county: "CountyA",
        male: 50,
        female: 60
    },
];

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

