//-------------forEach loop ------------


const people = ['yogesh','sachin','rahul','varsha','saurabh'];

people.forEach(name => {
  console.log(` ${name} , welcome to the office.`)  
});

// --------------for in---------------


for (let name in people){
    console.log('bye '+ people[name]); // use square brackets , for-in always returns indexing
}

//---------------for Of loop


const cars = ['BMW', 'Volvo', 'Mini'];

for (let x of cars) {
  console.log(x);
}


//---------map

const names = ['yogesh','ritika','varsha','rinki','sachin'];
const newNames= names.map(myFunction);

function myFunction(x){
 return x.toUpperCase();
}

console.log(newNames);