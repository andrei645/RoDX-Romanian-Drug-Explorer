var dataPoints = document.querySelectorAll('.data-point');
dataPoints.forEach(function(point) {
    var randomHeight = Math.floor(Math.random() * 80) + 10; 
    point.style.height = randomHeight + '%';
});

var dataPointsFemale = document.querySelectorAll('.data-point-female');
dataPointsFemale.forEach(function(point) {
    var randomHeight = Math.floor(Math.random() * 80) + 10; 
    point.style.height = randomHeight + '%';
});