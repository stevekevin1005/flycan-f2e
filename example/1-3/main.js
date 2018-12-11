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

    document.getElementById("showAll").onclick = filterArray.bind(null,"all");
    document.getElementById("showAdults").onclick = filterArray.bind(null, "adults");
    document.getElementById("showChildren").onclick = filterArray.bind(null, "children");
    document.getElementById("showAges").onclick = showAges;
    document.getElementById("findChild").onclick = findChild;
    document.getElementById("everyOneIsAdult").onclick = everyOneIsAdult;
    document.getElementById("someOneIsAdult").onclick = someOneIsAdult;

    renderHtml(students);

    function renderHtml(arr) {
        document.getElementById("demo").innerHTML = JSON.stringify(arr);
    }

    function filterArray(condition) {
        switch(condition) {
            case "all":
            renderHtml(students);
            break;
            
            case "adults":
            renderHtml(students.filter(function(student, index) {
                return student.age >= 18;
            }));
            break;

            case "children":
            renderHtml(students.filter(function(student, index) {
                return student.age < 18;
            }));
            break;
        }
    }

    function showAges() {
        renderHtml(students.map(function(student, index) {
            return student.age;
        }));
    }

    function findChild() {
        renderHtml(students.find(function(student, index) {
            return student.age < 18;
        }));
    }

    function everyOneIsAdult() {
        renderHtml(students.every(function(student, index) {
            return student.age >= 18;
        }));
    }

    function someOneIsAdult() {
        renderHtml(students.some(function(student, index) {
            return student.age >= 18;
        }));
    }
}