var ctx = document.getElementById("patientChart");
var patientChart = new Chart(ctx, {
type: 'line',
data: {
    labels: [],
    datasets: [{
    data: [],
    lineTension: 0,
    backgroundColor: 'transparent',
    borderColor: '#007bff',
    borderWidth: 4,
    pointBackgroundColor: '#007bff'
    }]
},
options: {
    scales: {
    yAxes: [{
        ticks: {
        beginAtZero: false
        }
    }]
    },
    legend: {
    display: false,
    }
}
});
$.ajax({
    url: '<azure-blob-service-rest-api-url>',
    success: function(data) {
        debugger;
        data = JSON.parse(data + ']');
        var patient1Data = _.filter(data, { deviceid: 'Patient1MonitoringDevice' });
        console.log(patient1Data);
        patientChart.data.datasets[0].data = _.map(patient1Data, 'avgheartrate');
        patientChart.data.labels = _.map(patient1Data, 'outputtime');
        patientChart.update();
    },  
    //dataType: 'json'
});