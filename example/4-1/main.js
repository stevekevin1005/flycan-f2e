(function () {
    document.getElementById("content").innerHTML = 
        document.getElementById('content').innerHTML.replace(/(手機[^，。、]*)/g, `<span>$1</span>`);
})();
