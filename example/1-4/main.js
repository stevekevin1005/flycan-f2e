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

    document.getElementById("sortByAge").onclick = sortByAge;
    
    renderHtml(students);

    function renderHtml(arr) {
        document.getElementById("demo").innerHTML = JSON.stringify(arr);
    }
    
    function sortByAge() {
        renderHtml(students.sort(function(a, b) {
            return a.age - b.age;
        }));
    }

}