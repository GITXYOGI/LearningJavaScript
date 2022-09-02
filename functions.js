//--------------Functions and Declarations--------------------
function logIn(firstName, lastName) {
    if (firstName === 'yogesh') {
        console.log(`Hello , Mr. ${lastName}`);
    }
    else if (firstName === 'sachin') {
        console.log(`Hello , Mr. ${lastName}`);
    }
    else {
        console.log(`Unauthorised Login Attempt`);
    }
}

logIn('sachin', 'rao');


//-------------Function Expression-----------

//-------------anonmyous function-----------


const percentage = function (obtainedMarks, totalMarks) {

    return (obtainedMarks / totalMarks) * 100;

}
console.log(percentage(443, 500));

// IIFE ==> imidiately invokable function expression

(function(){
    console.log(`hii , I'm an IIFE .`)
})
();

//-------functions inside objects(property methods)------

const operations= {
    add : function(x,y){
        return x+y;
    },
    subtract : function(x,y){
        return x-y;
    }
}
console.log(operations.add(78,89));

operations.multiply= function(x,y){
    return x*y;
};


console.log(operations.multiply(32,9));


//---callbacks----


setTimeout(myFunction, 3000);     // remember not to use paranthesis when passing a function as a prameter

function myFunction() {
  console.log("I love You My India !!") ;
}
