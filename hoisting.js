// HOISTING => VARIABLE AND FUNCTIONS DECLARATIONS ARE MOVED ON THE TOP.
//(MEMORY IS ALLOCATED TO EACH AT THE TIME OF COMPILATION, VALUES WILL ASSIGNED AT THE TIME OF EXECUTION).

// variable and normal function--------
      
console.log(x);                               // undefined 
printString();                                // executes the function 
console.log(printString);                     // will print the whole function

var x= 45;
function printString(){
    console.log("Coding is fun");
}

console.log(x);
printString();
console.log(printString);

// ----------arrow function 

// printString2();                            // not defined bcz , it acts as a varibale in hoisting

var printString2 = () => {
    console.log("coding is not really fun");
}

printString2();                              // executes well

// --------anonmous function -----

printString3();                              // not defined bcz , it acts as a varibale in hoisting

var printStrString = function (){
console.log("this is an anonmous function");
}
prinString3();                               // executes well