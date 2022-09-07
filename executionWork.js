var x = 1;

function abc() {
  console.log(x);
  var x = 10;
  
}

function pqr() {
  var x = 100;
  console.log(x);
}

abc();
pqr();
console.log(x);
