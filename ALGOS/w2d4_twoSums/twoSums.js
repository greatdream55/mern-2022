/* https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the
two numbers such that they add up to a specific target.

You may assume that each input would have EXACTLY ONE SOLUTION,
and you may not use the same element twice.

the array is unsorted, contains no floats, and there may be duplicate values

Given arr = [2, 11, 7, 15], target = 9,
Because arr[0] + arr[2] = 2 + 7 = 9
return [0, 2].

example 1
given: [2, 11, 7, 15]
target: 9
output: [0,2]

example 2
given: [3,2,4]
target: 6
output: [1,2]

example 3
given: [3,3]
target: 6
output: [0,1]
*/

function twoSums(arr, target) { }

// console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
// console.log(twoSums([3, 2, 4], 6)); // [1,2]
// console.log(twoSums([3, 3], 6)); // [0,1]


function twoSums2(arr, target) {
    newArr = []
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                newArr = [i, j]
                console.log(newArr)
                return newArr
            }
        }
    }
}
arr = [2, 11, 7, 5]
arr2 = [3, 4, 5, 6, 7, 8, 9, 8, 9]
twoSums2(arr, 9)