/**
 * ES6 Module: An external file that contains reusable code that can be
 *             imported into other JS files. Write reusble code for many
 *             different apps. Can contain variables, classes, functions...
 */

// import {PI, getArea, getC, getV} from './mathUtil.js';

// console.log(PI);
// const circumference = getC(10);
// const area = getArea(10);

// console.log(`${circumference.toFixed(2)}cm`);
// console.log(`${area.toFixed(2)}cm^2`);

/**
 * synchronous: executes line by line consecutively in a sequential manner. 
 *              Code waits for an operation to complete.
 * 
 * asynchronous: Allows multiple operations to be performed concurrently without waiting.
 *               doesn't block the execution flow and allows the program to continue.
 *               (I/O operations, network requests, fetching data)
 *               Handled with: Callbacks, Promises, Async/Await
 */

// function func1(callback) {
//   setTimeout(() => {
//     console.log("T1");
//     callback();
//   }, 3000);
// }

// function func2() {
//   console.log("T2");
//   console.log("T3");
//   console.log("T4");
// }
// func1(func2); // if we dont seperate, these 2 things will happen concurrently: asynchronous

/**
 * Error: a objext created to represent a problem.
 * Uncaught error interrupt the normal flow of our program.
 * try {}: enclose code that might cause an error
 * catch {}: catch and handle any thrown errors from try
 * finally {}: optional, used for clean up, close files, close connections, release resources
 */

// try {
//   console.log(x);
//   // network errors
//   // promise rejection
//   // security errors
//   if (x = 0) {
//     throw new Error("can't devide by 0!"); // just a throw example
//   }
//   if (isNaN(x)) {
//     throw new Error("Values must be a number!")
//   }
// } catch (error) {
//   console.error(error);
// }
// finally {
//   console.log("This is always executed.")
// }
// console.log("You have reached the end!")

/**
 * DOM: document object model. Object thant represents the page you see in the web browser
 *      and provides you with an API to interact with it.
 *      Web browser constructs the DOM when it loads an HTML document, and structures all
 *      elements in a  tree-like representation. JS can access the DOM to dynamically 
 *      change the content, structure and style of web page.
 */

// console.dir(document);

/**
 * element selectors: Method used to target and manipulate HTML elements.
 *                    allows you to select one or multiple HTML elements from the DOM.
 * 
 * 1. document.getElementById()   -> element or null
 * 2. document.getElementsClassName() -> HTML collection(do not have a for each method)
 * 2. document.getElementsByTagName() -> HTML collection
 * 3. document.querySelector()   -> first element or null
 * 4. document.querySelectorAll()  -> nodelist
 */
// html
{/* <h1 id="my-heading">Food R Us</h1>

<div class="fruits">Apple</div>
<div class="fruits">Banana</div>
<div class="fruits">Orange</div>

<h4>Root Vegetables</h4>
<ul> //3 children with born sequence from first to last
  <li>Beets</li>
  <li>Carrots</li>
  <li>Potatoes</li>
</ul>

<h4>Non-Root Vegetables</h4>
<ul>
  <li>Broccoli</li>
  <li>Celery</li>
  <li>Onions</li>
</ul> */}

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// const fruits = document.getElementsByClassName("fruits");

// Array.from(fruits).forEach(fruit => {
//   fruit.style.backgroundColor = "yellow";
// });

// console.log(fruits);

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// for(let h4Element of h4Elements) {
//   h4Element.style.backgroundColor = "yellow";
// }

// console.log(h4Elements);

// const element = document.querySelector(".fruits");

// element.style.backgroundColor = "yellow";

// const fruits = document.querySelectorAll(".fruits");

// fruits[2].style.backgroundColor = "yellow";

/**
 * DOM navigation: the process of navigating through the structure of HTML document using JavaScript.
 * 
 * .firstElementChild
 * .lastElementChild
 * .nextElementSibling
 * .previousElementSibling
 * .parentElement
 * .children
 */

{/* <ul id="fruits">
<li id="Apple">Apple</li>
<li id="Banana">Banana</li>
<li id="Orange">Orange</li>
</ul>

<ul id="vegetables">
<li>Beets</li>
<li>Carrots</li>
<li>Potatoes</li>
</ul>

<ul id="desserts">
<li>Cake</li>
<li>Pie</li>
<li>Ice cream</li>
</ul> */}

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const element = document.getElementById("Apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

/**
 * add & change HTML
 */

{/* <ol id="fruits">
<li id="apple">apple</li>
<li id="banana">banana</li>
<li id="orange">orange</li>
</ol> */}

// const newH1 = document.createElement("h1");

// newH1.textContent = "I like pizza";
// newH1.id = "myH1";
// newH1.style.color = "tomato";

// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2); // insert newH1 before box2

// // document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);


// const newli = document.createElement("li");
// newli.textContent = "coconut";
// newli.id = "coconut";
// newli.style.fontWeight = "bold";

// document.getElementById("fruits").append(newli);

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newli, listItems[0]);

