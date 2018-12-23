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

    render(students, 1);

    function render(students, page) {
        var startIndex = (page - 1) * PAGE_SHOW;
        var endIndex = page * PAGE_SHOW;
        var html = "";
        students.slice(startIndex, endIndex).forEach((student, index) => {
            html += `<tr>
                <td scope="row">${startIndex + index + 1}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.age}</td>
                <td>${student.fee}</td>
            </tr>`
        });
        document.getElementsByTagName("tbody")[0].innerHTML = html;
    }

    (function () {
        var len = Math.ceil(students.length / PAGE_SHOW)
        for (var i = 1; i <= len; i++) {
            var button = document.createElement('button');
            button.setAttribute('class', 'btn btn-lg btn-info');
            button.innerText = i;
            button.dataset.page = i;
            button.addEventListener('click', function () {
                render(students, this.dataset.page);
            }, false);
            document.getElementById("page").appendChild(button);
        }
    })();
}