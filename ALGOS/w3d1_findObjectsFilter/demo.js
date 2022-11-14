// {OBJECTS}
var animals = ["lion", "zebra", "elephant", "giraffe"];

// for (let i=0; i<animals.length; i++) {
//     console.log(animals[i]);
// }
// animals.map((animal, i) => {
//     console.log(animal);
// })
// animals.forEach(animal => console.log(animal))

const doggo = {
    name: "Spark",
    age: 8,
    favFood: "Scooby Snacks",
    canBark: true,
}
// loop over an object
for(someKey in doggo){
    console.log(someKey, doggo[someKey]);
}
for (someElem of animals) {
    // ...
}

// check if a key exists in an object
// O(1)
// array[3]
doggo.hasOwnProperty("age") // T /F