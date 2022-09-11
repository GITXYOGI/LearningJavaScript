const studentbtn = document.getElementById("student");
const studentsbtn = document.getElementById("students");

const studentDiv = document.getElementById("studentDiv");
const studentsDiv = document.getElementById("studentsDiv");

studentbtn.addEventListener("click", function (e) {
    retrieveStudentsData(e);
});
studentsbtn.addEventListener("click", function (e) {
    retrieveStudentsData(e, true);
});

function retrieveStudentsData(e, multipleStudents = false) {
    const xhr = new XMLHttpRequest();

    multipleStudents ? xhr.open('GET', 'students.json', true) : xhr.open('GET', 'student.json', true);

    xhr.onload = function () {
        if (this.status !== 200)
            return;


        if (multipleStudents) {
            let html = ``;
            const students = JSON.parse(this.responseText);
            students.forEach(function (student) {

                html += `
                <ul>
                <li> id :${student.id}</li>
                <li> name :${student.name}</li>
                </ul>
                `;

                studentsDiv.innerHTML = html;
            });

        }
        else {
            let html = ``;
            const student = JSON.parse(this.responseText);
            html += `<ul>
            <li> id :${student.id}</li>
            <li> name :${student.name}</li>
            </ul>
            `
            studentDiv.innerHTML = html;
        }
    }

    xhr.send();

}