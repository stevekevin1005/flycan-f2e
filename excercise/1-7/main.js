window.onload = function() {
    const PAGE_SHOW = 5;
    var students;
    var req  = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById('title').innerText = obj.class
            students = obj.students;
        }
    }
    req.open('GET', 'students.json', false);
    req.send();
}