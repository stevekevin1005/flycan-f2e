(function() {
    document.getElementById("check").addEventListener("click", function() {   
        var form = document.getElementById('form');
        if (!form.checkValidity()) {
           form.reportValidity();
        }
   })
})();
