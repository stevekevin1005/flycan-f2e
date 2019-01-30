(function() {
    var buttons = document.getElementsByClassName("add");

    for(var i = 0;i < buttons.length; i++) {
        buttons[i].addEventListener("click", addToCart);
    }

    function addToCart() {
        var name = this.dataset.name;
        var count = localStorage.getItem(name);
        if(count != null) {
            localStorage.setItem(name, parseInt(count)+1);
        }
        else {
            localStorage.setItem(name, 1);
        }
    }
})();
