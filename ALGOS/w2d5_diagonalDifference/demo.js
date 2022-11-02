/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

//                          0        1         2
//                      0   1  2  0  1  2   0  1  2
const squareMatrix1 = [[1, 2, 3],[4, 5, 6],[9, 8, 9]];
const arr = [
    [1, 2, 3],// arr[0][0]              arr[0][arr.length - 1]
    [4, 5, 6],// arr[1][1]              arr[1][1]
    [9, 8, 9] // arr[2][2]              arr[2][0]
];