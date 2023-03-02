// const myStr = document.getElementById("mystr").textContent;
// console.log(myStr);
// console.log(typeof (myStr));

// function capitalizeFirstLetter() {
//     let newArr = []
//     myStrArr = myStr.split(" ");
//     for (let i = 0; i <= myStrArr.length - 1; i++) {
//         let temp = myStrArr[i];
//         let tempArr = temp.split("");
//         let newVeb = tempArr[0].toUpperCase();
//         tempArr[0] = newVeb;
//         let tempStr = tempArr.join("");
//         newArr.push(tempStr);
//     }
//     return newArr.join(" ");
// }

// // another method to do same 

// const makeItCapital = () => {
//     let wordsArr = [];
//     let myStrArr = myStr.split(" ");
//     for (let j = 0; j <= myStrArr.length - 1; j++) {
//         wordsArr[j] = myStrArr[j].charAt(0).toLocaleUpperCase() + myStrArr[j].slice(1);
//     }
//     // console.log(wordsArr);
//     let finalStr = wordsArr.join(" ");
//     return finalStr;
// }

// let capitalizedStr = makeItCapital();
// setTimeout(() => {
//     document.getElementById("mystr").textContent = capitalizedStr;
// }, 3000);

// let newword = myStr[2].toUpperCase();
// console.log(newword);

// const secondLargest = (arr) => {
//     for (let i = 0; i < arr.length; i++) {

//     }
// }

// function fabonacci (n) {
//     let fact = 1;
//     if (n === 1 || n === 0) {
//         return fact;
//     }
//     else {
//         for(let i = n; i >= 2; i--) {
//             fact = fact*i;
//         }
//         return fact;
//     }
// }

// console.log(fabonacci(6));

// function isPrime(n) {
//     if (n < 2) {
//         return false;
//     }
//     else {
//         for (let i = 2; i <= Math.sqrt(n); i++) {
//             if ((n % i) === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }
// console.log(isPrime(3));

// function isPowerOfTwo(n) {
//     let result = n;
//     if (n === 0 || n === 1) {
//         return true;
//     } else {
//         for (let i = 0; i <= (n / 2); i++) {
//             result = result / 2;
//             if (result === 1) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// console.log(isPowerOfTwo(16));

// function findSecondLargest(arr) {
//     let largest = Number.NEGATIVE_INFINITY;
//     let secondLargest = Number.NEGATIVE_INFINITY;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > secondLargest && arr[j] < largest) {
//             secondLargest = arr[j];
//         }
//     }
//     return secondLargest;

// }
// const arr1 = [0, 0, 0];
// console.log(findSecondLargest(arr1));




// function countFreq(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 count++;
//             }
//         }
//         console.log(arr[i] + ":" + count);
//     }
// }

// countFreq([8,6,7,8,4,3,4,5,3,4]);

function myPattern (n) {
    const row = n;
    const col = Math.floor(n+1/2);
    for(let i = 1; i <= row; i++) {
        for(let j = 1; j <= col; j++) {
           if(row && col) {
            document.write("&");
           }
           document.write("\n");
        }
        document.write("&");
    }
}

myPattern(5);