/**
 * eventListener: Listener for specific el=vents to create interactive 
 *                web pages events: click, mouseover, mouseout, keydown, keyup
 *                .addEventListener(event, callback/ anonymous function/ arrow function);
 */

{/* <div id="myBox">
Click me >o<
</div>

<button id="myBtn">Click me</button> */}

// const myBox = document.getElementById("myBox");
// const myBtn = document.getElementById("myBtn");

// function changeColor(event) {
//   console.log(event);
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "OUCH!!  :(";
// }
// myBox.addEventListener("click", changeColor)

// myBox.addEventListener("click", function(event) {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "OUCH!!  :(";
// })

// myBox.addEventListener("click", event => {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "OUCH!!  :(";
// })

// myBox.addEventListener("mouseover", event => {
//   event.target.style.backgroundColor = "yellow";
//   event.target.textContent = "Don't do it..";
// })

// myBox.addEventListener("mouseout", event => {
//   event.target.style.backgroundColor = "lightgreen";
//   event.target.textContent = "Click me >o<";
// })

// const myBox = document.getElementById("myBox");
// const moveAmount = 10;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", event => {
//   console.log(`Key down = ${event.key}`);
//   myBox.textContent = "Don't do it.."
//   myBox.style.backgroundColor = "tomato";
// })

// document.addEventListener("keyup", event => {
//   console.log(`Key up = ${event.key}`);
//   myBox.textContent = "Click me"
//   myBox.style.backgroundColor = "lightblue";
// })

// document.addEventListener("keydown", event => {
//   // console.log(event.key);
//   if (event.key.startsWith("Arrow")) {
    
//     // event.preventDefault();

//     switch (event.key) {
//       case "ArrowUp":
//         y -= moveAmount;
//         break;
    
//       default:
//         break;
//     }
//   }
// })

/**
 * Hide/show HTML
 */

{/* <button id="myBtn">Hide</button>

<img id="myImg" src="" width="400px"> */}

// const myBtn = document.getElementById("myBtn");
// const myImg = document.getElementById("myImg");

// myBtn.addEventListener("click", event => {

//   // if (myImg.style.display = "none") {
//   //   myImg.style.display = "block";
//   //   myBtn.textContent = "Hide";
//   // } else {
//   //   myImg.style.display = "none";
//   //   myBtn.textContent = "Show";
//   // }

//   if (myImg.style.visibility = "hidden") {
//     myImg.style.visibility = "visible";
//     myBtn.textContent = "Hide";
//   } else {
//     myImg.style.visibility = "hidden";
//     myBtn.textContent = "Show";
//   }
// })

/**
 * NodeList = Static collection of HTML elements by id/class/element.
 *            Can be created by using querySlectorAll()
 *            Similar to an array, but no map/filter/reduce function. forEach :)
 *            Won't update to automatically reflect changes
 */

{/* <button class="myBtn">Btn 1</button>
<button class="myBtn">Btn 2</button>
<button class="myBtn">Btn 3</button>
<button class="myBtn">Btn 4</button> */}

// let buttons = document.querySelectorAll(".myBtn");

// buttons.forEach(button => {
//   button.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato";
//   });
// })

// // add an element

// const newBtn = document.createElement("button");
// newBtn.textContent = "Btn 5";
// newBtn.classList = "myBtn";
// document.body.appendChild(newBtn);// newBtn now isnt been added to the NodeList

// buttons = document.querySelectorAll(".myBtn");

/**
 * class List = Element property in JS used to interact with an element's list of classes (css classes).
 *              Allows you to make reusable classes for many elements across your webpage.
 * add()
 * remove()
 * toggle() //remove if present, add if not
 * replace(oldClass, newClass)
 * contains()
 */

// const myBtn = document.getElementById("myBtn");
// const myH1 = document.getElementById("myH1");

// myH1.classList.add("enabled"); 
// myBtn.classList.add("enabled"); //access the class
// myBtn.classList.remove("enabled");

// myBtn.addEventListener("mouseover", event => {
//   event.target.classList.add("hover");
// })
// myBtn.addEventListener("mouseout", event => {
//   event.target.classList.remove("hover");
// })
// myH1.addEventListener("click", event => {

//   if (event.target.classList.contains("disabled")) {
//     event.target.textContent += "><";
//   }
//   else {
//     event.target.classList.replace("enabled", "disabled");
//   }
// })

// myBtn.addEventListener("click", event => {

//   if (event.target.classList.contains("disabled")) {
//     event.target.textContent += "><";
//   }
//   else {
//     event.target.classList.replace("enabled", "disabled");
//   }
// })

{/* <button class="myBtns">My button1</button>
  <button class="myBtns">My button2</button>
  <button class="myBtns">My button3</button>
  <button class="myBtns">My button4</button> */}

