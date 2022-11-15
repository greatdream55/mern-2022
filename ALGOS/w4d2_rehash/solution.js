/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                 v
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// step1 : create a frequency map {}
frequencyMap = {
    b: 70,
    a: 184, // +20
    c: 42, // +10
}

// step 2
// extract [keys? values? ]
// []

// step3
// ["b70", "a184", "c42"]

// return a string
// hints:
parseInt(str);
isNaN(x)
myObj.hasOwnProperty("key")

function rehash(str) {
    let hashmap = {} //frequency table for our letters
    let allLetters = [] // will store each unique letter so that we can later sort
    let curLetter = str[0] // assumes first character is a letter
    let curVal = "" //we will need to concat to build this as we iterate
    let output = "" // string to return at the end

    for (let i = 1; i < str.length; i++) { //main loop through the string

        /* Handle current char */
        if (isNaN(str[i])) { // when we find a letter
            curLetter = str[i] //reset current letter
        } else { //otherwise found a number, keep building value string
            curVal += str[i]
        }

        /* Hashmap Logic */
        if (isNaN(str[i + 1])) { //triggers if the NEXT item isNaN (a letter, or undefined at the end)
            // i.e, we have all the info for a letter - value pair
            if (hashmap.hasOwnProperty(curLetter)) { //check our hashmap for our current letter
                hashmap[curLetter] += +curVal //update it if it exists by adding current value
            } else { // ( +curVal handles type conversion to number)
                hashmap[curLetter] = +curVal //create it if it does not exist
                allLetters.push(curLetter) //since it's new, add the letter to our array of letters
            }
            curVal = "" //reset current value string
        }
    }

    allLetters.sort() // sort all letters alphabetically

    for (let letter of allLetters) { //looping through our sorted letters
        output += `${letter}${hashmap[letter]}` //building our output string
    }

    return output
}

function rehash33(str) {
    let frequency = {};
    let letterArr = []
    for (let i = 0; i < str.length; i++) {
        let temp = '';
        if (frequency.hasOwnProperty(str[i])) {
            let j = i + 1;
            console.log(j);
            // number
            while (!isNaN(str[j])) {
                temp += str[j];
                j++;
            }
            temp = Number(temp);
            frequency[str[i]] += temp;
            continue;
        }
        // letter
        if (isNaN(str[i])) {
            frequency[str[i]] = 0;
            letterArr.push(str[i])
            let j = i + 1;
            while (!isNaN(str[j])) {
                temp += str[j];
                j++;
            }
            temp = Number(temp);
            frequency[str[i]] += temp;
        }
    }
    console.log(frequency);
    console.log(letterArr); // [b , c, a]

    // sort
    letterArr.sort();
    console.log(letterArr); // [a,b,c]

    // new str
    let newStr = ""
    for (let char of letterArr) {
        newStr += char + frequency[char]
    }

    console.log(newStr);
}

function rehash(str) {
    let map = {}
    let tempt = []
    let value = ""
    let currentKey = ""
    for (let i = 0; i <= str.length; i++) {
        if (isNaN(str[i])) {
            if (value != "") {
                map[currentKey] += parseInt(value)
                value = ""
            }
            if (i == str.length) break;
            if (!map.hasOwnProperty(str[i])) {
                map[str[i]] = 0
                // continue;
            }
            currentKey = str[i]
        } else {
            value += str[i]
        }
    }

    function rehash(str) {
        const frequencyTable = {}
        let rehashStr = ""
        const alphaArr = []

        for (let i = 0; i < str.length; i++) {
            if (isNaN(str[i])) {
                if (!frequencyTable.hasOwnProperty(str[i])) {
                    frequencyTable[str[i]] = 0
                    alphaArr.push(str[i])
                }
                let numStr = ""
                let j = i + 1

                for (; j < str.length && !isNaN(str[j]); j++) {
                    numStr += str[j]
                }
                frequencyTable[str[i]] += Number(numStr)
                i = j - 1
            }
        }
        alphaArr.sort()

        for (let char of alphaArr) {
            rehashStr += char + frequencyTable[char]
        }
        return rehashStr
    }

    for (const key in map) {
        tempt.push(`${key}${map[key]}`)
    }

    tempt = tempt.sort().join('')
    console.log(tempt)
    return tempt
}

function rehash(str) {
    let output = '';
    let subOutput = [];
    let freqTable = {};
    let tempString = '';
    let prevKey = '';

    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) { // is a letter
            if (!freqTable.hasOwnProperty(str[i])) {
                freqTable[str[i]] = 0;
            }
            if (freqTable.hasOwnProperty(prevKey)) { // make sure b was already in freqTable
                freqTable[prevKey] += parseInt(tempString);
            }
            prevKey = str[i];
            tempString = '';
        }
        if (!isNaN(str[i])) { // is a number
            tempString += str[i];
        }
    }

    freqTable[prevKey] += parseInt(tempString);
    tempString = '';

    for (key in freqTable) {
        tempString += key;
        tempString += freqTable[key];
        subOutput.push(tempString);
        tempString = '';
    }

    subOutput.sort(function (a, b) {
        return a.localeCompare(b);
    });

    for (each of subOutput) {
        output += each;
    }
    return output;
}

