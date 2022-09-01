
const myName = 'yogesh';
const dateOfBirth = '20th May 2001';
const city = 'palwal';
const mobileNo = 9306220352;

let details;

details = ` <ol>
<li> ${myName}</li>
                <li> ${dateOfBirth}</li>
                <li> ${city}</li>
                <li> ${mobileNo}</li>

                </ol>

`

document.body.innerHTML = details;


// let detailsTable = ` <table >
//                      <tr>
//                         <td> ${myName}</td>
//                         <td> ${dateOfBirth}</td>
//                         <td>${city}</td>
//                         <td>${mobileNo}</td>
//                      </tr>
//                      </table> 

// `
// document.body.innerHTML=detailsTable;