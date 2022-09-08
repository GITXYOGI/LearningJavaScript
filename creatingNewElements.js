const listItem = document.querySelector("#ol-list");

const creatItem = document.createElement("li");
creatItem.setAttribute("class","new-item");
creatItem.style= "color : green ";
creatItem.id = 'added-item';
creatItem.innerHTML= `newly added item`;


listItem.appendChild(creatItem);


const ulListItem = document.querySelector("#ul-list");

const creatNewItem = document.createElement("ol");
creatNewItem.setAttribute("class","new-class");
creatNewItem.style= "color : red ";
creatNewItem.innerHTML=`<li> element 1 </li>
<li> element 2 </li>
<li> element 3 </li>`;

ulListItem.appendChild(creatNewItem);


const newButton = document.createElement("button");
newButton.style = "background : blue; width : 120px; cursor : pointer;";
newButton.setAttribute("class","new-button");
newButton.innerHTML=`new button `;

document.querySelector(".first").appendChild(newButton);