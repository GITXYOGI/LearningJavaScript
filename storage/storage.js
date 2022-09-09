const saveButton = document.getElementById("save");
saveButton.addEventListener("click", function () {
    let userName = document.getElementById("name").value;
    let mobileNumber = document.getElementById("mobileNumber").value;

    localStorage.setItem(userName, mobileNumber);
    document.getElementById("name").value= null;
    document.getElementById("mobileNumber").value =null;
});


