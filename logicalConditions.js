let age = 85;
personName = 'Krishna';
state = 'uttar pradesh';
city = 'palwal';

if (age >= 18 && age <= 65) {     // logical AND
    console.log(`${personName} is able to vote.`);
}
else {
    console.log(`${personName} is not able to vote .`)
}


if (state == 'haryana' || city =='delhi'){
    console.log(`${personName} is a north-Indian .`);

}
else {
    console.log(`${personName} is not a north-indian.`);
}