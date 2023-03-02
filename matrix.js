let matrixA = [[3, 4],
               [6, 4]];
let aRows = 2;
let aColumns = 2;

let matrixB = [[4, 3],
               [4, 9]];

let bRows = 2;
let bColumns = 2;

let outPutMtrx = [[0,0],
                  [0,0]];

// for(let i = 0; i <= matrixA.length -1; i++) {
//     for(let j = 0; j <= matrixA[i].length -1; j++) {
//         console.log(matrixA[i][j]);
//     }
// }

const calcMatrxMultiply = function (A, B) {
    if (A && B) {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                for (let k = 0; k < 2; k++) {

                    // console.log(B[k][j]);
                    outPutMtrx[i][j] = (outPutMtrx[i][j] + (A[i][k] * B[k][j]));
                }
            }
        }
        return outPutMtrx;
    }
};

console.log(calcMatrxMultiply(matrixA, matrixB));
