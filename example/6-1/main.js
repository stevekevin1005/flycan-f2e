(function () {
    if (new Date().getHours < 12 ) {
        document.getElementById("content").innerText = "上午";
    }
    else {
        document.getElementById("content").innerText = "下午";
    }

    new Date().getHours < 12 ? document.getElementById('content').innerText = '上午' : document.getElementById("content").innerText = "下午";
})();
