/* Callback: function that passed as an argument to another function
used to handle: read files, network requests, interacting with databases 
"when ur done, call this next" */

// hello();
// goodbye();

// guarantee call goodbye() after hello()
// hello(goodbye);

// function hello(Callback) {
//   console.log("Hello!");
//   Callback();
// }

// function goodbye() {
//   console.log("Goodbye!");
// }


function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}

/* forEach(): iterate over the elements of an array and apply 
a specified function (callback) for each element. 
  array.forEach(calback) */

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double)
numbers.forEach(display);

function display(element) {
  console.log(element);
}

function double(element, index, array) {
  array[index] = element * 2;
}

let fruits = ["apple", "orange", "banana", "coconut"]

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
// fruits.forEach(upperCase)
fruits.forEach(capitalize);
fruits.forEach(display);

/* .map(): accepts a callback and applies that function to 
each element of an array, return a new array */

// const squares = numbers.map(square)
// console.log(squares)

// function square(element) {
//   return Math.pow(element, 2)
// }

const dates = ["2024-1-10", "2025-2-11", "2026-3-4"];
const formatedDates = dates.map(formateDates);
console.log(formatedDates);

function formateDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

/* .filter(): creates a new array by filtering out elements */

numbers = [1, 2, 3, 4, 5]
// let evenNums = numbers.filter(isEven); // filter the elements that satisfy the condition (whatever the function returns)

// console.log(evenNums);
// function isEven(element) {
//   return element % 2 === 0;
// }

/* .reduce(): reduce the elements of an array to a single value 
reduce(sum): reduce take the function sum and apply it to the array
sum(previous, next): automatically take the result as the first parameter
and the second parameter will be the next element */
const prices = [5, 30, 20, 45, 13];
// const total = prices.reduce(sum)

// console.log(`$${total.toFixed(2)}`);

// function sum(previous, next) {
//   return previous + next;
// }

// function getMax(accumulator, element) {
//   return Math.max(accumulator, element)
// }

/* function delaration (as above) 
 & function expression(as below): a way to define functions as values or variables. 
 1. callbacks in asynchronous operations 
 2. Higher-order function
 3. closure
 4. event listeners
 */

// const hello = function () {
//   console.log("Hello");
// }

// hello();

// setTimeout(hello, 3000)

// setTimeout(function() {
//   console.log("Hello!")
// }, 3000);

// only use once so we do not need to create a function
// const square = numbers.map(function(element) {
//   return Math.pow(element, 2);
// })

/* arrow functions: a concise way to write function expressions
good for simple functions that you use only once
(parameters) => some code (expressions) */
const hello = (name, age) => {console.log(`Hello ${name}!`)
                         console.log(`You are ${age} years old`)};
hello("Bro", 25);

// setTimeout(callback, 3000)
// setTimeout( () => console.log("Hello"), 3000);

// const square = numbers.map((element) => Math.pow(element, 2));
// const cubes = numbers.map((element) => Math.pow(element, 3));
// const evenNums = numbers.filter((element) => element % 2 === 0);// choose the elements that element % 2 === 0
// const oddNums = numbers.filter((element) => element % 2 !== 0);
// const total = numbers.reduce((accumulator, element) => accumulator + element)
// console.log(square);

/**
 * Objects use comma to seperate and end with no sign.
 * {key: value,
 * function() }
 * this keyword: cannot be used to arrow functions
 */



const person2 = {
  firstname: "Patrick",
  lastname: "Star",
  age: 43,
  isEmployed: false,
  // sayHello: function(){console.log("Hey!")}
  sayHello: () => console.log("Hey!"),
  eat: function() {console.log("I'm eating a pizza")}
}

/**
 * constructor
 */

function Car(make, modle, year, color) {
  this.make = make,
  this.modle = modle,
  this.year = year,
  this.color = color,
  this.drive = function () {console.log(`You drive ${this.make}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");

/**
 * Class
 */

class Product{
  constructor(name, price) {
    this.name = name,
    this.price = price
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price.toFixed(2)}`);
  }
}

const product1 = new Product("Shirt", 19.99);
product1.displayProduct();

/**
 * static keyword: class owns anything static not object
 */
class MathUtil{
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }
  
  static getArea(radius){
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.getArea(3.0).toFixed(2));

class User{
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount ++;
  }
}

/**
 * inheritance: extends
 */

class Animal{
  alive = true;

  eat(){
    console.log(`This ${this.name} is eating`);
  }
}

class Rabbit extends Animal{
  name = "rabbit"
}

