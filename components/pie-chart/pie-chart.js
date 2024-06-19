async function getPieChartData(){

    const countyName = window.location.href.split("=")[1];
    const auth_code = localStorage.getItem('auth_code');
    const data = await fetch('http://localhost:8080/api/pie_chart_data/' + countyName, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + auth_code
        }
    });
    
    console.log(data);
    //data sending correctly for pie_chart_data
}
getPieChartData();