(function() {
    var cookie = document.cookie;
    if (cookie.includes("check")) {
        alert("notice");
    }

    document.getElementById("cancel").addEventListener("click", function(){
        document.cookie = 'check=true; expires=Fri, 31 Dec 1970 23:59:59 GMT';
    });

    document.getElementById("check").addEventListener("click", function () {
        document.cookie = 'check=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    });

    function getCookie(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
    }
})();
