// 5! 5*4*3*2*1
// 3! 3*2*1
// 2! 2*1
// 1! 1
//                  4
function factorial(num){
    // 1. exit early - base case 1
    if(num === 1) {
        return 1
    }
    // 2. logic - guide towards the base case num* -1
    // 3. recurse the function
    //              
    return num * factorial(num - 1)
}

// factorial(4)

// function hi() {
//     hi();
// }

// hi();