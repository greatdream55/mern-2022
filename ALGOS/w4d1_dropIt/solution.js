/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true
*/
//                     v
const arr1 = [1, 4, 3, 6, 9, 3];
const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 3];

const arr2 = [1, 4, 3, 6, 9, 3];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 3];

const arr3 = [1, 4, 3, 6, 9, 3];
const callback3 = (elem) => false;
const expected3 = [];

function dropIt(arr, callback) { 
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (callback(arr[i])) {
            arr.splice(0, i);
        } 
    }
    console.log(arr);
}
// dropIt(arr1, callback1)
function dropIt2(arr, callback) { 
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (!callback(arr[0])) {
            arr.shift()
        } else {
            break
        }
    }
    console.log(arr);
}
// app.get("/api", (req,res) => {
// })
function dropIt1(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            for (let j = 0; j < arr.length - 1; j++) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
            arr.pop();
        } else {
            return arr;
        }
    }
    return [];
}

function dropIt2(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            arr.splice(0, i);
            return arr;
        }
    }
    arr.splice(0, arr.length);
    return arr;
}

function dropItFunctional(arr, callback) {
    const delCount = arr.findIndex((elem) => callback(elem) === true);
    arr.splice(0, delCount === -1 ? arr.length : delCount);
    return arr;
}
// app.get("/api", (req,res) => {
// })


function dropIt(arr, callback) {
    let output = []
    let gate = 0

    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i]) && gate == 0) {
            console.log(callback(arr[i]))
        }

        else {
            gate = 1
            output.push(arr[i])
        }
    }

    return output
}

function dropIt(arr, callback) {
    let flag = false; //this flag will check if we've met our callback condition
    let output = [] //this will be our returned array
    for (let num of arr){ //iterate through nums in arr

        if (!flag){ //if we haven't toggled our bool yet
            if (callback(num)){ //see if the callback function returns true on this element
                flag = true; // if it does, toggle our flag
            }
        }

        flag && output.push(num) //if our flag has been toggled, push the rest of the elements to our return arr

    }
    return output // all done
}


function dropIt2(arr, callback){
    let index = null; // will either remain null or become first index that satisfies callback
    for (let i = 0; i<arr.length; i++){ //find first element that satisfies callback and break
        if (callback(arr[i])){
            index = i;
            break;
        }
    }
    return index ? arr.slice(index) : []; // return slice from index if an index was found
    // otherwise, return empty arr
}


console.log(dropIt(arr1, callback1));
console.log(dropIt(arr2, callback2));
console.log(dropIt(arr3, callback3));