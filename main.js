const BASE_URL = "https://zagster-service.herokuapp.com"


const G5_TC = "/rides/count/g5"
const COL_TC = "/rides/count/columbia_simpson"
const DRAKE_TC = "/rides/count/drake_park"
const GALV_TC = "/rides/count/galveston"
const GRC_TC = "/rides/count/grc"
const OLD_TC = "/rides/count/old_mill"
const OSU_TC = "/rides/count/osu_cascades"
const TEN_TC = "/rides/count/ten_barrel"

$(updateView)

function updateView() {
    $.getJSON(BASE_URL + G5_TC, updateRideCount)
    $.getJSON(BASE_URL + G5_TC, printData)
}

function updateRideCount(data) {
    $("h2#count").html(data.count);
    $("h2#count").css('visibility', 'visible').hide().fadeIn("slow");
}

function printData(data) {
    console.log(data)
}

