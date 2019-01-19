(function () {
    document.getElementById("account").addEventListener("keyup", function(){
        var account = this.value;
        axios({
            method: "get",
            url: `https://www.easy-mock.com/mock/5c421ea1d13fff0d542dc782/example/account/check?account=${account}`,
            responseType: "json",
        }).then(function (response) {
            if (response.data.status == false) {
                document.getElementById("hint").innerText = "帳號格式錯誤";
            } else {
                document.getElementById("hint").innerText = "";
            }
        });
    });
})();