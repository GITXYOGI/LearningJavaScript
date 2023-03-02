function multiply(x) {
    return function (y) {
        return x * y;
    }
}

const multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(78));

const multiplyBySeven = multiply.bind(this, 7, 6);

console.log(multiplyBySeven(78));

//================================================//

// CURRYING WITH CLOSURES

function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height
        }
    }
}

console.log(calculateVolume(2)(3)(5));
console.log(calculateVolume(2)(3)(6));


