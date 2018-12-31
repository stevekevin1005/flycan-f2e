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
        var img = document.getElementById('image');
        var information = document.getElementById('information');
        var fadeOut = setInterval(function () {
            if (!img.style.opacity) {
                img.style.opacity = 1
            }
            if (img.style.opacity > 0) {
                img.style.opacity -= 0.05
            } else {
                img.style.opacity = 1
                clearInterval(fadeOut)
            }
        }, 100);
        img.setAttribute('src', photos[i].src);
        information.innerText = photos[i].info;
        i++;
    }

    setInterval(run, 2000);
    run();
}
