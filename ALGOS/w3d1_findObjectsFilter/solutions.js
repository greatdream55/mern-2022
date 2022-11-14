// findObjectsFilter(searchFor, itemsArr)

// given a {search for} object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

// db.ninjas.find({firstName: "Bob"})
const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    // { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

// ---------------------------------------

function findObjectsFilter(searchObj, items) {
    let filtered = []  // arr to return
    for (let obj of items) { //loop over all objects in items
        let match = true // assume object matches until we know it doesn't
        for (let key in searchObj) { //for each key in our search object
            if (searchObj[key] != obj[key]) { //see if the current obj has the same value as the searchObj at that key
                match = false // if not, not a match
                break; // no need to check further keys if any key isn't a match
            }
        }
        if (match) filtered.push(obj) // if current obj is a match, push it to our return arr
    }
    return filtered
}

function findObjectsFilter(searchObj, items) {
    // put all the keys for the search object into an array
    const searchKeysArr = Object.keys(searchObj);

    // filter the items
    let x = items.filter(item => {
        // for each item in items
        // for every key in searchKeysArr
        for (const key of searchKeysArr) {
            // if the key doesn't exist
            if (!item.hasOwnProperty(key) || item[key] !== searchObj[key]) {
                return false;
            }
        }
        // if the for loop returns no false, return true
        return true;
    })
    return x;
}

function findObjects(criteria, collection) {
    const foundDocuments = [];

    for (const item of collection) {
        let isMatch = true;

        for (const searchKey in criteria) {
            const searchVal = criteria[searchKey];

            if (item.hasOwnProperty(searchKey) === false ||
                item[searchKey] !== searchVal) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            foundDocuments.push(item);
        }
    }
    return foundDocuments;
}

const findObjectsFunctional2 = (criteria, collection) =>
    collection.filter((item) => Object.keys(criteria).every((key) => item[key] === criteria[key])
    );



console.log(findObjectsFilter(searchFor1, items));
console.log(findObjectsFilter(searchFor1, items).toString() == output1.toString());
console.log(findObjectsFilter(searchFor2, items));
