(function () {
    fetch("data.json", {
        method: "GET"
    }).then((response) => {
        console.log(response);
        // 可以透過 blob(), json(), text(), formData(), arrayBuffer() 轉成可用的資訊
        return response.text(); 
    }).then((data) => {
        document.getElementById('content').innerHTML = data;
    }).catch((err) => {
        console.log('錯誤:', err);
    });
})();
