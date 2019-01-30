(async function () {
    var data;
    await axios({
        method: "get",
        url: `data.json`,
        responseType: "json",
    }).then(function (response) {
        data = response.data;
    });

    var cartList = localStorage.getItem("cart_list");
    
    if (cartList != null) {
        cartList = JSON.parse(cartList);
        Object.keys(cartList).forEach((key, value) => {
            document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', 
                `<div>${key} 共 ${cartList[key]}個<div>`)
        });
    }

    document.getElementById("clear").addEventListener("click", function(){
        localStorage.clear();
        location.reload();
    });
})();