const rabbit = new Rabbit();

/**
 * super: call the constructor or access the properties and methods of a parent
 * getter
 * setter
 */

class Rec{
  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  set width(newWidth){
    if (newWidth > 0) {
      this._width = newWidth; //_ private property
    }
    else {
      console.error("Must be a positive number.");
    }
  }

  set height(newHeight){
    if (newHeight > 0) {
      this._height = newHeight;
    }
    else {
      console.error("Must be a positive number.");
    }
  }

  get width(){
    return this._width;
  }

  get height(){
    return this._height;
  }
}

const rec = new Rec(3, 4);

rec.height = 22;
rec.width = 23;
console.log(rec.width);
console.log(rec.height);

/**
 * destructuring: [] for array, {} for object
 */

// let a = 1;
// let b = 2;

// [a, b] = [b, a]

// const colors= ["red", "white", "black"]

// [colors[2], colors[0]] = [colors[0], colors[2]]

// const person1 = {
//   firstname: "Spongebob",
//   lastname: "Squarepants",
//   age: 30,
//   job: "cook"
// }

// const {firstname, lastname, age, job="Unemployeed"} = person1

// in function parameters

// function displayPerson({firstname, lastname, age, job="Unemployeed"}) {
//   return;
// }

/**
 * nested object: objec inside another object
 * Person(Address{}, ContactInfo{})
 */

// const Person = {
//   firstname: "Spongebob",
//   lastname: "Squarepants",
//   age: 30,
//   isStudent: true,
//   hobbies: ["karate", "jellyfishing", "cooking"],
//   address: {
//     street: "124 Conch st.",
//     city: "Bikini Bottom",
//     country: "Int. Water"
//   }
// }

class Person {
  constructor(name, age, ...address){
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country){
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Spongebob", 30, "124 Conch st.",
                                            "Bikini Bottom", 
                                            "Int. Water");

/**
 *  arrays of objects
 * pop, push(), splice(1,2): delete from indx 1 to 2
 */

// fruits.forEach(fruit => console.log(fruit.color))
// const fruitNames = fruits.map(fruit => fruit.name);
// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

/**
 * sort(): lecxicographic = (alphabet, numbers, symbols) as strings
 */

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

number.sort((a, b) => a - b); // automatically compare first(a) and next(b)

console.log(number);

const people = [{name:"AAA", age: 23, gpa: 2.3},
                {name:"BBB", age: 43, gpa: 3.6},
                {name:"CCC", age: 34, gpa: 1.5},
                {name:"DDD", age: 24, gpa: 2.5},]
people.sort((a, b) => a.gpa - b.gpa);
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);

/**
 * shuffle an array: Fisher-Yates algorithm
 */

const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function shuffle(array){
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
}

shuffle(cards);
console.log(cards); 
/**
 * Data Object
 */

//Date(year, month, day, hour, minute, second, ms)
// const date = new Date(2024, 0, 1, 2, 3, 4);
// const date = new Date("2024-01-02T12:00:00Z");
// const date = new Date(1700000000000); // pass ms

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() // 0 is Jan
date.setFullYear(2025);
console.log(date);

//compare 2 date
const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");
if (date2 > date1) {
  console.log("Happy New Year!");
}

/**
 * closure: a function defined inside of another function, the inner function has access to the
 * variables  and scope of outer function. Allow for private variables and state maintainance.
 * Used frequently in Js frameworks: React Angular Vue
 */ 

// eg1
function outer() {
  
  let message = "Hello";

  function inner() {
    console.log(message);
  }
  inner();
}
message = "Goodbye";
outer();

// eg2
function createCounter() {

  let count = 0; // it is private, have no access to it, if we want: create a getter

  function increment() {
    count ++;
    console.log(`count increased to ${count}`);
  }

  function getCount() {
    return count;
  } 

  return {increment, getCount};
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(`current count: ${counter.getCount()}`);

// eg3
let score = 0;
function increaseScore(points) {
  score += points;
  console.log(``)
}

/**
 * setTimeout(): schedule the execution of a function after amount of time(ms)
 * times are approximate (based on the workload od the js runtime env.)
 * setTimeout(callback, delay)
 */

// function sayH() {
//   window.alert("hello!");
// }
// setTimeout(sayH, 2000);

// setTimeout(() => {
//   window.alert("hello")
// }, 2000);

let timeoutId

function startTimer() {
  timeoutId = setTimeout(() => {window.alert("hello");}, 2000);
  console.log();
}

function clearTimer() {
  clearTimeout(timeoutId)
}