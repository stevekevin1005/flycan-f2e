window.onload = function() {
    var photos;
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            photos = JSON.parse(this.responseText);
        }
    }
    req.open('GET', 'photos.json', false);
    req.send();
}
