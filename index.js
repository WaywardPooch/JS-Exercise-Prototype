/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function (food) {
  if (this.stomach.length < 10) {
    this.stomach.push(food);
  }
};
Person.prototype.poop = function () {
  this.stomach = [];
};
Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

// Make a person object
const johnny = new Person("johnny", "32");
// Log the new person object
console.log("Task 1: Person =>", johnny.toString());
// Make the person eat food
johnny.eat("toast");
johnny.eat("eggs");
johnny.eat("bacon");
// Check the person's stomach
console.log("Task 1: Person's stomach after eating =>", johnny.stomach);
// Make the person poop
johnny.poop();
// Check the person's stomach
console.log("Task 1: Person's stomach after pooping =>", johnny.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

// ========== TASK 2 MVP ==========

// Create a Car constructor
function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
// Add a fill method to its prototype
Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};
// Test the above with an example car
const mustang = new Car("mustang", 25); // Make a new car
console.log("Task 2: Car object =>", mustang); // Log the new car object
mustang.fill(4); // Fill the tank with 4 gallons of gas
console.log("Task 2: Gallons in gas tank after filling =>", mustang.tank); // Log the gallons of gas in the tank

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

// Create baby constructor
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age); // Assign the parent
  this.favoriteToy = favoriteToy;
}
// Inherit parent's methods
Baby.prototype = Object.create(Person.prototype);
// Add a play() method to the baby's prototype
Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};
// Test if the baby can play
const gabe = new Baby("Gabe", 0.25, "his red ball"); // Create a baby
console.log("Task 3: Baby object =>", gabe); // Log the baby object
console.log("Task 3: Baby playing =>", gabe.play()); // Log the output of baby.play()

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:

  The "this" keyword requires context in order to have meaning, just like in English. 
  Its context generally comes from implicit, explicit, or "new" binding, which is decided through how methods of objects are invoked.
  If "this" is not given proper context, it enacts "window-binding," which is not very useful behavior (pretty much an error).
  
  1. Window binding happens when "this" is used in the global scope; it is essentially an error, producing a list containing the whole of JavaScript, itself.
  2. Implicit binding is when "this" is given implied context through the invocation of object methods using the "dot" operator.
  3. Explicit binding is when "this" is given explicit context by invoking functions using .apply(), .bind(), or .call(), with the object to stand in for "this" passed-in.
  4. New binding is when "this" is given context through it being assigned to a newly-created object spawned from a constructor function.
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo() {
  console.log("its working!");
  return "bar";
}
foo();
module.exports = {
  foo,
  Person,
  Car,
  Baby,
};
