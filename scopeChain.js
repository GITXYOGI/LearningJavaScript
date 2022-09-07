var x = 1;
// console.log(x);
function a() {
  console.log(x); // it will give undefined bcz execution of x is not done yet.
  var x = 10;
  function b() {
    var x = 100;
    var y = 200;
    console.log(x);
  }
  b();
}
a();
console.log(x);

{
  var ab = 1111;
  let bc = 2222;
  const cd = 3333;

  console.log(ab);
  console.log(bc);
  console.log(cd);
}

console.log(ab);
// console.log(bc);        // reference error ,bcz let is block scope and bc is not defined in global.
// console.log(cd);        // reference error , bcz const is block scope and cd is not defined in global.

// shadowing

var num = 4444;
let num1 = 7777;
const num2 = 9999;
{
  var num = 5555;
  let num1 = 8888;
  const num2 = 1000;
  console.log(num);
  console.log(num1);
  console.log(num2);
}
console.log(num); // it will give you the modified value of  num ,bcz whether num is inside the block but it also points the variable in the global scope.
console.log(num1);
console.log(num2);  // let and const return the global value bcz they are block scope and act as different variable inside the block.
