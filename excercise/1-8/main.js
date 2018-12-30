var requestURL = 'hero.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
request.onload = function () {

}

function populateHeader(jsonObj) {
}

function showHeroes(jsonObj) {
}