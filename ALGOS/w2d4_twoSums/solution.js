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

function twoSums(arr, target) {
    let idx1 = 0;
    let idx2 = 1;
    const output = [];
    while (idx1 !== arr.length) { // O(n^2) 👀
        if (arr[idx1] + arr[idx2] === target) {
            output.push(idx1);
            output.push(idx2);
            return output;
        } else if (idx2 === arr.length) {
            idx1++;            
            idx2 = idx1 + 1;   
        } else {
            idx2++;
        }
    }
    return output;
}

console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums([3, 2, 4], 6)); // [1,2]
console.log(twoSums([3, 3], 6)); // [0,1]


function twoSums2(arr, target) {
    let seen = {} //hash map object will allow O(1) look up time of already seen values. 
    // we will store KVPs with the key being the value from the array, and the value being its index 
    
    for (let i = 0; i < arr.length; i++){ //loop through the array
        let currentValue = arr[i]; // initialize current value to consider
        let delta = target - currentValue; // let delta be the value needed to reach target with currentValue
        if (seen.hasOwnProperty(delta)){ // if delta exists in our hash map ( O(1) look up time)
            return [seen[delta], i] // return an array containing the two indices
        }
        seen[currentValue] = i; // otherwise, add current value and its index as a KVP to our seen object
    }
}
