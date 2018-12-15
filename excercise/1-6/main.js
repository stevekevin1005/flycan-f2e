window.onload = function() {
    
    const PAGE_SIZE = 2;

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

    renderHtml(students);

    function renderHtml(arr) {
        document.getElementById("demo").innerHTML = JSON.stringify(arr);
    }
    
    function showPage() {
    }

    function pagination(pageNo, pageSize, array) {
    }

}