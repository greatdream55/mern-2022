var mergeArr2 = [55,66];
var mergeArr1 = [33,44];

var mergeArrA = [33,44,55];
var mergeArrB = [11,66];

var arrLeft = [22];
var arrRight = [11,33];
//                      arrLeft, arrRight
function mergeSortedArrays(arr1, arr2) { 
    let sortedArr = [];                      
    while(arr1.length && arr2.length) {
        console.log(arr1.length, arr2.length, sortedArr.length);
        
        if(arr1[0] < arr2[0]) {
            sortedArr.push(arr1.shift())
        } else {
            sortedArr.push(arr2.shift())

        }
    }
    sortedArr.push(...arr1)
    sortedArr.push(...arr2)

    console.log(sortedArr);

}
mergeSortedArrays(mergeArr2, mergeArr1)
mergeSortedArrays(arrLeft, arrRight)
mergeSortedArrays(mergeArrA, mergeArrB)


