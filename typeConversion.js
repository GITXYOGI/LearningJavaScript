//-------------Data Type Conversion------------------

// number to string 

let x = 3450;
console.log(typeof x);
x= String(x);
console.log(x);
console.log(typeof x);


// boolean to string 

let doHasVoterCard = true;
doHasVoterCard= String(doHasVoterCard);
console.log(typeof doHasVoterCard);



// array to string 
let result;
result = [3,56,'haryana ', false];
result = result.toString();


// object to string 

result = {
    stdName: 'yogesh',
    obtMarks: 450,
    totalMarks : 500
}
result = result.toString();

//---------data type to number conversion ------------

// string to number 


result = Number('haryana');

//  boolean to number 

result = Number(false);

// date to number 

result = new Date;
result= Number(result);


// array/object to number 

result= [67,null,'celestial'];


result = {
    college: 'Aitm Palwal',
    university : 'J C Bose University',
    passingYear : 2022

}
result= Number(result);

//---------------data type to boolean ------------

result= Boolean(1);
result= Boolean(0);
result= Boolean(657);


//   string/object/array to boolean 

result =Boolean('yogesh');
result= Boolean([56,'yogi']);
result = Boolean({});




console.log(result);
console.log(typeof result);