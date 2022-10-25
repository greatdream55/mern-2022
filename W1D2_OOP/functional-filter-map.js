// Functional programming
// .map() .filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const animals = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"];

// map()

// function changeMe(animalElement) {
//     return animalElement + " is cool";
// }

// const newAnimals = animals.map( function (animalElement) {
//     return animalElement + " is cool";
// } );
const newAnimalsArrow = animals.map((animalElement) => {
    return animalElement + " is cool";
});

const moreAnimals = animals.map((animal, idx) => {
    return `${idx + 1}  -  ${animal} is very cool`;
})

// console.log(moreAnimals)

// --- filter ---
const filteredAnimals = animals.filter((eachOneElement, index) => {
    if (eachOneElement.length <= 5) {
        return true;
    } else {
        return false;
    }
})

const filteredAnimals2 = animals.filter((a) => {
    return a.length <= 5;
})
const filteredAnimals22 = animals.filter(a => a.length <= 5)



// console.log(filteredAnimals22)

// ------------
const people = [
    { name: "Bob", age: 30 },
    { name: "Mary", age: 31 },
    { name: "Sue", age: 28 },
    { name: "George", age: 38 }
];
// filter people with age >= 30


const peopleOver30people = people.filter((person) => {
    return person.age >= 30;
})

console.log(peopleOver30people.map( (elem) => {
    elem.age++;
    console.log(elem.age + 1)
    return `${elem.name} is ${elem.age} old`;
}))