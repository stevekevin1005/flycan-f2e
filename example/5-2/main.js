(function() {
    function checkLogin() {
        if (Cookies.get('name') != undefined) {
            let html = `Hello ${Cookies.get('name')} <button id="logout">Log out</button>`;
            document.getElementById('content').innerHTML = html;
            document.getElementById('logout').addEventListener('click', function () {
                Cookies.remove('name');
                checkLogin();
            });
        }
        else {
            let html = `<h3>please login</h3>
                        <input type="text" id="name"><button id="login">login</button>`;
            document.getElementById('content').innerHTML = html;
            document.getElementById("login").addEventListener("click", function () {
                Cookies.set("name", document.getElementById("name").value);
                checkLogin();
            });
        }
    }
    checkLogin();
})();
