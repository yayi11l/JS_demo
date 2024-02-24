

// document.getElementById("MyH1").textContent = `Hello!`;

// variable : decleare: let x, assignment: x = 100;

// let x;
// x = 10;
// let firstname = "Bro";

// console.log(typeof x)
// console.log(`You are ${x} years old.`);

// let isStudent = false;

// document.getElementById("p1").textContent = `Your name is ${firstname}`;
// document.getElementById("p2").textContent = `You are ${x}`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;


/* arithmetic operations */

/* accept user input */
// easy way: window prompt. professional way: HTML text box

// let username;
// usename = window.prompt("What is ur username?");
// console.log(usename);

// document.getElementById("mySubmit").onclick = function() {
//   username = document.getElementById("myText").value;
//   // console.log(usename);
//   document.getElementById("myH1").textContent = `Hello ${username}`
// }

/* type conversion */

// let age = window.prompt("How old are you?");
// age = Number(age); // if i add 1 without converting type, it will add 1 directly after the string
// age += 1;

// console.log(age, typeof age);

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);// not defined: NaN
// y = String(y);// not defined: undefined
// z = Boolean(z); // check if user's input is empty. no: false

/* const: constants, unchangable variable */

// let pi = 3.14159;
const PI = 3.14159;
let radius;
let circumference;

// radius = window.prompt("Enter the radius of a circle");


// console.log(circumference);
// document.getElementById("mySubmit").onclick = function() {
//   radius = document.getElementById("myText").value;
//   radius = Number(radius);
//   circumference = 2 * PI * radius;

//   document.getElementById("myH3").textContent = circumference + "cm";
// }

/* Math: build-in object, a collection of properties and methods */
// let x = 3.21;
// let y = 2;
// let z;

// z = Math.floor(x);
// z = Math.round(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x); // shows its signature(-1, 0, 1)
// z = Math.floor(x);
// z = Math.max(x, y);
// z = Math.min(x, y);

// console.log(z);


// /* random number generator */

// // let randomNum = Math.floor(Math.random() * 6) + 1; // give random number between 1 and 6

// // better version:
// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNum);

/* if statement */
/* checkbox */


// const myCbx = document.getElementById("myCbx");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = fucntion(){
//   if (myCbx.checked) {
//     subResult.textContent = "You are subscribed!";
//   }
//   else{
//     subResult.textContent = "You are Not subscribed!";
//   }

//   if (visaBtn.checked) {
//     paymentResult.textContent = "You are paying with visa";
//   }
// }

/* ternary operator: condition ? codeIfTrue : codeIfFalse */

/* string method */

let userName = "BroCode";

console.log(userName.charAt(1));
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));
console.log(userName.length)

let name = "code    ";
name = name.trim(); //delete white space
console.log(name);

userName = userName.toLowerCase();
userName = userName.repeat(3);
console.log(userName);

let result = userName.startsWith(" "); //check the start char
console.log(result);
result = userName.endsWith(" ");
result = userName.includes(" ");

let number = "123-456-7890";
number = number.replaceAll("-", "/");
number = number.padStart(15, "0"); // pad 0 until the string is 15 chars long

console.log(number);


/* string slicing */

const fullName = "Bro code";
let firstname = fullName.slice(0, fullName.indexOf(" "));
let lastChar = fullName.slice(-4); //last 4 chars

console.log(lastChar);

/* method chaining */
let user = window.prompt("Enter your name");
userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

/* logical operators && || ! */
/* strict equality operator === : compare values and datatypes */

/* array: a data structure hold more than 1 value */
let fruits = ["apple", "orange", "banana"];

console.log(fruits[0]);

fruits[0] = "coconut"
console.log(fruits[0]);

fruits.push("watermelon");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("mango"); //add from beginning
console.log(fruits);
fruits.shift(); // move the first element

let numFruits = fruits.length;
let index = fruits.indexOf("orange");
console.log(numFruits);
console.log(index);
let index1 = fruits.indexOf("mango");
console.log(index1); // doesn't exist: return -1
// for (let fruit of fruits) 
fruits.sort();
fruits.sort().reverse();

/* spread operator (...) unpack the elements similar to "split"*/
let numbers = [1, 2, 3, 4, 5]
let maximun = Math.max(...numbers); // if Math.max(numbers) we will get NaN
// shallow copy
let newNumbers = [...numbers]
// add 2 arrays
let newArray = [...fruits, ...numbers, "Add them"]

// join can join the chars .join("-")

/* rest parameters (...rest) allow a function work with a variable number of arguments,
 bundles seperate elements into an array */
function openFridge(...foods) {
  console.log(...foods)
}
function getFood(...foods) {
  return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food3, food4)

const foods = getFood(food1, food2, food3, food3, food4);
console.log(foods);