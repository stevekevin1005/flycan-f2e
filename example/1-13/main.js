(function () {
    function delay() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                alert("1");
                resolve();
            }, 1000);
        });
    }

    delay().then(function () {
        alert("2");
    }).catch(function (error) {
        console.log(error);
    });
})();
