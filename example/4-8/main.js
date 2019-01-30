(async function() {
    var data;
    await axios({
        method: "get",
        url: `data.json`,
        responseType: "json",
    }).then(function (response) {
        data = response.data;
    });

    var html = "";
    data.forEach((product, index) => {
        html += `<dl pid='${index}'>
  <dt>
    <img src='${product.img}' />
  </dt>
  <dd>${product.name}</dd>
  <dd>${product.description}</dd>
  <dd>
    $<span>${product.price}</span>
  </dd>
  <dd>
    <button class='add' data-name='${product.name}'>新增購物車</button>
  </dd>
</dl>
`;
    });
    
    document.getElementsByClassName("list")[0].innerHTML = html;
    
    var buttons = document.getElementsByClassName("add");

    for(var i = 0;i < buttons.length; i++) {
        buttons[i].addEventListener("click", addToCart);
    }

    function addToCart() {
        var name = this.dataset.name;
        var list = localStorage.getItem("cart_list");
        if (list != null) {
            list = JSON.parse(list);
            if(list[name] != null) {
                list[name] += 1;
            } 
            else {
                list[name] = 1;
            }
            localStorage.setItem("cart_list", JSON.stringify(list));
        }
        else {
            list = {};
            list[name] = 1;
            localStorage.setItem("cart_list", JSON.stringify(list));
        }
    }
})();
