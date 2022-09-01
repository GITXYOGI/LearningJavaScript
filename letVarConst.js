//--------VAR---------------

var x = 5;
console.log(x);
var x = 0;
console.log(x);

//-------LET-----------------

let y = 5;
if (y < 10) {
    let y = 25;
    console.log(y);      //--------block scope----
}
console.log(y);

// let z=56;
let z=67;               //-----we can't redeclare variables with let type (like var)
console.log(z);


//-------CONST------------------

const myName = 'yogesh';
// myName= 'celestial';  
console.log(myName);    

//-----------------------------we can't redeclare as well as reassign
//---------------------------- values to the const type variables