function rehash(str) {
    let rehashedStr = '';
    let frequencyTable = {};
    let alphaArr = [];

    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            if (!frequencyTable.hasOwnProperty(str[i])) {
                frequencyTable[str[i]] = 0;
                alphaArr.push(str[i]);
            }

            let numberStr = '';
            let j = i + 1
            for (; j < str.length && !isNaN(str[j]); j++) {
                numberStr += str[j];
            }

            frequencyTable[str[i]] += Number(numberStr);

            i = j - 1;
        }
    }

    alphaArr.sort();

    for (let character of alphaArr) {
        rehashedStr += character + frequencyTable[character];
    }

    return rehashedStr;
}

function rehash(str) {
    let output = "",
        hash = {},
        letter = str[0],
        num = "";

    for (let i = 1; i <= str.length; i++) {
        if (isNaN(str[i]) || i === str.length) {
            hash.hasOwnProperty(letter)
                ? (hash[letter] += parseInt(num))
                : (hash[letter] = parseInt(num));

            letter = str[i];
            num = "";
        } else {
            num += str[i];
        }
    }

    const sortedKeys = Object.keys(hash).sort((x, y) => (x > y ? 1 : -1));
    for (let key of sortedKeys) {
        output += key + hash[key];
    }

    return output;
}

function rehash(str) {
    // make an iterator
    let i = 0;
    // make anew dictionary for the letters
    let dict = {};
    // while loop over the lenght of the string to separate out the numbers and letters
    while (str[i]) {
        let tempLetter = str[i]
        // check if the letter is an entry in the dictionary or not
        if (!dict.hasOwnProperty(str[i])) {
            // add a new dictionary entry if it isn't in the dictionary
            dict[str[i]] = 0;
        }
        i++;
        // make a temporary string to capture the numbers
        let tempStr = "";
        // run a while loop and add each set of consecutive numbers to the string
        while (str[i] && !isNaN(str[i])) {
            tempStr = tempStr + str[i];
            i++;
        }
        // add the numbers to the current dictionary entry
        dict[tempLetter] += parseInt(tempStr)
    }
    // make two separate arrays of numbers and letters
    let keys = Object.keys(dict);
    let values = Object.values(dict);
    // bubble sort the letters (keys) array along with the numbers (values) array
    for (let k = 0; k < keys.length; k++) {
        for (let j = 0; j < keys.length; j++) {
            if (keys[j] > keys[j + 1]) {
                let temp1 = keys[j + 1];
                let temp2 = values[j + 1];
                keys[j + 1] = keys[j];
                values[j + 1] = values[j]
                keys[j] = temp1;
                values[j] = temp2;
            }
        }
    }
    // make a final return string that combines the letters and numbers one by one
    let returnFinal = "";
    for (let i = 0; i < keys.length; i++) {
        returnFinal = returnFinal + keys[i] + values[i];
    }

    return returnFinal;
}

function rehash(str) {
    //define empty object
    //define empty array
    //define return string
    //loop over the hashed string
    //at each letter in the string, split it and add the letter to an object
    //add the numbers following the letter as the value for a key value pair
    //if the letter is already in the object, then just add the numbers
    //join the the key-value pairs as chunks in an array
    //alphabetically order the array
    //push each chunk into an empty string
    //return 

    let sections = {};
    let chunks = [];
    let rehash = "";
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            let j = i + 1;
            let num = "";
            for (j; !isNaN(Number(str[j])); j++) {
                num += str[j];
            }
            if (sections.hasOwnProperty(str[i])) {
                sections[str[i]] += Number(num)
            } else {
                sections[str[i]] = Number(num)
            }
        }
    }
    for (let key in sections) {
        let chunk = "";
        chunk += key + sections[key]
        chunks.push(chunk)
    }
    chunks.sort()
    for (let n of chunks) {
        rehash += n;
    }
    return rehash;
}

function rehash(str) {
    /*
    first we will pre-populate a hashmap with all the letters as keys and 0 as starting value; since the letters are finited and we know all the letters
    one temp variable to indicate the char key we are at : charIndex
    one temp variable to hold the numeric value as string: num
    loop through the string:
        if the index is a letter;
            add(parseInt) the previous added numbers(num) into it's value and reset the num to '';
            and put it in a place holder variable(charIndex), 
        if the index is a number;     
            add to the num
    after the loop, 
    loop through the hashmap:
        remove all the keys with value of 0;
    After the loop, use built in methods: Object.entries and .join() to concat the object into an string
    and lastly .replaceAll to remove all the ','
    */
    let hashmap = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 }
    let num = '0';
    // console.log(result[charIndex])
    let charIndex = str[0];
    for (let char of str) {
        if (isNaN(char)) {
            hashmap[charIndex] += parseInt(num);
            num = '';
            charIndex = char;
        }
        else {
            num += char
        };
    }
    hashmap[charIndex] += parseInt(num);
    for (let key in hashmap) {
        if (hashmap[key] === 0) {
            delete hashmap[key];
        }
    }
    let result = Object.entries(hashmap).join(' ').replaceAll(',', '')
    console.log(result)
    return result;
}

rehash(str1);
console.log(rehash(str1) === expected1, "<-- should be \"true\"");