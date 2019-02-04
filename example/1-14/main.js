(async function () {
    function delay () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
            alert('1')
            resolve()
            }, 1000)
        })
    }
    await delay();
    alert("2");
})();
