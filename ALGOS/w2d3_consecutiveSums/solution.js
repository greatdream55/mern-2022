// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsecutiveSums(arr, k) {
    // create an output
    const sums = [];
    console.log(arr, k);

    // loop the array
    for (let i = 0; i < arr.length; i++) {
        // create a consecutive sum array
        const consecNums = [];
        // and a rolling sum
        let sum = 0;
        // starting at i
        let j = i;
        // loop until the sum is less than k or we read off the end of arr
        while (sum <= k && j < arr.length - 1) {
            // if sum + j is still smaller, add it
            if (sum + arr[j] <= k) {
                sum += arr[j];
                consecNums.push(arr[j])
                j++;

                // if sum is equal to k now, push
                if (sum === k) {
                    sums.push([...consecNums]);
                    // [3, 6, 7]
                    // [3, 6, 7, 0]
                }
            } else {
                // if the next number is so large that the sum becomes larger than k, break
                break;
            }
        }
    }
    return sums;
}

console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,11], 16));

function findConsecutiveSums1(arr, k) { //my first pass, lots of built ins
    let left = 0; //initialize left and right indices for slicing
    let right = 1;
    let returnArr = [] // arr to return
    while (right < arr.length + 1) { // while right is less than one more than length
        // plus one because we will be slicing, and slice is exclusive of second index provided
        let slice = arr.slice(left, right) //get the portion of the array we're looking at
        let sum = slice.reduce((a, b) => a + b) //sum its parts using reduce
        if (sum == k) { //if we found our target sum
            returnArr.push(slice) //push the slice into our return array
            right++ //increase right index, if next element is 0, it will be another solution
        } else if (sum > k) { //if we're over our sum, move left up one and reset right to one more than left
            left++
            right = left + 1
        } else if (sum < k) { // if we're under our sum, add another element to this slice
            right++
        }
    }
    return returnArr
}

function findConsecutiveSums2(arr, k) {
    let returnArr = [] //arr to return
    //main outer loop
    for (let i = 0; i < arr.length; i++) { //iterate through array
        let sum = arr[i] //initialize a sum starting at this i position

        //inner loop 
        for (let j = i + 1; j < arr.length + 1; j++) { // go through the rest off the array
            if (sum > k) { //if sum has passed k, we can stop looking / adding elements and move up i
                break //remove this check if inputs include negative numbers
            }
            if (sum == k) { // hit target, push this slice
                returnArr.push(arr.slice(i, j))
            }
            sum += arr[j] // add next element if we haven't reached target or passed it
        }
    }
    return returnArr
}

console.log(findConsecutiveSums([2, 5, 3, 6, 7, 0, 0, 23, 11, 16], 16));
console.log(findConsecutiveSums2([2, 5, 3, 6, 7, 0, 0, 23, 11, 16], 16));