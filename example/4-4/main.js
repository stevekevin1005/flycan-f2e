(function() {
    document.getElementById("hi").addEventListener("click", function(){
       document.getElementById("show_name").innerHTML = document.getElementById("name").value;
    });
})();
