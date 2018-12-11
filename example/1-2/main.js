window.onload = function() {
    
    var students = ["Kevin", "Ken", "Amy", "Lynn"];

    document.getElementById("addStduent").onclick = addStduent;
    document.getElementById("removeStudent").onclick = removeStudent;
    document.getElementById("changeFirstStudent").onclick = changeFirstStudent;

    renderHtml();

    function renderHtml() {
        document.getElementById("demo").innerHTML = students + "<br>total length:   " + students.length;
    }

    function addStduent() {
        var student = document.getElementById("value").value;
        if(student != null) {
            students.push(student);
            document.getElementById("value").value = null;
            renderHtml();
        }
    }

    function changeFirstStudent() {
        var student = document.getElementById("value").value;
        if(student != null) {
            students[0] = student;
            document.getElementById("value").value = null;
            renderHtml();
        }
    }

    function removeStudent() {
        students.pop();
        renderHtml();
    }
}