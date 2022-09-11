const students = [{ id: 1, name: 'yogi' }, { id: 2, name: 'rinki' }];

function addStudents(id, name, callBackFunction) {
    setTimeout(function () {
        const student = {
            id: id,
            name: name
        };
        students.push(student);
        callBackFunction();
    }, 2000);
}

function getStudents() {
    setTimeout(function () {
        let html = '';
        students.forEach(function (student) {
            html = `<li>${student.id} ${student.name}</li>`;
        });
        document.body.innerHTML = html;

    }, 1000);

}
addStudents(4, 'yogesh', getStudents);
