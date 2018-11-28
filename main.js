const BASE_URL = "https://zagster-service.herokuapp.com"
var chartData = []
var rideData = []
$(updateView)




function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/per_month", getData)
}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}
function getData(data){
  rideData = data;
  
for (var i = 0; i <=3; ++i){
  chartData.push(rideData[2016] [i] [i+9]);
}
for (var i = 0; i <=11; ++i){
  chartData.push(rideData[2017] [i] [i+1]);
}
for (var i = 0; i <=9; ++i){
  chartData.push(rideData[2018] [i] [i+1]);
} 

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Sep 2016", "Oct 2016", "Nov 2016", "Dec 2016", "Jan 2017","Feb 2017", "Mar 2017", "Apr 2017", "Mar 2017", "Jun 2017", "Jul 2017", "Aug 2017", "Sep 2017", "Oct 2017", "Nov 2017", "Dec 2017", 
        "Jan 2018", "Feb 2018", "Mar 2018", "Apr 2018", "May 2018", "Jun 2018", "Jul 2018", "Aug 2018", "Sep 2018", "Oct 2018"],
        datasets: [{
            label: 'Rides Per Month',
            data: chartData,
            backgroundColor: [
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000'
                
                



            ],
            borderColor: [
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                '#000000',
                '#ff6000',
                


            ],
            borderWidth: 10
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}