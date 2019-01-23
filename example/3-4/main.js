(function () {
    function getMessage() {
        axios({
            method: "get",
            url: `https://www.easy-mock.com/mock/5c421ea1d13fff0d542dc782/example/message`,
            responseType: "json",
        }).then(function (response) {
            document.getElementById("content").innerHTML += `<div>mockUser: ${response.data.message}</div>`;
        });
    }
    setInterval(getMessage, 1500);
})();
