/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
         
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    return true or false
    Ninja Bonus: solve in O(n) time
*/

// ad#clp
// aclp

//          v
const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//             v
const S2 = "ab##";
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""

const T2 = "c#d#";
// []
// "str2"
// c -> "" -> d -> "" 
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".


// onsite-
function backSpace(s1, s2) {
    i = 0
    j = 0
    while (i < s1 & j < s2) {
        if (s1[i] == "#") { 
            s1.slice(i - 1, i) 
        } 
        if (s2[i] == "#") {
             s1.slice(i - 1, i) 
            }
    } 
    return s1 === s2
} 
s11 = "a3jjd#fe#"
s21 = "a3jjd##fe#"
console.log(backSpace(s11, s21))

function backspaceStringCompare(S, T) {

    const backspacedStack1 = [];
    const backspacedStack2 = [];

    for (const char of S) {
        if (char !== "#") {
            backspacedStack1.push(char);
        } else if (backspacedStack1.length > 0) {
            backspacedStack1.pop();
        }
    }

    for (const char of T) {
        if (char !== "#") {
            backspacedStack2.push(char);
        } else if (backspacedStack2.length > 0) {
            backspacedStack2.pop();
        }
    }

    if (backspacedStack1.length !== backspacedStack2.length) {
        return false;
    }

    for (let i = 0; i < backspacedStack1.length; i++) {
        if (backspacedStack1[i] !== backspacedStack2[i]) {
            return false;
        }
    }
    return true;
}

//--------- D ------------
function backspaceStringCompare2(S, T) {
    return removeBackspace(S) == removeBackspace(T);
}

function removeBackspace(str) {
    let output = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "#") {
            output = output.substring(0, output.length - 1);
        } else {
            output += str[i];
        }
    }
    return output;
}
//   ---------------- TA -------------
function backspaceStringCompare3(S, T) {
    return parseBackSpace(S) == parseBackSpace(T) // return simple comparison call to our helper function
}

function parseBackSpace(string) { //helper function -- Where the logic lives!
    let skip = 0 // count of how many characters to skip
    let parsed = ""
    for (let i = string.length - 1; i >= 0; i--) { //iterate BACKWARDS through string
        if (string[i] == "#") { // if current letter is a backspace, increase number of letters to skip
            skip++
        } else { //if current letter is NOT a backspace
            if (skip == 0) { //if we don't need to skip any letters
                parsed = string[i] + parsed //add current letter to parsed string (in reverse order)
            } else if (skip > 0) { //if we need to skip any, 
                skip-- //decrement skip and do nothing else
            }
        }
    }
    return parsed
}
// -------------MA--------------
function backspaceStringCompare4(S, T) {
    let newS = [];
    let newT = [];
    let i = 0;
    while (i < S.length || i < T.length) {
        (S[i] !== "#") ? newS.push(S[i]) : newS.pop();
        (T[i] !== "#") ? newT.push(T[i]) : newT.pop();
        i++;
    }
    let output = (JSON.stringify(newS) === JSON.stringify(newT)) ? true : false;
    return output;
}
// ---------------------------

function backspaceStringCompare5(S, T) {

    for (let i = 0; i < T.length; i++) {
        if (T[i] === '#') {
            tArr.pop();
        } else {
            tArr.push(T[i]);
        }
    }

    // sArr = sArr.join('');
    // tArr = tArr.join('');
    sArr = sArr.toString();
    tArr = tArr.toString();

    console.log(sArr);
    console.log(tArr);
    return tArr === sArr;
}
// -------------------

console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))