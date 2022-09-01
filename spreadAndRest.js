//----------spread -------//

const oldArray = [1,2,3,];
const newArray = [...oldArray,4,5,6];

console.log(newArray);


//------for objects-----//

const person ={
    name: 'yogesh'
};
const newPerson= {
    ...person,
    age : 22
};
console.log(newPerson);

//--------REST----------//


const filter= (...args) =>{
    return args.filter(el=>el===3);
}
console.log(filter(1,2,3,3,3,4,5,6,7,3));