// let buttons = document.querySelectorAll(".myBtns");

// buttons.forEach(button => {
//   button.classList.add("enabled");
// })

// buttons.forEach(button => {
//   button.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
//   });
// })

/**
 * Image Slider
 */

{/* <div class="slider">
<div class="slides">
  <img class="slide" src="img1.jpg" alt="Image #1">
  <img class="slide" src="img2.jpg" alt="Image #2">
  <img class="slide" src="img3.jpg" alt="Image #3">
</div>
<button class="prev" onclick="prevSlide()">&#10094</button>
<button class="next" onclick="nextSlide()">&#10095</button>
</div> */}

// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervalId = null;

// // initializeSlider();
// document.addEventListener("DOMContentLoaded", initializeSlider);

// function initializeSlider() {
//   slides[slideIndex].classList.add("displaySlide");
//   intervalId = setInterval(nextSlide, 5000);// return an interval id

// }

// function showSlide(index) {

//   if (index >= slides.length) {
//     slideIndex = 0;
//   } else if (index < 0) {
//     slideIndex = slides.length - 1;
//   }
//   slides.forEach(slide => {
//     slide.classList.remove("displaySlide");
//   })
//   slides[slideIndex].classList.add("displaySlide");
// }

// function prevSlide() {
//   clearInterval(intervalId);
//   slideIndex--;
//   showSlide(slideIndex);
// }

// function nextSlide() {
//   slideIndex++;
//   showSlide(slideIndex);
// }

/**
 * Callback Hell: callbacks nested within other callbacks.
 *                use promises & async/await to handle it
 */

/**
 * Promise = An object that manages asynchronous opperations. (querying a database, fetching a file)
 *           Wrap a Promise Object around {asynchronous code}
 *           "I promise to return a value"
 *           pending -> resolved or rejected
 *           new Promise((resolve, reject) => {asynchronous code})
 */

// function walkDog(callback) {
//   setTimeout(() => {
//       resolve("You walk the dog");
//       callback();
//     }, 1500);
// }

// function cleanKitchen(callback) {

//   return new Promise((resolve, reject => {
//     setTimeout(() => {
//       resolve("You clean the kitchen.");
//     }, 2000);
//   }));
// }

// function walkDog() {

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {

//       const dogWalked = true;

//       if (dogWalked) {
//         resolve("You walk the dog");
//       } else {
//         reject("You didn't walk the dog.")
//       }
//     }, 1500);
//   });
// }

// function cleanKitchen(callback) {

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {

//       const Clean = true;

//       if (Clean) {
//         resolve("You clean the kitchen.");
//       } else {
//         reject("You didn't clean the kitchen.")
//       }
//     }, 2000);
//   });
// }

// function takeOutTrash(callback) {

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const Trash = true;

//       if (Trash) {
//         resolve("You take out the trash.");
//       } else {
//         reject("You didn't take out the trash.")
//       }
//     }, 2000);
//   });
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("You finished all tasks!")})
//          .catch(error => console.error());

/**
 * Async/Await: Async : makes a function return a promise.
 *              Await : makes an async function wait for a promise.
 * 
 * Allows you to write asynchronous code in a synchronous manner.
 * Async doesn't have resolve or reject parameters. Everything 
 * after Await is placed in an event queue.
 * 
 * await depends on async
 */

// async function doChores() {
//   const walkDogResult = await walkDog();
//   console.log(walkDogResult);

//   const cleanKitchenResult = await cleanKitchen();
//   console.log(cleanKitchenResult);

//   const takeOutTrashResult = await takeOutTrash();
//   console.log(takeOutTrashResult);
// }

// doChores();

/**
 * JSON: JavaScript Object Notation data-interchange format.
 *       Used for exchanging data between a server and a web application.
 *       JSON files {key:value} OR [value1, value2, value3] or [{}, {}, {}]
 * 
 * JSON.stringify() : convert JS object to a JSON string.
 * JSON.parsh() : convert JS string to a JSON object.
 */

// const names = ["Spongebob", "Patric"];

// const jsonString = JSON.stringify(names);
// const jsonNames = `["Spongebob", "Patric"]`;

// const parsedData = JSON.parse(jsonNames);

// console.log(parsedData);

// fetch("people.json")
//       .then(response => response.json())
//       .then(values => values.forEach(value => console.log(value.name)))
//       .catch(error => console.error(error))

/**
 * fetch: function used for making HTTP requests to fetch resources(JSON style data, images, files).
 *        Simplifies asynchronous data fetching in JS and used for interacting with APIs to retrive
 *        and send data asynchronously over the web.
 * 
 * fetch(url,{options})
 */

async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    console.log(response);

    if (!response.ok) {
      throw new Error("Could not fetch resource.");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

  } catch (error) {
    console.error(error);
  }
}

// fetchData();

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//       if(!response.ok){
//         throw new Error("Could not fetch resource.");
//       }
//       return response.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error));