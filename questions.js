// // intersection point finding 

// function findInterSection(first, second) {
//     for (let i = 0; i < first.length; i++) {
//         for (let j = 0; j < second.length; j++) {
//             if (second[j] === first[i]) {
//                 console.log("for first", i);
//                 console.log("for second", j);
//             }
//         }
//     }
// }
// let arr1 = [1, 2, 4, 5, 6, 8];
// let arr2 = [9, 7, 11, 3, 8];
// // findInterSection(arr1, arr2);

// //=========================================//

// // Move all zeros at right in an array

// function shiftZeroAtRight(arr) {
//     let len = arr.length;
//     let j = 0;
//     for (let i = 0; i < len; i++) {
//         if (arr[i] !== 0) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//             j++;
//         }
//     }
//     return arr;
// }
// // console.log(shiftZeroAtRight([1, 2, 0, 2, 3, 0, 2, 0, 0, 5, 5]));

// // merge arrays 

// function mergeArrays(first, second) {
//     let flen = first.length;
//     let slen = second.length;
//     for (let i = 0; i < slen; i++) {
//         first[flen + (i - 1)] = second[i];
//     }
//     return first;
// }

// let frst = [1, 2, 3, 4];
// let scnd = [6, 7, 8, 9, 0];

// // console.log(mergeArrays(frst, scnd));

// //================================//

// // swap values of two arrays

// function swapArrayVlues(first, second) {
//     let flen = first.length;
//     let slen = second.length;
//     if (flen !== slen) {
//         console.log("impossible");
//     }
//     else {
//         for (let i = 0; i < flen; i++) {
//             let temp = second[i];
//             second[i] = first[i];
//             first[i] = temp;
//         }
//     }
//     return second;
// }

// const a = [1, 2, 3, 4, 9];
// const b = [6, 7, 8, 9, 0];

// console.log(swapArrayVlues(a, b));

// //=================================//

// // hollow rectangle 

// function hollowRectangle(noOfRows, noOfColumns) {
//     const m = noOfRows;
//     const n = noOfColumns;
//     for (let i = 1; i <= m; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (i === 1 || j === 1 || i === m || j === n || i === j) {
//                 document.write("* ");
//             } else {
//                 document.write("&nbsp; &nbsp")
//             }
//         }
//         document.write("<br>")
//     }
// }
// hollowRectangle(4, 4);

// //===============================//

// // freq count in an array

// function freqCount(arr) {
//     let freqObj = {};
//     for (let i = 0; i < arr.length; i++) {
//         let myKey = arr[i];
//         if (freqObj[myKey]) {
//             freqObj[myKey]++;
//         } else {
//             freqObj[myKey] = 1;
//         }
//     }
//     return freqObj;
// }
// const myArr = [2, 3, 5, 6, 5, 3, 3, 3,];
// console.log(freqCount(myArr));

//===================================//

// merge array on alternate positions

let first = [1, 2, 3];
let second = [4, 5, 6];

function alterMergeArr(abc, pqr) {
    const len = abc.length - 1;
    let output = [];
    let j = 0;
    let m = 0;
    for (let i = 0; i <= len*2; i+= 2) {
        output[i] = abc[j];
        // console.log("value of i is", i);
        j++;
    }
    console.log(output);
    for (let k = 1; k <= (len * 2)+1; k += 2) {
        output[k] = pqr[m];
        // console.log("value of k is", i);
        m++;
    }
    return output;
}

console.log(alterMergeArr(first, second));

// deep copy 

// let a = [1, 2, 3, 4];
// let b = a;
// b[3] = 78;
// console.log(a);

// //  shallow copy 

// const p = ["a", "b", "c"];
// let q = [];
// q[0] = p[0];
// q[1] = p[1];
// q[2] = p[2]
// q[1] = "xys";

// console.log("q array is ", q);
// console.log("p array is ", p);

