const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;

function diagonalDifference(sqrMatrix) {
    //initialize two index pointers and two sums, one for each diagonal
    let a = 0;
    let b = sqrMatrix.length - 1;
    let sumA = 0;
    let sumB = 0;

    for (let arr of sqrMatrix) { //step through each sub array of the matrix
        sumA += arr[a] //add values at our diagonal pointers to their respective sums
        sumB += arr[b]
        a++ //adjust pointers to next diagonal spot
        b--
    }

    return Math.abs(sumA - sumB) // return abs difference
}

function diagonalDifference(sqrMatrix) {
    let left = 0;
    let right = 0;
    let expected = 0;
    for (i = 0; i < sqrMatrix.length; i++) {
        left += sqrMatrix[i][i];
        // console.log(left)
        right += sqrMatrix[i][sqrMatrix.length - i - 1]
    } expected = Math.abs(left - right);
    return expected;
}

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));

function recursiveDiagonalDifference(sqrMatrix, i = 0, left = 0, right = 0) {
    // Base Case
    if (i === sqrMatrix.length) {
        let expected;
        expected = Math.abs(left - right);
        return expected;
    }
    left += sqrMatrix[i][i];
    right += sqrMatrix[i][sqrMatrix.length - i - 1];

    return recursiveDiagonalDifference(sqrMatrix, ++i, left, right);
    //                                     ^ i+1 also works
}

function diagonalDifference(sqrMatrix) {
    let left = 0;
    let right = 0;
    for (i = 0; i < sqrMatrix[0].length; i++) {                   // For loop the length of the array
        left += sqrMatrix[i][i];                                // Add values diagonaly from top left to bottom right
        right += sqrMatrix[i][sqrMatrix[0].length - 1 - i];     // Top right to bottem left (oposite diagonal)
    }
    return Math.abs(left - right);                              // Returns the abosolute value (a postive value/ positive stays positive)
}


function diagonal(p) {
    arr[[]] = p
    i = 0
    sum1 = 0, sum2 = 0
    while (i < arr[[0]].length) {
        sum1 += arr[i][i]
        sum2 += arr[i][(arr.length - 1) - i]
        i++
        console.log("sum" + sum1, sum2)
    }
    //console.log(sum1,sum2)
    total = sum1 - sum2
    if (total < 0) {
        return console.log(total * -1)
    } else {
        return console.log(total)
    }
}
arr = [[9, 2, 3], [4, 5, 6], [7, 8, 9]]
diagonal(arr)
