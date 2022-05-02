// write js code here corresponding to favourites.html
var favouritesArr = JSON.parse(localStorage.getItem("favourites")) || []

displayData(favouritesArr);

function displayData(favouritesArr) {
    favouritesArr.forEach(function(el, index) {
        var row = document.createElement("tr")

        var col1 = document.createElement("td");
        col1.innerText = el.matchNumber

        var col2 = document.createElement("td")
        col2.innerText = el.TeamA

        var col3 = document.createElement("td")
        col3.innerText = el.TeamB

        var col4 = document.createElement("td")
        col4.innerText = el.matchDate

        var col5 = document.createElement("td")
        col5.innerText = el.matchVenue

        var col6 = document.createElement("td")
        col6.innerText = "Delete"
        col6.style.color = "red"
        col6.style.cursor = "pointer"
        col6.addEventListener("click", function() {
            deleteFun(el, index)
        })
        row.append(col1, col2, col3, col4, col5, col6)
        document.querySelector("tbody").append(row)
    })
}

function deleteFun(el, index) {
    favouritesArr.splice(index, 1)
    localStorage.setItem("favourites", JSON.stringify(favouritesArr))
    window.location.reload();
}