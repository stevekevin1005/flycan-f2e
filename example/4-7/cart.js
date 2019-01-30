(function(){ 
    for (var i = 0; i < localStorage.length; i++) {
        var name = localStorage.key(i);
        var count = localStorage.getItem(name);
        document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', `<div>${name} 共 ${count}個<div>`);
    }

    document.getElementById("clear").addEventListener("click", function(){
        localStorage.clear();
        location.reload();
    });
})();
