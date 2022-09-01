//-----------toString()------------//

const fruits= ['banana','mango','apples','orange','watermelon'];
console.log(fruits.toString());

console.log(fruits.join(' '));// we can specify a seperator, if not it will take a comma itself.
console.log(fruits.length);
fruits.push('kiwi');
console.log(fruits);
console.log(fruits.length);

const cities =['palwal','hodal','faridabad','noida'];
cities.pop();
console.log(cities);
cities.shift();
console.log(cities);

cities.unshift('gurugram');
console.log(cities);

cities[2]= 'mathura';
console.log(cities);

delete fruits[1];
console.log(fruits);

const boys =['yogesh, sachin rao'];
const girls =['ritika','varsha rawat'];
const oldTeam= ['rahul','vaibhav'];
const myTeam= boys.concat(girls,oldTeam,'suresh');
console.log(myTeam);

const playlist=['sacred games','the family man'];
playlist.splice(1,0,'mirzapur','game of thrones');
console.log(playlist);

const brands =['apple','google','xiomi','acer','hp','dell'];
const upadatedBrands=brands.slice(4);
console.log(upadatedBrands);

const newBrands=brands.slice(1,3);
console.log(newBrands);


//-------------sorting--------------//


brands.sort();
console.log(brands);

brands.reverse();
console.log(brands);

//------------numeric sorting ------------//

const marks=[34,56,55,32,89,58];
marks.sort(function(a,b){return b-a});
console.log(marks);


const points =[3,5,7,45,12,09,44,32];
points.sort(function(p,q){return p-q});
console.log(points);


const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  cars.sort(function(x,y) {return x.year-y.year});
  console.log(cars);












