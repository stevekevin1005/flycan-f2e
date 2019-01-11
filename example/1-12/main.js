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
        for (var i = 0; i < datas.length; i++) {
            if (datas[i].parent == parent) {
                html += "<li>";
                html += "<a href=\"" + datas[i].url + "\">" + datas[i].name + "</a>";
                html += "<ul>" + build(datas, datas[i].id) + "</ul>";
                html += "</li>";
            }
        }
        // $.each(datas, function(index, data){
        //     if(data.parent == parent) {
        //         html += "<li>";
        //         html += "<a href=\"" + data.url + "\">" + data.name + "</a>";
        //         html += "<ul>" + build(datas, data.id) + "</ul>";
        //         html += "</li>";
        //     }
        // });
        return html;
    }
})();
