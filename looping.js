//----------------loops -------------------

//   for loop
let i;
for (i=20;i<=28;i++){
    if (i===21){
        console.log(`hey i got ${i}`);
        continue;                              // continue skip the current interation and continues to the loop.
        // break;                              // break stops the loop and exit outside it.

    }
    if(i===23){
        console.log(`hey i got ${i}`);
        continue;
        // break;
    }
    console.log(i);
}


//------while loop 

i= 10;
while(i>=4){
    console.log(`the value is now ${i} `);
    i--;
}


//-----------do-while loop
let j = 52;
do{
    console.log(`print some stufffff.`);
    j++;
}
while(j==25);