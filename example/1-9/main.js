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

    var i = 0;
    function run() {
        if (i >= photos.length) {
            i = 0;
        }
        document.getElementById("image").setAttribute('src', photos[i]);
        i++;
    }
    setInterval(run, 3000);
    run();
}