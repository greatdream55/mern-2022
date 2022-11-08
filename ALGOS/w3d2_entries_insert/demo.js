const obj1 = {
    food: "Pizza",
    calories: 9001,
};

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    power: 9001,
};

// linking objects
obj1.__proto__=obj2;

// extract keys of an obj
// returns an ARRAY of the keys 
const keyArray = Object.keys(obj1);

const valuesArray = Object.values(obj1);
// console.log(valuesArray)

const entriesArray = Object.entries(obj1);
console.log(entriesArray)


// for(someKey in obj1) {
//     console.log(someKey, obj1[someKey])
// }