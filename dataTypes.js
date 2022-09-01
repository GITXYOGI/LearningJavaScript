/* primitive data types in JavaScript are 

1.  numbers          ==>  intergers ,float ,double all are considered as numbers.
2.  strings          ==>  a string of characters, numbers and symbols.
3.  booleans         ==>  true or false.
4.  null             ==>  nothing on the location of a varibale.
5.  undefined        ==>  variable is declared but not assigned with some value.
6.  symbols (ES6)





-----------reference types in javaScript----------------

1.  array 
2.  plain objects
3.  functios 
4.  dates
5.  anything else in JS.
*/


// numbers

let x = 5;
console.log(x, typeof x);

// strings 

let yourName = 'riya';
console.log(yourName, typeof yourName);


// booleans

let zxc = true;
let zxv = false;
console.log(zxc, zxv);

// null

var check = null;
console.log(check);

// undefined 

let cityName;
console.log(cityName);


// --------reference types in javaScript------

//  arrays 

metroCitiesNames = ['delhi', 'mumbai', 'chennai', 'kolkata'];
console.log(metroCitiesNames);
var economicCapital = metroCitiesNames[1];
console.log(economicCapital);


// objects

var myDetails = {
    myName: 'yogesh',
    myCity: 'palwal',
    myNumber: 9306220352,
    myDesignation: 'frontend developer trainee',
    doHavePanCard: true

}
console.log(myDetails);
console.log(myDetails['doHavePanCard']);

//  function 

function printSomething() {
    console.log("Indore is the cleanest city in India");
}

var chandigarh = function () {                                  //-----anonmyous function
    console.log("chandigarh is surrounded by the hills");

}
printSomething();
chandigarh();

// ----------------dates------------------

var birthDate = new Date;
console.log(birthDate);
