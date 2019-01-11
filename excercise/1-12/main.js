(function () {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        document.getElementsByClassName("navigation")[0].innerHTML = build(data, 0);
    }
    }
    req.open('GET', 'data.json');
    req.send();

    function build(datas, parent) {
        var html = "";
        return html;
    }
})();
