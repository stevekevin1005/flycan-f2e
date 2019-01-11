(function () {
    $.ajax({
        url: "data.json",
        type: "get",
        success: function(res) {
            document.getElementById('content').innerHTML = JSON.stringify(res);
        },
        error: function(err) {
            console.log(err);
        }
    });
})();
