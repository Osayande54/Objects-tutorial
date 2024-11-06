// Prototypes are the mechanism by which javascript objects inherit fetures from one another.#
// Every javascript object has a prototype forming  a prototype chain. When an object is created,
// it inherits properties and methods from its prototype, and this chain continues until a prototype with null is reached.
// Inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and rebuild upon the features of the existing one.
// Javascript implements inheritance by usimg objects. Each object has an internal link to another object called its prototype.
// The prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.

const country = {
  Name: "Nigeria",
  capital: "Abuja",
  Independence: 1960,
  President: "Bola Ahmed tinubu",
  Continent: "Africa",
  NoOfStates: 36,
  Regions: 6,
  About: function () {
    console.log(`${this.Name} is located in ${this.Continent}`);
  },
};

console.log(country);
