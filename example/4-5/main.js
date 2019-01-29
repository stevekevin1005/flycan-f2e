(function() {
    var cookie = document.cookie;
    if (cookie.includes("name")) {
        document.getElementById('message').innerText = "Hello " + getCookie("name");
    }
    else {
        document.getElementById('message').innerText = 'please login';
    }

    document.getElementById("login").addEventListener("click", function(){
        document.cookie = " name=" + document.getElementById("name").value;
    });

    function getCookie(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
    }
})();
