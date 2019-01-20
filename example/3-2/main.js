(function () {
    document.getElementById("attack").addEventListener("click", function(){
        var account = window.frames["fake"].document.getElementById("account").value;
        document.getElementById("hint").innerText = account;
    })
})();
