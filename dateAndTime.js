let result;
const currentDate = new Date();
result = currentDate;

result = currentDate.getDate();
result = currentDate.getDay();
result = currentDate.getMonth();
result = currentDate.getFullYear();
result = currentDate.getTime();
result = currentDate.getHours();
result = currentDate.getMinutes();
result = currentDate.getSeconds();
result = currentDate.getMilliseconds();

let dateOfBirth;
dateOfBirth = new Date();

dateOfBirth.setDate(20);
dateOfBirth.setMonth(5);
dateOfBirth.setYear(2001);
dateOfBirth.setHours(1);
dateOfBirth.setMinutes(56);
dateOfBirth.setSeconds(46);

console.log(dateOfBirth);
console.log(result);