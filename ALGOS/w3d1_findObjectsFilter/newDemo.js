//               0         1         2          3
var animals = ["lion", "zebra", "elephant", "giraffe"];
// animals[0]
for(someElement of animals) {
    console.log(someElement)
}

const doggo = {
    name: "Spark",
    age: 8,
    favFood: "Scooby Snacks",
    canBark: {
        loud: true,
        sound: "woof"
    },
}
// doggo.name

for(someKey in doggo) {
    console.log(someKey, doggo[someKey])
}

// extract keys of doggo object
// return an ARRAY of the keys
const doggoKeysArray = Object.keys(doggo)
// console.log(doggoKeysArray)

const doggoValuesArray = Object.values(doggo)
// console.log(doggoValuesArray)

const doggoEntriesArray = Object.entries(doggo)
// console.log(doggoEntriesArray)

// check if a key exists in an object
console.log(
    // O(1)
    doggo.hasOwnProperty("sdfghj")
)