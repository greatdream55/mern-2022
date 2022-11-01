ro/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
 function orderedIntersection(sortedA, sortedB) {
  let idxA = 0, idxB = 0;

  const intersection = [];

  while (idxA < sortedA.length && idxB < sortedB.length) {
    if (sortedA[idxA] === sortedB[idxB]) {
      if (intersection[intersection.length - 1] !== sortedA[idxA]) {
        // add it only if the last num added isn't the same num
        intersection.push(sortedA[idxA]);
      }
      idxA++;
      idxB++;
    } else if (sortedA[idxA] < sortedB[idxB]) {
      idxA++;
    } else {
      idxB++;
    }
  }
  return intersection;
}

function orderedIntersection2(sortedA, sortedB) { 
    let intersect = [] // arr to return
    let indexA = 0 // initialize indices for each arr to intersect
    let indexB = 0

    while (indexA < sortedA.length && indexB < sortedB.length){ //while indices are in range
        let valA = sortedA[indexA] //values to examine from arrs
        let valB = sortedB[indexB] 

        if (valA == valB){ //if values are the same, we've found an intersect
            if (intersect[intersect.length-1] != valA){ //check for dupe
                intersect.push(valA) //push valA to intersect array if not a dupe
            }
            indexA++ //whether a dupe or not, intersect has been checked, move both indices
            indexB++
        } else if (valA < valB){ //if valA is smaller
            indexA++ //increase indexA to try to match valB
        } else { // else valB is smaller, increase indexB to see if we can match valA
            indexB++
        }
    }

    return intersect //all done!

}

/**
 * this function will say hello
 */
function hi() {

}