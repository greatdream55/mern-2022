// what is a class?
// - blueprint
// - 
const myBook = {
    title: "JS is the best language - period",
    pages: 9001,
    author: "Bob",
    publishYear: 2022
}

// create a class
class Book{
    constructor(title, pages, author, year = 2022) {
        // console.log(this)
        // attributes
        this.title = title
        this.pages = pages
        this.author = author
        this.publishYear = year;
    }
}
// instantiate book
const book1 = new Book("Harry Potter", 600, "JK Rowling", 1998);
const book2 = new Book("Harry Potter 2", 602, "JK Rowling", 1999);
// console.log(book1);

// inheritance
class Car{
    constructor(manufacturer, model, color, nickName) {
        //  attributes
        // what the class HAS
        this.manufacturer = manufacturer;
        this.model = model; 
        this.color = color;
        this.nickName = nickName;
        this.miles = 0;
    }
    
    // methods
    // what the class can DO (actions)
    drive() {
        this.miles += 10;
        // console.log(this.nickName + " has driven " + this.miles + " miles");
        console.log(`${this.nickName} has driven ${this.miles} miles`);
        // const message = `my name is ${this.nickName}`
        return this
    }

    honk(otherCar) {
        if(otherCar instanceof Car) {
            console.log(`${this.nickName} honks at ${otherCar.nickName}`)
        } else {
            console.log("this is not a car!!")
        }
    }
}

class Tesla extends Car{
    constructor(model, color, name, autopilot = false) {
        super("Tesla", model, color, name)
        this.autopilot = autopilot;
    }

}

const modelx = new Tesla("model x", "blue", "lightning mcqueen");
console.log(modelx);

// modelx.drive();
// modelx.drive();
// modelx.drive();
// modelx.drive();


// car1
const car1 = new Car("Honda", "Civic", "cherry pink", "old betsy");
const car2 = new Car("BMW", "M3", "steel grey", "I don't know, the machine");

// car1.manufacturer
// car1.model
// car2.miles

// car1.drive().drive().drive();


car1.honk(modelx);
car1.honk(car2);
car1.honk("bob");
modelx.honk(car2);
modelx.honk("alice");
modelx.honk(modelx);
