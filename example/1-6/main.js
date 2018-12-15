


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

    var classname = document.getElementsByClassName("page");
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', showPage);
    }
    
    renderHtml(students);

    function renderHtml(arr) {
        document.getElementById("demo").innerHTML = JSON.stringify(arr);
    }
    
    function showPage() {
        var page = this.dataset.page;
        renderHtml(pagination(page, PAGE_SIZE, students));
    }

    function pagination(pageNo, pageSize, array) {
        var offset = (pageNo - 1) * pageSize;
        return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
    }

}