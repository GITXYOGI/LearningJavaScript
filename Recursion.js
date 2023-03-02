// binary Search using Recursion

let firstArr = [2, 3, 4, 6, 7, 10, 34, 56, 57, 77, 90, 112, 213];
const binSearch = function (arr, elem, start, end) {
    let mid = Math.floor((start + end) / 2);
    if (start > end) {
        return -1;
    }
    if (arr[mid] === elem) {
        return mid;
    }
    if (elem > arr[mid]) {
        return binSearch(arr, elem, mid + 1, end);
    }
    else {
        return binSearch(arr, elem, start, mid - 1);
    }
}

console.log(binSearch(firstArr, 213, 0, firstArr.length - 1));


// fabonacci using recursion 

const generateFabonacci = function (n) {
    if (n === 1) {
        return [0, 1];
    }
    else {
        let fabArr = generateFabonacci(n - 1);
        fabArr.push((fabArr[fabArr.length - 1]) + (fabArr[fabArr.length - 2]));
        return fabArr;
    }
}

console.log(generateFabonacci(12));

// sum of n numbers 

const sumCalc = function (n) {
    if (n === 0) {
        return 0;
    }
    else {
        let sum = sumCalc(n-1);
        return sum += n;
    }
}

console.log(sumCalc(10));

const sortArr = function (arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
        if(arr[j] > arr[j+1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
    console.log(arr);
    }    
    return arr;
}

console.log(sortArr([6,9,7,1]));

// const isEven = (n) => {
// return (!(n & 1));
// }

// console.log(isEven(6));
