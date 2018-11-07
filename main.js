const BASE_URL = "https://zagster-service.herokuapp.com"
$(updateView)
function updateView() {
  alert('This is awsome!')
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}
function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
}