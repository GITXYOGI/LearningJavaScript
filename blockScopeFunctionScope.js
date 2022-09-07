let x = 1;
var y = 2;
const z = 3;
let a = 67;

function hello() {
    let x = 10;
    var y = 20;
    const z = 30;

    console.log('inside function : ' + x, y, z);
};
hello();


// if(a){
//     let x = 10;
//     var y = 20;
//     const z = 30;
//     console.log('inside if : '+ x, y, z);
// }


// for (var y = 10; y<=20;y++){
//     console.log('inside loop : '+ y);
// }
console.log('global : ' + x, y, z);