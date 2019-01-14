(function () {
    
    axios.all([getUser(), getLesson()])
    .then(axios.spread(function (users, lessons) {
        renderTable(users.data, lessons.data);
    }));

    function getUser() {
        return axios.get('user.json');
    }

    function getLesson() {
        return axios.get('lesson.json');
    }

    function renderTable(students, lessons) {
        var html = '';
        students.forEach(function(student) {
            var lesson = lessons[student.name];
            html += `<tr>
                        <td>${student.name}</td>
                        <td>${lesson.title}</td>
                        <td>${student.age}</td>
                        <td>${lesson.time}</td>
                    </tr>`
        })
        document.getElementById('content').innerHTML = html;
    }
})();
 