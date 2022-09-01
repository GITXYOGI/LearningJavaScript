//--------------string mutation and combination -----------

result = 'coding is fun';
result = "coding is actually fun";
result = 'coding is "fun"';
result = "coding is a 'fun' thing";

string1 = 'hello';
string2 = 'world';
string3 = string1 + string2;
string3 = string1 + " " + string2;

// string1 += string2;

string3 = `say ${string1} to the ${string2}`;

string3 = string3.concat(` yes do it. `);
// string3= string3.length;
string1= string1.charAt(string1.length-2);

string1= string2.slice(1,5);

string3= string2.substring(0,4);

anotherstring= "this is an ANOTHER string";

checkString = anotherstring.toUpperCase();
checkString= checkString.toLowerCase();

checkString= checkString.replace('another','any');

checkString= checkString.includes('is'); //----it returns a boolean value


console.log(checkString);



console.log(string1); 



console.log(result);
console.log(typeof result);
console.log(string3);