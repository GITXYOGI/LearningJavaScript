const getDataButton = document.getElementById("get-data");
const responseTextElement = document.getElementById("response-txt");
getDataButton.addEventListener('click', retrieveData);
function retrieveData() {
    // making a new XHR request 
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'file.txt', true); // GET= action , URL of file to be opened , true/false - asynchronous/synchronous 
    xhr.onload = function () {
        if (this.status === 200) { // 200 means success
            responseTextElement.innerText = this.responseText;

        }
    }
    xhr.onprogress = function () { // function to be performed on progressing 
        alert("opening file.");
    }
    xhr.send();
}
