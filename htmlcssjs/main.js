// Output to Screen

//document.querySelector("h1").style.color = "blue"

// Rarely Used
//window.alert("Welcome to my JavaScript course")

// Bad Practice
//document.write("<h1>Hello World!</h1>");

console.log("Hala Madrid!")

//////////////////////////////  

// Output Error to the console
console.error("Error 404: Not Found!")

// Create tables in the console
console.table(["Sergio", "Isco", "HHH"]);

// Styling HTML elements
console.log("Hasta el Final Vamos Real!", "color: red; font-family: ")

// Code written in ES6 can be converted into legacy code that support any browser
var car = "Aston Martin";

console.log("The best car is: " + car);
console.log(`${car} is the best car ever!`)

//////////////////////////////

// Data Types
console.log(typeof "Ramos");                //String
console.log(typeof 1);                     //Number
console.log(typeof 90.99);                //Number
console.log(typeof [1, 2, 3, 4]);        //Array => Object
console.log(typeof {"MyName": "Ramos"}); //Object
console.log(typeof true);               //Boolean
console.log(typeof undefined);          //undefined
console.log(typeof null);              //object
console.log(typeof NaN);               //number

//////////////////////////////

// Declaring Variables
var user = "Ramos", age = 37;

console.log("Hala 'Madrid!'");
console.log('Hala "Madrid!"');
console.log("Hasta el \"Final\" Vamos Real!");  // Hasta el "Final" Vamos Real!
console.log("Hasta el \\Final \'Vamos\' Real!"); // Hasta el \Final 'Vamos' Real!

// Multiple Line Log
console.log("Hala \
Madrid \
Siempre!");

// New Line using \n
console.log("Hala\nMadrid"); 

//////////////////////////////

// Template Literals

let a = "Sergio";
let b = "Ramos";
let c = "Marca Un Gol!";

console.log(`${a} 
${b} ${c}`);

/* Sergio 
Ramos Marca Un Gol! */

// Benefits of using the backtick 
/* let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`; */

// Previous code when converted into legacy code .. looks aweful


// Type Coercion
console.log("10"+ 20 + true);  //1020true
console.log("50" + 100);       //150 