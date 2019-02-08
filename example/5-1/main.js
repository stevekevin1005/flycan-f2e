(function() {
    if (Cookies.get('name') != undefined) {
        document.getElementById('message').innerText = "Hello " + Cookies.get('name');
    }
    else {
        document.getElementById('message').innerText = 'please login';
    }

    document.getElementById("login").addEventListener("click", function(){
        Cookies.set("name", document.getElementById("name").value);
    });

})();
