const students = [{ id: 1, name: 'yogi' }, { id: 2, name: 'rinki' }];

function addStudents(id, name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const student = {
                id: id,
                name: name
            };
            let error = false;
            if (!error) {
                students.push(student);
            }
            else {
                reject('this is an error');
            }
            resolve();

        }, 2000);
    });
}

function getStudents() {
    setTimeout(function () {
        let html = '';
        students.forEach(function (student) {
            html += `<li>${student.id} ${student.name}</li>`;
        });
        document.body.innerHTML = html;
        console.log(html);

    }, 1000);

}
addStudents(3, 'yogesh')
    .then(getStudents)
    .catch(function (err) {
        console.log(err);
    })
