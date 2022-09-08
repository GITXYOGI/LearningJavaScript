let result;
const firstDiv = document.querySelector(".first");
result = firstDiv.firstElementChild;
result = result.firstElementChild;
result = firstDiv.firstElementChild.firstElementChild.lastElementChild.textContent;
let output;
output = firstDiv.childNodes;        //  it shows everything as a node like text/space as text ,comments and html elements
output = firstDiv.childElementCount;    // counts the pure html direct element
output = firstDiv.children;             // shows the direct childrens(html elements only)
firstDiv.children[1].classList.add("demo");    // adding a new class

// firstDiv.children[1].classList.remove("demo");

// console.log(output);
// console.log(result);

const checkName = firstDiv.firstElementChild.firstElementChild.nodeName;

let newOutput;
newOutput=document.getElementById("ul-list").nextSibling;
newOutput= newOutput.previousSibling;
newOutput= newOutput.parentElement;
newOutput.firstElementChild.firstElementChild.firstElementChild.lastElementChild.classList.add("item-13");



console.log(newOutput);

// console.log(checkName);