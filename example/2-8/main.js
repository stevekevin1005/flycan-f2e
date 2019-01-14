(function () {
    axios({
        method: "get",
        url: "demo.jpg",
        responseType: "blob",
        onDownloadProgress: function (progressEvent) {
            document.getElementById("load").innerText = (progressEvent.loaded / progressEvent.total * 100)+"%";
        },
    }).then(function (response) {
        var urlCreator = window.URL || window.webkitURL;
        var objectURL = URL.createObjectURL(response.data);
        document.getElementById("content").src = objectURL;
    });
})();
