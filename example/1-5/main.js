window.onload = function() {
    
    var numbers = [1,4,34,23,4,3,432,4,32,4,234,32,432,4,32];
    
    document.getElementById("randomArray").onclick = randomArray.bind(null,numbers);

    renderHtml(numbers);

    function renderHtml(arr) {
        document.getElementById("demo").innerHTML = JSON.stringify(arr);
    }

    function randomArray(arr) {
        renderHtml(arr.sort(function(a, b){return 0.5 - Math.random()}));
    }
}