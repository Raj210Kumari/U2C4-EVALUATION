// write js code here corresponding to index.html
// You should add submit event on the form
var form = document.querySelector("#masaiForm").addEventListener("submit", detailsFun)
var detailsArr = JSON.parse(localStorage.getItem("schedule")) || []

function detailsFun() {
    event.preventDefault();
    var detailsObj = {
        matchNumber: masaiForm.matchNum.value,
        TeamA: masaiForm.teamA.value,
        TeamB: masaiForm.teamB.value,
        matchDate: masaiForm.date.value,
        matchVenue: masaiForm.venue.value,
    };
    detailsArr.push(detailsObj)
    localStorage.setItem("schedule", JSON.stringify(detailsArr))
    window.location.href = "matches.html"
}