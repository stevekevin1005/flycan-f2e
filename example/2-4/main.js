(function () {
    axios({
        method: "get",
        url: "data.json",
        responseType: 'json'
    }).then(function (response) {
        console.log(response);
        document.getElementById('content').innerHTML = JSON.stringify(response.data);
    });
})();
