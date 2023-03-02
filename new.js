// const transaction = (value) => {
//     let noteCounter = {};
//     const notes = [1,3,10,50];
//     // while (value > 0) {
//         value = value % 50;
//         const count50 = Math.floor(value / 50);
//         noteCounter[count50] = count50;
        
//     }
//     console.log(noteCounter);
// // }

// transaction(110);

function treeCounter (treesArr) {
    const visibleTrees = [ treesArr[0]];
    let largest = treesArr[0];
    let largestindex = 0;
    for ( let i = 1; i <= treesArr.length - 1; i++) {
       if (treesArr[i] > largest) {
        largest = treesArr[i];
        largestindex = i;
        
       }
    }
    let prev = treesArr[0];
    for ( let j = 1; j <= largestindex; j++) {
        if ((treesArr[j] >= treesArr[0]) && (treesArr[j] <= largest) && treesArr[j] >= prev) {
            visibleTrees.push(treesArr[j]);
            prev = treesArr[j];

        }
    }
    console.log(visibleTrees);
}

const myArr = [1,2,3,7,4,6, 7, 12, 10]
treeCounter(myArr);