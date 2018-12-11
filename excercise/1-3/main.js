window.onload = function() {
    
    var students = [{
        name: "Kevin",
        age: 15
    },{
        name: "Ken",
        age: 22
    },{
        name: "Amy",
        age: 33
    },{
        name: "Lynn",
        age: 12
    }];

    document.getElementById("showAll").onclick = filterArray;
    document.getElementById("showAdults").onclick = filterArray;
    document.getElementById("showChildren").onclick = filterArray;
    document.getElementById("showAges").onclick = showAges;
    document.getElementById("findChild").onclick = findChild;
    document.getElementById("everyOneIsAdult").onclick = everyOneIsAdult;
    document.getElementById("someOneIsAdult").onclick = someOneIsAdult;

    renderHtml(students);

    function renderHtml(arr) {
        document.getElementById("demo").innerHTML = JSON.stringify(arr);
    }

    function filterArray() {
    }

    function showAges() {
    }

    function findChild() {
    }

    function everyOneIsAdult() {
    }

    function someOneIsAdult() {
    }
}